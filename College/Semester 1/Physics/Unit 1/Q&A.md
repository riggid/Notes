# Questions and Answers

### CL1_Q1: Magnetic monopoles do not exist. Justify.
From Maxwell's second equation, we have $\nabla \cdot \vec{B} = 0$. This implies that the magnetic field does not diverge from a single point, ruling out the possibility of an isolated magnetic monopole.

### CL1_Q2: What is the physical meaning of a gradient?
The gradient is an operation on a scalar field, $\phi(x,y,z)$. The result, $\nabla\phi$, is a vector that points in the direction of the maximum rate of change of the field, and its magnitude is that maximum rate of change.

### CL1_Q3: What is the physical significance of divergence and curl?
-   **Divergence** ($\nabla \cdot \vec{A}$) indicates the "spreading out" of a vector field from a point. Positive divergence means the point is a source; negative divergence means it is a sink. Zero divergence means the amount flowing into a region equals the amount flowing out.
-   **Curl** ($\nabla \times \vec{A}$) is a measure of the rotation or "swirl" of a vector field. It measures the tendency of the field to circulate around a point.

### CL1_Q4: Explain the significance of Faraday's law of electromagnetic induction.
Faraday's law states that a changing magnetic flux ($\phi_B$) through a loop of wire induces an electromotive force (EMF), which can drive a current. Mathematically, it relates the line integral of the electric field around the loop to the rate of change of magnetic flux: $\oint \vec{E} \cdot d\vec{l} = -\frac{d\phi_B}{dt}$.

---

### CL2_Q1: Difference between integral and differential forms of Maxwell's equations?
-   The **integral forms** apply to large regions of space and are useful when fields are constant or have high symmetry.
-   The **differential forms** are more fundamental as they apply to every single point in space, describing the local behavior of the fields.

### CL2_Q2: Which are the Maxwell's equations that contain 'sources'?
1.  **Gauss's Law for E-fields**: The charge density $\rho$ is the source of the electric field.
    $$\vec{\nabla}\cdot\vec{E}=\frac{\rho}{\epsilon_{o}}$$
2.  **Ampere-Maxwell Law**: The current density $\vec{J}$ and the time-varying E-field are sources of the magnetic field.
    $$\vec{\nabla} \times \vec{B}=\mu_{o}\vec{J}+\mu_{o}\epsilon_{o}\frac{\partial\vec{E}}{\partial t}$$

### CL2_Q3: How do Maxwell's equations describe electromagnetic waves?
By combining the four equations for free space (no sources), one can derive the wave equations for the electric and magnetic fields:
$$\nabla^{2}\vec{E}=\frac{1}{c^{2}}\frac{\partial^{2}\vec{E}}{\partial t^{2}} \quad \text{and} \quad \nabla^{2}\vec{B}=\frac{1}{c^{2}}\frac{\partial^{2}\vec{B}}{\partial t^{2}}$$
These equations describe transverse waves of E and B fields propagating at the speed of light, $c$.

### CL2_Q4: Discuss the phase correlation and direction of the E and B fields of an EM Wave.
For a plane wave, the electric and magnetic fields can be described by $E=E_{0}\sin(\omega t-kx)$ and $B=B_{0}\sin(\omega t-kx)$. They are **in phase** (no phase difference), are mutually **perpendicular** to each other, and both are perpendicular to the direction of wave propagation.

---

### CL3_Q1: Explain how Poynting vector explains the energy flow.
The Poynting vector, $\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$, describes the energy flux of an electromagnetic wave. Its direction is the direction of energy propagation (perpendicular to both E and B fields), and its magnitude is the energy passing through a unit area per unit time. The average value of its magnitude gives the intensity of the wave.

### CL3_Q2: Differentiate between circularly and elliptically polarized light?
-   **Circularly polarized light** is composed of two plane-polarized waves of **equal amplitude** with a $90^{\circ}$ phase difference.
-   **Elliptically polarized light** is composed of two plane-polarized waves of **unequal amplitude** with a $90^{\circ}$ phase difference, or waves of any amplitude with a phase difference other than $90^{\circ}$.

