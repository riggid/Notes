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

### 1. What is the physical meaning of each of the Maxwell's equations?

#### Answer
1.  **Gauss's Law for $\vec{E}$**: Electric field lines originate from positive charges and end on negative charges. The net outward electric flux through any closed surface is proportional to the net charge enclosed.
2.  **Gauss's Law for $\vec{B}$**: Magnetic field lines always form closed loops. There are no isolated magnetic poles (monopoles). The net magnetic flux through any closed surface is zero.
3.  **Faraday's Law**: A changing magnetic field creates a circulating electric field (electromagnetic induction).
4.  **Ampere-Maxwell Law**: Magnetic fields are created by moving electric charges (currents) and also by changing electric fields (displacement current).

***

### 2. Connect the Four Maxwell's equations to Faraday's, Gauss's and Ampere's laws.

#### Answer
Maxwell's equations are the mathematical formulations of these fundamental laws:
1.  $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$: **Gauss's Law for Electric Fields**.
2.  $\nabla \cdot \vec{B} = 0$: **Gauss's Law for Magnetic Fields**.
3.  $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$: **Faraday's Law of Induction**.
4.  $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$: **Ampere-Maxwell Law** (Ampere's Law modified by Maxwell to include displacement current).

***

### 3. Explain the geometric interpretation of the gradient, divergence and curl of a vector field?

#### Answer
* **Gradient ($\nabla f$)**: (Applies to scalar fields) A vector pointing in the direction of the maximum rate of spatial increase of the scalar field, with magnitude equal to that rate.
* **Divergence ($\nabla \cdot \vec{A}$)**: A scalar measuring the "outward flux density" or "source density" of the vector field at a point. It quantifies how much the field spreads out from that point.
* **Curl ($\nabla \times \vec{A}$)**: A vector measuring the "circulation density" or "vorticity" of the vector field at a point. Its direction indicates the axis of rotation, and its magnitude indicates the strength of the rotation.

***
## CL2 Questions: Maxwell's Equations & EM Waves

### 4. Differentiate between the integral and differential forms of Maxwell's equations. Why is it that we need the differential form?

#### Answer
* **Integral Forms**: Describe field behavior over **extended regions** (volumes, surfaces, lines). Useful for calculations with symmetry.
* **Differential Forms**: Describe field behavior **at a specific point**. Relate local spatial variations (divergence, curl) to local sources or time variations.
* **Need for Differential Form**: They represent **local laws**, holding true everywhere. They are essential for deriving other results (like the wave equation) and for analyzing fields in complex situations without symmetry.

***

### 5. Which of Maxwell's equations contain 'sources'?

#### Answer
1.  **Gauss's Law for $\vec{E}$**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$. Source: **electric charge density** $\rho$.
2.  **Ampere-Maxwell Law**: $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$. Sources: **electric current density** $\vec{J}$ and **displacement current** density $\epsilon_0 \frac{\partial\vec{E}}{\partial t}$.

***

### 6. How do Maxwell's equations predict the existence of electromagnetic waves?

#### Answer
By combining Maxwell's equations in free space ($\rho=0, \vec{J}=0$), one can mathematically derive the **wave equation** for both $\vec{E}$ and $\vec{B}$:
$$\nabla^{2}\vec{E}=\mu_{o}\epsilon_{o}\frac{\partial^{2}\vec{E}}{\partial t^{2}}$$
This equation describes waves propagating at speed $c = 1/\sqrt{\mu_0 \epsilon_0}$, the speed of light, showing that light is an electromagnetic wave.

***

### 7. Discuss the phase correlation and direction of the E and B fields of an EM Wave.

#### Answer
For a plane electromagnetic wave:
* $\vec{E}$ and $\vec{B}$ are **in phase**.
* They are **mutually perpendicular**.
* Both are **perpendicular to the direction of propagation** (transverse).
* The direction of propagation is given by $\vec{E} \times \vec{B}$.

***

### 8. Starting from Maxwell's equations, obtain the wave equation of a transverse electric wave in free space and compare this with the corresponding plane magnetic wave.

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

### 9. Differentiate between circular and elliptical polarization of light.

#### Answer
* **Circular Polarization**: Electric field vector rotates in a **circle**. Requires two perpendicular components with **equal amplitudes** and a **$90^{\circ}$ phase difference**.
* **Elliptical Polarization**: Electric field vector traces an **ellipse**. General case: occurs with **unequal amplitudes** or a **phase difference other than $0^\circ, \pm 90^\circ, 180^\circ$**.

***

### 10. Show that an unpolarised light is equivalent to two mutually perpendicular plane polarised light where the phase difference between them is ninety degrees.

#### Answer
This statement is incorrect. Unpolarized light is statistically equivalent to the superposition of **two incoherent, perpendicular, plane-polarized waves of equal average intensity**. "Incoherent" means the phase difference between them fluctuates randomly and rapidly. A fixed $90^\circ$ phase difference would result in circular (if equal amplitude) or elliptical polarization.

***

### 11. How many kinds of solution exists for the wave equation? Explain with reference to line and point sources.

#### Answer
The wave equation admits various solutions depending on boundary conditions and source geometry. Key types include:
1.  **Plane Waves**: Infinite flat wavefronts, $A e^{i(\vec{k}\cdot\vec{r} - \omega t)}$. Approximations far from sources.
2.  **Spherical Waves**: Radiate uniformly outward from a **point source**, amplitude decreases as $1/r$. $\frac{f(r-vt)}{r}$.
3.  **Cylindrical Waves**: Radiate uniformly outward from a **line source**, amplitude decreases as $1/\sqrt{r}$. Involve Bessel functions.

***

### 12. Set up a general second order differential equation by partially differentiating the wave function $y = a \sin(\omega t - kx)$. Explain each term.

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

### 13. Find the energy density of an electromagnetic wave if the E-field amplitude is 6.2 V/m.

#### Answer
Average energy density $\langle u \rangle = \frac{1}{2}\epsilon_{0}E_{max}^{2}$.
$$\langle u \rangle = \frac{1}{2}(8.85\times10^{-12}) \times (6.2)^2 \approx 1.70\times10^{-10} \text{ J/m}^{3}$$

***

### 14. Discuss the energy density in electromagnetic waves and how is it related to the Poynting vector?

#### Answer
* **Energy Density ($u$)**: Instantaneous energy per volume $u = \frac{1}{2}\epsilon_0 E^2 + \frac{1}{2\mu_0} B^2 = \epsilon_0 E^2$. Average density $\langle u \rangle = \frac{1}{2}\epsilon_0 E_{max}^2$.
* **Poynting Vector ($\vec{S}$)**: Energy flux (Power/Area) and direction. $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$.
* **Relationship:** Intensity $S = u c$. Average intensity $\langle S \rangle = \langle u \rangle c$.

---
## CL4 Questions: Blackbody Radiation

### 15. Describe the characteristics of a black body spectrum.

#### Answer
1.  **Continuity and Peak**: Continuous spectrum with intensity peaking at $\lambda_{max}$ (or $\nu_{max}$).
2.  **Wien's Law**: Peak shifts to shorter $\lambda$ (higher $\nu$) as $T$ increases ($\lambda_{max} T = \text{const}$).
3.  **Stefan-Boltzmann Law**: Total radiated power $\propto T^4$.

***

### 16. Write Planck's formula for black body radiation.

#### Answer
Spectral energy density:
$$\rho(\nu) = \frac{8\pi h\nu^{3}}{c^{3}}\frac{1}{e^{h\nu/kT}-1}$$

***

### 17. Find the average energy of an oscillator of frequency $5\times10^{12}$ Hz at 300 K treating it as a Planck's oscillator.

#### Answer
$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
$\frac{h\nu}{kT} = \frac{(6.626\times10^{-34})(5\times10^{12})}{(1.38\times10^{-23})(300)} \approx 0.800$.
$\langle E \rangle = \frac{(6.626\times10^{-34})(5\times10^{12})}{e^{0.800}-1} \approx 2.70 \times 10^{-21} \text{ J}$.

***

### 18. Calculate the average energy of Planck's oscillator of frequency $5.6 \times 10^{12}$ Hz at 330 K.

#### Answer
$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
$\frac{h\nu}{kT} = \frac{(6.626\times10^{-34})(5.6\times10^{12})}{(1.38\times10^{-23})(330)} \approx 0.814$.
$\langle E \rangle = \frac{(6.626\times10^{-34})(5.6\times10^{12})}{e^{0.814}-1} \approx 2.95 \times 10^{-21} \text{ J}$.

***

### 19. Evaluate how Planck's hypothesis of quantized energy changed the understanding of electromagnetic radiation?

#### Answer
Planck's hypothesis fundamentally changed the view of EM radiation from purely continuous waves to entities possessing particle-like properties concerning energy exchange. Key changes include:
1.  **Quantization of Energy**: Energy is not continuous but exchanged in discrete packets $E=h\nu$.
2.  **Resolution of UV Catastrophe**: By limiting the average energy of high-frequency oscillators at a given temperature, Planck's formula correctly predicted the observed blackbody spectrum, avoiding the infinite energy prediction of classical physics.
3.  **Foundation for Wave-Particle Duality**: It provided the first step towards understanding that light has both wave and particle characteristics, paving the way for Einstein's explanation of the photoelectric effect and later quantum mechanics.

***

### 20. Compare and contrast the Rayleigh-Jeans law and Planck's radiation law. Why does one succeed where the other fails?

#### Answer
* **Rayleigh-Jeans Law**: Derived using classical physics (electromagnetism and equipartition theorem). Assumes energy is continuous. Formula: $\rho(\nu) = \frac{8\pi \nu^2}{c^3} kT$. Outcome: Agrees with experiment only at low frequencies; predicts infinite energy at high frequencies (UV catastrophe).
* **Planck's Law**: Derived by introducing the quantum hypothesis (energy is quantized, $E=nh\nu$). Formula: $\rho(\nu) = \frac{8\pi h\nu^3}{c^3} \frac{1}{e^{h\nu/kT}-1}$. Outcome: Agrees perfectly with experiment at all frequencies. Reduces to Rayleigh-Jeans at low frequencies.
* **Success/Failure**: Planck succeeded because his quantization assumption correctly limited the average energy of high-frequency oscillators at a given temperature ($\langle E \rangle \to 0$ as $\nu \to \infty$), whereas Rayleigh-Jeans assumed $\langle E \rangle = kT$ for all frequencies, leading to divergence.

***

### 21. Apply Planck's radiation law to explain why the color of a heated body changes from red to white with increasing temperature.

#### Answer
Planck's law shows that as temperature (T) increases:
1.  The overall intensity of radiation increases rapidly ($\propto T^4$).
2.  The peak of the emission spectrum shifts to higher frequencies (shorter wavelengths) according to Wien's Law ($\lambda_{max} \propto 1/T$).
At lower temperatures (e.g., ~800K), the peak is in the infrared, but enough radiation is emitted in the long-wavelength visible spectrum (red) for the object to appear "red hot". As T increases further (e.g., ~3000K), the peak shifts into the visible spectrum, and significant amounts of radiation are emitted across all visible wavelengths (red, orange, yellow, green, blue, violet). The combination of these colors is perceived by the eye as white light, making the object appear "white hot". At even higher temperatures (~6000K like the sun), the peak is near the middle of the visible spectrum (yellow/green), but strong emission across the visible range still results in a white appearance, perhaps slightly bluish.

---
## CL5 & CL6 Questions: The Compton Effect

### 22. How does classical theory fail to explain the results of Compton's experiment?

#### Answer
Classical wave theory predicts scattered light should have the **same wavelength** as incident light. Compton observed scattered X-rays had a **longer wavelength**, with the shift depending on the **scattering angle**. Classical theory cannot explain this wavelength change.

***

### 23. What are the angles at which the Compton shift is minimum and maximum?

#### Answer
$\Delta\lambda=\frac{h}{m_{e}c}(1-\cos\theta)$.
* **Minimum shift**: $\Delta\lambda = 0$ at **$\theta = 0^{\circ}$**.
* **Maximum shift**: $\Delta\lambda = \frac{2h}{m_e c}$ at **$\theta = 180^{\circ}$**.

***

### 24. Explain Compton shift and prove that for two photons of different initial energies scattered at the same angle, their Compton shifts are identical.

#### Answer
**Compton shift ($\Delta\lambda$)** is the increase in wavelength $\lambda_f - \lambda_i$ of a photon after scattering off a free electron.
The formula derived from conservation laws is:
$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$$
**Proof:** The formula for $\Delta\lambda$ depends only on constants ($h, m_e, c$) and the scattering angle $\theta$. It **does not depend** on the initial photon wavelength $\lambda_i$ or energy $E_i$. Therefore, if two photons scatter at the **same angle $\theta$**, their wavelength shifts ($\Delta\lambda$) will be **identical**, regardless of their initial energies.

***

### 25. Discuss how the Compton Effect supports the concept of wave-particle duality.

#### Answer
The Compton Effect provides strong evidence for the **particle nature of light (photons)**. Explaining the observed wavelength shift requires treating the photon as a particle with energy $E=h\nu$ and momentum $p=h/\lambda$, which collides with an electron. Applying particle conservation laws (energy and momentum) correctly predicts the shift. Since light also exhibits wave properties (interference, diffraction), the Compton effect reinforces the concept of **wave-particle duality**.

***

### 26. Explain why Compton scattering is negligible for optical photons. Support with numerical comparison.

#### Answer
The Compton shift $\Delta\lambda = \lambda_C(1-\cos\theta)$ is small ($\lambda_C \approx 0.00243$ nm) and independent of $\lambda_i$.
* **Visible Light**: $\lambda_i \approx 500$ nm. Max shift $\approx 0.00486$ nm. Fractional change $\Delta\lambda/\lambda_i \approx 10^{-5}$ (negligible).
* **X-rays**: $\lambda_i \approx 0.1$ nm. Max shift $\approx 0.00486$ nm. Fractional change $\Delta\lambda/\lambda_i \approx 0.05$ or 5% (significant).
The absolute shift is only comparable to the initial wavelength for high-energy photons.

***

### 27. Comment on how the wavelength shift in Compton scattering would change if the scattering particle were a proton instead of an electron.

#### Answer
The shift $\Delta\lambda = \frac{h}{m c}(1 - \cos\theta)$ is inversely proportional to the mass $m$ of the scattering particle. Since a proton is much heavier than an electron ($m_p \approx 1836 m_e$), the Compton shift for scattering off a proton would be about **1836 times smaller** and generally undetectable for typical photon energies.

---
## CL7 Questions: Matter Waves

### 28. What are matter waves? State the De-Broglie hypothesis.

#### Answer
**Matter waves** are waves associated with moving particles. The **de Broglie hypothesis** states that all particles in motion have an associated wave character, with wavelength $\lambda$ inversely proportional to momentum $p$: $\lambda = h/p$.

***

### 29. Why is the wave nature of matter not apparent for macroscopic particles?

#### Answer
Because Planck's constant $h$ is extremely small, the de Broglie wavelength $\lambda = h/mv$ for macroscopic objects (large $m$) is incredibly tiny, far too small to produce observable wave effects.

***

### 30. Calculate the de-Broglie wavelength of an oxygen molecule with mass $5.4\times10^{-26}$ kg moving at 500 m/s.

#### Answer
$\lambda = \frac{h}{mv} = \frac{6.626\times10^{-34}}{(5.4\times10^{-26}) \times (500)} \approx 2.45\times10^{-11} \text{ m}$.

***

### 31. Electron diffraction at a double slit is proof of the wave nature of electrons. Justify.

#### Answer
The observation of an **interference pattern** (alternating maxima and minima) when electrons pass through a double slit, even one electron at a time, is definitive proof of their wave nature. This pattern can only be explained by the wave associated with each electron interfering with itself after passing through both slits simultaneously, a characteristic wave phenomenon. The fringe spacing matches the prediction using the electron's de Broglie wavelength.

***

### 32. Electrons are diffracted at a double slit. D=100cm, d=0.20 $\mu$m. Fringe width w=2 mm. Calculate $\lambda$.

#### Answer
Fringe width $w = \frac{\lambda D}{d}$.
$\lambda = \frac{w d}{D} = \frac{(2 \times 10^{-3} \text{ m})(0.20 \times 10^{-6} \text{ m})}{1 \text{ m}} = 0.4 \times 10^{-9} \text{ m} = 0.4 \text{ nm}$.

***

### 33. Is the wavelength of electrons on different orbits the same or different? If different what is the ratio of the wavelength in first and 4th orbits?

#### Answer
**Different**. In Bohr/de Broglie model, $\lambda_n = 2\pi r_n / n$. Since $r_n \propto n^2$, $\lambda_n \propto n$.
Ratio: $\frac{\lambda_1}{\lambda_4} = \frac{1}{4}$.

***

### 34. The Davisson-Germer experiment used electrons accelerated to 54 V. Solve: a) Electron energy in J? b) Electron speed? c) Electron momentum? d) Electron wavelength?

#### Answer
a) $E_k = qV = (1.602 \times 10^{-19})(54) \approx 8.65 \times 10^{-18}$ J.
b) $v = \sqrt{2 E_k / m_e} = \sqrt{2 (8.65 \times 10^{-18}) / (9.11 \times 10^{-31})} \approx 4.36 \times 10^6$ m/s.
c) $p = m_e v = (9.11 \times 10^{-31})(4.36 \times 10^6) \approx 3.97 \times 10^{-24}$ kg m/s.
d) $\lambda = h/p = (6.626 \times 10^{-34}) / (3.97 \times 10^{-24}) \approx 1.67 \times 10^{-10}$ m = 0.167 nm.

