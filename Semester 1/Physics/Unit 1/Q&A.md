# [Back](../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 1: Q&A and Worked Problems

***
## CL1 Questions: Maxwell's Equations & Vector Calculus

### What is the physical meaning of each of the Maxwell's equations?

#### Answer
1.  **Gauss's Law for $\vec{E}$**: Electric field lines originate from positive charges and end on negative charges. The net outward electric flux through any closed surface is proportional to the net charge enclosed.
2.  **Gauss's Law for $\vec{B}$**: Magnetic field lines always form closed loops. There are no isolated magnetic poles (monopoles). The net magnetic flux through any closed surface is zero.
3.  **Faraday's Law**: A changing magnetic field creates a circulating electric field (electromagnetic induction).
4.  **Ampere-Maxwell Law**: Magnetic fields are created by moving electric charges (currents) and also by changing electric fields (displacement current).

***

### Connect the Four Maxwell's equations to Faraday's, Gauss's and Ampere's laws.

#### Answer
Maxwell's equations are the mathematical formulations of these fundamental laws:
1.  $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$: **Gauss's Law for Electric Fields**.
2.  $\nabla \cdot \vec{B} = 0$: **Gauss's Law for Magnetic Fields**.
3.  $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$: **Faraday's Law of Induction**.
4.  $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$: **Ampere-Maxwell Law** (Ampere's Law modified by Maxwell to include displacement current).

***

### Explain the geometric interpretation of the gradient, divergence and curl of a vector field?

#### Answer
* **Gradient ($\nabla f$)**: (Applies to scalar fields) A vector pointing in the direction of the maximum rate of spatial increase of the scalar field, with magnitude equal to that rate.
* **Divergence ($\nabla \cdot \vec{A}$)**: A scalar measuring the "outward flux density" or "source density" of the vector field at a point. It quantifies how much the field spreads out from that point.
* **Curl ($\nabla \times \vec{A}$)**: A vector measuring the "circulation density" or "vorticity" of the vector field at a point. Its direction indicates the axis of rotation, and its magnitude indicates the strength of the rotation.

***
## CL2 Questions: Maxwell's Equations & EM Waves

### Differentiate between the integral and differential forms of Maxwell's equations. Why is it that we need the differential form?

#### Answer
* **Integral Forms**: Describe field behavior over **extended regions** (volumes, surfaces, lines). Useful for calculations with symmetry.
* **Differential Forms**: Describe field behavior **at a specific point**. Relate local spatial variations (divergence, curl) to local sources or time variations.
* **Need for Differential Form**: They represent **local laws**, holding true everywhere. They are essential for deriving other results (like the wave equation) and for analyzing fields in complex situations without symmetry.

***

### Which of Maxwell's equations contain 'sources'?

#### Answer
1.  **Gauss's Law for $\vec{E}$**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$. Source: **electric charge density** $\rho$.
2.  **Ampere-Maxwell Law**: $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$. Sources: **electric current density** $\vec{J}$ and **displacement current** density $\epsilon_0 \frac{\partial\vec{E}}{\partial t}$.

***

### How do Maxwell's equations predict the existence of electromagnetic waves?

#### Answer
By combining Maxwell's equations in free space ($\rho=0, \vec{J}=0$), one can mathematically derive the **wave equation** for both $\vec{E}$ and $\vec{B}$:
$$\nabla^{2}\vec{E}=\mu_{o}\epsilon_{o}\frac{\partial^{2}\vec{E}}{\partial t^{2}}$$
This equation describes waves propagating at speed $c = 1/\sqrt{\mu_0 \epsilon_0}$, the speed of light, showing that light is an electromagnetic wave.

***

### Discuss the phase correlation and direction of the E and B fields of an EM Wave.

#### Answer
For a plane electromagnetic wave:
* $\vec{E}$ and $\vec{B}$ are **in phase**.
* They are **mutually perpendicular**.
* Both are **perpendicular to the direction of propagation** (transverse).
* The direction of propagation is given by $\vec{E} \times \vec{B}$.

***

### Starting from Maxwell's equations, obtain the wave equation of a transverse electric wave in free space and compare this with the corresponding plane magnetic wave.

#### Answer
Maxwell's equations for free space:
(1) $\nabla \cdot \vec{E}=0$
(2) $\nabla \cdot \vec{B}=0$
(3) $\nabla \times \vec{E}=-(\partial \vec{B}/\partial t)$
(4) $\nabla \times \vec{B}=\mu_{o}\epsilon_{o}(\partial \vec{E}/\partial t)$

Take the curl of (3): $\nabla \times (\nabla \times \vec{E}) = \nabla \times (-\partial \vec{B}/\partial t) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$.
Use vector identity $\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}$.
Substitute (1) and (4): $\nabla(0) - \nabla^2 \vec{E} = -\frac{\partial}{\partial t}(\mu_o \epsilon_o \frac{\partial \vec{E}}{\partial t})$.
$$-\nabla^2 \vec{E} = -\mu_o \epsilon_o \frac{\partial^2 \vec{E}}{\partial t^2}$$
$$\nabla^2 \vec{E} = \mu_o \epsilon_o \frac{\partial^2 \vec{E}}{\partial t^2} = \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2}$$
This is the wave equation for the electric field vector.
A similar derivation starting by taking the curl of (4) yields the identical wave equation for the magnetic field vector:
$$\nabla^2 \vec{B} = \frac{1}{c^2} \frac{\partial^2 \vec{B}}{\partial t^2}$$
Both fields obey the same wave equation, propagating at speed $c$.