### CL3_Q3: Find the energy density of an electromagnetic wave if E-field amplitude is 6.2 V/m.
The total energy density is given by $u = \epsilon_{0}E_{max}^{2}$.
Given $E_{max}=6.2~V/m$ and $\epsilon_{0}=8.85\times10^{-12}~C^{2}/(N \cdot m^{2})$:
$$u = (8.85\times10^{-12}) \times (6.2)^2 = 3.4\times10^{-10}~J/m^{3}$$

---

### CL4_Q1: Mention the characteristics of a black body spectrum.
1.  At any temperature, the radiated energy is not distributed uniformly among all wavelengths; it has a peak intensity at a specific wavelength/frequency.
2.  As the temperature increases, this peak shifts to higher frequencies (shorter wavelengths).
3.  As the temperature increases, the total energy radiated (the area under the curve) increases, proportional to $T^4$.

### CL4_Q2: Mention Planck's formula for black body radiation.
Based on the quantization of energy, Planck derived the formula for the energy density of blackbody radiation as a function of frequency $\nu$:
$$\rho(\nu)d\nu = \frac{8\pi h\nu^{3}}{c^{3}}\frac{1}{e^{h\nu/kT}-1}d\nu$$

### CL4_Q3: Calculate the average energy of a Planck's oscillator of frequency $5.6 \times 10^{12}$ Hz at 330 K.
The average energy is given by $\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
Plugging in the values: $h=6.626\times10^{-34}$, $\nu=5.6\times10^{12}$, $k=1.38\times10^{-23}$, $T=330$:
$$\langle E \rangle = 2.945\times10^{-21} \text{ Joules}$$

---

### CL6_Q1: Why classical physics cannot explain the results of Compton's experiment?
According to classical wave theory, the oscillating electric field of the incident X-ray would cause electrons in the target to oscillate at the same frequency. These oscillating electrons would then re-radiate waves with:
1.  The **same wavelength** as the incident radiation.
2.  A wavelength that does **not depend on the scattering angle**.
Both of these predictions are contrary to the experimental observations of the Compton effect, where the scattered wavelength is longer and depends on the angle.

### CL6_Q2: What are the angles at which the Compton shift is minimum and maximum?
The Compton shift is $\Delta\lambda=\frac{h}{m_{e}c}(1-\cos\theta)$.
-   **Minimum shift**: Occurs at $\theta = 0^{\circ}$, where $\cos(0)=1$ and $\Delta\lambda = 0$. This corresponds to a grazing collision with no energy transfer.
-   **Maximum shift**: Occurs at $\theta = 180^{\circ}$, where $\cos(180)=-1$ and $\Delta\lambda = \frac{2h}{m_e c}$. This corresponds to a head-on collision where the photon is back-scattered.

---

### CL7_Q1: What are matter waves? State De-Broglie hypothesis.
**Matter waves** (or de-Broglie waves) are waves associated with material particles in motion. The **de-Broglie hypothesis** states that just as light exhibits wave-particle duality, all matter also has a dual nature. Any particle with momentum $p$ behaves like a wave with wavelength $\lambda = h/p$.

### CL7_Q2: Why is the wave nature of matter not apparent for macroscopic particles?
The de-Broglie wavelength is given by $\lambda = h/mv$. Because Planck's constant ($h$) is extremely small, the mass ($m$) of a macroscopic object (like a baseball) makes the associated wavelength incredibly short—far too small to be detected or to produce noticeable wave effects like diffraction. The wave nature is only significant for particles with very small mass, such as electrons.

### CL7_Q3: Calculate the de-Broglie wavelength of an oxygen molecule with mass $5.4\times10^{-26}$ kg moving at 500 m/s.
$$\lambda = \frac{h}{mv} = \frac{6.626\times10^{-34}}{(5.4\times10^{-26}) \times 500} = 2.45\times10^{-11} \text{ m}$$

---

### CL8_Q1: The Uncertainty principle is not significant in the case of macro-bodies. Justify.
For a macroscopic object, like a cricket ball of mass 0.5 kg, if the uncertainty in its position is $\Delta x = 1$ mm, the uncertainty in its velocity can be calculated from $\Delta x \cdot m\Delta v \approx h/4\pi$.
$$\Delta v \approx \frac{h}{4\pi m\Delta x} = \frac{6.626\times10^{-34}}{4\pi \cdot 0.5 \cdot 10^{-3}} \approx 1.05\times10^{-31} \text{ m/s}$$
This uncertainty in velocity is so infinitesimally small that it is completely undetectable, meaning for all practical purposes, both the position and velocity of a macro body can be determined with high precision.

