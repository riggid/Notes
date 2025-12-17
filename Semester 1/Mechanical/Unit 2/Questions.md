---
dg-publish: true
---

# [[../Mechanical|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***
# Unit 2: Q&A and Worked Problems

***
## AC Fundamentals & Phasors
***

### 1. Draw one cycle of a sinusoidal voltage waveform and indicate: i) Positive zero crossing ii) Negative zero crossing iii) Positive peak iv) Negative peak.

#### Solution:

* **(i) Positive zero crossing:** The point where the waveform crosses the time axis from negative to positive voltage (usually at $t=0$ or $\theta=0$ for $V_m \sin(\omega t)$).
* **(ii) Negative zero crossing:** The point where the waveform crosses the time axis from positive to negative voltage (usually at $t=T/2$ or $\theta=\pi$).
* **(iii) Positive peak:** The point where the waveform reaches its maximum positive value, $V_m$ (usually at $t=T/4$ or $\theta=\pi/2$).
* **(iv) Negative peak:** The point where the waveform reaches its maximum negative value, $-V_m$ (usually at $t=3T/4$ or $\theta=3\pi/2$).

---
### 2. A sinusoidal current (50Hz) has $I_m = 9.2$A. Find its value at i) 0.002s after positive zero crossing ii) 0.0045s after positive maximum. Sketch.

#### Solution:
$\omega = 2\pi f = 100\pi$ rad/s.
Assume positive zero crossing is at $t=0$. The equation is $i(t) = 9.2 \sin(100\pi t)$ A.

i) At $t = 0.002$ s:
   $i(0.002) = 9.2 \sin(100\pi \times 0.002) = 9.2 \sin(0.2\pi \text{ rad})$
   $0.2\pi \text{ rad} = 36^{\circ}$.
   $i(0.002) = 9.2 \sin(36^{\circ}) \approx 9.2 \times 0.5878 \approx 5.41$ A.

ii) Positive maximum occurs at $t = T/4 = (1/50)/4 = 1/200 = 0.005$ s.
   We need the value at $t = 0.005 + 0.0045 = 0.0095$ s.
   $i(0.0095) = 9.2 \sin(100\pi \times 0.0095) = 9.2 \sin(0.95\pi \text{ rad})$
   $0.95\pi \text{ rad} = 171^{\circ}$.
   $i(0.0095) = 9.2 \sin(171^{\circ}) \approx 9.2 \times 0.1564 \approx 1.44$ A.

Sketch:

(Draw a sine wave with peak 9.2A, period 20ms. Mark $t=2$ms and show $i \approx 5.41$A. Mark $t=9.5$ms and show $i \approx 1.44$A.)

---
### 3. Discuss complex number conversion: i) Rectangular to polar ii) Polar to Rectangular.

#### Solution:
i) **Rectangular to Polar Conversion:**
   Given a complex number in rectangular form $Z = A + jB$.
   The polar form is $Z = r \angle \theta$.
   Magnitude: $r = \sqrt{A^2 + B^2}$.
   Angle: $\theta = \arctan(\frac{B}{A})$. (Adjust quadrant based on signs of A and B).

ii) **Polar to Rectangular Conversion:**
   Given a complex number in polar form $Z = r \angle \theta$.
   The rectangular form is $Z = A + jB$.
   Real Part: $A = r \cos \theta$.
   Imaginary Part: $B = r \sin \theta$.

---
### 4. Given $v(t)=200\cos(100\pi t-60^{\circ})$ V. Obtain phasor form in rectangular and polar.

#### Solution:
First, convert to standard sine form:
$v(t) = 200 \cos(100\pi t - 60^{\circ}) = 200 \sin(100\pi t - 60^{\circ} + 90^{\circ})$
$v(t) = 200 \sin(100\pi t + 30^{\circ})$ V.

Peak value $V_m = 200$ V.
RMS value $V = V_m / \sqrt{2} = 200/\sqrt{2} \approx 141.4$ V.
Phase angle $\phi = 30^{\circ}$.

**Polar Form:**
$\bar{V} = V \angle \phi = \frac{200}{\sqrt{2}} \angle 30^{\circ}$ V $\approx 141.4 \angle 30^{\circ}$ V.

**Rectangular Form:**
$A = V \cos \phi = (200/\sqrt{2}) \cos 30^{\circ} \approx 141.4 \times 0.866 \approx 122.5$ V.
$B = V \sin \phi = (200/\sqrt{2}) \sin 30^{\circ} \approx 141.4 \times 0.5 \approx 70.7$ V.
$\bar{V} = A + jB \approx (122.5 + j70.7)$ V.

