#!/bin/bash
TARGET_DIR="/home/riggid/Documents/College/Notes/Semester 1/Physics/Unit 4/Attachments"
mkdir -p "$TARGET_DIR"

download_image() {
    url="$1"
    filename="$2"
    echo "Downloading $filename..."
    curl -s -L -A "Mozilla/5.0" "$url" -o "$TARGET_DIR/$filename"
}

download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Absorption_Process.svg/300px-Absorption_Process.svg.png" "induced_absorption.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Spontaneous_Emission.svg/300px-Spontaneous_Emission.svg.png" "spontaneous_emission.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Three_level_laser.svg/330px-Three_level_laser.svg.png" "three_level_laser.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Four_level_laser.svg/330px-Four_level_laser.svg.png" "four_level_laser.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Construction_of_a_laser.svg/600px-Construction_of_a_laser.svg.png" "basic_laser_construction.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Temporal_coherence.svg/400px-Temporal_coherence.svg.png" "temporal_coherence.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Spatial_coherence.svg/400px-Spatial_coherence.svg.png" "spatial_coherence.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Laser_modes.svg/600px-Laser_modes.svg.png" "gain_curve_modes.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/HeNe_laser_diagram.svg/600px-HeNe_laser_diagram.svg.png" "hene_laser_levels.png"
# Replaced Chegg link with Wikimedia alternative
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Modes_of_CO2.svg/600px-Modes_of_CO2.svg.png" "co2_vibrational_modes.png"
download_image "https://www.tf.uni-kiel.de/matwis/amat/semicond/lectures/lasers/laser_types/co2_laser_principle.gif" "co2_laser_levels.gif"
download_image "https://qph.cf2.quoracdn.net/main-qimg-22b6833fe0328848d61741753443a992-lq" "direct_vs_indirect_bandgap.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/LED_Banddiagramm.png/600px-LED_Banddiagramm.png" "led_band_diagram.png"
download_image "https://qph.cf2.quoracdn.net/main-qimg-e069542a73fd0fb5fb057406a441399f-lq" "semiconductor_laser_band_diagram.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/e/e4/Structure_of_heterojunction_laser.png" "double_heterostructure_laser.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Holography_Scheme.png/600px-Holography_Scheme.png" "holography_scheme.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dipole_polarisation_of_a_dielectric_material.svg/600px-Dipole_polarisation_of_a_dielectric_material.svg.png" "dielectric_polarisation.png"
download_image "https://www.tf.uni-kiel.de/matwis/amat/semicond/lectures/dielectric/dielectric_dispersion.gif" "dielectric_dispersion.gif"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pyroelectric-Ferroelectric_Titanate_Diagram.png/600px-Pyroelectric-Ferroelectric_Titanate_Diagram.png" "batio3_phase_transitions.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ferroelectric_hysteresis.svg/600px-Ferroelectric_hysteresis.svg.png" "ferroelectric_hysteresis.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Second_harmonic_generation.svg/400px-Second_harmonic_generation.svg.png" "shg_diagram.png"
download_image "https://upload.wikimedia.org/wikipedia/commons/e/e9/Optical_Tweezer_Principle_(English).jpg" "optical_tweezers.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Doppler_Cooling.svg/500px-Doppler_Cooling.svg.png" "doppler_cooling.png"

echo "Downloads complete."
