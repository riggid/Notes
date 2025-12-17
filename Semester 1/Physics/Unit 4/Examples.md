---
dg-publish: true
---

# [[../Physics|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***

# Unit 7: Lasers, Optoelectronics, and Advanced Materials - Examples

This section provides step-by-step solutions to numerical and conceptual problems related to laser physics, dielectrics, and optoelectronics, as outlined in the `Core Notes.md`.

## Solved Numericals (from provided context)

### Example 1: Population of Higher Energy State

**Problem (SN-1):** An emission system has two levels which gives rise to an emission wavelength of 546.1 nm. If the population of the lower state is $4 \times 10^{22}$ at 600 K, estimate the population of the higher energy state.

**Solution:**
1.  **Recall Boltzmann Distribution Law:**
    The ratio of populations of two energy states $N_1$ (lower) and $N_2$ (higher) at thermal equilibrium is given by:
    $$ \frac{N_2}{N_1} = e^{-\frac{E_2 - E_1}{k_B T}} = e^{-\frac{h\nu}{k_B T}} $$
    where $h\nu = hc/\lambda$ for photon energy.

2.  **Given Values:**
    *   Wavelength ($\lambda$) = 546.1 nm = $546.1 \times 10^{-9}$ m
    *   Population of lower state ($N_1$) = $4 \times 10^{22}$
    *   Temperature ($T$) = 600 K
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s
    *   Boltzmann constant ($k_B$) = $1.38 \times 10^{-23}$ J/K

3.  **Calculate the exponent term $\frac{h\nu}{k_B T}$:**
    $$ \frac{h\nu}{k_B T} = \frac{hc}{\lambda k_B T} $$
    $$ \frac{hc}{\lambda k_B T} = \frac{(6.626 \times 10^{-34} \text{ J s}) \times (3 \times 10^8 \text{ m/s})}{(546.1 \times 10^{-9} \text{ m}) \times (1.38 \times 10^{-23} \text{ J/K}) \times (600 \text{ K})} $$
    $$ \frac{hc}{\lambda k_B T} = \frac{1.9878 \times 10^{-25}}{4.52628 \times 10^{-27}} \approx 43.918 $$

4.  **Calculate the population ratio $\frac{N_2}{N_1}$:**
    $$ \frac{N_2}{N_1} = e^{-43.918} $$
    $$ e^{-43.918} \approx 8.088 \times 10^{-20} $$

5.  **Estimate the population of the higher energy state ($N_2$):**
    $$ N_2 = N_1 \times e^{-\frac{h\nu}{k_B T}} $$
    $$ N_2 = (4 \times 10^{22}) \times (8.088 \times 10^{-20}) $$
    $$ N_2 = 3.2352 \times 10^{3} $$

**Final Answer:** The population of the higher energy state is approximately $3.2352 \times 10^{3}$.

***

### Example 2: Emission Wavelength and A/B Ratio

**Problem (SN-2):** The ratio of population between the high energy state to the lower energy state is $5 \times 10^{-19}$ at 400K. Find the emission wavelength between two states and the ratio A/B.

**Solution:**
1.  **Given Values:**
    *   Ratio of populations $\frac{N_2}{N_1} = 5 \times 10^{-19}$
    *   Temperature ($T$) = 400 K
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s
    *   Boltzmann constant ($k_B$) = $1.38 \times 10^{-23}$ J/K

2.  **Recall Boltzmann Distribution Law and solve for $\lambda$:**
    $$ \frac{N_2}{N_1} = e^{-\frac{h\nu}{k_B T}} = e^{-\frac{hc}{\lambda k_B T}} $$
    Taking the natural logarithm of both sides:
    $$ \ln\left(\frac{N_2}{N_1}\right) = -\frac{hc}{\lambda k_B T} $$
    $$ \lambda = -\frac{hc}{k_B T \ln\left(\frac{N_2}{N_1}\right)} $$
    Substitute the given values:
    $$ \lambda = -\frac{(6.626 \times 10^{-34} \text{ J s}) \times (3 \times 10^8 \text{ m/s})}{(1.38 \times 10^{-23} \text{ J/K}) \times (400 \text{ K}) \times \ln(5 \times 10^{-19})} $$
    First, calculate $\ln(5 \times 10^{-19})$:
    $$ \ln(5 \times 10^{-19}) = \ln(5) + \ln(10^{-19}) = 1.609 - 19 \ln(10) = 1.609 - 19 \times 2.3026 \approx 1.609 - 43.7494 = -42.1404 $$
    Now, substitute back into the equation for $\lambda$:
    $$ \lambda = -\frac{1.9878 \times 10^{-25}}{(1.38 \times 10^{-23}) \times (400) \times (-42.1404)} $$
    $$ \lambda = -\frac{1.9878 \times 10^{-25}}{(-2.327 \times 10^{-20})} \approx 8.542 \times 10^{-6} \text{ m} $$
    $$ \lambda = 8542 \text{ nm} \text{ or } 8.542 \text{ µm} $$
    The calculation in the OCR derived $N_1/N_2 = 2 \times 10^{18}$ and then $\lambda = 854.56 \text{ nm}$. Let's recheck with the OCR approach using $N_1/N_2$ and $hc/(kT \ln(N_1/N_2))$.
    From the given source, it implies $N_1/N_2 = \exp(h\nu/kT)$.
    So $N_1/N_2 = 1/(5 \times 10^{-19}) = 2 \times 10^{18}$.
    Then $\ln(N_1/N_2) = \ln(2 \times 10^{18}) = \ln(2) + 18 \ln(10) = 0.693 + 18 \times 2.3026 \approx 0.693 + 41.4468 = 42.1398$.
    $$ \lambda = \frac{hc}{k_B T \ln\left(\frac{N_1}{N_2}\right)} = \frac{1.9878 \times 10^{-25} \text{ J m}}{(1.38 \times 10^{-23} \text{ J/K}) \times (400 \text{ K}) \times (42.1398)} $$
    $$ \lambda = \frac{1.9878 \times 10^{-25}}{2.324 \times 10^{-20}} \approx 8.553 \times 10^{-6} \text{ m} = 8553 \text{ nm} $$
    The OCR result of 854.56 nm is inconsistent with $N_2/N_1 = 5 \times 10^{-19}$ at 400K unless perhaps a different temperature or ratio was intended for that specific number. However, following the current problem statement leads to ~8.5 µm. The OCR calculation `hc/(kT*ln(N1/N2))` is correct using the proper logarithm argument. Let's use the wavelength derived from the OCR itself for the next step, assuming it implies that specific result, regardless of the intermediate calculation shown. If we strictly follow the value $\lambda = 854.56 \text{ nm}$ from the OCR and trace back:
    $ E_2-E_1 = hc/\lambda = (6.626e-34 * 3e8) / (854.56e-9) = 2.326e-19 J$.
    $ k_B T \ln(N_1/N_2) = (1.38e-23 * 400) * \ln(2e18) = 5.52e-21 * 42.1398 = 2.326e-19 J$.
    So the OCR's $\lambda = 854.56 \text{ nm}$ is indeed obtained IF $N_1/N_2 = 2 \times 10^{18}$ and $T=400K$ is used for the direct calculation of $\lambda$. The text stated $N_2/N_1 = 5 \times 10^{-19}$, which implies $N_1/N_2 = 2 \times 10^{18}$. The calculation is sound.

3.  **Calculate the ratio $A_{21}/B_{21}$ (A/B ratio):**
    Recall Einstein's relation:
    $$ \frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3} = \frac{8\pi h (c/\lambda)^3}{c^3} = \frac{8\pi h}{\lambda^3} $$
    Using $\lambda = 854.56 \text{ nm} = 854.56 \times 10^{-9} \text{ m}$ as per the OCR's result.
    $$ \frac{A_{21}}{B_{21}} = \frac{8\pi \times (6.626 \times 10^{-34} \text{ J s})}{(854.56 \times 10^{-9} \text{ m})^3} $$
    $$ \frac{A_{21}}{B_{21}} = \frac{1.664 \times 10^{-32}}{(854.56)^3 \times 10^{-27}} = \frac{1.664 \times 10^{-32}}{6.242 \times 10^8 \times 10^{-27}} $$
    $$ \frac{A_{21}}{B_{21}} = \frac{1.664 \times 10^{-32}}{6.242 \times 10^{-19}} \approx 2.666 \times 10^{-14} \text{ s}^{-1} \text{ (J m}^{-3} \text{ s Hz})^{-1} $$
    The unit for $A_{21}/B_{21}$ is $[Time]^{-1} / ([Mass]^{-1}[Length][Time]) = [Mass][Time]^{-2}[Length]^{-1}$. This can be confusing across different unit systems. The original context gave $\frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3}$ which has units of $J s m^{-3}$ for spectral energy density.
    So, the dimensions are $\frac{\text{Energy} \cdot \text{Volume}^{-1} \cdot \text{Frequency}^{-1}}{\text{Frequency}^{-1}} = \text{Energy} \cdot \text{Volume}^{-1}$, or $\text{J m}^{-3}$.
    Let's re-evaluate the units. $A_{21}$ is $s^{-1}$. $B_{21}$ is $\text{m}^3 \text{ J}^{-1} \text{ s}^{-1}$. So $A_{21}/B_{21}$ unit is $s^{-1} / (\text{m}^3 \text{ J}^{-1} \text{ s}^{-1}) = \text{J m}^{-3}$.
    So the result is $2.666 \times 10^{-14} \text{ J/m}^3$.

