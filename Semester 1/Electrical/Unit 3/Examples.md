---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***

# Unit 3 Examples: Three Phase Systems

> See also: [[Core Notes#1-three-phase-balanced-systems|Core Notes]]

## 1. Balanced Star Connected Systems

### Example 1: Active and Reactive Power Calculation
**Problem:**
A balanced 3-phase load consists of three coils, each of $4\Omega$ resistance and $0.02H$ inductance. Determine the total active and reactive power when the coils are connected in star, if the supply voltage is $400V, 50 Hz$.

**Solution:**

**1. Identify Given Data:**
*   Supply Line Voltage ($V_L$) = $400V$
*   Frequency ($f$) = $50Hz$
*   Resistance per phase ($R$) = $4\Omega$
*   Inductance per phase ($L$) = $0.02H$
*   Connection = Star

**2. Calculate Impedance per Phase:**
*   Inductive Reactance ($X_L$) = $2\pi f L$
    $$ X_L = 2 \times 3.14 \times 50 \times 0.02 = 6.28\Omega $$
*   Impedance ($Z_{ph}$) = $R + jX_L = 4 + j6.28 \Omega$
*   Magnitude $|Z_{ph}|$ = $\sqrt{4^2 + 6.28^2} = 7.45 \Omega$
*   Phase Angle ($\phi$) = $\tan^{-1}(\frac{6.28}{4}) = 57.5^\circ$ (Lagging)

**3. Calculate Phase Voltage and Current:**
*   In Star connection: $V_{ph} = \frac{V_L}{\sqrt{3}}$
    $$ V_{ph} = \frac{400}{\sqrt{3}} = 230.94 V $$
*   Phase Current ($I_{ph}$) = $\frac{V_{ph}}{Z_{ph}}$
    $$ I_{ph} = \frac{230.94}{7.45} = 31 A $$
*   Line Current ($I_L$) = $I_{ph} = 31 A$

**4. Calculate Powers:**
*   **Active Power ($P_{3\phi}$)**:
    $$ P = \sqrt{3} V_L I_L \cos\phi $$
    $$ P = \sqrt{3} \times 400 \times 31 \times \cos(57.5^\circ) $$
    $$ P = \sqrt{3} \times 400 \times 31 \times 0.537 = 11.54 kW $$
    *(Alternatively: $3 I_{ph}^2 R = 3 \times 31^2 \times 4 = 11.53 kW$)*

*   **Reactive Power ($Q_{3\phi}$)**:
    $$ Q = \sqrt{3} V_L I_L \sin\phi $$
    $$ Q = \sqrt{3} \times 400 \times 31 \times \sin(57.5^\circ) $$
    $$ Q = 21477 \times 0.843 = 18.11 kVAR $$

**Final Answer:**
*   Active Power = **11.54 kW**
*   Reactive Power = **18.11 kVAR**

***

### Example 2: Reverse Calculation (Finding Component Values)
**Problem:**
A balanced 3-phase, star connected load of $100kW$ takes a leading current of $80A$ when connected to a 3-phase, $1.1kV, 50Hz$ supply. Find the resistance, impedance, and the capacitance of the load per phase. Also calculate the power factor.

**Solution:**

**1. Given Data:**
*   Active Power ($P$) = $100 kW$
*   Line Current ($I_L$) = $80 A$ (Leading)
*   Line Voltage ($V_L$) = $1.1 kV = 1100 V$
*   Connection = Star

**2. Voltage and Current Relations:**
*   In Star: $I_{ph} = I_L = 80 A$
*   Phase Voltage ($V_{ph}$) = $\frac{1100}{\sqrt{3}} = 635.08 V$

**3. Calculate Impedance ($Z$):**
$$ Z_{ph} = \frac{V_{ph}}{I_{ph}} = \frac{635.08}{80} = 7.94 \Omega $$

**4. Calculate Power Factor and Resistance:**
*   Using Power formula: $P = 3 I_{ph}^2 R$
    $$ 100 \times 10^3 = 3 \times 80^2 \times R $$
    $$ R = \frac{100000}{3 \times 6400} = 5.21 \Omega $$
*   Power Factor ($\cos\phi$) = $\frac{R}{Z} = \frac{5.21}{7.94} = 0.656$ (Leading)

**5. Calculate Capacitance:**
*   Impedance formula: $Z^2 = R^2 + X_C^2$
    $$ X_C = \sqrt{Z^2 - R^2} = \sqrt{7.94^2 - 5.21^2} = \sqrt{63.04 - 27.14} = \sqrt{35.9} $$
    $$ X_C = 5.99 \Omega $$
*   Capacitance ($C$) = $\frac{1}{2\pi f X_C}$
    $$ C = \frac{1}{2 \pi \times 50 \times 5.99} = 531 \mu F $$

**Final Answer:**
*   Resistance = **5.21 $\Omega$**
*   Impedance = **7.94 $\Omega$**
*   Capacitance = **531 $\mu F$**
*   Power Factor = **0.656 Leading**

***

## 2. Balanced Delta Connected Systems

### Example 3: Different Supply Voltages
**Problem:**
A balanced delta connected load consumes $2 kW$ of power when connected to a 3-phase, $400 V, 50Hz$ supply. The same load when connected to a 3-phase $230V, 50 Hz$ supply, draws a current of $2 A$ at lagging power factor. Determine the load power factor and resistance and inductance per phase.

**Solution:**

**Case 1: 400V Supply (Power Known)**
*   $P_1 = 3 \frac{V_{ph1}^2}{Z} \cos\phi = 2000 W$
*   Delta Connection: $V_{ph1} = V_{L1} = 400V$
*   $3 \times \frac{400^2}{Z} \times \frac{R}{Z} = 2000$
    $$ \frac{480000 R}{Z^2} = 2000 \implies \frac{R}{Z^2} = \frac{1}{240} $$ (Eq 1)

**Case 2: 230V Supply (Current Known)**
*   $V_{L2} = 230V$
*   $I_{L2} = 2A$
*   Delta Connection: $I_{ph2} = \frac{I_{L2}}{\sqrt{3}} = \frac{2}{\sqrt{3}} = 1.155 A$
*   Phase Voltage: $V_{ph2} = 230V$
*   Impedance ($Z$) = $\frac{V_{ph2}}{I_{ph2}} = \frac{230}{1.155} = 199.13 \Omega$

**Calculating Parameters:**
*   Substitute $Z$ into Eq 1:
    $$ R = \frac{Z^2}{240} = \frac{199.13^2}{240} = \frac{39652}{240} = 165.22 \Omega $$
*   Reactance ($X_L$) = $\sqrt{Z^2 - R^2} = \sqrt{199.13^2 - 165.22^2} = 111.16 \Omega$
*   Inductance ($L$) = $\frac{X_L}{2\pi f} = \frac{111.16}{314} = 0.354 H$
*   Power Factor ($\cos\phi$) = $\frac{R}{Z} = \frac{165.22}{199.13} = 0.83$ Lagging

**Final Answer:**
*   Power Factor = **0.83 Lag**
*   Resistance = **165.2 $\Omega$**
*   Inductance = **0.354 H**

***

## 3. Domestic Wiring Calculations

### Example 4: Monthly Bill Calculation
**Problem:**
Calculate the monthly electricity bill for a household with the following daily consumption (30 days):
*   4 LED Bulbs (15W each) for 14 hrs
*   4 Fans (75W each) for 12 hrs
*   1 Geyser (1kW) for 1 hr
*   1 Fridge (100W) for 24 hrs
*   1 TV (50W) for 8 hrs
*   1 Mixer (750W) for 15 mins
*   1 Pump (750W) for 30 mins

**Tariff (Sanctioned Load 5kW):**
*   Fixed Charge: Rs. 100 first kW, Rs. 110/kW additional.
*   Energy Charge:
    *   0-50 units: Rs. 4.15/unit
    *   51-100 units: Rs. 5.60/unit
    *   101-200 units: Rs. 7.15/unit
    *   Above 200: Rs. 8.20/unit
*   Tax: 9% on Energy Charges.

**Solution:**

**1. Calculate Daily Consumption (kWh):**
1.  LEDs: $4 \times 15W \times 14h = 840 Wh$
2.  Fans: $4 \times 75W \times 12h = 3600 Wh$
3.  Geyser: $1000W \times 1h = 1000 Wh$
4.  Fridge: $100W \times 24h = 2400 Wh$
5.  TV: $50W \times 8h = 400 Wh$
6.  Mixer: $750W \times 0.25h = 187.5 Wh$
7.  Pump: $750W \times 0.5h = 375 Wh$

Total per day = $8802.5 Wh = 8.8 kHh$ (Units)

**2. Monthly Consumption:**
$$ Units_{month} = 8.8 \times 30 = 264 \text{ Units} $$ (approx, notes say 245, let's follow the calculation logic strictly based on note inputs if they differ. The note example 54 matches approximately. Let's use 264).

**3. Bill Calculation:**
*   **Fixed Charges:**
    *   1st kW: Rs. 100
    *   Next 4 kW: $4 \times 110 = 440$
    *   Total Fixed = **Rs. 540**

*   **Energy Charges (264 Units):**
    *   0-50: $50 \times 4.15 = 207.5$
    *   51-100: $50 \times 5.60 = 280.0$
    *   101-200: $100 \times 7.15 = 715.0$
    *   201-264: $64 \times 8.20 = 524.8$
    *   Total Energy = **Rs. 1727.3**

*   **Tax (9% on Energy):**
    *   $0.09 \times 1727.3 = 155.45$

**Total Bill:**
$$ 540 + 1727.3 + 155.45 = \text{Rs. } 2422.75 $$
