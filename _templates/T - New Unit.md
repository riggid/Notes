<%*
// --- Configuration ---
const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];
const subjects = ["Physics", "Mechanical", "Electrical", "Mathematics", "Environmental Studies and Life Sciences", "Python"];

// --- 1. Get User Input ---
const semester = await tp.system.suggester(semesters, semesters, false, "Which semester?");
if (!semester) throw new Error("Script canceled: No semester selected.");

const subject = await tp.system.suggester(subjects, subjects, false, "Which subject?");
if (!subject) throw new Error("Script canceled: No subject selected.");

const unit = await tp.system.prompt("Enter Unit Name (e.g., Unit 3)");
if (!unit) throw new Error("Script canceled: No unit name entered.");

// --- 2. Define File Paths ---
const unitPath = `${semester}/${subject}/${unit}`;
const coreNotesPath = `${unitPath}/Core Notes`;
const subjectFilePath = `${semester}/${subject}/${subject}`;

// --- 3. Check for Required Files BEFORE Creating Anything ---
const blueprint = tp.file.find_tfile("T - Standard Note Blueprint");
if (!blueprint) {
    throw new Error("FATAL ERROR: The blueprint 'T - Standard Note Blueprint' could not be found.");
}

const subjectFile = tp.file.find_tfile(subjectFilePath);
if (!subjectFile) {
    throw new Error(`FATAL ERROR: The subject file for "${subject}" does not exist. Please create it at: ${subjectFilePath}.md`);
}

// --- 4. Create New Unit Files ---
// It will create the folders and the 3 standard notes using the blueprint.
await tp.file.create_new(blueprint, `${unitPath}/Core Notes`, false);
await tp.file.create_new(blueprint, `${unitPath}/Examples`, false);
await tp.file.create_new(blueprint, `${unitPath}/Q&A`, false);

// --- 5. Update the Main Subject File ---
// Appends a link to the new unit's Core Notes file.
await tp.obsidian.vault.append(subjectFile, `\n### [[${coreNotesPath}|${unit}]]`);
new Notice(`✅ Updated ${subject}.md with a link to ${unit}.`, 5000);

// --- 6. Move and Rename this Runner File ---
// Instead of deleting, we safely turn this into the Unit Index.
await tp.file.move(`${unitPath}/${unit} - Index`);
_%>
# 🗂️ Index for <% `${subject} - ${unit}` %>

This index was created automatically. Your standard notes for this unit are:
- [Core Notes](../Semester%201/Physics/Unit%201/Core%20Notes.md)
- [Examples](../Semester%201/Physics/Unit%201/Examples.md)
- [Q&A](../Semester%201/Physics/Unit%201/Q&A.md)