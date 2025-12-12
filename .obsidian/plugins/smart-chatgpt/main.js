var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.js
var main_exports = {};
__export(main_exports, {
  default: () => SmartChatgptPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// smart_chat_codeblock.js
var SmartChatCodeblock = class {
  constructor({ plugin, file, line_start, line_end, container_el, source, ctx }) {
    this.plugin = plugin;
    this.file = file;
    this.line_start = line_start;
    this.line_end = line_end;
    this.container_el = container_el;
    this.source = source;
    this.ctx = ctx;
    this._FALLBACK_URL = "https://smartconnections.app/?utm_source=chat-codeblock-fallback";
  }
  /**
   * Insert new url line after the start
   */
  async _insert_link_into_codeblock(url) {
    if (!this.file)
      return;
    const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
    const new_line = `chat-active:: ${timestamp_in_seconds} ${url}`;
    if (this.ctx && this.ctx.replaceCode) {
      this.ctx.replaceCode(new_line + "\n" + this.source);
      const { text, lineStart: line_start, lineEnd: line_end } = this.ctx.getSectionInfo(this.container_el) ?? {};
      const updated_source = text.split("\n").slice(line_start + 1, line_end).join("\n");
      this.source = updated_source;
      this.links = this._extract_links(this.source);
      this._build_dropdown();
      return;
    }
    await this.plugin.app.vault.process(this.file, (file_data) => {
      const [start, end] = this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0) {
        console.warn("Cannot find codeblock to insert link:", url);
        return file_data;
      }
      const lines = file_data.split("\n");
      lines.splice(start + 1, 0, new_line);
      return lines.join("\n");
    });
  }
  /**
   * Creates a dropdown for links, labeling done ones with "✓".
   */
  _build_dropdown(parent_el = null) {
    if (!this.dropdown_el) {
      if (!parent_el)
        throw new Error("Parent element is required to build dropdown");
      this.dropdown_el = parent_el.createEl("select", { cls: "sc-link-dropdown" });
      this.dropdown_el.addEventListener("change", () => {
        const new_link = this.dropdown_el.value;
        if (this.webview_el) {
          this.webview_el.setAttribute("src", new_link);
          this.current_url = new_link;
        }
      });
    }
    this.dropdown_el.empty();
    this.add_dropdown_options();
    this.dropdown_el.value = this.current_url || this.initial_link;
  }
  add_dropdown_options() {
    const new_chat = this.dropdown_el.createEl("option");
    new_chat.value = this._FALLBACK_URL;
    new_chat.textContent = "New chat";
    for (const link_obj of this.links) {
      const option_el = this.dropdown_el.createEl("option");
      option_el.value = link_obj.url;
      option_el.textContent = link_obj.done ? "\u2713 " + link_obj.url : link_obj.url;
    }
  }
  _init_navigation_events() {
    if (!this.webview_el)
      return;
    this.webview_el.addEventListener("did-finish-load", () => {
      this.webview_el.setAttribute("data-did-finish-load", "true");
    });
    this.webview_el.addEventListener("did-navigate", (ev) => {
      if (ev.url)
        this._debounce_handle_new_url(ev.url);
    });
    this.webview_el.addEventListener("did-navigate-in-page", (ev) => {
      if (ev.url)
        this._debounce_handle_new_url(ev.url);
    });
  }
  _debounce_handle_new_url(new_url) {
    clearTimeout(this._nav_timer);
    this._nav_timer = setTimeout(() => this._handle_new_url(new_url), 2e3);
  }
  async _handle_new_url(new_url) {
    const norm_new = this._normalize_url(new_url);
    const norm_last = this._normalize_url(this.last_detected_url);
    if (norm_new === norm_last)
      return;
    this.last_detected_url = new_url;
    this.current_url = new_url;
    if (this._is_thread_link(new_url)) {
      const link_to_save = this._normalize_url(new_url);
      const already_saved = await this._check_if_saved(link_to_save);
      if (!already_saved) {
        await this._insert_link_into_codeblock(link_to_save);
        this.plugin.notices.show(`Auto-saved new ${this.constructor.name} thread link.`);
      }
    }
    this._render_save_ui(new_url);
  }
  /**
   * Normalises a URL by stripping query / hash.
   * @param {string} url
   * @returns {string}
   */
  _normalize_url(url) {
    try {
      const u = new URL(url);
      u.search = "";
      u.hash = "";
      return u.toString();
    } catch (_) {
      return url;
    }
  }
  // Override this method in subclasses to extract links from the source based on platform-specific logic
  _extract_links(source) {
  }
};

// smart_chatgpt_codeblock.js
var SmartChatgptCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-chatgpt codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this._SUPPORTED_DOMAINS = [
      "chatgpt.com",
      "operator.chatgpt.com",
      "sora.com"
    ];
    this._GPT_THREAD_REGEX = /^\/g\/[^/]+\/c\/[a-f0-9-]+\/?$/i;
    this._SORA_TASK_REGEX = /^\/t\/[a-f0-9-]+\/?$/i;
    this._CODEX_TASK_REGEX = /^\/codex\/tasks\/[a-z0-9-_]+\/?$/i;
    this._CHAT_THREAD_REGEX = /^\/c\/[a-f0-9-]+\/?$/i;
    this._FALLBACK_URL = "https://chatgpt.com";
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
  }
  /**
   * Extract lines:
   *   chat-active:: <timestamp> <url>
   *   chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} codeblock_source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Called once by our codeblock processor to build the UI.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el?.createEl("div", { cls: "sc-top-row" });
    if (top_row_el) {
      this._build_dropdown(top_row_el);
      this.mark_done_button_el = top_row_el.createEl("button", {
        text: "Mark done",
        cls: "sc-mark-done-button sc-hidden"
        // default hidden
      });
      this.status_text_el = top_row_el.createEl("span", { cls: "sc-status-text" });
    }
    if (this.container_el) {
      this.webview_el = this.container_el.createEl("webview", {
        cls: "sc-webview"
      });
      this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
      this.webview_el.setAttribute("allowpopups", "");
      this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
      this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
      this._init_navigation_events();
      const webview_height = this.plugin.settings.iframe_height || 800;
      this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
      this.webview_el.setAttribute("src", this.initial_link);
      this.webview_el.addEventListener("dom-ready", () => {
        const factor = this.plugin.settings.zoom_factor || 1;
        this.webview_el.setZoomFactor(factor);
      });
      const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
      this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
      this.refresh_button_el.addEventListener("click", () => {
        if (this.webview_el) {
          this.webview_el.reload();
          this.plugin.notices.show("Webview reloaded.");
        }
      });
      this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in browser" });
      this.open_browser_button_el.addEventListener("click", () => {
        if (this.current_url && this.current_url.startsWith("http")) {
          window.open(this.current_url, "_blank");
        }
      });
      this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy link" });
      this.copy_link_button_el.addEventListener("click", () => {
        if (this.current_url?.startsWith("http")) {
          navigator.clipboard.writeText(this.current_url);
          this.plugin.notices.show("Copied current URL to clipboard.");
        }
      });
      this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
      this._grow_css_active = false;
      this.grow_contain_button_el.addEventListener("click", () => {
        if (this._grow_css_active) {
          this._removeGrowCss();
          this.grow_contain_button_el.textContent = "Grow";
          this._grow_css_active = false;
        } else {
          this._applyGrowCss();
          this.grow_contain_button_el.textContent = "Contain";
          this._grow_css_active = true;
        }
      });
    }
    this._render_save_ui(this.initial_link);
  }
  /**
   * Injects a <style id="sc-grow-css"> tag with the “grow” rules.
   */
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-chatgpt){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-chatgpt){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-chatgpt)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-chatgpt)>.cm-embed-block:has(.block-language-smart-chatgpt){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  /**
   * Removes the injected grow rules if present.
   */
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  /**
   * Reads the entire file, returns just the lines inside our codeblock.
   */
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  /**
   * Ensures lines with bare links become "chat-active:: " lines
   */
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    await this.plugin.app.vault.process(this.file, (file_data) => {
      const [start, end] = this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return file_data;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      return changed ? lines.join("\n") : file_data;
    });
  }
  add_dropdown_options() {
    const new_codex_opt = this.dropdown_el.createEl("option");
    new_codex_opt.value = "https://chatgpt.com/codex";
    new_codex_opt.textContent = "New Codex";
    const new_sora_opt = this.dropdown_el.createEl("option");
    new_sora_opt.value = "https://sora.com";
    new_sora_opt.textContent = "New Sora";
    const new_operator_opt = this.dropdown_el.createEl("option");
    new_operator_opt.value = "https://operator.chatgpt.com";
    new_operator_opt.textContent = "New Operator";
    super.add_dropdown_options();
  }
  /**
   * Checks if the provided URL is a recognized ChatGPT thread link.
   * Must be under one of the supported domains and must match a path pattern representing a thread/task.
   * Recognized patterns:
   *   - /c/: standard chat threads (also used for operator)
   *   - /g/{gpt-id}/c/{uuid}: custom GPT threads
   *   - /codex/tasks/: individual codex task pages
   *   - /t/: Sora tasks
   *
   * @param {string} url
   * @returns {boolean}
   */
  _is_thread_link(url) {
    try {
      const u = new URL(url);
      if (!this._SUPPORTED_DOMAINS.includes(u.hostname))
        return false;
      const path = u.pathname;
      return this._CHAT_THREAD_REGEX.test(path) || this._GPT_THREAD_REGEX.test(path) || this._CODEX_TASK_REGEX.test(path) || this._SORA_TASK_REGEX.test(path);
    } catch (e) {
      return false;
    }
  }
  /**
   * Show/hide the correct UI for "mark done" or "already done".
   * @param {string} url
   */
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a thread link (no save/done).");
      return;
    }
    const link_to_check = this._normalize_url(url);
    const is_done = await this._check_if_done(link_to_check);
    if (is_done) {
      this._set_status_text("This thread is marked done.");
      return;
    }
    this._show_mark_done_button();
    if (this.mark_done_button_el) {
      this.mark_done_button_el.onclick = async () => {
        await this._mark_thread_done_in_codeblock(link_to_check);
        this.plugin.notices.show("Marked thread as done.");
        this._render_save_ui(this.current_url);
      };
    }
  }
  _set_status_text(text) {
    if (this.status_text_el) {
      this.status_text_el.textContent = text;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.classList.remove("sc-hidden");
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.classList.add("sc-hidden");
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error checking if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file for done-check:", err);
      return false;
    }
  }
  /**
   * Mark "chat-active::" -> "chat-done::" for this url,
   * then navigate to next undone link if any
   */
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    let nextUrl = "";
    await this.plugin.app.vault.process(this.file, (file_data) => {
      const lines = file_data.split("\n");
      const [start, end] = this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0) {
        console.warn("Cannot find codeblock boundaries to mark done:", url);
        return file_data;
      }
      let doneLineIndex = -1;
      for (let i = start + 1; i < end; i++) {
        const trimmed = lines[i].trim();
        if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
          lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
          doneLineIndex = i;
          break;
        }
      }
      const updatedData = lines.join("\n");
      nextUrl = this._find_next_undone_url(updatedData, start, end, doneLineIndex) || "";
      return updatedData;
    });
    if (nextUrl) {
      this.webview_el?.setAttribute("src", nextUrl);
      this.current_url = nextUrl;
    } else {
      this.webview_el?.setAttribute("src", this._FALLBACK_URL);
      this.current_url = this._FALLBACK_URL;
    }
  }
  _find_next_undone_url(file_data, start, end, doneIndex) {
    if (doneIndex < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = doneIndex + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Finds lines of ```smart-chatgpt ... ```
   */
  _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const foundBlocks = [];
    let currentBlockStart = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (currentBlockStart === -1 && line.trim().startsWith("```smart-chatgpt")) {
        currentBlockStart = i;
      } else if (currentBlockStart >= 0 && line.trim().startsWith("```")) {
        foundBlocks.push({ start: currentBlockStart, end: i });
        currentBlockStart = -1;
      }
    }
    if (!foundBlocks.length) {
      return [this.line_start, this.line_end];
    }
    if (foundBlocks.length === 1) {
      return [foundBlocks[0].start, foundBlocks[0].end];
    }
    for (const block of foundBlocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [foundBlocks[0].start, foundBlocks[0].end];
  }
};

