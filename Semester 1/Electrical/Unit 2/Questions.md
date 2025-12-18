---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
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
Polar form: $|Z| = \sqrt{10^2 + (-31.83)^2} \approx \sqrt{100 + 1013} \approx 33.36 \, \Omega$.
$\angle Z = \arctan(-31.83 / 10) \approx -72.5^{\circ}$.
$\bar{Z} \approx 33.36 \angle -72.5^{\circ} \, \Omega$.

Voltage $\bar{V} = \bar{I} \bar{Z}$. $v(t) = V_m \sin(\omega t + \phi_v)$.
Current $i(t) = I_m \sin(\omega t + \phi_i)$. Phasor $\bar{I} = (I_m/\sqrt{2}) \angle \phi_i$.
Voltage Phasor $\bar{V} = (\bar{I})(\bar{Z}) = [(I_m/\sqrt{2}) \angle \phi_i] \times [|Z| \angle \angle Z]$.
$\bar{V} = (I_m |Z| / \sqrt{2}) \angle (\phi_i + \angle Z)$.
Peak Voltage $V_m = I_m |Z|$. Voltage phase $\phi_v = \phi_i + \angle Z$.

i) $i(t) = 30 \sin(\omega t)$. $I_m=30, \phi_i=0^{\circ}$.
   $V_m = 30 \times 33.36 \approx 1001$ V.
   $\phi_v = 0^{\circ} + (-72.5^{\circ}) = -72.5^{\circ}$.
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
Bulb Resistance $R = V_{bulb}^2 / P = 100^2 / 500 = 10000 / 500 = 20 \, \Omega$.
Rated Current $I = P / V_{bulb} = 500 / 100 = 5$ A. This is the current flowing in the series circuit.

Supply Voltage $V_S = 220$ V.
Total Impedance $|Z| = V_S / I = 220 / 5 = 44 \, \Omega$.
Circuit is series RC: $\bar{Z} = R - jX_C$. $|Z|^2 = R^2 + X_C^2$.
$44^2 = 20^2 + X_C^2$.
$1936 = 400 + X_C^2 \implies X_C^2 = 1536 \implies X_C = \sqrt{1536} \approx 39.19 \, \Omega$.

Capacitance: $X_C = 1 / (2\pi f C)$.
$C = 1 / (2\pi f X_C) = 1 / (2\pi (50)(39.19)) \approx 1 / (12312) \approx 81.2 \times 10^{-6}$ F $= 81.2 \, \mu F$.

Supply Current $I = 5$ A.

Power Factor $pf = R / |Z| = 20 / 44 \approx 0.455$. Since it's an RC circuit, the pf is Leading. $pf = 0.455$ Lead.

---
### 14. Series RLC, $I=20$A from 200V, 50Hz. $P=500$W. Circuit is inductive. Find pf. Find L if $C=100\mu F$.

#### Solution:
i) Power Factor:
   $P = VI \cos \phi \implies 500 = (200)(20) \cos \phi$.
   $500 = 4000 \cos \phi \implies \cos \phi = 500 / 4000 = 0.125$.
   Since the circuit is inductive, $pf = 0.125$ Lagging.
   Alternatively: $P = I^2 R \implies R = P / I^2 = 500 / (20^2) = 500 / 400 = 1.25 \, \Omega$.
   Total Impedance $|Z| = V / I = 200 / 20 = 10 \, \Omega$.
   $pf = R / |Z| = 1.25 / 10 = 0.125$ Lagging.

ii) Find L:
   $|Z|^2 = R^2 + (X_L - X_C)^2$.
   $10^2 = 1.25^2 + (X_L - X_C)^2$.
   $100 = 1.5625 + (X_L - X_C)^2$.
   $(X_L - X_C)^2 = 98.4375$.
   $X_L - X_C = \pm \sqrt{98.4375} \approx \pm 9.92 \, \Omega$.
   Since the circuit is inductive, $X_L > X_C$, so we take the positive value: $X_L - X_C = 9.92 \, \Omega$.

   Given $C = 100 \mu F = 100 \times 10^{-6}$ F.
   $X_C = 1 / (2\pi f C) = 1 / (2\pi (50)(100 \times 10^{-6})) = 1 / (0.01\pi) \approx 31.83 \, \Omega$.

   $X_L = 9.92 + X_C = 9.92 + 31.83 = 41.75 \, \Omega$.
   $X_L = 2\pi f L$.
   $L = X_L / (2\pi f) = 41.75 / (100\pi) \approx 0.1329$ H $= 132.9$ mH.

