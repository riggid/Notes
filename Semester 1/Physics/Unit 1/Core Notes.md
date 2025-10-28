# [Back](../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 1: Concepts Leading to Quantum Mechanics

## Maxwell's Equations and Electromagnetic Waves

Maxwell's equations are a set of fundamental equations that describe the behavior of electric and magnetic fields. They can be expressed in differential form (applying to every point in space) or integral form (applying to larger regions).
*   The **Integral Forms** describe the behavior of fields over extended regions (volumes, surfaces, lines). Useful for calculations with symmetry.
*   **Differential Forms** describe field behavior **at a specific point**. Relate local spatial variations (divergence, curl) to local sources or time variations.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#CL2_Q1:%20Difference%20between%20integral%20and%20differential%20forms%20of%20Maxwell's%20equations)

### **Vector Operators**
-   **Gradient ($\nabla\phi$)**: Acts on a scalar field ($\phi$) to produce a vector field. Points in the direction of **steepest increase**. Its magnitude is the maximum rate of change. (e.g., $\vec{E} = -\nabla V$).
-   **Divergence ($\nabla \cdot \vec{A}$)**: Acts on a vector field ($\vec{A}$) to produce a scalar. Measures the "spreading out" or net outflow (source/sink) of a vector field from a point.
-   **Curl ($\nabla \times \vec{A}$)**: Acts on a vector field ($\vec{A}$) to produce another vector field. Measures the "rotation" or "swirl" of a vector field, indicating its tendency to circulate around a point. (e.g., current creates circulating $\vec{B}$).
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Explain%20the%20geometric%20interpretation%20of%20the%20gradient,%20divergence%20and%20curl%20of%20a%20vector%20field?)

### **Maxwell's Equations in a Medium**
-   **Gauss's Law for Electric Fields**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$. Source: **electric charge density** $\rho$.
-   **Gauss's Law for Magnetic Fields**: $\nabla \cdot \vec{B} = 0$. Physically, **magnetic monopoles do not exist** (magnetic field lines always form closed loops).
-   **Faraday's Law of Induction**: $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$. A time-varying magnetic field induces an electric field.
-   **Ampere-Maxwell Law**: $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$. Sources: **electric current density** $\vec{J}$ and **displacement current** $\epsilon_0 \frac{\partial\vec{E}}{\partial t}$.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Which%20of%20Maxwell's%20equations%20contain%20'sources'?)

### **The Wave Equation from Maxwell's Equations**
In free space ($\rho=0, \vec{J}=0$), Maxwell's equations can be combined to derive the wave equation for both $\vec{E}$ and $\vec{B}$.
The result: $$\nabla^2 \vec{E} = \mu_{0}\epsilon_{0} \frac{\partial^2 \vec{E}}{\partial t^2}$$  and $$\nabla^2 \vec{B} = \mu_{0}\epsilon_{0} \frac{\partial^2 \vec{B}}{\partial t^2}$$
These describe transverse EM waves propagating at speed of light $c = 1/\sqrt{\mu_{0}\epsilon_{0}}$.
**Phase, Direction:** $\vec{E}$ and $\vec{B}$ fields are **in phase**, mutually **perpendicular**, and both **perpendicular to the direction of wave propagation** ($\vec{E} \times \vec{B}$ gives propagation direction).
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#CL2_Q3:%20How%20do%20Maxwell's%20equations%20describe%20electromagnetic%20waves?), [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Discuss%20the%20phase%20correlation%20and%20direction%20of%20the%20E%20and%20B%20fields%20of%20an%20EM%20Wave.)

---

## Energy and Polarization of EM Waves

### **Energy Density of EM Waves**
Energy per unit volume ($u$) is shared equally between electric ($u_E = \frac{1}{2}\epsilon_{0}E^2$) and magnetic ($u_B = \frac{1}{2\mu_{0}}B^2$) fields. Total instantaneous density $u = \epsilon_{0}E^2 = \frac{1}{\mu_{0}}B^2$.
### **Poynting Vector**
$\vec{S} = \frac{1}{\mu_{0}} (\vec{E} \times \vec{B})$ describes the direction and rate of energy flow per unit area. Its magnitude is $S = uc$.
### **Polarization of Light**
Describes the orientation of $\vec{E}$ field oscillations.
-   **Circularly Polarized**: $\vec{E}$ rotates in a **circle**. (Equal amplitudes, $90^{\circ}$ phase difference between perpendicular components).
-   **Elliptically Polarized**: $\vec{E}$ traces an **ellipse**. (Unequal amplitudes or phase diff. other than $0^\circ, \pm 90^\circ, 180^\circ$).
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Differentiate%20between%20circular%20and%20elliptical%20polarization%20of%20light.)

