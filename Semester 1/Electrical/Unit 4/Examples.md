---
dg-publish: true
---
# [Back](../../Electrical.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Questions](Questions.md)
***

# Unit 4 Examples: Machines

> See also: [Core Notes](Core%20Notes.md#unit-4-electromagnetism--electrical-machines)

## 1. Magnetic Circuits

### Example 1: Flux Calculation in Iron Ring
**Problem:**
A circular iron ring of mean diameter $25 cm$ and cross-sectional area $9 cm^2$ is wound with a coil of $100$ turns and carries a current of $1.5 A$. The relative permeability of iron is $2000$. Calculate the amount of flux produced in the ring.

**Solution:**
1.  **Given Data**:
    *   Diameter ($D$) = $25 cm = 0.25 m$
    *   Area ($A$) = $9 cm^2 = 9 \times 10^{-4} m^2$
    *   Turns ($N$) = $100$
    *   Current ($I$) = $1.5 A$
    *   Relative Permeability ($\mu_r$) = $2000$
    *   Permeability of free space ($\mu_0$) = $4\pi \times 10^{-7}$

2.  **Calculate Length ($l$)**:
    $$ l = \pi D = \pi \times 0.25 = 0.785 m $$

3.  **Calculate Reluctance ($S$)**:
    $$ S = \frac{l}{\mu_0 \mu_r A} $$
    $$ S = \frac{0.785}{4\pi \times 10^{-7} \times 2000 \times 9 \times 10^{-4}} $$
    $$ S = \frac{0.785}{2.26 \times 10^{-6}} = 347345 \text{ AT/Wb} $$

4.  **Calculate MMF**:
    $$ MMF = N \times I = 100 \times 1.5 = 150 \text{ AT} $$

5.  **Calculate Flux ($\phi$)**:
    $$ \phi = \frac{MMF}{S} = \frac{150}{347345} = 4.31 \times 10^{-4} \text{ Wb} $$
    $$ \phi = 0.431 \text{ mWb} $$

***

## 2. Transformers

### Example 2: EMF and Current Ratios
**Problem:**
A $5 kVA, 50 Hz$ single phase transformer has primary and secondary turns of $120$ and $80$ respectively. At a certain flux density, the induced EMF per turn in the primary is $2.5 V$. Determine i) The primary and secondary voltages ii) The primary and secondary currents on Full Load.

**Solution:**
1.  **Given Data**:
    *   Rating ($S$) = $5 kVA = 5000 VA$
    *   $N_1 = 120$, $N_2 = 80$
    *   EMF/turn ($E_t$) = $2.5 V$

2.  **Calculate Voltages ($E_1, E_2$)**:
    *   $E_1 = E_t \times N_1 = 2.5 \times 120 = 300 V$
    *   $E_2 = E_t \times N_2 = 2.5 \times 80 = 200 V$

3.  **Calculate Full Load Currents ($I_1, I_2$)**:
    *   $I_1 = \frac{S}{E_1} = \frac{5000}{300} = 16.67 A$
    *   $I_2 = \frac{S}{E_2} = \frac{5000}{200} = 25 A$

### Example 3: Efficiency Calculation
**Problem:**
A $25 kVA, 2000/200 V$ transformer has constant loss (iron loss) of $350 W$ and full load copper loss of $400 W$. Calculate the efficiency of the transformer at Full Load and 0.8 pf lagging.

**Solution:**
1.  **Given Data**:
    *   $S = 25 kVA = 25000 VA$
    *   Iron Loss ($P_i$) = $350 W$
    *   FL Copper Loss ($P_{cu}$) = $400 W$
    *   Load fraction ($x$) = $1$ (Full Load)
    *   Power Factor ($\cos\phi$) = $0.8$

2.  **Calculate Output Power**:
    $$ P_{out} = x S \cos\phi = 1 \times 25000 \times 0.8 = 20000 W $$

3.  **Calculate Total Losses at FL**:
    $$ P_{loss} = P_i + x^2 P_{cu} = 350 + (1^2 \times 400) = 750 W $$

