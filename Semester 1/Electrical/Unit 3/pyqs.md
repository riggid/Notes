---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Three Phase Systems & Installations

### 1. Star Connection Relation
**Question:** Derive the relationship between line and phase voltage ($V_L = \sqrt{3}V_{ph}$) and current ($I_L = I_{ph}$) for a balanced Star connected system.

**Answer:**
-   **Current**: In Star connection, the line conductors are directly connected to the phase windings. Hence, Line Current = Phase Current.
    $$ I_L = I_{ph} $$
-   **Voltage**:
    1.  The potential difference between two line terminals (e.g., R and Y) is the Line Voltage $V_{RY}$.
    2.  Vectorially, $V_{RY} = V_{RN} - V_{YN}$ (Potential difference between phase R and phase Y).
    3.  In phasor terms: $\vec{V}_{RY} = \vec{V}_{ph} \angle 0^\circ - \vec{V}_{ph} \angle -120^\circ$.
    4.  Using parallelogram law of vector addition for subtraction:
        $$ V_L = \sqrt{V_{ph}^2 + V_{ph}^2 + 2 V_{ph} V_{ph} \cos(60^\circ)} $$
        (Angle between $V_R$ and $-V_Y$ is $60^\circ$).
    5.  $V_L = \sqrt{3 V_{ph}^2} = \sqrt{3} V_{ph}$.
    6.  **Result**: $V_L = \sqrt{3} V_{ph}$ and lags flux by $30^\circ$.

---

### 2. Two Wattmeter Method
**Question:** Explain the Two Wattmeter method for measuring power in a three-phase circuit with a neat circuit diagram. Derive the expression for power factor.

**Answer:**
-   **Method**: Two wattmeters ($W_1$ and $W_2$) are essential to measure total power in a 3-wire system (Star or Delta).
-   **Readings**:
    -   $W_1 = V_L I_L \cos(30^\circ - \phi)$
    -   $W_2 = V_L I_L \cos(30^\circ + \phi)$
-   **Total Power**: $P = W_1 + W_2 = V_L I_L [\cos(30-\phi) + \cos(30+\phi)] = \sqrt{3} V_L I_L \cos \phi$.
-   **Power Factor Derivation**:
    1.  $W_1 - W_2 = V_L I_L [\cos(30-\phi) - \cos(30+\phi)] = V_L I_L \sin \phi$.
    2.  Divide difference by sum:
        $$ \frac{W_1 - W_2}{W_1 + W_2} = \frac{V_L I_L \sin \phi}{\sqrt{3} V_L I_L \cos \phi} = \frac{\tan \phi}{\sqrt{3}} $$
    3.  $\tan \phi = \sqrt{3} \frac{W_1 - W_2}{W_1 + W_2}$.
    4.  **Power Factor**: $\cos \phi = \cos \left[ \tan^{-1} \left( \sqrt{3} \frac{W_1 - W_2}{W_1 + W_2} \right) \right]$.

---

### 3. Protection Devices
**Question:** Write short notes on the working principle of MCB and ELCB.

**Answer:**
**1. MCB (Miniature Circuit Breaker):**
-   **Function**: Automatically switches off electrical circuit during abnormal conditions (overload or short circuit).
-   **Working Principle**:
    -   **Thermal Operation** (Overload): A bimetallic strip heats up and bends due to excess current, tripping the latch.
    -   **Magnetic Operation** (Short Circuit): A solenoid coil creates a strong magnetic field during a short circuit, instantly pulling a plunger to trip the mechanism.
    -   It can be reset manually after the fault is cleared.

**2. ELCB (Earth Leakage Circuit Breaker) / RCCB:**
-   **Function**: Protects against earth leakage and electric shock.
-   **Working Principle**:
    -   It works on the principle of Kirchhoff's Current Law. It monitors the current going in (Phase) and coming out (Neutral).
    -   Under normal conditions, $I_{phase} = I_{neutral}$. Net flux in the sensing transformer core is zero.
    -   During a leakage fault, some current flows to earth, so $I_{phase} > I_{neutral}$.
    -   This unbalance creates a net flux, inducing an EMF in the sensing coil, which activates the relay to trip the circuit.

---

*Last updated: December 2025*
