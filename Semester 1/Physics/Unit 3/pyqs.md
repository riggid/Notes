---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Magnetic Materials & Superconductivity

### 1. Magnetic Monopoles and Divergence of B
**Question:** The divergence of the magnetic field is zero ($\nabla \cdot B = 0$). Explain the physical significance of this statement regarding the existence of magnetic monopoles.

**Answer:**
-   **Statement**: $\nabla \cdot \vec{B} = 0$ implies that there are no points in space where magnetic field lines start or end.
-   **Significance**:
    -   Magnetic field lines always form continuous closed loops.
    -   This means that for any closed surface, the net magnetic flux entering must equal the net magnetic flux leaving.
    -   This mathematically forbids the existence of isolated magnetic charges (monopoles). Every north pole must have a corresponding south pole; splitting a magnet simply creates smaller dipoles.

---

### 2. Type I and Type II Superconductors
**Question:** Distinguish between Type I and Type II superconductors with relevant examples.

**Answer:**
| Feature | Type I Superconductors | Type II Superconductors |
| :--- | :--- | :--- |
| **Meissner Effect** | Exhibits strictly perfect diamagnetism until critical field $H_c$. | Perfect diamagnetism up to $H_{c1}$, then mixed state up to $H_{c2}$. |
| **Transition** | Sharp transition from superconducting to normal state at $H_c$. | Transition occurs over a range of fields ($H_{c1}$ to $H_{c2}$). |
| **Critical Field** | Low critical field value ($H_c$). | High critical field values ($H_{c2}$ can be very large). |
| **Vortex State** | Does not exist. |Exists between $H_{c1}$ and $H_{c2}$ (flux lines penetrate). |
| **Materials** | Pure metals (e.g., Al, Pb, Hg). | Alloys and ceramics (e.g., Nb-Ti, YBCO). |
| **Application** | Limited use due to low $H_c$. | Used in high-field magnets (MRI, particle accelerators). |

---

### 3. Meissner Effect
**Question:** Define the Meissner effect and explain why superconductors are considered perfect diamagnets.

**Answer:**
-   **Definition**: The complete expulsion of magnetic field lines from the interior of a material when it is cooled below its critical temperature ($T_c$) in a weak magnetic field is called the Meissner Effect.
-   **Perfect Diamagnetism**:
    -   Inside the superconductor, $B = 0$.
    -   Since $B = \mu_0 (H + M)$, if $B=0$, then $H = -M$.
    -   Magnetic susceptibility $\chi = \frac{M}{H} = -1$.
    -   A susceptibility of -1 corresponds to perfect diamagnetism.

---

### Electrical Properties & Hall Effect

### 1. Classical Free Electron Theory (CFET)
**Question:** Discuss the assumptions of the Classical Free Electron Theory. What were its successes and major failures?

**Answer:**
-   **Assumptions**:
    1.  Valence electrons move freely throughout the metal like gas molecules in a container (Drude-Lorentz model).
    2.  They collide only with the positive ion cores (lattice), not with each other.
    3.  Collisions are instantaneous and elastic.
    4.  They obey Maxwell-Boltzmann statistics.
-   **Successes**:
    -   Successfully explained Ohm's Law ($V=IR$).
    -   Explained the Wiedemann-Franz law (relation between thermal and electrical conductivity).
-   **Failures**:
    -   **Specific Heat**: Predicted specific heat of electrons to be $\frac{3}{2}R$, but experimental values are much smaller.
    -   **Temperature Dependence**: Could not explain the correct dependence of electrical conductivity on temperature ($\sigma \propto 1/T$ vs experimental $\sigma \propto 1/\sqrt{T}$).
    -   **Hall Constant**: Could not explain the positive Hall coefficient in some metals (e.g., Zinc, Cadmium) or semiconductors.

---

### 2. Fermi Energy
**Question:** Define Fermi Energy. Sketch and explain the Fermi-Dirac distribution function at $T=0K$ and $T>0K$.

**Answer:**
-   **Definition**: Fermi Energy ($E_F$) is the energy of the highest occupied quantum state in a system of fermions (electrons) at absolute zero temperature ($0K$).
-   **Distribution**:
    -   **At T = 0K**: The probability of occupation $f(E) = 1$ for all energies $E < E_F$, and $f(E) = 0$ for $E > E_F$. (Step function).
    -   **At T > 0K**: Thermal energy excites electrons near $E_F$ to higher states. The step smooths out. $f(E_F) = 0.5$.

---

### 3. Hall Effect
**Question:** What is the Hall Effect? Derive an expression for the Hall Coefficient ($R_H$) and Hall Voltage ($V_H$). Mention its applications.

**Answer:**
-   **Definition**: When a current-carrying conductor is placed in a transverse magnetic field, an electric field (Hall field) is induced perpendicular to both the current and the magnetic field.
-   **Derivation**:
    1.  Force equality at equilibrium: Magnetic force ($F_m$) = Electric force ($F_e$).
    2.  $q v_d B = q E_H \implies E_H = v_d B$.
    3.  Current density $J = n q v_d \implies v_d = \frac{J}{nq}$.
    4.  Substitute $v_d$: $E_H = \frac{J B}{n q}$.
    5.  Hall Coefficient $R_H = \frac{E_H}{J B} = \frac{1}{n q}$.
    6.  Hall Voltage $V_H = E_H \cdot d$ (where $d$ is width). $V_H = \frac{1}{nq} \frac{I}{wd} B \cdot d = \frac{I B}{n q w}$ (where $w$ is thickness).
-   **Applications**:
    -   To determine the sign of charge carriers (n-type or p-type).
    -   To calculate carrier concentration ($n$).
    -   To measure magnetic fields (Hall probes).

---

### 4. Density of States
**Question:** Derive an expression for the Density of States $g(E)$ for a free electron gas in 3 dimensions.

**Answer:**
-   The number of allowed quantum states in a sphere of radius $n$ in k-space is $N = 2 \times \frac{1}{8} \times \frac{4}{3}\pi n^3$ (factor 2 for spin).
-   Energy $E = \frac{n^2 h^2}{8mL^2} \implies n = \sqrt{\frac{8mL^2E}{h^2}} = \left(\frac{8mL^2}{h^2}\right)^{1/2} E^{1/2}$.
-   Substitute $n$ into $N$: $N = \frac{\pi}{3} \left(\frac{8mL^2}{h^2}\right)^{3/2} E^{3/2}$.
-   Density of states $g(E) = \frac{dN}{dE}$.
-   Differentiating $N$ w.r.t $E$:
    $$ g(E) = \frac{\pi}{3} \left(\frac{8mL^2}{h^2}\right)^{3/2} \cdot \frac{3}{2} E^{1/2} $$
    $$ g(E) = \frac{\pi}{2} \left(\frac{8mL^2}{h^2}\right)^{3/2} \sqrt{E} $$
-   Simplifying constants gives $g(E) = \frac{4\pi V}{h^3} (2m)^{3/2} \sqrt{E}$. (where $V=L^3$).

---

*Last updated: December 2025*
