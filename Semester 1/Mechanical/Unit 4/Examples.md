# [Back](../../Mechanical.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 4: Worked Examples

### Example 1: Machining Time Calculation for a Turning Operation

A cylindrical workpiece needs to be turned from an initial diameter of 50 mm to a final diameter of 42 mm. The total length of the job is 120 mm. The roughing speed is 30 m/min, and finishing speed is 60 m/min. The feed for roughing is 0.24 mm/rev, and for finishing is 0.10 mm/rev. The maximum depth of cut for roughing is 2 mm, and the finish allowance is 0.75 mm. Assume an over travel of the tool ($L_o$) of 2 mm. Available spindle speeds are 70, 110, 176, 280, 440, 700, 1100, 1760, and 2800 RPM.

#### Calculate:
a) The appropriate spindle speed (N) for the roughing pass, choosing the nearest available speed.
b) The machining time for one roughing pass.
c) The appropriate spindle speed (N) for the finishing pass, choosing the nearest available speed.
d) The machining time for one finishing pass.
e) The total actual machining time required.

#### Solution

**Given Data:**
*   Initial Diameter ($D_{initial}$) = 50 mm
*   Final Diameter ($D_{final}$) = 42 mm
*   Length of job (L) = 120 mm
*   Over travel of the tool ($L_o$) = 2 mm
*   **Roughing**:
    *   Cutting Speed ($V_{rough}$) = 30 m/min
    *   Feed ($f_{rough}$) = 0.24 mm/rev
    *   Maximum Depth of Cut ($d_r$) = 2 mm
*   **Finishing**:
    *   Cutting Speed ($V_{finish}$) = 60 m/min
    *   Feed ($f_{finish}$) = 0.10 mm/rev
    *   Finish Allowance ($A_f$) = 0.75 mm
*   **Available Spindle Speeds (N_available)**: 70, 110, 176, 280, 440, 700, 1100, 1760, 2800 RPM.

---

**Step 1: Calculate Total Stock to be Removed**
Total Stock to be removed = $(D_{initial} - D_{final}) / 2 = (50 - 42) / 2 = 8 / 2 = 4 \text{ mm}$.
This is the **Total Machining Allowance** (A).

---

**Step 2: Determine Number of Passes**

*   **Roughing Stock Available**: This is the total allowance minus the finish allowance.
    Roughing stock = $A - A_f = 4 \text{ mm} - 0.75 \text{ mm} = 3.25 \text{ mm}$.
*   **Number of Roughing Passes ($P_r$)**:
    $P_r = \text{Roughing stock available} / d_r = 3.25 \text{ mm} / 2 \text{ mm/pass} = 1.625 \text{ passes}$.
    Since a partial pass depth is usually not performed for roughing, we round up to get 2 roughing passes.
*   **Number of Finishing Passes ($P_f$)**:
    Typically, 1 finishing pass is sufficient to remove the finish allowance if the depth of cut for finishing is small.
    The allowance for finishing is $A_f = 0.75 \text{ mm}$.
    The depth of cut for finishing is $d_f = (\text{from context of provided solution}) 0.10 \text{ mm/rev}$.
    This ratio $0.75 / 0.10 = 7.5$ implies multiple passes which is not typical practice for finishing. As per the problem context solution which assumes 1 finishing pass:
    $P_f = 1$ finishing pass.

---

**a) Calculate Spindle Speed (N) for Roughing Pass:**
The diameter for roughing passes should be an average. The roughing starts at 50 mm and eventually reduces the diameter to $42 \text{ mm} + (2 \times 0.75 \text{ mm finish allowance}) = 43.5 \text{ mm}$ (before finishing).
Or, considering the workpiece goes from 50mm down to 42mm overall. Average diameter = $(D_{initial} + D_{final}) / 2 = (50 + 42) / 2 = 46 \text{ mm}$.
Using the formula $V = \frac{\pi D N}{1000} \implies N = \frac{1000 V}{\pi D}$.
$N_{rough\_calc} = \frac{1000 \times 30 \text{ m/min}}{\pi \times 46 \text{ mm}} \approx 207.59 \text{ RPM}$.
Nearest available RPM: From the list (70, 110, 176, 280, 440...), 176 RPM is the closest available speed below the calculated value (as 280 RPM is considered too high compared to 207.59 for this example's logic).
So, **$N_{rough} = 176 \text{ RPM}$**.

---

**b) Calculate Machining Time for one Roughing Pass ($t_{rough}$):**
Using the formula $t = \frac{L + L_o}{f \times N}$.
$t_{rough} = \frac{120 \text{ mm} + 2 \text{ mm}}{0.24 \text{ mm/rev} \times 176 \text{ RPM}} = \frac{122}{42.24} \approx 2.888 \text{ minutes}$.