***

### 35. Show that the phase velocity $v_p$ of the de Broglie waves of a particle of rest mass $m_0$ is given by $v_p = c \sqrt{1 + (\frac{m_0 c \lambda}{h})^2}$.

#### Answer
$v_p = \lambda \nu = \lambda (E/h)$. Use relativistic $E = \sqrt{(pc)^2 + (m_0 c^2)^2}$ and $p = h/\lambda$.
$v_p = \frac{\lambda}{h} \sqrt{(\frac{hc}{\lambda})^2 + (m_0 c^2)^2} = \frac{\lambda c}{h} \sqrt{\frac{h^2}{\lambda^2} + m_0^2 c^2} = c \sqrt{1 + \frac{\lambda^2 m_0^2 c^2}{h^2}} = c \sqrt{1 + (\frac{m_0 c \lambda}{h})^2}$.

***

### 36. Discuss the role of wave packet in signal processing.

#### Answer
In signal processing, a wave packet represents a signal that is localized in both time and frequency. Unlike a pure sine wave (localized in frequency but infinite in time) or a sharp pulse (localized in time but infinite in frequency), a wave packet provides a compromise. Techniques like the Short-Time Fourier Transform (STFT) or Wavelet Transform analyze signals by decomposing them into wave packets (or wavelets), allowing analysis of how the frequency content of a signal changes over time (time-frequency analysis), which is crucial for non-stationary signals like speech or music.

