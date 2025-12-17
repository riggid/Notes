---
dg-publish: true
dg-home: true
---
```dataviewjs
dv.container.id = "dashboard-grid";
// --- Configuration ---
const CONFIG = {
    // Folders to hide
    exclude: ["_templates", "copilot", ".", "Attachments", ".obsidian", ".git", ".smart-env", "Excalidraw"], 
    // Icons for specific folders/files
    icons: {
        "Projects": "🚀",
        "Notes": "📝",
        "Quantum Computing": "⚛️",
        "PESU IO": "💻",
        "Semester 1": "📚",
        "Electrical": "⚡",
        "Environmental Studies and Life Science": "🌿",
        "Mathematics": "📐",
        "Mechanical": "⚙️",
        "Physics": "🌌",
        "Python": "🐍",
        "Default": "📂",
        "File": "📄"
    }
};
// --- Main Logic (Scans Root Directory) ---
const root = dv.app.vault.getRoot();
const items = root.children.sort((a, b) => a.name.localeCompare(b.name));
for (const folder of items) {
    // Only process folders
    if (!folder.children) continue;
    // Skip excluded folders
    if (CONFIG.exclude.some(ex => folder.name === ex || folder.name.startsWith("."))) continue;
    // Create Card
    const card = createCard(folder.name, CONFIG.icons[folder.name] || CONFIG.icons.Default);
    const container = card.querySelector(".subject-button-container");
    
    let hasLinks = false;
    const subItems = folder.children.sort((a, b) => a.name.localeCompare(b.name));
    for (const sub of subItems) {
        let linkPath = sub.path;
        let displayName = sub.name.replace(".md", "");
        // Try to find specific icon, otherwise undefined
        let icon = CONFIG.icons[displayName];

        // Logic: if it's a sub-folder, try to find a "Main Note" inside it
        if (sub.children) {
            // If no specific icon found, use the Default folder icon
            if (!icon) icon = CONFIG.icons.Default;
            
            const mainNote = dv.pages(`"${sub.path}"`)
                .sort(p => p.file.name === sub.name ? -1 : 1) // Prioritize exact name match
                .first();
            
            if (mainNote) {
                linkPath = mainNote.file.path;
            } else {
                continue; // Skip empty folders
            }
        } else {
            // It's a file. If no specific icon, use File icon
            if (!icon) icon = CONFIG.icons.File;
        }

        container.appendChild(createButton(displayName, icon, linkPath));
        hasLinks = true;
    }
    if (!hasLinks) {
        const emptyMsg = document.createElement("span");
        emptyMsg.innerText = "_No contents found._";
        emptyMsg.style.color = "var(--ctp-subtext0)";
        emptyMsg.style.fontStyle = "italic";
        container.appendChild(emptyMsg);
    }
    
    dv.container.appendChild(card);
}
// --- Helper Functions ---
function createCard(title, icon) {
    const card = document.createElement("div");
    card.className = "semester-card";
    
    const h2 = document.createElement("h2");
    h2.className = "semester-title";
    h2.innerHTML = `<span class="title-icon">${icon}</span> ${title}`;
    
    const div = document.createElement("div");
    div.className = "subject-button-container";
    
    card.appendChild(h2);
    card.appendChild(div);
    return card;
}
function createButton(text, icon, path) {
    const link = document.createElement("a");
    link.className = "subject-button";
    
    // Web-friendly HREF: Slugify path (Matches Electrical.md logic)
    // This ensures consistency with the working Unit navigation
    let cleanPath = path.replace(".md", "");
    let segments = cleanPath.split("/");
    let slugSegments = segments.map(s => s.toLowerCase().replace(/[\s&]+/g, '-').replace(/[^a-z0-9-]/g, ''));
    let webPath = "/" + slugSegments.join("/");
    link.href = webPath;
    
    link.innerHTML = `<span class="button-icon">${icon}</span> ${text}`;
    
    link.addEventListener("click", (e) => {
        const appInstance = dv.app || app;
        if (typeof appInstance !== "undefined" && appInstance.workspace) {
            e.preventDefault();
            appInstance.workspace.openLinkText(path, "", false);
        }
    });

    return link;
}
```
