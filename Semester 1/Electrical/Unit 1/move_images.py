import shutil
import os

base_path = "/home/riggid/.gemini/antigravity/brain/fe2f0617-31fb-4ecd-9bd6-4f726fb38217/"
moves = [
    ("em_wave_propagation_1765904208784.png", "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 1/Attachments/em_wave_propagation.png"),
    ("blackbody_spectrum_curves_1765904235991.png", "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 1/Attachments/blackbody_spectrum_curves.png"),
    ("photoelectric_effect_schematic_1765904264262.png", "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 1/Attachments/photoelectric_effect_schematic.png"),
    ("compton_scattering_diagram_1765904287541.png", "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 1/Attachments/compton_scattering_diagram.png"),
    ("bloch_sphere_qubit_1765904330413.png", "/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 1/Attachments/bloch_sphere_qubit.png")
]

for src_name, dst in moves:
    src = os.path.join(base_path, src_name)
    try:
        if os.path.exists(src):
            shutil.move(src, dst)
            print(f"Moved {src_name} to {dst}")
        else:
            print(f"Source not found: {src}")
    except Exception as e:
        print(f"Error moving {src_name}: {e}")
