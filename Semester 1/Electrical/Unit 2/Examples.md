# [Back](../Electrical.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 2: Worked Examples

### Example 1: Sine Wave Properties
For a Sinusoidal function of frequency 50 Hz, find i) Half time period ii) Angular frequency.
**Solution:**
Given $f = 50$ Hz.
Time period, $T = 1/f = 1/50 = 0.02$ s $= 20$ ms.
i) Half time period $T/2 = 20/2 = 10$ ms.
ii) Angular frequency $\omega = 2\pi f = 2\pi(50) = 100\pi$ rad/s $\approx 314.16$ rad/s.

---
### Example 2: Instantaneous Value
The maximum value of a sinusoidal alternating current of frequency 50Hz is 25 A. Write the equation for the instantaneous expression of current. Determine its value at 3ms and 14 ms.
**Solution:**
![](Examples-2.png)
Angular frequency, $\omega = 2\pi f = 100\pi$ rad/s.
The instantaneous expression is $i(t) = I_m \sin(\omega t) = 25 \sin(100\pi t)$ A.
Value at $t = 3$ ms $= 0.003$ s:
$i(3ms) = 25 \sin(100\pi \times 0.003) = 25 \sin(0.3\pi \text{ rad})$
$0.3\pi \text{ rad} = 0.3 \times 180^{\circ} = 54^{\circ}$.
$i(3ms) = 25 \sin(54^{\circ}) \approx 25 \times 0.809 \approx 20.22$ A.
Value at $t = 14$ ms $= 0.014$ s:
$i(14ms) = 25 \sin(100\pi \times 0.014) = 25 \sin(1.4\pi \text{ rad})$
$1.4\pi \text{ rad} = 1.4 \times 180^{\circ} = 252^{\circ}$.
$i(14ms) = 25 \sin(252^{\circ}) \approx 25 \times (-0.951) \approx -23.77$ A.


---
### Example 3: Phase Lag/Lead
Write equations for the following 50Hz sine waves: i) RMS 10A, starts at 5ms ii) Peak 20A, starts at -2.5ms. Comment on phase relation.
**Solution:**
$\omega = 2\pi f = 100\pi$ rad/s. Time period $T = 1/f = 20$ ms.

i) RMS = 10A $\implies$ Peak $I_m = 10\sqrt{2}$ A.
   Starts at 5ms. If "starts at" refers to the zero crossing, the wave is shifted right by 5ms.
   Phase shift $\phi = -\omega t_{shift} = -(100\pi)(0.005) = -0.5\pi = -90^{\circ}$.
   $i_1(t) = 10\sqrt{2} \sin(100\pi t - 90^{\circ})$ A or $i_1(t) = -10\sqrt{2} \cos(100\pi t)$ A.

ii) Peak $I_m = 20$ A.
   Starts at -2.5ms. Phase shift $\phi = -\omega t_{shift} = -(100\pi)(-0.0025) = +0.25\pi = +45^{\circ}$.
   $i_2(t) = 20 \sin(100\pi t + 45^{\circ})$ A.

Phase Relation:
$i_1$ has a phase of $-90^{\circ}$. $i_2$ has a phase of $+45^{\circ}$.
$i_2$ leads $i_1$ by $45^{\circ} - (-90^{\circ}) = 135^{\circ}$.
Or $i_1$ lags $i_2$ by $135^{\circ}$.

---
### Example 4: Phasor Representation
Represent the following as phasors and draw the phasor diagram: a) $f_1(t)=100\sin(100\pi t)$, b) $f_2(t)=200\sin(100\pi t+60^{\circ})$, c) $f_3(t)=100\cos(100\pi t-60^{\circ})$.
**Solution:**
![](Examples-1.png)
First, convert cosine to sine form:
$f_3(t) = 100 \cos(100\pi t - 60^{\circ}) = 100 \sin(100\pi t - 60^{\circ} + 90^{\circ}) = 100 \sin(100\pi t + 30^{\circ})$.

