---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Problems & Conceptual Questions

### 1. Compton Effect Calculation
**Question:** Write an expression for the Compton shift. Estimate the wavelength of incident light if the scattered light is detected at 0.15 nm at an angle of $135^\circ$.

**Answer:**
-   **Formula**: The Compton shift $\Delta \lambda$ is given by:
    $$ \Delta \lambda = \frac{h}{m_0 c} (1 - \cos \theta) $$
    Where $\frac{h}{m_0 c} \approx 0.0243 \, \text{\AA}$ (or $2.43 \times 10^{-12} \text{m}$) is the Compton wavelength.

-   **Calculation**:
    -    Scattering angle $\theta = 135^\circ$.
    -    $\cos(135^\circ) \approx -0.707$.
    -    $\Delta \lambda = 0.0243 \, \text{\AA} \times (1 - (-0.707)) = 0.0243 \times 1.707 \approx 0.0415 \, \text{\AA}$.
    -   Convert to nm: $0.0415 \, \text{\AA} = 0.00415 \, \text{nm}$.
-   **Wavelengths**:
    -   Scattered wavelength $\lambda' = 0.15 \, \text{nm}$.
    -   Relationship: $\lambda' = \lambda + \Delta \lambda \implies \lambda = \lambda' - \Delta \lambda$.
    -   $\lambda \approx 0.15 - 0.00415 = 0.14585 \, \text{nm}$.

**Result:** The incident wavelength is approximately **0.146 nm**.

---

### 2. Fundamental Quantum Concepts
**Question:** Explain the following fundamental concepts: Normalization, Probability Density, Expectation Value.

**Answer:**
1.  **Normalization**:
    -   The total probability of finding a particle somewhere in space must be 1.
    -   A wave function $\Psi$ is normalized if $\int_{-\infty}^{\infty} |\Psi|^2 dV = 1$. This ensures the sum of all probabilities is unity.
2.  **Probability Density ($\Psi^*\Psi$)**:
    -   According to the Born interpretation, the wave function itself has no direct physical meaning, but $|\Psi(x,t)|^2$ represents the **probability density**.
    -   It gives the probability of finding the particle per unit volume at a given point $(x)$ and time $(t)$.
3.  **Expectation Value**:
    -   The expectation value $\langle A \rangle$ is the average value of a physical quantity (observable) $A$ that would be obtained from a large number of measurements on identical quantum systems.
    -   Defined as: $\langle A \rangle = \int \Psi^* \hat{A} \Psi \, d\tau$, where $\hat{A}$ is the operator corresponding to observable $A$.

---

### Long Answer Questions

### 1. Heisenberg's Uncertainty Principle & Electron in Nucleus
**Question:** State Heisenberg's Uncertainty Principle. Using this principle, show that an electron cannot exist inside the nucleus.

**Answer:**
-   **Statement**: It is impossible to determine simultaneously both the position ($x$) and momentum ($p$) of a particle with arbitrary precision. The product of their uncertainties is always greater than or equal to $\hbar/2$.
    $$ \Delta x \cdot \Delta p \ge \frac{\hbar}{2} $$
-   **Electron in Nucleus**:
    1.  Assume an electron is confined in a nucleus of radius $r \approx 10^{-14} \text{m}$.
    2.  The uncertainty in position $\Delta x \approx 2 \times 10^{-14} \text{m}$.
    3.  Minimum uncertainty in momentum:
        $$ \Delta p \approx \frac{\hbar}{2\Delta x} \approx \frac{1.054 \times 10^{-34}}{2 \times 10^{-14}} \approx 5.27 \times 10^{-21} \text{kg m/s} $$
    4.  Minimum energy $E \approx pc \approx (5.27 \times 10^{-21}) \times (3 \times 10^8) \approx 1.58 \times 10^{-12} \text{J}$.
    5.  Converting to MeV: $E \approx \frac{1.58 \times 10^{-12}}{1.6 \times 10^{-13}} \approx 9.8 \text{MeV}$.
    6.  **Conclusion**: Beta decay experiments show electrons emitted from the nucleus have energies of only ~3-4 MeV. Since the required confinement energy (~10 MeV) is much higher than the binding energy, the electron cannot exist freely inside the nucleus.

