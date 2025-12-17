---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***

# Unit 4 Q&A: Electromagnetism & Machines

## 1. Electromagnetism and Transformers

*   **1. Draw the B-H curve and define Retentivity and Coercivity.**
    *   **Answer**: The B-H curve plots Flux Density (B) vs Magnetizing Force (H). **Retentivity** is the magnetic flux remaining in the material when H is reduced to zero. **Coercivity** is the reverse H required to wipe out the residual flux. See [[Core Notes#13-b-h-curve-and-hysteresis|Core Notes]].

*   **2. Is hysteresis a desirable property? What happens if the area under the hysteresis curve is large?**
    *   **Answer**: Large hysteresis is desirable for permanent magnets (high retentivity/coercivity) but undesirable for machines (transformers/motors) because the area under the loop represents **Hysteresis Loss** (energy dissipated as heat). See [[Core Notes#13-b-h-curve-and-hysteresis|Core Notes]].

*   **3. Give a comparison between Core type and Shell type transformers.**
    *   **Answer**: In **Core type**, windings surround the core, better for high voltage (easier insulation). In **Shell type**, core surrounds the windings, better mechanical strength and cooling. See [[Core Notes#21-principle-and-construction|Core Notes]].

*   **4. Write a short note on Core and Copper losses in a transformer.**
    *   **Answer**: **Core Losses** (Iron losses) consist of Hysteresis and Eddy current losses, are constant, and found via OC test. **Copper Losses** are $I^2R$ heating losses in windings, vary with load square, and found via SC test. See [[Core Notes#23-losses-and-efficiency|Core Notes]].

## 2. DC Machines

*   **5. State Fleming's Right Hand and Left Hand Rules.**
    *   **Answer**: **Right Hand Rule** (Generator): Thumb=Motion, Forefinger=Field, Middle=Induction. **Left Hand Rule** (Motor): Thumb=Force, Forefinger=Field, Middle=Current. See [[Core Notes#14-electromagnetic-induction-rules|Core Notes]].

*   **6. What is Back EMF in a DC Motor?**
    *   **Answer**: The EMF induced in the armature conductors due to rotation, which opposes the supply voltage ($V$). It regulates the armature current ($I_a = (V-E_b)/R_a$). See [[Core Notes#33-dc-motor|Core Notes]].

## 3. Induction and Special Machines

*   **7. Discuss how Rotating Magnetic Field (RMF) is generated in a 3-phase Induction Motor.**
    *   **Answer**: When balanced 3-phase currents (displaced by 120°) flow through 3-phase windings (displaced by 120° space), they produce a resultant magnetic flux of constant magnitude ($1.5\phi_m$) that rotates at synchronous speed. See [[Core Notes#41-principle-and-construction|Core Notes]].

*   **8. Give the differences between Squirrel Cage and Slip Ring rotors.**
    *   **Answer**: **Squirrel Cage**: Copper bars shorted by end rings, rugged, constant speed, low starting torque. **Slip Ring**: Wound rotor connected to slip rings, allows external resistance for high starting torque, requires maintenance. See [[Core Notes#41-principle-and-construction|Core Notes]].

*   **9. List the advantages of BLDC Motors.**
    *   **Answer**: High efficiency, low maintenance (no brushes), longer life, quiet operation, high power density. See [[Core Notes#51-brushless-dc-motor-bldc|Core Notes]].

*   **10. List the advantages of Stepper Motors.**
    *   **Answer**: Precise positioning control, compatibility with digital systems, high torque at low speeds, low cost (variable reluctance type). See [[Core Notes#52-stepper-motor|Core Notes]].

> See also: [[Examples]] for numerical problems.