Now, convert to phasors (RMS magnitude, phase angle):
a) $\bar{F}_1 = \frac{100}{\sqrt{2}} \angle 0^{\circ}$ A.
b) $\bar{F}_2 = \frac{200}{\sqrt{2}} \angle 60^{\circ}$ A.
c) $\bar{F}_3 = \frac{100}{\sqrt{2}} \angle 30^{\circ}$ A.

Phasor Diagram:

(Draw $\bar{F}_1$ along the positive real axis. Draw $\bar{F}_3$ at $30^{\circ}$ counter-clockwise from $\bar{F}_1$. Draw $\bar{F}_2$ at $60^{\circ}$ counter-clockwise from $\bar{F}_1$. Lengths should represent RMS values).

---
### Example 5: Phasor Addition
Currents $i_1=3\sqrt{2}\sin(\omega t)$, $i_2=5\sqrt{2}\sin(\omega t+30^{\circ})$, $i_3=6\sqrt{2}\sin(\omega t-120^{\circ})$ flow into a junction. Find the resultant current $i$ leaving the junction.
**Solution:**
By KCL, the resultant current $i$ leaving is $i = i_1 + i_2 + i_3$. We add the corresponding phasors.
$\bar{I}_1 = \frac{3\sqrt{2}}{\sqrt{2}} \angle 0^{\circ} = 3 \angle 0^{\circ} = 3 + j0$ A.
$\bar{I}_2 = \frac{5\sqrt{2}}{\sqrt{2}} \angle 30^{\circ} = 5 \angle 30^{\circ} = 5(\cos 30^{\circ} + j\sin 30^{\circ}) = 4.33 + j2.5$ A.
$\bar{I}_3 = \frac{6\sqrt{2}}{\sqrt{2}} \angle -120^{\circ} = 6 \angle -120^{\circ} = 6(\cos(-120^{\circ}) + j\sin(-120^{\circ})) = -3 - j5.2$ A.

Resultant Phasor $\bar{I} = \bar{I}_1 + \bar{I}_2 + \bar{I}_3$.
$\bar{I} = (3 + 4.33 - 3) + j(0 + 2.5 - 5.2) = 4.33 - j2.7$ A.
Convert to polar form:
Magnitude $|\bar{I}| = \sqrt{4.33^2 + (-2.7)^2} \approx \sqrt{18.75 + 7.29} = \sqrt{26.04} \approx 5.1$ A.
Angle $\angle \bar{I} = \arctan(-2.7 / 4.33) \approx \arctan(-0.624) \approx -31.9^{\circ}$.
So, $\bar{I} = 5.1 \angle -31.9^{\circ}$ A.

Instantaneous current:
Peak value $I_m = 5.1 \sqrt{2} \approx 7.21$ A.
$i(t) = 7.21 \sin(\omega t - 31.9^{\circ})$ A.

---
### Example 6: Capacitor Calculations
A Capacitor $C=100\mu F$ is connected across $v(t)=100\sin(100\pi t)$ V. Determine i) $X_C$ ii) Impedance $\bar{Z}$ iii) $i(t)$ iv) Draw phasor diagram.
**Solution:**
Given $V_m = 100$ V, $\omega = 100\pi$ rad/s.

i) Capacitive Reactance:
   $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(100 \times 10^{-6})} = \frac{1}{0.01\pi} = \frac{100}{\pi} \approx 31.83 \, \Omega$.

ii) Impedance:
   $\bar{Z}_C = -jX_C = -j31.83 \, \Omega$ or $31.83 \angle -90^{\circ} \, \Omega$.

iii) Instantaneous Current:
   Current leads voltage by $90^{\circ}$ in a capacitor.
   Peak current $I_m = \frac{V_m}{X_C} = \frac{100}{31.83} \approx 3.14$ A.
   $i(t) = I_m \sin(\omega t + 90^{\circ}) = 3.14 \sin(100\pi t + 90^{\circ})$ A.

iv) Phasor Diagram:
   Voltage Phasor: $\bar{V} = \frac{100}{\sqrt{2}} \angle 0^{\circ}$ V.
   Current Phasor: $\bar{I} = \frac{3.14}{\sqrt{2}} \angle 90^{\circ}$ A.
   ![](Examples-3.png)