---
### 15. Choke coil across 240V AC. At 50Hz, $I=60$A. At 100Hz, $I=40$A. Find r and L of coil.

#### Solution:
A choke coil has resistance $r$ and inductance $L$. Impedance $Z = \sqrt{r^2 + (\omega L)^2}$.
$V=240$ V. $I = V/|Z|$.

Case 1: $f=50$ Hz, $\omega = 100\pi$. $I=60$ A.
$|Z_1| = V/I_1 = 240/60 = 4 \, \Omega$.
$4 = \sqrt{r^2 + (100\pi L)^2} \implies 16 = r^2 + (100\pi L)^2$. (Eq. 1)

Case 2: $f=100$ Hz, $\omega = 200\pi$. $I=40$ A.
$|Z_2| = V/I_2 = 240/40 = 6 \, \Omega$.
$6 = \sqrt{r^2 + (200\pi L)^2} \implies 36 = r^2 + (200\pi L)^2$. (Eq. 2)

Let $X_1 = 100\pi L$. Then $X_2 = 200\pi L = 2X_1$.
Eq 1: $16 = r^2 + X_1^2$.
Eq 2: $36 = r^2 + (2X_1)^2 = r^2 + 4X_1^2$.

Subtract Eq 1 from Eq 2:
$(36 - 16) = (r^2 + 4X_1^2) - (r^2 + X_1^2)$.
$20 = 3X_1^2 \implies X_1^2 = 20/3$.
$X_1 = \sqrt{20/3} \approx 2.58 \, \Omega$.

Substitute $X_1^2$ into Eq 1:
$16 = r^2 + 20/3 \implies r^2 = 16 - 20/3 = (48-20)/3 = 28/3$.
$r = \sqrt{28/3} \approx 3.06 \, \Omega$.

Find L: $X_1 = 100\pi L$.
$L = X_1 / (100\pi) = 2.58 / (100\pi) \approx 0.0082$ H $= 8.2$ mH.

Resistance $r \approx 3.06 \, \Omega$. Inductance $L \approx 8.2$ mH.

---
### 16. Coil (pf=0.6) in series with $C=100\mu F$. Connected to 50Hz supply. $V_{coil} = V_C$. Find R and L of coil.

#### Solution:
Let coil impedance be $Z_{coil} = R + jX_L$. $pf_{coil} = \cos \phi_{coil} = 0.6$ Lag.
$\phi_{coil} = \arccos(0.6) = 53.13^{\circ}$.
$\tan \phi_{coil} = X_L / R \implies \tan(53.13^{\circ}) = X_L / R \approx 1.333$. So $X_L = 1.333 R$.

Capacitor: $C = 100 \times 10^{-6}$ F. $f=50$ Hz.
$X_C = 1 / (2\pi f C) = 1 / (100\pi \times 100 \times 10^{-6}) = 1/(0.01\pi) \approx 31.83 \, \Omega$.

Given $V_{coil} = V_C$. Since current $I$ is the same:
$I |Z_{coil}| = I X_C$.
$|Z_{coil}| = X_C \approx 31.83 \, \Omega$.
$|Z_{coil}| = \sqrt{R^2 + X_L^2}$.
$31.83 = \sqrt{R^2 + (1.333 R)^2} = \sqrt{R^2 + 1.777 R^2} = \sqrt{2.777 R^2} = R \sqrt{2.777}$.
$R = 31.83 / \sqrt{2.777} \approx 31.83 / 1.666 \approx 19.1 \, \Omega$.

$X_L = 1.333 R = 1.333 \times 19.1 \approx 25.46 \, \Omega$.
$X_L = 2\pi f L$.
$L = X_L / (2\pi f) = 25.46 / (100\pi) \approx 0.081$ H $= 81$ mH.

Resistance $R \approx 19.1 \, \Omega$. Inductance $L \approx 81$ mH.