---

## Failures of Classical Theory Leading to Quantum Mechanics

### **Blackbody Radiation**
A black body absorbs all radiation and emits based on temperature.
**Characteristics:** Continuous spectrum with peak $\lambda_{max}$. As $T \uparrow$, $\lambda_{max} \downarrow$ (Wien's Law), total power $\uparrow$ ($\propto T^4$, Stefan-Boltzmann Law).
-   **Classical Failure (Ultraviolet Catastrophe)**: Rayleigh-Jeans law ($ \rho d \nu = \frac{8\pi \nu^2kT d\nu}{c^3}$) predicted infinite energy at high frequencies, contradicting observation.
-   **Planck's Solution (Quantum Hypothesis)**: Max Planck postulated energy is quantized in discrete packets $E = nh\nu$. His formula:
    $$\rho(\nu)d\nu = \frac{8\pi h\nu^{3}}{c^{3}}\frac{1}{e^{h\nu / kT}-1}d\nu $$
    This correctly described the spectrum.
### **Atomic Spectra**
-   **Observation**: Atoms emit light at specific, discrete frequencies (line spectra).
-   **Classical Failure**: Classical physics predicted electrons would continuously radiate energy, spiral into the nucleus, and emit a continuous spectrum.
### **Photoelectric Effect**
-   **Observations**: Electron emission from metal surface (above threshold frequency) is instantaneous, depends on frequency (not intensity), and there's a threshold frequency.
-   **Classical Failure**: Predicted energy of emitted electrons depends on intensity, and emission should have time delay.
-   **Einstein's Explanation**: Light consists of photons ($E = h\nu$). $KE_{max} = h\nu - \phi$ (Work Function). This explained instantaneous, frequency-dependent emission.

---

## The Dual Nature of Radiation & Matter

### **The Compton Effect**
Scattering of X-rays by electrons results in a decrease in energy (increase in wavelength) of the X-rays. This is definitive proof of light's particle nature.
-   **Classical Failure**: Predicted scattered radiation should have the same wavelength.
-   **Quantum Explanation**: Collision between photon (particle) and electron. Photon transfers energy and momentum, resulting in longer wavelength for scattered photon.
-   **Compton Shift**: $$\Delta\lambda = \lambda_f - \lambda_i = \frac{h}{m_e c}(1 - \cos\theta)$$
    *   $\lambda_C = h/(m_e c) \approx 2.426 \times 10^{-12}$ m (Compton wavelength of electron).
    *   Minimum shift ($\Delta\lambda = 0$) at $\theta = 0^\circ$.
    *   Maximum shift ($\Delta\lambda = 2\lambda_C$) at $\theta = 180^\circ$.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#How%20does%20classical%20theory%20fail%20to%20explain%20the%20results%20of%20Compton's%20experiment%3F), [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%203:%20Compton%20Scattering%20Calculation)

### **Derivation of Compton Shift ($\Delta\lambda$)** **(Self-Study Topic)**
The Compton shift is derived from the relativistic conservation of energy and momentum during a collision between an incident photon and a stationary electron.
**Assumptions:**
1.  Electron is initially at rest ($p_{e,initial}=0$).
2.  Photon energy $E_i = p_i c$ and $E_f = p_f c$.
3.  Relativistic energy of electron $E_e = \sqrt{(p_e c)^2 + (m_0 c^2)^2}$, where $m_0$ is electron rest mass.

**Steps:**
1.  **Conservation of Energy (Before = After):**
    Initial Energy = Final Energy
    $$p_i c + m_0 c^2 = p_f c + \sqrt{p_e^2 c^2 + m_0^2 c^4} \quad \text{(Eq. A)}$$
    Rearrange to isolate electron energy term:
    $$\sqrt{p_e^2 c^2 + m_0^2 c^4} = p_i c - p_f c + m_0 c^2$$
    Square both sides:
    $$p_e^2 c^2 + m_0^2 c^4 = (p_i c - p_f c + m_0 c^2)^2$$
    $$p_e^2 c^2 + m_0^2 c^4 = (p_i c - p_f c)^2 + (m_0 c^2)^2 + 2(p_i c - p_f c)(m_0 c^2)$$
    $$p_e^2 c^2 = (p_i c)^2 + (p_f c)^2 - 2 p_i p_f c^2 + 2 m_0 c^3 (p_i - p_f) \quad \text{(Eq. 1)}$$

2.  **Conservation of Momentum (Vectorial):**
    Let incident photon be along x-axis, scattered photon at angle $\theta$, recoil electron at angle $\phi$.
    *   **x-direction:** $p_i = p_f \cos\theta + p_e \cos\phi \quad \implies p_e \cos\phi = p_i - p_f \cos\theta$
    *   **y-direction:** $0 = p_f \sin\theta - p_e \sin\phi \quad \implies p_e \sin\phi = p_f \sin\theta$

    Square both components and add them to eliminate $\phi$:
    $$p_e^2 (\cos^2\phi + \sin^2\phi) = (p_i - p_f \cos\theta)^2 + (p_f \sin\theta)^2$$
    $$p_e^2 = p_i^2 - 2 p_i p_f \cos\theta + p_f^2 \cos^2\theta + p_f^2 \sin^2\theta$$
    $$p_e^2 = p_i^2 + p_f^2 - 2 p_i p_f \cos\theta \quad \text{(Eq. 2)}$$

3.  **Equate (Eq. 1) and (Eq. 2) and Solve for $\Delta\lambda$:**
    Multiply (Eq. 2) by $c^2$:
    $$p_e^2 c^2 = p_i^2 c^2 + p_f^2 c^2 - 2 p_i p_f c^2 \cos\theta$$
    Now, equate this with the left side of (Eq. 1):
    $$p_i^2 c^2 + p_f^2 c^2 - 2 p_i p_f c^2 \cos\theta = p_i^2 c^2 + p_f^2 c^2 - 2 p_i p_f c^2 + 2 m_0 c^3 (p_i - p_f)$$
    Cancel common terms $p_i^2 c^2$ and $p_f^2 c^2$:
    $$-2 p_i p_f c^2 \cos\theta = -2 p_i p_f c^2 + 2 m_0 c^3 (p_i - p_f)$$
    Divide by $2 c^2$ (assuming $c \ne 0$):
    $$-p_i p_f \cos\theta = -p_i p_f + m_0 c (p_i - p_f)$$
    Rearrange:
    $$p_i p_f (1 - \cos\theta) = m_0 c (p_i - p_f)$$
    Recall $p = h/\lambda$:
    $$\frac{h}{\lambda_i} \frac{h}{\lambda_f} (1 - \cos\theta) = m_0 c \left(\frac{h}{\lambda_i} - \frac{h}{\lambda_f}\right)$$
    $$\frac{h^2}{\lambda_i \lambda_f} (1 - \cos\theta) = m_0 c h \left(\frac{\lambda_f - \lambda_i}{\lambda_i \lambda_f}\right)$$
    Cancel $\frac{h}{\lambda_i \lambda_f}$ from both sides:
    $$h (1 - \cos\theta) = m_0 c (\lambda_f - \lambda_i)$$
    Finally, solving for the Compton shift $\Delta\lambda = \lambda_f - \lambda_i$:
    $$ \Delta\lambda = \frac{h}{m_0 c}(1 - \cos\theta) $$
    **Q.E.D.**

### **de Broglie's Hypothesis: Matter Waves**
-   **Hypothesis**: Louis de Broglie proposed that all particles in motion have an associated wave character, with wavelength $\lambda$ inversely proportional to momentum $p$: $\lambda = h/p$. These are called **matter waves** or de Broglie waves.
-   **de Broglie Wavelength**: $$\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mE_K}}$$ *(Using non-relativistic kinetic energy $E_K$).*
-   **Significance**: Wave nature is significant only for microscopic particles (small $m$), producing measurable $\lambda$. For macroscopic objects, $\lambda$ is extremely small and undetectable.
-   **Experimental Verification**: Davisson-Germer experiment (electron diffraction) confirmed the wave nature of electrons.