---
### Example 7: Series RL Calculations
A resistor R and an inductor (with internal resistance r and inductance L) are in series connected to 240V supply. Current is 3A lagging voltage by $37^{\circ}$. Voltage across the inductor component is 171V. Find R, r and $X_L$.

**Solution:**
![](Examples-4.png)
Let current be reference: $\bar{I} = 3 \angle 0^{\circ}$ A.
Supply voltage leads current by $37^{\circ}$: $\bar{V} = 240 \angle 37^{\circ}$ V.
Total Impedance $\bar{Z}_T = \bar{V}/\bar{I} = (240 \angle 37^{\circ}) / (3 \angle 0^{\circ}) = 80 \angle 37^{\circ} \, \Omega$.
In rectangular form: $\bar{Z}_T = 80(\cos 37^{\circ} + j\sin 37^{\circ}) \approx 63.89 + j48.14 \, \Omega$.
The circuit impedance is also $\bar{Z}_T = R + (r + jX_L) = (R+r) + jX_L$.
Comparing real and imaginary parts:
$X_L = 48.14 \, \Omega$.
$R+r = 63.89 \, \Omega$ (Eq. 3).

Voltage across inductor component $V_{ind} = 171$ V. Impedance of inductor component $Z_{ind} = |r + jX_L|$.
$V_{ind} = I \times |Z_{ind}| \implies 171 = 3 \times \sqrt{r^2 + X_L^2}$.
$171/3 = 57 = \sqrt{r^2 + (48.14)^2}$.
$57^2 = r^2 + 48.14^2 \implies 3249 = r^2 + 2317.46$.
$r^2 = 3249 - 2317.46 = 931.54 \implies r \approx 30.52 \, \Omega$.
From (Eq. 3), $R = 63.89 - r = 63.89 - 30.52 = 33.37 \, \Omega$.

Resistance of resistor $R = 33.37 \, \Omega$.
Resistance of inductor $r = 30.52 \, \Omega$.
Reactance of inductor $X_L = 48.14 \, \Omega$.

---
### Example 8: Series RLC Calculations (Coil Voltage)
A 250V, 50Hz voltage is applied to a coil ($R=5\Omega, L=9.55H$) in series with capacitor C. Voltage across coil is 300V. Find C.

**Solution:**
Inductive Reactance $X_L = 2\pi f L = 2\pi(50)(9.55) \approx 3000 \, \Omega$.
Impedance of coil $Z_{coil} = R + jX_L = 5 + j3000 \, \Omega$.
Magnitude $|Z_{coil}| = \sqrt{5^2 + 3000^2} \approx 3000 \, \Omega$.
Current in circuit $I = V_{coil} / |Z_{coil}| = 300 / 3000 = 0.1$ A.
Total circuit impedance magnitude $|Z_T| = V / I = 250 / 0.1 = 2500 \, \Omega$.
Total impedance $\bar{Z}_T = R + jX_L - jX_C = 5 + j(3000 - X_C)$.
$|Z_T|^2 = R^2 + (X_L - X_C)^2$.
$2500^2 = 5^2 + (3000 - X_C)^2$.
$6,250,000 = 25 + (3000 - X_C)^2$.
$(3000 - X_C)^2 \approx 6,250,000 \implies 3000 - X_C \approx \pm 2500$.

Case 1: $3000 - X_C = 2500 \implies X_C = 500 \, \Omega$.
$C = \frac{1}{2\pi f X_C} = \frac{1}{2\pi (50)(500)} \approx 6.37 \times 10^{-6}$ F $= 6.37 \, \mu F$.

Case 2: $3000 - X_C = -2500 \implies X_C = 5500 \, \Omega$.
$C = \frac{1}{2\pi f X_C} = \frac{1}{2\pi (50)(5500)} \approx 0.58 \times 10^{-6}$ F $= 0.58 \, \mu F$.
Both values are possible.

---
### Example 9: Series RLC Calculations (Phase)
Series RLC circuit current lags applied voltage by $45^{\circ}$. The voltage across the inductance has maximum value equal to twice the maximum value of voltage across the capacitor. Voltage across the inductance is $v_L(t)=300\sin(1000t)$ and $R=20\Omega$. Find the value of inductance and capacitance.