---
### 17. Coil A: $V=10$V, $I=2$A, pf=0.8 lag. Coil B: $V=5$V, $I=2$A, pf=0.7 lag. Coils A & B in series. Find voltage needed for total current of 2A, and total pf.

#### Solution:
Find impedances $Z_A$ and $Z_B$ (assuming the given V & I are for individual coils).
Coil A: $|Z_A| = V_A / I_A = 10 / 2 = 5 \, \Omega$.
$\phi_A = \arccos(0.8) = 36.87^{\circ}$.
$Z_A = |Z_A| \angle \phi_A = 5 \angle 36.87^{\circ} = 4 + j3 \, \Omega$. ($R_A=4, X_{LA}=3$)

Coil B: $|Z_B| = V_B / I_B = 5 / 2 = 2.5 \, \Omega$.
$\phi_B = \arccos(0.7) = 45.57^{\circ}$.
$Z_B = |Z_B| \angle \phi_B = 2.5 \angle 45.57^{\circ} = 1.75 + j1.785 \, \Omega$. ($R_B=1.75, X_{LB}=1.785$)

Coils in Series: Total Impedance $Z_T = Z_A + Z_B$.
$Z_T = (4 + j3) + (1.75 + j1.785) = 5.75 + j4.785 \, \Omega$.

Voltage needed for total current $I_T = 2$ A:
$V_T = I_T |Z_T|$.
$|Z_T| = \sqrt{5.75^2 + 4.785^2} = \sqrt{33.06 + 22.9} = \sqrt{55.96} \approx 7.48 \, \Omega$.
$V_T = 2 \times 7.48 = 14.96$ V.

Total Power Factor:
$\phi_T = \angle Z_T = \arctan(4.785 / 5.75) \approx 39.7^{\circ}$.
$pf_T = \cos \phi_T = \cos(39.7^{\circ}) \approx 0.769$. Since reactance is positive, it's Lagging.
$pf_T = 0.769$ Lag.

---
## Parallel AC Circuits & Admittance
---

### 18. Parallel RC across 200V, 50Hz. Supply $I=10$A, Resistor $I_R=6$A. Find i) $I_C$ ii) R & C iii) P, Q, S iv) pf.

#### Solution:
Let $\bar{V} = 200 \angle 0^{\circ}$ V.
$\bar{I}_R$ is in phase with $\bar{V}$. $\bar{I}_R = 6 \angle 0^{\circ}$ A.
$\bar{I}_C$ leads $\bar{V}$ by $90^{\circ}$. $\bar{I}_C = I_C \angle 90^{\circ} = jI_C$.
Total Current $\bar{I} = \bar{I}_R + \bar{I}_C = 6 + jI_C$.
Magnitude $|\bar{I}| = 10$ A.
$|\bar{I}|^2 = |\bar{I}_R|^2 + |\bar{I}_C|^2$ (since they are orthogonal).
$10^2 = 6^2 + I_C^2$.
$100 = 36 + I_C^2 \implies I_C^2 = 64 \implies I_C = 8$ A.

i) Current in capacitor $I_C = 8$ A.

ii) Values of R & C:
   $R = V / I_R = 200 / 6 = 33.33 \, \Omega$.
   $X_C = V / I_C = 200 / 8 = 25 \, \Omega$.
   $C = 1 / (2\pi f X_C) = 1 / (100\pi \times 25) = 1 / (2500\pi) \approx 127.3 \, \mu F$.

iii) Powers:
   Active Power $P = V I_R = 200 \times 6 = 1200$ W. (Alternatively $P=VI\cos\phi$. Need $\phi$. $\bar{I} = 6+j8 = 10 \angle 53.1^{\circ}$. $\phi = \angle V - \angle I = 0 - 53.1 = -53.1^{\circ}$. $P=200 \times 10 \times \cos(-53.1^{\circ}) = 2000 \times 0.6 = 1200$ W).
   Reactive Power $Q = -V I_C = -200 \times 8 = -1600$ VAR (Capacitive). (Alternatively $Q=VI\sin\phi = 2000 \times \sin(-53.1^{\circ}) = 2000 \times (-0.8) = -1600$ VAR).
   Apparent Power $S = VI = 200 \times 10 = 2000$ VA. (Check: $\sqrt{P^2+Q^2} = \sqrt{1200^2+(-1600)^2} = \sqrt{1440000+2560000} = \sqrt{4000000} = 2000$ VA).