---
### 5. Four generators $e_1=20\sin\omega t$, $e_2=40\sin(\omega t+\pi/2)$, $e_3=30\sin(\omega t-\pi/6)$, $e_4=10\sin(\omega t-\pi/3)$ are in series. Find resultant EMF (phasor and instantaneous) and its phase relative to $e_2$.

#### Solution:
Convert to phasors (RMS values):
$\bar{E}_1 = (20/\sqrt{2}) \angle 0^{\circ} \approx 14.14 \angle 0^{\circ} = 14.14 + j0$.
$\bar{E}_2 = (40/\sqrt{2}) \angle 90^{\circ} \approx 28.28 \angle 90^{\circ} = 0 + j28.28$.
$\bar{E}_3 = (30/\sqrt{2}) \angle -30^{\circ} \approx 21.21 \angle -30^{\circ} = 18.37 - j10.61$.
$\bar{E}_4 = (10/\sqrt{2}) \angle -60^{\circ} \approx 7.07 \angle -60^{\circ} = 3.54 - j6.12$.

Resultant Phasor $\bar{E} = \bar{E}_1 + \bar{E}_2 + \bar{E}_3 + \bar{E}_4$.
$\bar{E} = (14.14 + 0 + 18.37 + 3.54) + j(0 + 28.28 - 10.61 - 6.12)$
$\bar{E} = 36.05 + j11.55$ V.

Convert to Polar Form:
Magnitude $|\bar{E}| = \sqrt{36.05^2 + 11.55^2} \approx \sqrt{1299.6 + 133.4} \approx \sqrt{1433} \approx 37.85$ V (RMS).
Angle $\angle \bar{E} = \arctan(11.55 / 36.05) \approx 17.76^{\circ}$.
Resultant EMF Phasor: $\bar{E} \approx 37.85 \angle 17.76^{\circ}$ V.

Instantaneous Resultant EMF:
Peak value $E_m = 37.85 \times \sqrt{2} \approx 53.53$ V.
$e(t) = 53.53 \sin(\omega t + 17.76^{\circ})$ V.

Maximum value of resultant EMF is $E_m \approx 53.53$ V.

Phase relative to $e_2$:
$\angle \bar{E} = 17.76^{\circ}$. $\angle \bar{E}_2 = 90^{\circ}$.
Phase difference = $\angle \bar{E} - \angle \bar{E}_2 = 17.76^{\circ} - 90^{\circ} = -72.24^{\circ}$.
The resultant EMF lags $e_2$ by $72.24^{\circ}$.

---
### 6. Represent in phasor form: i) $v_1(t)=200\sin(100\pi t+60^{\circ})$ V ii) $v_2(t)=300\cos(100\pi t-30^{\circ})$ V. Comment on phase relation & draw phasor diagram.

#### Solution:
i) $v_1(t) = 200 \sin(100\pi t + 60^{\circ})$.
   $V_{m1}=200$. $V_1 = 200/\sqrt{2}$. $\phi_1 = 60^{\circ}$.
   $\bar{V}_1 = \frac{200}{\sqrt{2}} \angle 60^{\circ}$ V.

ii) $v_2(t) = 300 \cos(100\pi t - 30^{\circ})$. Convert to sine:
   $v_2(t) = 300 \sin(100\pi t - 30^{\circ} + 90^{\circ}) = 300 \sin(100\pi t + 60^{\circ})$.
   $V_{m2}=300$. $V_2 = 300/\sqrt{2}$. $\phi_2 = 60^{\circ}$.
   $\bar{V}_2 = \frac{300}{\sqrt{2}} \angle 60^{\circ}$ V.

Phase Relation: Both voltages have the same phase angle ($60^{\circ}$). They are **in phase**.

Phasor Diagram:

(Draw both phasors $\bar{V}_1$ and $\bar{V}_2$ at an angle of $60^{\circ}$ counter-clockwise from the positive real axis. $\bar{V}_2$ should be longer than $\bar{V}_1$ by a factor of $300/200 = 1.5$.)

---
### 7. A 50Hz sinusoidal voltage has $V_m = 200\sqrt{2}$ V. At what time measured from a positive maximum value will the instantaneous voltage be 141.4 V?.

#### Solution:
The voltage equation relative to its positive maximum ($t=0$ corresponds to max value) is $v(t) = V_m \cos(\omega t)$.
Here $V_m = 200\sqrt{2}$. $\omega = 2\pi f = 100\pi$.
$v(t) = 200\sqrt{2} \cos(100\pi t)$.

