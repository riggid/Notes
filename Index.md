## **Hello Welcome to my notes**
### **By**
- ### **Shreyansh Tandon**
- ### **Shubham Jalori**
```dataviewjs
// --- This script is fully automatic ---

// Get the root folder of your vault
const root = dv.app.vault.getRoot();

// Find all folders in the root that start with "Semester"
const semesterFolders = root.children
    .filter(child => child.children && child.name.startsWith("Semester")) // 'child.children' checks if it's a folder
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort them (Semester 1, Semester 2...)

// If no semester folders are found, show a message
if (semesterFolders.length === 0) {
    dv.paragraph("No 'Semester' folders found in the root of your vault.");
}

// Loop through each semester folder it found
for (const semesterFolder of semesterFolders) {
    
    const folderName = semesterFolder.name;
    const subjectFolders = semesterFolder.children
        .filter(child => child.children) // Find all subject subfolders
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort subjects alphabetically

    // --- Create the Title ---
    dv.el("h2", folderName, { cls: "semester-title" });

    // --- Create the Button Container ---
    const container = dv.el("div", "", { cls: "subject-button-container" });
    let hasLinks = false;

    // --- Create a Button for each Subject ---
    for (const subjectFolder of subjectFolders) {
        
        let subjectFolderPath = subjectFolder.path;
        let displayName = subjectFolder.name;
        
        // Find the main note *directly* inside the subject folder
        let mainNote = dv.pages(`"${subjectFolderPath}"`)
            .where(p => p.file.folder === subjectFolderPath)
            .first();

        if (mainNote) {
            hasLinks = true;
            let linkPath = mainNote.file.path;
            
            // Create the clickable button
            let link = dv.el("a", displayName, {
                cls: "subject-button", 
                href: "#" 
            });
            
            // Add the click action
            link.addEventListener("click", (e) => {
                e.preventDefault(); 
                app.workspace.openLinkText(linkPath, "", false);
            });
            
            container.appendChild(link);
        }
    }

    if (!hasLinks) {
        dv.paragraph(`_No subject notes found in ${folderName}._`);
    }
}
```
