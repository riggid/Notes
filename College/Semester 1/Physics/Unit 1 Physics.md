# Maxwell's Equations in a Medium
Uses the [[Nabla operator]]

### **Gauss's law for electric fields**
$$
\nabla \cdot \overrightarrow{E} = \frac{\rho}{\epsilon_{0}}
$$

### **Gauss's law for magnetic fields**
$$
\nabla \cdot \overrightarrow{B} = 0
$$
It implies the absence of magnetic monopoles.

### **Faraday's law of electromagnetic induction**
$$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}
$$

### **Ampere–Maxwell circuital law**
$$
\nabla \times \overrightarrow{B} = \mu_{0}\overrightarrow{J} + \mu_{0}\epsilon_{0} \frac{\partial \overrightarrow{E}}{\partial t}
$$
This equation is an extension of Ampere’s law.  
The second term represents the concept of **displacement current** associated with time-varying electric fields (Maxwell’s contribution).

---

# Maxwell's Equations in Free Space
In free space (no charges or currents), Maxwell’s equations reduce to:

1.
$$
\nabla \cdot \overrightarrow{E} = 0
$$

2.
$$
\nabla \cdot \overrightarrow{B} = 0
$$

3.
$$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}
$$

4.
$$
\nabla \times \overrightarrow{B} = \mu_{0}\epsilon_{0} \frac{\partial \overrightarrow{E}}{\partial t}
$$

Taking the curl of the electric field:
$$
\nabla \times (\nabla \times \overrightarrow{E}) = \nabla \times \left(- \frac{\partial \overrightarrow{B}}{\partial t} \right)
$$

Using vector identity:
$$
\nabla(\nabla \cdot \overrightarrow{E}) - \nabla^2 \overrightarrow{E} = - \frac{\partial}{\partial t}(\nabla \times \overrightarrow{B})
$$

Since $\nabla \cdot \overrightarrow{E} = 0$:
$$
-\nabla^2 \overrightarrow{E} = - \frac{\partial}{\partial t} (\nabla \times \overrightarrow{B})
$$

Substituting curl of $\overrightarrow{B}$:
$$
\nabla^2 \overrightarrow{E} = \mu_{0}\epsilon_{0} \frac{\partial^2 \overrightarrow{E}}{\partial t^2}
$$

This is the **wave equation**, implying
$$
\mu_{0}\epsilon_{0} = \frac{1}{c^2}
$$

Similarly, for $\overrightarrow{B}$:
$$
\nabla^2 \overrightarrow{B} = \frac{1}{c^2} \frac{\partial^2 \overrightarrow{B}}{\partial t^2}
$$

Thus, both $\overrightarrow{E}$ and $\overrightarrow{B}$ propagate as transverse waves at the speed of light.

---

# Energy of EM Waves

Energy of electric field per unit volume:
$$
E_{n} = \frac{1}{2}\epsilon_{0}E^2
$$

Energy of electric component:
$$
\frac{1}{2}\epsilon_{0} E_{x0}^2 \cos^2(\omega t + kz)
$$

Energy of magnetic component:
$$
\frac{1}{2}\frac{B_{y}^2}{\mu_{0}} = \frac{1}{2}\frac{E_{x}^2}{c^2 \mu_{0}} = \frac{1}{2}\epsilon_{0}E_{x}^2
$$

Total energy:
$$
\epsilon_{0}E_{x}^2
$$

### **Poynting Vector**
Direction of energy flow of EM wave:
$$
\vec{s} = \frac{1}{\mu_{0}} \vec{E} \times \vec{B} = c \cdot \epsilon_{0}E^2
$$

Average energy transmitted per unit time per unit area:
$$
\langle S \rangle = \frac{1}{2}\epsilon_{0}cE_{x0}^2 = \frac{1}{2}c\frac{B_{y0}^2}{\mu_{0}} = \frac{1}{2}\frac{E_{x0}B_{y0}}{\mu_{0}}
$$

---

# Polarization States of EM Waves