***
## CL3 Questions: Polarization & Energy Flow

### Differentiate between circular and elliptical polarization of light.

#### Answer
* **Circular Polarization**: Electric field vector rotates in a **circle**. Requires two perpendicular components with **equal amplitudes** and a **$90^{\circ}$ phase difference**.
* **Elliptical Polarization**: Electric field vector traces an **ellipse**. General case: occurs with **unequal amplitudes** or a **phase difference other than $0^\circ, \pm 90^\circ, 180^\circ$**.

***

### Show that an unpolarised light is equivalent to two mutually perpendicular plane polarised light where the phase difference between them is ninety degrees.

#### Answer
This statement is incorrect. Unpolarized light is statistically equivalent to the superposition of **two incoherent, perpendicular, plane-polarized waves of equal average intensity**. "Incoherent" means the phase difference between them fluctuates randomly and rapidly. A fixed $90^\circ$ phase difference would result in circular (if equal amplitude) or elliptical polarization.

***

### How many kinds of solution exists for the wave equation? Explain with reference to line and point sources.

#### Answer
The wave equation admits various solutions depending on boundary conditions and source geometry. Key types include:
1.  **Plane Waves**: Infinite flat wavefronts, $A e^{i(\vec{k}\cdot\vec{r} - \omega t)}$. Approximations far from sources.
2.  **Spherical Waves**: Radiate uniformly outward from a **point source**, amplitude decreases as $1/r$. $\frac{f(r-vt)}{r}$.
3.  **Cylindrical Waves**: Radiate uniformly outward from a **line source**, amplitude decreases as $1/\sqrt{r}$. Involve Bessel functions.

***

### Set up a general second order differential equation by partially differentiating the wave function $y = a \sin(\omega t - kx)$. Explain each term.

#### Answer
Wave function: $y(x,t) = a \sin(\omega t - kx)$
* $y$: Instantaneous displacement.
* $a$: Amplitude.
* $\omega$: Angular frequency.
* $t$: Time.
* $k$: Wave number.
* $x$: Position.
Partial derivatives:
$\frac{\partial^2 y}{\partial t^2} = -a \omega^2 \sin(\omega t - kx) = -\omega^2 y$
$\frac{\partial^2 y}{\partial x^2} = -a (-k)^2 \sin(\omega t - kx) = -k^2 y$
Combining gives $\frac{\partial^2 y}{\partial t^2} = \frac{\omega^2}{k^2} \frac{\partial^2 y}{\partial x^2}$. With wave speed $v = \omega/k$, this is the wave equation:
$$\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}$$

***

### Find the energy density of an electromagnetic wave if the E-field amplitude is 6.2 V/m.

#### Answer
Average energy density $\langle u \rangle = \frac{1}{2}\epsilon_{0}E_{max}^{2}$.
$$\langle u \rangle = \frac{1}{2}(8.85\times10^{-12}) \times (6.2)^2 \approx 1.70\times10^{-10} \text{ J/m}^{3}$$

***

### Discuss the energy density in electromagnetic waves and how is it related to the Poynting vector?