iv) Power Factor:
   $pf = P / S = 1200 / 2000 = 0.6$. Since current leads voltage ($\phi = -53.1^{\circ}$), it is Leading. $pf=0.6$ Lead.

---
### 19. Admittance $Y = (0.05 - j0.08)$ S. Find R and $X_L$ if they are a) parallel b) series.

#### Solution:
a) Parallel:
   Admittance $\bar{Y} = G - jB_L = 0.05 - j0.08$.
   Conductance $G = 0.05$ S $\implies R = 1/G = 1/0.05 = 20 \, \Omega$.
   Inductive Susceptance $B_L = 0.08$ S $\implies X_L = 1/B_L = 1/0.08 = 12.5 \, \Omega$.
   Parallel components: $R=20 \, \Omega$, $X_L = 12.5 \, \Omega$.

b) Series:
   We need the equivalent series impedance $\bar{Z} = 1/\bar{Y}$.
   $\bar{Z} = 1 / (0.05 - j0.08)$.
   $\bar{Z} = \frac{0.05 + j0.08}{0.05^2 + (-0.08)^2} = \frac{0.05 + j0.08}{0.0025 + 0.0064} = \frac{0.05 + j0.08}{0.0089}$.
   $\bar{Z} \approx 5.618 + j8.989 \, \Omega$.
   For a series circuit, $\bar{Z} = R + jX_L$.
   Series components: $R \approx 5.62 \, \Omega$, $X_L \approx 8.99 \, \Omega$.

---
### 20. Parallel RL circuit has $R=4\Omega, X_L=3\Omega$. Find series equivalent.

#### Solution:
Parallel Impedance $\bar{Z}_p = \frac{R \times (jX_L)}{R+jX_L} = \frac{4 \times j3}{4+j3} = \frac{j12}{4+j3}$.
$\bar{Z}_p = \frac{j12(4-j3)}{(4+j3)(4-j3)} = \frac{j48 - j^2 36}{4^2+3^2} = \frac{36+j48}{25}$.
$\bar{Z}_p = 1.44 + j1.92 \, \Omega$.
This is the equivalent series impedance.
The series equivalent circuit has $R_s = 1.44 \, \Omega$ and $X_{Ls} = 1.92 \, \Omega$.

---
### 21. Circuit in figure (Series C with parallel R=6, $X_L=12$). $f=50$Hz. Find C for $V$ and $I$ in phase. 

#### Solution:
$V$ and $I$ in phase means the total impedance $Z_T$ must be purely resistive (imaginary part is zero).
Impedance of parallel part: $Z_p = \frac{R \times (jX_L)}{R + jX_L} = \frac{6 \times j12}{6 + j12}$.
$Z_p = \frac{j72}{6 + j12} = \frac{j72 (6 - j12)}{(6 + j12)(6 - j12)} = \frac{j432 - j^2(864)}{6^2 + 12^2} = \frac{864 + j432}{36 + 144} = \frac{864 + j432}{180}$.
$Z_p = 4.8 + j2.4 \, \Omega$.

Total Impedance $Z_T = Z_C + Z_p = -jX_C + (4.8 + j2.4)$.
$Z_T = 4.8 + j(2.4 - X_C)$.

For $V$ and $I$ to be in phase, $\text{Im}(Z_T)$ must be zero.
$2.4 - X_C = 0 \implies X_C = 2.4 \, \Omega$.
$X_C = 1 / (2\pi f C)$.
$C = 1 / (2\pi f X_C) = 1 / (2\pi (50)(2.4)) = 1 / (240\pi) \approx 0.001326$ F $= 1326 \, \mu F$.

---
### 22. Parallel circuit: Branch A (R=500$\Omega$, L=0.1H), Branch B (R=45$\Omega$, C=100$\mu F$). $V=230$V, 50Hz. Find total I, P, pf.