### **Wave Packets, Phase and Group Velocity**
-   **Wave Packet**: A localized superposition of waves representing a moving particle.
-   **Phase Velocity ($v_p$)**: Speed of individual wave crests: $v_p = \omega/k$. Can be $>c$, does not carry information.
-   **Group Velocity ($v_g$)**: Speed of the overall wave packet envelope. Represents the particle's actual velocity and information propagation: $v_g = d\omega/dk = dE/dp = v_{particle}$.

---

## Core Principles of Quantum Mechanics

### **Heisenberg’s Uncertainty Principle**
Impossible to simultaneously know with perfect precision pairs of complementary properties.
-   **Position-Momentum:** $\Delta x \cdot \Delta p_x \geq \frac{\hbar}{2}$.
-   **Energy-Time:** $\Delta E \cdot \Delta t \geq \frac{\hbar}{2}$.
-   **Angular Position-Angular Momentum:** $\Delta \phi \cdot \Delta L_z \geq \frac{\hbar}{2}$.
**Significance for Macroscopic Bodies**: Not apparent because $\hbar$ is extremely small, resulting in unobservably tiny uncertainties for large masses.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#The%20Uncertainty%20principle%20is%20not%20significant%20for%20macroscopic%20bodies.%20Justify.)

### **Why an Electron Cannot Exist Inside the Nucleus (Self-Study Topic)**
The Heisenberg Uncertainty Principle provides a fundamental quantum mechanical argument against the existence of an electron confined within an atomic nucleus.