#### Answer
* **Energy Density ($u$)**: Instantaneous energy per volume $u = \frac{1}{2}\epsilon_0 E^2 + \frac{1}{2\mu_0} B^2 = \epsilon_0 E^2$. Average density $\langle u \rangle = \frac{1}{2}\epsilon_0 E_{max}^2$.
* **Poynting Vector ($\vec{S}$)**: Energy flux (Power/Area) and direction. $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$.
* **Relationship:** Intensity $S = u c$. Average intensity $\langle S \rangle = \langle u \rangle c$.

---
## CL4 Questions: Blackbody Radiation

### Describe the characteristics of a black body spectrum.

#### Answer
1.  **Continuity and Peak**: Continuous spectrum with intensity peaking at $\lambda_{max}$ (or $\nu_{max}$).
2.  **Wien's Law**: Peak shifts to shorter $\lambda$ (higher $\nu$) as $T$ increases ($\lambda_{max} T = \text{const}$).
3.  **Stefan-Boltzmann Law**: Total radiated power $\propto T^4$.

***

### Write Planck's formula for black body radiation.

#### Answer
Spectral energy density:
$$\rho(\nu) = \frac{8\pi h\nu^{3}}{c^{3}}\frac{1}{e^{h\nu/kT}-1}$$

***

### Find the average energy of an oscillator of frequency $5\times10^{12}$ Hz at 300 K treating it as a Planck's oscillator.

#### Answer
$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
$\frac{h\nu}{kT} = \frac{(6.626\times10^{-34})(5\times10^{12})}{(1.38\times10^{-23})(300)} \approx 0.800$.
$\langle E \rangle = \frac{(6.626\times10^{-34})(5\times10^{12})}{e^{0.800}-1} \approx 2.70 \times 10^{-21} \text{ J}$.

***

### Calculate the average energy of Planck's oscillator of frequency $5.6 \times 10^{12}$ Hz at 330 K.

#### Answer
$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
$\frac{h\nu}{kT} = \frac{(6.626\times10^{-34})(5.6\times10^{12})}{(1.38\times10^{-23})(330)} \approx 0.814$.
$\langle E \rangle = \frac{(6.626\times10^{-34})(5.6\times10^{12})}{e^{0.814}-1} \approx 2.95 \times 10^{-21} \text{ J}$.

***

### Evaluate how Planck's hypothesis of quantized energy changed the understanding of electromagnetic radiation?

#### Answer
Planck's hypothesis fundamentally changed the view of EM radiation from purely continuous waves to entities possessing particle-like properties concerning energy exchange. Key changes include:
1.  **Quantization of Energy**: Energy is not continuous but exchanged in discrete packets $E=h\nu$.
2.  **Resolution of UV Catastrophe**: By limiting the average energy of high-frequency oscillators at a given temperature, Planck's formula correctly predicted the observed blackbody spectrum, avoiding the infinite energy prediction of classical physics.
3.  **Foundation for Wave-Particle Duality**: It provided the first step towards understanding that light has both wave and particle characteristics, paving the way for Einstein's explanation of the photoelectric effect and later quantum mechanics.

***

### Compare and contrast the Rayleigh-Jeans law and Planck's radiation law. Why does one succeed where the other fails?

#### Answer
* **Rayleigh-Jeans Law**: Derived using classical physics (electromagnetism and equipartition theorem). Assumes energy is continuous. Formula: $\rho(\nu) = \frac{8\pi \nu^2}{c^3} kT$. Outcome: Agrees with experiment only at low frequencies; predicts infinite energy at high frequencies (UV catastrophe).
* **Planck's Law**: Derived by introducing the quantum hypothesis (energy is quantized, $E=nh\nu$). Formula: $\rho(\nu) = \frac{8\pi h\nu^3}{c^3} \frac{1}{e^{h\nu/kT}-1}$. Outcome: Agrees perfectly with experiment at all frequencies. Reduces to Rayleigh-Jeans at low frequencies.
* **Success/Failure**: Planck succeeded because his quantization assumption correctly limited the average energy of high-frequency oscillators at a given temperature ($\langle E \rangle \to 0$ as $\nu \to \infty$), whereas Rayleigh-Jeans assumed $\langle E \rangle = kT$ for all frequencies, leading to divergence.

***

### Apply Planck's radiation law to explain why the color of a heated body changes from red to white with increasing temperature.