**Solution:**
From $v_L(t)$, we get $\omega = 1000$ rad/s.
$V_{L(max)} = I_m X_L = 300$ V.
$V_{L(max)} = 2 V_{C(max)} \implies I_m X_L = 2 (I_m X_C) \implies X_L = 2X_C$.
Phase angle $\phi = +45^{\circ}$ (current lags voltage).
$\tan \phi = \frac{X_L - X_C}{R}$.
$\tan 45^{\circ} = 1 = \frac{X_L - X_C}{20}$.
$X_L - X_C = 20$.
Substitute $X_L = 2X_C$:
$2X_C - X_C = 20 \implies X_C = 20 \, \Omega$.
Then $X_L = 2X_C = 40 \, \Omega$.

Find L and C:
$X_L = \omega L \implies 40 = 1000 L \implies L = 0.04$ H.
$X_C = 1/(\omega C) \implies 20 = 1/(1000 C) \implies C = 1/(20000) = 50 \times 10^{-6}$ F $= 50 \, \mu F$.

---
### Example 10: Power Calculations
Series RL circuit with $v(t)=100\sin(\omega t)$ V draws $i(t)=10\sin(\omega t - 60^{\circ})$ A. Determine P, Q, S, pf.
**Solution:**
Peak voltage $V_m = 100$ V $\implies$ RMS $V = 100/\sqrt{2}$ V.
Peak current $I_m = 10$ A $\implies$ RMS $I = 10/\sqrt{2}$ A.
Phase angle $\phi = \angle V - \angle I = 0^{\circ} - (-60^{\circ}) = 60^{\circ}$.

i) Powers:
Active Power $P = VI \cos \phi = (\frac{100}{\sqrt{2}})(\frac{10}{\sqrt{2}}) \cos 60^{\circ} = \frac{1000}{2} \times 0.5 = 250$ W.
Reactive Power $Q = VI \sin \phi = (\frac{1000}{2}) \sin 60^{\circ} = 500 \times \frac{\sqrt{3}}{2} \approx 433$ VAR.
Apparent Power $S = VI = \frac{1000}{2} = 500$ VA.

ii) Power Factor:
$pf = \cos \phi = \cos 60^{\circ} = 0.5$. Since current lags voltage ($\phi$ is positive), it's $0.5$ Lagging.

---
### Example 11: Parallel Circuit Admittance
Impedances $Z_1 = 7+j5 \, \Omega$ and $Z_2 = 10-j8 \, \Omega$ are in parallel across 230V, 50Hz. Find total Y, G, B, I, pf.
**Solution:**
![](Examples-10.png)
Admittance of branch 1: $\bar{Y}_1 = 1/\bar{Z}_1 = 1/(7+j5) = \frac{7-j5}{7^2+5^2} = \frac{7-j5}{74} = 0.0946 - j0.0676$ S.
Admittance of branch 2: $\bar{Y}_2 = 1/\bar{Z}_2 = 1/(10-j8) = \frac{10+j8}{10^2+(-8)^2} = \frac{10+j8}{164} = 0.0610 + j0.0488$ S.

Total Admittance $\bar{Y}_T = \bar{Y}_1 + \bar{Y}_2 = (0.0946+0.0610) + j(-0.0676+0.0488) = 0.1556 - j0.0188$ S.
In polar form: $\bar{Y}_T \approx 0.1567 \angle -6.9^{\circ}$ S.

Conductance $G = \text{Re}(\bar{Y}_T) = 0.1556$ S.
Susceptance $B = \text{Im}(\bar{Y}_T) = -0.0188$ S (Inductive overall).

Total Current $\bar{I} = \bar{V} \bar{Y}_T$. Let $\bar{V} = 230 \angle 0^{\circ}$ V.
$\bar{I} = (230 \angle 0^{\circ})(0.1567 \angle -6.9^{\circ}) \approx 36.04 \angle -6.9^{\circ}$ A. Magnitude $I = 36.04$ A.

Power Factor $pf = \cos \phi = \cos(-6.9^{\circ}) \approx 0.99$. Since current lags voltage (angle is negative), it's $0.99$ Lagging.