***

### 37. How the group velocity and phase velocity related in relativistic quantum mechanics?

#### Answer
In relativistic QM, $E^2 = (pc)^2 + (m_0c^2)^2$.
Group velocity $v_g = dE/dp$. Differentiating $E^2=p^2c^2 + m_0^2c^4$ gives $2E dE = 2pc^2 dp \implies dE/dp = pc^2/E$. So $v_g = pc^2/E$. Since $E=mc^2$ and $p=mv$ (using relativistic mass $m$), $v_g = (mv)c^2/(mc^2) = v$. The group velocity equals the particle velocity.
Phase velocity $v_p = E/p$. Using $E=mc^2$ and $p=mv$, $v_p = mc^2 / mv = c^2/v$.
Thus, $v_g v_p = v (c^2/v) = c^2$. This relationship $v_g v_p = c^2$ holds for relativistic matter waves.

---
## CL8 Questions: The Uncertainty Principle

### 38. State any three forms of the Heisenberg's Uncertainty Principle.

#### Answer
1.  **Position-Momentum:** $\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$.
2.  **Energy-Time:** $\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$.
3.  **Angular Position-Angular Momentum:** $\Delta \phi \cdot \Delta L_z \ge \frac{\hbar}{2}$.

***

### 39. The Uncertainty principle is not significant for macroscopic bodies. Justify.

#### Answer
Because $\hbar$ is extremely small, the minimum uncertainties ($\Delta x$ or $\Delta p$) predicted by $\Delta x \Delta p \ge \hbar/2$ are far smaller than any possible measurement precision for macroscopic objects. For practical purposes, classical determinism holds.

***

### 40. An atom in an excited state of lifetime $\Delta t=10^{-8}$ s emits a photon. Estimate the uncertainty in the frequency of the photon.

#### Answer
$\Delta E \cdot \Delta t \ge \hbar/2$. $\Delta E = h \Delta \nu$.
$(h \Delta \nu) \cdot \Delta t \ge \hbar/2 \implies \Delta \nu \ge \frac{1}{4\pi \Delta t}$.
$\Delta\nu \ge \frac{1}{4\pi (10^{-8})} \approx 7.96 \times 10^6 \text{ Hz}$.

---
## CL9 Questions: The Wave Function

### 41. Give the physical interpretation of the wave function.

#### Answer
The wave function $\psi$ is the **probability amplitude**. Its squared magnitude, $|\psi|^2$, is the **probability density** of finding the particle at a given point in space and time.

***

### 42. Mention the important properties of a wave function.

#### Answer
Must be: 1. Finite, 2. Single-valued, 3. Continuous, 4. Have continuous first derivatives, 5. Normalizable.

***

### 43. Prove that $\psi^*(x,t)\psi(x,t)$ is necessarily real and either positive or zero.

#### Answer
Let $\psi(x,t) = A+iB$, where A and B are real functions.
Its complex conjugate is $\psi^*(x,t) = A-iB$.
$\psi^*\psi = (A-iB)(A+iB) = A^2 - (iB)^2 = A^2 - i^2 B^2 = A^2 + B^2$.
Since A and B are real, $A^2 \ge 0$ and $B^2 \ge 0$. Therefore, $A^2+B^2 \ge 0$ and is always real.

***

### 44. What is the difference between probability density and probability?

#### Answer
* **Probability Density ($|\psi|^2$)**: Probability *per unit volume/length* at a point.
* **Probability ($P$)**: Dimensionless chance (0 to 1) of finding particle in a *finite region*, found by integrating density over the region.

***
## CL12 & CL13 Questions: Schrödinger's Equation & Normalization

### 45. A free particle is a classical entity. Justify.

#### Answer
The energy spectrum for a free particle solution to the Schrödinger equation is **continuous**, not quantized, just like in classical mechanics.

***

### 46. What is the physical significance of the normalization of a wave function?

#### Answer
Normalization ensures the total probability of finding the particle somewhere in all space is exactly 1 (100%), which is required for a consistent probabilistic interpretation. $\int |\psi|^2 dV = 1$.

***

### 47. A particle is in a stationary state $\psi(x,t)=\phi(x)e^{-iEt/\hbar}$. Show $|\psi(x,t)|^2$ is time-independent. Physical implication?

