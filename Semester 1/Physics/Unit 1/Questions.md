---
dg-publish: true
---

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
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
# [[../Physics|Back]]

---

# Additional Question Bank

> **Source**: PESU Assessment Question Bank 2020-2023

Additional practice questions for Unit 1 (EM Waves, Quantum Concepts).

---

## CL1: Maxwell's Equations & Vector Operators

1. With suitable examples explain the significance of gradient, divergence and curl operators on fields.
2. Magnetic monopoles do not exist. Justify.
3. What is the physical meaning of gradient of a scalar function?
4. Estimate the energy per unit volume in a magnetic field.

---

## CL3: Energy & Polarization

1. Differentiate between circular and elliptical polarization states of electromagnetic waves.
2. Find the energy density of electromagnetic wave, if the electric field of amplitude 6.2 V/m oscillates with a frequency of 2.4 × 10¹⁰ Hz.
3. Discuss the energy density in electromagnetic waves and how is it related with the Poynting vectors?
4. Give expressions for two electric field wave functions that can produce circular polarization.

---

## CL4: Black Body Radiation

1. Describe the characteristics of a black body spectrum.
2. Find the average energy of an oscillator of frequency 5×10¹²/s at 300 K treating the oscillator as Planck's oscillator.
3. Using the quantum theory, derive the expression for energy density of blackbody radiation.
4. What was Planck's crucial contribution in explaining Black body spectrum?

---

## CL5: Compton Effect

1. How does classical theory fail to explain the results of Compton's experiment?
2. What are the angles at which the Compton shift is minimum and maximum? What are the conclusions drawn from these angles?
3. Calculate the energy that a photon must possess if it has to have a momentum equal to that of a 10MeV proton. In Compton Effect did you understand why the original peak at λ remained in the spectrum of the scattered radiation?
4. What is Compton shift? According to classical theory, the scattered X rays have the same frequency as the incident wave. Explain.

---

## CL6: Wave-Particle Duality

1. The central mystery of quantum mechanics lies in the single particle quantum interference. Do you understand why the resultant intensity?
2. If an electron and a proton have energy of 10 MeV, calculate their de Broglie wavelength.
3. Give a brief account of the Fourier transform.
4. An electron accelerated through some potential difference, crosses two points separated by a distance of 3m in 1μs with a steady state velocity. Calculate the de-Broglie wavelength of the accelerated electron and hence calculate the potential difference through which it has been accelerated.

---

## CL7: Wave Packets

1. Write an expression for a travelling wave explaining each term.
2. Derive a relation between group velocity and phase velocity.
3. When does group velocity become equal to phase velocity? Give an example.
4. How are phase and group velocity related for a monochromatic wave?

---

## CL8: Uncertainty Principle

1. State any three forms of the Heisenberg's Uncertainty Principle.
2. Demonstrate using Heisenberg's Uncertainty Principle that an electron can't exist inside a typical nucleus.
3. An atom in an excited state of life time Δt=10⁻⁸s makes a transition to a lower state emitting a photon of frequency of 3×10¹⁴Hz. Estimate the uncertainty in the frequency of the emitted photon.
4. State Heisenberg's uncertainty principle. Use the Gamma ray thought experiment to arrive at the principle.

---

## CL9: Wave Function

1. What is the significance of a quantum wave function?
2. What is the difference between probability density and probability?
3. How do you determine the value of the amplitude of a wave function?
4. Determine the probability of finding an electron in the limits x=0 to x= 0.5a when it is bound in a 1D box of length a.

---

## CL10: Operators & Expectation Values

1. Describe an Eigen value equation explaining each term.
2. Write any five operators associated with dynamical variables.
3. Define Expectation value.
4. Determine the expectation value of position of a particle bound between x=0 to x=3 and described by the wave function.

---

## CL12: Schrödinger's Equation

1. Why is Schrodinger's equation referred to as a linear equation?
2. Set up Schrödinger's time dependent wave equation as an Eigen value equation and time independent wave equation from Schrodinger's time dependent wave equation.
3. Schrodinger's equation is an operator equation. Explain.
4. Write the three dimensional Schrodinger wave equation.
5. A free particle is a classical entity. Justify.
6. Describe the state of a particle for the case of a free state, bound state and scattering state.
7. What is step potential in quantum mechanics?
8. What are the similarities and differences between the reflection of light from an air-glass boundary and the reflection of an electron from a potential step?

