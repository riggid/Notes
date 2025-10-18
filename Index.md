## **Hello Welcome to my notes**
### **By**
- ### **Shreyansh Tandon**
- ### **Shubham Jalori**
```dataviewjs
// --- This script is fully automatic ---

const root = dv.app.vault.getRoot();
const allChildren = root.children;

// --- Icon Map ---
// We've added your new root items here
const iconMap = {
    "Electrical": "💡",
    "Physics": "⚛️",
    "Mathematics": "🧮",
    "Mechanical": "⚙️",
    "Python": "🐍",
    "Environmental Studies and Life Science": "🌿",
    
    // --- NEW ICONS ---
    "PESU IO": "🏛️",
    "Notes": "📝",
    "DefaultFolder": "📂",
    "DefaultNote": "📄"
    // Add more as needed
};

// --- Part 1: Process Semester Folders ---
const semesterFolders = allChildren
    .filter(child => child.children && child.name.startsWith("Semester"))
    .sort((a, b) => a.name.localeCompare(b.name));

if (semesterFolders.length === 0) {
    dv.paragraph("No 'Semester' folders found in the root of your vault.");
}

for (const semesterFolder of semesterFolders) {
    const folderName = semesterFolder.name;
    const subjectFolders = semesterFolder.children
        .filter(child => child.children)
        .sort((a, b) => a.name.localeCompare(b.name));

    const card = document.createElement("div");
    card.className = "semester-card";

    const title = document.createElement("h2");
    title.className = "semester-title";
    title.innerText = folderName;
    card.appendChild(title);

    const container = document.createElement("div");
    container.className = "subject-button-container";
    card.appendChild(container);

    let hasLinks = false;
    
    for (const subjectFolder of subjectFolders) {
        let subjectFolderPath = subjectFolder.path;
        let displayName = subjectFolder.name;
        
        let mainNote = dv.pages(`"${subjectFolderPath}"`)
            .where(p => p.file.folder === subjectFolderPath)
            .first();

        if (mainNote) {
            hasLinks = true;
            let linkPath = mainNote.file.path;
            let icon = iconMap[displayName] || "📚";
            let buttonText = `${icon} ${displayName}`;

            let link = document.createElement("a");
            link.className = "subject-button";
            link.href = "#";
            link.innerText = buttonText;
            
            link.addEventListener("click", (e) => {
                e.preventDefault(); 
                app.workspace.openLinkText(linkPath, "", false);
            });
            
            container.appendChild(link);
        }
    }

    if (!hasLinks) {
        container.innerText = `_No subject notes found in ${folderName}._`;
    }
    
    dv.container.appendChild(card);
}

// --- Part 2: Process All Other Folders & Notes ---
const otherFolders = allChildren
    .filter(child => 
        child.children && // It's a folder
        !child.name.startsWith("Semester") && // Not a semester
        child.name !== "_templates" // Not templates
    ).sort((a, b) => a.name.localeCompare(b.name));

const otherNotes = allChildren
    .filter(child => 
        !child.children && // It's a note
        child.name.endsWith(".md") && // It's a Markdown file
        child.name !== "Index.md" // Not this dashboard file
    ).sort((a, b) => a.name.localeCompare(b.name));

// --- Create the "Other Resources" card if any exist ---
if (otherFolders.length > 0 || otherNotes.length > 0) {
    
    const card = document.createElement("div");
    card.className = "semester-card"; // Re-use the same card style

    const title = document.createElement("h2");
    title.className = "semester-title";
    title.innerText = "Other Resources"; // New card title
    card.appendChild(title);

    const container = document.createElement("div");
    container.className = "subject-button-container";
    card.appendChild(container);

    // --- Add buttons for other folders (e.g., "PESU IO") ---
    for (const folder of otherFolders) {
        let displayName = folder.name;
        // Find the *first* note in that folder to link to
        let mainNote = dv.pages(`"${folder.path}"`).first();
        
        if (mainNote) {
            let linkPath = mainNote.file.path;
            let icon = iconMap[displayName] || iconMap["DefaultFolder"];
            let buttonText = `${icon} ${displayName}`;

            let link = document.createElement("a");
            link.className = "subject-button";
            link.href = "#";
            link.innerText = buttonText;

            link.addEventListener("click", (e) => {
                e.preventDefault();
                app.workspace.openLinkText(linkPath, "", false);
            });
            container.appendChild(link);
        }
    }

    // --- Add buttons for other notes (e.g., "Notes.md") ---
    for (const note of otherNotes) {
        let linkPath = note.path;
        let displayName = note.name.replace(".md", ""); // Clean up name
        let icon = iconMap[displayName] || iconMap["DefaultNote"];
        let buttonText = `${icon} ${displayName}`;
        
        let link = document.createElement("a");
        link.className = "subject-button";
        link.href = "#";
        link.innerText = buttonText;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            app.workspace.openLinkText(linkPath, "", false);
        });
        container.appendChild(link);
    }
    
    dv.container.appendChild(card);
}
```