#### Answer
$|\psi(x,t)|^2 = \psi^* \psi = (\phi^*(x)e^{+iEt/\hbar})(\phi(x)e^{-iEt/\hbar}) = |\phi(x)|^2 e^0 = |\phi(x)|^2$.
Since $|\phi(x)|^2$ depends only on position, the probability density is constant in time.
**Implication:** In a stationary state (energy eigenstate), the probability distribution does not change over time.

***

### 48. Find the normalization constant A, given $\psi(x)=A e^{-\alpha x^2}$, $(-\infty < x < \infty)$, $\alpha > 0$.

#### Answer
$\int_{-\infty}^{\infty} |\psi|^2 dx = A^2 \int_{-\infty}^{\infty} e^{-2\alpha x^2} dx = 1$.
Gaussian integral $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\pi/a}$. Here $a=2\alpha$.
$A^2 \sqrt{\pi/(2\alpha)} = 1 \implies A^2 = \sqrt{2\alpha/\pi} \implies A = (2\alpha/\pi)^{1/4}$.

***

### 49. Find the normalization constant B for $\psi=B[\sin(\pi x/L)+\sin(2\pi x/L)]$ (assume $0 \le x \le L$).

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

### 50. Explain operators, observables, and the eigenvalue equation.

#### Answer
* **Observables**: Measurable physical quantities.
* **Operators**: Mathematical rules corresponding to observables.
* **Eigenvalue Equation**: $\hat{A}\psi = a\psi$. $\psi$ is an eigenfunction, $a$ is the eigenvalue (the definite measured value).

***

### 51. Write five operators associated with dynamical variables.

#### Answer

| Observable           | Operator ($\hat{A}$)                                            |
| -------------------- | --------------------------------------------------------------- |
| Position (x)         | $\hat{x} = x$                                                   |
| Momentum ($p_x$)     | $\hat{p}_x = -i\hbar\frac{\partial}{\partial x}$                 |
| Kinetic Energy       | $\hat{K} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}$    |
| Potential Energy     | $\hat{V} = V(x)$                                                |
| Total Energy         | $\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)$ |

***

### 52. Explain the concept of the "expectation value".

#### Answer
The **expectation value** $\langle A \rangle$ is the theoretical average result of measuring observable $A$ many times on identical systems in state $\psi$. $\langle A \rangle = \int \psi^* \hat{A} \psi dV$.

***

### 53. Find the expectation value of position, $\langle x \rangle$, for a particle in a box of width L.

#### Answer
$\psi_n(x) = \sqrt{\frac{2}{L}}\sin(\frac{n\pi x}{L})$. $\hat{x}=x$.
$\langle x \rangle = \int_0^L x |\psi_n|^2 dx = \frac{2}{L} \int_0^L x \sin^2\left(\frac{n\pi x}{L}\right) dx = \frac{L}{2}$.

***

### 54. Find the expectation values of position and momentum for $\psi(x)=Ne^{ikx}$ in $-a < x < a$.

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

### 55. What is a state vector in quantum mechanics?

#### Answer
A state vector (ket $|\psi\rangle$) is a vector in a complex Hilbert space representing the complete quantum state of a system.

***

### 56. What condition must two vectors $|\psi\rangle$ and $|\phi\rangle$ satisfy to be orthogonal?

#### Answer
Their inner product must be zero: $\langle \phi | \psi \rangle = 0$.

***

### 57. Discuss orthogonality condition of the basis vectors.

#### Answer
Basis vectors $\{|e_i\rangle\}$ representing distinct physical outcomes are chosen to be mutually orthogonal: $\langle e_j | e_i \rangle = 0$ for $i \neq j$.

***

### 58. What does it mean for a set of vectors to be an orthonormal basis?

#### Answer
It means they are mutually orthogonal ($\langle e_j | e_i \rangle = 0$ for $i \neq j$) AND each vector is normalized ($\langle e_i | e_i \rangle = 1$). Combined: $\langle e_j | e_i \rangle = \delta_{ij}$.

***

### 59. Discuss few physical systems which can be modeled as two level quantum systems.

#### Answer
Examples: Spin-1/2 particle (up/down), photon polarization (horizontal/vertical), two specific energy levels of an atom (ground/excited), qubits ($|0\rangle / |1\rangle$).

***

### 60. What is superposition in quantum computing, and how does it differ from classical binary states?

#### Answer
A classical bit is 0 OR 1. A qubit can be in a **superposition** of both states simultaneously: $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where $|\alpha|^2 + |\beta|^2 = 1$. It holds information about both states until measured.

***

### 61. Explain the physical meaning of a projection state in quantum mechanics.

#### Answer
When a measurement is made on a system in superposition, the state "collapses" into one of the eigenstates corresponding to the measured value. This resulting eigenstate, representing the definite outcome *after* measurement, is the projection state.

***

### 62. How is qubit represented in Bloch sphere?

#### Answer
A single qubit state $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$ is represented as a point on the surface of a unit sphere (Bloch sphere). $|0\rangle$ is at the North Pole, $|1\rangle$ at the South Pole. $\theta$ is the angle from the z-axis, $\phi$ is the angle in the xy-plane. Superpositions lie on the surface.

***

### 63. A qubit is given by $(2+i)|0\rangle+(1-2i)|1\rangle$. Normalize the qubit and represent it in matrix form.

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

### 1. With suitable examples explain the significance of gradient, divergence and curl operators on fields.

#### Answer
*   **Gradient ($\nabla \phi$)**: Operates on a scalar field to produce a vector field. It points in the direction of the maximum rate of change of the scalar.
    *   *Example*: In a temperature field $T(x,y,z)$, $\nabla T$ points from cold to hot, steepness indicates how fast T changes. Electric field is the negative gradient of potential: $\vec{E} = -\nabla V$.
*   **Divergence ($\nabla \cdot \vec{A}$)**: Operates on a vector field to produce a scalar. It measures the net outflow of the vector field from a point (source/sink strength).
    *   *Example*: $\nabla \cdot \vec{E} = \rho/\epsilon_0$ (Gauss's Law). Positive divergence implies a source (positive charge), negative is a sink.
*   **Curl ($\nabla \times \vec{A}$)**: Operates on a vector field to produce a vector. It measures the rotation or circulation of the field around a point.
    *   *Example*: $\nabla \times \vec{B} = \mu_0 \vec{J}$. Currents create curling magnetic fields.

### 2. Magnetic monopoles do not exist. Justify.

#### Answer
Maxwell's equation $\nabla \cdot \vec{B} = 0$ (Gauss's Law for Magnetism) states that the divergence of the magnetic field is always zero. This implies there are no point sources (monopoles) of magnetic flux. Magnetic field lines always form closed loops; they do not start or end at a point. Breaking a magnet results in two dipoles, not isolated poles.

### 3. What is the physical meaning of gradient of a scalar function?

#### Answer
The gradient of a scalar function $\phi$, denoted $\nabla \phi$, physically represents the vector field of the **maximum spatial rate of change** of $\phi$. Its magnitude equals the rate of change in that direction, and its direction is perpendicular to the level surfaces (equipotential surfaces) of $\phi$.

### 4. Estimate the energy per unit volume in a magnetic field.

#### Answer
The energy density (energy per unit volume) stored in a magnetic field $\vec{B}$ in free space is given by:
$$ u_B = \frac{1}{2} \frac{B^2}{\mu_0} $$
If a material with permeability $\mu$ is present, $u_B = \frac{B^2}{2\mu}$. This energy is associated with the work done to establish the field against the back EMF.

---

## CL3: Energy & Polarization

### 1. Differentiate between circular and elliptical polarization states of electromagnetic waves.