We want to find $t$ when $v(t) = 141.4$ V. Note that $141.4 \approx 200$. Let's assume the question meant $141.4 \approx V_m/\sqrt{2} = 200$ V instead, as $141.4$V seems arbitrary otherwise. Let's use 200V.
$200 = 200\sqrt{2} \cos(100\pi t)$.
$\cos(100\pi t) = \frac{200}{200\sqrt{2}} = \frac{1}{\sqrt{2}}$.

$100\pi t = \arccos(1/\sqrt{2})$.
The principal value is $100\pi t = \pi/4$ radians (or $45^{\circ}$).
$t = \frac{\pi/4}{100\pi} = \frac{1}{400}$ seconds.

$t = 1/400 = 0.0025$ s or $2.5$ ms.
(If using 141.4V: $\cos(100\pi t) \approx 0.5 \implies 100\pi t = \pi/3 \implies t = 1/300 \approx 3.33$ ms).

---
## Basic AC Circuits (R, L, C)
---

### 8. A pure inductor $L=100$mH is across $v(t)=100\sin(100\pi t)$ V. Find i) $X_L$ ii) $i(t)$.

#### Solution:
$V_m=100$ V, $\omega=100\pi$ rad/s, $L=100 \times 10^{-3}$ H $= 0.1$ H.

i) Inductive Reactance:
   $X_L = \omega L = (100\pi)(0.1) = 10\pi \approx 31.4 \, \Omega$.

ii) Instantaneous Current:
   Current lags voltage by $90^{\circ}$ in an inductor.
   Peak current $I_m = V_m / X_L = 100 / (10\pi) = 10/\pi \approx 3.18$ A.
   $i(t) = I_m \sin(\omega t - 90^{\circ}) = \frac{10}{\pi} \sin(100\pi t - 90^{\circ})$ A.
   $i(t) \approx 3.18 \sin(100\pi t - 90^{\circ})$ A or $-3.18 \cos(100\pi t)$ A.

---
### 9. A Capacitor $C=100\mu F$ is across $v(t)=100\sin(100\pi t)$ V. Find i) $X_C$ ii) Impedance iii) $i(t)$. Draw phasor diagram.

#### Solution:
$V_m=100$ V, $\omega=100\pi$ rad/s, $C=100 \times 10^{-6}$ F.

i) Capacitive Reactance:
   $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(100 \times 10^{-6})} = \frac{1}{0.01\pi} \approx 31.83 \, \Omega$.

ii) Impedance:
   $\bar{Z}_C = -jX_C = -j31.83 \, \Omega$.

iii) Instantaneous Current:
   Current leads voltage by $90^{\circ}$ in a capacitor.
   Peak current $I_m = V_m / X_C = 100 / 31.83 \approx 3.14$ A.
   $i(t) = I_m \sin(\omega t + 90^{\circ}) = 3.14 \sin(100\pi t + 90^{\circ})$ A.

Phasor Diagram:
   $\bar{V} = (100/\sqrt{2}) \angle 0^{\circ}$. $\bar{I} = (3.14/\sqrt{2}) \angle 90^{\circ}$.
   

---
## Series AC Circuits
---

### 10. Find $i(t)$ for $v(t)=283\sin(100\pi t)$ V applied to a coil $R=50\Omega, L=0.159H$. Find P, Q, S using power triangle.

#### Solution:
$V_m = 283$ V, $\omega = 100\pi$ rad/s.
$R=50 \, \Omega$.
$X_L = \omega L = (100\pi)(0.159) \approx 50 \, \Omega$.
Impedance $\bar{Z} = R + jX_L = 50 + j50 \, \Omega$.
In polar form: $\bar{Z} = \sqrt{50^2+50^2} \angle \arctan(50/50) = 50\sqrt{2} \angle 45^{\circ} \, \Omega \approx 70.7 \angle 45^{\circ} \, \Omega$.

Instantaneous Current $i(t)$:
Peak Current $I_m = V_m / |Z| = 283 / (50\sqrt{2}) \approx 283 / 70.7 \approx 4.0$ A.
Current lags voltage by the impedance angle $\phi = 45^{\circ}$.
$i(t) = I_m \sin(\omega t - \phi) = 4 \sin(100\pi t - 45^{\circ})$ A.

Powers:
RMS Voltage $V = V_m/\sqrt{2} = 283/\sqrt{2} \approx 200$ V.
RMS Current $I = I_m/\sqrt{2} = 4/\sqrt{2} \approx 2.83$ A.
Phase Angle $\phi = 45^{\circ}$.

Apparent Power $S = VI = (200)(2.83) = 566$ VA.
Active Power $P = VI \cos \phi = S \cos 45^{\circ} = 566 \times (1/\sqrt{2}) \approx 400$ W.
Reactive Power $Q = VI \sin \phi = S \sin 45^{\circ} = 566 \times (1/\sqrt{2}) \approx 400$ VAR.