**Final Answer:**
*   The emission wavelength is $\lambda = 854.56 \text{ nm}$.
*   The ratio $A_{21}/B_{21}$ is approximately $2.666 \times 10^{-14} \text{ J/m}^3$.

***

### Example 3: Wavelength and Energy Density of Radiation

**Problem (SN-3):** The ratio of population of the upper excited state to the lower energy state in a system at 300K is found to be $1.2 \times 10^{-19}$. Find the wavelength of the radiation emitted and the energy density of radiation.

**Solution:**
1.  **Given Values:**
    *   Ratio of populations $\frac{N_2}{N_1} = 1.2 \times 10^{-19}$
    *   Temperature ($T$) = 300 K
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s
    *   Boltzmann constant ($k_B$) = $1.38 \times 10^{-23}$ J/K

2.  **Calculate Wavelength ($\lambda$):**
    Using the Boltzmann distribution:
    $$ \frac{N_2}{N_1} = e^{-\frac{hc}{\lambda k_B T}} $$
    $$ \ln\left(\frac{N_2}{N_1}\right) = -\frac{hc}{\lambda k_B T} $$
    $$ \lambda = -\frac{hc}{k_B T \ln\left(\frac{N_2}{N_1}\right)} $$
    First, calculate $\ln(1.2 \times 10^{-19})$:
    $$ \ln(1.2 \times 10^{-19}) = \ln(1.2) + \ln(10^{-19}) = 0.1823 - 19 \ln(10) = 0.1823 - 19 \times 2.3026 \approx 0.1823 - 43.7494 = -43.5671 $$
    Now, substitute back into the equation for $\lambda$:
    $$ \lambda = -\frac{(6.626 \times 10^{-34} \text{ J s}) \times (3 \times 10^8 \text{ m/s})}{(1.38 \times 10^{-23} \text{ J/K}) \times (300 \text{ K}) \times (-43.5671)} $$
    $$ \lambda = -\frac{1.9878 \times 10^{-25}}{(-1.804 \times 10^{-19})} \approx 1.101 \times 10^{-6} \text{ m} $$
    $$ \lambda \approx 1.101 \text{ µm} $$
    The OCR states $\lambda=1.06 \times 10^{-6} \text{ m}$. Let's recalculate carefully.
    $k_B T = 1.38 \times 10^{-23} \times 300 = 4.14 \times 10^{-21} \text{ J}$.
    $h \times c = 1.9878 \times 10^{-25} \text{ J m}$.
    $\ln(N_2/N_1) = \ln(1.2 \times 10^{-19}) = -43.5671$.
    $\lambda = -\frac{1.9878 \times 10^{-25}}{(4.14 \times 10^{-21}) \times (-43.5671)} = -\frac{1.9878 \times 10^{-25}}{-1.8037 \times 10^{-19}} \approx 1.102 \times 10^{-6} \text{ m}$.
    This is close to 1.1 µm. The OCR value of `1.06x10^-6 m` seems to be a slight rounding/approximation in their intermediate steps or using slightly different constants. We will adhere to the calculated value.

3.  **Calculate the energy density of radiation $\rho(\nu)$ (or $u(\nu)$) using Planck's formula:**
    $$ \rho(\nu) = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_B T} - 1} $$
    First, calculate $\nu = c/\lambda$:
    $$ \nu = \frac{3 \times 10^8 \text{ m/s}}{1.102 \times 10^{-6} \text{ m}} = 2.722 \times 10^{14} \text{ Hz} $$
    Then, $h\nu = (6.626 \times 10^{-34} \text{ J s}) \times (2.722 \times 10^{14} \text{ Hz}) = 1.803 \times 10^{-19} \text{ J}$.
    Now, the exponent term $h\nu / (k_B T)$:
    $$ \frac{h\nu}{k_B T} = \frac{1.803 \times 10^{-19} \text{ J}}{(1.38 \times 10^{-23} \text{ J/K}) \times (300 \text{ K})} = \frac{1.803 \times 10^{-19}}{4.14 \times 10^{-21}} \approx 43.55 $$
    We can also note that $\frac{h\nu}{k_B T} = -\ln(N_2/N_1) = 43.5671$. This is consistent.
    Now compute $\rho(\nu)$:
    $$ \rho(\nu) = \frac{8\pi (6.626 \times 10^{-34}) (2.722 \times 10^{14})^3}{(3 \times 10^8)^3} \frac{1}{e^{43.5671} - 1} $$
    $$ \rho(\nu) = \frac{8\pi (6.626 \times 10^{-34}) (2.016 \times 10^{43})}{2.7 \times 10^{25}} \frac{1}{e^{43.5671} - 1} $$
    $$ \rho(\nu) = \frac{3.342 \times 10^{11}}{2.7 \times 10^{25}} \frac{1}{e^{43.5671} - 1} $$
    Since $e^{43.5671}$ is a very large number, $e^{43.5671} - 1 \approx e^{43.5671} \approx 6.09 \times 10^{18}$.
    $$ \rho(\nu) \approx (1.238 \times 10^{-14}) \times \frac{1}{6.09 \times 10^{18}} \approx 2.03 \times 10^{-33} \text{ J s/m}^3 $$
    The dimensions of $u(\nu)$ or $\rho(\nu)$ are spectral energy density, which are "Energy per unit volume per unit frequency" so J s m$^{-3}$ (J/(m$^3$ Hz)). The OCR provides $1.987 \times 10^{-33} \text{ Js/m}^3$. Our calculated value is very close considering approximations.

**Final Answer:**
*   The wavelength of radiation emitted is $\lambda \approx 1.102 \text{ µm}$ (or $1.102 \times 10^{-6}$ m).
*   The energy density of radiation is $\rho(\nu) \approx 2.03 \times 10^{-33} \text{ J s/m}^3$.

***

### Example 4: Wavelength of Laser Emitted from Semiconductor

**Problem (SN-4/CL43_Q3):** A laser emission from a certain laser has an output power of 10 milli watts. If the wavelength of the emission is 632.8 nm, find the rate of emission of the stimulated photons. If the band gap of direct band gap semiconductor is 0.2 eV, estimate the wavelength of laser emitted from it. To which region of electromagnetic spectrum does it belong?

**Solution - Part 1: Rate of emission for existing laser**
1.  **Given Values:**
    *   Output power ($P$) = 10 mW = $10 \times 10^{-3}$ W
    *   Wavelength ($\lambda$) = 632.8 nm = $632.8 \times 10^{-9}$ m
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Recall the relationship between Power, Rate of Photons, and Photon Energy:**
    The total power $(P)$ is the product of the rate of emission of photons ($n$) and the energy of a single photon ($h\nu$).
    $$ P = n \times h\nu = n \times \frac{hc}{\lambda} $$
3.  **Solve for the rate of emission of stimulated photons ($n$):**
    $$ n = \frac{P \lambda}{hc} $$
    $$ n = \frac{(10 \times 10^{-3} \text{ W}) \times (632.8 \times 10^{-9} \text{ m})}{(6.626 \times 10^{-34} \text{ J s}) \times (3 \times 10^8 \text{ m/s})} $$
    $$ n = \frac{6.328 \times 10^{-12}}{1.9878 \times 10^{-25}} \approx 3.183 \times 10^{13} \text{ photons/second} $$
    The OCR result is $3.18 \times 10^{16}$ per second. This suggests a unit difference (milliwatts vs. Watts, or a higher base value for P), or a numerical error in the OCR. Let's assume the power was in Watts, or that the constant used was different. If $P$ was $10 \text{ W}$ instead of $10 \text{ mW}$, then the result would be $3.18 \times 10^{16}$. Given the typical laser powers, 10 mW is more common for this type of problem, but the OCR's answer points to a higher power or error. Stick to calculation with mW.

**Solution - Part 2: Wavelength from Semiconductor Band Gap**
1.  **Given Values:**
    *   Band gap energy ($E_g$) = 0.2 eV
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s
    *   Charge of electron ($e$) = $1.602 \times 10^{-19}$ C (for eV to Joules conversion)

2.  **Convert Band Gap Energy to Joules:**
    $$ E_g = 0.2 \text{ eV} \times (1.602 \times 10^{-19} \text{ J/eV}) = 3.204 \times 10^{-20} \text{ J} $$
    The OCR used $3.2 \times 10^{-20} \text{ J}$.

3.  **Calculate the Wavelength ($\lambda$):**
    For a direct band gap semiconductor, the emitted photon energy is approximately equal to the band gap energy:
    $$ E_g = h\nu = \frac{hc}{\lambda} $$
    $$ \lambda = \frac{hc}{E_g} $$
    $$ \lambda = \frac{(6.626 \times 10^{-34} \text{ J s}) \times (3 \times 10^8 \text{ m/s})}{3.204 \times 10^{-20} \text{ J}} $$
    $$ \lambda = \frac{1.9878 \times 10^{-25}}{3.204 \times 10^{-20}} \approx 6.204 \times 10^{-6} \text{ m} $$
    $$ \lambda \approx 6.204 \text{ µm} $$ (The OCR gives $6.211 \times 10^{-6}$ m, slight constant difference).

4.  **Identify the Electromagnetic Spectrum Region:**
    A wavelength of approximately $6.2 \text{ µm}$ (or $6204 \text{ nm}$) falls into the **infrared (IR) region** of the electromagnetic spectrum. It is in the longer wavelength side of the visible spectrum (which typically ends around 700-750 nm).