// smart_claude_codeblock.js
var SmartClaudeCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-claude codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    this._FALLBACK_URL = "https://claude.ai/chat/new";
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://claude.ai/chat/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  /**
   * Extract lines:
   *   chat-active:: <timestamp> <url>
   *   chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} codeblock_source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Called once to build the UI. We do a quick fix pass on the file first.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : "https://claude.ai/chat";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      if (this.webview_el) {
        this.webview_el.reload();
        this.plugin.notices.show("Webview reloaded.");
      }
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        window.open(this.current_url, "_blank");
      }
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      if (changed) {
        const new_data = lines.join("\n");
        await this.plugin.app.vault.modify(this.file, new_data);
      }
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  async _handle_new_url(new_url) {
    if (new_url.startsWith("https://www.claudeusercontent.com/")) {
      return;
    }
    await super._handle_new_url(new_url);
  }
  _is_thread_link(url) {
    return url.startsWith(this.THREAD_PREFIX) && !url.endsWith("/new");
  }
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a Claude conversation link (no save/done).");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This conversation is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked conversation as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(text) {
    if (this.status_text_el) {
      this.status_text_el.textContent = text;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "";
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "none";
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file to check if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file for done-check:", err);
      return false;
    }
  }
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0) {
      console.warn("Could not find codeblock boundaries to mark done:", url);
      return;
    }
    let done_line_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_line_index = i;
        break;
      }
    }
    const new_data = lines.join("\n");
    await this.plugin.app.vault.modify(this.file, new_data);
    const next_url = this._find_next_undone_url(new_data, start, end, done_line_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
      return;
    }
    this.webview_el.setAttribute("src", "https://claude.ai/chat");
    this.current_url = "https://claude.ai/chat";
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-claude){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-claude){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-claude)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-claude)>.cm-embed-block:has(.block-language-smart-claude){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Locates the triple-backtick boundaries for ```smart-claude``` in the file.
   * Returns [start_line, end_line] for the code fence lines themselves.
   */
  async _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const found_blocks = [];
    let current_block_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_block_start === -1 && line.trim().startsWith("```smart-claude")) {
        current_block_start = i;
      } else if (current_block_start >= 0 && line.trim().startsWith("```")) {
        found_blocks.push({ start: current_block_start, end: i });
        current_block_start = -1;
      }
    }
    if (!found_blocks.length) {
      return [this.line_start, this.line_end];
    }
    if (found_blocks.length === 1) {
      return [found_blocks[0].start, found_blocks[0].end];
    }
    for (const block of found_blocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [found_blocks[0].start, found_blocks[0].end];
  }
};

