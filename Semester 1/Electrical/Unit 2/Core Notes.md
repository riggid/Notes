---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***
# Unit 2: Single Phase AC Circuits

## Introduction to AC Waveforms
Alternating Current (AC) systems are widely used for power generation, transmission, and distribution, primarily due to the ease of voltage transformation using transformers. An AC waveform is periodic and alternates between positive and negative values. Examples include sinusoidal, square, and triangular waves. 
***
## Basic Definitions

* **Periodic Waveform**: A waveform that repeats itself after a fixed time interval.
* **Time Period (T)**: The time taken to complete one cycle of a periodic waveform, measured in seconds (s).
* **Frequency (f)**: The number of cycles completed per second, measured in Hertz (Hz) or cycles/sec. $f = 1/T$.
* **Pure AC Waveform**: An AC waveform whose average value over one complete cycle is zero. This means the area under the positive half-cycle equals the area under the negative half-cycle.
* **Angular Frequency ($\omega$)**: The rate of change of phase angle, measured in radians per second (rad/s). $\omega = 2\pi f = 2\pi / T$.

---
## Sinusoidal Waveform

Sinusoidal waveforms are fundamental in AC circuit analysis.
A sinusoidal voltage or current can be expressed as a function of time $t$ or angle $\theta = \omega t$:
$$v(t) = V_m \sin(\omega t + \phi)$$
$$i(t) = I_m \sin(\omega t + \phi)$$
Where:
* $V_m, I_m$ are the maximum (peak) values.
* $\omega$ is the angular frequency in rad/s.
* $\phi$ is the **phase angle** in radians or degrees, indicating the waveform's shift relative to a reference sine wave ($A \sin(\omega t)$).
    * If $\phi > 0$, the waveform **leads** the reference.
    * If $\phi < 0$, the waveform **lags** the reference.

![[Attachments/sine_wave_ac.png|Sinusoidal Waveform]]