4.  **Calculate Efficiency ($\eta$)**:
    $$ \eta = \frac{P_{out}}{P_{out} + P_{loss}} \times 100 $$
    $$ \eta = \frac{20000}{20000 + 750} \times 100 = \frac{20000}{20750} \times 100 = 96.38\% $$

***

## 3. DC Machines

### Example 4: DC Generator EMF
**Problem:**
A 6-pole armature is wound with $498$ conductors. The flux and the speed is such that the average EMF generated in each conductor is $2V$. The current in each conductor is $120A$. Find the total current and generated EMF if connected a) Wave b) Lap.

**Solution:**
1.  **Given**: $P=6$, $Z=498$. EMF/conductor = $2V$. Current/conductor ($I_c$) = $120A$.
2.  **Total Generated Power** (Same for both):
    $$ P_{gen} = \text{Total EMF} \times \text{Total Current} = Z \times (\text{EMF/cond}) \times I_c $$
    Actually simpler: Total Power = Total Volts * Total Amps.
    Total Power = $498 \text{ conds} \times 2 V/cond \times 120 A = 119.52 kW$ (Power is independent of connection type).

3.  **Case a) Wave Winding ($A=2$)**:
    *   **EMF ($E_g$)**: Since conductors are split into $A=2$ parallel paths, conductors per path = $Z/2 = 249$.
        Total EMF = (EMF/cond) $\times$ (Conds/path) = $2 \times 249 = 498 V$.
    *   **Total Current ($I_a$)**: Parallel paths $\times$ Current/path = $2 \times 120 = 240 A$.

4.  **Case b) Lap Winding ($A=P=6$)**:
    *   **EMF ($E_g$)**: Conductors per path = $Z/6 = 498/6 = 83$.
        Total EMF = $2 \times 83 = 166 V$.
    *   **Total Current ($I_a$)**: $6 \times 120 = 720 A$.

### Example 5: DC Motor Calculations
**Problem:**
A 4 pole DC motor is connected to $500V$ DC supply and takes an armature current of $80A$. Resistance of armature is $0.4\Omega$. Armature is wave wound with $522$ conductors and useful flux per pole is $0.025Wb$. Calculate i) Back EMF ii) Speed iii) Torque.

**Solution:**
1.  **Given**: $V=500V$, $I_a=80A$, $R_a=0.4\Omega$, $P=4$, Wave($A=2$), $Z=522$, $\phi=0.025Wb$.

2.  **i) Back EMF ($E_b$)**:
    $$ E_b = V - I_a R_a = 500 - (80 \times 0.4) = 500 - 32 = 468 V $$

3.  **ii) Speed ($N$)**:
    *   EMF Eq: $E_b = \frac{\phi Z N P}{60 A}$
    *   $468 = \frac{0.025 \times 522 \times N \times 4}{60 \times 2}$
    *   $468 = \frac{52.2 N}{120} = 0.435 N$
    *   $N = \frac{468}{0.435} = 1075.86 \text{ rpm}$

4.  **iii) Torque ($T$)**:
    *   Power = Torque $\times \omega$
    *   Electrical Power converted to Mechanical ($P_m$) = $E_b \times I_a = 468 \times 80 = 37440 W$.
    *   $\omega = \frac{2\pi N}{60} = \frac{2\pi \times 1075.86}{60} = 112.66 \text{ rad/s}$.
    *   $T = \frac{P_m}{\omega} = \frac{37440}{112.66} = 332.32 \text{ Nm}$.
    *   (Alternatively use $T = 0.159 \phi Z I_a \frac{P}{A}$)

***

## 4. Induction Motors

### Example 6: Synchronous Speed and Slip
**Problem:**
A 4 pole three phase induction motor is supplied from a $400V, 50Hz$ supply. Determine i) Synchronous speed ii) Speed of rotor if slip is $0.05$.

**Solution:**
1.  **Given**: $P=4$, $f=50Hz$, $s=0.05$.
2.  **Synchronous Speed ($N_s$)**:
    $$ N_s = \frac{120 f}{P} = \frac{120 \times 50}{4} = 1500 \text{ rpm} $$
3.  **Rotor Speed ($N$)**:
    $$ N = N_s (1 - s) = 1500 (1 - 0.05) = 1500 (0.95) = 1425 \text{ rpm} $$