// smart_gemini_codeblock.js
var SmartGeminiCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-gemini codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    this._FALLBACK_URL = "https://gemini.google.com/app";
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://gemini.google.com/app/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  /**
   * Extract lines:
   *   chat-active:: <timestamp> <url>
   *   chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} codeblock_source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Called once by our codeblock processor to build the UI.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : "https://gemini.google.com/app/01b45b7563b53661";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      if (this.webview_el) {
        this.webview_el.reload();
        this.plugin.notices.show("Webview reloaded.");
      }
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        window.open(this.current_url, "_blank");
      }
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  /**
   * Reads the entire file, identifies our codeblock boundaries,
   * returns just the lines inside the codeblock as a single string.
   */
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  /**
   * Ensures lines with bare links are prefixed with "chat-active:: <timestamp> ".
   */
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      if (changed) {
        const new_data = lines.join("\n");
        await this.plugin.app.vault.modify(this.file, new_data);
      }
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  _is_thread_link(url) {
    return url.startsWith(this.THREAD_PREFIX);
  }
  /**
   * Show/hide the correct UI for marking a link as done, etc.
   * @param {string} url
   */
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a recognized Gemini conversation link.");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This conversation is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(text) {
    if (this.status_text_el) {
      this.status_text_el.textContent = text;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "";
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "none";
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url)
            return true;
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file to check if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url)
            return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file for done-check:", err);
      return false;
    }
  }
  /**
   * Mark "chat-active::" -> "chat-done::" for this url.
   * Then navigate to the next undone link if available, else fallback.
   */
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0) {
      console.warn("Could not find codeblock boundaries to mark done:", url);
      return;
    }
    let done_line_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_line_index = i;
        break;
      }
    }
    const new_data = lines.join("\n");
    await this.plugin.app.vault.modify(this.file, new_data);
    const next_url = this._find_next_undone_url(new_data, start, end, done_line_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
      return;
    }
    this.webview_el.setAttribute("src", "https://gemini.google.com/app/01b45b7563b53661");
    this.current_url = "https://gemini.google.com/app/01b45b7563b53661";
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-gemini){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-gemini){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-gemini)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-gemini)>.cm-embed-block:has(.block-language-smart-gemini){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  /**
   * Finds the next line after done_line_index that starts with "chat-active::",
   * parse out the URL, and return it. If none, returns null.
   */
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Locates the triple-backtick boundaries for ```smart-gemini``` in the file.
   * Returns [start_line, end_line].
   */
  async _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const found_blocks = [];
    let current_block_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_block_start === -1 && line.trim().startsWith("```smart-gemini")) {
        current_block_start = i;
      } else if (current_block_start >= 0 && line.trim().startsWith("```")) {
        found_blocks.push({ start: current_block_start, end: i });
        current_block_start = -1;
      }
    }
    if (!found_blocks.length) {
      return [this.line_start, this.line_end];
    }
    if (found_blocks.length === 1) {
      return [found_blocks[0].start, found_blocks[0].end];
    }
    for (const block of found_blocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [found_blocks[0].start, found_blocks[0].end];
  }
};