Power Triangle:

(Right triangle with base P=400W, height Q=400VAR, hypotenuse S=566VA, angle $\phi=45^{\circ}$).

---
### 11. Power dissipated in series RC circuit is 25W. $I=0.4$A, $V=230$V, $f=50$Hz. Find C.

#### Solution:
Active Power $P = 25$ W. RMS Current $I=0.4$ A. RMS Voltage $V=230$ V.
$P = I^2 R \implies R = P / I^2 = 25 / (0.4)^2 = 25 / 0.16 = 156.25 \, \Omega$.
Magnitude of total impedance $|Z| = V / I = 230 / 0.4 = 575 \, \Omega$.
For series RC, $|Z|^2 = R^2 + X_C^2$.
$X_C^2 = |Z|^2 - R^2 = 575^2 - 156.25^2 = 330625 - 24414 = 306211$.
$X_C = \sqrt{306211} \approx 553.4 \, \Omega$.
$X_C = 1 / (2\pi f C)$.
$C = 1 / (2\pi f X_C) = 1 / (2\pi (50)(553.4)) \approx 1 / (173855) \approx 5.75 \times 10^{-6}$ F $= 5.75 \, \mu F$.

---
### 12. Series RC circuit $R=10\Omega, C=100\mu F, f=50$Hz. Find expression for voltage $v(t)$ if $i(t)$ is: i) $30\sin(\omega t)$ ii) $30\sin(\omega t+45^{\circ})$ iii) $3\sin(\omega t-60^{\circ})$ iv) $3\sin(\omega t+300^{\circ})$.

#### Solution:
$\omega = 2\pi f = 100\pi$ rad/s.
$X_C = 1 / (\omega C) = 1 / (100\pi \times 100 \times 10^{-6}) = 1 / (0.01\pi) \approx 31.83 \, \Omega$.
Impedance $\bar{Z} = R - jX_C = 10 - j31.83 \, \Omega$.
Polar form: $|Z| \approx 33.36 \, \Omega$, $\angle Z \approx -72.5^{\circ}$.
$\bar{Z} \approx 33.36 \angle -72.5^{\circ} \, \Omega$.

$v(t) = V_m \sin(\omega t + \phi_v)$, $i(t) = I_m \sin(\omega t + \phi_i)$.
$V_m = I_m |Z|$, $\phi_v = \phi_i + \angle Z$.

i) $i(t) = 30 \sin(\omega t)$. $I_m=30, \phi_i=0^{\circ}$.
   $V_m = 30 \times 33.36 \approx 1001$ V.
   $\phi_v = 0^{\circ} - 72.5^{\circ} = -72.5^{\circ}$.
   $v(t) = 1001 \sin(100\pi t - 72.5^{\circ})$ V.

ii) $i(t) = 30 \sin(\omega t + 45^{\circ})$. $I_m=30, \phi_i=45^{\circ}$.
   $V_m \approx 1001$ V.
   $\phi_v = 45^{\circ} - 72.5^{\circ} = -27.5^{\circ}$.
   $v(t) = 1001 \sin(100\pi t - 27.5^{\circ})$ V.

iii) $i(t) = 3 \sin(\omega t - 60^{\circ})$. $I_m=3, \phi_i=-60^{\circ}$.
   $V_m = 3 \times 33.36 \approx 100.1$ V.
   $\phi_v = -60^{\circ} - 72.5^{\circ} = -132.5^{\circ}$.
   $v(t) = 100.1 \sin(100\pi t - 132.5^{\circ})$ V.

iv) $i(t) = 3 \sin(\omega t + 300^{\circ})$. $I_m=3, \phi_i=300^{\circ}$ (or $-60^{\circ}$).
   $V_m \approx 100.1$ V.
   $\phi_v = 300^{\circ} - 72.5^{\circ} = 227.5^{\circ}$ (or $-60^{\circ}-72.5^{\circ}=-132.5^{\circ}$).
   $v(t) = 100.1 \sin(100\pi t - 132.5^{\circ})$ V.

---
### 13. A 500W, 100V bulb is in series with C across 220V, 50Hz. Find C, supply current, pf.

#### Solution:
Bulb parameters: $P=500$W, $V_{bulb}=100$V.
Bulb Resistance $R = V_{bulb}^2 / P = 100^2 / 500 = 20 \, \Omega$.
Rated Current $I = P / V_{bulb} = 500 / 100 = 5$ A. This is the current flowing in the series circuit.