# [[../Physics|Back]]

***

# Unit 1: Worked Examples

### Example 1: EM Wave Properties
The electric field of an EM wave is given by $E(x, t)= 10^3 \cos(\omega t - 3\pi \times 10^6 x) \hat{z}$. Evaluate its properties.

#### Solution
Comparing with the standard form $E(x,t) = E_m \cos(\omega t - kx)$:
1.  **Speed**: The speed of an EM wave in vacuum is $c = 3 \times 10^8$ m/s.
2.  **Wave number (k)**: $k = 3\pi \times 10^6$ rad/m.
3.  **Wavelength ($\lambda$)**: $\lambda = \frac{2\pi}{k} = \frac{2\pi}{3\pi \times 10^6} = \frac{2}{3} \times 10^{-6}$ m.
4.  **Frequency ($\nu$)**: $\nu = \frac{c}{\lambda} = \frac{3 \times 10^8}{ (2/3) \times 10^{-6} } = 4.5 \times 10^{14}$ Hz.
5.  **Period (T)**: $T = \frac{1}{\nu} = \frac{1}{4.5 \times 10^{14}} \approx 2.22 \times 10^{-15}$ s.
6.  **Amplitude of E-field**: $E_0 = 10^3$ V/m.
7.  **Amplitude of B-field**: $B_0 = \frac{E_0}{c} = \frac{10^3}{3 \times 10^8} \approx 3.33 \times 10^{-6}$ T.
8.  **Direction**: Since $\vec{E}$ is in the $\hat{z}$ direction and the wave propagates in the $\hat{x}$ direction, the magnetic field $\vec{B}$ must be in the $\hat{y}$ direction (as $\vec{S} \propto \vec{E} \times \vec{B}$).

---

### Example 2: Planck's vs. Classical Energy
A harmonic oscillator has a frequency of $6.2 \times 10^{12}$ Hz at a temperature of 50°C (323 K). Compare its average energy according to Planck's law and the classical Rayleigh-Jeans law.

#### Solution
- **Planck's Law**:
  $$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT} - 1} = \frac{(6.626 \times 10^{-34})(6.2 \times 10^{12})}{e^{\frac{(6.626 \times 10^{-34})(6.2 \times 10^{12})}{(1.38 \times 10^{-23})(323)}} - 1}$$
  $$\langle E \rangle \approx \frac{4.11 \times 10^{-21}}{e^{0.923} - 1} \approx \frac{4.11 \times 10^{-21}}{2.517 - 1} \approx 2.71 \times 10^{-21} \text{ J}$$
- **Rayleigh-Jeans Law (Classical)**:
  $$\langle E \rangle = kT = (1.38 \times 10^{-23})(323) \approx 4.46 \times 10^{-21} \text{ J}$$

---

### Example 3: Compton Scattering Calculation
X-rays of wavelength 0.112 nm are scattered from a carbon target. Calculate the wavelength of X-rays scattered at an angle of $90^\circ$. What is the energy lost by the photon?

#### Solution
- **Compton Shift**: The Compton wavelength is $\lambda_C = h/(m_e c) \approx 2.426 \times 10^{-12}$ m.
  $$\Delta\lambda = \lambda_C(1 - \cos\theta) = (2.426 \times 10^{-12} \text{ m})(1 - \cos 90^\circ) = 2.426 \times 10^{-12} \text{ m}$$
- **Final Wavelength**:
  $$\lambda_f = \lambda_i + \Delta\lambda = (0.112 \times 10^{-9}) + (2.426 \times 10^{-12}) \approx 0.1144 \times 10^{-9} \text{ m} = 0.1144 \text{ nm}$$
- **Energy Lost**:
  $$E_{lost} = E_i - E_f = hc\left(\frac{1}{\lambda_i} - \frac{1}{\lambda_f}\right)$$
  $$E_{lost} = (6.626 \times 10^{-34})(3 \times 10^8)\left(\frac{1}{0.112 \times 10^{-9}} - \frac{1}{0.1144 \times 10^{-9}}\right)$$
  $$E_{lost} \approx (1.988 \times 10^{-25})\left(8.9286 \times 10^9 - 8.7413 \times 10^9\right)$$
  $$E_{lost} \approx (1.988 \times 10^{-25})(0.1873 \times 10^9) \approx 3.72 \times 10^{-17} \text{ J}$$
  $$E_{lost} (eV) = \frac{3.72 \times 10^{-17}}{1.602 \times 10^{-19}} \approx 232 \text{ eV}$$