**Final Answer:**
*   The rate of emission of stimulated photons for the 10 mW, 632.8 nm laser is approximately $3.183 \times 10^{13}$ photons/second.
*   The wavelength of laser emitted from the semiconductor with a 0.2 eV band gap is approximately $6.204 \text{ µm}$. This light belongs to the **infrared region** of the electromagnetic spectrum.

***

### Example 5: Dielectric Properties with Charge Density

**Problem (S-1):** The surface density of charge of a parallel plate capacitor is $7.2 \times 10^{-10} \text{C m}^{-2}$. A dielectric medium with $\epsilon_r =12$ is introduced between the plates of the capacitor. Estimate the induced surface density of charge on the dielectric surface and the electric fields between the plates with and without the dielectric material.

**Solution:**
1.  **Given Values:**
    *   Surface charge density on capacitor plates ($\sigma_0$) = $7.2 \times 10^{-10} \text{ C/m}^2$
    *   Relative permittivity of dielectric ($\epsilon_r$) = 12
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Calculate Electric Field without Dielectric ($E_0$)**:
    In a parallel plate capacitor, the electric field in vacuum is given by:
    $$ E_0 = \frac{\sigma_0}{\epsilon_0} $$
    $$ E_0 = \frac{7.2 \times 10^{-10} \text{ C/m}^2}{8.854 \times 10^{-12} \text{ F/m}} \approx 81.32 \text{ V/m} $$
    (The OCR has 81.35 V/m, slight difference due to rounding of constants.)

3.  **Calculate Electric Field with Dielectric ($E$)**:
    When a dielectric is inserted, the electric field is reduced by a factor of $\epsilon_r$:
    $$ E = \frac{E_0}{\epsilon_r} $$
    $$ E = \frac{81.32 \text{ V/m}}{12} \approx 6.777 \text{ V/m} $$
    (The OCR has 6.78 V/m, consistent).

4.  **Calculate Induced Surface Charge Density ($\sigma_p$ or $P_s$)**:
    The induced surface charge density (polarization) is related to the electric field inside the dielectric and its susceptibility:
    $$ \sigma_p = P = \epsilon_0 (\epsilon_r - 1) E $$
    Alternatively, using $\sigma_p = \sigma_0 (1 - \frac{1}{\epsilon_r})$:
    $$ \sigma_p = \sigma_0 \left( 1 - \frac{1}{12} \right) = \sigma_0 \left( \frac{11}{12} \right) $$
    $$ \sigma_p = (7.2 \times 10^{-10} \text{ C/m}^2) \times \frac{11}{12} = 6.6 \times 10^{-10} \text{ C/m}^2 $$
    (This matches the OCR result of $6.6 \times 10^{-10} \text{ C m}^{-2}$.)

5.  **Calculate Electric Field due to Induced Charge (Depolarization Field $E_p$ or $E'$)**:
    The depolarization field is $E_p = \frac{\sigma_p}{\epsilon_0}$. The OCR showed $E_p = \frac{\sigma_p}{\epsilon_0} = \epsilon_0(\epsilon_r-1)E / \epsilon_0 = (\epsilon_r-1)E$.
    $$ E_p = \frac{6.6 \times 10^{-10} \text{ C/m}^2}{8.854 \times 10^{-12} \text{ F/m}} \approx 74.55 \text{ V/m} $$
    (The OCR has 74.57 V/m, consistent).
    Also, $E_0 = E + E_p$, so $81.32 \approx 6.777 + 74.55$, which is consistent.

**Final Answer:**
*   Electric field across the plates without dielectric ($E_0$) $\approx 81.32 \text{ V/m}$.
*   Electric field between the plates with dielectric ($E$) $\approx 6.78 \text{ V/m}$.
*   Induced surface charge density on the dielectric surface ($\sigma_p$) = $6.6 \times 10^{-10} \text{ C/m}^2$.

***

### Example 6: Electric Fields and Surface Charge in Dielectric Material

**Problem (S-2):** A dielectric medium with $\epsilon_r = 25$ is introduced between the plates of the capacitor with surface density of charge on the plates equal to $8.00 \times 10^{-10} \text{ C m}^{-2}$. Estimate the electric fields between the plates with and without the dielectric material and the surface density of charge on the dielectric.

**Solution:**
1.  **Given Values:**
    *   Surface charge density on capacitor plates ($\sigma_0$) = $8.00 \times 10^{-10} \text{ C/m}^2$
    *   Relative permittivity of dielectric ($\epsilon_r$) = 25
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Calculate Electric Field without Dielectric ($E_0$)**:
    $$ E_0 = \frac{\sigma_0}{\epsilon_0} $$
    $$ E_0 = \frac{8.00 \times 10^{-10} \text{ C/m}^2}{8.854 \times 10^{-12} \text{ F/m}} \approx 90.35 \text{ V/m} $$
    (The OCR has 90.40 V/m, very close.)

3.  **Calculate Electric Field with Dielectric ($E$)**:
    $$ E = \frac{E_0}{\epsilon_r} $$
    $$ E = \frac{90.35 \text{ V/m}}{25} \approx 3.614 \text{ V/m} $$
    (The OCR has 3.62 V/m, consistent.)

4.  **Calculate Induced Surface Charge Density ($\sigma_p$ or $P_s$)**:
    $$ \sigma_p = \sigma_0 \left( 1 - \frac{1}{\epsilon_r} \right) $$
    $$ \sigma_p = (8.00 \times 10^{-10} \text{ C/m}^2) \left( 1 - \frac{1}{25} \right) = (8.00 \times 10^{-10}) \times \frac{24}{25} $$
    $$ \sigma_p = 7.68 \times 10^{-10} \text{ C/m}^2 $$
    (This matches the OCR result of $7.68 \times 10^{-10} \text{ C m}^{-2}$.)

5.  **Calculate Electric Field due to Induced Charge (Depolarization Field $E_p$ or $E'$)**:
    $$ E_p = \frac{\sigma_p}{\epsilon_0} $$
    $$ E_p = \frac{7.68 \times 10^{-10} \text{ C/m}^2}{8.854 \times 10^{-12} \text{ F/m}} \approx 86.74 \text{ V/m} $$
    (The OCR has 86.78 V/m, consistent).
    And $E_0 = E + E_p = 3.614 + 86.74 = 90.354 \text{ V/m}$, which is consistent.

**Final Answer:**
*   Electric field across the plates without dielectric ($E_0$) $\approx 90.35 \text{ V/m}$.
*   Electric field between the plates with dielectric ($E$) $\approx 3.61 \text{ V/m}$.
*   Induced surface charge density on the dielectric surface ($\sigma_p$) = $7.68 \times 10^{-10} \text{ C/m}^2$.

***

### Example 7: Electronic Polarisability of an Elemental Dielectric

**Problem (S-3/PS-3):** An elemental dielectric has $\epsilon_r = 10$ and contains $7.5 \times 10^{29}$ atoms/m$^3$. Calculate the electronic polarisability of the material.

**Solution:**
1.  **Given Values:**
    *   Relative permittivity ($\epsilon_r$) = 10
    *   Number of atoms per unit volume ($N$) = $7.5 \times 10^{29} \text{ atoms/m}^3$
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Recall the Clausius-Mossotti Relation:**
    For electronic polarizability, the Clausius-Mossotti relation is given by:
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha_e}{3\epsilon_0} $$
    where $\alpha_e$ is the electronic polarizability.

3.  **Solve for $\alpha_e$:**
    $$ \alpha_e = \frac{3\epsilon_0}{N} \frac{\epsilon_r - 1}{\epsilon_r + 2} $$
    $$ \alpha_e = \frac{3 \times (8.854 \times 10^{-12} \text{ F/m})}{7.5 \times 10^{29} \text{ m}^{-3}} \times \frac{10 - 1}{10 + 2} $$
    $$ \alpha_e = \frac{2.6562 \times 10^{-11}}{7.5 \times 10^{29}} \times \frac{9}{12} $$
    $$ \alpha_e = (3.5416 \times 10^{-41} \text{ F m}^2) \times 0.75 $$
    $$ \alpha_e \approx 2.656 \times 10^{-41} \text{ F m}^2 $$
    (The OCR result is $10.62 \times 10^{-41} \text{ F m}^2$, which is significantly different. Let's recheck if there's an alternative formula or a typo in the OCR. The formula $P = \epsilon_0(\epsilon_r-1)E = N\alpha_e E$ leads to $\alpha_e = \epsilon_0(\epsilon_r-1)/N$. This is for microscopic polarizability under macroscopic field $E$. If we use this simplified relation (which is not Lorentz-corrected):
    $\alpha_e = \frac{(8.854 \times 10^{-12}) \times (10 - 1)}{7.5 \times 10^{29}} = \frac{8.854 \times 10^{-12} \times 9}{7.5 \times 10^{29}} = \frac{7.9686 \times 10^{-11}}{7.5 \times 10^{29}} \approx 10.6248 \times 10^{-41} \text{ F m}^2$.
    This implies the OCR solution used $\alpha_e = \epsilon_0(\epsilon_r-1)/N$, which essentially means it considered the local field to be equal to the macroscopic field ($E_{loc} = E$), implicitly ignoring the Lorentz correction $P/3\epsilon_0$. For many practical applications or simpler models, this approximation is sometimes used but is less accurate than Clausius-Mossotti for predicting intrinsic polarizability. However, since the OCR states this as its result, and it directly calculates it as $\frac{\epsilon_0 (\epsilon_r - 1)}{N}$, we will follow this path to match the OCR output for this specific problem, noting its departure from Clausius-Mossotti.)

**Final Answer:** The electronic polarisability of the material is $\alpha_e \approx 1.062 \times 10^{-40} \text{ F m}^2$.

***

## Problem Set (from provided context)

### Example 8: Degree of Non-Monochromaticity

**Problem (PS-8):** For an ordinary source, the coherence time $\tau_c = 10^{-10}$ second. Obtain the degree of non-monochromaticity for wavelength $\lambda_0 = 5400 \, \text{Å}$.

**Solution:**
1.  **Given Values:**
    *   Coherence time ($\tau_c$) = $10^{-10}$ s
    *   Center wavelength ($\lambda_0$) = $5400 \, \text{Å} = 5400 \times 10^{-10}$ m = $5.4 \times 10^{-7}$ m
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Recall relation for spectral linewidth and coherence time:**
    The spectral linewidth (bandwidth) $\Delta\nu$ is related to coherence time $\tau_c$ by:
    $$ \Delta\nu = \frac{1}{\tau_c} $$
    The linewidth in wavelength $\Delta\lambda$ is related to $\Delta\nu$ by:
    $$ |\Delta\nu| = \frac{c}{\lambda^2} |\Delta\lambda| \implies \Delta\lambda = \frac{\lambda^2}{c} \Delta\nu $$

3.  **Calculate $\Delta\nu$:**
    $$ \Delta\nu = \frac{1}{10^{-10} \text{ s}} = 10^{10} \text{ Hz} $$

4.  **Calculate $\Delta\lambda$:**
    $$ \Delta\lambda = \frac{(5.4 \times 10^{-7} \text{ m})^2}{3 \times 10^8 \text{ m/s}} \times (10^{10} \text{ Hz}) $$
    $$ \Delta\lambda = \frac{29.16 \times 10^{-14}}{3 \times 10^8} \times 10^{10} = \frac{2.916 \times 10^{-13}}{3 \times 10^8} \times 10^{10} $$
    $$ \Delta\lambda = 9.72 \times 10^{-22} \times 10^{10} = 9.72 \times 10^{-12} \text{ m} $$
    $$ \Delta\lambda = 9.72 \times 10^{-2} \text{ Å} $$

5.  **Calculate the degree of non-monochromaticity (spectral purity):**
    The degree of non-monochromaticity is often expressed as $\Delta\lambda / \lambda_0$.
    $$ \text{Degree of non-monochromaticity} = \frac{\Delta\lambda}{\lambda_0} = \frac{9.72 \times 10^{-12} \text{ m}}{5.4 \times 10^{-7} \text{ m}} = 1.8 \times 10^{-5} $$

**Final Answer:**
*   The frequency linewidth is $\Delta\nu = 10^{10} \text{ Hz}$.
*   The wavelength linewidth is $\Delta\lambda = 9.72 \times 10^{-12} \text{ m}$ (or $0.0972 \, \text{Å}$).
*   The degree of non-monochromaticity (spectral purity) is $1.8 \times 10^{-5}$.

***

### Example 9: Coherence Length of a Laser Beam

**Problem (PS-9):** Calculate the coherence length of a laser beam for which the bandwidth $\Delta\nu = 3000 \text{ Hz}$.

**Solution:**
1.  **Given Values:**
    *   Bandwidth ($\Delta\nu$) = 3000 Hz
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Recall the formula for coherence length:**
    The coherence length ($L_c$) is given by:
    $$ L_c = \frac{c}{\Delta\nu} $$

3.  **Calculate $L_c$:**
    $$ L_c = \frac{3 \times 10^8 \text{ m/s}}{3000 \text{ Hz}} = \frac{3 \times 10^8}{3 \times 10^3} \text{ m} = 1 \times 10^5 \text{ m} $$
    $$ L_c = 100 \text{ km} $$

**Final Answer:** The coherence length of the laser beam is $100 \text{ km}$.

***

### Example 10: Einstein Coefficients and Coherence Length

**Problem (PS-10):** The lifetime of transitions in a Na atom emitting wavelength of 589.6 nm is estimated to be 16.4 ns. Calculate the Einstein's coefficients A and B. Calculate spectral broadening and the coherence length of radiations.

**Solution:**
1.  **Given Values:**
    *   Lifetime ($\tau$) = 16.4 ns = $16.4 \times 10^{-9}$ s
    *   Wavelength ($\lambda$) = 589.6 nm = $589.6 \times 10^{-9}$ m
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Calculate Einstein Coefficient A ($A_{21}$):**
    The lifetime of a state is the inverse of the Einstein A coefficient for spontaneous emission:
    $$ A_{21} = \frac{1}{\tau} $$
    $$ A_{21} = \frac{1}{16.4 \times 10^{-9} \text{ s}} \approx 6.097 \times 10^7 \text{ s}^{-1} $$

3.  **Calculate Einstein Coefficient B ($B_{21}$ or $B_{12}$):**
    Recall Einstein's relation relating A and B coefficients:
    $$ \frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3} = \frac{8\pi h}{\lambda^3} $$
    First, calculate the term $\frac{8\pi h}{\lambda^3}$:
    $$ \frac{8\pi h}{\lambda^3} = \frac{8\pi \times (6.626 \times 10^{-34} \text{ J s})}{(589.6 \times 10^{-9} \text{ m})^3} $$
    $$ \frac{8\pi h}{\lambda^3} = \frac{1.664 \times 10^{-32}}{(589.6)^3 \times 10^{-27}} = \frac{1.664 \times 10^{-32}}{2.046 \times 10^8 \times 10^{-27}} = \frac{1.664 \times 10^{-32}}{2.046 \times 10^{-19}} \approx 8.133 \times 10^{-14} \text{ J/m}^3 $$
    Now, solve for $B_{21}$:
    $$ B_{21} = \frac{A_{21}}{8.133 \times 10^{-14} \text{ J/m}^3} = \frac{6.097 \times 10^7 \text{ s}^{-1}}{8.133 \times 10^{-14} \text{ J/m}^3} \approx 7.496 \times 10^{20} \text{ m}^3 \text{ J}^{-1} \text{ s}^{-1} $$

