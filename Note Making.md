---
dg-publish: true
---

*   `[Subject Name]` should be capitalized (e.g., `Physics`, `Mathematics`).
*   `Unit X` should be formatted as `Unit 1`, `Unit 2`, etc.

### 1.2 File Naming:
Within each `Unit X/` folder, the following three Markdown (`.md`) files are mandatory and must be named exactly as specified:
*   `Core Notes.md`: This file will contain all the core theoretical content, definitions, concepts, principles, detailed explanations, and step-by-step derivations for the unit.
*   `Examples.md`: This file will house all step-by-step solutions to numerical and conceptual example problems relevant to the unit.
*   `Questions.md`: This file will provide lists of concise conceptual questions related to the unit, each accompanied by a brief summary answer or a direct reference to the detailed explanation in `Core Notes.md`.

---

## 2. Navigation Links

Consistent and clear navigation must be implemented in every generated Markdown file.

### 2.1 Back to Subject Index:
Every Markdown file (`Core Notes.md`, `Examples.md`, `Questions.md`) must begin with a link pointing back to the main subject index file.
*   **Format**: `# [Back](../../[Subject Name].md)`
*   **Placement**: This must be the very first line of the file.
*   **Example (from a Unit 3 Physics file)**: `# [Back](../../Physics.md)`
    *(Note: The number of `../` specifies the relative path depth and should be correctly set based on the file's location within the hierarchy; `../../` is typical for files inside a `Unit X/` folder.)*

### 2.2 Internal Unit Navigation:
Immediately following the "Back to Subject Index" link and a horizontal rule (`***`), every Markdown file within a specific `Unit X/` folder must include a series of direct links to the other two files within that same unit.
*   **Format**: `[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Questions](Questions.md)`
*   **Placement**: This line must appear directly after the `***` horizontal rule.

---

## 3. Overall Formatting and Presentation Style

Strict adherence to Markdown syntax, proper LaTeX for equations, and a clear, readable presentation is required.

### 3.1 Headings:
*   **Main Unit Title**: Single hash (`#`) for the main unit title.
    *   Example: `# Unit 3: Quantum Mechanical Treatment of Electron Transport and Magnetic Materials`
*   **Main Sections**: Double hash (`##`) for major sections within the unit. These should be numbered sequentially.
    *   Example: `## 1. Classical Free Electron Theory (CFET)`
*   **Subsections**: Triple hash (`###`) for subsections. These should also be numbered sequentially relative to their parent section.
    *   Example: `### 1.1 Review: Electrical Conduction in CFET`
*   **Sub-subsections**: Quadruple hash (`####`) for sub-subsections. These continue the sequential numbering.
    *   Example: `#### 1.1.1 Basic Assumptions of CFET`
*   **Blank Line Requirement**: All headings must be followed by a blank line to ensure proper rendering and readability.

### 3.2 Bolding:
*   **Key Terms & Concepts**: Use `**bold**` for the *first mention* of important definitions, theories, and concepts. This helps readers quickly identify crucial information.
    *   Example: The **Classical Free Electron Theory (CFET)** was proposed by...
*   **Parameter Names**: Use `**bold**` for the names of parameters or variables when they are introduced or discussed in lists/tables, especially when immediately preceding their mathematical symbol.
    *   Example: **Thermal Velocity ($\mathbf{v_{th}}$)**
*   **Table Headers**: All headers in Markdown tables must be bold.

### 3.3 Lists:
*   **Numbered Lists**: Use `1.`, `2.`, `3.`, etc. for ordered sequences (e.g., distinct steps in a derivation, enumerated assumptions, ordered processes, classification sub-points).
*   **Bullet Points**: Use `*` or `-` for unordered lists (e.g., characteristics, properties, examples within a paragraph, features, non-sequential items).
*   **Indentation**: Lists should be well-indented to reflect their hierarchical structure and enhance readability.

### 3.4 Paragraph Structure:
*   Explanations should be presented in clear, coherent, and detailed paragraphs.
*   Each paragraph should ideally focus on a single idea or a closely related set of points, facilitating incremental understanding.

### 3.5 Equations (LaTeX Formatting):
*   All mathematical equations must be formatted using LaTeX syntax.
*   Equations should be enclosed in double dollar signs (`$$ ... $$`) for **display mode**. This ensures they are rendered as block-level elements, centered on their own line, and properly typeset.
    *   **Example**:
        ```markdown
        $$ \sigma = \frac{ne^2\tau}{m} $$
        ```
*   **Vector Notation**: Vectors in equations should be bolded (e.g., `\mathbf{v_d}`) or use the `\vec{}` command (e.g., `\vec{E}`). This must be consistently applied.

### 3.6 Tables:
*   Use standard Markdown table syntax.
*   Ensure all table headers are **bold**.
*   Align column content appropriately (left-align is default and typically suitable).
*   Always include a brief descriptive introductory sentence or title immediately preceding the table.

### 3.7 Horizontal Rules:
*   A horizontal rule (`***`) must be placed immediately:
    *   After the "Back to Subject Index" link.
    *   Between the "Internal Unit Navigation" links and the Unit Title.
    *   At the end of major sections or logical breaks in `Core Notes.md` for visual separation.
    *   At the end of each example in `Examples.md`.
    *   At the end of each major section in `Questions.md`.

### 3.8 Blockquotes:
*   Use blockquotes (`>`) for special notes, important warnings, or (crucially) for internal references to other files or sections.
    *   Example: `> See also: [Examples](Examples.md#Example%207:%20Relaxation%20Time%20in%20a%20Metal)`

### 3.9 Images/Diagrams:
*   When a diagram, plot, or image is referenced or is necessary for clarity (e.g., E-k diagrams, DoS plots, hysteresis loops, experimental setups), it **must** be included.
*   **Format**: `![Description of Diagram](https://example.com/image_link.png)`
*   **Placement**: Images should be placed immediately after the textual explanation they support, or where they logically fit into the flow.
*   **Crucial Rule**: Every image **must** be accompanied by a **detailed textual description**. This description should explain what the plot/diagram shows, label its axes, describe any regions or unique features, and clarify its significance within the context. This ensures that the information is conveyed even if the image asset is not rendered or the link breaks. The AI should prioritize finding relevant, non-copyrighted public domain images. If a specific image cannot be generated or found, a generic placeholder link is acceptable, but the textual description remains mandatory.
    *   Example:
        ```markdown
        **Description of Plot (Fermi Factor):** The plot shows the Fermi-Dirac distribution function $F_d(E)$ as a function of energy $E$. At $T=0K$, it is a perfectly sharp step function: the occupation probability is 1 for all energies $E < E_f$ and drops discontinuously to 0 for all energies $E > E_f$. As temperature $T$ increases ($T_1 < T_2$), the sharp step at $E_f$ softens and becomes a smooth, S-shaped curve. This rounding indicates that thermal energy allows some electrons below $E_f$ to be excited to states above $E_f$. For all temperatures, the curve passes through $F_d(E)=0.5$ precisely at $E=E_f$.
        ![Fermi factor variations with temperature for E_f=5.0eV](https://users.phys.nuk.edu.tw/user/files/20120227131751.jpg)
        ```

---

## 4. Content Detail and Thoroughness (The "Detailed" Imperative)

The notes must be **exceptionally detailed, comprehensive, and thorough** for all topics, ensuring a deep and robust understanding without sacrificing clarity. **Brevity is to be avoided in `Core Notes.md` unless explicitly requested for summaries (e.g., in `Questions.md`).**

### 4.1 `Core Notes.md` - The Ultimate Reference:
*   **Comprehensive Explanations**: Every concept, definition, theory, and phenomenon must be explained in full, robust detail. Provide background context, underlying principles, and implications. Do not assume prior knowledge beyond the scope of previous units. Expound fully on *why* things occur.
*   **Step-by-Step Derivations**: For all key formulas and theoretical principles, provide explicit, detailed, step-by-step derivations. Each mathematical or logical step should be clear, justified, and flow logically to the next. Do not skip intermediate steps.
    *   Examples: Fermi energy expression, effective mass derivation (using group velocity), thermal conductivity derivation (QFET), Lorenz Number derivation, Larmor frequency derivation, Curie-Weiss law derivation, etc.
*   **Physical Significance/Interpretation**: After introducing a concept or deriving a formula, always include a dedicated sub-section or paragraph to explain its profound physical meaning, its practical implications, and its relevance within the broader context of the unit and subject. Explain "why it matters."
*   **Integration of all specified topics**: Ensure *every single item* from any provided study guide, syllabus, or explicit instruction is fully elaborated within this file. The content should seamlessly flow in a logical order dictated by the subject matter.
*   **Historical Context (Where Relevant)**: Briefly mention discoverers or historical progression of ideas when it adds to understanding (e.g., Drude & Lorentz for CFET, BCS theory originators).
*   **Comparison & Contrast**: Clearly highlight differences and similarities between related concepts (e.g., Fermions vs. Bosons, CFET vs. QFET, Type I vs. Type II superconductors, soft vs. hard magnets). This can be done with comparative tables or dedicated paragraphs.

### 4.2 `Examples.md` - Practical Application:
*   **Clear Problem Statements**: Each example should begin with a clearly stated problem or question, separate from its solution.
*   **Complete Step-by-Step Solutions**: Provide exhaustive, detailed, step-by-step solutions for each problem. Do not skip any mathematical or logical steps. Explain the reasoning behind each step.
*   **Formula & Value Recall**: Clearly identify all formulas used and list all given/known values with units before starting calculations.
*   **Final Answer**: Present the final answer clearly, accompanied by appropriate units and, where relevant, correct significant figures.
*   **Internal Referencing**: `Core Notes.md` must contain blockquote links to relevant examples within `Examples.md` using the exact format: `> See also: [Examples](Examples.md#Example%20X:%20[Example Title])`. The example title in the link must precisely match the heading in `Examples.md`.

### 4.3 `Questions.md` - Concise Review and Practice:
*   **Concise Questions**: Questions should be direct, targeted at specific concepts, definitions, principles, or summaries.
*   **Brief Answers/References**: Answers should be either a succinct 1-3 sentence summary or a direct, precise reference to the detailed explanation in `Core Notes.md`.
    *   **Format 1 (Summary)**: Provide a summary answer (e.g., "See [Core Notes.md](Core%20Notes.md#111-basic-assumptions-of-cfet)").
    *   **Format 2 (Reference)**: For questions requiring extensive detail (e.g., derivations, complex explanations), *only* provide a reference to the relevant section in `Core Notes.md`.
        *   **Example (Summary)**: `*   **1. Briefly outline the basic assumptions of CFET.**`
            `    *   **Answer**: Electrons as ideal gas, fixed ion cores (scattering centers), no e-e repulsion, Maxwell-Boltzmann statistics, collisions with ion cores cause resistance (relaxation time $\tau$). See [Core Notes.md](Core%20Notes.md#111-basic-assumptions-of-cfet).`
*   **Logical Grouping**: Questions should be grouped under main section headings that are identical to those used in `Core Notes.md` for seamless cross-referencing.

---

## 5. Language and Tone

*   **Formal and Academic**: Maintain a formal, objective, and academic tone suitable for educational materials targeted at a higher learning level.
*   **Clear and Unambiguous**: Language should be precise, clear, and unambiguous. Avoid jargon without explanation.
*   **Consistent Terminology**: Use consistent terminology throughout all notes for the subject.
*   **Active Voice**: Generally prefer active voice for clearer explanations.

---

By adhering to these comprehensive guidelines, AI-generated notes will consistently meet the high standards of detail, accuracy, structure, and navigability you require for your learning.