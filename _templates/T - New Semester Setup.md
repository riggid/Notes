<%*
// --- 1. Ask for the new semester's name ---
const semester = await tp.system.prompt("Enter new Semester Name (e.g., Semester 2)");
if (!semester) return;

// --- 2. Define all your standard subjects ---
const subjects = [
    "Physics", 
    "Mechanical", 
    "Electrical", 
    "Mathematics", 
    "Environmental Studies and Life Sciences", 
    "Python"
];

// --- 3. Create a folder for each subject within the new semester ---
for (const subject of subjects) {
    // This trick creates the folder by creating a dummy file inside it
    const dummyFilePath = `${semester}/${subject}/.gitkeep`;
    await tp.file.create_new("", dummyFilePath, false);
}

// --- 4. Rename this file to be the semester's overview page ---
await tp.file.rename(`${semester} - Overview`);
tp.obsidian.Notice(`Successfully created all subject folders for ${semester}!`);
_%>

#  semester - Overview

All subject folders for this semester have been successfully created. You can now use the "T - New Unit" template to add units to each subject.