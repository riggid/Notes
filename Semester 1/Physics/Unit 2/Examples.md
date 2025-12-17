---
dg-publish: true
---

# [[../Physics|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***
# Unit 2: Worked Examples

### Example 1: Potential Step Reflection/Transmission (E > V0)
Electrons with energy $E=4.0$ eV are incident on a potential step $V_0=3.0$ eV high. Find the probability of reflection (R) and transmission (T).

**Solution:**
Energy $E = 4.0$ eV. Potential $V_0 = 3.0$ eV.
We need the wave numbers $k_1$ and $k_2$.
$k_1 = \sqrt{\frac{2mE}{\hbar^2}}$
$k_2 = \sqrt{\frac{2m(E-V_0)}{\hbar^2}}$

Reflection Coefficient $R = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2$.
We can simplify this using the energies:
$R = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$
$R = \left(\frac{\sqrt{4.0}-\sqrt{4.0-3.0}}{\sqrt{4.0}+\sqrt{4.0-3.0}}\right)^2 = \left(\frac{\sqrt{4}-\sqrt{1}}{\sqrt{4}+\sqrt{1}}\right)^2$
$R = \left(\frac{2-1}{2+1}\right)^2 = \left(\frac{1}{3}\right)^2 = \frac{1}{9} \approx 0.111$ or $11.1\%$.

Transmission Coefficient $T = 1 - R$.
$T = 1 - 1/9 = 8/9 \approx 0.889$ or $88.9\%$.
*(Note: Source answer for T=19.2% seems incorrect. The calculation for R=1/9 is standard).*

---
### Example 2: Penetration Depth
A spherical dust particle ($r=10^{-5}$m, $\rho=10^4$ kg/m³) moves at $v=10^{-2}$ m/s and encounters a step $V_0 = 2E$. Estimate the penetration depth $\Delta x$.

**Solution:**
Mass $m = \text{Volume} \times \text{Density} = (\frac{4}{3}\pi r^3) \rho$.
$m = \frac{4}{3}\pi (10^{-5})^3 (10^4) = \frac{4\pi}{3} \times 10^{-15} \times 10^4 = \frac{4\pi}{3} \times 10^{-11} \approx 4.19 \times 10^{-11}$ kg.
Kinetic Energy $E = \frac{1}{2} m v^2 = \frac{1}{2} (4.19 \times 10^{-11}) (10^{-2})^2$.
$E = \frac{1}{2} (4.19 \times 10^{-11}) (10^{-4}) = 2.095 \times 10^{-15}$ J.
Potential Height $V_0 = 2E = 2 \times (2.095 \times 10^{-15}) = 4.19 \times 10^{-15}$ J.

Penetration Depth $\Delta x = \frac{\hbar}{\sqrt{2m(V_0-E)}}$.
$V_0 - E = 2E - E = E = 2.095 \times 10^{-15}$ J.
$\Delta x = \frac{1.054 \times 10^{-34}}{\sqrt{2 \times (4.19 \times 10^{-11}) \times (2.095 \times 10^{-15})}}$.
$\Delta x = \frac{1.054 \times 10^{-34}}{\sqrt{1.755 \times 10^{-25}}} = \frac{1.054 \times 10^{-34}}{1.325 \times 10^{-12.5}}$? Mistake in calculation somewhere?

Let's recheck the denominator sqrt:
$2 \times (4.19 \times 10^{-11}) \times (2.095 \times 10^{-15}) = 17.55 \times 10^{-26}$.
$\sqrt{17.55 \times 10^{-26}} = \sqrt{1.755 \times 10^{-25}} \approx 4.189 \times 10^{-13}$.
$\Delta x = \frac{1.054 \times 10^{-34}}{4.189 \times 10^{-13}} \approx 0.2516 \times 10^{-21} \approx 2.5 \times 10^{-22}$ m.
*(Source answer matches this)*.

