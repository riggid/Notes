---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### 1. Lasers and Optical Fibers

### 1. Einstein's Coefficients
**Question:** Derive the relation between Einstein's coefficients of spontaneous emission ($A_{21}$) and stimulated emission ($B_{21}$).

**Answer:**
1.  Consider a system in thermal equilibrium with radiation density $\rho(\nu)$.
2.  Rate of upward transitions (Absorption): $N_1 B_{12} \rho(\nu)$.
3.  Rate of downward transitions (Emission): $N_2 A_{21} + N_2 B_{21} \rho(\nu)$.
4.  At equilibrium: $N_1 B_{12} \rho(\nu) = N_2 (A_{21} + B_{21} \rho(\nu))$.
5.  Rearranging for $\rho(\nu)$:
    $$ \rho(\nu) = \frac{A_{21}}{B_{12} \frac{N_1}{N_2} - B_{21}} $$
6.  Using Boltzmann distribution $\frac{N_1}{N_2} = e^{h\nu/kT}$ and Planck's Law $\rho(\nu) = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/kT} - 1}$.
7.  Comparing the two equations: $B_{12} = B_{21}$ (Transition probability is same).
8.  $\frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3}$.

---

### 2. Laser Action
**Question:** Explain the specific conditions required for laser action. What is population inversion and why is a metastable state necessary?

**Answer:**
-   **Conditions**:
    1.  **Metastable State**: An excited state with a longer lifetime ($10^{-3}$s vs $10^{-8}$s) to allow atoms to accumulate.
    2.  **Population Inversion**: The number of atoms in the excited state ($N_2$) must exceed the number in the ground state ($N_1$). i.e., $N_2 > N_1$.
    3.  **Optical Resonator**: To provide feedback and amplification.
-   **Role**: Without a metastable state, atoms would decay spontaneously too quickly to achieve population inversion, making stimulated emission (amplification) impossible.

---

### 3. CO2 Laser
**Question:** Describe the construction and working of a CO2 laser with the help of a neat diagram. Discuss the role of Nitrogen and Helium in the process.

**Answer:**
-   **Construction**: A discharge tube containing a mixture of $CO_2$, $N_2$, and $He$ gases. Mirrors at ends form a resonator.
-   **Working**:
    1.  **Pumping**: Electric discharge excites Nitrogen molecules to a metastable state.
    2.  **Collision**: Excited $N_2$ molecules transfer energy to $CO_2$ molecules (resonant energy transfer), pumping them to upper laser level.
    3.  **Lasing**: Transition between vibrational levels of $CO_2$ produces laser light at $10.6 \mu m$ (IR region).
-   **Roles**:
    -   **Nitrogen**: Acts as the energy transfer agent to pump $CO_2$.
    -   **Helium**: Increases thermal conductivity to cool the gas and helps depopulate the lower laser level causing it to fall to ground state, maintaining population inversion.

---

### 4. Semiconductor Laser
**Question:** Distinguish between Homojunction and Heterojunction semiconductor lasers. Explain the working principle of a GaAs semiconductor laser.

**Answer:**
-   **Homojunction vs Heterojunction**:
    -   *Homojunction*: P and N regions are made of the same material (e.g., GaAs). Poor confinement of light and carriers. High threshold current.
    -   *Heterojunction*: Junction formed between different bandgap materials (e.g., GaAs and AlGaAs). better confinement. Lower threshold current.
-   **Working of GaAs Laser**:
    -   Heavily doped p-n junction (degenerate).
    -   **Forward Bias**: Electrons from n-side and holes from p-side are injected into the junction (depletion) region.
    -   **Recombination**: An electron falls from the conduction band to the valence band, recombining with a hole and emitting a photon with energy $E_g \approx h\nu$.
    -   Polished parallel faces act as a cavity for feedback, leading to laser emission.

---

### 5. Optical Fibers
**Question:** Define Numerical Aperture (NA) and derive an expression for it. Discuss the different types of optical fibers (Step Index vs. Graded Index).