#### Answer
| Feature | Circular Polarization | Elliptical Polarization |
| :--- | :--- | :--- |
| **Amplitudes** | Two orthogonal components have **equal** amplitudes ($E_{0x} = E_{0y}$). | Components have **unequal** amplitudes OR equal amplitudes. |
| **Phase Difference** | Phase difference is exactly **$\pi/2$ ($90^\circ$)**. | Phase difference is **arbitrary** (neither $0, \pi$ nor exactly $\pi/2$ with equal amps). |
| **Tip Trajectory** | Electric vector tip traces a **circle**. | Electric vector tip traces an **ellipse**. |
| **Symmetry** | Highly symmetric special case. | General form of polarization. |

### 2. Find the energy density of electromagnetic wave, if the electric field of amplitude 6.2 V/m oscillates with a frequency of 2.4 × 10¹⁰ Hz.

#### Answer
The average energy density is $\langle u \rangle = \frac{1}{2} \epsilon_0 E_0^2$.
Given $E_0 = 6.2$ V/m. $\epsilon_0 = 8.854 \times 10^{-12}$ F/m.
$$ \langle u \rangle = 0.5 \times (8.854 \times 10^{-12}) \times (6.2)^2 $$
$$ \langle u \rangle = 0.5 \times 8.854 \times 10^{-12} \times 38.44 \approx 1.70 \times 10^{-10} \text{ J/m}^3 $$
(Frequency is not needed for energy density calculation given amplitude).

### 3. Discuss the energy density in electromagnetic waves and how is it related with the Poynting vectors?

#### Answer
*   **Energy Density ($u$)**: The total energy stored per unit volume in the fields. $u = \frac{1}{2}\epsilon_0 E^2 + \frac{1}{2\mu_0}B^2 = \epsilon_0 E^2$ (instantaneous).
*   **Poynting Vector ($\vec{S}$)**: Represents the rate of energy flow per unit area (Power density). $\vec{S} = \vec{E} \times \vec{H} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$.
*   **Relation**: The magnitude of the Poynting vector (Intensity) is the energy density times the wave speed. $S = u \cdot c$.
    $\vec{S}$ indicates the direction of transport of the energy density $u$.

### 4. Give expressions for two electric field wave functions that can produce circular polarization.

#### Answer
For circularly polarized light propagating in the +z direction, the x and y components must have equal amplitude $E_0$ and a phase difference of $\pm \pi/2$:
1.  **Right Circularly Polarized (RCP)**:
    $$ \vec{E}(z,t) = E_0 \cos(kz - \omega t) \hat{i} + E_0 \sin(kz - \omega t) \hat{j} $$
2.  **Left Circularly Polarized (LCP)**:
    $$ \vec{E}(z,t) = E_0 \cos(kz - \omega t) \hat{i} - E_0 \sin(kz - \omega t) \hat{j} $$
(Note: Sine is cosine shifted by $\pi/2$).

---

## CL4: Black Body Radiation

### 1. Describe the characteristics of a black body spectrum.

#### Answer
1.  **Continuous Spectrum**: Emits radiation at all wavelengths.
2.  **Temperature Dependence**: Intensity increases with Temperature for all wavelengths.
3.  **Peak Shift (Wien's Law)**: The wavelength of maximum emission $\lambda_{max}$ shifts to lower values (blue shift) as T increases ($\lambda_{max} T = b$).
4.  **Zero Limits**: Energy density goes to zero at $\lambda \to 0$ and $\lambda \to \infty$.

### 2. Find the average energy of an oscillator of frequency 5×10¹²/s at 300 K treating the oscillator as Planck's oscillator.

#### Answer
$\nu = 5 \times 10^{12}$ Hz, $T = 300$ K.
$h\nu = (6.626 \times 10^{-34})(5 \times 10^{12}) = 3.313 \times 10^{-21}$ J.
$kT = (1.38 \times 10^{-23})(300) = 4.14 \times 10^{-21}$ J.
$x = h\nu / kT = 3.313 / 4.14 \approx 0.80$.
$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT} - 1} = \frac{3.313 \times 10^{-21}}{e^{0.8} - 1} = \frac{3.313 \times 10^{-21}}{2.225 - 1} \approx 2.70 \times 10^{-21}$ J.

### 3. Using the quantum theory, derive the expression for energy density of blackbody radiation.

#### Answer
*   **Mode Density**: Number of standing wave modes per unit volume in frequency range $d\nu$ is $N(\nu)d\nu = \frac{8\pi \nu^2}{c^3} d\nu$.
*   **Average Energy**: Planck assumed energy quantization ($E_n = nh\nu$) and Boltzmann statistics to derive average energy per mode: $\langle E \rangle = \frac{h\nu}{e^{h\nu/kT} - 1}$.
*   **Total Energy Density**: Multiply mode density by average energy:
    $$ \rho(\nu) d\nu = N(\nu) \langle E \rangle d\nu = \left( \frac{8\pi \nu^2}{c^3} \right) \left( \frac{h\nu}{e^{h\nu/kT} - 1} \right) d\nu $$
    $$ \rho(\nu) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/kT} - 1} d\nu $$

### 4. What was Planck's crucial contribution in explaining Black body spectrum?

#### Answer
Planck's crucial contribution was the hypothesis of **energy quantization**. He proposed that the energy of atomic oscillators in the cavity walls is not continuous but discrete, coming in integer multiples of a base unit $h\nu$ ($E = nh\nu$). This assumption replaced the classical equipartition principle (which led to the UV catastrophe) and successfully derived a radiation formula that matched experimental data across the entire spectrum.

---

## CL5: Compton Effect

### 1. How does classical theory fail to explain the results of Compton's experiment?

#### Answer
Classical electromagnetic theory predicts that when light scatters off a charged particle, the particle oscillates at the frequency of the incident wave and re-radiates light at the **same frequency** (same wavelength). It cannot explain the experimentally observed **shift to a longer wavelength** (Compton shift) which depends on the scattering angle.

### 2. What are the angles at which the Compton shift is minimum and maximum? What are the conclusions drawn from these angles?

#### Answer
$\Delta \lambda = \frac{h}{m_0 c} (1 - \cos \phi)$.
*   **Minimum Shift**: At $\phi = 0^\circ$ (Forward scattering), $\cos 0 = 1$, $\Delta \lambda = 0$. No energy is transferred to the electron.
*   **Maximum Shift**: At $\phi = 180^\circ$ (Back scattering), $\cos 180 = -1$, $\Delta \lambda = \frac{2h}{m_0 c} \approx 0.0485$ Å. Maximum energy is transferred to the electron.

### 3. Calculate the energy that a photon must possess if it has to have a momentum equal to that of a 10MeV proton. In Compton Effect did you understand why the original peak at λ remained in the spectrum of the scattered radiation?

#### Answer
**Part 1**: Momentum of 10 MeV proton.
Energy $E_p = 10 \text{ MeV} \ll m_p c^2$ (938 Mev), so classical approx is valid.
$E_p = p^2 / 2m \implies p = \sqrt{2m E_p}$.
$p = \sqrt{2 \times (1.67 \times 10^{-27}) \times (10 \times 1.6 \times 10^{-13})} = \sqrt{5.34 \times 10^{-39}} \approx 7.3 \times 10^{-20}$ kg m/s.
Photon energy $E_{\gamma} = pc = (7.3 \times 10^{-20}) (3 \times 10^8) \approx 2.19 \times 10^{-11} \text{ J} \approx 137 \text{ MeV}$.
**Part 2**: The original peak at $\lambda$ remains because some photons scatter off the **entire atom** (nucleus + electrons) rather than a single free electron. The effective mass $M$ is the mass of the whole atom ($M \gg m_e$), making the Compton shift $\Delta \lambda \propto 1/M$ negligible.

### 4. What is Compton shift? According to classical theory, the scattered X rays have the same frequency as the incident wave. Explain.

#### Answer
**Compton Shift** is the increase in wavelength ($\Delta \lambda$) of X-rays or gamma rays when they are scattered by loosely bound (quasi-free) electrons in a target.
**Classical Theory**: Treats light as a continuous electromagnetic wave. An electron in the wave feels an oscillating E-field, vibrates at the incident frequency $\nu$, and acts as a dipole antenna emitting radiation at that same frequency $\nu$. There is no mechanism in wave theory for the frequency to change upon scattering.