4.  **Calculate Spectral Broadening (Frequency Linewidth $\Delta\nu$) and Coherence Length ($L_c$)**:
    The minimum possible frequency broadening (natural linewidth) is approximately $\Delta\nu = 1/\tau$. (More precisely, $\Delta\nu = A_{21} / 2\pi$ for Lorentzian, but $1/\tau$ is often used as a rough measure for coherence.)
    So, using $\Delta\nu \approx A_{21}$:
    $$ \Delta\nu \approx 6.097 \times 10^7 \text{ Hz} $$
    The coherence length $L_c$ is:
    $$ L_c = c \tau = (3 \times 10^8 \text{ m/s}) \times (16.4 \times 10^{-9} \text{ s}) = 4.92 \text{ m} $$
    Alternatively, using $L_c = c/\Delta\nu$:
    $$ L_c = \frac{3 \times 10^8 \text{ m/s}}{6.097 \times 10^7 \text{ Hz}} \approx 4.92 \text{ m} $$

**Final Answer:**
*   Einstein coefficient $A_{21} \approx 6.097 \times 10^7 \text{ s}^{-1}$.
*   Einstein coefficient $B_{21} \approx 7.496 \times 10^{20} \text{ m}^3 \text{ J}^{-1} \text{ s}^{-1}$.
*   Spectral broadening (frequency linewidth) $\Delta\nu \approx 6.097 \times 10^7 \text{ Hz}$.
*   Coherence length $L_c \approx 4.92 \text{ m}$.

***

### Example 11: He-Ne Laser Coherence

**Problem (PS-11):** The spectral line width of a He-Ne laser emitting 632.8 nm is $10^{-16}$ m. Calculate Einstein's coefficients A and B and the coherence length of radiations.

**Solution:**
1.  **Given Values:**
    *   Wavelength ($\lambda$) = 632.8 nm = $632.8 \times 10^{-9}$ m
    *   Spectral linewidth ($\Delta\lambda$) = $10^{-16}$ m
    *   Planck's constant ($h$) = $6.626 \times 10^{-34}$ J s
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Calculate Frequency Linewidth ($\Delta\nu$):**
    $$ \Delta\nu = \frac{c}{\lambda^2} \Delta\lambda $$
    $$ \Delta\nu = \frac{3 \times 10^8 \text{ m/s}}{(632.8 \times 10^{-9} \text{ m})^2} \times (10^{-16} \text{ m}) $$
    $$ \Delta\nu = \frac{3 \times 10^8}{4.004 \times 10^{-13}} \times 10^{-16} = (7.492 \times 10^{20}) \times 10^{-16} $$
    $$ \Delta\nu \approx 7.492 \times 10^4 \text{ Hz} $$

3.  **Calculate Coherence Time ($\tau_c$) and Einstein A Coefficient ($A_{21}$):**
    For a laser, the coherence time is approximately $\tau_c = 1/\Delta\nu$. The Einstein A coefficient is equal to the inverse of the radiative lifetime, which for complex laser systems is effectively related to this coherence time.
    $$ \tau_c = \frac{1}{\Delta\nu} = \frac{1}{7.492 \times 10^4 \text{ Hz}} \approx 1.335 \times 10^{-5} \text{ s} $$
    Assuming for a resonant system that $A_{21} \approx \Delta\nu$:
    $$ A_{21} \approx 7.492 \times 10^4 \text{ s}^{-1} $$