---

### Example 4: De-Broglie Wavelength of an Electron
Find the de Broglie wavelength of an electron moving at a speed of $10^7$ m/s.

#### Solution
$$\lambda = \frac{h}{m_e v} = \frac{6.626 \times 10^{-34}}{(9.11 \times 10^{-31})(10^7)} \approx 7.27 \times 10^{-11} \text{ m} = 0.0727 \text{ nm}$$

---

### Example 5: De-Broglie Wavelength of an Alpha Particle
An alpha particle ($m_\alpha = 4 m_p$, $q=2e$) is accelerated through a potential difference of 1 kV. Find its de Broglie wavelength.

#### Solution
The kinetic energy gained is $E_k = qV = (2 \times 1.602 \times 10^{-19} \text{ C})(1000 \text{ V}) = 3.204 \times 10^{-16}$ J.
Mass of alpha particle $m_\alpha \approx 4 \times 1.672 \times 10^{-27} \text{ kg} \approx 6.688 \times 10^{-27}$ kg.
Momentum $p = \sqrt{2m_\alpha E_k}$.
$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m_\alpha E_k}}$$
$$\lambda = \frac{6.626 \times 10^{-34}}{\sqrt{2(6.688 \times 10^{-27})(3.204 \times 10^{-16})}} \approx 3.2 \times 10^{-13} \text{ m}$$

---

### Example 6: Phase and Group Velocity
A wave packet is represented as $y=10 \sin(30t-40x) \cos(0.3t-0.5x)$. Find the phase and group velocities.

#### Solution
Comparing to the form $y=2A\cos(\frac{\Delta\omega t - \Delta k x}{2})\sin(\omega t - kx)$:
* High frequency part: $\omega = 30$, $k = 40$.
* Low frequency (envelope) part: $\Delta\omega/2 = 0.3 \implies \Delta\omega=0.6$, and $\Delta k/2 = 0.5 \implies \Delta k=1.0$.
* **Phase Velocity**: $v_p = \frac{\omega}{k} = \frac{30}{40} = 0.75$ m/s.
* **Group Velocity**: $v_g = \frac{d\omega}{dk} \approx \frac{\Delta\omega}{\Delta k} = \frac{0.6}{1.0} = 0.6$ m/s.

---

### Example 7: Uncertainty Principle Calculation
The speed of an electron is measured to be 1 km/s with an accuracy of 0.005%. Estimate the minimum uncertainty in its position.

#### Solution
- Velocity uncertainty: $\Delta v = (1000 \text{ m/s}) \times (\frac{0.005}{100}) = 0.05$ m/s.
- Using Heisenberg's Uncertainty Principle, $\Delta x \cdot \Delta p \ge \hbar/2$:
  $$\Delta x \ge \frac{\hbar}{2 \Delta p} = \frac{\hbar}{2 m_e \Delta v} = \frac{1.054 \times 10^{-34}}{2 (9.11 \times 10^{-31})(0.05)} \approx 1.157 \times 10^{-3} \text{ m} \approx 1.16 \text{ mm}$$

---

### Example 8: Spectral Line Width
The spectral line of Mercury green is 546.1 nm and has a measured width of $10^{-5}$ nm. Evaluate the minimum time spent by the electrons in the upper state.

#### Solution
Using the energy-time uncertainty, $\Delta E \cdot \Delta t \ge \hbar/2$. We relate $\Delta E$ to $\Delta \lambda$:
$E = hc/\lambda \implies |\Delta E| \approx \frac{hc}{\lambda^2} |\Delta\lambda|$.
$$\Delta t \ge \frac{\hbar}{2 \Delta E} = \frac{\hbar \lambda^2}{2 hc \Delta\lambda} = \frac{\lambda^2}{4\pi c \Delta\lambda}$$
$$\Delta t \ge \frac{(546.1 \times 10^{-9})^2}{4\pi (3 \times 10^8)(10^{-5} \times 10^{-9})} \approx 7.9 \times 10^{-9} \text{ s} \approx 7.9 \text{ ns}$$

---

### Example 9: Uncertainty for a Confined Particle
A proton is confined to a box of length 2 nm. What is the minimum uncertainty in its velocity?

