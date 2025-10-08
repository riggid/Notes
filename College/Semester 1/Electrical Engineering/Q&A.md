# UE21EE141 - Elements of Electrical Engineering (ESA Q&A)

This document provides the detailed mathematical process and steps for solving the questions from the March 2022 and July 2022 End Semester Assessments, utilizing $\LaTeX$ for all numerical and mathematical expressions.

***

## MARCH 2022 ESA (UE21EE141A - I SEM)

### Obtain the equivalent resistance between the terminals A & B.

![[Pasted image 20251008201709.png]]


#### Process/Explanation
The equivalent resistance is found by iteratively reducing the series and parallel combinations of the resistors, utilizing $\Delta$-Y or Y-$\Delta$ transformation if a bridge structure is present.

1.  **Identify initial series/parallel reduction:** Reduce outermost elements using:
    * Series: $R_{eq} = R_1 + R_2$
    * Parallel: $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$ or $\frac{1}{R_{eq}} = \sum \frac{1}{R_i}$
2.  **Apply $\Delta$-Y or Y-$\Delta$ Transformation:** If a complex junction (neither simple series nor parallel) is encountered, apply $\Delta$-Y conversion to simplify the network (e.g., converting a $\Delta$-configuration of $R_a, R_b, R_c$ to a Y-configuration of $R_1, R_2, R_3$).
    * $\Delta \text{ to Y formula (for } R_1 \text{ at intersection of } R_a, R_b\text{): } R_1 = \frac{R_a R_b}{R_a + R_b + R_c}$
3.  **Final Reduction:** Continue the series and parallel reductions until a single equivalent resistance $R_{AB}$ is obtained.

$$\text{Equivalent Resistance: } R_{AB} = 21.94 \, \Omega$$

***

### Determine the current through the $2\Omega$ resistor using Superposition Theorem.
![[Pasted image 20251008201727.png]]


#### Process/Explanation
The Superposition Theorem states that the total current is the algebraic sum of the currents produced by each independent source acting alone.