---

## CL6: Wave-Particle Duality

### 1. The central mystery of quantum mechanics lies in the single particle quantum interference. Do you understand why the resultant intensity?

#### Answer
*(Question appears incomplete, assuming it refers to double-slit interference)*.
In the double-slit experiment, even when particles (electrons/photons) are sent one by one, an interference pattern builds up over time. This implies each particle interferes with itself, behaving as a wave passing through both slits simultaneously. The resultant intensity at any point is determined by the square of the superposition of wave amplitudes from both slits ($I = |\psi_1 + \psi_2|^2$), leading to constructive and destructive interference fringes, which is impossible to explain with classical particle trajectories.

### 2. If an electron and a proton have energy of 10 MeV, calculate their de Broglie wavelength.

#### Answer
$E_k = 10 \text{ MeV} = 10 \times 1.6 \times 10^{-13} \text{ J}$.
$\lambda = h / p$.
*   **Proton**: $m_p c^2 = 938$ MeV. $E_k \ll m_p c^2$ (Non-relativistic).
    $p = \sqrt{2mE}$. $\lambda = h / \sqrt{2m_p E}$.
    $\lambda_p = \frac{6.63 \times 10^{-34}}{\sqrt{2(1.67 \times 10^{-27})(1.6 \times 10^{-12})}} = \frac{6.63 \times 10^{-34}}{7.3 \times 10^{-20}} \approx 9.1 \times 10^{-15} \text{ m}$ (9.1 fm).
*   **Electron**: $m_e c^2 = 0.511$ MeV. $E_k \gg m_e c^2$ (Relativistic).
    $E_{total} = E_k + m_e c^2 \approx 10.511$ MeV.
    $E^2 = (pc)^2 + (mc^2)^2 \implies pc = \sqrt{E^2 - m^2 c^4} \approx E$ (Ultra-relativistic).
    $p \approx E/c$. $\lambda = hc/E$.
    $\lambda_e = \frac{1240 \text{ eV nm}}{10 \times 10^6 \text{ eV}} = 124 \times 10^{-6} \text{ nm} = 1.24 \times 10^{-13} \text{ m}$ (0.124 pm).

### 3. Give a brief account of the Fourier transform.

#### Answer
The **Fourier Transform** is a mathematical tool that decomposes a function (like a signal in time, $f(t)$) into its constituent frequencies ($\tilde{f}(\omega)$). In Quantum Mechanics, it relates the position space wave function $\psi(x)$ to the momentum space wave function $\phi(k)$. A localized particle (wave packet) in space is a superposition of many momentum states; the tighter the confinement in $x$, the broader the spread in $k$ (Fourier pair), leading to the Uncertainty Principle.

### 4. An electron accelerated through some potential difference, crosses two points separated by a distance of 3m in 1μs with a steady state velocity. Calculate the de-Broglie wavelength of the accelerated electron and hence calculate the potential difference through which it has been accelerated.

#### Answer
*   **Velocity**: $v = \text{distance} / \text{time} = 3 \text{ m} / 10^{-6} \text{ s} = 3 \times 10^6 \text{ m/s}$.
*   **Wavelength**: $\lambda = h / m_e v = \frac{6.626 \times 10^{-34}}{(9.11 \times 10^{-31})(3 \times 10^6)} \approx 2.42 \times 10^{-10} \text{ m}$ (2.42 Å).
*   **Potential Difference**: $K.E. = \frac{1}{2}m v^2 = eV$.
    $V = \frac{m v^2}{2e} = \frac{(9.11 \times 10^{-31})(3 \times 10^6)^2}{2(1.602 \times 10^{-19})} = \frac{8.2 \times 10^{-18}}{3.2 \times 10^{-19}} \approx 25.6 \text{ V}$.

---

## CL7: Wave Packets

### 1. Write an expression for a travelling wave explaining each term.

#### Answer
$y(x,t) = A \sin(kx - \omega t + \phi)$
*   $y$: Displacement at position $x$ and time $t$.
*   $A$: Amplitude (maximum displacement).
*   $k$: Angular wave number ($2\pi/\lambda$), related to spatial frequency.
*   $x$: Position coordinate.
*   $\omega$: Angular frequency ($2\pi \nu$), related to temporal frequency.
*   $t$: Time.
*   $\phi$: Phase constant (initial phase at $x=0, t=0$).

### 2. Derive a relation between group velocity and phase velocity.

#### Answer
$v_p = \frac{\omega}{k} \implies \omega = k v_p$.
Group velocity $v_g = \frac{d\omega}{dk} = \frac{d}{dk}(k v_p) = v_p + k \frac{dv_p}{dk}$.
Since $k = 2\pi/\lambda$, $dk = (-2\pi/\lambda^2) d\lambda$, making $\frac{k}{dk} = -\lambda$.
$$ v_g = v_p - \lambda \frac{dv_p}{d\lambda} $$
This relates group velocity to phase velocity and dispersion ($dv_p/d\lambda$).

### 3. When does group velocity become equal to phase velocity? Give an example.

#### Answer
Group velocity equals phase velocity ($v_g = v_p$) in a **non-dispersive medium**, where the phase velocity is independent of wavelength ($dv_p/d\lambda = 0$).
*   **Example**: Electromagnetic waves traveling in a **vacuum** (free space). All frequencies travel at $c$.

### 4. How are phase and group velocity related for a monochromatic wave?

#### Answer
For a purely monochromatic wave (single frequency $\omega$ and single wavenumber $k$), the concept of group velocity (velocity of a packet/envelope) is not strictly applicable as there is no envelope. However, mathematically, if one considers it as the limit of a packet, the phase velocity is well-defined ($v_p = \omega/k$). In non-relativistic quantum mechanics for a free particle, $v_g = 2 v_p$. For light in vacuum, $v_g = v_p = c$.

---

## CL8: Uncertainty Principle

### 1. State any three forms of the Heisenberg's Uncertainty Principle.

#### Answer
1.  **Position-Momentum**: $\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$.
2.  **Energy-Time**: $\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$.
3.  **Angular Position-Angular Momentum**: $\Delta \theta \cdot \Delta L \ge \frac{\hbar}{2}$.

### 2. Demonstrate using Heisenberg's Uncertainty Principle that an electron can't exist inside a typical nucleus.

#### Answer
Nucleus size $\Delta x \approx 10^{-14}$ m.
Min momentum $\Delta p \approx \hbar / (2\Delta x) \approx 0.5 \times 10^{-20}$ kg m/s.
Min Kinetic Energy $K \approx pc \approx (0.5 \times 10^{-20})(3 \times 10^8) \approx 1.5 \times 10^{-12}$ J $\approx 9$ MeV.
Assuming a stronger confinement or proper bounds often yields energies ~20-100 MeV. However, experimental beta decay electrons have only ~2-3 MeV. The electron is too energetic to be confined by the nuclear potential depth, implying it cannot reside there.

### 3. An atom in an excited state of life time Δt=10⁻⁸s makes a transition to a lower state emitting a photon of frequency of 3×10¹⁴Hz. Estimate the uncertainty in the frequency of the emitted photon.

#### Answer
Using $\Delta E \cdot \Delta t \ge \hbar/2$ and $\Delta E = h \Delta \nu$:
$h \Delta \nu \cdot \Delta t \ge h/4\pi$.
$\Delta \nu \ge \frac{1}{4\pi \Delta t}$.
$\Delta \nu \ge \frac{1}{4\pi (10^{-8})} \approx \frac{1}{12.56 \times 10^{-8}} \approx 7.96 \times 10^6 \text{ Hz}$ (approx 8 MHz).

### 4. State Heisenberg's uncertainty principle. Use the Gamma ray thought experiment to arrive at the principle.