// smart_deepseek_codeblock.js
var SmartDeepseekCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-deepseek codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    const not_done = this.links.find((obj) => !obj.done);
    this._FALLBACK_URL = "https://chat.deepseek.com/";
    this.initial_link = not_done ? not_done.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://chat.deepseek.com/a/chat/s/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  /**
   * Extract lines:
   *   chat-active:: <timestamp> <url>
   *   chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} codeblock_source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possible_url = tokens[tokens.length - 1];
        if (possible_url.startsWith("http")) {
          result.push({ url: possible_url, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possible_url = tokens[tokens.length - 1];
        if (possible_url.startsWith("http")) {
          result.push({ url: possible_url, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Called once by our codeblock processor to build the UI.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : "https://chat.deepseek.com/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      if (this.webview_el) {
        this.webview_el.reload();
        this.plugin.notices.show("Webview reloaded.");
      }
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        window.open(this.current_url, "_blank");
      }
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  /**
   * Reads the codeblock lines from the file. Used after prefixing lines,
   * to see the updated code.
   */
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  /**
   * Ensures that any line with at least one link but which does not start
   * with "chat-active:: " or "chat-done:: " is prefixed with "chat-active:: ".
   * Then writes changes back to the file if needed.
   */
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      if (changed) {
        const new_data = lines.join("\n");
        await this.plugin.app.vault.modify(this.file, new_data);
      }
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  _is_thread_link(url) {
    return url.startsWith(this.THREAD_PREFIX);
  }
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a recognized DeepSeek thread link.");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This thread is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked thread as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(text) {
    if (this.status_text_el) {
      this.status_text_el.textContent = text;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "";
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "none";
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const last_token = tokens[tokens.length - 1];
          if (last_token === url) {
            return true;
          }
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file to check if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const last_token = tokens[tokens.length - 1];
          if (last_token === url) {
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file for done-check:", err);
      return false;
    }
  }
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0) {
      console.warn("Could not find codeblock boundaries to mark done:", url);
      return;
    }
    let done_line_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_line_index = i;
        break;
      }
    }
    const new_data = lines.join("\n");
    await this.plugin.app.vault.modify(this.file, new_data);
    const next_url = this._find_next_undone_url(new_data, start, end, done_line_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
      return;
    }
    this.webview_el.setAttribute("src", "https://chat.deepseek.com/");
    this.current_url = "https://chat.deepseek.com/";
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-deepseek){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-deepseek){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-deepseek)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-deepseek)>.cm-embed-block:has(.block-language-smart-deepseek){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Locates the triple-backtick boundaries for ```smart-deepseek``` in the file.
   * Returns [start_line, end_line] for the code fence lines themselves.
   */
  async _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const found_blocks = [];
    let current_block_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_block_start === -1 && line.trim().startsWith("```smart-deepseek")) {
        current_block_start = i;
      } else if (current_block_start >= 0 && line.trim().startsWith("```")) {
        found_blocks.push({ start: current_block_start, end: i });
        current_block_start = -1;
      }
    }
    if (!found_blocks.length) {
      return [this.line_start, this.line_end];
    }
    if (found_blocks.length === 1) {
      return [found_blocks[0].start, found_blocks[0].end];
    }
    for (const block of found_blocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [found_blocks[0].start, found_blocks[0].end];
  }
};