- **Unpolarized Light**  
  Electric field oscillates randomly in all planes perpendicular to propagation.

- **Linearly Polarized Light**  
  Electric field oscillates in a single plane.  
  Example: Equal horizontal and vertical components in phase → polarization at $45^\circ$.

- **Circularly Polarized Light**  
  Equal amplitude components with a $90^\circ$ phase difference.  
  The electric field tip traces a circle.

- **Elliptically Polarized Light**  
  Unequal amplitudes or arbitrary phase difference.  
  The electric field tip traces an ellipse.

---

# Black Body Radiation in Equilibrium

### Classical View
- Interaction of matter and radiation:
  - **Absorption**: materials absorb radiation
  - **Emission**: materials emit characteristic wavelengths
- **Kirchhoff’s Law**: A perfect absorber = perfect emitter → **black body**

### Cavity Model
- Black body ≈ cavity with a small hole
  - Radiation entering undergoes multiple reflections → cannot escape
  - Heated cavity emits all possible frequencies
- Radiation density depends **only on temperature**
- As $T$ increases:
  - Intensity increases
  - Peak wavelength shifts shorter (Wien’s law)

### Standing Wave Condition
$$
a = n\frac{\lambda}{2}
$$

Frequencies that can sustain:
$$
\nu = \frac{c}{\lambda} = n\left(\frac{c}{2a}\right)
$$

Additional frequencies:
$$
d\nu = dn \left(\frac{c}{2a}\right)
$$

---

# Failures of Classical Theory

## **Blackbody Radiation**
Rayleigh–Jeans law:
$$
\rho(\nu) d\nu = \frac{8\pi}{c^3}\nu^2 k_{B}T d\nu
$$

- Valid at **low $\nu$**
- Diverges at **high $\nu$** → *Ultraviolet Catastrophe*

**Planck’s Hypothesis (1900):**
$$
E = nh\nu, \quad n=1,2,3,...
$$

Average energy:
$$
\langle E \rangle = \frac{h\nu}{e^{\frac{h\nu}{k_{B}T}} - 1}
$$

Energy density:
$$
\rho(\nu)d\nu = \frac{8\pi h\nu^3}{c^3}\cdot \frac{1}{e^{\frac{h\nu}{k_{B}T}} - 1}d\nu
$$

- Matches experiment
- Basis of **quantum theory**

---

## **Atomic Spectra**
- Atoms emit **discrete line spectra**
- Classical model: accelerating electrons should radiate → unstable
- Observation: only line spectra
- Explained later by **quantum atomic models**

---

# Dual Nature of Radiation

## **Photoelectric Effect**

**Observations**
- Electron emission is **instantaneous**
- Occurs only if $\nu > \nu_0$ (threshold)
- Maximum kinetic energy:
$$
K_{\text{max}} = h\nu - \phi
$$
where $\phi$ = work function
- Independent of intensity

**Failure of Classical Wave Theory**
- Predicted energy buildup → delay
- Expected intensity dependence, not frequency
- Contradicted experiments

**Einstein’s Explanation (1905)**
- Light consists of **photons** with $E = h\nu$
- Explains **particle nature of light**

---

## **Compton Effect**
- X-ray scattering → observed longer wavelength photons
- Photon–electron collision (conservation of energy & momentum)

Change in wavelength:
$$
\Delta\lambda = \lambda_f - \lambda_i = \frac{h}{m_ec}(1 - \cos\theta)
$$

**Properties of Compton Shift**
- Independent of incident $\lambda$
- Independent of scattering medium
- Depends only on angle $\theta$
- $\frac{h}{m_ec}$ = **Compton wavelength** of electron = $2.42 \times 10^{-12}\,\text{m}$

Confirmed **particle nature of light**
# Matter Waves (de Broglie Hypothesis)

### Wave–Particle Duality
- Light shows **wave** and **particle** properties.
- de Broglie (1924): If light (wave) behaves as a particle, then particles should also have wave properties.

### de Broglie Wavelength
For a particle of momentum $p = mv$:
$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