#### Solution:
$\omega = 2\pi f = 100\pi$ rad/s.
Branch A: $X_{LA} = \omega L = 100\pi (0.1) = 10\pi \approx 31.4 \, \Omega$.
$\bar{Z}_A = 500 + j31.4 \, \Omega$.
$\bar{Y}_A = 1/\bar{Z}_A = 1/(500+j31.4) \approx 0.00199 - j0.000125$ S.
Branch B: $X_{CB} = 1/(\omega C) = 1/(100\pi \times 100 \times 10^{-6}) = 1/(0.01\pi) \approx 31.8 \, \Omega$.
$\bar{Z}_B = 45 - j31.8 \, \Omega$.
$\bar{Y}_B = 1/\bar{Z}_B = 1/(45-j31.8) \approx 0.0165 + j0.0117$ S.

Total Admittance $\bar{Y}_T = \bar{Y}_A + \bar{Y}_B$.
$\bar{Y}_T = (0.00199 + 0.0165) + j(-0.000125 + 0.0117) = 0.01849 + j0.01158$ S.
In polar form: $\bar{Y}_T \approx 0.0218 \angle 32.0^{\circ}$ S.

Total Current $\bar{I} = \bar{V} \bar{Y}_T$. Let $\bar{V}=230 \angle 0^{\circ}$ V.
$\bar{I} = (230 \angle 0^{\circ})(0.0218 \angle 32.0^{\circ}) \approx 5.01 \angle 32.0^{\circ}$ A.
Magnitude $I = 5.01$ A.

Power Factor $pf = \cos \phi$. $\phi = \angle V - \angle I = 0^{\circ} - 32.0^{\circ} = -32.0^{\circ}$.
$pf = \cos(-32.0^{\circ}) \approx 0.848$. Since current leads voltage ($\phi<0$), it's Leading. $pf = 0.848$ Lead.

Total Power $P = VI \cos \phi = (230)(5.01)(0.848) \approx 977$ W.

---
### 23. Two impedances $Z_1, Z_2$ in parallel. Branch 1: $I_1=16$A (leading), $R_1=5\Omega$. Branch 2: $I_2$ lagging at pf=0.8. Total $P=5$kW. $V=(100+j200)$V. Find branch currents and total current.

#### Solution:
Supply Voltage $\bar{V} = 100+j200 = \sqrt{100^2+200^2} \angle \arctan(200/100) = 223.6 \angle 63.4^{\circ}$ V.

Branch 1: $I_1=16$A, $R_1=5\Omega$. Power in branch 1, $P_1 = I_1^2 R_1 = 16^2 \times 5 = 256 \times 5 = 1280$ W.
Since current is leading, $Z_1 = R_1 - jX_{C1}$.
$|Z_1| = |\bar{V}| / I_1 = 223.6 / 16 \approx 13.98 \, \Omega$.
$|Z_1|^2 = R_1^2 + X_{C1}^2 \implies 13.98^2 = 5^2 + X_{C1}^2$.
$195.4 = 25 + X_{C1}^2 \implies X_{C1}^2 = 170.4 \implies X_{C1} \approx 13.05 \, \Omega$.
$\bar{Z}_1 = 5 - j13.05 \, \Omega = 13.98 \angle -69.0^{\circ} \, \Omega$.
Current $\bar{I}_1 = \bar{V}/\bar{Z}_1 = (223.6 \angle 63.4^{\circ}) / (13.98 \angle -69.0^{\circ}) = 16.0 \angle 132.4^{\circ}$ A. (Check: Magnitude is 16A. Angle implies leading voltage, which is correct).

Branch 2: $pf_2 = 0.8$ lag. $\phi_2 = \arccos(0.8) = 36.87^{\circ}$.
Total Power $P_T = 5$ kW = 5000 W.
$P_T = P_1 + P_2 \implies P_2 = P_T - P_1 = 5000 - 1280 = 3720$ W.
$P_2 = V I_2 \cos \phi_2$.
$3720 = (223.6) I_2 (0.8)$.
$I_2 = 3720 / (223.6 \times 0.8) \approx 20.79$ A.
Current $\bar{I}_2$ lags voltage $\bar{V}$ by $36.87^{\circ}$.
$\angle \bar{I}_2 = \angle \bar{V} - \phi_2 = 63.4^{\circ} - 36.87^{\circ} = 26.53^{\circ}$.
$\bar{I}_2 = 20.79 \angle 26.53^{\circ}$ A.