**Answer:**
-   **Numerical Aperture (NA)**: It is the light-gathering capacity of an optical fiber. Defined as the sine of the maximum acceptance angle ($\theta_a$).
-   **Expression**:
    $$ NA = \sin \theta_a = \sqrt{n_1^2 - n_2^2} $$
    Where $n_1$ is core index and $n_2$ is cladding index.
-   **Types**:
    -   **Step Index**: Refractive index is constant in the core and changes abruptly at the cladding interface. Susceptible to intermodal dispersion.
    -   **Graded Index (GRIN)**: Refractive index decreases parabolically from the center of the core to the cladding. Reduces modal dispersion as rays travel at different speeds to arrive simultaneously.

---

### 2. Holography and Dielectrics

### 1. Holography Principle
**Question:** Explain the basic principle of Holography. Differentiate between Holography and Photography.

**Answer:**
-   **Principle**: Holography is based on **Interference**. It records both the **amplitude** (intensity) and **phase** (depth) information of the light wave reflected from an object.
-   **Difference**:
    -   *Photography*: Records only intensity. 2D image. No depth perception.
    -   *Holography*: Records intensity and phase. 3D reconstruction. Viewing angle changes perspective. Lensless photography.

---

### 2. Recording and Reconstruction
**Question:** With neat diagrams, explain the process of recording and reconstruction of a hologram.

**Answer:**
-   **Recording**: A laser beam is split into an **Object Beam** (illuminates object) and a **Reference Beam** (goes directly to plate). The interference pattern between the scattered object wave and reference wave is recorded on the photographic plate.
-   **Reconstruction**: The developed hologram is illuminated by the **Reference Beam** alone at the same angle. The hologram acts as a diffraction grating, reconstructing the original object wavefront, creating a virtual 3D image.

---

### 3. Dielectrics
**Question:** Define Dielectric Polarization. Explain the different types of polarization mechanisms (Electronic, Ionic, Orientational) with relevant formulae.

**Answer:**
-   **Polarization**: Displacement of positive and negative charges in a dielectric in an external field, creating induced dipoles.
-   **Types**:
    1.  **Electronic**: Displacement of electron cloud relative to nucleus. Indpendant of T. $\alpha_e = 4\pi \epsilon_0 R^3$.
    2.  **Ionic**: Displacement of positive and negative ions in a crystal lattice. Indpendant of T.
    3.  **Orientational**: Alignment of permanent dipoles (polar molecules) along the field. Strongly dependent on Temperature ($\alpha_o = \frac{\mu^2}{3kT}$).

---

### 4. Internal Field
**Question:** Derive an expression for the internal field in a solid or liquid dielectric (Lorentz Field).

**Answer:**
-   The internal field $E_{loc}$ is the sum of fields acting on an atom:
    $$ E_{loc} = E_{applied} + E_{depolarizing} + E_{Lorentz} + E_{dipoles} $$
-   For a cubic structure:
    -   $E_{depol} = -P/\epsilon_0$ (from surface charges).
    -   $E_{applied} + E_{depol} = E$ (Macroscopic field).
    -   $E_{Lorentz}$ (field inside spherical cavity) $= \frac{P}{3\epsilon_0}$.
    -   $E_{dipoles} \approx 0$ (symmetry).
-   **Result**:
    $$ E_{loc} = E + \frac{P}{3\epsilon_0} $$

---

### 5. Clausius-Mossotti Relation
**Question:** Deduce the Clausius-Mossotti equation relating macroscopic dielectric constant with microscopic polarizability.

**Answer:**
-   Relation between Polarization $P$ and internal field: $P = N \alpha E_{loc}$.
-   Substitute Lorentz field: $P = N \alpha (E + \frac{P}{3\epsilon_0})$.
-   Also, macroscopic relation: $P = \epsilon_0 (\epsilon_r - 1) E$.
-   Equating and solving for $\alpha$:
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha}{3 \epsilon_0} $$
-   This relates the dielectric constant $\epsilon_r$ (macroscopic) to polarizability $\alpha$ (microscopic).

---

*Last updated: December 2025*
