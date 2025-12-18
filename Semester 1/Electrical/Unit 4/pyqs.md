---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Transformers & Electrical Machines

### 1. Transformer EMF Equation
**Question:** Derive the EMF equation of a single-phase transformer ($E = 4.44 f \phi_m N$).

**Answer:**
1.  Let the flux vary sinusoidally: $\phi = \phi_m \sin(\omega t)$.
2.  Induced EMF by Faraday's Law: $e = -N \frac{d\phi}{dt}$.
3.  $e = -N \frac{d}{dt} (\phi_m \sin \omega t) = -N \omega \phi_m \cos \omega t = N \omega \phi_m \sin(\omega t - 90^\circ)$.
4.  **Maximum value**: $E_m = N \omega \phi_m = N (2\pi f) \phi_m$.
5.  **RMS value**: $E_{rms} = \frac{E_m}{\sqrt{2}} = \frac{2\pi f \phi_m N}{\sqrt{2}}$.
6.  $E_{rms} = \sqrt{2} \pi f \phi_m N \approx 4.44 f \phi_m N$.
    **Result**: $E = 4.44 f \phi_m N$.

---

### 2. Transformer Efficiency
**Question:** Define efficiency of a transformer. Derive the condition for maximum efficiency.

**Answer:**
-   **Efficiency ($\eta$)**: The ratio of output power to input power.
    $$ \eta = \frac{\text{Output}}{\text{Output} + \text{Losses}} = \frac{V_2 I_2 \cos \phi}{V_2 I_2 \cos \phi + P_i + P_{cu}} $$
    where $P_i$ is Iron loss (constant) and $P_{cu} = I_2^2 R_{eq}$ is Copper loss (variable).
-   **Maximum Efficiency Condition**:
    -   Differentiate $\eta$ w.r.t load current $I_2$ and equate to zero ($d\eta/dI_2 = 0$).
    -   Simplifying yields the condition:
        $$ P_i = I_2^2 R_{eq} $$
    -   **Condition**: Iron Loss (Constant Loss) = Copper Loss (Variable Loss).
    -   Load current at max efficiency: $I_{2(max \eta)} = I_{2(fl)} \sqrt{\frac{P_i}{P_{cu(fl)}}}$.

---

### 3. DC Motor Principle and Torque
**Question:** Explain the principle of operation of a DC motor. Derive the torque equation $T \propto \phi I_a$.

**Answer:**
-   **Principle**: When a current-carrying conductor is placed in a magnetic field, it experiences a mechanical force given by Lorentz force law ($F = BIL$). The commutator reverses current direction to maintain unidirectional torque.
-   **Torque Equation**:
    1.  Power developed $P_m = E_b I_a$.
    2.  Mechanical power $P_m = \omega T = 2\pi \frac{N}{60} T$.
    3.  Equating both: $T \cdot \frac{2\pi N}{60} = E_b I_a$.
    4.  Substitute Back EMF $E_b = \frac{\phi Z N P}{60 A}$.
        $$ T \cdot \frac{2\pi N}{60} = \left( \frac{\phi Z N P}{60 A} \right) I_a $$
    5.  Solving for T:
        $$ T = \frac{\phi Z P}{2\pi A} I_a $$
    6.  Since $Z, P, A$ are constants for a machine:
        $$ T = K \phi I_a \implies T \propto \phi I_a $$

---

### 4. Induction Motor Concepts
**Question:** Explain the concept of Rotating Magnetic Field and Slip in a 3-phase induction motor.

**Answer:**
-   **Rotating Magnetic Field (RMF)**:
    -   When 3-phase supply is given to the 3-phase stator winding, a magnetic field of constant magnitude ($1.5 \phi_m$) is produced which rotates at synchronous speed ($N_s = 120f/P$).
    -   This RMF cuts the rotor conductors, inducing EMF and current (induction).
-   **Slip ($s$)**:
    -   The rotor rotates at speed $N$, which is always slightly less than the synchronous speed $N_s$.
    -   The difference between synchronous speed and rotor speed is called slip speed.
    -   **Slip** is defined as the ratio of slip speed to synchronous speed:
        $$ s = \frac{N_s - N}{N_s} $$
    -   Usually expressed as percentage. At start, $N=0 \to s=1$. At no load, $N \approx N_s \to s \approx 0$.

---

*Last updated: December 2025*