#### Answer
Planck's law shows that as temperature (T) increases:
1.  The overall intensity of radiation increases rapidly ($\propto T^4$).
2.  The peak of the emission spectrum shifts to higher frequencies (shorter wavelengths) according to Wien's Law ($\lambda_{max} \propto 1/T$).
At lower temperatures (e.g., ~800K), the peak is in the infrared, but enough radiation is emitted in the long-wavelength visible spectrum (red) for the object to appear "red hot". As T increases further (e.g., ~3000K), the peak shifts into the visible spectrum, and significant amounts of radiation are emitted across all visible wavelengths (red, orange, yellow, green, blue, violet). The combination of these colors is perceived by the eye as white light, making the object appear "white hot". At even higher temperatures (~6000K like the sun), the peak is near the middle of the visible spectrum (yellow/green), but strong emission across the visible range still results in a white appearance, perhaps slightly bluish.

---
## CL5 & CL6 Questions: The Compton Effect

### How does classical theory fail to explain the results of Compton's experiment?

#### Answer
Classical wave theory predicts scattered light should have the **same wavelength** as incident light. Compton observed scattered X-rays had a **longer wavelength**, with the shift depending on the **scattering angle**. Classical theory cannot explain this wavelength change.

***

### What are the angles at which the Compton shift is minimum and maximum?

#### Answer
$\Delta\lambda=\frac{h}{m_{e}c}(1-\cos\theta)$.
* **Minimum shift**: $\Delta\lambda = 0$ at **$\theta = 0^{\circ}$**.
* **Maximum shift**: $\Delta\lambda = \frac{2h}{m_e c}$ at **$\theta = 180^{\circ}$**.

***

### Explain Compton shift and prove that for two photons of different initial energies scattered at the same angle, their Compton shifts are identical.

#### Answer
**Compton shift ($\Delta\lambda$)** is the increase in wavelength $\lambda_f - \lambda_i$ of a photon after scattering off a free electron.
The formula derived from conservation laws is:
$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$$
**Proof:** The formula for $\Delta\lambda$ depends only on constants ($h, m_e, c$) and the scattering angle $\theta$. It **does not depend** on the initial photon wavelength $\lambda_i$ or energy $E_i$. Therefore, if two photons scatter at the **same angle $\theta$**, their wavelength shifts ($\Delta\lambda$) will be **identical**, regardless of their initial energies.

***

### Discuss how the Compton Effect supports the concept of wave-particle duality.

#### Answer
The Compton Effect provides strong evidence for the **particle nature of light (photons)**. Explaining the observed wavelength shift requires treating the photon as a particle with energy $E=h\nu$ and momentum $p=h/\lambda$, which collides with an electron. Applying particle conservation laws (energy and momentum) correctly predicts the shift. Since light also exhibits wave properties (interference, diffraction), the Compton effect reinforces the concept of **wave-particle duality**.

***

### Explain why Compton scattering is negligible for optical photons. Support with numerical comparison.

#### Answer
The Compton shift $\Delta\lambda = \lambda_C(1-\cos\theta)$ is small ($\lambda_C \approx 0.00243$ nm) and independent of $\lambda_i$.
* **Visible Light**: $\lambda_i \approx 500$ nm. Max shift $\approx 0.00486$ nm. Fractional change $\Delta\lambda/\lambda_i \approx 10^{-5}$ (negligible).
* **X-rays**: $\lambda_i \approx 0.1$ nm. Max shift $\approx 0.00486$ nm. Fractional change $\Delta\lambda/\lambda_i \approx 0.05$ or 5% (significant).
The absolute shift is only comparable to the initial wavelength for high-energy photons.

***

### Comment on how the wavelength shift in Compton scattering would change if the scattering particle were a proton instead of an electron.

#### Answer
The shift $\Delta\lambda = \frac{h}{m c}(1 - \cos\theta)$ is inversely proportional to the mass $m$ of the scattering particle. Since a proton is much heavier than an electron ($m_p \approx 1836 m_e$), the Compton shift for scattering off a proton would be about **1836 times smaller** and generally undetectable for typical photon energies.

---
## CL7 Questions: Matter Waves

### What are matter waves? State the De-Broglie hypothesis.

