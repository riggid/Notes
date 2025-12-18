---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### DC Circuits & Network Theorems

### 1. Equivalent Resistance
**Question:** Obtain the equivalent resistance between two terminals (A & B) in a given complex resistor network.

**Methodology:**
To find the equivalent resistance ($R_{eq}$):
1.  **Series Combination**: Resistors connected end-to-end carrying the same current.
    $$ R_{eq} = R_1 + R_2 + \dots + R_n $$
2.  **Parallel Combination**: Resistors connected across the same potential difference.
    $$ \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n} $$
3.  **Star-Delta Transformation**: If the network cannot be simplified by simple series-parallel reduction (e.g., bridge circuits), use transformation:
    -   **Delta to Star ($R_{12}, R_{23}, R_{31} \to R_1, R_2, R_3$)**:
        $$ R_1 = \frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}} $$
    -   **Star to Delta ($R_1, R_2, R_3 \to R_{12}, R_{23}, R_{31}$)**:
        $$ R_{12} = R_1 + R_2 + \frac{R_1 R_2}{R_3} $$
**Step-by-step**: Identify simple series/parallel blocks first, reduce them, then look for Star/Delta structures, convert, and repeat until single resistance remains.

---

### 2. Superposition Theorem
**Question:** Determine the current through a specific resistor in a circuit with multiple sources using the Superposition Theorem.

**Statement:**
"In any linear, bilateral network containing two or more independent sources, the response (current or voltage) in any element is the algebraic sum of the responses caused by each independent source acting alone, while all other independent sources are replaced by their internal impedances."

**Procedure:**
1.  **Select one source** (say Voltage Source $V_1$) and **deactivate** all others:
    -   Short circuit other Voltage Sources.
    -   Open circuit other Current Sources.
2.  Calculate the current ($I'$) through the resistor due to $V_1$ alone.
3.  **Repeat** for the next source (say $V_2$), deactivating $V_1$ and others. Calculate current ($I''$).
4.  **Final Current**: $I = I' + I''$ (Take care of direction/polarity).

---

### 3. Thevenin’s Theorem
**Question:** Obtain the Thevenin’s Equivalent circuit with respect to a given pair of terminals for a network containing independent sources and resistors.

**Statement:**
"Any linear two-terminal circuit consisting of sources and resistors can be replaced by an equivalent circuit consisting of a single voltage source ($V_{th}$) in series with a single resistor ($R_{th}$)."

**Procedure:**
1.  **Find $V_{th}$ (Thevenin Voltage)**:
    -   Remove the load resistor across the terminals of interest (Open Circuit).
    -   Calculate the open-circuit voltage ($V_{OC}$) across these terminals using circuit analysis (KVL/KCL).
    -   $V_{th} = V_{OC}$.
2.  **Find $R_{th}$ (Thevenin Resistance)**:
    -   Deactivate all independent sources (Short Voltage sources, Open Current sources).
    -   Calculate the equivalent resistance looking into the open terminals.
3.  **Equivalent Circuit**: Draw $V_{th}$ in series with $R_{th}$ and reconnect the load $R_L$.
    -   Load Current $I_L = \frac{V_{th}}{R_{th} + R_L}$.

---

*Last updated: December 2025*