---
### Example 12: Parallel RLC Analysis
$R=2.5\Omega$, $X_L=4\Omega$, $X_C=10\Omega$ in parallel across 10V, 50Hz. Find admittances, branch currents, total current.
**Solution:**
![](Examples-5.png)
i) Admittances:
$\bar{Y}_R = G = 1/R = 1/2.5 = 0.4$ S.
$\bar{Y}_L = -jB_L = 1/(jX_L) = 1/(j4) = -j0.25$ S.
$\bar{Y}_C = jB_C = 1/(-jX_C) = 1/(-j10) = j0.1$ S.
Total Admittance $\bar{Y}_T = \bar{Y}_R + \bar{Y}_L + \bar{Y}_C = 0.4 - j0.25 + j0.1 = 0.4 - j0.15$ S.

ii) Currents (Let $\bar{V} = 10 \angle 0^{\circ}$ V):
$\bar{I}_R = \bar{V} \bar{Y}_R = (10 \angle 0^{\circ})(0.4) = 4 \angle 0^{\circ}$ A.
$\bar{I}_L = \bar{V} \bar{Y}_L = (10 \angle 0^{\circ})(-j0.25) = (10)(0.25 \angle -90^{\circ}) = 2.5 \angle -90^{\circ}$ A.
$\bar{I}_C = \bar{V} \bar{Y}_C = (10 \angle 0^{\circ})(j0.1) = (10)(0.1 \angle 90^{\circ}) = 1 \angle 90^{\circ}$ A.
Total Current $\bar{I}_S = \bar{I}_R + \bar{I}_L + \bar{I}_C = 4 + (-j2.5) + j1 = 4 - j1.5$ A.
In polar form: $\bar{I}_S = \sqrt{4^2 + (-1.5)^2} \angle \arctan(-1.5/4) \approx 4.27 \angle -20.56^{\circ}$ A.

---
### Example 13: Series-Parallel Impedance
Determine current, power, pf for the circuit with $L_1=0.01H, L_2=0.02H, C=200\mu F$ and resistors $6\Omega, 4\Omega, 2\Omega$ connected to 100V, 50Hz.


**Solution:**
Calculate reactances at $f=50$ Hz:
$X_{L1} = 2\pi(50)(0.01) = \pi \approx 3.14 \, \Omega$.
$X_{L2} = 2\pi(50)(0.02) = 2\pi \approx 6.28 \, \Omega$.
$X_C = 1 / (2\pi(50)(200 \times 10^{-6})) = 1 / (0.02\pi) = 50/\pi \approx 15.92 \, \Omega$.

Impedances:
$\bar{Z}_1$ (series part) $= 6 + jX_{L1} = 6 + j3.14 \, \Omega$.
$\bar{Z}_2$ (upper parallel branch) $= 4 + jX_{L2} = 4 + j6.28 \, \Omega$.
$\bar{Z}_3$ (lower parallel branch) $= 2 - jX_C = 2 - j15.92 \, \Omega$.

Equivalent impedance of parallel branches ($\bar{Z}_p$):
$\bar{Z}_p = \frac{\bar{Z}_2 \bar{Z}_3}{\bar{Z}_2 + \bar{Z}_3}$.
$\bar{Z}_2 + \bar{Z}_3 = (4+j6.28) + (2-j15.92) = 6 - j9.64 \, \Omega$.
$\bar{Z}_2 \bar{Z}_3 = (4+j6.28)(2-j15.92) = 8 - j63.68 + j12.56 - j^2(6.28)(15.92)$
$= 8 - j51.12 + 100.0 \approx 108.0 - j51.12 \, \Omega^2$.
$\bar{Z}_p = \frac{108.0 - j51.12}{6 - j9.64} \approx \frac{119.5 \angle -25.3^{\circ}}{11.34 \angle -58.1^{\circ}} \approx 10.54 \angle 32.8^{\circ} \approx 8.87 + j5.69 \, \Omega$.

Total Impedance $\bar{Z}_T = \bar{Z}_1 + \bar{Z}_p = (6+j3.14) + (8.87+j5.69) = 14.87 + j8.83 \, \Omega$.
In polar form: $\bar{Z}_T \approx 17.3 \angle 30.7^{\circ} \, \Omega$.