#### Answer
**Matter waves** are waves associated with moving particles. The **de Broglie hypothesis** states that all particles in motion have an associated wave character, with wavelength $\lambda$ inversely proportional to momentum $p$: $\lambda = h/p$.

***

### Why is the wave nature of matter not apparent for macroscopic particles?

#### Answer
Because Planck's constant $h$ is extremely small, the de Broglie wavelength $\lambda = h/mv$ for macroscopic objects (large $m$) is incredibly tiny, far too small to produce observable wave effects.

***

### Calculate the de-Broglie wavelength of an oxygen molecule with mass $5.4\times10^{-26}$ kg moving at 500 m/s.

#### Answer
$\lambda = \frac{h}{mv} = \frac{6.626\times10^{-34}}{(5.4\times10^{-26}) \times (500)} \approx 2.45\times10^{-11} \text{ m}$.

***

### Electron diffraction at a double slit is proof of the wave nature of electrons. Justify.

#### Answer
The observation of an **interference pattern** (alternating maxima and minima) when electrons pass through a double slit, even one electron at a time, is definitive proof of their wave nature. This pattern can only be explained by the wave associated with each electron interfering with itself after passing through both slits simultaneously, a characteristic wave phenomenon. The fringe spacing matches the prediction using the electron's de Broglie wavelength.

***

### Electrons are diffracted at a double slit. D=100cm, d=0.20 $\mu$m. Fringe width w=2 mm. Calculate $\lambda$.

#### Answer
Fringe width $w = \frac{\lambda D}{d}$.
$\lambda = \frac{w d}{D} = \frac{(2 \times 10^{-3} \text{ m})(0.20 \times 10^{-6} \text{ m})}{1 \text{ m}} = 0.4 \times 10^{-9} \text{ m} = 0.4 \text{ nm}$.

***

### Is the wavelength of electrons on different orbits the same or different? If different what is the ratio of the wavelength in first and 4th orbits?

#### Answer
**Different**. In Bohr/de Broglie model, $\lambda_n = 2\pi r_n / n$. Since $r_n \propto n^2$, $\lambda_n \propto n$.
Ratio: $\frac{\lambda_1}{\lambda_4} = \frac{1}{4}$.

***

### The Davisson-Germer experiment used electrons accelerated to 54 V. Solve: a) Electron energy in J? b) Electron speed? c) Electron momentum? d) Electron wavelength?

#### Answer
a) $E_k = qV = (1.602 \times 10^{-19})(54) \approx 8.65 \times 10^{-18}$ J.
b) $v = \sqrt{2 E_k / m_e} = \sqrt{2 (8.65 \times 10^{-18}) / (9.11 \times 10^{-31})} \approx 4.36 \times 10^6$ m/s.
c) $p = m_e v = (9.11 \times 10^{-31})(4.36 \times 10^6) \approx 3.97 \times 10^{-24}$ kg m/s.
d) $\lambda = h/p = (6.626 \times 10^{-34}) / (3.97 \times 10^{-24}) \approx 1.67 \times 10^{-10}$ m = 0.167 nm.

***

### Show that the phase velocity $v_p$ of the de Broglie waves of a particle of rest mass $m_0$ is given by $v_p = c \sqrt{1 + (\frac{m_0 c \lambda}{h})^2}$.

#### Answer
$v_p = \lambda \nu = \lambda (E/h)$. Use relativistic $E = \sqrt{(pc)^2 + (m_0 c^2)^2}$ and $p = h/\lambda$.
$v_p = \frac{\lambda}{h} \sqrt{(\frac{hc}{\lambda})^2 + (m_0 c^2)^2} = \frac{\lambda c}{h} \sqrt{\frac{h^2}{\lambda^2} + m_0^2 c^2} = c \sqrt{1 + \frac{\lambda^2 m_0^2 c^2}{h^2}} = c \sqrt{1 + (\frac{m_0 c \lambda}{h})^2}$.

***

### Discuss the role of wave packet in signal processing.

#### Answer
In signal processing, a wave packet represents a signal that is localized in both time and frequency. Unlike a pure sine wave (localized in frequency but infinite in time) or a sharp pulse (localized in time but infinite in frequency), a wave packet provides a compromise. Techniques like the Short-Time Fourier Transform (STFT) or Wavelet Transform analyze signals by decomposing them into wave packets (or wavelets), allowing analysis of how the frequency content of a signal changes over time (time-frequency analysis), which is crucial for non-stationary signals like speech or music.