For a particle accelerated through potential $V$ (charge $q$):
$$
\frac{1}{2}mv^2 = qV \quad \Rightarrow \quad v = \sqrt{\frac{2qV}{m}}
$$
thus:
$$
\lambda = \frac{h}{\sqrt{2m q V}}
$$

For electrons ($q=e$):
$$
\lambda = \frac{h}{\sqrt{2meV}}
$$

de Broglie wavelength of macroscopic objects is extremely small → effects negligible.

### Experimental Verification
- **Davisson–Germer experiment (1927):** Diffraction of electrons by nickel crystal.
- Confirmed wave nature of electrons and de Broglie hypothesis.

---

# Heisenberg’s Uncertainty Principle

### Statement
It is impossible to simultaneously measure the **exact position** and **exact momentum** of a particle:
$$
\Delta x \, \Delta p_x \geq \frac{\hbar}{2}
$$
where $\hbar = \frac{h}{2\pi}$.

Similarly for energy and time:
$$
\Delta E \, \Delta t \geq \frac{\hbar}{2}
$$

### Interpretation
- Any attempt to measure one observable precisely disturbs the other.
- Originates from wave nature of particles (wave packets).

### Examples
- Electron in an atom: localization leads to large momentum uncertainty.
- Explains impossibility of classical electron orbit without radiation.

---

# Schrödinger Wave Equation

### Time-Dependent Form
For a particle of mass $m$ in potential $V(\mathbf{r},t)$:
$$
i\hbar \frac{\partial \Psi}{\partial t} =
\left[
-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t)
\right]\Psi
$$

### Time-Independent Form
If $V$ does not depend on time:
$$
\left[
-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})
\right]\psi = E\psi
$$

where:
- $\Psi(\mathbf{r},t)$ = total wavefunction
- $\psi(\mathbf{r})$ = spatial part
- $E$ = energy eigenvalue

### Probability Interpretation
Probability density of finding particle at position $\mathbf{r}$:
$$
P(\mathbf{r},t) = |\Psi(\mathbf{r},t)|^2
$$
Normalized so that:
$$
\int |\Psi|^2 d\tau = 1
$$

---

# Particle in a 1-D Box (Infinite Potential Well)

### Potential
$$
V(x)=
\begin{cases}
0, & 0<x<L\\
\infty, & x\le 0 \text{ or } x\ge L
\end{cases}
$$

### Schrödinger Equation Inside the Box
$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi
$$
Solution:
$$
\psi(x)=A\sin(kx)+B\cos(kx)
$$

Boundary conditions:
$$
\psi(0)=\psi(L)=0
$$
gives:
$$
\psi_n(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right),\quad n=1,2,3,\dots
$$

### Energy Levels
$$
E_n=\frac{n^2\pi^2\hbar^2}{2mL^2},\quad n=1,2,3,\dots
$$

- Energy is quantized; no zero energy (lowest level $n=1$).
- Spacing between levels increases with $n$.

### Momentum Quantization
From $k=\frac{n\pi}{L}$:
$$
p_n=\hbar k=\frac{n\pi\hbar}{L}
$$

---

# Key Results Summary (Unit 1)

- **Maxwell’s equations** → EM waves propagate with $c=\frac{1}{\sqrt{\mu_0\epsilon_0}}$.
- **Energy transport**: Poynting vector $\vec{S}=\frac{1}{\mu_0}\vec{E}\times\vec{B}$.
- **Polarization**: linear, circular, elliptical states.
- **Blackbody radiation**: Planck’s quantization, avoids UV catastrophe.
- **Photoelectric effect**: $K_{\text{max}}=h\nu-\phi$.
- **Compton effect**: $\Delta\lambda=\frac{h}{m_ec}(1-\cos\theta)$.
- **Matter waves**: $\lambda=\frac{h}{p}$.
- **Uncertainty principle**: $\Delta x\Delta p\ge\frac{\hbar}{2}$.
- **Schrodinger equation**: foundation of quantum mechanics.
- **Particle in a box**: $E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}$.