Total Current $\bar{I} = \bar{V}/\bar{Z}_T$. Let $\bar{V} = 100 \angle 0^{\circ}$ V.
$\bar{I} = (100 \angle 0^{\circ}) / (17.3 \angle 30.7^{\circ}) \approx 5.78 \angle -30.7^{\circ}$ A.

Power Consumed $P = VI \cos \phi = (100)(5.78) \cos(30.7^{\circ}) \approx 578 \times 0.86 \approx 497$ W.
Power Factor $pf = \cos \phi = \cos(30.7^{\circ}) \approx 0.86$ Lagging.

---
### Example 14: Series-Parallel Analysis (Unknowns)
Circuit takes 12A lagging, $P=1800W$ from 200V supply. Voltmeter reads 200V across series $R_2=10\Omega, X_2$. Find $R_1, X_1, X_2$.

**Solution:**
Total apparent power $S = VI = (200)(12) = 2400$ VA.
Overall power factor $pf = P/S = 1800 / 2400 = 0.75$ Lagging.
Phase angle $\phi = \arccos(0.75) \approx 41.41^{\circ}$.
Let supply voltage $\bar{V} = 200 \angle 0^{\circ}$ V.
Total current $\bar{I} = 12 \angle -41.41^{\circ}$ A.

Voltmeter reads 200V across the series part ($Z_2 = 10+jX_2$).
Magnitude $|Z_2| = V_2 / I = 200 / 12 \approx 16.67 \, \Omega$.
$|Z_2|^2 = R_2^2 + X_2^2 \implies 16.67^2 = 10^2 + X_2^2$.
$277.8 = 100 + X_2^2 \implies X_2^2 = 177.8 \implies X_2 \approx 13.33 \, \Omega$.
So $\bar{Z}_2 = 10 + j13.33 \, \Omega = 16.67 \angle 53.1^{\circ} \, \Omega$.
Voltage across $Z_2$: $\bar{V}_2 = \bar{I} \bar{Z}_2 = (12 \angle -41.41^{\circ})(16.67 \angle 53.1^{\circ}) \approx 200 \angle 11.7^{\circ}$ V.

Voltage across parallel part $\bar{V}_p = \bar{V} - \bar{V}_2 = 200 \angle 0^{\circ} - 200 \angle 11.7^{\circ}$.
$\bar{V}_p = 200 - (195.9 + j40.5) = 4.1 - j40.5 \approx 40.7 \angle -84.2^{\circ}$ V.

Parallel branches: $Z_{p1} = R_1 - jX_1$, $Z_{p2} = -j20 \, \Omega$ (Capacitor $X_C=20\Omega$).
Current through $Z_{p2}$: $\bar{I}_{p2} = \bar{V}_p / \bar{Z}_{p2} = (40.7 \angle -84.2^{\circ}) / (20 \angle -90^{\circ}) \approx 2.035 \angle 5.8^{\circ}$ A.
Current through $Z_{p1}$: $\bar{I}_{p1} = \bar{I} - \bar{I}_{p2} = (12 \angle -41.41^{\circ}) - (2.035 \angle 5.8^{\circ})$
$\bar{I}_{p1} = (8.99 - j7.94) - (2.02 + j0.206) = 6.97 - j8.146 \approx 10.72 \angle -49.4^{\circ}$ A.

Impedance $\bar{Z}_{p1} = \bar{V}_p / \bar{I}_{p1} = (40.7 \angle -84.2^{\circ}) / (10.72 \angle -49.4^{\circ}) \approx 3.8 \angle -34.8^{\circ} \, \Omega$.
$\bar{Z}_{p1} = 3.8 (\cos(-34.8^{\circ}) + j\sin(-34.8^{\circ})) \approx 3.12 - j2.17 \, \Omega$.
Comparing with $\bar{Z}_{p1} = R_1 - jX_1$:
$R_1 \approx 3.12 \, \Omega$, $X_1 \approx 2.17 \, \Omega$.