// smart_perplexity_codeblock.js
var SmartPerplexityCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-perplexity codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    this._FALLBACK_URL = "https://www.perplexity.ai/";
    const not_done_obj = this.links.find((l) => !l.done);
    this.initial_link = not_done_obj ? not_done_obj.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://www.perplexity.ai/search/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  /**
   * Extract links from lines:
   * - chat-active:: <timestamp> <url>
   * - chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(source) {
    const lines = source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Main UI build. Called once by the codeblock processor.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_obj = this.links.find((l) => !l.done);
    this.initial_link = not_done_obj ? not_done_obj.url : "https://www.perplexity.ai/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      this.webview_el.reload();
      this.plugin.notices.show("Webview reloaded.");
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        window.open(this.current_url, "_blank");
      }
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  /**
   * Re-read codeblock lines from the file, in case we changed them (prefixing).
   */
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  /**
   * Ensure any link-only line is prefixed with chat-active::
   */
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      if (changed) {
        const new_data = lines.join("\n");
        await this.plugin.app.vault.modify(this.file, new_data);
      }
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  /**
   * Returns true if the URL starts with the search prefix and does NOT end with '/new'.
   * This ensures 'https://www.perplexity.ai/search/new' is *not* treated as a valid thread link.
   * @param {string} url
   */
  _is_thread_link(url) {
    const uri = new URL(url);
    return uri.hostname === "www.perplexity.ai" && uri.pathname.startsWith("/search/") && !uri.pathname.endsWith("/new");
  }
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a recognized Perplexity search link.");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This search is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked Perplexity search as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(txt) {
    if (this.status_text_el) {
      this.status_text_el.textContent = txt;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "";
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "none";
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error checking if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url) {
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      console.error("Error checking if link is done:", err);
      return false;
    }
  }
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0) {
      console.warn("Could not find codeblock boundaries to mark done:", url);
      return;
    }
    let done_line_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_line_index = i;
        break;
      }
    }
    const new_data = lines.join("\n");
    await this.plugin.app.vault.modify(this.file, new_data);
    const next_url = this._find_next_undone_url(new_data, start, end, done_line_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
      return;
    }
    this.webview_el.setAttribute("src", "https://www.perplexity.ai/");
    this.current_url = "https://www.perplexity.ai/";
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-perplexity){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-perplexity){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-perplexity)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-perplexity)>.cm-embed-block:has(.block-language-smart-perplexity){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Locates the ```smart-perplexity``` code fence lines in the file.
   */
  async _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const found_blocks = [];
    let current_block_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_block_start === -1 && line.trim().startsWith("```smart-perplexity")) {
        current_block_start = i;
      } else if (current_block_start >= 0 && line.trim().startsWith("```")) {
        found_blocks.push({ start: current_block_start, end: i });
        current_block_start = -1;
      }
    }
    if (!found_blocks.length) {
      return [this.line_start, this.line_end];
    }
    if (found_blocks.length === 1) {
      return [found_blocks[0].start, found_blocks[0].end];
    }
    for (const block of found_blocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [found_blocks[0].start, found_blocks[0].end];
  }
};