#### Solution
The maximum uncertainty in position is the width of the box, $\Delta x = 2 \times 10^{-9}$ m.
$$\Delta p \ge \frac{\hbar}{2 \Delta x} \implies m_p \Delta v \ge \frac{\hbar}{2 \Delta x}$$
$$\Delta v \ge \frac{\hbar}{2 m_p \Delta x} = \frac{1.054 \times 10^{-34}}{2 (1.67 \times 10^{-27})(2 \times 10^{-9})} \approx 15.8 \text{ m/s}$$

---

### Example 10: Probability in a 1D Box
Evaluate the probability of locating a particle trapped in an infinite potential well of width L between the limits L/4 and 3L/4, assuming the particle is in the 3rd excited state (n=4).

#### Solution
The probability is $P = \int_{L/4}^{3L/4} |\psi_4(x)|^2 dx$.
$$P = \int_{L/4}^{3L/4} \frac{2}{L}\sin^2\left(\frac{4\pi x}{L}\right) dx = \frac{2}{L} \int_{L/4}^{3L/4} \frac{1}{2}\left(1-\cos\left(\frac{8\pi x}{L}\right)\right) dx$$
$$P = \frac{1}{L} \left[ x - \frac{L}{8\pi}\sin\left(\frac{8\pi x}{L}\right) \right]_{L/4}^{3L/4}$$
$$P = \frac{1}{L} \left[ (\frac{3L}{4} - \frac{L}{8\pi}\sin(6\pi)) - (\frac{L}{4} - \frac{L}{8\pi}\sin(2\pi)) \right]$$
Since $\sin(6\pi) = 0$ and $\sin(2\pi) = 0$:
$$P = \frac{1}{L} \left[ \frac{3L}{4} - \frac{L}{4} \right] = \frac{1}{L} \left[ \frac{2L}{4} \right] = \frac{1}{2}$$

---

### Example 11: Minimum Energy in a 1D Box (Nucleus)
What is the minimum energy (ground state, n=1) of an electron trapped in a 1D region the size of an atomic nucleus ($10^{-14}$ m)?

#### Solution
$$E_n = \frac{n^2 h^2}{8 m_e L^2}$$
$$E_1 = \frac{(1)^2 (6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31})(10^{-14})^2} \approx 6.02 \times 10^{-10} \text{ J}$$
Convert to MeV ($1 \text{ MeV} = 1.602 \times 10^{-13}$ J):
$$E_1 \approx \frac{6.02 \times 10^{-10}}{1.602 \times 10^{-13}} \approx 3758 \text{ MeV} \approx 3.76 \text{ GeV}$$
This incredibly high energy suggests electrons cannot exist within the nucleus.

---
### Example 12: Normalization Constant
Find the normalization constant A, given that $\psi(x)=A~e^{-\alpha x^{2}}$ , $(-\infty < x < \infty)$, $\alpha > 0$.

#### Solution
Normalization condition: $\int_{-\infty}^{\infty} \psi^* \psi dx = 1$.
$$\int_{-\infty}^{\infty} (A e^{-\alpha x^2})^* (A e^{-\alpha x^2}) dx = A^2 \int_{-\infty}^{\infty} e^{-2\alpha x^2} dx = 1$$
This is a standard Gaussian integral: $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}$.
Here $a = 2\alpha$.
$$A^2 \sqrt{\frac{\pi}{2\alpha}} = 1$$
$$A^2 = \sqrt{\frac{2\alpha}{\pi}}$$
$$A = \left(\frac{2\alpha}{\pi}\right)^{1/4}$$

---
### Example 13: Momentum Eigenvalue
Find the eigenvalue of momentum corresponding to the wavefunction $\psi(x)=Ae^{-ikx}$.

#### Solution
The momentum operator is $\hat{p}_x = -i\hbar \frac{\partial}{\partial x}$.
Apply the operator to the wave function:
$$\hat{p}_x \psi(x) = -i\hbar \frac{\partial}{\partial x} (A e^{-ikx})$$
$$\hat{p}_x \psi(x) = -i\hbar A (-ik) e^{-ikx}$$
$$\hat{p}_x \psi(x) = -i^2 \hbar k (A e^{-ikx})$$
$$\hat{p}_x \psi(x) = (+1) \hbar k \psi(x)$$
This is in the form $\hat{A}\psi = a\psi$.
The eigenvalue of momentum is $p = \hbar k$.

***
# [[../Physics|Back]]
