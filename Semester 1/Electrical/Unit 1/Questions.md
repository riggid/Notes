---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

# Unit 1 Q&A: DC Circuits

## 1. Basic Concepts & Kirchhoff's Laws

### 1. Definitions
**Question:** Define (i) Electric Current, Potential Difference & Electric Power, (ii) KCL & KVL, and (iii) Active & Passive Elements & Sign conventions.

**Answer:**
*   **(i) Basic Quantities**
    *   **Electric Current:** The rate of flow of electric charge through a conductor, measured in **Amperes (A)**.
    *   **Potential Difference (Voltage):** The work required to move a unit of charge between two points. It is the "pressure" that drives the current, measured in **Volts (V)**.
    *   **Electric Power:** The rate at which electrical energy is transferred, calculated as $P = VI$, and measured in **Watts (W)**.
*   **(ii) Kirchhoff's Laws**
    *   **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering a node (junction) is zero ($\sum I_{in} = \sum I_{out}$).
    *   **Kirchhoff's Voltage Law (KVL):** The algebraic sum of all voltages (rises and drops) around any closed loop is zero ($\sum V = 0$).
*   **(iii) Elements & Conventions**
    *   **Active Elements:** Components that supply energy (e.g., Voltage/Current sources).
    *   **Passive Elements:** Components that absorb or dissipate energy (e.g., Resistors, Capacitors).
    *   **Sign Conventions:** Current entering the positive terminal of a passive element creates a voltage drop ($+ \to -$). Current leaving the positive terminal of a source implies power delivery.

### 2. Analysis of Lamps in Series
**Question:** A 100W, 120V lamp is connected in series with a 40W, 120V lamp across a 240V supply. Calculate the resistance to be connected across the 40W lamp so it gets the proper current at its rated voltage.

**Answer:**
1.  **Rated Currents:**
    *   Lamp 1 (100W): $I_1 = 100/120 = 0.833 A$.
    *   Lamp 2 (40W): $I_2 = 40/120 = 0.333 A$.
2.  **Circuit Requirement:**
    *   Both lamps need 120V. Since supply is 240V, they divide it equally if currents match.
    *   Series current is determined by the higher rating ($0.833 A$) to fully power Lamp 1.
    *   Lamp 2 only needs $0.333 A$. The excess $0.833 - 0.333 = 0.5 A$ must flow through a shunt resistor.
3.  **Shunt Resistance ($R_{sh}$):**
    *   Voltage across shunt = 120V.
    *   Current through shunt = 0.5 A.
    *   $R_{sh} = 120 / 0.5 = 240 \Omega$.
    *   **Result:** Connect a **240Ω** resistor in parallel with the 40W lamp.

### 3. Loop Analysis
**Question:** Find the voltage $V_{AB}$ in the network shown.
![[Attachments/l1_q2_diagram.png|Question Diagram]]

**Answer:**
We analyze the two independent loops using KVL.
1.  **Left Loop ($I_1$)**:
    *   $20 - (5+3+2)I_1 = 0 \implies 20 = 10I_1 \implies I_1 = 2A$.
    *   Voltage at A (relative to bottom wire) = Voltage across 2Ω resistor = $2 \times 2 = 4V$.
2.  **Right Loop ($I_2$)**:
    *   $40 - (5+5)I_2 - 10 = 0 \implies 30 = 10I_2 \implies I_2 = 3A$.
    *   Voltage at B (relative to bottom wire) = $40 - 5(3) = 25V$.
3.  **Conclusion**:
    *   $V_{AB} = V_A - V_B = 4V - 25V = -21V$.

---

## 2. Mesh Analysis

### 4. Three-Mesh Circuit
**Question:** Solve the circuit to find mesh currents.
![[Q&A-18.png]]

**Answer:**
Writing KVL equations for the three meshes:
1.  **Mesh 1**: $4 - 3I_1 - 1(I_1-I_2) - 4(I_1-I_3) = 0 \implies 8I_1 - I_2 - 4I_3 = 4$
2.  **Mesh 2**: $-1(I_2-I_1) - 2I_2 - 5(I_2-I_3) = 0 \implies -I_1 + 8I_2 - 5I_3 = 0$
3.  **Mesh 3**: $-4(I_3-I_1) - 5(I_3-I_2) - 6I_3 = 0 \implies -4I_1 - 5I_2 + 15I_3 = 0$

Solving simultanously:
*   $I_1 = 0.66 A$
*   $I_2 = 0.24 A$
*   $I_3 = 0.26 A$

### 5. Supermesh Analysis
**Question:** Find the current through the 2Ω resistor.
![[Q&A-20.png]]

