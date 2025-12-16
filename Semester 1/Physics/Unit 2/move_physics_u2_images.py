import os
import shutil
import glob

# Source directory for generated images
source_dir = "/home/riggid/.gemini/antigravity/brain/fe2f0617-31fb-4ecd-9bd6-4f726fb38217"

# Destination directory
dest_dir = "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 2/Attachments"
os.makedirs(dest_dir, exist_ok=True)

# Map of partial filenames to final filenames
image_map = {
    "potential_step_diagram": "potential_step_diagram.png",
    "potential_barrier_tunneling": "potential_barrier_tunneling.png"
}

# Move generated images
for partial_name, final_name in image_map.items():
    # Find the file in source_dir that matches the partial name
    pattern = os.path.join(source_dir, f"{partial_name}*.png")
    matches = glob.glob(pattern)
    
    if matches:
        # Sort by modification time to get the most recent one if multiple exist
        latest_file = max(matches, key=os.path.getmtime)
        shutil.move(latest_file, os.path.join(dest_dir, final_name))
        print(f"Moved {latest_file} to {final_name}")
    else:
        print(f"Could not find generated image for {partial_name}")

# Move existing local images to Attachments for cleanup
base_dir = "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 2"

# Core Notes-2.png -> harmonic_oscillator.png
existing_qho = os.path.join(base_dir, "Core Notes-2.png")
if os.path.exists(existing_qho):
    shutil.move(existing_qho, os.path.join(dest_dir, "harmonic_oscillator.png"))
    print("Moved Core Notes-2.png to harmonic_oscillator.png")

# Core Notes-1.png -> potential_step_old.png (backup)
existing_step = os.path.join(base_dir, "Core Notes-1.png")
if os.path.exists(existing_step):
    shutil.move(existing_step, os.path.join(dest_dir, "potential_step_old.png"))
    print("Moved Core Notes-1.png to potential_step_old.png")