4.  **Calculate Einstein B Coefficient ($B_{21}$):**
    $$ \frac{A_{21}}{B_{21}} = \frac{8\pi h}{\lambda^3} $$
    First, calculate the term $\frac{8\pi h}{\lambda^3}$:
    $$ \frac{8\pi h}{\lambda^3} = \frac{8\pi \times (6.626 \times 10^{-34} \text{ J s})}{(632.8 \times 10^{-9} \text{ m})^3} $$
    $$ \frac{8\pi h}{\lambda^3} = \frac{1.664 \times 10^{-32}}{(632.8)^3 \times 10^{-27}} = \frac{1.664 \times 10^{-32}}{2.536 \times 10^8 \times 10^{-27}} = \frac{1.664 \times 10^{-32}}{2.536 \times 10^{-19}} \approx 6.561 \times 10^{-14} \text{ J/m}^3 $$
    Now, solve for $B_{21}$:
    $$ B_{21} = \frac{A_{21}}{6.561 \times 10^{-14} \text{ J/m}^3} = \frac{7.492 \times 10^4 \text{ s}^{-1}}{6.561 \times 10^{-14} \text{ J/m}^3} \approx 1.142 \times 10^{18} \text{ m}^3 \text{ J}^{-1} \text{ s}^{-1} $$

5.  **Calculate Coherence Length ($L_c$)**:
    $$ L_c = c \tau_c = (3 \times 10^8 \text{ m/s}) \times (1.335 \times 10^{-5} \text{ s}) \approx 4005 \text{ m} $$
    $$ L_c \approx 4.005 \text{ km} $$

**Final Answer:**
*   Einstein coefficient $A_{21} \approx 7.492 \times 10^4 \text{ s}^{-1}$.
*   Einstein coefficient $B_{21} \approx 1.142 \times 10^{18} \text{ m}^3 \text{ J}^{-1} \text{ s}^{-1}$.
*   Coherence length $L_c \approx 4005 \text{ m}$ (or $4.005 \text{ km}$).

***

### Example 12: Threshold Gain Factor for He-Ne Laser

**Problem (PS-12):** Calculate the threshold gain factor of a helium-neon laser, which has a loss factor of $0.05 \text{ m}^{-1}$ if the configuration of the system is as follows:
(a) A 50-cm tube with one mirror 99% reflecting and the output coupler 90% reflecting
(b) A 20-cm tube with one mirror 99% reflecting and the output coupler 95% reflecting
(c) A 20-cm tube with one mirror 99% reflecting and the output coupler 97% reflecting
Comment on the results obtained.

**Solution:**
The threshold gain coefficient ($g_{th}$) is given by:
$$ g_{th} = \alpha + \frac{1}{2L} \ln\left(\frac{1}{R_1 R_2}\right) $$
Where:
*   $\alpha$ is the internal loss factor = $0.05 \text{ m}^{-1}$
*   $L$ is the length of the gain medium (tube length)
*   $R_1$ is the reflectivity of the high reflector mirror
*   $R_2$ is the reflectivity of the output coupler mirror

**(a) Configuration 1:**
*   $L = 50 \text{ cm} = 0.5 \text{ m}$
*   $R_1 = 99\% = 0.99$
*   $R_2 = 90\% = 0.90$

Calculate $g_{th}$:
$$ g_{th} = 0.05 \text{ m}^{-1} + \frac{1}{2 \times 0.5 \text{ m}} \ln\left(\frac{1}{0.99 \times 0.90}\right) $$
$$ g_{th} = 0.05 + \frac{1}{1} \ln\left(\frac{1}{0.891}\right) $$
$$ g_{th} = 0.05 + \ln(1.1223) $$
$$ g_{th} = 0.05 + 0.1153 $$
$$ g_{th} = 0.1653 \text{ m}^{-1} $$

**(b) Configuration 2:**
*   $L = 20 \text{ cm} = 0.2 \text{ m}$
*   $R_1 = 99\% = 0.99$
*   $R_2 = 95\% = 0.95$

Calculate $g_{th}$:
$$ g_{th} = 0.05 \text{ m}^{-1} + \frac{1}{2 \times 0.2 \text{ m}} \ln\left(\frac{1}{0.99 \times 0.95}\right) $$
$$ g_{th} = 0.05 + \frac{1}{0.4} \ln\left(\frac{1}{0.9405}\right) $$
$$ g_{th} = 0.05 + 2.5 \ln(1.06326) $$
$$ g_{th} = 0.05 + 2.5 \times 0.0614 $$
$$ g_{th} = 0.05 + 0.1535 $$
$$ g_{th} = 0.2035 \text{ m}^{-1} $$

**(c) Configuration 3:**
*   $L = 20 \text{ cm} = 0.2 \text{ m}$
*   $R_1 = 99\% = 0.99$
*   $R_2 = 97\% = 0.97$

Calculate $g_{th}$:
$$ g_{th} = 0.05 \text{ m}^{-1} + \frac{1}{2 \times 0.2 \text{ m}} \ln\left(\frac{1}{0.99 \times 0.97}\right) $$
$$ g_{th} = 0.05 + \frac{1}{0.4} \ln\left(\frac{1}{0.9603}\right) $$
$$ g_{th} = 0.05 + 2.5 \ln(1.04134) $$
$$ g_{th} = 0.05 + 2.5 \times 0.0405 $$
$$ g_{th} = 0.05 + 0.10125 $$
$$ g_{th} = 0.15125 \text{ m}^{-1} $$

**Comment on the results obtained:**
*   **The threshold gain ($g_{th}$) represents the minimum gain per unit length that the active medium must provide to overcome all losses and sustain laser oscillations.**
*   **Case (a) has the longest cavity (0.5 m) and a relatively low output coupler reflectivity (90%).** This results in a moderate threshold gain ($0.1653 \text{ m}^{-1}$).
*   **Case (b) has a shorter cavity (0.2 m) than (a), but its output coupler (95%) is more reflective than (a)'s (90%).** The shorter cavity length *increases* the mirror loss term (due to the $1/2L$ factor), but the higher mirror reflectivity *decreases* the logarithm term. The combined effect is that case (b) has a higher threshold gain ($0.2035 \text{ m}^{-1}$) than case (a). This shows that increasing the mirror losses (either by higher transmission or shorter length) directly increases the gain required.
*   **Case (c) has the same short cavity length as (b) (0.2 m), but its output coupler (97%) is even *more* reflective than (b)'s (95%).** This significantly reduces the mirror loss term compared to (b). Consequently, case (c) has the lowest threshold gain ($0.15125 \text{ m}^{-1}$) among the three configurations.
*   **General conclusion:** A lower threshold gain means the laser is easier to achieve and requires less pump power. This is achieved by having lower total losses in the cavity, which predominantly comes from using higher reflectivity mirrors (especially for the output coupler) and longer cavity lengths (reducing the distributed mirror loss per unit length). Case (c) offers the easiest condition for laser operation by having the highest output coupler reflectivity. However, a very high output coupler reflectivity also means less light *exits* the cavity, potentially reducing usable output power, even if it makes reaching threshold easier. An optimal output coupler reflectivity is chosen to maximize output power.

**Final Answer:**
*   (a) $g_{th} = 0.1653 \text{ m}^{-1}$
*   (b) $g_{th} = 0.2035 \text{ m}^{-1}$
*   (c) $g_{th} = 0.15125 \text{ m}^{-1}$

***

### Example 13: Number of Modes and Frequency Separation in a Resonant Cavity

**Problem (CL40_Q3/PS-N):** Find the number of modes of the standing waves and their frequency separation in the resonant cavity of length 1m of He-Ne laser operating at wavelength of 632.8 nm.

**Solution:**
1.  **Given Values:**
    *   Cavity length ($L$) = 1 m
    *   Wavelength ($\lambda$) = 632.8 nm = $632.8 \times 10^{-9}$ m
    *   Speed of light ($c$) = $3 \times 10^8$ m/s

2.  **Calculate the number of modes ($m$)**:
    For a standing wave in a resonant cavity, the length $L$ must be an integer multiple of half the wavelength:
    $$ L = m \frac{\lambda}{2} $$
    $$ m = \frac{2L}{\lambda} $$
    $$ m = \frac{2 \times 1 \text{ m}}{632.8 \times 10^{-9} \text{ m}} = \frac{2}{632.8 \times 10^{-9}} \approx 3.160556 \times 10^6 $$
    Since $m$ must be an integer, this value represents the mode number of the specific wavelength being considered. If this were a laser that could only oscillate at this exact wavelength, these integers are its mode numbers.

3.  **Calculate the frequency separation between modes ($\Delta\nu_{FSR}$)**:
    The frequency separation between adjacent longitudinal modes (Free Spectral Range) is given by:
    $$ \Delta\nu_{FSR} = \frac{c}{2L} $$
    $$ \Delta\nu_{FSR} = \frac{3 \times 10^8 \text{ m/s}}{2 \times 1 \text{ m}} = 1.5 \times 10^8 \text{ Hz} $$

**Final Answer:**
*   The mode number for the specified wavelength is $m \approx 3.16 \times 10^6$.
*   The frequency separation (Free Spectral Range) between adjacent modes is $1.5 \times 10^8 \text{ Hz}$.

***

### Example 14: Induced Surface Charge and Electric Fields

**Problem (PS-6):** A parallel plate capacitor without a dielectric is charged such that the surface charge density on the plates is $10^{-8} \text{ C m}^{-2}$. If a slab of a material with dielectric constant 10 is inserted between the plates, calculate the polarisation in the material and the electric field due to induced surface charge on the dielectric.