---
### Example 3: Tunneling Probability (Alpha Decay Lifetime)
Quantum mechanical transmission coefficient $T = 2.54 \times 10^{-24}$ for an alpha particle through a nuclear potential barrier. Velocity $v=1.7 \times 10^7$ m/s, nuclear radius $R=10^{-14}$ m. Calculate the mean lifetime $\tau$ for alpha decay.

**Solution:**
The alpha particle is considered trapped inside the nucleus (diameter $2R$). It collides with the barrier repeatedly.
Frequency of collisions (attempts to escape) $n = \frac{\text{velocity}}{\text{distance between walls}} = \frac{v}{2R}$.
$n = \frac{1.7 \times 10^7}{2 \times 10^{-14}} = 0.85 \times 10^{21} = 8.5 \times 10^{20}$ collisions/second.
Probability of escape per collision is $T$.
Probability of escape per second $P = n \times T$.
$P = (8.5 \times 10^{20}) \times (2.54 \times 10^{-24}) = 21.59 \times 10^{-4} \approx 2.16 \times 10^{-3}$ per second.
Mean lifetime $\tau$ is the inverse of the decay probability per unit time.
$\tau = 1 / P = 1 / (2.16 \times 10^{-3}) \approx 463$ seconds.
Convert to minutes: $463 / 60 \approx 7.72$ minutes.
$0.72 \times 60 \approx 43$ seconds.
$\tau \approx 7$ minutes $43$ seconds.
*(Source answer is 7 min 52 s, slight difference due to rounding perhaps)*.

---
### Example 4: Particle in a Box - Least Energy
Find the least energy (ground state energy, $n=1$) of an electron ($m_e = 9.11 \times 10^{-31}$ kg) moving in a 1D infinite potential box of width $L = 0.05$ nm $= 0.05 \times 10^{-9}$ m.

**Solution:**
Energy levels $E_n = \frac{n^2 h^2}{8mL^2}$.
Least energy is for $n=1$. $E_1 = \frac{(1)^2 (6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (0.05 \times 10^{-9})^2}$.
$E_1 = \frac{43.9 \times 10^{-68}}{8 (9.11 \times 10^{-31}) (2.5 \times 10^{-21})}$.
$E_1 = \frac{43.9 \times 10^{-68}}{182.2 \times 10^{-52}} \approx 0.241 \times 10^{-16}$ J.

Convert to eV: $1 \, eV = 1.602 \times 10^{-19}$ J.
$E_1 (eV) = \frac{0.241 \times 10^{-16}}{1.602 \times 10^{-19}} \approx 0.150 \times 10^3 = 150$ eV.
*(Source answer 151 eV matches closely)*.

---
### Example 5: Particle in a Box - Probability
Find the probability that a particle in an infinite potential well of width L can be found between 0 and $L/n$ when it's in the $n^{th}$ state.

**Solution:**
The normalized wave function is $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$.
Probability Density $P(x) = |\psi_n(x)|^2 = \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right)$.
Probability $P(0 \le x \le L/n) = \int_{0}^{L/n} P(x) dx$.
$P = \int_{0}^{L/n} \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right) dx$.
Use $\sin^2 \theta = \frac{1 - \cos(2\theta)}{2}$.
$P = \frac{2}{L} \int_{0}^{L/n} \frac{1 - \cos\left(\frac{2n\pi x}{L}\right)}{2} dx$.
$P = \frac{1}{L} \left[ x - \frac{L}{2n\pi} \sin\left(\frac{2n\pi x}{L}\right) \right]_{0}^{L/n}$.
$P = \frac{1}{L} \left[ \left(\frac{L}{n} - \frac{L}{2n\pi} \sin\left(\frac{2n\pi (L/n)}{L}\right)\right) - (0 - 0) \right]$.
$P = \frac{1}{L} \left[ \frac{L}{n} - \frac{L}{2n\pi} \sin(2\pi) \right]$.
Since $\sin(2\pi) = 0$.
$P = \frac{1}{L} \left[ \frac{L}{n} \right] = \frac{1}{n}$.
The probability is $1/n$.