**Argument (using non-relativistic approx. for KE as per common pedagogical approach):**
1.  **Estimate Nuclear Size**: $\Delta x \approx 10^{-14}$ m (typical nuclear diameter).
2.  **Estimate Minimum Momentum Uncertainty**:
    $$\Delta p_x \ge \frac{\hbar}{2 \Delta x} = \frac{1.054 \times 10^{-34} \text{ J s}}{2 \times 10^{-14} \text{ m}} \approx 5.27 \times 10^{-21} \text{ kg m/s}$$
3.  **Estimate Minimum Kinetic Energy (Non-Relativistic Approximation):**
    Using $KE = \frac{p^2}{2m_e}$ (even though it's a simplification for this momentum magnitude):
    Electron rest mass: $m_e \approx 9.109 \times 10^{-31} \text{ kg}$
    $$KE \approx \frac{(5.27 \times 10^{-21} \text{ kg m/s})^2}{2 \times (9.109 \times 10^{-31} \text{ kg})} \approx 1.524 \times 10^{-11} \text{ J}$$
4.  **Convert to MeV:** ($1 \text{ MeV} = 1.602 \times 10^{-13}$ J)
    $$KE \approx \frac{1.524 \times 10^{-11} \text{ J}}{1.602 \times 10^{-13} \text{ J/MeV}} \approx 95.1 \text{ MeV}$$
5.  **Comparison with Binding Energies:**
    Nuclear binding energies (energy to hold nucleons) are typically a few MeV (e.g., 7-8 MeV). The calculated minimum kinetic energy for an electron (approx. 95 MeV) is vastly higher.

**Conclusion:** Quantum mechanics dictates that an electron confined to the nucleus *must* possess a minimum energy far exceeding the strong nuclear force's capacity to bind it. Such an electron would instantly escape, making stable confinement impossible. This supports that electrons are *created* during beta decay, not pre-existing.

### **The Wavefunction ($\Psi$)**
-   **Definition**: Complex function $\Psi(\mathbf{r}, t)$ containing all probabilistic information about a quantum system.
-   **Physical Interpretation (Born Interpretation)**: $|\Psi|^2 = \Psi^*\Psi$ is the **probability density** of finding the particle.
-   **Properties of a Valid Wavefunction**: Finite, single-valued, continuous, continuous first derivatives, normalizable (total probability = 1).
-   **Superposition Principle**: If $\psi_1, \psi_2$ are states, then $c_1\psi_1 + c_2\psi_2$ is also a valid state.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Give%20the%20physical%20interpretation%20of%20the%20wave%20function.), [Q&A](Semester%201/Physics/Unit%201/Q&A.md#Mention%20the%20important%20properties%20of%20a%20wave%20function.)

### **Observables, Operators, and Eigenvalues**
-   **Observables**: Measurable physical quantities.
-   **Operators ($\hat{A}$)**: Mathematical constructs corresponding to observables (e.g., $\hat{x}=x$, $\hat{p}_x=-i\hbar\frac{\partial}{\partial x}$, $\hat{H}=KE+V$).
-   **Eigenvalue Equation**: $\hat{A}\psi = a\psi$. $\psi$ is eigenfunction, $a$ is eigenvalue (definite measured value).
-   **Expectation Value ($\langle A \rangle$)**: Theoretical average value from many measurements. $\langle A \rangle = \int \Psi^* \hat{A} \Psi dV$.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q%26A.md#Explain%20operators,%20observables,%20and%20the%20eigenvalue%20equation.)

### **The Schrödinger Equation**
Fundamental equation describing the quantum state's evolution.
-   **Time-Dependent (TDSE)**: $i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi$. Describes time evolution.
-   **Time-Independent (TISE)**: $\hat{H} \psi = E \psi$. For stationary states (potential independent of time), it's an eigenvalue equation for energy $E$.
### **Application: Free Particle**
(Constant $V=0$). TISE: $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$. Solution: plane wave $\psi = Ae^{ikx} + Be^{-ikx}$. Energy $E=\frac{\hbar^{2}k^{2}}{2m}$ is **not quantized** (continuous spectrum), acting like a classical entity.
> See also: [Q&A](Semester%201/Physics/Unit%201/Q%26A.md#A%20free%20particle%20is%20a%20classical%20entity.%20Justify.)

***
# [Back](../Physics.md)