Supply Voltage $V_S = 220$ V.
Total Impedance $|Z| = V_S / I = 220 / 5 = 44 \, \Omega$.
Circuit is series RC: $|Z|^2 = R^2 + X_C^2$.
$44^2 = 20^2 + X_C^2$.
$1936 = 400 + X_C^2 \implies X_C^2 = 1536 \implies X_C \approx 39.19 \, \Omega$.

Capacitance: $C = 1 / (2\pi f X_C) = 1 / (2\pi (50)(39.19)) \approx 81.2 \, \mu F$.
Supply Current $I = 5$ A.
Power Factor $pf = R / |Z| = 20 / 44 \approx 0.455$ Leading.

---
### 14. Series RLC, $I=20$A from 200V, 50Hz. $P=500$W. Circuit is inductive. Find pf. Find L if $C=100\mu F$.

#### Solution:
i) Power Factor:
   $P = VI \cos \phi \implies 500 = (200)(20) \cos \phi \implies \cos \phi = 0.125$.
   $pf = 0.125$ Lagging.

ii) Find L:
   $P = I^2 R \implies R = 500 / (20^2) = 1.25 \, \Omega$.
   $|Z| = V / I = 200 / 20 = 10 \, \Omega$.
   $|Z|^2 = R^2 + (X_L - X_C)^2$.
   $100 = 1.25^2 + (X_L - X_C)^2 \implies (X_L - X_C)^2 = 98.4375$.
   $X_L - X_C = +\sqrt{98.4375} \approx 9.92 \, \Omega$ (since inductive).
   $X_C = 1 / (2\pi (50)(100 \times 10^{-6})) \approx 31.83 \, \Omega$.
   $X_L = 9.92 + 31.83 = 41.75 \, \Omega$.
   $L = X_L / (2\pi f) = 41.75 / (100\pi) \approx 0.1329$ H $= 132.9$ mH.

---
### 15. Choke coil across 240V AC. At 50Hz, $I=60$A. At 100Hz, $I=40$A. Find r and L of coil.

#### Solution:
A choke coil has impedance $Z = \sqrt{r^2 + (\omega L)^2}$. $V=240$ V.
Case 1: $f=50$ Hz, $\omega_1 = 100\pi$. $I_1=60$ A.
$|Z_1| = 240/60 = 4 \, \Omega$. $16 = r^2 + (100\pi L)^2$. (Eq. 1)
Case 2: $f=100$ Hz, $\omega_2 = 200\pi$. $I_2=40$ A.
$|Z_2| = 240/40 = 6 \, \Omega$. $36 = r^2 + (200\pi L)^2$. (Eq. 2)
Let $X_1 = 100\pi L$, $X_2 = 200\pi L = 2X_1$.
Eq 1: $16 = r^2 + X_1^2$.
Eq 2: $36 = r^2 + 4X_1^2$.
Subtract (1) from (2): $20 = 3X_1^2 \implies X_1 = \sqrt{20/3} \approx 2.58 \, \Omega$.
Substitute into (1): $16 = r^2 + 20/3 \implies r^2 = 16 - 20/3 = 28/3 \implies r \approx 3.06 \, \Omega$.
Find L: $L = X_1 / (100\pi) = 2.58 / (100\pi) \approx 0.0082$ H $= 8.2$ mH.
Resistance $r \approx 3.06 \, \Omega$. Inductance $L \approx 8.2$ mH.

---
### 16. Coil (pf=0.6) in series with $C=100\mu F$. Connected to 50Hz supply. $V_{coil} = V_C$. Find R and L of coil.

#### Solution:
Coil: $Z_{coil} = R + jX_L$. $pf_{coil} = 0.6$ Lag $\implies \phi_{coil} = 53.13^{\circ}$.
$\tan \phi_{coil} = X_L / R \implies X_L = R \tan(53.13^{\circ}) \approx 1.333 R$.
Capacitor: $C = 100 \times 10^{-6}$ F. $f=50$ Hz.
$X_C = 1 / (100\pi \times 100 \times 10^{-6}) \approx 31.83 \, \Omega$.
Given $V_{coil} = V_C \implies I |Z_{coil}| = I X_C \implies |Z_{coil}| = X_C$.
$|Z_{coil}| = \sqrt{R^2 + X_L^2} = \sqrt{R^2 + (1.333 R)^2} = R \sqrt{1 + 1.333^2} \approx 1.667 R$.
$1.667 R = 31.83 \implies R = 31.83 / 1.667 \approx 19.1 \, \Omega$.
$X_L = 1.333 R \approx 1.333 \times 19.1 \approx 25.46 \, \Omega$.
$L = X_L / (100\pi) = 25.46 / (100\pi) \approx 0.081$ H $= 81$ mH.
Resistance $R \approx 19.1 \, \Omega$. Inductance $L \approx 81$ mH.