---
### Example 15: Series-Parallel Analysis (Known Current)
In the circuit shown, what voltage of 50Hz frequency is to be applied across A & B that will cause a current of 10A to flow in the capacitor ($398\mu F$).

**Solution:**
Calculate reactances at $f=50$ Hz:
Branch 1: $X_{L1} = 2\pi(50)(0.0191) \approx 6 \, \Omega$. $\bar{Z}_1 = 5+j6 \, \Omega$.
Branch 2: $X_{C2} = 1 / (2\pi(50)(398 \times 10^{-6})) \approx 8 \, \Omega$. $\bar{Z}_2 = 7-j8 \, \Omega$.
Branch 3: $X_{L3} = 2\pi(50)(0.0318) \approx 10 \, \Omega$. $\bar{Z}_3 = 8+j10 \, \Omega$.

Current in capacitor branch (Branch 2) is given as 10A. Let this be the reference: $\bar{I}_2 = 10 \angle 0^{\circ}$ A.
Voltage across parallel combination $\bar{V}_{AC} = \bar{I}_2 \bar{Z}_2 = (10 \angle 0^{\circ})(7-j8)$
$\bar{V}_{AC} = 10 \times (10.63 \angle -48.8^{\circ}) = 106.3 \angle -48.8^{\circ}$ V.
Current in Branch 1: $\bar{I}_1 = \bar{V}_{AC} / \bar{Z}_1 = (106.3 \angle -48.8^{\circ}) / (5+j6)$
$\bar{Z}_1 = 7.81 \angle 50.2^{\circ}$.
$\bar{I}_1 = (106.3 \angle -48.8^{\circ}) / (7.81 \angle 50.2^{\circ}) \approx 13.61 \angle -99.0^{\circ}$ A.
Total supply current $\bar{I}_S = \bar{I}_1 + \bar{I}_2 = (13.61 \angle -99.0^{\circ}) + (10 \angle 0^{\circ})$
$\bar{I}_S = (-2.14 - j13.44) + (10 + j0) = 7.86 - j13.44 \approx 15.57 \angle -59.7^{\circ}$ A.
Voltage across Branch 3: $\bar{V}_{CB} = \bar{I}_S \bar{Z}_3 = (15.57 \angle -59.7^{\circ})(8+j10)$
$\bar{Z}_3 = 12.8 \angle 51.3^{\circ}$.
$\bar{V}_{CB} = (15.57 \angle -59.7^{\circ})(12.8 \angle 51.3^{\circ}) \approx 199.3 \angle -8.4^{\circ}$ V.
Total Applied Voltage $\bar{V}_{AB} = \bar{V}_{AC} + \bar{V}_{CB} = (106.3 \angle -48.8^{\circ}) + (199.3 \angle -8.4^{\circ})$
$\bar{V}_{AB} = (69.9 - j79.9) + (197.3 - j29.2) = 267.2 - j109.1 \approx 288.6 \angle -22.2^{\circ}$ V.
The required voltage magnitude is approx 288.6 V.

---
### Example 16: Series-Parallel Power Analysis
Loads connected in parallel: 15kW heating, 40kVA motor @ 0.6 lag, 20kW load @ 0.8 lag. Find total P, Q, S, pf.

**Solution:**
![](Examples-6.png)
Treat each load separately using power triangles.
Load 1 (Heating): $P_1 = 15$ kW, $Q_1 = 0$ kVAR (Resistive, pf=1).
Load 2 (Motor): $S_2 = 40$ kVA, $pf_2 = 0.6$ lag.
$P_2 = S_2 \cos \phi_2 = 40 \times 0.6 = 24$ kW.
$\phi_2 = \arccos(0.6) \approx 53.1^{\circ}$.
$Q_2 = S_2 \sin \phi_2 = 40 \times \sin(53.1^{\circ}) = 40 \times 0.8 = 32$ kVAR (inductive).
Load 3 (Load): $P_3 = 20$ kW, $pf_3 = 0.8$ lag.
$S_3 = P_3 / \cos \phi_3 = 20 / 0.8 = 25$ kVA.
$\phi_3 = \arccos(0.8) \approx 36.9^{\circ}$.
$Q_3 = S_3 \sin \phi_3 = 25 \times \sin(36.9^{\circ}) = 25 \times 0.6 = 15$ kVAR (inductive).