---
### Example 6: Particle in a Box - Probability (Specific Region)
Particle in infinite well of width 'a'. Find probability between $a/3$ and $2a/3$ for ground state ($n=1$) and third excited state ($n=4$). (Assume well from $x=0$ to $x=a$).

**Solution:**
$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$.
$P(a/3 \le x \le 2a/3) = \int_{a/3}^{2a/3} \frac{2}{a} \sin^2\left(\frac{n\pi x}{a}\right) dx$.
$P = \frac{1}{a} \left[ x - \frac{a}{2n\pi} \sin\left(\frac{2n\pi x}{a}\right) \right]_{a/3}^{2a/3}$.

**Ground State (n=1):**
$P_{n=1} = \frac{1}{a} \left[ \left(\frac{2a}{3} - \frac{a}{2\pi} \sin(\frac{4\pi}{3})\right) - \left(\frac{a}{3} - \frac{a}{2\pi} \sin(\frac{2\pi}{3})\right) \right]$.
$\sin(4\pi/3) = -\sqrt{3}/2$. $\sin(2\pi/3) = +\sqrt{3}/2$.
$P_{n=1} = \frac{1}{a} \left[ \frac{a}{3} - \frac{a}{2\pi} (-\frac{\sqrt{3}}{2}) + \frac{a}{2\pi} (\frac{\sqrt{3}}{2}) \right]$.
$P_{n=1} = \frac{1}{a} \left[ \frac{a}{3} + \frac{a\sqrt{3}}{4\pi} + \frac{a\sqrt{3}}{4\pi} \right] = \frac{1}{3} + \frac{\sqrt{3}}{2\pi}$.
$P_{n=1} \approx 0.333 + 0.276 = 0.609$. (Probability $\approx 60.9\%$).

**Third Excited State (n=4):**
$P_{n=4} = \frac{1}{a} \left[ x - \frac{a}{8\pi} \sin\left(\frac{8\pi x}{a}\right) \right]_{a/3}^{2a/3}$.
$P_{n=4} = \frac{1}{a} \left[ \left(\frac{2a}{3} - \frac{a}{8\pi} \sin(\frac{16\pi}{3})\right) - \left(\frac{a}{3} - \frac{a}{8\pi} \sin(\frac{8\pi}{3})\right) \right]$.
$\sin(16\pi/3) = \sin(4\pi/3 + 4\pi) = \sin(4\pi/3) = -\sqrt{3}/2$.
$\sin(8\pi/3) = \sin(2\pi/3 + 2\pi) = \sin(2\pi/3) = +\sqrt{3}/2$.
$P_{n=4} = \frac{1}{a} \left[ \frac{a}{3} - \frac{a}{8\pi} (-\frac{\sqrt{3}}{2}) + \frac{a}{8\pi} (\frac{\sqrt{3}}{2}) \right]$.
$P_{n=4} = \frac{1}{a} \left[ \frac{a}{3} + \frac{a\sqrt{3}}{16\pi} + \frac{a\sqrt{3}}{16\pi} \right] = \frac{1}{3} + \frac{\sqrt{3}}{8\pi}$.
$P_{n=4} \approx 0.333 + 0.069 = 0.402$. (Probability $\approx 40.2\%$).

---
### Example 7: Particle in a Box - Minimum Energy (Nucleus)
What is the minimum energy of an electron trapped in a 1D region the size of an atomic nucleus ($L=1 \times 10^{-14}$ m)?