Total Current $\bar{I}_T = \bar{I}_1 + \bar{I}_2 = (16 \angle 132.4^{\circ}) + (20.79 \angle 26.53^{\circ})$.
$\bar{I}_1 = 16(\cos 132.4^{\circ} + j\sin 132.4^{\circ}) \approx -10.79 + j11.80$ A.
$\bar{I}_2 = 20.79(\cos 26.53^{\circ} + j\sin 26.53^{\circ}) \approx 18.59 + j9.29$ A.
$\bar{I}_T = (-10.79 + 18.59) + j(11.80 + 9.29) = 7.80 + j21.09$ A.
In polar form: $\bar{I}_T = \sqrt{7.80^2 + 21.09^2} \angle \arctan(21.09/7.80) \approx 22.49 \angle 69.7^{\circ}$ A.

Branch Currents: $\bar{I}_1 = 16.0 \angle 132.4^{\circ}$ A, $\bar{I}_2 = 20.79 \angle 26.53^{\circ}$ A.
Total Current: $\bar{I}_T = 22.49 \angle 69.7^{\circ}$ A.

Phasor Diagram:
(Draw $\bar{V}$ at $63.4^{\circ}$. Draw $\bar{I}_1$ at $132.4^{\circ}$ (leading V). Draw $\bar{I}_2$ at $26.53^{\circ}$ (lagging V). Draw $\bar{I}_T$ as the vector sum, at $69.7^{\circ}$.)

---
### 24. Coil ($R=4\Omega, L=1H$) parallel with (similar coil series C series R). Find C and R for branch currents equal magnitude, $90^{\circ}$ phase difference. $f=50$Hz.

#### Solution:
$\omega = 100\pi$. $X_L = \omega L = 100\pi(1) = 100\pi \approx 314 \, \Omega$.
Coil Impedance $\bar{Z}_{coil} = R_{coil} + jX_L = 4 + j314 \, \Omega$.

Branch 1 Impedance: $\bar{Z}_1 = \bar{Z}_{coil} = 4 + j314 \, \Omega$.
Branch 2 Impedance: $\bar{Z}_2 = \bar{Z}_{coil} - jX_C + R = (4+R) + j(314 - X_C)$.

Let voltage be $\bar{V}$. Currents are $\bar{I}_1 = \bar{V}/\bar{Z}_1$ and $\bar{I}_2 = \bar{V}/\bar{Z}_2$.
Given $|\bar{I}_1| = |\bar{I}_2| \implies |\bar{V}/\bar{Z}_1| = |\bar{V}/\bar{Z}_2| \implies |\bar{Z}_1| = |\bar{Z}_2|$.
$|\bar{Z}_1| = \sqrt{4^2 + 314^2} \approx \sqrt{16 + 98596} \approx 314.0 \, \Omega$.
$|\bar{Z}_2| = \sqrt{(4+R)^2 + (314-X_C)^2}$.
So, $314.0 = \sqrt{(4+R)^2 + (314-X_C)^2}$. (Eq. 1)

Given phase difference between $\bar{I}_1$ and $\bar{I}_2$ is $90^{\circ}$.
$\angle \bar{I}_1 = \angle \bar{V} - \angle \bar{Z}_1$.
$\angle \bar{I}_2 = \angle \bar{V} - \angle \bar{Z}_2$.
Phase difference = $(\angle \bar{V} - \angle \bar{Z}_1) - (\angle \bar{V} - \angle \bar{Z}_2) = \angle \bar{Z}_2 - \angle \bar{Z}_1 = \pm 90^{\circ}$.

$\angle \bar{Z}_1 = \arctan(314/4) \approx 89.27^{\circ}$.
$\angle \bar{Z}_2 = \arctan(\frac{314-X_C}{4+R})$.

Case A: $\angle \bar{Z}_2 - \angle \bar{Z}_1 = 90^{\circ}$.
$\angle \bar{Z}_2 = 90 + 89.27 = 179.27^{\circ}$. This implies $4+R$ is negative, which is impossible for resistance.

