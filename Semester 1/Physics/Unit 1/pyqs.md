---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Short Answer Questions

### 1. Maxwell's Equations and Wave Equation
**Question:** Starting with Maxwell's relation $\nabla \times E = -\frac{\partial B}{\partial t}$, derive the wave equation for electric field: $\nabla^2 E = \mu_0 \epsilon_0 \frac{\partial^2 E}{\partial t^2}$

**Answer:**
1.  Start with Faraday's Law:
    $$ \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} $$
2.  Take the curl of both sides:
    $$ \nabla \times (\nabla \times \vec{E}) = -\nabla \times \left( \frac{\partial \vec{B}}{\partial t} \right) = -\frac{\partial}{\partial t} (\nabla \times \vec{B}) $$
3.  Use the vector identity $\nabla \times (\nabla \times \vec{A}) = \nabla(\nabla \cdot \vec{A}) - \nabla^2 \vec{A}$:
    $$ \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E} = -\frac{\partial}{\partial t} (\nabla \times \vec{B}) $$
4.  In free space (vacuum), charge density $\rho = 0$ and current density $\vec{J} = 0$.
    -   From Gauss's Law: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} = 0$.
    -   From Ampere's Law: $\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$.
5.  Substitute these into the equation:
    $$ 0 - \nabla^2 \vec{E} = -\frac{\partial}{\partial t} \left( \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right) $$
    $$ -\nabla^2 \vec{E} = -\mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} $$
6.  Rearranging gives the standard wave equation:
    $$ \nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} $$

---

### 2. Physical Significance of Vector Operators
**Question:** Define the physical significance of divergence and curl of a vector field.

**Answer:**
-   **Divergence ($\nabla \cdot \vec{V}$)**:
    -   It represents the net outward flux of a vector field per unit volume.
    -   **Positive Divergence**: Indicates a "source" where field lines originate (e.g., positive charge).
    -   **Negative Divergence**: Indicates a "sink" where field lines converge (e.g., negative charge).
    -   **Zero Divergence**: Indicates a solenoidal field with no sources or sinks (incompressible flow or magnetic fields).
-   **Curl ($\nabla \times \vec{V}$)**:
    -   It represents the rotation or circulation of the vector field around a point.
    -   It measures the "swirliness" or vorticity of the field.
    -   If $\nabla \times \vec{V} = 0$, the field is irrotational (conservative), meaning work done in a closed path is zero.

---

### 3. Physical Meaning of Gradient
**Question:** What is the physical meaning of the gradient of a scalar field?

**Answer:**
The gradient of a scalar field $\phi(x, y, z)$, denoted as $\nabla \phi$, is a vector that represents:
1.  **Direction**: It points in the direction of the greatest rate of increase (steepest ascent) of the scalar function.
2.  **Magnitude**: The magnitude $|\nabla \phi|$ gives the maximum rate of change of the function at that point.
3.  **Normality**: The gradient vector is always normal (perpendicular) to the level surface (equipotential surface) defined by $\phi = \text{constant}$.

---

### 4. Magnetic Monopoles
**Question:** "Magnetic monopoles do not exist." Justify this statement using Maxwell's equations.

**Answer:**
-   This is justified by Maxwell's second equation (Gauss's Law for Magnetism):
    $$ \nabla \cdot \vec{B} = 0 $$
-   **Physical Interpretation**:
    -   The divergence of the magnetic field is zero everywhere.
    -   This means the net magnetic flux entering any closed surface must equal the net flux leaving it.
    -   Unlike electric fields where divergence can be non-zero (indicating isolated charges), magnetic field lines always form continuous closed loops.
    -   They have no starting or ending points, implying that isolated magnetic "north" or "south" poles (monopoles) cannot exist; they always exist in dipoles.

---

### Long Answer Questions

### 1. Black Body Radiation
**Question:** Describe the Black body radiation spectrum. Explain the failures of classical physics (Rayleigh-Jeans law) to explain the experimental spectrum at low wavelengths (Ultraviolet Catastrophe).

**Answer:**
**Black Body Spectrum:**
-   A black body emits radiation at all wavelengths.
-   The energy distribution curve ($E_\lambda$ vs $\lambda$) depends only on temperature.
-   As temperature increases, the total energy emitted (area under the curve) increases, and the peak emission shifts to shorter wavelengths (Wien's Displacement Law).

**Classicial Failure (Rayleigh-Jeans Law):**
-   Classical physics treated radiation as standing waves in a cavity and assigned energy $kT$ to each mode (Equipartition Theorem).
-   The derived Rayleigh-Jeans law was:
    $$ u(\lambda) d\lambda = \frac{8 \pi k T}{\lambda^4} d\lambda $$
-   **Success**: It matched experimental data at long wavelengths (low frequencies).
-   **Failure (Ultraviolet Catastrophe)**: At short wavelengths ($\lambda \to 0$), the formula predicts energy density $u(\lambda) \to \infty$. This implies a black body would emit infinite energy instantly, which is physically impossible.
-   **Resolution**: Planck resolved this by quantizing energy ($E = nh\nu$), leading to Planck's Law which matches the spectrum at all wavelengths.

---

*Last updated: December 2025*