// smart_grok_codeblock.js
var SmartGrokCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin – Parent plugin instance.
   * @param {import('obsidian').TFile} options.file – File containing the code‑block.
   * @param {number} options.line_start – Start line of the code‑block.
   * @param {number} options.line_end – End line of the code‑block.
   * @param {HTMLElement} options.container_el – Element where this UI renders.
   * @param {string} options.source – Raw text inside the ```smart-grok code‑block.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    this._FALLBACK_URL = "https://grok.com/chat";
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://grok.com/chat/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http"))
          result.push({ url: possibleUrl, done: true });
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http"))
          result.push({ url: possibleUrl, done: false });
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found)
        result.push({ url: f, done: false });
    }
    return result;
  }
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source)
      this.source = updated_source;
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : "https://grok.com/chat";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute(
      "useragent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36"
    );
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      this.webview_el.reload();
      this.plugin.notices.show("Web\u2011view reloaded.");
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url.startsWith("http"))
        window.open(this.current_url, "_blank");
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end <= start)
        return null;
      return raw_data.split("\n").slice(start + 1, end).join("\n");
    } catch (err) {
      console.error("Error reading file for updated code\u2011block content:", err);
      return null;
    }
  }
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: "))
          continue;
        if ((line.match(this.link_regex) || []).length > 0) {
          const ts = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${ts} ${trimmed}`;
          changed = true;
        }
      }
      if (changed)
        await this.plugin.app.vault.modify(this.file, lines.join("\n"));
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const blocks = [];
    let current_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_start === -1 && line.trim().startsWith("```smart-grok"))
        current_start = i;
      else if (current_start >= 0 && line.trim().startsWith("```")) {
        blocks.push({ start: current_start, end: i });
        current_start = -1;
      }
    }
    if (!blocks.length)
      return [this.line_start, this.line_end];
    if (blocks.length === 1)
      return [blocks[0].start, blocks[0].end];
    for (const b of blocks)
      if (b.start <= this.line_start && b.end >= this.line_end)
        return [b.start, b.end];
    return [blocks[0].start, blocks[0].end];
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-grok){max-width:none!important;}
.cm-content.cm-lineWrapping:has(.block-language-smart-grok){max-width:none!important;}
.cm-content.cm-lineWrapping:has(.block-language-smart-grok)>div{width:var(--file-line-width);max-width:none!important;}
.cm-content.cm-lineWrapping:has(.block-language-smart-grok)>.cm-embed-block:has(.block-language-smart-grok){width:auto;}
`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  _is_thread_link(url) {
    return url.startsWith(this.THREAD_PREFIX) && url.length > this.THREAD_PREFIX.length;
  }
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a Grok conversation link (no save/done).");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This conversation is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked conversation as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(text) {
    if (this.status_text_el)
      this.status_text_el.textContent = text;
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el)
      this.mark_done_button_el.style.display = "";
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el)
      this.mark_done_button_el.style.display = "none";
  }
  /* ─── Persistence checks & updates ─────────────────────────────────────── */
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const lastToken = trimmed.split(/\s+/).pop();
          if (lastToken === url)
            return true;
        } else if (line.includes(url))
          return true;
      }
      return false;
    } catch (err) {
      console.error("Error checking if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const lastToken = trimmed.split(/\s+/).pop();
          if (lastToken === url)
            return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error checking if link is done:", err);
      return false;
    }
  }
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0)
      return;
    let done_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_index = i;
        break;
      }
    }
    await this.plugin.app.vault.modify(this.file, lines.join("\n"));
    const next_url = this._find_next_undone_url(lines.join("\n"), start, end, done_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
    } else {
      this.webview_el.setAttribute("src", "https://grok.com/chat");
      this.current_url = "https://grok.com/chat";
    }
  }
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        return trimmed.split(/\s+/).pop();
      }
    }
    return null;
  }
};

// smart_aistudio_codeblock.js
var SmartAistudioCodeblock = class extends SmartChatCodeblock {
  /**
   * @param {Object} options
   * @param {import('obsidian').Plugin} options.plugin - The parent plugin instance.
   * @param {import('obsidian').TFile} options.file - The file containing the codeblock.
   * @param {number} options.line_start - The start line of the codeblock.
   * @param {number} options.line_end - The end line of the codeblock.
   * @param {HTMLElement} options.container_el - The container where this codeblock UI is rendered.
   * @param {string} options.source - The raw text inside the ```smart-aistudio codeblock.
   */
  constructor(opts = {}) {
    super(opts);
    this.link_regex = /(https?:\/\/[^\s]+)/g;
    this.links = this._extract_links(this.source);
    this._FALLBACK_URL = "https://aistudio.google.com/prompts/new_chat";
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : this._FALLBACK_URL;
    this.THREAD_PREFIX = "https://aistudio.google.com/prompts/";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    this.dropdown_el = null;
    this.mark_done_button_el = null;
    this.status_text_el = null;
    this.webview_el = null;
    this.refresh_button_el = null;
    this.open_browser_button_el = null;
    this.copy_link_button_el = null;
    this.grow_contain_button_el = null;
  }
  /**
   * Extract lines:
   *   chat-active:: <timestamp> <url>
   *   chat-done:: <timestamp> <url>
   * or fallback to any link in the codeblock.
   *
   * @param {string} codeblock_source
   * @returns {Array<{ url: string, done: boolean }>}
   */
  _extract_links(codeblock_source) {
    const lines = codeblock_source.split("\n");
    const result = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("chat-done:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: true });
        }
        continue;
      }
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        const possibleUrl = tokens[tokens.length - 1];
        if (possibleUrl.startsWith("http")) {
          result.push({ url: possibleUrl, done: false });
        }
        continue;
      }
      const found = line.match(this.link_regex) || [];
      for (const f of found) {
        result.push({ url: f, done: false });
      }
    }
    return result;
  }
  /**
   * Called once by our codeblock processor to build the UI.
   */
  async build() {
    await this._prefix_missing_lines_in_file();
    const updated_source = await this._get_codeblock_source_from_file();
    if (updated_source) {
      this.source = updated_source;
    }
    this.links = this._extract_links(this.source);
    const not_done_link_obj = this.links.find((obj) => !obj.done);
    this.initial_link = not_done_link_obj ? not_done_link_obj.url : "https://aistudio.google.com/prompts/new_chat";
    this.last_detected_url = this.initial_link;
    this.current_url = this.initial_link;
    const top_row_el = this.container_el.createEl("div", { cls: "sc-top-row" });
    top_row_el.style.display = "flex";
    top_row_el.style.gap = "8px";
    top_row_el.style.marginBottom = "8px";
    top_row_el.style.alignItems = "center";
    this._build_dropdown(top_row_el);
    this.mark_done_button_el = top_row_el.createEl("button", { text: "Mark Done" });
    this.mark_done_button_el.style.display = "none";
    this.status_text_el = top_row_el.createEl("span", { text: "" });
    this.status_text_el.style.marginLeft = "auto";
    const webview_height = this.plugin.settings.iframe_height || 800;
    this.webview_el = this.container_el.createEl("webview", { cls: "sc-webview" });
    this.webview_el.setAttribute("partition", this.plugin.app.getWebviewPartition());
    this.webview_el.setAttribute("allowpopups", "");
    this.webview_el.setAttribute("useragent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.191 Safari/537.36");
    this.webview_el.setAttribute("webpreferences", "nativeWindowOpen=yes, contextIsolation=yes");
    this.webview_el.style.setProperty("--sc-webview-height", webview_height + "px");
    this.webview_el.setAttribute("src", this.initial_link);
    this.webview_el.addEventListener("dom-ready", () => {
      const factor = this.plugin.settings.zoom_factor || 1;
      this.webview_el.setZoomFactor(factor);
    });
    this._init_navigation_events();
    const bottom_row_el = this.container_el.createEl("div", { cls: "sc-bottom-row" });
    bottom_row_el.style.display = "flex";
    bottom_row_el.style.gap = "8px";
    bottom_row_el.style.marginTop = "8px";
    this.refresh_button_el = bottom_row_el.createEl("button", { text: "Refresh" });
    this.refresh_button_el.addEventListener("click", () => {
      if (this.webview_el) {
        this.webview_el.reload();
        this.plugin.notices.show("Webview reloaded.");
      }
    });
    this.open_browser_button_el = bottom_row_el.createEl("button", { text: "Open in Browser" });
    this.open_browser_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        window.open(this.current_url, "_blank");
      }
    });
    this.copy_link_button_el = bottom_row_el.createEl("button", { text: "Copy Link" });
    this.copy_link_button_el.addEventListener("click", () => {
      if (this.current_url && this.current_url.startsWith("http")) {
        navigator.clipboard.writeText(this.current_url);
        this.plugin.notices.show("Copied current URL to clipboard.");
      }
    });
    this.grow_contain_button_el = bottom_row_el.createEl("button", { text: "Grow" });
    this._grow_css_active = false;
    this.grow_contain_button_el.addEventListener("click", () => {
      if (this._grow_css_active) {
        this._removeGrowCss();
        this.grow_contain_button_el.textContent = "Grow";
        this._grow_css_active = false;
      } else {
        this._applyGrowCss();
        this.grow_contain_button_el.textContent = "Contain";
        this._grow_css_active = true;
      }
    });
    this._render_save_ui(this.initial_link);
  }
  /**
   * Reads the entire file, identifies our codeblock boundaries,
   * returns just the lines inside the codeblock as a single string.
   */
  async _get_codeblock_source_from_file() {
    if (!this.file)
      return null;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return null;
      const lines = raw_data.split("\n").slice(start + 1, end);
      return lines.join("\n");
    } catch (err) {
      console.error("Error reading file for updated codeblock content:", err);
      return null;
    }
  }
  /**
   * Ensures lines with bare links are prefixed with "chat-active:: <timestamp> ".
   */
  async _prefix_missing_lines_in_file() {
    if (!this.file)
      return;
    try {
      const file_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(file_data);
      if (start < 0 || end < 0)
        return;
      const lines = file_data.split("\n");
      let changed = false;
      for (let i = start + 1; i < end; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          continue;
        }
        const found = line.match(this.link_regex) || [];
        if (found.length > 0) {
          const timestamp_in_seconds = Math.floor(Date.now() / 1e3);
          lines[i] = `chat-active:: ${timestamp_in_seconds} ${trimmed}`;
          changed = true;
        }
      }
      if (changed) {
        const new_data = lines.join("\n");
        await this.plugin.app.vault.modify(this.file, new_data);
      }
    } catch (err) {
      console.error("Error prefixing lines in file:", err);
    }
  }
  _is_thread_link(url) {
    return url.startsWith(this.THREAD_PREFIX) && !url.endsWith("/new_chat");
  }
  /**
   * Show/hide the correct UI for marking a link as done, etc.
   * @param {string} url
   */
  async _render_save_ui(url) {
    this._set_status_text("");
    this._hide_mark_done_button();
    if (!url.startsWith("http")) {
      this._set_status_text("No valid link to save.");
      return;
    }
    if (!this._is_thread_link(url)) {
      this._set_status_text("Not a recognized AI Studio conversation link.");
      return;
    }
    const is_done = await this._check_if_done(url);
    if (is_done) {
      this._set_status_text("This conversation is marked done.");
      return;
    }
    this._show_mark_done_button();
    this.mark_done_button_el.onclick = async () => {
      await this._mark_thread_done_in_codeblock(url);
      this.plugin.notices.show("Marked as done.");
      this._render_save_ui(this.current_url);
    };
  }
  _set_status_text(text) {
    if (this.status_text_el) {
      this.status_text_el.textContent = text;
    }
  }
  _show_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "";
    }
  }
  _hide_mark_done_button() {
    if (this.mark_done_button_el) {
      this.mark_done_button_el.style.display = "none";
    }
  }
  async _check_if_saved(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-active:: ") || trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url)
            return true;
        } else if (line.includes(url)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file to check if link is saved:", err);
      return false;
    }
  }
  async _check_if_done(url) {
    if (!this.file)
      return false;
    try {
      const raw_data = await this.plugin.app.vault.read(this.file);
      const [start, end] = await this._find_codeblock_boundaries(raw_data);
      if (start < 0 || end < 0 || end <= start)
        return false;
      const lines = raw_data.split("\n").slice(start + 1, end);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("chat-done:: ")) {
          const tokens = trimmed.split(/\s+/);
          const lastToken = tokens[tokens.length - 1];
          if (lastToken === url)
            return true;
        }
      }
      return false;
    } catch (err) {
      console.error("Error reading file for done-check:", err);
      return false;
    }
  }
  /**
   * Mark "chat-active::" -> "chat-done::" for this url.
   * Then navigate to the next undone link if available, else fallback.
   */
  async _mark_thread_done_in_codeblock(url) {
    if (!this.file)
      return;
    const fresh_data = await this.plugin.app.vault.read(this.file);
    const lines = fresh_data.split("\n");
    const [start, end] = await this._find_codeblock_boundaries(fresh_data);
    if (start < 0 || end < 0) {
      console.warn("Could not find codeblock boundaries to mark done:", url);
      return;
    }
    let done_line_index = -1;
    for (let i = start + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ") && trimmed.includes(url)) {
        lines[i] = lines[i].replace("chat-active:: ", "chat-done:: ");
        done_line_index = i;
        break;
      }
    }
    const new_data = lines.join("\n");
    await this.plugin.app.vault.modify(this.file, new_data);
    const next_url = this._find_next_undone_url(new_data, start, end, done_line_index);
    if (next_url) {
      this.webview_el.setAttribute("src", next_url);
      this.current_url = next_url;
      return;
    }
    this.webview_el.setAttribute("src", "https://aistudio.google.com/prompts/new_chat");
    this.current_url = "https://aistudio.google.com/prompts/new_chat";
  }
  _applyGrowCss() {
    if (document.getElementById("sc-grow-css"))
      return;
    const css = `
.markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer:has(.block-language-smart-aistudio){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-aistudio){
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-aistudio)>div{
  width:var(--file-line-width);
  max-width:none!important;
}
.cm-content.cm-lineWrapping:has(.block-language-smart-aistudio)>.cm-embed-block:has(.block-language-smart-aistudio){
  width:auto;
}`.trim();
    const styleEl = document.createElement("style");
    styleEl.id = "sc-grow-css";
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }
  _removeGrowCss() {
    const styleEl = document.getElementById("sc-grow-css");
    if (styleEl)
      styleEl.remove();
  }
  /**
   * Finds the next line after done_line_index that starts with "chat-active::",
   * parse out the URL, and return it. If none, returns null.
   */
  _find_next_undone_url(file_data, start, end, done_index) {
    if (done_index < 0)
      return null;
    const lines = file_data.split("\n");
    for (let i = done_index + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("chat-active:: ")) {
        const tokens = trimmed.split(/\s+/);
        return tokens[tokens.length - 1];
      }
    }
    return null;
  }
  /**
   * Locates the triple-backtick boundaries for ```smart-aistudio``` in the file.
   * Returns [start_line, end_line].
   */
  async _find_codeblock_boundaries(file_data) {
    if (!file_data)
      return [this.line_start, this.line_end];
    const lines = file_data.split("\n");
    const found_blocks = [];
    let current_block_start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (current_block_start === -1 && line.trim().startsWith("```smart-aistudio")) {
        current_block_start = i;
      } else if (current_block_start >= 0 && line.trim().startsWith("```")) {
        found_blocks.push({ start: current_block_start, end: i });
        current_block_start = -1;
      }
    }
    if (!found_blocks.length) {
      return [this.line_start, this.line_end];
    }
    if (found_blocks.length === 1) {
      return [found_blocks[0].start, found_blocks[0].end];
    }
    for (const block of found_blocks) {
      const { start, end } = block;
      if (start <= this.line_start && end >= this.line_end) {
        return [start, end];
      }
    }
    return [found_blocks[0].start, found_blocks[0].end];
  }
};