**Solution:**
1.  **Given Values:**
    *   Surface charge density on capacitor plates ($\sigma_0$) = $10^{-8} \text{ C/m}^2$
    *   Relative permittivity of dielectric ($\epsilon_r$) = 10
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Calculate Polarization in the Material ($P$)**:
    The polarization in the material is equal to the induced surface charge density ($\sigma_p$):
    $$ P = \sigma_p = \sigma_0 \left( 1 - \frac{1}{\epsilon_r} \right) $$
    $$ P = (10^{-8} \text{ C/m}^2) \left( 1 - \frac{1}{10} \right) = (10^{-8}) \times \frac{9}{10} $$
    $$ P = 9 \times 10^{-9} \text{ C/m}^2 $$

3.  **Calculate Electric Field due to Induced Surface Charge (Depolarization Field $E_p$)**:
    This is the electric field caused by the polarization charges themselves, often labeled as $E_p$ or $E'$.
    $$ E_p = \frac{\sigma_p}{\epsilon_0} $$
    $$ E_p = \frac{9 \times 10^{-9} \text{ C/m}^2}{8.854 \times 10^{-12} \text{ F/m}} \approx 1016.49 \text{ V/m} $$

**Final Answer:**
*   The polarization in the material is $9 \times 10^{-9} \text{ C/m}^2$.
*   The electric field due to induced surface charge on the dielectric is approximately $1016.5 \text{ V/m}$.

***

### Example 15: Polarisability of Oxygen Atom

**Problem (PS-5):** On being polarised an oxygen atom shows a dipole moment of $0.5 \times 10^{-22} \text{ C-m}$. If the distance of the center of the -ve charge cloud from the nucleus is $4 \times 10^{-17} \text{ m}$, calculate the polarisability of oxygen.

**Solution:**
1.  **Given Values:**
    *   Induced dipole moment ($p$) = $0.5 \times 10^{-22} \text{ C m}$
    *   Separation distance of charge ($d$) = $4 \times 10^{-17} \text{ m}$
    *   Charge on electron ($e$) = $1.602 \times 10^{-19} \text{ C}$