***

### How the group velocity and phase velocity related in relativistic quantum mechanics?

#### Answer
In relativistic QM, $E^2 = (pc)^2 + (m_0c^2)^2$.
Group velocity $v_g = dE/dp$. Differentiating $E^2=p^2c^2 + m_0^2c^4$ gives $2E dE = 2pc^2 dp \implies dE/dp = pc^2/E$. So $v_g = pc^2/E$. Since $E=mc^2$ and $p=mv$ (using relativistic mass $m$), $v_g = (mv)c^2/(mc^2) = v$. The group velocity equals the particle velocity.
Phase velocity $v_p = E/p$. Using $E=mc^2$ and $p=mv$, $v_p = mc^2 / mv = c^2/v$.
Thus, $v_g v_p = v (c^2/v) = c^2$. This relationship $v_g v_p = c^2$ holds for relativistic matter waves.

---
## CL8 Questions: The Uncertainty Principle

### State any three forms of the Heisenberg's Uncertainty Principle.

#### Answer
1.  **Position-Momentum:** $\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$.
2.  **Energy-Time:** $\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$.
3.  **Angular Position-Angular Momentum:** $\Delta \phi \cdot \Delta L_z \ge \frac{\hbar}{2}$.

***

### The Uncertainty principle is not significant for macroscopic bodies. Justify.

#### Answer
Because $\hbar$ is extremely small, the minimum uncertainties ($\Delta x$ or $\Delta p$) predicted by $\Delta x \Delta p \ge \hbar/2$ are far smaller than any possible measurement precision for macroscopic objects. For practical purposes, classical determinism holds.

***

### An atom in an excited state of lifetime $\Delta t=10^{-8}$ s emits a photon. Estimate the uncertainty in the frequency of the photon.

#### Answer
$\Delta E \cdot \Delta t \ge \hbar/2$. $\Delta E = h \Delta \nu$.
$(h \Delta \nu) \cdot \Delta t \ge \hbar/2 \implies \Delta \nu \ge \frac{1}{4\pi \Delta t}$.
$\Delta\nu \ge \frac{1}{4\pi (10^{-8})} \approx 7.96 \times 10^6 \text{ Hz}$.

---
## CL9 Questions: The Wave Function

### Give the physical interpretation of the wave function.

#### Answer
The wave function $\psi$ is the **probability amplitude**. Its squared magnitude, $|\psi|^2$, is the **probability density** of finding the particle at a given point in space and time.

***

### Mention the important properties of a wave function.

#### Answer
Must be: 1. Finite, 2. Single-valued, 3. Continuous, 4. Have continuous first derivatives, 5. Normalizable.

***

### Prove that $\psi^*(x,t)\psi(x,t)$ is necessarily real and either positive or zero.

#### Answer
Let $\psi(x,t) = A+iB$, where A and B are real functions.
Its complex conjugate is $\psi^*(x,t) = A-iB$.
$\psi^*\psi = (A-iB)(A+iB) = A^2 - (iB)^2 = A^2 - i^2 B^2 = A^2 + B^2$.
Since A and B are real, $A^2 \ge 0$ and $B^2 \ge 0$. Therefore, $A^2+B^2 \ge 0$ and is always real.

***

### What is the difference between probability density and probability?

#### Answer
* **Probability Density ($|\psi|^2$)**: Probability *per unit volume/length* at a point.
* **Probability ($P$)**: Dimensionless chance (0 to 1) of finding particle in a *finite region*, found by integrating density over the region.

***
## CL12 & CL13 Questions: Schrödinger's Equation & Normalization

### A free particle is a classical entity. Justify.

#### Answer
The energy spectrum for a free particle solution to the Schrödinger equation is **continuous**, not quantized, just like in classical mechanics.

***

### What is the physical significance of the normalization of a wave function?

#### Answer
Normalization ensures the total probability of finding the particle somewhere in all space is exactly 1 (100%), which is required for a consistent probabilistic interpretation. $\int |\psi|^2 dV = 1$.

***

### A particle is in a stationary state $\psi(x,t)=\phi(x)e^{-iEt/\hbar}$. Show $|\psi(x,t)|^2$ is time-independent. Physical implication?