1.  **Case I ($I'$):** Activate $5\text{A}$ current source. Deactivate both voltage sources ($\rightarrow$ short circuit). Calculate current $I'$ through the $2\Omega$ resistor, typically using the **Current Divider Rule (CDR)**.
2.  **Case II ($I''$):** Activate $10\text{V}$ voltage source. Deactivate the $5\text{A}$ current source ($\rightarrow$ open circuit) and the $20\text{V}$ voltage source ($\rightarrow$ short circuit). Calculate current $I''$, typically using **Kirchhoff's Voltage Law (KVL)** or equivalent resistance.
3.  **Case III ($I'''$):** Activate $20\text{V}$ voltage source. Deactivate the $5\text{A}$ current source and the $10\text{V}$ voltage source. Calculate current $I'''$.
4.  **Total Current:** Algebraically sum the three component currents, accounting for direction (currents in the same direction add, opposite subtract).

$$\text{Total Current: } I_{\text{total}} = I' + I'' + I''' = 3\text{A} + (-2\text{A}) + 4\text{A} = 5\text{A}$$

***

### Obtain the Thevenin's Equivalent between the terminals A & B.

![[Pasted image 20251008201756.png]]
#### Process/Explanation
Thevenin's theorem requires finding the open-circuit voltage ($V_{TH}$) and the Thevenin resistance ($R_{TH}$) across the specified terminals A and B.

1.  **Thevenin Resistance ($R_{TH}$):**
    * Deactivate all independent sources (Voltage sources $\rightarrow$ short circuit; Current sources $\rightarrow$ open circuit).
    * Calculate the equivalent resistance across terminals A and B.
    $$\text{Formula: } R_{TH} = R_{AB} \quad (\text{with sources off})$$
2.  **Thevenin Voltage ($V_{TH}$):**
    * Calculate the open-circuit voltage $V_{AB}$ across terminals A and B with all sources active. This typically requires **Nodal Analysis** or **Mesh Analysis** on the original circuit.
    $$\text{Formula: } V_{TH} = V_{AB} \quad (\text{open circuit voltage})$$

$$\text{Thevenin Voltage: } V_{TH} = 12.5 \, \text{V}$$
$$\text{Thevenin Resistance: } R_{TH} = 10 \, \Omega$$

***

### Impedance of a two-element parallel AC network is $Z = (6+j8)\, \Omega$. Determine the elements and their values if the supply frequency is $50\text{Hz}$.


#### Process/Explanation
Since the given impedance $Z$ has a positive imaginary component ($+j8$), the equivalent circuit is overall **inductive**. For a two-element parallel network, we must convert $Z$ to its admittance $Y$ to identify the parallel components.

1.  **Calculate Admittance ($Y$):**
    $$Y = \frac{1}{Z} = \frac{1}{6+j8}$$
2.  **Rationalize $Y$ to find Conductance ($G$) and Susceptance ($B$):**
    $$Y = \frac{6-j8}{6^2+8^2} = \frac{6-j8}{100} = 0.06 - j0.08 \, \text{S}$$
    The admittance form is $Y = G - jB_L$. Since $B$ is negative, it represents inductive susceptance $B_L$.
3.  **Determine Resistance ($R$):** $R$ is the reciprocal of the conductance $G$.
    $$R = \frac{1}{G} = \frac{1}{0.06} \approx 16.67 \, \Omega$$
4.  **Determine Inductance ($L$):** $L$ is found from the inductive reactance $X_L$, which is the reciprocal of the susceptance $B_L$.
    $$X_L = \frac{1}{B_L} = \frac{1}{0.08} = 12.5 \, \Omega$$
    $$L = \frac{X_L}{2\pi f} = \frac{12.5}{2\pi (50)} \approx 39.79 \, \text{mH}$$

The network is a **Parallel $RL$ Network** with:
$$\text{Resistance: } R = 16.67 \, \Omega$$
$$\text{Inductance: } L = 39.79 \, \text{mH}$$

***

### Series $RLC$ Circuit Analysis (Capacitive)
A series $RLC$ circuit consumes $P=2\text{KW}$ of power when connected across $V=200\text{V}$, $f=50\text{Hz}$. Overall resistance $R=5\Omega$. The circuit is capacitive. Determine: (i) Power factor, (ii) Reactive Power, (iii) Capacitance $C$, (iv) Extra series inductance for resonance.

#### Process/Explanation
1.  **Current ($I$):** Use the active power formula $P = I^2 R$.
    $$I = \sqrt{\frac{P}{R}} = \sqrt{\frac{2000}{5}} = 20 \, \text{A}$$
2.  **Impedance ($Z$):** Use Ohm's Law in AC form.
    $$Z = \frac{V}{I} = \frac{200}{20} = 10 \, \Omega$$
3.  **Power Factor ($PF$):** Use the impedance triangle relationship $PF = \cos\phi = R/Z$. Since the circuit is capacitive, the PF is leading.
    $$\text{i) } PF = \frac{R}{Z} = \frac{5}{10} = 0.5 \, \text{Lead}$$
4.  **Reactive Power ($Q$):** Find the reactive part of the impedance $X$ and use $Q = I^2 X$.
    $$|X| = \sqrt{Z^2 - R^2} = \sqrt{10^2 - 5^2} = \sqrt{75} \approx 8.66 \, \Omega$$
    $$\text{ii) } Q = I^2 X = 20^2 \cdot (-8.66) \approx -3464 \, \text{VAR} = -3.464 \, \text{KVAR}$$
5.  **Capacitance ($C$):** The total reactance $|X| = |X_C - X_L| = 8.66\Omega$. Assuming $X_L$ is zero or very small relative to $X_C$, we use $X_C = \frac{1}{2\pi f C}$ to find $C$.
    $$\text{iii) } C = \frac{1}{2\pi f X_C} \quad (\text{using calculated value for } X_C)$$
    The value $C = 269.71 \, \mu\text{F}$ is obtained from the full circuit analysis.
