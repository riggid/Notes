# Maxwell's Equations

### **In a Medium**
- **Gauss's law for electric fields**: $\nabla \cdot \overrightarrow{E} = \frac{\rho}{\epsilon_{0}}$
- **Gauss's law for magnetic fields**: $\nabla \cdot \overrightarrow{B} = 0$
  - *Implies no magnetic monopoles.*
- **Faraday's law**: $\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}$
- **Ampere–Maxwell law**: $\nabla \times \overrightarrow{B} = \mu_{0}\overrightarrow{J} + \mu_{0}\epsilon_{0} \frac{\partial \overrightarrow{E}}{\partial t}$
  - *Includes Maxwell's **displacement current**.*

### **In Free Space**
- No charges ($\rho=0$) or currents ($\overrightarrow{J}=0$).
1. $\nabla \cdot \overrightarrow{E} = 0$
2. $\nabla \cdot \overrightarrow{B} = 0$
3. $\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}$
4. $\nabla \times \overrightarrow{B} = \mu_{0}\epsilon_{0} \frac{\partial \overrightarrow{E}}{\partial t}$

### **Derivation of the Wave Equation**
- Taking the curl of Faraday's Law leads to the **wave equation** for the electric field:
$$ \nabla^2 \overrightarrow{E} = \mu_{0}\epsilon_{0} \frac{\partial^2 \overrightarrow{E}}{\partial t^2} $$
- This implies the speed of light is $c = \frac{1}{\sqrt{\mu_{0}\epsilon_{0}}}$.
- A similar derivation for the magnetic field yields:
$$ \nabla^2 \overrightarrow{B} = \frac{1}{c^2} \frac{\partial^2 \overrightarrow{B}}{\partial t^2} $$
- Thus, $\overrightarrow{E}$ and $\overrightarrow{B}$ propagate as transverse waves at the speed of light.

---

# Energy and Polarization of EM Waves

### **Energy of EM Waves**
- Energy density of electric field: $u_E = \frac{1}{2}\epsilon_{0}E^2$
- Energy density of magnetic field: $u_B = \frac{B^2}{2\mu_{0}}$
- For an EM wave, the energy densities are equal: $u_E = u_B$.
- Total energy density: $u = u_E + u_B = \epsilon_{0}E^2$

### **Poynting Vector**
- Describes the direction and magnitude of energy flow in an EM wave.
$$ \vec{S} = \frac{1}{\mu_{0}} \vec{E} \times \vec{B} $$
- Average intensity (energy per unit time per unit area):
$$ \langle S \rangle = \frac{1}{2}\epsilon_{0}cE_{0}^2 $$

### **Polarization States**
- **Unpolarized**: Electric field oscillates in random planes.
- **Linearly Polarized**: Electric field oscillates in a single plane.
- **Circularly Polarized**: Two equal-amplitude components with a $90^\circ$ phase difference. The E-field tip traces a circle.
- **Elliptically Polarized**: Unequal amplitudes or an arbitrary phase difference. The E-field tip traces an ellipse.

---

# Failures of Classical Theory

### **Blackbody Radiation**
- **Classical View (Rayleigh–Jeans Law)**:
$$ \rho(\nu) d\nu = \frac{8\pi \nu^2}{c^3} k_{B}T d\nu $$
  - Fails at high frequencies, leading to the **Ultraviolet Catastrophe**.
- **Planck’s Hypothesis (Quantum View)**:
  - Energy is quantized: $E = nh\nu$.
  - Average energy: $ \langle E \rangle = \frac{h\nu}{e^{\frac{h\nu}{k_{B}T}} - 1} $
  - Energy density (matches experiment):
$$ \rho(\nu)d\nu = \frac{8\pi h\nu^3}{c^3}\cdot \frac{1}{e^{\frac{h\nu}{k_{B}T}} - 1}d\nu $$

### **Atomic Spectra**
- **Observation**: Atoms emit and absorb light at discrete, specific frequencies (line spectra).
- **Classical Failure**: An orbiting electron is accelerating and should radiate continuously, lose energy, and spiral into the nucleus. This contradicts the observed stability and line spectra.

---

# Dual Nature of Radiation

### **Photoelectric Effect**
- **Observations**:
  - Instantaneous electron emission.
  - Emission only occurs if frequency $\nu > \nu_0$ (threshold frequency).
  - Max kinetic energy depends on frequency, not intensity:
$$ K_{\text{max}} = h\nu - \phi $$
- **Einstein’s Explanation**: Light consists of particles (**photons**) with energy $E = h\nu$. This confirmed the **particle nature of light**.

### **Compton Effect**
- Scattering of X-rays off electrons results in a longer wavelength for the scattered photon.
- Treated as a particle-particle collision (photon-electron).
- **Change in wavelength (Compton Shift)**:
$$ \Delta\lambda = \lambda_f - \lambda_i = \frac{h}{m_e c}(1 - \cos\theta) $$
- The shift depends only on the scattering angle $\theta$, confirming the particle nature of light.

---

# Matter Waves and Uncertainty

### **de Broglie Hypothesis**
- **Wave-Particle Duality**: If waves (light) can act like particles, then particles should act like waves.
- **de Broglie Wavelength**: For a particle with momentum $p=mv$:
$$ \lambda = \frac{h}{p} $$
- **Experimental Verification**: Davisson–Germer experiment showed electron diffraction, confirming the wave nature of matter.

### **Heisenberg’s Uncertainty Principle**
- It's impossible to simultaneously know the exact position and momentum of a particle.
$$ \Delta x \Delta p_x \geq \frac{\hbar}{2} $$
- Similarly for energy and time:
$$ \Delta E \Delta t \geq \frac{\hbar}{2} $$
- This is a fundamental consequence of the wave nature of particles.

---

# Schrödinger Wave Equation

### **The Wavefunction**
- A particle is described by a **wavefunction**, $\Psi(\mathbf{r},t)$.
- **Probability Density**: The probability of finding the particle at a position $\mathbf{r}$ is given by $|\Psi(\mathbf{r},t)|^2$.
- **Normalization**: The total probability of finding the particle somewhere must be 1:
$$ \int |\Psi|^2 d\tau = 1 $$

### **Time-Dependent Schrödinger Equation (TDSE)**
- Describes the evolution of the wavefunction over time.
$$ i\hbar \frac{\partial \Psi}{\partial t} = \left[ -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t) \right]\Psi $$

### **Time-Independent Schrödinger Equation (TISE)**
- Used for systems where the potential energy $V$ does not depend on time.
$$ \left[ -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}) \right]\psi(\mathbf{r}) = E\psi(\mathbf{r}) $$
- $E$ represents the allowed, quantized energy levels (eigenvalues) of the system.

---

# Particle in a 1-D Box

- A fundamental quantum mechanics problem.
- **Potential**: $V(x) = 0$ for $0 < x < L$, and $V(x) = \infty$ otherwise.
- **Wavefunction**: The solutions to the TISE inside the box are:
$$ \psi_n(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right) \quad (n=1,2,3,\dots) $$
- **Quantized Energy Levels**: The particle can only have specific, discrete energy values:
$$ E_n=\frac{n^2\pi^2\hbar^2}{2mL^2} \quad (n=1,2,3,\dots) $$
- The lowest possible energy (ground state) is for $n=1$, not zero.