Case B: $\angle \bar{Z}_2 - \angle \bar{Z}_1 = -90^{\circ}$.
$\angle \bar{Z}_2 = -90 + 89.27 = -0.73^{\circ}$.
$\tan(-0.73^{\circ}) = \frac{314-X_C}{4+R} \approx -0.0127$.
$314 - X_C = -0.0127 (4+R)$. (Eq. 2)

From $|\bar{Z}_1|=|\bar{Z}_2|=314.0$ and $\angle \bar{Z}_2 = -0.73^{\circ}$.
$\bar{Z}_2 = 314.0 \angle -0.73^{\circ} = 314.0(\cos(-0.73) + j\sin(-0.73))$
$\bar{Z}_2 \approx 314.0(0.9999 - j0.0127) \approx 313.97 - j3.99 \, \Omega$.
Comparing with $\bar{Z}_2 = (4+R) + j(314 - X_C)$.
$4+R \approx 313.97 \implies R \approx 309.97 \, \Omega$.
$314 - X_C \approx -3.99 \implies X_C \approx 314 + 3.99 = 318.0 \, \Omega$.

Find C: $X_C = 1/(100\pi C)$.
$C = 1/(100\pi X_C) = 1/(100\pi \times 318) \approx 10.0 \times 10^{-6}$ F $= 10.0 \, \mu F$.

Resistor $R \approx 310 \, \Omega$. Capacitance $C \approx 10 \, \mu F$.

---
## Power Factor Improvement
---

### 25. List the advantages of power factor improvement.

#### Solution:
Improving the power factor (making it closer to unity) in a power system has several advantages, primarily by reducing the overall current required for the same amount of active (useful) power:
* **Reduced Equipment Size/Cost:** Lower current means smaller ratings (and thus lower cost) are needed for generators, transformers, switchgear, and cables.
* **Increased System Efficiency:** Lower current reduces $I^2R$ losses (copper losses) in transmission lines and equipment, improving overall efficiency.
* **Improved Voltage Regulation:** Reduced current leads to smaller voltage drops across lines and transformers, resulting in better voltage stability at the load end.
* **Increased System Capacity:** Reducing the reactive power component frees up capacity on existing equipment, allowing more active power to be delivered without overloading.
* **Avoidance of Penalties:** Electricity suppliers often charge penalties for low power factors.

---
### 26. Explain with a phasor diagram how connecting a capacitor parallel to a lagging load improves overall power factor.

#### Solution:
An inductive load (lagging load) draws current $\bar{I}_L$ that lags the supply voltage $\bar{V}$ by an angle $\phi_L$. This current has an active component ($I_L \cos\phi_L$) in phase with $\bar{V}$ and a reactive component ($I_L \sin\phi_L$) lagging $\bar{V}$ by $90^{\circ}$.

When a capacitor is connected in parallel, it draws a current $\bar{I}_C$ that leads the supply voltage $\bar{V}$ by $90^{\circ}$.

The total current drawn from the supply is the phasor sum $\bar{I}_T = \bar{I}_L + \bar{I}_C$. The active component of $\bar{I}_T$ is the same as the active component of $\bar{I}_L$ (since the capacitor draws no active power). However, the leading reactive current $\bar{I}_C$ partially or fully cancels the lagging reactive component of $\bar{I}_L$.

Phasor Diagram:

1. Draw voltage $\bar{V}$ as reference (horizontal).
2. Draw lagging load current $\bar{I}_L$ at angle $-\phi_L$. Show its active ($I_{La}$) and reactive ($I_{Lr}$) components.
3. Draw capacitor current $\bar{I}_C$ leading $\bar{V}$ by $90^{\circ}$ (upwards).
4. Add $\bar{I}_L$ and $\bar{I}_C$ vectorially to get the total current $\bar{I}_T$.
5. The angle $\phi_T$ between $\bar{V}$ and $\bar{I}_T$ will be smaller than $\phi_L$. Since $\cos\phi$ increases as $\phi$ decreases (for $0<\phi<90$), the overall power factor $\cos\phi_T$ is higher (closer to unity) than the original load power factor $\cos\phi_L$. The total current magnitude $|\bar{I}_T|$ is also reduced compared to $|\bar{I}_L|$ if corrected properly.

