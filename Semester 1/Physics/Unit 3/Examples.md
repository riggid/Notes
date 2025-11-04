# [Back](../../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 3: Worked Examples

### Example 1: Fermi Factor Calculation
Estimate the Fermi factor of an energy state 0.01eV below the Fermi level at 500K.

#### Solution
Given $E-E_f = -0.01 \text{ eV} = -0.01 \times 1.6 \times 10^{-19} \text{ J}$.
$k_B = 1.38 \times 10^{-23} \text{ J/K}$.
$T = 500 \text{ K}$.
$k_B T = 1.38 \times 10^{-23} \text{ J/K} \times 500 \text{ K} = 6.9 \times 10^{-21} \text{ J}$.
The exponent term is: $(E-E_f)/k_B T = (-0.01 \times 1.6 \times 10^{-19}) / (6.9 \times 10^{-21}) = -2.3188$.
Using the Fermi-Dirac distribution function:
$$F_d(E) = \frac{1}{e^{(E-E_f)/k_B T} + 1} = \frac{1}{e^{-2.3188} + 1}$$
$$F_d(E) = \frac{1}{0.0984 + 1} = \frac{1}{1.0984} \approx 0.9104$$

---

### Example 3: Fermi Velocity Calculation
Determine the free electron concentration and Fermi velocity for electrons in a metal with Fermi energy of 5.10 eV.

#### Solution
Given $E_f = 5.10 \text{ eV} = 5.10 \times 1.602 \times 10^{-19} \text{ J} = 8.17 \times 10^{-19} \text{ J}$.
Mass of electron $m_e = 9.109 \times 10^{-31} \text{ kg}$.
Planck's constant $h = 6.626 \times 10^{-34} \text{ J s}$.

*   **Fermi Velocity ($v_f$)**:
    $$v_f = \sqrt{\frac{2E_f}{m_e}} = \sqrt{\frac{2 \times 8.17 \times 10^{-19} \text{ J}}{9.109 \times 10^{-31} \text{ kg}}} \approx 1.34 \times 10^6 \text{ m/s}$$
*   **Free Electron Concentration ($n$)**:
    $$n = \frac{\pi}{3} \left(\frac{8m_e}{h^2}\right)^{3/2} E_f^{3/2}$$
    $$n = \frac{\pi}{3} \left(\frac{8 \times 9.109 \times 10^{-31} \text{ kg}}{(6.626 \times 10^{-34} \text{ J s})^2}\right)^{3/2} (8.17 \times 10^{-19} \text{ J})^{3/2}$$
    $$n \approx 5.21 \times 10^{28} \text{ m}^{-3}$$

---

### Example 4: Number of Electron States
A monovalent metal has $5 \times 10^{28}$ valence electrons per m³. Estimate the number of electron energy states per unit volume in the metal between 2eV and 2.005eV from the concept of the density of states.

#### Solution
Given $E = 2 \text{ eV} = 3.204 \times 10^{-19} \text{ J}$.
$\Delta E = 0.005 \text{ eV} = 8.01 \times 10^{-22} \text{ J}$.
$m_e = 9.109 \times 10^{-31} \text{ kg}$. $h = 6.626 \times 10^{-34} \text{ J s}$.
The number of states in the energy interval $dE$ at energy $E$ is $g(E) dE$.
$$g(E) dE = \frac{\pi}{2} \left(\frac{8m_e}{h^2}\right)^{3/2} E^{1/2} dE$$
$$g(E) dE = \frac{\pi}{2} \left(\frac{8 \times 9.109 \times 10^{-31} \text{ kg}}{(6.626 \times 10^{-34} \text{ J s})^2}\right)^{3/2} (3.204 \times 10^{-19} \text{ J})^{1/2} (8.01 \times 10^{-22} \text{ J})$$
$$g(E) dE \approx 4.80 \times 10^{25} \text{ m}^{-3}$$

---

### Example 7: Relaxation Time in a Metal
Calculate the relaxation time of conduction electrons in a metal of resistivity of 1.55 x 10<sup>-8</sup> Ω m and an electronic concentration of 6 x 10<sup>28</sup> per m³.

#### Solution
Given:
*   Resistivity, $\rho = 1.55 \times 10^{-8} \Omega \text{ m}$
*   Electronic concentration, $n = 6 \times 10^{28} \text{ m}^{-3}$
*   Charge of electron, $e = 1.602 \times 10^{-19} \text{ C}$
*   Mass of electron, $m_e = 9.109 \times 10^{-31} \text{ kg}$

The formula for resistivity in the Classical Free Electron Theory is:
$$\rho = \frac{m_e}{ne^2\tau}$$
We need to find the relaxation time ($\tau$), so we rearrange the formula:
$$\tau = \frac{m_e}{ne^2\rho}$$
Substitute the given values:
$$\tau = \frac{9.109 \times 10^{-31} \text{ kg}}{(6 \times 10^{28} \text{ m}^{-3}) \times (1.602 \times 10^{-19} \text{ C})^2 \times (1.55 \times 10^{-8} \Omega \text{ m})}$$
Calculate the denominator:
$$n \times e^2 \times \rho = (6 \times 10^{28}) \times (2.566404 \times 10^{-38}) \times (1.55 \times 10^{-8})$$
$$= 6 \times 2.566404 \times 1.55 \times 10^{(28 - 38 - 8)}$$
$$= 23.8675572 \times 10^{-18}$$
$$= 2.38675572 \times 10^{-17} \text{ kg m}^{-2} \Omega \text{ C}^2$$
Now, calculate $\tau$:
$$\tau = \frac{9.109 \times 10^{-31}}{2.38675572 \times 10^{-17}} \approx 3.816 \times 10^{-14} \text{ s}$$
The relaxation time is approximately $3.82 \times 10^{-14}$ seconds.

---
# [Back](../../Physics.md)