---

### 2. Particle in an Infinite Potential Well
**Question:** Set up the Schrödinger wave equation for a particle in a one-dimensional infinite potential well. Solve it to derive the expressions for energy eigenvalues and eigenfunctions.

**Answer:**
1.  **Potential**: $V(x) = 0$ for $0 < x < L$, and $V(x) = \infty$ elsewhere.
2.  **Schrödinger Equation** inside the box ($V=0$):
    $$ \frac{d^2 \psi}{dx^2} + \frac{2mE}{\hbar^2} \psi = 0 $$
    Let $k^2 = \frac{2mE}{\hbar^2}$. Then $\frac{d^2 \psi}{dx^2} + k^2 \psi = 0$.
3.  **Solution**: The general solution is $\psi(x) = A \sin(kx) + B \cos(kx)$.
4.  **Boundary Conditions**:
    -   $\psi(0) = 0 \implies B = 0$. So $\psi(x) = A \sin(kx)$.
    -   $\psi(L) = 0 \implies A \sin(kL) = 0$. Since $A \neq 0$, $\sin(kL) = 0 \implies kL = n\pi$ for $n=1, 2, 3 \dots$.
    -   Thus, $k_n = \frac{n\pi}{L}$.
5.  **Eigenfunctions**: $\psi_n(x) = A \sin(\frac{n\pi x}{L})$. From normalization $\int_0^L \psi^2 dx = 1$, we get $A = \sqrt{\frac{2}{L}}$.
    $$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) $$
6.  **Eigenvalues (Energy)**: Since $k^2 = \frac{2mE}{\hbar^2}$, substituting $k_n$:
    $$ E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{\hbar^2 n^2 \pi^2}{2mL^2} = \frac{n^2 h^2}{8mL^2} $$

---

### 3. Phase and Group Velocity
**Question:** Define Phase Velocity and Group Velocity. Derive the relation between them for a non-relativistic free particle.

**Answer:**
-   **Phase Velocity ($v_p$)**: Velocity with which a single wave phase (e.g., crest) propagates. $v_p = \frac{\omega}{k}$.
-   **Group Velocity ($v_g$)**: Velocity with which the envelope (modulation) of a wave packet travels. It represents the velocity of energy/particle transport. $v_g = \frac{d\omega}{dk}$.
-   **Relation (General)**: $v_g = v_p - \lambda \frac{dv_p}{d\lambda}$ or $v_g = v_p + k \frac{dv_p}{dk}$.
-   **For Non-relativistic Free Particle**:
    -   Energy $E = \frac{1}{2}mv^2 = \frac{p^2}{2m}$. Also $E = \hbar \omega$ and $p = \hbar k$.
    -   $\hbar \omega = \frac{(\hbar k)^2}{2m} \implies \omega = \frac{\hbar k^2}{2m}$.
    -   **Phase Velocity**: $v_p = \frac{\omega}{k} = \frac{\hbar k}{2m} = \frac{p}{2m} = \frac{v}{2}$. (Half the classical velocity).
    -   **Group Velocity**: $v_g = \frac{d\omega}{dk} = \frac{d}{dk} \left( \frac{\hbar k^2}{2m} \right) = \frac{2\hbar k}{2m} = \frac{\hbar k}{m} = \frac{p}{m} = v$.
    -   **Result**: The group velocity $v_g$ corresponds to the actual particle velocity $v$, while phase velocity is $v/2$.

---

### 4. Physical Significance of Wave Function
**Question:** Discuss the physical significance of the wave function $\Psi$ and its interpretation.

**Answer:**
-   **State Description**: $\Psi(x,t)$ completely describes the quantum state of a particle. It contains all the information that can be known about the system.
-   **Not Observable**: $\Psi$ itself is a complex quantity (can have real and imaginary parts) and is not directly observable or measurable.
-   **Born Interpretation**: The square of its magnitude, $|\Psi|^2 = \Psi \cdot \Psi^*$, represents the probability density of finding the particle at a specific position and time.
-   **Requirements**: To be physically meaningful, $\Psi$ must be:
    1.  Finite everywhere.
    2.  Single-valued (only one probability for a given position).
    3.  Continuous (no breaks in the probability function).

---

*Last updated: December 2025*
