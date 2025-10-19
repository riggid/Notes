# [Back](../Physics.md)
***
# Numerical Examples

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
  $$\langle E \rangle = \frac{h\nu}{e^{h\nu/kT} - 1} = \frac{(6.626 \times 10^{-34})(6.2 \times 10^{12})}{e^{\frac{(6.626 \times 10^{-34})(6.2 \times 10^{12})}{(1.38 \times 10^{-23})(323)}} - 1} = 2.716 \times 10^{-21} \text{ J} \approx 0.017 \text{ eV}$$
- **Rayleigh-Jeans Law (Classical)**:
  $$\langle E \rangle = kT = (1.38 \times 10^{-23})(323) = 4.46 \times 10^{-21} \text{ J} \approx 0.028 \text{ eV}$$

---

### Example 3: Compton Scattering Calculation
X-rays of wavelength 0.112 nm are scattered from a carbon target. Calculate the wavelength of X-rays scattered at an angle of $90^\circ$. What is the energy lost by the photon?

#### Solution
- **Compton Shift**:
  $$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta) = (2.426 \times 10^{-12} \text{ m})(1 - \cos 90^\circ) = 2.426 \times 10^{-12} \text{ m}$$
- **Final Wavelength**:
  $$\lambda_f = \lambda_i + \Delta\lambda = (0.112 \times 10^{-9}) + (2.426 \times 10^{-12}) = 1.144 \times 10^{-10} \text{ m}$$
- **Energy Lost**:
  $$E_{lost} = E_i - E_f = hc\left(\frac{1}{\lambda_i} - \frac{1}{\lambda_f}\right)$$
  $$E_{lost} = (6.626 \times 10^{-34})(3 \times 10^8)\left(\frac{1}{0.112 \times 10^{-9}} - \frac{1}{1.144 \times 10^{-10}}\right) \approx 3.72 \times 10^{-17} \text{ J} \approx 232 \text{ eV}$$

---

### Example 4: De-Broglie Wavelength of an Electron
Find the de Broglie wavelength of an electron moving at a speed of $10^7$ m/s.

#### Solution
$$\lambda = \frac{h}{m_e v} = \frac{6.626 \times 10^{-34}}{(9.11 \times 10^{-31})(10^7)} = 7.27 \times 10^{-11} \text{ m} \approx 0.073 \text{ nm}$$

---

### Example 5: De-Broglie Wavelength of an Alpha Particle
An alpha particle ($m_\alpha = 4 m_p$, $q=2e$) is accelerated through a potential difference of 1 kV. Find its de Broglie wavelength.

#### Solution
The kinetic energy is $E = qV$.
$$\lambda = \frac{h}{\sqrt{2m_\alpha E}} = \frac{h}{\sqrt{2m_\alpha qV}}$$
$$\lambda = \frac{6.626 \times 10^{-34}}{\sqrt{2(4 \times 1.67 \times 10^{-27})(2 \times 1.6 \times 10^{-19})(1000)}} \approx 3.2 \times 10^{-13} \text{ m}$$

---

### Example 6: Phase and Group Velocity
A wave packet is represented as $y=10 \sin(30t-40x) \cos(0.3t-0.5x)$. Find the phase and group velocities.

#### Solution
Comparing to the form $y=2A\cos(\frac{\Delta\omega t - \Delta k x}{2})\sin(\omega t - kx)$:
- High frequency part: $\omega = 30$, $k = 40$.
- Low frequency (envelope) part: $\Delta\omega/2 = 0.3 \implies \Delta\omega=0.6$, and $\Delta k/2 = 0.5 \implies \Delta k=1.0$.
- **Phase Velocity**: $v_p = \frac{\omega}{k} = \frac{30}{40} = 0.75$ m/s.
- **Group Velocity**: $v_g = \frac{d\omega}{dk} \approx \frac{\Delta\omega}{\Delta k} = \frac{0.6}{1.0} = 0.6$ m/s.

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
$$P = \frac{1}{L} \left[ (\frac{3L}{4} - \frac{L}{4}) - (\frac{L}{8\pi}\sin(6\pi) - \frac{L}{8\pi}\sin(2\pi)) \right] = \frac{1}{L} \left[ \frac{L}{2} - 0 \right] = \frac{1}{2}$$

---

### Example 11: Minimum Energy in a 1D Box
What is the minimum energy (ground state, n=1) of an electron trapped in a 1D region the size of an atomic nucleus ($10^{-14}$ m)?

#### Solution
$$E_n = \frac{n^2 h^2}{8 m_e a^2}$$
$$E_1 = \frac{(1)^2 (6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31})(10^{-14})^2} \approx 6.02 \times 10^{-10} \text{ J} \approx 3.76 \times 10^9 \text{ eV} = 3.76 \text{ GeV}$$
This incredibly high energy is another reason why electrons cannot be confined within the nucleus.
***
# [Back](../Physics.md)