### CL8_Q2: A shutter opens for $\Delta t = 10^{-10}$ s. What is the spread in frequency of the light that passes through?
Using the energy-time uncertainty principle, $\Delta E \cdot \Delta t \ge \hbar/2$. Since $E=h\nu$, we have $\Delta E = h \Delta\nu$.
$$h\Delta\nu \cdot \Delta t \ge \frac{h}{4\pi} \implies \Delta\nu \ge \frac{1}{4\pi \Delta t}$$
$$\Delta\nu \ge \frac{1}{4\pi \cdot 10^{-10}} \approx 7.9 \times 10^8 \text{ Hz}$$

### CL8_Q3: An electron and a 150g baseball are travelling at 220 m/s with 0.065% accuracy. Compare the uncertainty in their positions.
- Uncertainty in velocity: $\Delta v = 220 \times 0.00065 = 0.143$ m/s.
- Uncertainty in electron's position ($\Delta x_e$):
  $$\Delta x_e \ge \frac{\hbar}{2m_e\Delta v} = \frac{1.054 \times 10^{-34}}{2 \cdot (9.11 \times 10^{-31}) \cdot 0.143} \approx 0.4 \times 10^{-3} \text{ m or } 0.4 \text{ mm}$$
- Uncertainty in baseball's position ($\Delta x_b$):
  $$\Delta x_b \ge \frac{\hbar}{2m_b\Delta v} = \frac{1.054 \times 10^{-34}}{2 \cdot 0.150 \cdot 0.143} \approx 2.5 \times 10^{-33} \text{ m}$$
The uncertainty in the electron's position is measurable, while the uncertainty for the baseball is negligible.

---

### CL9_Q1: Give physical interpretation of the wave function.
The wave function $\psi$ itself is a complex probability amplitude and has no direct physical meaning. However, its squared magnitude, $|\psi|^2 = \psi^*\psi$, is called the **probability density**. The probability of finding the particle within a small volume $dV$ is $|\psi|^2 dV$.

### CL9_Q2: Prove that $|\psi|^2$ is necessarily real and positive.
Let the wave function be a complex number $\psi = A + iB$. Its complex conjugate is $\psi^* = A - iB$.
$$|\psi|^2 = \psi^*\psi = (A - iB)(A + iB) = A^2 - (iB)^2 = A^2 - (-1)B^2 = A^2 + B^2$$
Since A and B are real numbers, $A^2$ and $B^2$ are both positive or zero. Therefore, their sum, $|\psi|^2$, must also be real and positive (or zero).

### CL9_Q3: Mention important properties of wave function.
1.  $\psi$ must be finite, continuous, and single-valued everywhere.
2.  The derivatives of $\psi$ (like $\partial\psi/\partial x$) must also be finite, continuous, and single-valued.
3.  $\psi$ must be normalizable, meaning the integral of $|\psi|^2$ over all space must be finite (and can be set to 1).

### CL9_Q4: What is the difference between probability density and probability?
-   **Probability Density ($|\psi|^2$)**: A function that gives the probability *per unit volume* (or length, or area) of finding a particle at a specific point.
-   **Probability**: The actual probability of finding a particle within a finite region. It is found by integrating the probability density over that region. For example, the probability of finding a particle between $x_1$ and $x_2$ is $P = \int_{x_1}^{x_2} |\psi(x)|^2 dx$.

---

### CL12_Q1: What is the physical significance of normalization of wave function?
Normalization sets the total probability of finding the particle *somewhere* in all of space to exactly 1. The condition is:
$$\int_{-\infty}^{+\infty}|\psi|^2 dV = 1$$
This ensures that the probabilistic interpretation of the wavefunction is consistent, as the particle must exist somewhere.

