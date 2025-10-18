# [[Index]]
---
```dataviewjs
// --- This script is fully automatic ---
// --- It creates a dashboard for the folder it is in ---

const currentFile = dv.current().file;
const currentFolder = currentFile.folder;
const currentFolderName = currentFolder.split('/').pop();
let hasContent = false;

// --- 2. Get all Subfolders (e.g., "Unit 1", "Unit 2") ---
const subfolders = dv.app.vault.getAbstractFileByPath(currentFolder)
    .children
    .filter(child => child.children) // 'child.children' checks if it's a folder
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort them

// --- 3. Loop through each Unit folder ---
for (const unitFolder of subfolders) {
    let unitPath = unitFolder.path;
    let unitName = unitFolder.name;
    
    // --- a. Create the Unit Heading ---
    dv.el("h3", unitName, { cls: "unit-title" });
    
    // --- b. Find all notes *inside* this Unit folder ---
    const notesInUnit = dv.pages(`"${unitPath}"`)
        .where(p => p.file.folder === unitPath) // Only notes in this exact folder
        .sort(p => p.file.name);

    if (notesInUnit.length > 0) {
        hasContent = true;
        
        // --- c. Create a button container for this Unit ---
        const unitContainer = dv.el("div", "", { cls: "subject-button-container" });

        // --- d. Create buttons for each note ---
        for (const note of notesInUnit) {
            let linkPath = note.file.path;
            let displayName = note.file.name;

            let link = dv.el("a", displayName, { cls: "subject-button", href: "#" });
            link.addEventListener("click", (e) => {
                e.preventDefault(); 
                app.workspace.openLinkText(linkPath, "", false);
            });
            unitContainer.appendChild(link);
        }
    } else {
        dv.paragraph(`_No notes found in ${unitName}._`);
    }
}

// --- 4. Find all "loose" notes in the main subject folder ---
const looseNotes = dv.pages(`"${currentFolder}"`)
    .where(p => p.file.folder === currentFolder && p.file.name !== currentFile.name)
    .sort(p => p.file.name);

if (looseNotes.length > 0) {
    hasContent = true;
    dv.el("h3", "Other Notes", { cls: "unit-title" });
    const looseContainer = dv.el("div", "", { cls: "subject-button-container" });
    
    for (const note of looseNotes) {
        let linkPath = note.file.path;
        let displayName = note.file.name;
        
        let link = dv.el("a", displayName, { cls: "subject-button", href: "#" });
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            app.workspace.openLinkText(linkPath, "", false);
        });
        looseContainer.appendChild(link);
    }
}

// --- 5. Final check ---
if (!hasContent && looseNotes.length === 0) {
    dv.paragraph(`_No notes or subfolders found in ${currentFolderName}._`);
}
```