#### Answer
**Statement**: It is impossible to determine simultaneously both the position and momentum of a particle with infinite accuracy. The product of uncertainties is $\Delta x \Delta p \ge \hbar/2$.
**Gamma Ray Microscope**: To measure an electron's position, we shine light (photons) on it. To minimize $\Delta x$, we favor short wavelength $\lambda$ (higher resolution). However, short $\lambda$ photons have high momentum $p=h/\lambda$. When such a photon hits the electron, it transfers a large, uncertain amount of momentum to it, increasing $\Delta p$. Thus $\Delta x \propto \lambda$ and $\Delta p \propto 1/\lambda$. Reducing one increases the other.

---

## CL9: Wave Function

### 1. What is the significance of a quantum wave function?

#### Answer
The wave function $\Psi(\vec{r}, t)$ contains all the dynamic information about a quantum system. Its primary significance is probabilistic: the quantity $|\Psi|^2$ represents the **probability density** of finding the particle at a specific position and time.

### 2. What is the difference between probability density and probability?

#### Answer
*   **Probability Density ($P(x) = |\psi|^2$)**: The probability per unit length/volume. It can have a value greater than 1.
*   **Probability ($P_{ab}$)**: The actual likelihood of finding the particle in a specific interval $[a, b]$, obtained by integrating the density: $P_{ab} = \int_a^b |\psi|^2 dx$. This value is dimensionless and always $\le 1$.

### 3. How do you determine the value of the amplitude of a wave function?

#### Answer
The amplitude (or normalization constant) is determined using the **normalization condition**. Since the particle must exist somewhere in space, the integral of the probability density over all space must equal 1:
$$ \int_{-\infty}^{\infty} |\psi(x)|^2 dx = 1 $$
Solving this integral allows one to find the unknown amplitude constant.

### 4. Determine the probability of finding an electron in the limits x=0 to x= 0.5a when it is bound in a 1D box of length a.

#### Answer
For a particle in a 1D box ($0 \le x \le a$), the probability density is symmetric about the center $x=a/2$ for all stationary states (since $\sin^2(n\pi x/a)$ is symmetric).
The region $0$ to $0.5a$ corresponds to exactly half the box.
Therefore, the probability is **0.5** (or 50%), regardless of the quantum number $n$.
Calculation: $\int_0^{a/2} \frac{2}{a}\sin^2(\frac{n\pi x}{a}) dx = \frac{1}{a} [x - \frac{a}{2n\pi}\sin(\frac{2n\pi x}{a})]_0^{a/2} = \frac{1}{a}(\frac{a}{2} - 0) = 0.5$.

---

## CL10: Operators & Expectation Values

### 1. Describe an Eigen value equation explaining each term.

#### Answer
An eigenvalue equation has the form $\hat{A} \psi = a \psi$.
*   $\hat{A}$: An **operator** (mathematical transformation).
*   $\psi$: The **eigenfunction** (a state that stays unchanged in shape, only scaled).
*   $a$: The **eigenvalue** (a constant scalar multiplier).
In QM, if an operator corresponds to an observable, the eigenvalues are the possible measurement results.

### 2. Write any five operators associated with dynamical variables.

#### Answer
1.  **Position**: $\hat{x} = x$
2.  **Linear Momentum**: $\hat{p} = -i\hbar \nabla$ (or $-i\hbar \frac{\partial}{\partial x}$)
3.  **Kinetic Energy**: $\hat{K} = -\frac{\hbar^2}{2m} \nabla^2$
4.  **Hamiltonian (Total Energy)**: $\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V$
5.  **Orbital Angular Momentum (z)**: $\hat{L_z} = -i\hbar \frac{\partial}{\partial \phi}$

### 3. Define Expectation value.

#### Answer
The expectation value $\langle A \rangle$ is the **average value** of the observable $A$ that would be obtained from a large number of independent measurements on identical systems in the same quantum state $\psi$.
$$ \langle A \rangle = \int_{-\infty}^{\infty} \psi^* \hat{A} \psi dx $$

### 4. Determine the expectation value of position of a particle bound between x=0 to x=3 and described by the wave function.

#### Answer
Assuming the particle is in a 1D infinite well of width $L=3$, and in a defined state (e.g., ground state $\psi_1 = \sqrt{2/3}\sin(\pi x/3)$).
By symmetry, the probability distribution $|\psi|^2$ is symmetric around the center of the well.
Therefore, the expectation value of position is simply the midpoint:
$$ \langle x \rangle = \frac{L}{2} = \frac{3}{2} = 1.5 $$

---

## CL12: Schrödinger's Equation

### 1. Why is Schrodinger's equation referred to as a linear equation?

#### Answer
It is linear because the wave function $\psi$ and its derivatives appear only to the first power. There are no terms like $\psi^2$ or $\psi \frac{\partial \psi}{\partial x}$. This linearity ensures the **Principle of Superposition** holds: if $\psi_1$ and $\psi_2$ are solutions, then $c_1\psi_1 + c_2\psi_2$ is also a solution.

### 2. Set up Schrödinger's time dependent wave equation as an Eigen value equation and time independent wave equation from Schrodinger's time dependent wave equation.

#### Answer
*   **Time Dependent**: $i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi$. This is an equation for time evolution, not a simple eigenvalue equation for energy unless $\Psi$ is stationary.
*   **Derivation**: Assume $\Psi(x,t) = \psi(x) \phi(t)$.
    Divide by $\psi \phi$: LHS depends only on t, RHS only on x. Both equal constant E.
    Time part: $i\hbar \phi' = E\phi \implies \phi(t) = e^{-iEt/\hbar}$.
    Space part: $\hat{H} \psi(x) = E \psi(x)$ (Time Independent SWE).

### 3. Schrodinger's equation is an operator equation. Explain.

#### Answer
It can be written as $\hat{H} \psi = E \psi$ (Time-Independent) or $\hat{H} \Psi = i\hbar \frac{\partial}{\partial t} \Psi$ (Time-Dependent). Here $\hat{H}$ is the **Hamiltonian Operator** (Total Energy operator). The equation states that the operation of the Hamiltonian on the wave function yields the total energy times the wave function (or the time evolution). It is fundamentally a statement about operators acting on states.

### 4. Write the three dimensional Schrodinger wave equation.

#### Answer
Time Independent:
$$ \nabla^2 \psi + \frac{2m}{\hbar^2}(E - V(x,y,z))\psi = 0 $$
OR
$$ \left( -\frac{\hbar^2}{2m} \nabla^2 + V \right) \psi = E \psi $$
where $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$.

### 5. A free particle is a classical entity. Justify.

#### Answer
A free particle ($V=0$) has energy $E = \hbar^2 k^2 / 2m$. Since $k$ can take any continuous value, the energy spectrum is **continuous**, not quantized. Energy quantization arises only from confinement (bound states). In this sense (continuous energy), it resembles a classical entity.

### 6. Describe the state of a particle for the case of a free state, bound state and scattering state.

#### Answer
*   **Bound State ($E < V_{\infty}$)**: Particle is confined to a finite region. Energy is quantized. Wave function decays at infinity. ($E < 0$ usually).
*   **Scattering State ($E > V_{\infty}$)**: Particle is not confined and can travel to infinity. Energy is continuous. ($E > 0$).
*   **Free State ($V=0$ everywhere)**: Special case of scattering. Plane wave solutions $e^{ikx}$, continuous energy.

### 7. What is step potential in quantum mechanics?

#### Answer
A **Step Potential** is an idealized potential profile that changes abruptly at a boundary:
$V(x) = 0$ for $x < 0$ and $V(x) = V_0$ for $x > 0$.
It is used to study reflection and transmission (tunneling) behaviors of quantum particles at interfaces.

### 8. What are the similarities and differences between the reflection of light from an air-glass boundary and the reflection of an electron from a potential step?