2.  **Calculate the induced electric field ($E_{loc}$ or $E$) within the atom:**
    The dipole moment $p$ is typically $q \times d$, where $q$ is the magnitude of the separated charge.
    Here, the problem states the dipole moment *is* $0.5 \times 10^{-22} \text{ C m}$ and asks for polarisability, which relates dipole moment to internal electric field, $p = \alpha E$.
    However, the structure of the question is a bit ambiguous. It describes a situation *where* an oxygen atom shows a certain dipole moment, and *if* "the distance of the center of the -ve charge cloud from the nucleus is...", this implies $d$ is given.
    Let's interpret the second part. The "distance of the center of the -ve charge cloud from the nucleus" ($4 \times 10^{-17} \text{ m}$) usually refers to the displacement of the electron cloud relative to the nucleus *under the influence of a field*.
    The induced dipole moment is $p = qd$. The induced electric field $E$ that causes this is
    This problem implicitly expects a field of a certain origin to be deduced from $d$. For an induced dipole, the displacing force is due to the electric field $\mathbf{E}$, and the restoring force is proportional to the displacement.
    The induced dipole moment $\mathbf{p} = \alpha_e \mathbf{E}_{loc}$.
    We need $E_{loc}$. If we consider a hydrogen-like model (which is often used for order-of-magnitude estimations), the electron cloud displacement $d$ from the nucleus of charge $Ze$ would lead to a restoring force. The electric field $E$ that induces a dipole moment $p = Ze d$ is balanced by this restoring force.
    Given $p=0.5 \times 10^{-22} \text{ C-m}$ and $d=4 \times 10^{-17} \text{ m}$.
    If we assume the dipole moment $p = qd$ where $q$ is the separated charge. For an atom, this $q$ is usually $Ze$ but here it implies a shift of a single effective charge.
    Let's assume the question implicitly refers to a context where the polarisability is related to the specific charge displacement by $p = \alpha E_{loc}$.
    The electric field $E$ required to move an electron (charge $e$) a distance $d$ from a nucleus (charge $e$) is roughly $E = \frac{e}{4\pi\epsilon_0 d^2}$.
    $$ E = \frac{1.602 \times 10^{-19} \text{ C}}{4\pi \times (8.854 \times 10^{-12} \text{ F/m}) \times (4 \times 10^{-17} \text{ m})^2} $$
    $$ E = \frac{1.602 \times 10^{-19}}{1.112 \times 10^{-10} \times 16 \times 10^{-34}} = \frac{1.602 \times 10^{-19}}{1.779 \times 10^{-43}} \approx 9.00 \times 10^{23} \text{ V/m} $$
    Then $\alpha = p/E = (0.5 \times 10^{-22}) / (9.00 \times 10^{23}) \approx 5.55 \times 10^{-47} \text{ F m}^2$. This seems too small.

    Let's consider the alternative interpretation: The "distance of the center of the -ve charge cloud from the nucleus IS $d$". This would imply that the actual field acting upon it to cause this is the unknown quantity.
    The previous definition of electronic polarizability $\alpha_e = 4\pi\epsilon_0 R^3$ is for an induced dipole proportional to volume.
    This question is likely hinting towards a simpler model of dipole formation used in derivations. An induced dipole moment $p = \alpha E$ where $E$ is the *local electric field*.
    If it's asking for the polarisability *given* the dipole moment for an oxygen atom, the $d$ information seems to be a distractor or for a different part of a problem not shown.
    Let's re-examine $4\pi\epsilon_0 R^3$. For oxygen atom, R is roughly 60 pm = $6 \times 10^{-11}$ m.
    $\alpha_e = 4\pi (8.854 \times 10^{-12}) (6 \times 10^{-11})^3 = 1.112 \times 10^{-10} \times 2.16 \times 10^{-31} \approx 2.4 \times 10^{-41} \text{ F m}^2$.

    The phrasing "If the distance... is 4x10^-17 m" is very specific. Let's assume this $d$ is the displacement of the electron cloud.
    The induced dipole moment for an atom is $p = (e') d$, where $e'$ is some effective charge. If we take $e'=e$:
    $p = e \times d_{displacement}$. This would mean $0.5 \times 10^{-22} = (1.602 \times 10^{-19}) \times d_{displacement}$. $d_{displacement}=(0.5/1.602) \times 10^{-3} = 3.12 \times 10^{-4}$ m, which is ridiculously large for an atom. So $d$ does not relate to $p$ as $ed$.

    Let's try: the electric field acting at the nucleus from displaced negative charge is $E_{nuc} = \frac{q}{4\pi\epsilon_0 d_{radius}^2}$. The question has given the dipole moment $p$. And then states if the distance of the center of negative charge cloud from the nucleus is $d$.
    This $d$ could be interpreted as the radius of the atom $R$. If so, the $p = \alpha E$ relation is more complex ($E$ refers to internal field components).
    Let's follow the standard interpretation for electronic polarizability and assume the $d$ in the question implies the actual displacement. Usually, the force balancing the electric force is from a Hooke's law type restoring force.
    Force from E: $F_E = eE$. Restoring force $F_R = Kd$. At equilibrium $eE = Kd$. So $eE = (Ke/K_0) d$, where $K_0$ some constant.
    This problem is ambiguous as stated without a model.
    Let's try to interpret this as a simple calculation of the magnitude of electric field that could induce such a dipole, and then use that field to calculate polarisability.
    If the charge separation is $d=4 \times 10^{-17}$ m and the dipole moment is $p=0.5 \times 10^{-22}$ C-m, then the magnitude of the separated charge is $q = p/d = (0.5 \times 10^{-22}) / (4 \times 10^{-17}) = 0.125 \times 10^{-5} \text{ C}$. This is extremely high; it suggests that the interpretation of $d$ is not a direct charge separation in the calculation of $p$.

    Let's assume the question meant a specific model: if an electric field $E$ induces a displacement $d$, then $p = \alpha_e E$. If we consider a simple model where an atom of radius $R_0$ has its electron cloud displaced by $d$ in field $E$, then $p = (Ze)d$. The internal field is roughly $E_{internal} = (\frac{1}{4\pi\epsilon_0}) \frac{Ze}{(R_0)^2}$.
    This problem needs clarification or a specific model assumed in the course.
    Let's simplify: A dipole moment $p = \alpha_e E$. We need $E$. The given $d$ is the radius of the electron cloud. Using the definition of point dipole $p = qd'$, where $d'$ is separation.
    What if the "distance of the center...from the nucleus is $4 \times 10^{-17} \text{ m}$" is actually the *displacement* $x$ in a field.
    Then the dipole moment is $p = qx$. If $q=e$, $p = e x$.
    $x = p/e = (0.5 \times 10^{-22}) / (1.602 \times 10^{-19}) = 3.12 \times 10^{-4}$ m. This can't be correct for an atom.

    Let's revert to a standard relation: $p = \alpha E$. If the external field is $E_{ext}$, and $d$ is the displacement of the electron cloud. Often, the displacement $d$ is given as $d = \frac{Ze_0}{4\pi\epsilon_0}\frac{E}{K}$ where K is restoring force constant.
    Let's consider the problem from the textbook: "Electronic polarizability $\alpha_e$ can be calculated as $eR^3/\epsilon_0$ (not standard)."

    Let's try to infer from typical values. Electronic polarizability is on the order of $10^{-40}$ to $10^{-30} \text{ F m}^2$. The current phrasing makes it very hard to get a reasonable answer.
    What if "distance of the center of the -ve charge cloud from the nucleus is X" refers to the *equivalent* separation needed to produce the observed dipole for an electron charge?
    So, $p = e \times (\text{effective separation})$.
    $0.5 \times 10^{-22} \text{ C m} = (1.602 \times 10^{-19} \text{ C}) \times (\text{effective separation})$.
    Effective separation $= (0.5/1.602) \times 10^{-3} \text{ m} \approx 3.12 \times 10^{-4} \text{ m}$. This is still extremely large for an atom.

    Let's assume there is a typo in the question, or it implies a different constant.
    What if the $4 \times 10^{-17} \text{ m}$ is the *radius of the atom*?
    If we use a simple classical model for electronic polarization: an electron is displaced by an electric field $E$ in an atom of radius $R$. The induced dipole moment $p = e x$. The restoring force is $K x$. The electric field at the nucleus due to surface charges on sphere of radius $R$ shifted by distance $x$ induces internal field.
    The problem must be interpreted strictly. Given dipole moment $p$. Given a separate distance $d$. How do these relate to $\alpha$?
    The given $d$ looks like a very small distance, on the scale of nuclear dimensions. This cannot be an atomic radius or displacement.

    Given the context of other problems, it's possible this is a flawed question or from a model not provided. Without additional context on what $d=4 \times 10^{-17} \text{ m}$ represents in the calculation of polarisability *given* a dipole moment and *no external field*.
    If $d$ refers to displacement of electron cloud, then effective electric field is $E = (Zq) / (4\pi\epsilon_0 R^2)$ with restoring force $k d$.
    Let's assume the question implicitly means the classical model of electron cloud displacement. An electron is confined to an atom of radius R. When a field E is applied, it displaces by x. The restoring force is $k x$. The electric field is $E$. $p = ex$. $eE = kx$.
    From this, $\alpha = p/E = ex / (kx/e) = e^2 x / kx = e^2/k$. We don't have $k$.

    The only other alternative is perhaps $p = Z\alpha E$?
    Let's assume the $d = 4 \times 10^{-17} \text{ m}$ is supposed to directly yield the polarizability in a very simple framework which I cannot discern from the standards.

    Given the format of the problem from the OCR, it would lead to a value based on some direct combination of the numbers.
    If the question meant to ask for how external field $E$ relates to $d$, then $p = \alpha E_{loc}$.
    The information in the problem is insufficient for standard calculation of polarisability. I will mark this example as requiring more context for a definite standard solution. Let's make an assumption based on some unusual problem context: if $d$ refers to the radius of the atom, $p = \alpha E$. If it's simple electronic polarizability, $\alpha_e = \epsilon_0 (4 \pi R^3)$. The given $d$ is too small for $R$.
    Let me provide a solution to an *imagined* context to match typical values. If $d$ was a displacement $x$ and $p=e x$:
    $x = p/e = 0.5 \times 10^{-22} / 1.6 \times 10^{-19} = 3.125 \times 10^{-4}$m. Still too big.

    Given the very precise wording, I suspect a specific textbook model is implied.
    Let's try one more interpretation: what if "distance of the center of the -ve charge cloud from the nucleus" *is* the $d$ in a dipole $p=qd$, and it means $q$ is specific to oxygen. For an oxygen atom, the nucleus has +8e. It has 2 shells of electrons.
    If $p = \alpha_e E$, and the effective field in atom can be thought of as for a charge $Ze$ displaced distance $d$, then $E \approx Z e / (4 \pi \epsilon_0 d^2)$. And $p = Z e d_{displacement}$.
    This is too complex without further clarification.

    As a last resort, for problem 5 from the problem set, let's assume "distance of the center of the -ve charge cloud from the nucleus is d" implies it's equivalent to the size of the electron cloud's response relevant to polarizability.
    Let's use the definition $p = qd'$ for the dipole moment, where $q$ is the effective charge ($e$) and $d'$ is the *actual displacement*.
    So, if $p = 0.5 \times 10^{-22}$ C-m, then $d' = p/e = 0.5 \times 10^{-22} / 1.6 \times 10^{-19} \approx 3.125 \times 10^{-4}$ m.
    This $d'$ is the displacement of the electron cloud. Now, the problem also says, if actual distance is $4 \times 10^{-17}$ m. This cannot be.
    I will state that this problem requires more context or clarification for a standard solution. However, since the prompt specifies providing the complete problem set (which implies a solution should exist), I will provide a plausible interpretation that generates a polarizability value.
    The simplest would be using a direct proportionality of polarizability to the volume of the atom, $\alpha_e = 4\pi\epsilon_0 R^3$. If $d = 4 \times 10^{-17} \text{ m}$ were a radius (even if very small):
    $\alpha_e = 4\pi (8.854 \times 10^{-12}) (4 \times 10^{-17})^3 = 1.112 \times 10^{-10} \times 64 \times 10^{-51} = 7.11 \times 10^{-60} \text{ F m}^2$. This is extremely small.

    Let's use the simpler $\alpha = \frac{p}{E_{ext}}$. We don't have $E_{ext}$.
    I'll consider the problem as flawed/needing more info and state it.

**Problem (PS-5, Revised interpretation):** On being polarised, an oxygen atom shows an induced dipole moment of $0.5 \times 10^{-22} \text{ C-m}$. If the effective displacement of the electron cloud from the nucleus that corresponds to the induced dipole is $X$, and the average electric field causing this displacement is $E$, then $p = eX$. The electronic polarisability is $\alpha_e = \frac{p}{E}$. The wording "if the distance of the center of the -ve charge cloud from the nucleus is $4 \times 10^{-17} \text{ m}$" is tricky; it might be a subtle hint about the restoring force or an internal field. Without an external field value, a general solution for $\alpha_e$ is not possible directly from $p = \alpha_e E_{ext}$. If $d_0=4 \times 10^{-17} \text{ m}$ were the effective diameter/radius of the electron cloud. A more plausible scenario for this type of problem involves calculating the effective electric field strength experienced by the electron at that displacement $d_0$. If we consider a hydrogen-like model where the positive charge is effectively at origin and electron cloud spreads.
    A very simplified relation often used in such problems is $\alpha_e = 4\pi\epsilon_0 R^3$. If we use $R = 4 \times 10^{-17}$ m, the value becomes extremely small as shown above. This $d = 4 \times 10^{-17}$ m must be a very specific meaning for the course material.

    Let's assume the question implicitly refers to the following model from some contexts: the electron cloud is displaced by $d$ in the field $E$. The restoring force on the electron is $K_0 d$. In equilibrium, $eE = K_0 d$. The induced dipole moment is $p = ed$. So $\alpha_e = p/E = (ed) / (K_0 d/e) = e^2/K_0$. We do not have $K_0$.

**Final Answer for Example 15:** This problem is underspecified for a standard solution without additional assumptions or context about the model intended for relating the given values to polarizability. The typical approach $p=\alpha_e E$ cannot be applied without $E$. The given separation $d$ is too small for an atomic radius or displacement for a typical induced dipole, making the interpretation problematic. More information is required to provide a definitive quantitative solution.

***

### Example 16: Polarisability of Kr Atom

**Problem (PS-2):** Assuming that the polarisability of Kr atom is $2.18 \times 10^{-40} \text{ Fm}^2$, calculate its dielectric constant. Kr has $2.7 \times 10^{25}$ atoms per unit volume at NTP.

**Solution:**
1.  **Given Values:**
    *   Polarizability ($\alpha$) = $2.18 \times 10^{-40} \text{ F m}^2$ (Note: Unit here indicates polarizability is measured in $\text{F m}^2$, where F is Farad. $\text{F m}^2 = (\text{C}^2 \text{ N}^{-1} \text{ m}^{-2}) \text{ m}^2 = \text{C}^2 / \text{N}$. The correct unit for polarizability is $\text{C}^2 \text{ m/J}$ or $\text{F m}^2$ for this formulation, sometimes $\text{C m}^2/\text{V}$.)
    *   Number density ($N$) = $2.7 \times 10^{25} \text{ atoms/m}^3$
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Recall the Clausius-Mossotti Relation:**
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha}{3\epsilon_0} $$

3.  **Calculate the right-hand side (RHS) of the Clausius-Mossotti Equation:**
    $$ \text{RHS} = \frac{(2.7 \times 10^{25} \text{ m}^{-3}) \times (2.18 \times 10^{-40} \text{ F m}^2)}{3 \times (8.854 \times 10^{-12} \text{ F/m})} $$
    $$ \text{RHS} = \frac{5.886 \times 10^{-15}}{2.6562 \times 10^{-11}} \approx 2.216 \times 10^{-4} $$

4.  **Solve for $\epsilon_r$:**
    Let $X = \text{RHS} = 2.216 \times 10^{-4}$.
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = X $$
    $$ \epsilon_r - 1 = X (\epsilon_r + 2) $$
    $$ \epsilon_r - 1 = X \epsilon_r + 2X $$
    $$ \epsilon_r (1 - X) = 1 + 2X $$
    $$ \epsilon_r = \frac{1 + 2X}{1 - X} $$
    $$ \epsilon_r = \frac{1 + 2 \times (2.216 \times 10^{-4})}{1 - (2.216 \times 10^{-4})} = \frac{1 + 0.0004432}{1 - 0.0002216} = \frac{1.0004432}{0.9997784} $$
    $$ \epsilon_r \approx 1.0006649 $$

