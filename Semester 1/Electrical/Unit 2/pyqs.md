---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### AC Circuits & Three-Phase Systems

### 1. Three-Phase vs Single-Phase
**Question:** Explain the advantages of a 3-phase system over a single-phase system.

**Answer:**
1.  **More Economical**: For transmitting the same amount of power at the same voltage over the same distance, a 3-phase system requires about 25% less conductor material than a single-phase system.
2.  **Constant Power/Torque**: In a single-phase system, instantaneous power pulsates (double frequency). In a balanced 3-phase system, the total instantaneous power is constant ($3 V_{ph} I_{ph} \cos \phi$). This results in smoother, vibration-free operation of motors.
3.  **Self-Starting Motors**: 3-phase induction motors produce a rotating magnetic field and are self-starting. Single-phase motors are not self-starting and require auxiliary windings.
4.  **Higher Rating**: The output rating of a 3-phase machine is approx 1.5 times that of a single-phase machine of the same size.
5.  **DC Rectification**: 3-phase rectifiers provide a smoother DC output (less ripple) than single-phase rectifiers, requiring simpler filtering.

---

### 2. Balanced Systems Relations
**Question:** Define a balanced three-phase system. Discuss the relationship between line and phase quantities in Star and Delta connections.

**Answer:**
**Balanced System**: A 3-phase system where the phase voltages (or currents) are equal in magnitude and displaced from each other by $120^\circ$ electrical. The loads connected across the phases are also identical in impedance ($Z_{ph}$).

**1. Star Connection (Y):**
-   **Current**: Line Current = Phase Current.
    $$ I_L = I_{ph} $$
-   **Voltage**: Line Voltage is vector sum of phase voltages.
    $$ V_L = \sqrt{3} V_{ph} $$
-   The line voltage leads the corresponding phase voltage by $30^\circ$.

**2. Delta Connection ($\Delta$):**
-   **Voltage**: Line Voltage = Phase Voltage.
    $$ V_L = V_{ph} $$
-   **Current**: Line Current is vector sum of phase currents.
    $$ I_L = \sqrt{3} I_{ph} $$
-   The line current lags the corresponding phase current by $30^\circ$.

**Power**: For both systems: $P = \sqrt{3} V_L I_L \cos \phi$.

---

*Last updated: December 2025*
