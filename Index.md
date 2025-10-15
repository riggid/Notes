
```dataviewjs
// --- Configuration ---
// How many recently edited notes to show at the top.
const recentFilesLimit = 7;

// Optional: Folders to exclude from the "Other Topics" section.
const excludeFolders = ["Excalidraw"];

// Optional: Assign emojis to your subjects.
const subjectEmojis = {
    "Mechanical": "⚙️",
    "Physics": "⚛️",
    "Electrical": "💡",
    "Mathematics": "🧮",
    "Python": "🐍",
    "Environmental Studies and Life Sciences": "🌿",
    "Quantum Computing": "🔬"
};
// --- End of Configuration ---

// 1. "Recently Edited" Section
dv.header(2, "🚀 Recently Edited");
const recentPages = dv.pages('""') // Search the entire vault
    .where(p => !excludeFolders.some(folder => p.file.folder.startsWith(folder))) // Exclude files from specified folders
    .sort(p => p.file.mtime, 'desc')
    .limit(recentFilesLimit);

dv.list(recentPages.map(p => 
    `${p.file.link} — *edited ${p.file.mtime.toRelative()}*`
));
dv.paragraph("---");

// 2. Main Content Area - Organized by Semester
const semesterFolders = dv.pages('""')
    .map(p => p.file.folder.split('/')[0]) // Get top-level folders
    .distinct().where(f => f && f.startsWith("Semester")).sort();

for (const semesterName of semesterFolders) {
    dv.header(2, semesterName);

    const subjects = dv.pages(`"${semesterName}"`)
        .map(p => p.file.folder.split('/')[1]) // Get subject-level folders
        .distinct().where(s => s).sort();

    for (const subjectName of subjects) {
        const subjectPath = `${semesterName}/${subjectName}`;
        const emoji = subjectEmojis[subjectName] || "📁";
        
        dv.paragraph(`> [!note] ${emoji} ${subjectName}`);
        
        const units = dv.pages(`"${subjectPath}"`).where(p => p.file.folder.startsWith(subjectPath) && p.file.folder.split('/').length > 2).map(p => p.file.folder).distinct().sort();

        const createSortedList = (path) => {
            const pages = dv.pages(`"${path}"`).sort(p => p.file.mtime, 'desc');
            let listText = "";
            if (pages.length > 0) {
                pages.forEach(p => { listText += `> - ${p.file.link} \n`; });
            } else { listText = "> - No notes in this section yet.\n"; }
            return listText;
        };

        if (units.length > 0) {
            for (const unitPath of units) {
                const unitName = unitPath.split('/').pop();
                dv.paragraph(`> #### ${unitName}`);
                dv.paragraph(createSortedList(unitPath));
            }
        } else {
            dv.paragraph(createSortedList(subjectPath));
        }
    }
}
dv.paragraph("---");

// 3. Handle Other Top-Level Topics
dv.header(2, "Other Topics");
const otherFolders = dv.pages('""').map(p => p.file.folder.split('/')[0]).distinct().where(f => f && !f.startsWith("Semester") && !excludeFolders.includes(f)).sort();

for (const folderName of otherFolders) {
    const emoji = subjectEmojis[folderName] || "📁";
    dv.paragraph(`> [!note] ${emoji} ${folderName}`);
    const pages = dv.pages(`"${folderName}"`).sort(p => p.file.mtime, 'desc');
    let listText = "";
    pages.forEach(p => { listText += `> - ${p.file.link}\n`; });
    dv.paragraph(listText || "> - No notes yet.\n");
}
```
### **Hello!! Welcome to my notes**
# 🗂️ Index for Electrical - Unit 2

This is the central hub for this unit. Your standard files have been automatically created and linked below.

> [!info] Unit Files
> - **Core Concepts:** [[Semester 1/Electrical/Unit 2/Core Notes|Core Notes]]
> - **Worked Examples:** [[Semester 1/Electrical/Unit 2/Examples|Examples]]
> - **Questions & Answers:** [[Semester 1/Electrical/Unit 2/Q&A|Q&A]]
### By
-  **Shreyansh Tandon.**
- **Shubham Jalori.**