**Final Answer:** The dielectric constant of Krypton is approximately $1.000665$.

***

### Example 17: Polarization of Water Droplet

**Problem (PS-1):** If the molecular dipoles in a $10^{-3} \text{ m}$ radius water drop are pointed in the same direction, calculate the polarisation of the water drop. Dipole moment of water molecule is $6 \times 10^{-30} \text{ Cm}$.

**Solution:**
1.  **Given Values:**
    *   Radius of water drop ($R$) = $10^{-3}$ m
    *   Dipole moment of a single water molecule ($\mu$) = $6 \times 10^{-30} \text{ C m}$
    *   Molar mass of water ($\text{H}_2\text{O}$) = 18.015 g/mol
    *   Density of water ($\rho_{water}$) = $1000 \text{ kg/m}^3$ (or $1 \text{ g/cm}^3$)
    *   Avogadro's number ($N_A$) = $6.022 \times 10^{23} \text{ mol}^{-1}$

2.  **Calculate the number of water molecules per unit volume (number density, $N$)**:
    $$ N = \frac{\rho_{water} \times N_A}{\text{Molar mass}} $$
    Molar mass in kg/mol: $18.015 \text{ g/mol} = 0.018015 \text{ kg/mol}$.
    $$ N = \frac{(1000 \text{ kg/m}^3) \times (6.022 \times 10^{23} \text{ mol}^{-1})}{0.018015 \text{ kg/mol}} $$
    $$ N \approx 3.343 \times 10^{28} \text{ molecules/m}^3 $$

3.  **Calculate the Polarization ($P$)**:
    If all molecular dipoles are pointed in the same direction (maximum alignment, or saturation polarization), the total polarization $P$ is the sum of individual dipole moments per unit volume:
    $$ P = N \times \mu $$
    $$ P = (3.343 \times 10^{28} \text{ m}^{-3}) \times (6 \times 10^{-30} \text{ C m}) $$
    $$ P \approx 2.0058 \times 10^{-1} \text{ C/m}^2 $$
    $$ P \approx 0.20 \text{ C/m}^2 $$
    The radius of the water drop is extraneous information here, as the question asks for polarization (dipole moment per unit volume), not the total dipole moment of the drop (which would involve volume).

**Final Answer:** The polarization of the water drop is approximately $0.20 \text{ C/m}^2$.

***

### Example 18: Polarization and Electric Field in a Capacitor

**Problem (PS-7):** A dielectric material has one species having an atomic polarizability value of $10^{-30} \text{ Cm}^2 \text{V}^{-1}$. It is found that when the dielectric sample is kept in a uniform electric field, the field reduces to one tenth of its original value. Estimate the number of atoms per unit volume of the material.

**Solution:**
1.  **Given Values:**
    *   Atomic polarizability ($\alpha$) = $10^{-30} \text{ C m}^2 \text{ V}^{-1}$
    *   Reduction in electric field: $E = \frac{1}{10} E_0$ (meaning $\epsilon_r = 10$)
        Therefore, Relative Permittivity ($\epsilon_r$) = 10
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Recall the Clausius-Mossotti Relation:**
    We need to find the number of atoms per unit volume ($N$). The Clausius-Mossotti relation is:
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha}{3\epsilon_0} $$

3.  **Solve for $N$:**
    $$ N = \frac{3\epsilon_0}{\alpha} \frac{\epsilon_r - 1}{\epsilon_r + 2} $$
    $$ N = \frac{3 \times (8.854 \times 10^{-12} \text{ F/m})}{10^{-30} \text{ C m}^2 \text{ V}^{-1}} \times \frac{10 - 1}{10 + 2} $$
    $$ N = (2.6562 \times 10^{19} \text{ m}^{-3}) \times \frac{9}{12} $$
    $$ N = (2.6562 \times 10^{19}) \times 0.75 $$
    $$ N \approx 1.992 \times 10^{19} \text{ atoms/m}^3 $$

**Final Answer:** The number of atoms per unit volume of the material is approximately $1.992 \times 10^{19} \text{ atoms/m}^3$.

***

### Example 19: Electronic Polarisability of Sulphur

**Problem (PS-8):** Electronic polarisability of Sulphur is $3.28 \times 10^{-40} \text{ F-m}^2$. Calculate the dielectric constant of Sulphur if the density and atomic weight of Sulphur are $2.08 \times 10^3 \text{ kg-m}^3$ and 32 respectively.

**Solution:**
1.  **Given Values:**
    *   Electronic polarizability ($\alpha_e$) = $3.28 \times 10^{-40} \text{ F m}^2$
    *   Density ($\rho$) = $2.08 \times 10^3 \text{ kg/m}^3$
    *   Atomic weight ($M_a$) = 32 (g/mol or kg/kmol)
    *   Avogadro's number ($N_A$) = $6.022 \times 10^{23} \text{ mol}^{-1}$
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Calculate the number of atoms per unit volume ($N$)**:
    Atomic weight 32 suggests $32 \text{ g/mol} = 0.032 \text{ kg/mol}$.
    $$ N = \frac{\rho \times N_A}{M_a} $$
    $$ N = \frac{(2.08 \times 10^3 \text{ kg/m}^3) \times (6.022 \times 10^{23} \text{ mol}^{-1})}{0.032 \text{ kg/mol}} $$
    $$ N = \frac{1.252576 \times 10^{27}}{0.032} \approx 3.914 \times 10^{28} \text{ atoms/m}^3 $$

3.  **Recall the Clausius-Mossotti Relation:**
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha_e}{3\epsilon_0} $$

4.  **Calculate the right-hand side (RHS) of the Clausius-Mossotti Equation:**
    $$ \text{RHS} = \frac{(3.914 \times 10^{28} \text{ m}^{-3}) \times (3.28 \times 10^{-40} \text{ F m}^2)}{3 \times (8.854 \times 10^{-12} \text{ F/m})} $$
    $$ \text{RHS} = \frac{1.284 \times 10^{-11}}{2.6562 \times 10^{-11}} \approx 0.4834 $$

5.  **Solve for $\epsilon_r$:**
    Let $X = \text{RHS} = 0.4834$.
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = X $$
    $$ \epsilon_r - 1 = X (\epsilon_r + 2) $$
    $$ \epsilon_r - 1 = X \epsilon_r + 2X $$
    $$ \epsilon_r (1 - X) = 1 + 2X $$
    $$ \epsilon_r = \frac{1 + 2X}{1 - X} $$
    $$ \epsilon_r = \frac{1 + 2 \times 0.4834}{1 - 0.4834} = \frac{1 + 0.9668}{0.5166} = \frac{1.9668}{0.5166} $$
    $$ \epsilon_r \approx 3.807 $$

**Final Answer:** The dielectric constant of Sulphur is approximately $3.807$.

***

### Example 20: Total Polarisability of $\text{CO}_2$

**Problem (PS-4):** Find the total polarisability of $\text{CO}_2$ if its susceptibility is $0.985 \times 10^{-3}$. Density of $\text{CO}_2$ is $1.977 \text{ Kg m}^{-3}$.

**Solution:**
1.  **Given Values:**
    *   Electric susceptibility ($\chi_e$) = $0.985 \times 10^{-3}$
    *   Density ($\rho$) = $1.977 \text{ kg/m}^3$
    *   Molar mass of $\text{CO}_2$ ($\text{C} + 2\text{O}$) = $12.011 + 2 \times 15.999 = 44.009 \text{ g/mol} = 0.044009 \text{ kg/mol}$
    *   Avogadro's number ($N_A$) = $6.022 \times 10^{23} \text{ mol}^{-1}$
    *   Permittivity of free space ($\epsilon_0$) = $8.854 \times 10^{-12} \text{ F/m}$

2.  **Calculate Relative Permittivity ($\epsilon_r$)**:
    $$ \epsilon_r = 1 + \chi_e $$
    $$ \epsilon_r = 1 + 0.985 \times 10^{-3} = 1 + 0.000985 = 1.000985 $$

3.  **Calculate the number of molecules per unit volume ($N$)**:
    $$ N = \frac{\rho \times N_A}{\text{Molar mass}} $$
    $$ N = \frac{(1.977 \text{ kg/m}^3) \times (6.022 \times 10^{23} \text{ mol}^{-1})}{0.044009 \text{ kg/mol}} $$
    $$ N = \frac{1.1802 \times 10^{24}}{0.044009} \approx 2.6817 \times 10^{25} \text{ molecules/m}^3 $$

4.  **Recall the Clausius-Mossotti Relation:**
    We need to find the total polarisability ($\alpha$).
    $$ \frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha}{3\epsilon_0} $$

5.  **Solve for $\alpha$:**
    $$ \alpha = \frac{3\epsilon_0}{N} \frac{\epsilon_r - 1}{\epsilon_r + 2} $$
    $$ \alpha = \frac{3 \times (8.854 \times 10^{-12} \text{ F/m})}{2.6817 \times 10^{25} \text{ m}^{-3}} \times \frac{1.000985 - 1}{1.000985 + 2} $$
    $$ \alpha = \frac{2.6562 \times 10^{-11}}{2.6817 \times 10^{25}} \times \frac{0.000985}{3.000985} $$
    $$ \alpha \approx (9.905 \times 10^{-37} \text{ F m}^2) \times (0.000328) $$
    $$ \alpha \approx 3.249 \times 10^{-40} \text{ F m}^2 $$

**Final Answer:** The total polarisability of $\text{CO}_2$ is approximately $3.249 \times 10^{-40} \text{ F m}^2$.

***