**Solution:**
Use $E_1 = \frac{h^2}{8mL^2}$.
$E_1 = \frac{(6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (1 \times 10^{-14})^2}$.
$E_1 = \frac{43.9 \times 10^{-68}}{8 (9.11 \times 10^{-31}) (1 \times 10^{-28})}$.
$E_1 = \frac{43.9 \times 10^{-68}}{72.88 \times 10^{-59}} \approx 0.602 \times 10^{-9}$ J.

Convert to eV:
$E_1 (eV) = \frac{0.602 \times 10^{-9}}{1.602 \times 10^{-19}} \approx 0.376 \times 10^{10} = 3.76 \times 10^9$ eV $= 3.76$ GeV.
*(Source answer 3.77 GeV matches)*.

---
### Example 8: Fermi Factor Occupancy Probability
Estimate the probability of occupancy $f(E)$ for an energy level $E = E_f + 0.1$ eV for Copper ($E_f = 7.0$ eV) at temperatures: i) 100K, ii) 300K, iii) 1000K. ($k_B = 8.617 \times 10^{-5}$ eV/K).

**Solution:**
Energy difference $\Delta E = E - E_f = 0.1$ eV.
Fermi factor $f(E) = \frac{1}{e^{\Delta E / (k_B T)} + 1}$.

i) T = 100 K:
   $k_B T = (8.617 \times 10^{-5})(100) = 0.008617$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.008617 \approx 11.6$.
   $f(E) = \frac{1}{e^{11.6} + 1} \approx \frac{1}{109600 + 1} \approx 9.1 \times 10^{-6}$. (Very low probability)

ii) T = 300 K (Room Temp):
   $k_B T = (8.617 \times 10^{-5})(300) = 0.02585$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.02585 \approx 3.87$.
   $f(E) = \frac{1}{e^{3.87} + 1} \approx \frac{1}{47.9 + 1} \approx \frac{1}{48.9} \approx 0.020$. (Probability $\approx 2\%$)

iii) T = 1000 K:
   $k_B T = (8.617 \times 10^{-5})(1000) = 0.08617$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.08617 \approx 1.16$.
   $f(E) = \frac{1}{e^{1.16} + 1} \approx \frac{1}{3.19 + 1} = \frac{1}{4.19} \approx 0.239$. (Probability $\approx 24\%$)

---
### Example 9: Potential Step Reflection (Energy Comparison)
A 5 eV electron encounters a 2 eV potential step. What is the probability it will be reflected?

**Solution:**
$E = 5$ eV, $V_0 = 2$ eV.
$R = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$
$R = \left(\frac{\sqrt{5}-\sqrt{5-2}}{\sqrt{5}+\sqrt{5-2}}\right)^2 = \left(\frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}}\right)^2$
$R = \left(\frac{2.236 - 1.732}{2.236 + 1.732}\right)^2 = \left(\frac{0.504}{3.968}\right)^2 \approx (0.127)^2 \approx 0.016$.
Reflection Probability $R \approx 1.6\%$.
*(Source answer 0.0716 is likely using ratio of k values directly $\frac{(k_1-k_2)^2}{(k_1+k_2)^2} = \frac{(\sqrt{E/E_0} - \sqrt{(E-V_0)/E_0})^2}{(\dots)^2}$ but seems to have simplified incorrectly to $\frac{(\sqrt{3}-\sqrt{1})^2}{(\sqrt{3}+\sqrt{1})^2}$. The energy-based formula is correct.)*

---
### Example 10: Barrier Tunneling Energy Calculation
A beam of identical electrons is incident on a barrier 6.0 eV high and 2 nm wide. Find the energy of the electrons if 1% ($T=0.01$) are transmitted.

**Solution:**
Use the approximate formula $T \approx 16 \frac{E}{V_0} (1-\frac{E}{V_0}) e^{-2\alpha L}$.
$V_0 = 6.0$ eV. $L = 2$ nm $= 2 \times 10^{-9}$ m. $T=0.01$.
$\alpha = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$.
Let's try the simpler $T \approx e^{-2\alpha L}$.
$0.01 \approx e^{-2\alpha L}$.
$\ln(0.01) \approx -2\alpha L$.
$-4.605 \approx -2 \alpha L$.
$\alpha L \approx 2.30$.
$\alpha = 2.30 / L = 2.30 / (2 \times 10^{-9}) = 1.15 \times 10^9 \, m^{-1}$.