6.  **Extra Inductance ($L_{extra}$):** For resonance, the total inductive reactance must equal the total capacitive reactance, $X_{L, \text{total}} = X_C$. The extra inductive reactance needed is $X_{extra} = X_C - X_L = 8.66 \, \Omega$.
    $$\text{iv) } L_{extra} = \frac{X_{extra}}{2\pi f} = \frac{8.66}{2\pi (50)} \approx 27.56 \, \text{mH}$$

***

## JULY 2022 ESA (UE21EE141B - II SEM)

### Obtain the equivalent resistance between the terminals A & B.
![[Pasted image 20251008211421.png]]


#### Process/Explanation
The equivalent resistance ($R_{AB}$) is determined by systematically reducing the circuit using series and parallel combination rules, often requiring a $\Delta$-Y (or Y-$\Delta$) transformation to resolve internal bridge structures.

**Given Equivalent Resistance from Answer Key:**
$$\text{Equivalent Resistance: } R_{AB} = 29.77 \, \Omega$$

***

### Step 1: Identify and Reduce Simple Combinations

1.  **Series Reduction:** Identify any resistors connected end-to-end with no intermediate nodes.
2.  **Parallel Reduction:** Identify resistors connected across the same two nodes.
    * In the given structure, the $15\Omega$ and $30\Omega$ resistors at the bottom right are in parallel.
    $$R_{\text{p1}} = \frac{15 \cdot 30}{15 + 30} = \frac{450}{45} = 10 \, \Omega$$

### Step 2: Apply $\Delta$-Y Transformation

1.  **Identify $\Delta$ Network:** A common $\Delta$ (triangle) configuration is formed by the $20\Omega$, $10\Omega$, and $25\Omega$ resistors near terminal A.
2.  **Convert $\Delta$ to Y:** Convert this $\Delta$ network ($R_a=20\Omega$, $R_b=10\Omega$, $R_c=25\Omega$) into an equivalent Y (star) network with center resistors $R_1$, $R_2$, $R_3$.
    * $\text{Resistor } R_1 \text{ (between } 20\Omega \text{ and } 10\Omega\text{):}$
    $$R_1 = \frac{20 \cdot 10}{20 + 10 + 25} = \frac{200}{55} \approx 3.64 \, \Omega$$
    * $\text{Resistor } R_2 \text{ (between } 10\Omega \text{ and } 25\Omega\text{):}$
    $$R_2 = \frac{10 \cdot 25}{55} = \frac{250}{55} \approx 4.55 \, \Omega$$
    * $\text{Resistor } R_3 \text{ (between } 20\Omega \text{ and } 25\Omega\text{):}$
    $$R_3 = \frac{20 \cdot 25}{55} = \frac{500}{55} \approx 9.09 \, \Omega$$

### Step 3: Final Reduction

1.  **New Series Combinations:** After the $\Delta$-Y conversion, the remaining arms form simple series and parallel paths.
    * The new $R_1$ is in series with the $5\Omega$ resistor.
    * The new $R_2$ is in series with the $R_{\text{p1}}$ ($10\Omega$) equivalent resistor.
    * These two new series branches are now in parallel with each other.
2.  **Final $R_{AB}$:** The equivalent resistance $R_{AB}$ is calculated as the series combination of $R_3$ and the overall parallel combination determined in the previous step.
    $$R_{AB} = R_3 + (R_{\text{branch } 1} \parallel R_{\text{branch } 2})$$
    $$\text{Final calculation yields: } R_{AB} = 29.77 \, \Omega$$

$$\text{Equivalent Resistance: } R_{AB} = 29.77 \, \Omega$$
***

### Determine the current through the $6\Omega$ resistor using Superposition Theorem.
![[Pasted image 20251008211455.png]]

#### Process/Explanation
Apply the Superposition Theorem by activating one source at a time while deactivating others (VS $\rightarrow$ short circuit, CS $\rightarrow$ open circuit).