---
### 17. Coil A: $V=10$V, $I=2$A, pf=0.8 lag. Coil B: $V=5$V, $I=2$A, pf=0.7 lag. Coils A & B in series. Find voltage needed for total current of 2A, and total pf.

#### Solution:
Coil A: $|Z_A| = 10/2 = 5 \, \Omega$. $\phi_A = \arccos(0.8) = 36.87^{\circ}$.
$Z_A = 5 \angle 36.87^{\circ} = 4 + j3 \, \Omega$.
Coil B: $|Z_B| = 5/2 = 2.5 \, \Omega$. $\phi_B = \arccos(0.7) = 45.57^{\circ}$.
$Z_B = 2.5 \angle 45.57^{\circ} = 1.75 + j1.785 \, \Omega$.
Series: $Z_T = Z_A + Z_B = (4+1.75) + j(3+1.785) = 5.75 + j4.785 \, \Omega$.
$|Z_T| = \sqrt{5.75^2 + 4.785^2} \approx 7.48 \, \Omega$.
Voltage needed for $I_T=2$A: $V_T = I_T |Z_T| = 2 \times 7.48 = 14.96$ V.
Total Phase Angle $\phi_T = \angle Z_T = \arctan(4.785 / 5.75) \approx 39.7^{\circ}$.
Total Power Factor $pf_T = \cos \phi_T \approx \cos(39.7^{\circ}) \approx 0.769$ Lagging.

---
## Parallel AC Circuits & Admittance
---

### 18. Parallel RC across 200V, 50Hz. Supply $I=10$A, Resistor $I_R=6$A. Find i) $I_C$ ii) R & C iii) P, Q, S iv) pf.

#### Solution:
Let $\bar{V} = 200 \angle 0^{\circ}$ V. $\bar{I}_R = 6 \angle 0^{\circ}$ A. $\bar{I}_C = I_C \angle 90^{\circ}$. $\bar{I} = \bar{I}_R + \bar{I}_C$. $|\bar{I}|=10$A.
$10^2 = |\bar{I}_R|^2 + |\bar{I}_C|^2 \implies 100 = 6^2 + I_C^2 \implies I_C = 8$ A.
i) $I_C = 8$ A.
ii) $R = V/I_R = 200/6 = 33.33 \, \Omega$. $X_C = V/I_C = 200/8 = 25 \, \Omega$. $C = 1/(100\pi X_C) \approx 127.3 \, \mu F$.
iii) $P = VI_R = 200 \times 6 = 1200$ W. $Q = -VI_C = -200 \times 8 = -1600$ VAR. $S = VI = 200 \times 10 = 2000$ VA.
iv) $pf = P/S = 1200/2000 = 0.6$. Current leads voltage, so $pf=0.6$ Lead.

---
### 19. Admittance $Y = (0.05 - j0.08)$ S. Find R and $X_L$ if they are a) parallel b) series.

#### Solution:
a) Parallel: $\bar{Y} = G - jB_L = 0.05 - j0.08$.
   $R = 1/G = 1/0.05 = 20 \, \Omega$. $X_L = 1/B_L = 1/0.08 = 12.5 \, \Omega$.
b) Series: $\bar{Z} = 1/\bar{Y} = 1 / (0.05 - j0.08) = \frac{0.05 + j0.08}{0.05^2 + 0.08^2} = \frac{0.05 + j0.08}{0.0089}$.
   $\bar{Z} \approx 5.62 + j8.99 \, \Omega$. Series $R \approx 5.62 \, \Omega$, $X_L \approx 8.99 \, \Omega$.

---
### 20. Parallel RL circuit has $R=4\Omega, X_L=3\Omega$. Find series equivalent.

#### Solution:
Parallel Impedance $\bar{Z}_p = \frac{R \times (jX_L)}{R+jX_L} = \frac{4 \times j3}{4+j3} = \frac{j12(4-j3)}{16+9} = \frac{36+j48}{25}$.
$\bar{Z}_p = 1.44 + j1.92 \, \Omega$.
Series equivalent: $R_s = 1.44 \, \Omega$, $X_{Ls} = 1.92 \, \Omega$.

---
### 21. Circuit: Series C with parallel R=6$\Omega$, $X_L=12\Omega$. $f=50$Hz. Find C for $V$ and $I$ in phase. 