#### Answer
$|\psi(x,t)|^2 = \psi^* \psi = (\phi^*(x)e^{+iEt/\hbar})(\phi(x)e^{-iEt/\hbar}) = |\phi(x)|^2 e^0 = |\phi(x)|^2$.
Since $|\phi(x)|^2$ depends only on position, the probability density is constant in time.
**Implication:** In a stationary state (energy eigenstate), the probability distribution does not change over time.

***

### Find the normalization constant A, given $\psi(x)=A e^{-\alpha x^2}$, $(-\infty < x < \infty)$, $\alpha > 0$.

#### Answer
$\int_{-\infty}^{\infty} |\psi|^2 dx = A^2 \int_{-\infty}^{\infty} e^{-2\alpha x^2} dx = 1$.
Gaussian integral $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\pi/a}$. Here $a=2\alpha$.
$A^2 \sqrt{\pi/(2\alpha)} = 1 \implies A^2 = \sqrt{2\alpha/\pi} \implies A = (2\alpha/\pi)^{1/4}$.

***

### Find the normalization constant B for $\psi=B[\sin(\pi x/L)+\sin(2\pi x/L)]$ (assume $0 \le x \le L$).

#### Answer
Need $\int_0^L |\psi|^2 dx = 1$.
$\int_0^L B^2 [\sin(\frac{\pi x}{L})+\sin(\frac{2\pi x}{L})]^2 dx = 1$.
Expand: $[\sin(A)+\sin(B)]^2 = \sin^2 A + \sin^2 B + 2\sin A \sin B$.
$\int_0^L \sin^2(\frac{\pi x}{L}) dx = L/2$.
$\int_0^L \sin^2(\frac{2\pi x}{L}) dx = L/2$.
$\int_0^L 2\sin(\frac{\pi x}{L})\sin(\frac{2\pi x}{L}) dx$. Use $2\sin A \sin B = \cos(A-B)-\cos(A+B)$.
$= \int_0^L [\cos(-\frac{\pi x}{L}) - \cos(\frac{3\pi x}{L})] dx = \int_0^L \cos(\frac{\pi x}{L}) dx - \int_0^L \cos(\frac{3\pi x}{L}) dx$.
$= [\frac{L}{\pi}\sin(\frac{\pi x}{L})]_0^L - [\frac{L}{3\pi}\sin(\frac{3\pi x}{L})]_0^L = (0-0) - (0-0) = 0$.
So the integral is $B^2 [L/2 + L/2 + 0] = B^2 L = 1$.
$B = \sqrt{1/L}$.

---
## CL14 Questions: Operators & Expectation Values

### Explain operators, observables, and the eigenvalue equation.

#### Answer
* **Observables**: Measurable physical quantities.
* **Operators**: Mathematical rules corresponding to observables.
* **Eigenvalue Equation**: $\hat{A}\psi = a\psi$. $\psi$ is an eigenfunction, $a$ is the eigenvalue (the definite measured value).

***

### Write five operators associated with dynamical variables.

#### Answer

| Observable           | Operator ($\hat{A}$)                                            |
| -------------------- | --------------------------------------------------------------- |
| Position (x)         | $\hat{x} = x$                                                   |
| Momentum ($p_x$)     | $\hat{p}_x = -i\hbar\frac{\partial}{\partial x}$                 |
| Kinetic Energy       | $\hat{K} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}$    |
| Potential Energy     | $\hat{V} = V(x)$                                                |
| Total Energy         | $\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)$ |

***

### Explain the concept of the "expectation value".

#### Answer
The **expectation value** $\langle A \rangle$ is the theoretical average result of measuring observable $A$ many times on identical systems in state $\psi$. $\langle A \rangle = \int \psi^* \hat{A} \psi dV$.

***

### Find the expectation value of position, $\langle x \rangle$, for a particle in a box of width L.

#### Answer
$\psi_n(x) = \sqrt{\frac{2}{L}}\sin(\frac{n\pi x}{L})$. $\hat{x}=x$.
$\langle x \rangle = \int_0^L x |\psi_n|^2 dx = \frac{2}{L} \int_0^L x \sin^2\left(\frac{n\pi x}{L}\right) dx = \frac{L}{2}$.

***

### Find the expectation values of position and momentum for $\psi(x)=Ne^{ikx}$ in $-a < x < a$.