**Answer:**
1.  **Supermesh**: The 6A current source defines $I_1 = 6A$.
2.  **Mesh 2**: $36 - 12(I_2 - I_1) - 6I_2 = 0 \implies 36 - 18I_2 + 72 = 0 \implies 18I_2 = 108 \implies I_2 = 6A$.
3.  **Mesh 3**: $-6(I_3-I_2) - 3I_3 - 2I_3 + 9 = 0 \implies -11I_3 + 36 + 9 = 0 \implies 11I_3 = 45$.
    *   $I_3 = 4.09 A$.
    *   Current through 2Ω resistor is **4.09 A**.

---

## 3. Circuit Theorems

### 6. Source Transformation
**Question:** Find the current flowing through branch AB using Source Transformation.
![[Q&A-11.png]]

**Answer:**
1.  **Left Side**: Transform 18V series 3Ω $\to$ 6A parallel 3Ω.
    *   Combine parallel resistors: $3\Omega || 6\Omega = 2\Omega$.
    *   Transform back: 6A parallel 2Ω $\to$ **12V series 2Ω**.
2.  **Right Side**: Transform 3A parallel 2Ω $\to$ **6V series 2Ω**.
3.  **Resulting Single Loop**:
    *   Sources: 12V and 6V opposing. Net Voltage = $12 - 6 = 6V$.
    *   Resistors: 2Ω + 2Ω (branch AB) + 2Ω = 6Ω.
    *   Current $I = 6V / 6\Omega = 1A$.
    *   Current through AB is **1 A**.

### 7. Superposition Theorem
**Question:** Find the current through the 1Ω resistor.
![[Q&A-22.png]]

**Answer:**
We calculate the contribution of each source independently:
1.  **4V Source Active**:
    *   $I' = \frac{4}{2+1+3} = 0.67 A$ (Down).
2.  **1A Source Active**:
    *   Use current divider in the T-network equivalents. Nodal analysis yields contribution $I'' \approx 0.08 A$.
3.  **3A Source Active**:
    *   Similar analysis yields contribution.
    *   **Total Current (via Nodal Analysis check) approx 0.75 A**.

### 8. Thevenin's Theorem
**Question:** Obtain the current through the 10Ω resistor.
![[Q&A-26.png]]

**Answer:**
1.  **Remove Load (10Ω)**: Calculate Open Circuit Voltage ($V_{th}$).
    *   Left side voltage (across 4Ω) = $5A \times 4\Omega = 20V$.
    *   Right side voltage (across 6Ω) = $10A \times 6\Omega = -60V$ (referenced to common bottom).
    *   $V_{th} = 20 - (-60) = 80V$.
2.  **Find Resistance ($R_{th}$)**: Open current sources.
    *   Resistance looking in = $4\Omega + 6\Omega = 10\Omega$.
3.  **Calculate Current**:
    *   $I = \frac{V_{th}}{R_{th} + R_L} = \frac{80}{10 + 10} = 4A$.
    *   Current is **4 A**.

---

## 4. Star-Delta Transformations

### 9. Theory
**Question:** Derive the Star-Delta transformation formula.
**Answer:**
Equating the resistance between terminals of a Star ($R_a, R_b, R_c$) and Delta ($R_{ab}, R_{bc}, R_{ca}$) network:
*   **Delta to Star**: $R_a = \frac{R_{ab}R_{ca}}{R_{ab} + R_{bc} + R_{ca}}$. (Product of adjacent / Sum of all).
*   **Star to Delta**: $R_{ab} = \frac{R_aR_b + R_bR_c + R_cR_a}{R_c}$. (Sum of products / Opposite R).

### 10. Complex Bridge Reduction
**Question:** Find equivalent resistance between A and B.
![[Q&A-14.png]]

**Answer:**
1.  Identify the central Delta ($4\Omega, 8\Omega, 6\Omega$) or Pi-network. Convert to Star ($R_1, R_2, R_3$):
    *   $R_1 = (4 \times 6) / 18 = 1.33\Omega$.
    *   $R_2 = (4 \times 8) / 18 = 1.78\Omega$.
    *   $R_3 = (6 \times 8) / 18 = 2.67\Omega$.
2.  Substitute back into the circuit structure and simplify series/parallel combinations.
    *   Result: **$R_{eq} \approx 5.08 \Omega$**.

---

## 5. Worked Examples

### Example 1: Equivalent Resistance Calculation
**Problem:** Find $R_{XY}$ when switch is open and closed variants.
**Solution:**
*   **All Open**: Resistors in simple series sum to **28Ω**.
*   **Shorts Applied**: Redrawing shows parallel structures.
    *   **Both Shorted**: $R_{eq} \approx 5.14 \Omega$.

### Example 2: Voltage Division
**Problem:** Calculate $V_{AB}$ for a bridge with 20V source.
**Solution:**
*   $V_A = 20 \times \frac{15}{40} = 7.5V$.
*   $V_B = 20 \times \frac{10}{50} = 4.0V$.
*   $V_{AB} = 7.5 - 4.0 = 3.5V$.

***