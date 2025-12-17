---
dg-publish: true
---
# [[../../Index|Index]]
---
```dataviewjs
// --- This script is fully automatic ---
// --- It builds a dashboard for the folder it is in ---

const currentFile = dv.current().file;
const currentFolder = currentFile.folder;
const grid = document.createElement("div"); 
grid.id = "dashboard-grid"; 
dv.container.appendChild(grid);

let hasContent = false;

// --- Icon Map ---
// Add icons for your common note types here
const iconMap = {
    "Core Notes": "📓",
    "Examples": "🧪",
    "Questions": "❓",
    "Unit 1": "1️⃣",
    "Unit 2": "2️⃣",
    "Unit 3": "3️⃣",
    "Unit 4": "4️⃣",
    "DefaultNote": "📄"
};

// --- 1. Get all Subfolders (e.g., "Unit 1", "Unit 2") ---
const subfolders = dv.app.vault.getAbstractFileByPath(currentFolder)
    .children
    .filter(child => child.children) // Is a folder
    .sort((a, b) => a.name.localeCompare(b.name));

// --- 2. Loop through each Unit folder ---
for (const unitFolder of subfolders) {
    const unitName = unitFolder.name;
    const unitPath = unitFolder.path;
    hasContent = true;
    
    // --- a. Create the Card (re-using your CSS) ---
    const card = document.createElement("div");
    card.className = "semester-card";

    // --- b. Create the Title (e.g., "Unit 1") ---
    const title = document.createElement("h2");
    title.className = "semester-title";
    let unitIcon = iconMap[unitName] || "📁";
    title.innerText = `${unitIcon} ${unitName}`;
    card.appendChild(title);

    // --- c. Create the Button Container ---
    const container = document.createElement("div");
    container.className = "subject-button-container";
    card.appendChild(container);

    // --- d. Find notes *inside* this Unit ---
    const notesInUnit = dv.pages(`"${unitPath}"`)
        .where(p => p.file.folder === unitPath)
        .sort(p => p.file.name);
        
    if (notesInUnit.length === 0) {
        container.innerText = "_No notes found in this unit._";
    } else {
        for (const note of notesInUnit) {
            let linkPath = note.file.path;
            let displayName = note.file.name.replace(".md", "");
            let icon = iconMap[displayName] || iconMap["DefaultNote"];
            let buttonText = `${icon} ${displayName}`;
            
            let link = document.createElement("a");
            link.className = "subject-button";
            // Web-friendly HREF: Slugify path
            let cleanPath = linkPath.replace(".md", "");
            let segments = cleanPath.split("/");
            let slugSegments = segments.map(s => s.toLowerCase().replace(/[\s&]+/g, '-').replace(/[^a-z0-9-]/g, ''));
            let webPath = "/" + slugSegments.join("/");
            link.href = webPath;
            link.innerText = buttonText;
            
                        link.addEventListener("click", (e) => {
                if (typeof app !== "undefined" && app.workspace) {
                    e.preventDefault(); 
                    app.workspace.openLinkText(linkPath, "", false);
                }
            });
            
            container.appendChild(link);
        }
    }
    
    // --- e. Add the finished card to the page ---
    grid.appendChild(card);
}

// --- 3. Find all "loose" notes in this folder ---
const looseNotes = dv.pages(`"${currentFolder}"`)
    .where(p => p.file.folder === currentFolder && p.file.path !== currentFile.path)
    .sort(p => p.file.name);
    
if (looseNotes.length > 0) {
    hasContent = true;
    
    // Create a card for them
    const card = document.createElement("div");
    card.className = "semester-card";
    
    const title = document.createElement("h2");
    title.className = "semester-title";
    title.innerText = "General Notes";
    card.appendChild(title);
    
    const container = document.createElement("div");
    container.className = "subject-button-container";
    card.appendChild(container);
    
    for (const note of looseNotes) {
         let linkPath = note.file.path;
         let displayName = note.file.name.replace(".md", "");
         let icon = iconMap[displayName] || iconMap["DefaultNote"];
         let buttonText = `${icon} ${displayName}`;
            
         let link = document.createElement("a");
         link.className = "subject-button";
         // Web-friendly HREF: Slugify path
            let cleanPath = linkPath.replace(".md", "");
            let segments = cleanPath.split("/");
            let slugSegments = segments.map(s => s.toLowerCase().replace(/[\s&]+/g, '-').replace(/[^a-z0-9-]/g, ''));
            let webPath = "/" + slugSegments.join("/");
            link.href = webPath;
         link.innerText = buttonText;
         
                     link.addEventListener("click", (e) => {
                if (typeof app !== "undefined" && app.workspace) {
                    e.preventDefault(); 
                    app.workspace.openLinkText(linkPath, "", false);
                }
            });
         
         container.appendChild(link);
    }
    grid.appendChild(card);
}

// --- 4. Final check ---
if (!hasContent) {
    dv.paragraph(`_No notes or subfolders found in ${currentFolder}._`);
}
```
