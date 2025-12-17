#!/bin/bash
TARGET_DIR="/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 4/Attachments"
mkdir -p "$TARGET_DIR"

download_mw() {
    filename="$1"
    output_name="$2"
    url="https://commons.wikimedia.org/wiki/Special:FilePath/$filename"
    echo "Downloading $filename -> $output_name..."
    curl -s -L -A "Mozilla/5.0" "$url" -o "$TARGET_DIR/$output_name"
}

# 1. Induced Absorption
download_mw "Absorption_Process.svg" "induced_absorption.svg"

# 2. Spontaneous Emission
download_mw "Spontaneous_Emission.svg" "spontaneous_emission.svg"

# 3. 3 Level Laser
download_mw "3_Level_Laser_System_Diagram.svg" "three_level_laser.svg"

# 4. 4 Level Laser
download_mw "4_Level_Laser_System_Diagram.svg" "four_level_laser.svg"

# 5. Basic Laser Construction
download_mw "Construction_of_a_laser.svg" "basic_laser_construction.svg"

# 6. Temporal Coherence
download_mw "Time_coherence.gif" "temporal_coherence.gif"

# 7. Spatial Coherence
download_mw "Spatial_coherence.svg" "spatial_coherence.svg"

# 8. Gain Curve / Modes
download_mw "LaserModes.jpg" "gain_curve_modes.jpg"

# 9. HeNe Laser
download_mw "He-Ne-Laser-Energieschema.svg" "hene_laser_levels.svg"

# 10. CO2 Vibrational Modes
download_mw "VibrationModesCO2.svg" "co2_vibrational_modes.svg"

# 11. CO2 Laser Levels (External)
curl -s -L -A "Mozilla/5.0" "https://www.tf.uni-kiel.de/matwis/amat/semicond/lectures/lasers/laser_types/co2_laser_principle.gif" -o "$TARGET_DIR/co2_laser_levels.gif"

# 12. Direct vs Indirect Bandgap
# Using Wikimedia: "Band structure of indirect and direct bandgap.svg"
download_mw "Band_structure_of_indirect_and_direct_bandgap.svg" "direct_vs_indirect_bandgap.svg"

# 13. LED Band Diagram
download_mw "LED_Banddiagramm.png" "led_band_diagram.png"

# 14. Semiconductor Laser Band Diagram
# Search for substitute. "Semiconductor laser band diagram.png" might exist?
# I'll try "Double_Heterostructure_Laser_Band_Diagram.svg" if exists, or just skip.
# I'll try to find "Semiconductor laser principle"
# For now, I'll comment out or try a guess.
download_mw "Semiconductor_laser_band_diagram.svg" "semiconductor_laser_band_diagram.svg"

# 15. Heterostructure Laser
download_mw "Structure_of_heterojunction_laser.png" "double_heterostructure_laser.png"

# 16. Holography Scheme
download_mw "Holography-record.png" "holography_scheme.png"

# 17. Dielectric Polarisation
download_mw "Dipole_polarisation_of_a_dielectric_material.svg" "dielectric_polarisation.svg"

# 18. Dielectric Dispersion (External)
curl -s -L -A "Mozilla/5.0" "https://www.tf.uni-kiel.de/matwis/amat/semicond/lectures/dielectric/dielectric_dispersion.gif" -o "$TARGET_DIR/dielectric_dispersion.gif"

# 19. BaTiO3 Phase Transitions
download_mw "Pyroelectric-Ferroelectric_Titanate_Diagram.png" "batio3_phase_transitions.png"

# 20. Ferroelectric Hysteresis
download_mw "Ferroelectric_hysteresis.svg" "ferroelectric_hysteresis.svg"

# 21. SHG Diagram
download_mw "Second_harmonic_generation.svg" "shg_diagram.svg"

# 22. Optical Tweezers
download_mw "Optical_Tweezer_Principle_(English).jpg" "optical_tweezers.jpg"

# 23. Doppler Cooling
download_mw "Doppler_laser_cooling.svg" "doppler_cooling.svg"

echo "Downloads complete."