#### Solution:
Impedance of parallel part: $Z_p = \frac{6 \times j12}{6 + j12} = \frac{j72(6-j12)}{36+144} = \frac{864+j432}{180} = 4.8 + j2.4 \, \Omega$.
Total Impedance $Z_T = Z_C + Z_p = -jX_C + 4.8 + j2.4 = 4.8 + j(2.4 - X_C)$.
For $V$ and $I$ in phase, $\text{Im}(Z_T) = 0 \implies 2.4 - X_C = 0 \implies X_C = 2.4 \, \Omega$.
$C = 1 / (2\pi f X_C) = 1 / (100\pi \times 2.4) \approx 1326 \, \mu F$.

---
### 22. Parallel circuit: Branch A (R=500$\Omega$, L=0.1H), Branch B (R=45$\Omega$, C=100$\mu F$). $V=230$V, 50Hz. Find total I, P, pf.

#### Solution:
$\omega = 100\pi$.
Branch A: $X_{LA} = 100\pi(0.1) \approx 31.4 \, \Omega$. $\bar{Z}_A = 500 + j31.4 \, \Omega$. $\bar{Y}_A = 1/\bar{Z}_A \approx 0.00199 - j0.000125$ S.
Branch B: $X_{CB} = 1/(100\pi \times 100 \times 10^{-6}) \approx 31.8 \, \Omega$. $\bar{Z}_B = 45 - j31.8 \, \Omega$. $\bar{Y}_B = 1/\bar{Z}_B \approx 0.0165 + j0.0117$ S.
Total Admittance $\bar{Y}_T = \bar{Y}_A + \bar{Y}_B = 0.01849 + j0.01158 \approx 0.0218 \angle 32.0^{\circ}$ S.
Total Current $\bar{I} = \bar{V} \bar{Y}_T = (230 \angle 0^{\circ})(0.0218 \angle 32.0^{\circ}) \approx 5.01 \angle 32.0^{\circ}$ A. ($I=5.01$A).
Power Factor $pf = \cos(\angle V - \angle I) = \cos(0 - 32.0^{\circ}) = \cos(-32^{\circ}) \approx 0.848$ Leading.
Total Power $P = VI \cos \phi = (230)(5.01)(0.848) \approx 977$ W.

---
### 23. Two impedances $Z_1, Z_2$ in parallel. Branch 1: $I_1=16$A (leading), $R_1=5\Omega$. Branch 2: $I_2$ lagging at pf=0.8. Total $P=5$kW. $V=(100+j200)$V. Find branch currents and total current.

#### Solution:
$\bar{V} = 100+j200 = 223.6 \angle 63.4^{\circ}$ V.
Branch 1: $P_1 = I_1^2 R_1 = 16^2 \times 5 = 1280$ W. $|Z_1|=|\bar{V}|/I_1 = 223.6/16 \approx 13.98 \Omega$. $X_{C1}=\sqrt{|Z_1|^2-R_1^2} \approx 13.05 \Omega$. $\bar{Z}_1 = 5-j13.05 = 13.98 \angle -69.0^{\circ} \Omega$. $\bar{I}_1 = \bar{V}/\bar{Z}_1 = (223.6 \angle 63.4^{\circ})/(13.98 \angle -69.0^{\circ}) = 16.0 \angle 132.4^{\circ}$ A.
Branch 2: $P_2 = P_T - P_1 = 5000-1280 = 3720$ W. $pf_2=0.8$ lag ($\phi_2=36.87^\circ$). $P_2 = V I_2 \cos\phi_2 \implies 3720 = (223.6)I_2(0.8) \implies I_2 \approx 20.79$ A. $\angle \bar{I}_2 = \angle \bar{V} - \phi_2 = 63.4^{\circ} - 36.87^{\circ} = 26.53^{\circ}$. $\bar{I}_2 = 20.79 \angle 26.53^{\circ}$ A.
Total Current $\bar{I}_T = \bar{I}_1 + \bar{I}_2 = (16 \angle 132.4^{\circ}) + (20.79 \angle 26.53^{\circ}) = (-10.79+j11.80) + (18.59+j9.29) = 7.80 + j21.09 \approx 22.49 \angle 69.7^{\circ}$ A.

---
### 24. Coil ($R=4\Omega, L=1H$) parallel with (similar coil series C series R). Find C and R for branch currents equal magnitude, $90^{\circ}$ phase difference. $f=50$Hz.