Total Powers: Add powers algebraically.
Total Active Power $P_T = P_1 + P_2 + P_3 = 15 + 24 + 20 = 59$ kW.
Total Reactive Power $Q_T = Q_1 + Q_2 + Q_3 = 0 + 32 + 15 = 47$ kVAR (inductive).
Total Apparent Power $S_T = \sqrt{P_T^2 + Q_T^2} = \sqrt{59^2 + 47^2} = \sqrt{3481 + 2209} = \sqrt{5690} \approx 75.43$ kVA.

Overall Power Factor $pf_T = P_T / S_T = 59 / 75.43 \approx 0.782$. Since $Q_T$ is positive (inductive), the overall pf is $0.782$ Lagging.

---
### Example 17: Power Factor Correction (Basic)
Single phase motor (400V, 50Hz) takes 31.7A at 0.7 lag pf. Find C to raise pf to 0.9 lag.

**Solution:**
![](Examples-9.png)
Initial state (Motor only):
$V = 400$ V, $I_m = 31.7$ A, $\cos \phi_m = 0.7$ lag.
$\phi_m = \arccos(0.7) \approx 45.57^{\circ}$.
$\sin \phi_m \approx 0.714$.
Active component of $I_m$: $I_{active} = I_m \cos \phi_m = 31.7 \times 0.7 = 22.19$ A.
Reactive component of $I_m$: $I_{reactive, m} = I_m \sin \phi_m = 31.7 \times 0.714 \approx 22.63$ A (lagging).

Final state (Motor + Capacitor):
Desired pf $\cos \phi = 0.9$ lag.
$\phi = \arccos(0.9) \approx 25.84^{\circ}$.
$\sin \phi \approx 0.436$.
Total active component $I_{active, total} = I_{active} = 22.19$ A.
Total current magnitude $I = I_{active, total} / \cos \phi = 22.19 / 0.9 \approx 24.66$ A.
Total reactive component $I_{reactive, total} = I \sin \phi = 24.66 \times 0.436 \approx 10.75$ A (lagging).

Capacitor current $I_C = I_{reactive, m} - I_{reactive, total} = 22.63 - 10.75 = 11.88$ A (leading).
Capacitive Reactance $X_C = V / I_C = 400 / 11.88 \approx 33.67 \, \Omega$.
$C = 1 / (2\pi f X_C) = 1 / (2\pi (50)(33.67)) \approx 94.5 \times 10^{-6}$ F $= 94.5 \, \mu F$.

---
### Example 18: Power Factor Correction (Power Method)
Inductive load $P=2.5$ kW @ 0.71 lag pf. $V=230$ V, 50 Hz. Find C to raise pf to 0.866 lag.

Case 1: Load only
![](Examples-7.png)

Case 2: Load + Capacitor

![](Examples-8.png)
**Solution:**
Initial state:
$P = 2500$ W, $\cos \phi_1 = 0.71$ lag.
$\phi_1 = \arccos(0.71) \approx 44.76^{\circ}$.
$\tan \phi_1 \approx 0.991$.
Initial Reactive Power $Q_1 = P \tan \phi_1 = 2500 \times 0.991 \approx 2477.5$ VAR (inductive).

Final state:
$P = 2500$ W, $\cos \phi_2 = 0.866$ lag.
$\phi_2 = \arccos(0.866) = 30^{\circ}$.
$\tan \phi_2 = \tan(30^{\circ}) \approx 0.577$.
Final Reactive Power $Q_2 = P \tan \phi_2 = 2500 \times 0.577 \approx 1442.5$ VAR (inductive).

Reactive power to be supplied by capacitor:
$Q_C = Q_1 - Q_2 = 2477.5 - 1442.5 = 1035$ VAR.

Capacitance:
$Q_C = V^2 / X_C = V^2 \omega C$.
$1035 = (230)^2 \times (2\pi \times 50) \times C$.
$C = 1035 / (52900 \times 100\pi) \approx 62.4 \times 10^{-6}$ F $= 62.4 \, \mu F$.

***
# [Back](../Electrical.md)