*(See Example 1 in the [[Examples#example-1-sine-wave-properties|Examples]] file for calculations involving frequency and time period.)*
*(See Example 2 in the [[Examples#example-2-instantaneous-value|Examples]] file for calculating instantaneous values.)*
*(See Example 3 in the [[Examples#example-3-phase-lag-lead|Examples]] file for understanding phase relationships.)*

---
### **Average and RMS Values**

* **Average Value ($F_{avg}$)**: The average height of the waveform over one period. For a pure sinusoidal waveform, the average value over a full cycle is zero. The average over a half-cycle is $\frac{2}{\pi} \times \text{Peak Value} \approx 0.637 \times \text{Peak Value}$.
* **Effective or Root Mean Square (RMS) Value ($F_{rms}$ or F)**: The equivalent DC value that would produce the same heating effect (power dissipation) in a resistor. It's calculated as the square root of the mean of the squared function values over one period. For a sinusoidal waveform $f(t) = F_m \sin(\omega t)$:
    $$F_{rms} = \sqrt{\frac{1}{T}\int_{0}^{T}[f(t)]^{2}dt} = \frac{F_m}{\sqrt{2}} \approx 0.707 \times F_m$$
    RMS values simplify power calculations: $P = V^2/R = I^2 R$, where V and I are RMS values.
* **Form Factor ($K_f$)**: The ratio of RMS value to Average value. For a sine wave:
    $$K_f = \frac{\text{RMS Value}}{\text{Average Value}} = \frac{0.707 F_m}{0.637 F_m} = 1.11$$
* **Peak Factor (Crest Factor, $K_p$)**: The ratio of Maximum (Peak) value to RMS value. For a sine wave:
    $$K_p = \frac{\text{Max Value}}{\text{RMS Value}} = \frac{F_m}{0.707 F_m} = 1.414$$

---

## Phasor Representation

A **phasor** is a rotating vector used to represent a sinusoidal function. Its length represents the RMS value of the sinusoid, and its angle (measured from the positive real axis, usually at $t=0$) represents the phase angle. Sinusoids must have the same frequency to be represented on the same phasor diagram.

A sinusoidal function $f(t) = F_m \sin(\omega t + \phi)$ is represented by the phasor $\bar{F}$:
$$\bar{F} = \frac{F_m}{\sqrt{2}} \angle \phi = F_{rms} \angle \phi$$

* **Polar Form**: $r \angle \theta$ (Magnitude and Angle)
* **Rectangular Form**: $A + jB$ (Real and Imaginary Components)
    * Conversion Polar to Rectangular: $A = r \cos \theta$, $B = r \sin \theta$.
    * Conversion Rectangular to Polar: $r = \sqrt{A^2 + B^2}$, $\theta = \arctan(B/A)$.

* **j Operator**: Represents $\sqrt{-1}$, equivalent to $1 \angle 90^{\circ}$. Multiplying a phasor by $j$ rotates it $90^{\circ}$ counter-clockwise without changing its magnitude. $j^2 = -1$, $j^3 = -j$, $j^4 = 1$.

* **Phasor Arithmetic**:
    * Addition/Subtraction: Easier in rectangular form (add/subtract real and imaginary parts separately).
    * Multiplication/Division: Easier in polar form (multiply/divide magnitudes, add/subtract angles).

![[Attachments/phasor_diagram_basic.png|Phasor Diagram]]

*(See Example 4 in the [[Examples#example-4-phasor-representation|Examples]] file for converting sine waves to phasors.)*
*(See Example 5 in the [[Examples#example-5-phasor-addition|Examples]] file for adding phasors.)*

---

## Response of Basic Elements (R, L, C)

When a sinusoidal voltage $v(t) = V_m \sin(\omega t)$ (Phasor $\bar{V} = V \angle 0^{\circ}$) is applied:

* **Resistor (R)**:
    * Current: $i(t) = \frac{V_m}{R} \sin(\omega t) = I_m \sin(\omega t)$.
    * Phasor Current: $\bar{I} = \frac{V}{R} \angle 0^{\circ}$.
    * Relationship: Current is **in phase** with voltage.
    * **Impedance ($\bar{Z}_R$)**: Opposition to current flow. $Z_R = \bar{V}/\bar{I} = R \angle 0^{\circ} = R$ Ohms ($\Omega$).

* **Inductor (L)**:
    * Voltage-Current: $v(t) = L \frac{di(t)}{dt}$.
    * Current: $i(t) = \frac{V_m}{\omega L} \sin(\omega t - 90^{\circ}) = I_m \sin(\omega t - 90^{\circ})$.
    * Phasor Current: $\bar{I} = \frac{V}{\omega L} \angle -90^{\circ}$.
    * Relationship: Current **lags** voltage by $90^{\circ}$.
    * **Inductive Reactance ($X_L$)**: Opposition due to inductance. $X_L = \omega L = 2\pi f L$ Ohms ($\Omega$).
    * **Impedance ($\bar{Z}_L$)**: $Z_L = \bar{V}/\bar{I} = \omega L \angle 90^{\circ} = jX_L$ Ohms ($\Omega$).

* **Capacitor (C)**:
    * Voltage-Current: $i(t) = C \frac{dv(t)}{dt}$.
    * Current: $i(t) = V_m \omega C \sin(\omega t + 90^{\circ}) = I_m \sin(\omega t + 90^{\circ})$.
    * Phasor Current: $\bar{I} = V \omega C \angle +90^{\circ}$.
    * Relationship: Current **leads** voltage by $90^{\circ}$.
    * **Capacitive Reactance ($X_C$)**: Opposition due to capacitance. $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$ Ohms ($\Omega$).
    * **Impedance ($\bar{Z}_C$)**: $Z_C = \bar{V}/\bar{I} = \frac{1}{\omega C} \angle -90^{\circ} = -jX_C$ Ohms ($\Omega$).

*(See Example 6 in the [[Examples#example-6-capacitor-calculations|Examples]] file for calculations involving a capacitor.)*

---

## Series AC Circuits

For elements in series, the same current $\bar{I}$ flows through them. The total voltage $\bar{V}$ is the phasor sum of individual voltages. Total impedance $\bar{Z}_T$ is the phasor sum of individual impedances. The phase angle $\phi$ is the angle of the total impedance ($\phi = \angle \bar{Z}_T = \angle \bar{V} - \angle \bar{I}$).

* **Series RL**:
    * $\bar{V} = \bar{V}_R + \bar{V}_L = \bar{I}R + \bar{I}(jX_L) = \bar{I}(R + jX_L)$.
    * $\bar{Z}_T = R + jX_L = |Z| \angle \phi$, where $|Z| = \sqrt{R^2 + X_L^2}$ and $\phi = \arctan(X_L/R)$.
    * Current lags voltage ($0^{\circ} < \phi < 90^{\circ}$). 
* **Series RC**:
    * $\bar{V} = \bar{V}_R + \bar{V}_C = \bar{I}R + \bar{I}(-jX_C) = \bar{I}(R - jX_C)$.
    * $\bar{Z}_T = R - jX_C = |Z| \angle \phi$, where $|Z| = \sqrt{R^2 + X_C^2}$ and $\phi = -\arctan(X_C/R)$.
    * Current leads voltage ($-90^{\circ} < \phi < 0^{\circ}$). 
* **Series RLC**:
    * $\bar{V} = \bar{V}_R + \bar{V}_L + \bar{V}_C = \bar{I}(R + jX_L - jX_C)$.
    * $\bar{Z}_T = R + j(X_L - X_C) = |Z| \angle \phi$, where $|Z| = \sqrt{R^2 + (X_L - X_C)^2}$ and $\phi = \arctan(\frac{X_L - X_C}{R})$.
    * If $X_L > X_C$, circuit is **inductive** (current lags voltage, $\phi > 0$).
    * If $X_C > X_L$, circuit is **capacitive** (current leads voltage, $\phi < 0$).
    * If $X_L = X_C$, circuit is **resistive** (current in phase with voltage, $\phi = 0$). This is **series resonance**.
        * **Resonant Frequency ($f_r$)**: The frequency at which $X_L = X_C$.
          $$\omega_r L = \frac{1}{\omega_r C} \implies f_r = \frac{1}{2\pi \sqrt{LC}}$$

![[Attachments/rlc_series_circuit.png|Series RLC Circuit]]

![[Attachments/impedance_triangle.png|Impedance Triangle]]

*(See Example 7 in the [[Examples#example-7-series-rl-calculations|Examples]] file for series RL analysis.)*
*(See Example 8 and Example 9 in the [[Examples#example-8-series-rlc-calculations|Examples]] file for series RLC analysis.)*

---

## Power in AC Circuits

* **Instantaneous Power ($p(t)$)**: $p(t) = v(t) \times i(t)$. Varies with time.
* **Average Power (P)**: Also called **Active Power** or **Real Power**. The average of $p(t)$ over one cycle. Represents the power actually consumed or dissipated (e.g., as heat in resistors). Measured in **Watts (W)**.
    $$P = \frac{1}{T}\int_{0}^{T} p(t) dt = V I \cos \phi$$
    Where V and I are RMS values, and $\phi$ is the phase angle between voltage and current.
* **Reactive Power (Q)**: Power that oscillates between the source and reactive elements (inductors, capacitors) associated with energy storage in magnetic or electric fields. It is not consumed. Measured in **Volt-Amperes Reactive (VAR)**.
    $$Q = V I \sin \phi$$
    * Inductors consume/absorb positive reactive power ($\phi > 0$).
    * Capacitors supply/generate negative reactive power ($\phi < 0$).
* **Apparent Power (S)**: The product of RMS voltage and RMS current. Represents the total power that appears to be supplied/flowing. Measured in **Volt-Amperes (VA)**.
    $$S = V I$$
* **Power Factor (pf)**: The ratio of active power to apparent power. Indicates how effectively the supplied power is being used.
    $$pf = \frac{P}{S} = \frac{VI \cos \phi}{VI} = \cos \phi$$
    * **Lagging pf**: Current lags voltage (inductive circuit, $\phi > 0$).
    * **Leading pf**: Current leads voltage (capacitive circuit, $\phi < 0$).
    * **Unity pf**: Current in phase with voltage (purely resistive or resonant circuit, $\phi = 0$).
    For series circuits, $pf = R_T / |Z_T|$.
* **Power Triangle**: A right-angled triangle illustrating the relationship $S^2 = P^2 + Q^2$. $P = S \cos \phi$, $Q = S \sin \phi$. 

![[Attachments/power_triangle_diagram.png|Power Triangle]]

*(See Example 10 in the [[Examples#example-10-power-calculations|Examples]] file for power calculations.)*

---
## Admittance and Parallel Circuits

* **Admittance ($\bar{Y}$)**: Reciprocal of impedance ($\bar{Y} = 1/\bar{Z}$). Measured in **Siemens (S)**.
    $\bar{Y} = G + jB$
    * **Conductance (G)**: Real part of admittance. $G = 1/R$ for a pure resistor.
    * **Susceptance (B)**: Imaginary part of admittance.
        * Inductor: $\bar{Y}_L = 1/(jX_L) = -j/X_L = -jB_L$, where $B_L = 1/X_L$ is **inductive susceptance**.
        * Capacitor: $\bar{Y}_C = 1/(-jX_C) = j/X_C = jB_C$, where $B_C = 1/X_C$ is **capacitive susceptance**.

For elements in parallel, the same voltage $\bar{V}$ is across them. The total current $\bar{I}$ is the phasor sum of individual currents. Total admittance $\bar{Y}_T$ is the phasor sum of individual admittances. $\bar{I} = \bar{V} \bar{Y}_T$.
Phase angle $\phi = \angle \bar{V} - \angle \bar{I} = -\angle \bar{Y}_T$.

* **Parallel RL**:
    * $\bar{Y}_T = G - jB_L = |Y| \angle \phi_Y$, where $|Y| = \sqrt{G^2 + B_L^2}$ and $\phi_Y = -\arctan(B_L/G)$.
    * Current lags voltage. 
* **Parallel RC**:
    * $\bar{Y}_T = G + jB_C = |Y| \angle \phi_Y$, where $|Y| = \sqrt{G^2 + B_C^2}$ and $\phi_Y = \arctan(B_C/G)$.
    * Current leads voltage. 
* **Parallel RLC**:
    * $\bar{Y}_T = G - jB_L + jB_C = G + j(B_C - B_L)$.
    * $|Y| = \sqrt{G^2 + (B_C - B_L)^2}$, $\phi_Y = \arctan(\frac{B_C - B_L}{G})$.
    * If $B_L > B_C$, circuit is **inductive** (current lags voltage).
    * If $B_C > B_L$, circuit is **capacitive** (current leads voltage).
    * If $B_L = B_C$, circuit is **resistive** (current in phase with voltage). This is **parallel resonance**. 
*(See Example 11 and Example 12 in the [[Examples#example-11-parallel-circuit-admittance|Examples]] file for parallel circuit analysis.)*

---
## Series-Parallel Circuits

These circuits combine series and parallel connections. They are solved by simplifying sections:
1.  Combine impedances in series ($\bar{Z}_{eq} = \bar{Z}_1 + \bar{Z}_2 + \dots$).
2.  Combine admittances in parallel ($\bar{Y}_{eq} = \bar{Y}_1 + \bar{Y}_2 + \dots$) or use the formula for two parallel impedances ($\bar{Z}_{eq} = \frac{\bar{Z}_1 \bar{Z}_2}{\bar{Z}_1 + \bar{Z}_2}$).
3.  Repeat until the total equivalent impedance or admittance is found. Use Ohm's Law ($\bar{V}=\bar{I}\bar{Z}$) and current/voltage division rules as needed. Phasor methods are generally preferred.

*(See Example 13, Example 14, Example 15, and Example 16 in the [[Examples#example-13-series-parallel-impedance|Examples]] file for series-parallel analysis.)*

---
## Power Factor Improvement

Most industrial loads are inductive (motors), causing the overall power factor to be lagging and less than unity. A low power factor means a higher current is needed to deliver the same active power ($P = VI \cos\phi$), leading to:
* Larger equipment size (generators, transformers, cables).
* Higher transmission losses ($I^2R$ losses).
* Poor voltage regulation.

Utilities often penalize consumers for low power factors. Power factor can be improved (brought closer to unity) by adding **capacitors in parallel** with the load. The capacitors supply reactive power locally, reducing the reactive power drawn from the source. 
The required capacitor rating (in kVAR or capacitance in Farads) can be calculated based on the initial active power (P), initial power factor ($\cos\phi_1$), and desired final power factor ($\cos\phi_2$).
* Initial Reactive Power: $Q_1 = P \tan \phi_1$.
* Final Reactive Power: $Q_2 = P \tan \phi_2$.
* Reactive Power supplied by Capacitor: $Q_C = Q_1 - Q_2 = P (\tan \phi_1 - \tan \phi_2)$.
* Capacitance: $C = Q_C / (\omega V^2)$.

*(See Example 17 and Example 18 in the [[Examples#example-17-power-factor-correction|Examples]] file for power factor correction calculations.)*

***
# [[../../Mathematics/Mathematics|Back]]