#### Answer
First, normalize: $\int_{-a}^{a} |N e^{ikx}|^2 dx = N^2 \int_{-a}^{a} dx = N^2 (2a) = 1 \implies N=1/\sqrt{2a}$.
**Expectation value of position $\langle x \rangle$**:
$\langle x \rangle = \int_{-a}^{a} \psi^* \hat{x} \psi dx = \frac{1}{2a} \int_{-a}^{a} e^{-ikx} (x) e^{ikx} dx = \frac{1}{2a} \int_{-a}^{a} x dx$.
$= \frac{1}{2a} [\frac{x^2}{2}]_{-a}^{a} = \frac{1}{2a} [\frac{a^2}{2} - \frac{(-a)^2}{2}] = 0$.
**Expectation value of momentum $\langle p \rangle$**:
$\psi = \frac{1}{\sqrt{2a}} e^{ikx}$ is an eigenfunction of $\hat{p} = -i\hbar d/dx$.
$\hat{p}\psi = -i\hbar \frac{d}{dx} (\frac{1}{\sqrt{2a}} e^{ikx}) = -i\hbar (\frac{ik}{\sqrt{2a}} e^{ikx}) = \hbar k (\frac{1}{\sqrt{2a}} e^{ikx}) = \hbar k \psi$.
The eigenvalue is $\hbar k$. Since it's an eigenfunction, the expectation value is equal to the eigenvalue.
$\langle p \rangle = \hbar k$.

---
## State Vectors & Qubits (From Other Files)

### What is a state vector in quantum mechanics?

#### Answer
A state vector (ket $|\psi\rangle$) is a vector in a complex Hilbert space representing the complete quantum state of a system.

***

### What condition must two vectors $|\psi\rangle$ and $|\phi\rangle$ satisfy to be orthogonal?

#### Answer
Their inner product must be zero: $\langle \phi | \psi \rangle = 0$.

***

### Discuss orthogonality condition of the basis vectors.

#### Answer
Basis vectors $\{|e_i\rangle\}$ representing distinct physical outcomes are chosen to be mutually orthogonal: $\langle e_j | e_i \rangle = 0$ for $i \neq j$.

***

### What does it mean for a set of vectors to be an orthonormal basis?

#### Answer
It means they are mutually orthogonal ($\langle e_j | e_i \rangle = 0$ for $i \neq j$) AND each vector is normalized ($\langle e_i | e_i \rangle = 1$). Combined: $\langle e_j | e_i \rangle = \delta_{ij}$.

***

### Discuss few physical systems which can be modeled as two level quantum systems.

#### Answer
Examples: Spin-1/2 particle (up/down), photon polarization (horizontal/vertical), two specific energy levels of an atom (ground/excited), qubits ($|0\rangle / |1\rangle$).

***

### What is superposition in quantum computing, and how does it differ from classical binary states?

#### Answer
A classical bit is 0 OR 1. A qubit can be in a **superposition** of both states simultaneously: $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where $|\alpha|^2 + |\beta|^2 = 1$. It holds information about both states until measured.

***

### Explain the physical meaning of a projection state in quantum mechanics.

#### Answer
When a measurement is made on a system in superposition, the state "collapses" into one of the eigenstates corresponding to the measured value. This resulting eigenstate, representing the definite outcome *after* measurement, is the projection state.

***

### How is qubit represented in Bloch sphere?

#### Answer
A single qubit state $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$ is represented as a point on the surface of a unit sphere (Bloch sphere). $|0\rangle$ is at the North Pole, $|1\rangle$ at the South Pole. $\theta$ is the angle from the z-axis, $\phi$ is the angle in the xy-plane. Superpositions lie on the surface.

***

### A qubit is given by $(2+i)|0\rangle+(1-2i)|1\rangle$. Normalize the qubit and represent it in matrix form.

#### Answer
Norm squared $N^2 = |2+i|^2 + |1-2i|^2 = 5 + 5 = 10$. Normalization factor $1/\sqrt{10}$.
Normalized state: $|\psi_{norm}\rangle = \frac{1}{\sqrt{10}} (2+i)|0\rangle + \frac{1}{\sqrt{10}} (1-2i)|1\rangle$.
Matrix form: $|\psi_{norm}\rangle = \begin{pmatrix} \frac{2+i}{\sqrt{10}} \\ \frac{1-2i}{\sqrt{10}} \end{pmatrix}$.

***
# [Back](../Physics.md)