---

**c) Calculate Spindle Speed (N) for Finishing Pass:**
The diameter for the finishing pass is the final diameter ($D_{final}$) = 42 mm.
Using the formula $N = \frac{1000 V}{\pi D}$.
$N_{finish\_calc} = \frac{1000 \times 60 \text{ m/min}}{\pi \times 42 \text{ mm}} \approx 454.73 \text{ RPM}$.
Nearest available RPM: From the list (70, 110, 176, 280, 440, 700...), 440 RPM is the closest available speed below the calculated value.
So, **$N_{finish} = 440 \text{ RPM}$**.

---

**d) Calculate Machining Time for one Finishing Pass ($t_{finish}$):**
Using the formula $t = \frac{L + L_o}{f \times N}$.
$t_{finish} = \frac{120 \text{ mm} + 2 \text{ mm}}{0.10 \text{ mm/rev} \times 440 \text{ RPM}} = \frac{122}{44} \approx 2.77 \text{ minutes}$.

---

**e) Calculate Total Actual Machining Time Required:**
Total Machining Time = (Number of Roughing Passes $\times t_{rough}$) + (Number of Finishing Passes $\times t_{finish}$)
Total Machining Time = $(2 \times 2.888 \text{ minutes}) + (1 \times 2.77 \text{ minutes})$
Total Machining Time = $5.776 \text{ minutes} + 2.77 \text{ minutes}$
**Total Machining Time = $8.546 \text{ minutes}$**.

---

### Example 2: Efficient Chuck for Cylindrical Part

A manufacturing engineer needs to set up a lathe to machine a cylindrical part with a perfectly round cross-section. What type of chuck would be most efficient for quickly centering and clamping this workpiece, and why?

#### Solution
For quickly centering and clamping a cylindrical part with a perfectly round cross-section, a **three-jaw chuck (self-centering chuck)** would be the most efficient choice.

*   **Efficiency**: The main advantage of this chuck is the quick and automated way in which a typical cylindrical or symmetrical round job is centered.
*   **Mechanism**: All three jaws of a self-centering chuck move radially inward or outward by the same amount simultaneously when operated by a single key. This synchronized movement allows the jaws to easily and automatically center any job whose external gripping surface is cylindrical or symmetrical relative to the spindle axis. This automates the centering process, saving significant time compared to individually adjusting each jaw on an independent jaw chuck.

---

### Example 3: Non-Conventional Machining for Ceramic Holes

A very hard, brittle ceramic component requires drilling of intricate, small-diameter holes. Suggest an appropriate non-conventional machining process for this task, and justify your choice by citing its advantages for such materials.

#### Solution
For drilling intricate, small-diameter holes in a very hard, brittle ceramic component, **Abrasive Jet Machining (AJM)** would be an appropriate non-conventional machining process.

*   **Suitability for Brittle Materials**: AJM is especially suitable for brittle materials because its material removal principle is based on tiny brittle fracture of the metallic layer (or ceramic layer) with high-velocity impact of abrasive particles. Ceramics are brittle, making them ideal for material removal via controlled micro-fracture without macroscopic cutting forces.
*   **Intricate Shapes & Hardness**: AJM can precisely drill cavities and holes of any intricate shape in materials of virtually any hardness. This directly addresses the requirement for intricate, small-diameter holes in a very hard material like ceramic.
*   **No Direct Contact**: A key advantage is that there is no direct physical contact between the tool (the nozzle) and the workpiece. This prevents tool damage (as ceramics are highly abrasive) and eliminates associated mechanical stresses on the fragile ceramic, minimizing the risk of macroscopic cracking or chipping during machining.
*   **Low Heat Generation**: The amount of heat generation in AJM is low and localized. This is beneficial for heat-sensitive materials like ceramics, which can otherwise suffer from thermal damage, micro-cracks, or phase changes due to high heat input from other thermal machining processes.

---
# [Back](../../Mechanical.md)