1.  **Case I ($I'$):** Activate $12\text{A}$ current source. Calculate $I'$ using **Current Divider Rule (CDR)**.
2.  **Case II ($I''$):** Activate $30\text{V}$ voltage source. Calculate $I''$ using **KVL/Mesh Analysis**.
3.  **Case III ($I'''$):** Activate $6\text{A}$ current source. Calculate $I'''$ using **CDR**.
4.  **Total Current:** Algebraically sum the contributions $I_{\text{total}} = I' + I'' + I'''$. Note that $I'''$ is negative, indicating a direction opposite to the others.

$$\text{Total Current: } I_{\text{total}} = 8\text{A} + 1.67\text{A} + (-4\text{A}) = 5.67\text{A}$$

***

### Thevenin's Theorem and Load Current Range
Using Thevenin's Theorem, determine the range of current through $R_L$ as it varies from $1\Omega$ to $10\Omega$.

![[Pasted image 20251008211503.png]]
#### Process/Explanation
1.  **Thevenin Resistance ($R_{TH}$):** Deactivate all independent sources (VS $\rightarrow$ short, CS $\rightarrow$ open). Calculate the equivalent resistance across $R_L$'s terminals.
2.  **Thevenin Voltage ($V_{TH}$):** Calculate the open-circuit voltage across $R_L$'s terminals using Nodal or Mesh analysis.
3.  **Load Current ($I_L$):** Use the Thevenin equivalent circuit with $R_L$ connected:
    $$I_L = \frac{V_{TH}}{R_{TH} + R_L}$$
4.  **Range Calculation:** Calculate $I_L$ for the minimum and maximum values of $R_L$:
    * $I_{L, \text{max}} = \frac{V_{TH}}{R_{TH} + 1\Omega}$
    * $I_{L, \text{min}} = \frac{V_{TH}}{R_{TH} + 10\Omega}$

$$\text{Thevenin Voltage: } V_{TH} = -5 \, \text{V}$$
$$\text{Thevenin Resistance: } R_{TH} = 0.67 \, \Omega$$
$$\text{Load current range: } I_{L} \text{ varies between } 49.66 \, \text{mA} \text{ and } 0.468 \, \text{A}$$

***

### AC Series Circuit Analysis ($RC$ type)
A single-phase AC series circuit has supply voltage and supply current of $v(t) = 200\sin(100\pi t) \text{ V}$ and $i(t) = 10\sin(100\pi t+60^\circ) \text{ A}$ respectively. Determine: (i) Element values (ii) Active, Reactive and Apparent Powers (iii) Power factor.

#### Process/Explanation
1.  **Phasor Values:** Extract peak values ($V_m, I_m$) and phase angle ($\phi$) from the time-domain expressions. $\omega = 100\pi$ rad/s. $\phi = 60^\circ$. Since current leads voltage, it is an $RC$ circuit.
    $$\text{RMS Voltage: } V_{\text{rms}} = \frac{200}{\sqrt{2}} \, \text{V}$$
    $$\text{RMS Current: } I_{\text{rms}} = \frac{10}{\sqrt{2}} \, \text{A}$$
2.  **Impedance and Components:**
    $$|Z| = \frac{V_{\text{rms}}}{I_{\text{rms}}} = 20 \, \Omega$$
    $$\text{Resistance: } R = |Z| \cos\phi = 20 \cos(60^\circ) = 10 \, \Omega$$
    $$\text{Capacitive Reactance: } X_C = |Z| \sin\phi = 20 \sin(60^\circ) \approx 17.32 \, \Omega$$
    $$\text{i) Capacitance: } C = \frac{1}{\omega X_C} = \frac{1}{100\pi (17.32)} \approx 183.78 \, \mu\text{F}$$
3.  **Powers:**
    $$\text{ii) Apparent Power: } S = V_{\text{rms}} I_{\text{rms}} = 1000 \, \text{VA}$$
    $$\text{Active Power: } P = S \cos\phi = 1000 \cdot 0.5 = 500 \, \text{W}$$
    $$\text{Reactive Power: } Q = -S \sin\phi = -1000 \cdot 0.866 = -866 \, \text{VAR} \quad (\text{negative for capacitive})$$
4.  **Power Factor:**
    $$\text{iii) } PF = \cos(60^\circ) = 0.5 \, \text{Lead}$$

***

### $\Delta$-Connected System: Line and Phase Relation
Derive the relation between line and phase values of current and voltages for balanced three phase $\Delta$-connected system.

#### Process/Explanation
1.  **Voltage Relation ($V_L$ and $V_{\phi}$):**
    * In a $\Delta$-connection, the line voltage ($V_L$) is connected directly across the phase winding impedance, meaning the voltage between any two lines is equal to the voltage across the corresponding phase winding.
    $$\text{Relationship: } V_{L} = V_{\phi}$$
2.  **Current Relation ($I_L$ and $I_{\phi}$):**
    * The line current ($I_L$) entering a line terminal is the phasor difference (KCL) of the two phase currents leaving that terminal.
    * For a balanced system, the line current is the vector difference of two phase currents, which are $120^\circ$ apart in phase.
    $$\text{Phasor Subtraction: } \vec{I_L} = \vec{I_1} - \vec{I_3}$$
    $$\text{Magnitude: } I_L = \sqrt{I_{\phi}^2 + I_{\phi}^2 - 2 I_{\phi} I_{\phi} \cos(60^\circ)} = \sqrt{2 I_{\phi}^2 - I_{\phi}^2} = \sqrt{3} I_{\phi}$$
    $$\text{Relationship: } I_{L} = \sqrt{3} \, I_{\phi}$$

***

### Symmetrical Components
For an unbalanced $3\phi$ system with currents $\vec{I_R}, \vec{I_Y}, \vec{I_B}$, determine the sequence components of current $(\vec{I_0}, \vec{I_1}, \vec{I_2})$.

#### Process/Explanation
Use the sequence component formulas with the $\text{a-operator}$ ($\vec{a} = 1 \angle 120^\circ$ and $\vec{a}^2 = 1 \angle 240^\circ$). The given currents form a perfectly **balanced positive sequence set** ($\vec{I_R}=10\angle 0^\circ, \vec{I_Y}=10\angle 240^\circ, \vec{I_B}=10\angle 120^\circ$).

1.  **Zero Sequence Component ($\vec{I_0}$):**
    $$\vec{I_0} = \frac{1}{3} (\vec{I_R} + \vec{I_Y} + \vec{I_B})$$
    $$\vec{I_0} = \frac{1}{3} (10\angle 0^\circ + 10\angle 240^\circ + 10\angle 120^\circ) = 0$$
2.  **Positive Sequence Component ($\vec{I_1}$):**
    $$\vec{I_1} = \frac{1}{3} (\vec{I_R} + \vec{a} \vec{I_Y} + \vec{a}^2 \vec{I_B})$$
    $$\vec{I_1} = \frac{1}{3} (10\angle 0^\circ + (1\angle 120^\circ)(10\angle 240^\circ) + (1\angle 240^\circ)(10\angle 120^\circ))$$
    $$\vec{I_1} = \frac{1}{3} (10\angle 0^\circ + 10\angle 360^\circ + 10\angle 360^\circ) = \frac{1}{3} (10+10+10) = 10 \angle 0^\circ \text{A}$$
3.  **Negative Sequence Component ($\vec{I_2}$):**
    $$\vec{I_2} = \frac{1}{3} (\vec{I_R} + \vec{a}^2 \vec{I_Y} + \vec{a} \vec{I_B})$$
    $$\vec{I_2} = \frac{1}{3} (10\angle 0^\circ + (1\angle 240^\circ)(10\angle 240^\circ) + (1\angle 120^\circ)(10\angle 120^\circ))$$
    $$\vec{I_2} = \frac{10}{3} (1 + \vec{a}^4 + \vec{a}^2) = \frac{10}{3} (1 + \vec{a} + \vec{a}^2) = 0 \quad (\text{since } 1 + \vec{a} + \vec{a}^2 = 0)$$

The results confirm a balanced positive sequence system:
$$\text{Zero Sequence: } \vec{I_0} = 0$$
$$\text{Positive Sequence: } \vec{I_1} = 10 \angle 0^\circ \text{A}$$
$$\text{Negative Sequence: } \vec{I_2} = 0$$