---
### 27. 4kW inductive load, 200V, 50Hz, 0.8 Lag pf. i) Find P, Q, S. ii) Find C in parallel for unity pf.
![[Q&A-1.png]]
#### Solution:
i) Powers:
Active Power $P = 4$ kW $= 4000$ W (given).
Power Factor $pf = 0.8$ Lag. Phase angle $\phi = \arccos(0.8) = 36.87^{\circ}$.
Apparent Power $S = P / \cos \phi = 4000 / 0.8 = 5000$ VA $= 5$ kVA.
Reactive Power $Q = S \sin \phi = 5000 \times \sin(36.87^{\circ}) = 5000 \times 0.6 = 3000$ VAR $= 3$ kVAR (inductive).

ii) Capacitor for Unity pf:
To achieve unity power factor ($\cos \phi_{new} = 1$), the net reactive power must be zero. The capacitor must supply reactive power $Q_C$ equal to the load's reactive power $Q$.
$Q_C = Q = 3000$ VAR.
The capacitor is connected in parallel, so the voltage across it is $V=200$ V.
$Q_C = V^2 / X_C = V^2 \omega C$.
$3000 = (200)^2 \times (2\pi \times 50) \times C$.
$3000 = 40000 \times 100\pi \times C$.
$C = 3000 / (4000000 \pi) = 3 / (4000 \pi) \approx 2.387 \times 10^{-4}$ F $= 238.7 \, \mu F$.

---
### 28. Load across 200V, 50Hz: Load 1 (2kW Heating), Load 2 (4kW motor @ 0.8 Lag pf), Load 3 (Capacitive load 5kVA @ 0.9 Lead pf). Find i) Total P, Q, S ii) Overall pf iii) kVAR rating of C for unity pf.

#### Solution:
Calculate P and Q for each load.
Load 1 (Heating): Purely resistive. $P_1 = 2$ kW, $Q_1 = 0$ kVAR.
Load 2 (Motor): $P_2 = 4$ kW, $pf_2 = 0.8$ Lag.
$\phi_2 = \arccos(0.8) = 36.87^{\circ}$. $\tan \phi_2 = 0.75$.
$Q_2 = P_2 \tan \phi_2 = 4 \times 0.75 = 3$ kVAR (inductive).
Load 3 (Capacitive): $S_3 = 5$ kVA, $pf_3 = 0.9$ Lead.
$\phi_3 = \arccos(0.9) = 25.84^{\circ}$.
$P_3 = S_3 \cos \phi_3 = 5 \times 0.9 = 4.5$ kW.
$Q_3 = -S_3 \sin \phi_3 = -5 \times \sin(25.84^{\circ}) = -5 \times 0.436 = -2.18$ kVAR (capacitive).

i) Total Powers:
$P_T = P_1 + P_2 + P_3 = 2 + 4 + 4.5 = 10.5$ kW.
$Q_T = Q_1 + Q_2 + Q_3 = 0 + 3 - 2.18 = 0.82$ kVAR (inductive overall).
$S_T = \sqrt{P_T^2 + Q_T^2} = \sqrt{10.5^2 + 0.82^2} = \sqrt{110.25 + 0.67} \approx 10.53$ kVA.

ii) Overall Power Factor:
$pf_T = P_T / S_T = 10.5 / 10.53 \approx 0.997$. Since $Q_T$ is positive, it's Lagging.

iii) kVAR for Unity pf:
To get unity pf, net $Q$ must be zero. The current net $Q$ is $+0.82$ kVAR (inductive). We need to add a capacitor in parallel that supplies $-0.82$ kVAR.
Capacitor rating required = $0.82$ kVAR.

***
# [[../Electrical|Back]]

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
![[Examples-2.png]]
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
![[Examples-1.png]]
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
   ![[Examples-3.png]]

---
### Example 7: Series RL Calculations
A resistor R and an inductor (with internal resistance r and inductance L) are in series connected to 240V supply. Current is 3A lagging voltage by $37^{\circ}$. Voltage across the inductor component is 171V. Find R, r and $X_L$.

**Solution:**
![[Examples-4.png]]
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
![[Examples-10.png]]
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
![[Examples-5.png]]
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
![[Examples-6.png]]
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
![[Examples-9.png]]
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
![[Examples-7.png]]

Case 2: Load + Capacitor

![[Examples-8.png]]
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
# [[../Electrical|Back]]