// main.js
var DEFAULT_SETTINGS = {
  iframe_height: 800,
  zoom_factor: 0.9
};
var SmartChatgptSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Height (px)").setDesc("Iframe height for embedded webviews.").addText((txt) => {
      txt.setPlaceholder("800").setValue(String(this.plugin.settings.iframe_height)).onChange(async (v) => {
        const n = parseInt(v, 10);
        if (!isNaN(n)) {
          this.plugin.settings.iframe_height = n;
          await this.plugin.saveSettings();
        }
      });
    });
    new import_obsidian.Setting(containerEl).setName("Zoom").setDesc("Zoom factor for all webviews.").addSlider((slider) => {
      slider.setLimits(0.1, 2, 0.1).setValue(this.plugin.settings.zoom_factor).onChange(async (v) => {
        this.plugin.settings.zoom_factor = v;
        await this.plugin.saveSettings();
        this.display();
      });
    }).addExtraButton((btn) => {
      btn.setIcon("reset").setTooltip("Reset zoom").onClick(async () => {
        this.plugin.settings.zoom_factor = 1;
        await this.plugin.saveSettings();
        this.display();
      });
    }).then((setting) => {
      setting.settingEl.createEl("div", {
        text: `Current: ${this.plugin.settings.zoom_factor.toFixed(1)}`
      }).style.marginTop = "5px";
    });
  }
};
var SmartChatgptPlugin = class extends import_obsidian.Plugin {
  /** @type {SmartChatgptPluginSettings} */
  settings = DEFAULT_SETTINGS;
  async onload() {
    this.notices = { show(msg) {
      new import_obsidian.Notice(msg);
    } };
    await this.loadSettings();
    await this.disable_conflicting_plugins();
    this.register_all();
    this.addSettingTab(new SmartChatgptSettingTab(this.app, this));
  }
  async disable_conflicting_plugins() {
    const conflictIds = [
      "smart-claude",
      "smart-gemini",
      "smart-deepseek",
      "smart-perplexity",
      "smart-grok",
      "smart-aistudio"
    ];
    const enabled = this.app.plugins.enabledPlugins ?? /* @__PURE__ */ new Set();
    for (const id of conflictIds) {
      if (enabled.has(id)) {
        try {
          await this.app.plugins.disablePlugin(id);
          this.notices.show(`Disabled conflicting plugin: ${id}`);
        } catch (e) {
          console.error(`Failed disabling ${id}:`, e);
        }
      }
    }
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  get_session_partition() {
    return this.app.getWebviewPartition();
  }
  register_all() {
    this.register_commands();
    this.register_dynamic_codeblocks();
  }
  register_commands() {
    const cmds = [
      ["smart-chatgpt", "OpenAI ChatGPT"],
      ["smart-claude", "Anthropic Claude"],
      ["smart-gemini", "Google Gemini"],
      ["smart-deepseek", "DeepSeek"],
      ["smart-perplexity", "Perplexity"],
      ["smart-grok", "Grok"],
      ["smart-aistudio", "Google AI Studio"]
    ];
    cmds.forEach(([lang, label]) => {
      this.addCommand({
        id: `insert-${lang}-codeblock`,
        name: `Insert ${label} codeblock`,
        editorCallback: (ed) => {
          ed.replaceSelection(`\`\`\`${lang}
\`\`\`
`);
        }
      });
    });
  }
  register_dynamic_codeblocks() {
    const mapping = {
      "smart-chatgpt": SmartChatgptCodeblock,
      "smart-claude": SmartClaudeCodeblock,
      "smart-gemini": SmartGeminiCodeblock,
      "smart-deepseek": SmartDeepseekCodeblock,
      "smart-perplexity": SmartPerplexityCodeblock,
      "smart-grok": SmartGrokCodeblock,
      "smart-aistudio": SmartAistudioCodeblock
    };
    const makeProcessor = (Cls) => async (source, el, ctx) => {
      const container = el.createEl("div", { cls: "sc-dynamic-codeblock" });
      const info = ctx.getSectionInfo(el);
      if (!info) {
        container.createEl("div", { text: "Unable to get codeblock info." });
        return;
      }
      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!(file instanceof import_obsidian.TFile)) {
        container.createEl("div", { text: "Unable to locate file." });
        return;
      }
      const cb = new Cls({
        plugin: this,
        file,
        line_start: info.lineStart,
        line_end: info.lineEnd,
        container_el: container,
        source,
        ctx
      });
      cb.build();
    };
    Object.entries(mapping).forEach(([lang, Cls]) => {
      if (this.registerMarkdownCodeBlockProcessor)
        this.registerMarkdownCodeBlockProcessor(lang, makeProcessor(Cls));
    });
  }
};


/* nosourcemap */