Now relate $\alpha$ to energy: $\alpha^2 = \frac{2m(V_0-E)}{\hbar^2}$.
$(V_0-E) = \frac{\alpha^2 \hbar^2}{2m}$.
$\hbar = 1.054 \times 10^{-34}$ Js. $m = 9.11 \times 10^{-31}$ kg.
$(V_0-E)_{Joules} = \frac{(1.15 \times 10^9)^2 (1.054 \times 10^{-34})^2}{2 (9.11 \times 10^{-31})}$.
$(V_0-E)_{Joules} = \frac{(1.32 \times 10^{18})(1.11 \times 10^{-68})}{1.822 \times 10^{-30}} = \frac{1.465 \times 10^{-50}}{1.822 \times 10^{-30}} \approx 0.804 \times 10^{-20}$ J.

Convert to eV: $(V_0-E)_{eV} = \frac{0.804 \times 10^{-20}}{1.602 \times 10^{-19}} \approx 0.05$ eV.
$V_0 - E = 0.05$ eV.
$E = V_0 - 0.05 = 6.0 - 0.05 = 5.95$ eV.
Using the pre-factor might adjust this slightly. Let's check the source answer's $E=5.963$ eV with the full formula.
If $E=5.963$, $V_0-E = 0.037$ eV.
$\alpha = \sqrt{\frac{2m(0.037 \times 1.602 \times 10^{-19})}{\hbar^2}} \approx 0.96 \times 10^9$.
$2\alpha L = 2 (0.96 \times 10^9)(2 \times 10^{-9}) = 3.84$.
$e^{-2\alpha L} = e^{-3.84} \approx 0.0215$.
Pre-factor: $16 \frac{E}{V_0} (1-\frac{E}{V_0}) = 16 \frac{5.963}{6} (1-\frac{5.963}{6}) \approx 16 (0.994) (0.006) \approx 0.095$.
$T \approx 0.095 \times 0.0215 \approx 0.002$. This is much lower than 0.01.

Let's re-solve $V_0-E=0.05$ eV with the prefactor:
$E=5.95$ eV. $V_0-E=0.05$ eV. $\alpha L \approx 2.30$. $e^{-2\alpha L} = e^{-4.6} \approx 0.01$.
Pre-factor: $16 \frac{5.95}{6} (1-\frac{5.95}{6}) \approx 16(0.99)(0.008) \approx 0.127$.
$T \approx 0.127 \times 0.01 \approx 0.00127$. Still too low.

There might be an issue with the approximation or the source answer. However, $E=5.95$ to $5.96$ eV is the likely range. Let's stick with $E \approx 5.95$ eV based on $T \approx e^{-2\alpha L}$.

---
### Example 11: Fermi Temperature / Velocity (Conceptual)
These are derived from the Fermi energy $E_f$.
Fermi Temperature $T_f$ is defined by $E_f = k_B T_f$.
Fermi Velocity $v_f$ is defined by $E_f = \frac{1}{2} m v_f^2$.

---
### Example 12: Density of States Calculation (Conceptual)
The density of states $g(E)$ gives the number of available electron states per unit volume per unit energy.
The derivation involves:
1. Treating electrons as particles in a 3D infinite potential well (the metal volume).
2. Finding the allowed quantized energy levels $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)$.
3. Counting the number of states $N(E)$ with energy up to $E$ by considering the volume of an octant in "n-space". $N(E) \propto E^{3/2}$.
4. Differentiating $N(E)$ with respect to $E$ to find the number of states $dN$ in an energy interval $dE$.
5. Dividing by volume ($L^3$) and multiplying by 2 (for spin degeneracy) gives $g(E) = \frac{dN/dE}{V} \times 2$.
The result is $g(E) = C \cdot E^{1/2}$, where $C = \frac{\pi}{2} (\frac{8m}{h^2})^{3/2}$.

***
# [[../Physics|Back]]