#### Solution:
$X_L = 100\pi(1) \approx 314 \Omega$. $\bar{Z}_{coil} = 4 + j314 \Omega$. $|\bar{Z}_{coil}| \approx 314.0 \Omega$. $\angle Z_{coil} \approx 89.27^\circ$.
Branch 1: $\bar{Z}_1 = 4 + j314 \Omega$.
Branch 2: $\bar{Z}_2 = (4+R) + j(314 - X_C)$.
$|\bar{I}_1|=|\bar{I}_2| \implies |\bar{Z}_1|=|\bar{Z}_2| \approx 314.0$.
Phase diff = $\angle I_1 - \angle I_2 = (\angle V - \angle Z_1) - (\angle V - \angle Z_2) = \angle Z_2 - \angle Z_1 = \pm 90^\circ$.
$\angle Z_2 = \angle Z_1 \pm 90^\circ = 89.27^\circ \pm 90^\circ$. Only $\angle Z_2 = -0.73^\circ$ is physically possible.
$\bar{Z}_2 = 314.0 \angle -0.73^{\circ} \approx 313.97 - j3.99 \Omega$.
Comparing with $\bar{Z}_2 = (4+R) + j(314 - X_C)$:
$4+R \approx 313.97 \implies R \approx 310 \Omega$.
$314 - X_C \approx -3.99 \implies X_C \approx 318.0 \Omega$.
$C = 1/(100\pi X_C) \approx 10.0 \mu F$.
$R \approx 310 \, \Omega$, $C \approx 10 \, \mu F$.

---
## Power Factor Improvement
---

### 25. List the advantages of power factor improvement.

#### Solution:
* Reduced Equipment Size/Cost (generators, transformers, cables).
* Increased System Efficiency (lower $I^2R$ losses).
* Improved Voltage Regulation (smaller voltage drops).
* Increased System Capacity (more active power delivery possible).
* Avoidance of Penalties from utility companies.

---
### 26. Explain with a phasor diagram how connecting a capacitor parallel to a lagging load improves overall power factor.

#### Solution:
An inductive load draws current $\bar{I}_L$ lagging voltage $\bar{V}$ by $\phi_L$. A parallel capacitor draws current $\bar{I}_C$ leading $\bar{V}$ by $90^{\circ}$. The total current $\bar{I}_T = \bar{I}_L + \bar{I}_C$. The leading reactive component of $\bar{I}_C$ cancels some or all of the lagging reactive component of $\bar{I}_L$. This reduces the angle $\phi_T$ between $\bar{V}$ and $\bar{I}_T$ compared to $\phi_L$. Since $pf = \cos\phi$, reducing the angle increases the power factor towards unity and usually reduces the total current magnitude.


---
### 27. 4kW inductive load, 200V, 50Hz, 0.8 Lag pf. i) Find P, Q, S. ii) Find C in parallel for unity pf.

#### Solution:
i) $P = 4$ kW. $pf = 0.8$ Lag $\implies \cos\phi = 0.8$, $\sin\phi=0.6$.
   $S = P / \cos\phi = 4 / 0.8 = 5$ kVA.
   $Q = S \sin\phi = 5 \times 0.6 = 3$ kVAR (inductive).
ii) For unity pf, capacitor must supply $Q_C = Q = 3000$ VAR.
   $Q_C = V^2 \omega C \implies 3000 = (200)^2 (100\pi) C$.
   $C = 3000 / (40000 \times 100\pi) \approx 238.7 \, \mu F$.

---
### 28. Load across 200V, 50Hz: Load 1 (2kW Heating), Load 2 (4kW motor @ 0.8 Lag pf), Load 3 (Capacitive load 5kVA @ 0.9 Lead pf). Find i) Total P, Q, S ii) Overall pf iii) kVAR rating of C for unity pf.

#### Solution:
Load 1: $P_1 = 2$ kW, $Q_1 = 0$ kVAR.
Load 2: $P_2 = 4$ kW, $pf_2=0.8$ Lag. $Q_2 = P_2 \tan(\arccos 0.8) = 4 \times 0.75 = 3$ kVAR.
Load 3: $S_3 = 5$ kVA, $pf_3=0.9$ Lead. $P_3 = S_3 pf_3 = 5 \times 0.9 = 4.5$ kW. $Q_3 = -S_3 \sin(\arccos 0.9) = -5 \times 0.436 = -2.18$ kVAR.

i) Totals: $P_T = 2+4+4.5 = 10.5$ kW. $Q_T = 0+3-2.18 = 0.82$ kVAR. $S_T = \sqrt{10.5^2 + 0.82^2} \approx 10.53$ kVA.
ii) Overall pf $= P_T / S_T = 10.5 / 10.53 \approx 0.997$ Lagging (since $Q_T>0$).
iii) kVAR for Unity pf: Need to supply $Q_C = -Q_T = -0.82$ kVAR. Capacitor rating is $0.82$ kVAR.

***
# [[../Mechanical|Back]]