#### Answer
*   **Similarities**: Both exhibit reflection and transmission even when transmission is classically allowed. Both satisfy relations (Snell's law/Continuity) at the interface. Both have coefficients ($R, T$) that sum to 1.
*   **Differences**:
    *   **Basis**: Light reflection is due to change in refractive index (speed). Electron reflection is due to change in potential (kinetic energy/momentum).
    *   **Total Internal Reflection**: Light has TIR going from dense to rare. Electrons have total reflection when $E < V_0$.
    *   **Tunneling**: A quantum particle can penetrate a barrier where $E < V_0$ (evanescent wave), analogous to frustrated total internal reflection in optics.

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

---
## Assignment 1 Questions

### 64. Write the expressions in terms of wavelength for (a) maximum kinetic energy of photoelectrons emitted from the solid in photoelectric effect and (b) maximum recoil energy of electron in the Compton effect. Explain the symbols used in writing the expressions.

#### Answer
**(a) Photoelectric Effect:**
The maximum kinetic energy ($K_{max}$) of the emitted photoelectrons is given by Einstein's photoelectric equation:
$$ K_{max} = \frac{hc}{\lambda} - \phi $$
Where:
*   $h$ is Planck's constant.
*   $c$ is the speed of light.
*   $\lambda$ is the wavelength of the incident light.
*   $\phi$ (phi) is the work function of the metal.

**(b) Compton Effect:**
The maximum recoil energy of the electron ($K_{max}$) occurs when the photon is back-scattered ($\theta = 180^\circ$).
The shift in wavelength is $\Delta \lambda = \frac{h}{m_0 c}(1 - \cos 180^\circ) = \frac{2h}{m_0 c}$.
The energy of the scattered photon is $E' = \frac{hc}{\lambda + \Delta \lambda}$.
The kinetic energy of the electron is the difference between incident and scattered photon energies:
$$ K_{max} = \frac{hc}{\lambda} - \frac{hc}{\lambda + \frac{2h}{m_0 c}} = hc \left( \frac{1}{\lambda} - \frac{1}{\lambda + 2\lambda_c} \right) $$
Where:
*   $m_0$ is the rest mass of the electron.
*   $\lambda_c = h/(m_0 c)$ is the Compton wavelength.

### 65. Calculate the average energy of the Planck’s oscillator of frequency 5.6×10^12 Hz at 330 K.

#### Answer
The average energy $\langle E \rangle$ of a Planck oscillator at temperature $T$ is given by:
$$ \langle E \rangle = \frac{h\nu}{e^{h\nu/k_B T} - 1} $$
Given: Frequency $\nu = 5.6 \times 10^{12}$ Hz, Temperature $T = 330$ K.
Constants: $h = 6.626 \times 10^{-34}$ J s, $k_B = 1.38 \times 10^{-23}$ J/K.

1.  **Calculate $h\nu$:**
    $h\nu = (6.626 \times 10^{-34}) \times (5.6 \times 10^{12}) \approx 3.71 \times 10^{-21}$ J.
2.  **Calculate $k_B T$:**
    $k_B T = (1.38 \times 10^{-23}) \times (330) \approx 4.55 \times 10^{-21}$ J.
3.  **Calculate the ratio $x = \frac{h\nu}{k_B T}$:**
    $x = \frac{3.71}{4.55} \approx 0.815$.
4.  **Calculate average energy:**
    $\langle E \rangle = \frac{3.71 \times 10^{-21}}{e^{0.815} - 1} = \frac{3.71 \times 10^{-21}}{2.26 - 1} = \frac{3.71 \times 10^{-21}}{1.26}$.
    $$ \langle E \rangle \approx 2.94 \times 10^{-21} \text{ J} $$

### 66. The wave function of a particle which is constrained to move along x-axis is described by Ψ(x)=Nsin⁡(nπx/a) in the domain 0≤x≤a. Compute the expectation value of momentum.

#### Answer
The expectation value of momentum $\langle p \rangle$ is given by:
$$ \langle p \rangle = \int_{0}^{a} \Psi^*(x) \left(-i\hbar \frac{d}{dx}\right) \Psi(x) dx $$
Given $\Psi(x) = N \sin(\frac{n\pi x}{a})$.
Differentiation: $\frac{d\Psi}{dx} = N \frac{n\pi}{a} \cos(\frac{n\pi x}{a})$.
Integral:
$$ \langle p \rangle = -i\hbar N^2 \frac{n\pi}{a} \int_{0}^{a} \sin\left(\frac{n\pi x}{a}\right) \cos\left(\frac{n\pi x}{a}\right) dx $$
Using $\sin(2\theta) = 2\sin\theta\cos\theta$, the integrand is $\frac{1}{2}\sin(\frac{2n\pi x}{a})$.
The integral of sine over a full period (or integer multiple of periods $2n\pi$) is zero.
$$ \int_{0}^{a} \sin\left(\frac{2n\pi x}{a}\right) dx = \left[ -\frac{a}{2n\pi} \cos\left(\frac{2n\pi x}{a}\right) \right]_0^a = -\frac{a}{2n\pi} (1 - 1) = 0 $$
Thus, **$\langle p \rangle = 0$**.
Physical significance: The particle is moving back and forth (standing wave), so the average momentum is zero.

### 67. The phase velocity of ocean waves is √(gλ/2π) where g is acceleration due to gravity. Find the group velocity of a wave packet of these waves.

#### Answer
Phase velocity $v_p = \sqrt{\frac{g\lambda}{2\pi}}$.
We know $v_p = \frac{\omega}{k}$. Also $k = \frac{2\pi}{\lambda} \implies \lambda = \frac{2\pi}{k}$.
Substitute $\lambda$ into $v_p$:
$v_p = \frac{\omega}{k} = \sqrt{\frac{g(2\pi/k)}{2\pi}} = \sqrt{\frac{g}{k}}$.
$\omega = k \sqrt{\frac{g}{k}} = \sqrt{gk}$.
Group velocity $v_g = \frac{d\omega}{dk}$.
$v_g = \frac{d}{dk} (\sqrt{g} k^{1/2}) = \sqrt{g} \cdot \frac{1}{2} k^{-1/2} = \frac{1}{2} \sqrt{\frac{g}{k}}$.
Comparing with $v_p = \sqrt{\frac{g}{k}}$, we get:
$$ v_g = \frac{1}{2} v_p $$
The group velocity is half the phase velocity.

### 68. Determine the kinetic energy of the recoiling electron in Compton scattering.

#### Answer
By conservation of energy, the kinetic energy ($K_e$) gained by the recoiling electron is equal to the energy lost by the photon.
$$ K_e = E - E' = h\nu - h\nu' $$
Using the Compton shift formula, the scattered photon energy $E'$ is related to the incident energy $E$ by:
$$ E' = \frac{E}{1 + \frac{E}{m_0 c^2}(1-\cos\theta)} $$
Thus,
$$ K_e = E \left[ 1 - \frac{1}{1 + \frac{E}{m_0 c^2}(1-\cos\theta)} \right] = E \frac{\frac{E}{m_0 c^2}(1-\cos\theta)}{1 + \frac{E}{m_0 c^2}(1-\cos\theta)} $$
Where $\theta$ is the scattering angle of the photon.

### 69. Why do we introduce normalisation constant in the normalisation procedure? Give its significance.

#### Answer
The normalization constant is introduced to ensure that the total probability of finding the particle somewhere in the entire space is exactly 1 (unity).
$$ \int_{-\infty}^{\infty} |\Psi(x)|^2 dx = 1 $$
**Significance:**
1.  **Conservation of Probability:** It ensures physical reality, meaning the particle exists 100% of the time.
2.  **Probabilistic Interpretation:** It scales the wavefunction so that $|\Psi|^2$ correctly represents a probability density, allowing us to calculate meaningful absolute probabilities for finding the particle in specific regions.