### CL12_Q2: Normalize the wave function $\psi = A \sin(\frac{\pi x}{L})$ for $0 < x < L$.
1. Set up the normalization integral:
   $$\int_{0}^{L} \psi^* \psi dx = \int_{0}^{L} A^2 \sin^2\left(\frac{\pi x}{L}\right) dx = 1$$
2. Use the identity $\sin^2(\theta) = \frac{1}{2}(1-\cos(2\theta))$:
   $$A^2 \int_{0}^{L} \frac{1}{2}\left(1 - \cos\left(\frac{2\pi x}{L}\right)\right) dx = 1$$
3. Evaluate the integral:
   $$\frac{A^2}{2} \left[ x - \frac{L}{2\pi}\sin\left(\frac{2\pi x}{L}\right) \right]_0^L = 1$$
   $$\frac{A^2}{2} \left[ (L - 0) - (0 - 0) \right] = 1 \implies \frac{A^2 L}{2} = 1$$
4. Solve for A: $A = \sqrt{\frac{2}{L}}$. The normalized wavefunction is $\psi = \sqrt{\frac{2}{L}} \sin(\frac{\pi x}{L})$.

---

### CL14_Q1: Explain the concept of "expectation value".
The **expectation value** is the theoretical average outcome of a measurement of an observable quantity, if the measurement were performed on a large number of identical systems. Since quantum mechanics is probabilistic, it predicts this most probable average value rather than a definite outcome for a single measurement. It is calculated as:
$$\langle A \rangle = \int \Psi^* \hat{A} \Psi dV$$

### CL14_Q2: Explain operators and observables.
- **Observables**: The dynamical physical quantities of a system that can, in principle, be measured (e.g., position, momentum, energy).
- **Operators**: Mathematical constructs (often involving derivatives) that correspond to observables. When an operator acts on a wavefunction, it extracts information about the corresponding observable.

### CL14_Q3: Find the expectation value of position, $\langle x \rangle$, for a particle in a box of width L.
The normalized wavefunction is $\psi_n(x) = \sqrt{\frac{2}{L}}\sin(\frac{n\pi x}{L})$. The position operator is $\hat{x}=x$.
$$\langle x \rangle = \int_0^L \psi^*_n (x) \psi_n dx = \int_0^L x \left(\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right)\right)^2 dx$$
$$\langle x \rangle = \frac{2}{L} \int_0^L x \sin^2\left(\frac{n\pi x}{L}\right) dx$$
The result of this integral is $L/2$. The most probable place to find the particle is in the exact center of the box.

### CL14_Q4: Describe an Eigen value equation.
An eigenvalue equation takes the form:
$$\hat{G}\psi_n = \lambda_n \psi_n$$
- $\hat{G}$ is an **operator** corresponding to an observable.
- $\psi_n$ is an **eigenfunction** of that operator. It represents a state where the observable has a definite value.
- $\lambda_n$ is the **eigenvalue**. It is the specific, real-valued result you will get if you measure the observable $G$ when the system is in the state $\psi_n$.

### CL14_Q5: Write five operators associated with dynamical variables.
| Observable       | Operator ($\hat{A}$)                                            |
| ---------------- | --------------------------------------------------------------- |
| Position (x)     | $\hat{x} = x$                                                   |
| Momentum (p)     | $\hat{p} = -i\hbar\frac{\partial}{\partial x}$                  |
| Kinetic Energy (K)| $\hat{K} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}$ |
| Potential Energy(V)| $\hat{V} = V(x)$                                                |
| Total Energy (E) | $\hat{E} = i\hbar\frac{\partial}{\partial t}$                   |

---

### CL13_Q1: A free particle is a classical entity. Justify.
A free particle experiences no forces, so its potential energy is constant ($V=0$). The Schrödinger equation becomes $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$, where $k=\sqrt{\frac{2mE}{\hbar^{2}}}$. The solution is a plane wave, $\psi(x) = Ae^{ikx}+Be^{-ikx}$. The particle's energy is $E=\frac{\hbar^{2}k^{2}}{2m}$. Since there are no boundaries or restrictions on the particle, the wave number $k$ can take any value. This means the energy $E$ can also take any value; it is **not quantized**. This continuous energy spectrum is characteristic of a classical particle, not a bound quantum system.