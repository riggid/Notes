---
dg-publish: true
---

# [[Physics|Back]]
***
[[Semester 1/Physics/Unit 1/Core Notes|Core Notes]] | [[Semester 1/Physics/Unit 1/Examples|Examples]] | [[Semester 1/Physics/Unit 1/Questions|Questions]]
***
# Unit 1: Concepts Leading to Quantum Mechanics

## Maxwell's Equations and Electromagnetic Waves

Maxwell's equations are a set of fundamental equations that describe the behavior of electric and magnetic fields. They can be expressed in differential form (applying to every point in space) or integral form (applying to larger regions).
*   **Integral Forms**: Describe field behavior over **extended regions** (volumes, surfaces, lines). Useful for calculations with high symmetry.
*   **Differential Forms**: Describe field behavior **at a specific point**. Relate local spatial variations (divergence, curl) to local sources or time variations. Essential for deriving other results (like the wave equation) and for analyzing fields in complex situations without symmetry.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#CL2_Q1:%20Difference%20between%20integral%20and%20differential%20forms%20of%20Maxwell's%20equations)

### **Vector Operators**
-   **Gradient ($\nabla\phi$)**: Acts on a scalar field ($\phi$) to produce a vector field. Points in the direction of **steepest increase**. Its magnitude is the maximum rate of change. (e.g., $\vec{E} = -\nabla V$).
-   **Divergence ($\nabla \cdot \vec{A}$)**: Acts on a vector field ($\vec{A}$) to produce a scalar. Measures the "spreading out" or net outflow (source/sink) of the vector field from a point.
-   **Curl ($\nabla \times \vec{A}$)**: Acts on a vector field ($\vec{A}$) to produce another vector field. Measures the "circulation density" or "vorticity" of the vector field at a point. Its direction indicates the axis of rotation, and its magnitude the strength of rotation. (e.g., current creates circulating $\vec{B}$).
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Explain%20the%20geometric%20interpretation%20of%20the%20gradient,%20divergence%20and%20curl%20of%20a%20vector%20field?)

### **Maxwell's Equations in a Medium**
-   **Gauss's Law for Electric Fields**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$. Source: **electric charge density** $\rho$.
-   **Gauss's Law for Magnetic Fields**: $\nabla \cdot \vec{B} = 0$. Physically, **magnetic monopoles do not exist** (magnetic field lines always form closed loops).
-   **Faraday's Law of Induction**: $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$. A time-varying magnetic field induces an electric field.
-   **Ampere-Maxwell Law**: $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$. Sources: **electric current density** $\vec{J}$ and **displacement current** density $\epsilon_0 \frac{\partial\vec{E}}{\partial t}$.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Which%20of%20Maxwell's%20equations%20contain%20'sources'?)

### **The Wave Equation from Maxwell's Equations**
In free space ($\rho=0, \vec{J}=0$), Maxwell's equations can be combined to derive the wave equation for both $\vec{E}$ and $\vec{B}$.
**Derivation of the Wave Equation (for $\vec{E}$):**
1.  Start with Faraday's Law: $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$
2.  Take the curl of both sides: $\nabla \times (\nabla \times \vec{E}) = - \frac{\partial}{\partial t}(\nabla \times \vec{B})$
3.  Apply the vector identity $\nabla \times (\nabla \times \vec{A}) = \nabla(\nabla \cdot \vec{A}) - \nabla^2\vec{A}$:
    $$\nabla(\nabla \cdot \vec{E}) - \nabla^2\vec{E} = - \frac{\partial}{\partial t}(\nabla \times \vec{B})$$
4.  Substitute the free-space equations $\nabla \cdot \vec{E} = 0$ (Gauss's Law for E) and $\nabla \times \vec{B} = \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$ (Ampere-Maxwell Law with $\vec{J}=0$):
    $$0 - \nabla^2\vec{E} = - \frac{\partial}{\partial t}\left(\mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}\right)$$
5.  This simplifies to the **wave equation**:
    $$\nabla^2 \vec{E} = \mu_{0}\epsilon_{0} \frac{\partial^2 \vec{E}}{\partial t^2}$$
This shows that E and B fields propagate as transverse waves at the speed of light, $c = 1/\sqrt{\mu_{0}\epsilon_{0}}$. The same equation can be derived for $\vec{B}$.

**Phase Correlation and Direction of E and B fields:**
For a plane electromagnetic wave:
*   The electric ($\vec{E}$) and magnetic ($\vec{B}$) fields are **in phase**, meaning their peaks and troughs align in space and time.
*   They are mutually **perpendicular** to each other.
*   They are both perpendicular to the direction of wave propagation. The direction of propagation is given by the cross product $\vec{S} \propto \vec{E} \times \vec{B}$.

![EM Wave Propagation](Attachments/em_wave_propagation.png)

> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Discuss%20the%20phase%20correlation%20and%20direction%20of%20the%20E%20and%20B%20fields%20of%20an%20EM%20Wave.)
> For a numerical problem, see: [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%201:%20EM%20Wave%20Properties)

---

## Energy and Polarization of EM Waves

### **Energy Density of EM Waves**
The energy density (energy per unit volume, $u$) in an EM wave is shared equally between its electric and magnetic fields. Total instantaneous density $u = u_E + u_B = \epsilon_{0}E^2 = \frac{1}{\mu_{0}}B^2$ (since $E=cB$ and $c^2 = 1/(\mu_0 \epsilon_0)$).
*   **Electric Field Energy Density**: $u_E = \frac{1}{2}\epsilon_{0}E^2$
*   **Magnetic Field Energy Density**: $u_B = \frac{1}{2\mu_{0}}B^2$
*   **Total Average Energy Density**: $\langle u \rangle = \frac{1}{2}\epsilon_0 E_{max}^2 = \frac{1}{2\mu_0} B_{max}^2$
### **Poynting Vector**
The **Poynting Vector** ($\vec{S}$) describes the direction and rate of energy flow per unit area (power per unit area, or energy flux) in an EM wave.
$$\vec{S} = \frac{1}{\mu_{0}} (\vec{E} \times \vec{B})$$
The magnitude of the Poynting vector ($S$) is equal to the total energy density ($u$) multiplied by the speed of the wave ($c$): $S = uc$.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Discuss%20the%20energy%20density%20in%20electromagnetic%20waves%20and%20how%20is%20it%20related%20to%20the%20Poynting%20vector%3F)

### **Polarization of Light**
Polarization describes the orientation of the electric field oscillations in an electromagnetic wave.
-   **Circularly Polarized Light**: Electric field vector rotates in a **circle**. Formed by two perpendicular plane-polarized waves of **equal amplitude** with a **$90^{\circ}$ phase difference**.
-   **Elliptically Polarized Light**: Electric field vector traces an **ellipse**. Formed when the two perpendicular components have **unequal amplitudes** or a phase difference other than $0^\circ$, $\pm 90^\circ$, or $180^\circ$.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Differentiate%20between%20circular%20and%20elliptical%20polarization%20of%20light.)

---

## Failures of Classical Theory Leading to Quantum Mechanics

### **Four Experimental Results where Wave Model Fails**
1.  **Blackbody Radiation**: Classical theory (Rayleigh-Jeans Law) predicted infinite energy at high frequencies.
2.  **Atomic Spectra**: Classical theory predicted continuous spectra and unstable atoms.
3.  **Photoelectric Effect**: Classical theory could not explain instantaneous emission, frequency dependence, or intensity independence of kinetic energy.
4.  **Compton Effect**: Classical theory predicted no change in wavelength upon scattering.

### **Blackbody Radiation**
An idealized object that absorbs all incident electromagnetic radiation and emits radiation solely based on its temperature.
**Characteristics of a Blackbody Spectrum:**
1.  **Continuous Spectrum with Peak**: Emitted energy is continuous, with intensity peaking at a specific wavelength.
2.  **Wien's Displacement Law**: As blackbody temperature increases, the peak intensity shifts to shorter wavelengths (higher frequencies).
3.  **Stefan-Boltzmann Law**: Total energy radiated (area under the curve) increases dramatically ($\propto T^4$) with temperature.

![Blackbody Radiation Spectrum](Attachments/blackbody_spectrum_curves.png)

-   **Classical Failure (Ultraviolet Catastrophe)**: The classical Rayleigh-Jeans law ($\rho(\nu)d\nu = \frac{8\pi \nu^2}{c^3}kT d\nu$) incorrectly predicted infinite energy at high frequencies.
-   **Planck's Solution (Quantum Hypothesis)**: Max Planck resolved this by postulating that energy is quantized ($E = nh\nu$). His formula:
    $$\rho(\nu)d\nu = \frac{8\pi h\nu^{3}}{c^{3}}\frac{1}{e^{h\nu / kT}-1}d\nu $$
    **Average energy of a Planck oscillator**: $\langle E \rangle = \frac{h\nu}{e^{h\nu/kT}-1}$.
    This formula correctly described the spectrum and explained the Ultraviolet Catastrophe by ensuring $\langle E \rangle \to 0$ for high frequencies.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Describe%20the%20characteristics%20of%20a%20black%20body%20spectrum.), [Questions](Semester%201/Physics/Unit%201/Questions.md#Write%20Planck's%20formula%20for%20black%20body%20radiation.), [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%202:%20Planck's%20vs.%20Classical%20Energy)

#### **Derivation of the Number of Electromagnetic Modes per Unit Frequency Interval in a 3D Cavity (Self-Study Topic)**
This derivation is crucial for the classical Rayleigh-Jeans law. It involves counting the number of standing wave modes allowed in a cubic cavity.
**Assumptions:**
1.  A cubic cavity of side $L$ with perfectly conducting walls.
2.  Electromagnetic radiation forms standing waves, so the components of the electric field ($E_x, E_y, E_z$) must be zero at the walls.
3.  This imposes boundary conditions on the wavenumbers.

**Steps:**
1.  **Standing Wave Condition:** For waves inside the cavity, the allowed wave vectors $\vec{k}$ must satisfy conditions like (for $E_x$): $k_x = \frac{n_x\pi}{L}$, $k_y = \frac{n_y\pi}{L}$, $k_z = \frac{n_z\pi}{L}$, where $n_x, n_y, n_z$ are positive integers (since the field must be zero at both ends of the cavity, implying a half-integer number of wavelengths).
2.  **Wave Number Magnitude:** The magnitude of the wave vector is $k = \sqrt{k_x^2 + k_y^2 + k_z^2} = \frac{\pi}{L}\sqrt{n_x^2 + n_y^2 + n_z^2}$.
3.  **Relating to Frequency:** For electromagnetic waves, $c = \nu\lambda$ and $k=2\pi/\lambda$. So, $k = 2\pi\nu/c$.
    Therefore, $\frac{2\pi\nu}{c} = \frac{\pi}{L}\sqrt{n_x^2 + n_y^2 + n_z^2}$.
    $$ \nu = \frac{c}{2L}\sqrt{n_x^2 + n_y^2 + n_z^2} $$
4.  **Counting States in n-space:** Each unique set of positive integers $(n_x, n_y, n_z)$ corresponds to a unique mode. These can be visualized as points in the first octant of a 3D grid ("n-space").
    Let $N_{modes}(\nu)$ be the total number of modes with frequency up to $\nu$. This is the number of points in the first octant of a sphere of radius $R_n = \sqrt{n_x^2 + n_y^2 + n_z^2}$.
    From the frequency equation, $R_n = \frac{2L\nu}{c}$.
    The volume of this octant in n-space is $\frac{1}{8} \left(\frac{4}{3}\pi R_n^3\right) = \frac{\pi}{6} R_n^3$.
    So, $N_{modes}(\nu) = \frac{\pi}{6} \left(\frac{2L\nu}{c}\right)^3 = \frac{\pi}{6} \frac{8L^3\nu^3}{c^3} = \frac{4\pi L^3 \nu^3}{3c^3}$.
5.  **Factor for Polarization:** Each electromagnetic wave can have two independent polarization states (e.g., horizontal and vertical linear polarization). So, we multiply by 2:
    $$ N_{modes}(\nu) = 2 \times \frac{4\pi L^3 \nu^3}{3c^3} = \frac{8\pi L^3 \nu^3}{3c^3} $$
6.  **Density of Modes per Unit Frequency Interval and Unit Volume:**
    To find the number of modes per unit frequency interval, we differentiate $N_{modes}(\nu)$ with respect to $\nu$:
    $$ dN_{modes} = \frac{d}{d\nu}\left(\frac{8\pi L^3 \nu^3}{3c^3}\right) d\nu = \frac{8\pi L^3 (3\nu^2)}{3c^3} d\nu = \frac{8\pi L^3 \nu^2}{c^3} d\nu $$
    Finally, to get the density of modes per unit volume $(V=L^3)$, we divide by $V$:
    $$ \eta(\nu) d\nu = \frac{1}{V} \frac{dN_{modes}}{d\nu} d\nu = \frac{8\pi \nu^2}{c^3} d\nu $$
    This $\eta(\nu) d\nu$ is the expression for the number of electromagnetic modes per unit frequency interval per unit volume in a 3D cavity, which is multiplied by the average energy per mode ($kT$ for Rayleigh-Jeans) to get the spectral energy density.

### **Atomic Spectra**
-   **Observation**: Atoms emit light only at specific, discrete frequencies (line spectra), unique to each element.
-   **Classical Failure**: Predicted continuous spectra and unstable atoms (electron spiraling into nucleus).

### **Photoelectric Effect**
-   **Observations**: Electron emission from metal surface (above threshold frequency) is instantaneous, depends on frequency (not intensity), and there's a threshold frequency.
-   **Classical Failure**: Predicted energy of emitted electrons depends on intensity, and emission should have time delay.
-   **Einstein's Explanation (1905)**: Light consists of photons ($E = h\nu$). $KE_{max} = h\nu - \phi$ (Work Function). This explained instantaneous, frequency-dependent emission.

![Photoelectric Effect](Attachments/photoelectric_effect_schematic.png)

---

## The Dual Nature of Radiation & Matter

### **The Compton Effect**
Scattering of X-rays (or gamma rays) by electrons results in a decrease in energy (increase in wavelength) of the X-rays. This is definitive proof of light's particle nature.
-   **Classical Failure**: Predicted scattered radiation should have the **same wavelength**.
-   **Quantum Explanation**: Collision between photon (particle) and electron. Photon transfers energy and momentum, resulting in longer wavelength for scattered photon.
-   **Compton Shift**: $$\Delta\lambda = \lambda_f - \lambda_i = \frac{h}{m_e c}(1 - \cos\theta)$$
    *   $\lambda_C = h/(m_e c) \approx 2.426 \times 10^{-12}$ m (Compton wavelength of electron).
    *   Minimum shift ($\Delta\lambda = 0$) at $\theta = 0^\circ$.
    *   Maximum shift ($\Delta\lambda = 2\lambda_C$) at $\theta = 180^\circ$.

![Compton Scattering](Attachments/compton_scattering_diagram.png)

> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#How%20does%20classical%20theory%20fail%20to%20explain%20the%20results%20of%20Compton's%20experiment%3F), [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%203:%20Compton%20Scattering%20Calculation)

### **Derivation of Compton Shift ($\Delta\lambda$)** **(Self-Study Topic - Simplified Version)**
The Compton shift derived from relativistic conservation of energy and momentum during a collision between an incident photon and a stationary electron.
**Assumptions:**
1.  Electron is initially at rest ($p_{e,initial}=0$).
2.  Photon energy $E = pc$ ($E_i = p_i c, E_f = p_f c$).
3.  Relativistic energy of electron $E_e = \sqrt{(p_e c)^2 + (m_0 c^2)^2}$, where $m_0$ is electron rest mass.

**Steps:**
1.  **Conservation of Momentum (Vectorial):**
    Let incident photon be along x-axis. Scattered photon at angle $\theta$. Recoil electron at angle $\phi$.
    *   **x-direction:** $p_i = p_f \cos\theta + p_e \cos\phi \quad \implies p_e \cos\phi = p_i - p_f \cos\theta$
    *   **y-direction:** $0 = p_f \sin\theta - p_e \sin\phi \quad \implies p_e \sin\phi = p_f \sin\theta$
    Square both components and add them to eliminate $\phi$:
    $$p_e^2 (\cos^2\phi + \sin^2\phi) = (p_i - p_f \cos\theta)^2 + (p_f \sin\theta)^2$$
    $$p_e^2 = p_i^2 + p_f^2 - 2 p_i p_f \cos\theta \quad \text{(Eq. 1)}$$

2.  **Conservation of Energy:**
    Initial Energy = Final Energy
    $$p_i c + m_0 c^2 = p_f c + E_e$$
    Rearrange to isolate electron energy term and substitute $E_e = \sqrt{p_e^2 c^2 + m_0^2 c^4}$:
    $$\sqrt{p_e^2 c^2 + m_0^2 c^4} = (p_i - p_f)c + m_0 c^2$$
    Square both sides:
    $$p_e^2 c^2 + m_0^2 c^4 = ( (p_i - p_f)c + m_0 c^2 )^2$$
    $$p_e^2 c^2 + m_0^2 c^4 = (p_i - p_f)^2 c^2 + (m_0 c^2)^2 + 2(p_i - p_f)c(m_0 c^2)$$
    $$p_e^2 c^2 = (p_i^2 - 2p_i p_f + p_f^2)c^2 + 2m_0 c^3 (p_i - p_f) \quad \text{(Eq. 2)}$$

3.  **Equate (Eq. 1 multiplied by $c^2$) and (Eq. 2) and Solve for $\Delta\lambda$:**
    $$p_i^2 c^2 + p_f^2 c^2 - 2 p_i p_f c^2 \cos\theta = p_i^2 c^2 + p_f^2 c^2 - 2p_i p_f c^2 + 2m_0 c^3 (p_i - p_f)$$
    Cancel common terms $p_i^2 c^2$ and $p_f^2 c^2$:
    $$-2 p_i p_f c^2 \cos\theta = -2 p_i p_f c^2 + 2m_0 c^3 (p_i - p_f)$$
    Divide by $2 c^2$:
    $$-p_i p_f \cos\theta = -p_i p_f + m_0 c (p_i - p_f)$$
    Rearrange terms:
    $$p_i p_f (1 - \cos\theta) = m_0 c (p_i - p_f)$$
    Substitute $p = h/\lambda$:
    $$\frac{h}{\lambda_i} \frac{h}{\lambda_f} (1 - \cos\theta) = m_0 c \left(\frac{h}{\lambda_i} - \frac{h}{\lambda_f}\right)$$
    $$\frac{h^2}{\lambda_i \lambda_f} (1 - \cos\theta) = m_0 c h \left(\frac{\lambda_f - \lambda_i}{\lambda_i \lambda_f}\right)$$
    Cancel $\frac{h}{\lambda_i \lambda_f}$ from both sides (assuming $h \ne 0, \lambda_i \ne 0, \lambda_f \ne 0$):
    $$h (1 - \cos\theta) = m_0 c (\lambda_f - \lambda_i)$$
    Finally, the Compton shift $\Delta\lambda = \lambda_f - \lambda_i$:
    $$ \Delta\lambda = \frac{h}{m_0 c}(1 - \cos\theta) $$
    **Q.E.D.**

### **de Broglie's Hypothesis: Matter Waves**
-   **Hypothesis**: All particles in motion have an associated wave character, with wavelength $\lambda$ inversely proportional to momentum $p$: $\lambda = h/p$. These are called **matter waves**.
-   **de Broglie Wavelength**: $$\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mE_K}}$$ *(Using non-relativistic kinetic energy $E_K$).*
-   **Significance**: Wave nature is significant only for microscopic particles (small $m$), producing measurable $\lambda$. For macroscopic objects, $\lambda$ is extremely small and undetectable.
-   **Experimental Verification**: Davisson-Germer experiment (electron diffraction) confirmed the wave nature of electrons.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#What%20are%20matter%20waves%3F%20State%20the%20De-Broglie%20hypothesis.), [Questions](Semester%201/Physics/Unit%201/Questions.md#Why%20is%20the%20wave%20nature%20of%20matter%20not%20apparent%20for%20macroscopic%20particles%3F), [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%204:%20De-Broglie%20Wavelength%20of%20an%20Electron), [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%205:%20De-Broglie%20Wavelength%20of%20an%20Alpha%20Particle)

### **Wave Packets, Phase and Group Velocity**
-   **Wave Packet**: A localized superposition of waves representing a moving particle.
-   **Phase Velocity ($v_p$)**: Speed of individual wave crests: $v_p = \omega/k$. Can be $>c$, does not carry information.
-   **Group Velocity ($v_g$)**: Speed of the overall wave packet envelope. Represents the particle's actual velocity and information propagation: $v_g = d\omega/dk$.

#### Derivation of Group Velocity as Particle Velocity (Non-Relativistic Case)
Using Planck-Einstein ($E=\hbar\omega$) and de Broglie ($p=\hbar k$) relations:
$$v_g = \frac{d\omega}{dk} = \frac{d(\hbar\omega)}{d(\hbar k)} = \frac{dE}{dp}$$
For a non-relativistic free particle, $E = \frac{p^2}{2m}$.
$$\frac{dE}{dp} = \frac{d}{dp}\left(\frac{p^2}{2m}\right) = \frac{2p}{2m} = \frac{p}{m} = v_{particle}$$
Thus, the group velocity of the wave packet equals the particle's classical velocity.

#### Derivation of Group Velocity as Particle Velocity (Relativistic Case)
Using relativistic energy $E = \sqrt{(pc)^2 + (m_0c^2)^2}$:
$$E^2 = (pc)^2 + (m_0c^2)^2$$
Differentiate with respect to $p$:
$$2E \frac{dE}{dp} = 2pc^2$$
$$v_g = \frac{dE}{dp} = \frac{pc^2}{E}$$
For a relativistic particle, $E = \gamma m_0 c^2$ and $p = \gamma m_0 v$, where $\gamma = (1-v^2/c^2)^{-1/2}$.
$$v_g = \frac{(\gamma m_0 v)c^2}{\gamma m_0 c^2} = v$$
Again, the group velocity equals the particle velocity, even relativistically.

#### Relationship between Phase Velocity and Particle Velocity (Relativistic and Non-Relativistic)
**Non-Relativistic:**
$v_p = \frac{\omega}{k} = \frac{E/\hbar}{p/\hbar} = \frac{E}{p}$.
For $E=\frac{p^2}{2m}$: $v_p = \frac{p^2/2m}{p} = \frac{p}{2m} = \frac{mv}{2m} = \frac{v}{2}$.
So, $v_p = v_{particle}/2$.

**Relativistic:**
$v_p = \frac{E}{p}$.
Using $E = \gamma m_0 c^2$ and $p = \gamma m_0 v$:
$v_p = \frac{\gamma m_0 c^2}{\gamma m_0 v} = \frac{c^2}{v}$.
So, $v_p = c^2/v_{particle}$. And thus, $v_g v_p = v \cdot (c^2/v) = c^2$.

### **Double Slit Experiment with Particles**
-   **Setup**: Electrons (or other quantum particles) are sent one at a time through a barrier with two slits to a detector screen.
-   **Observation**: An **interference pattern** builds up, identical to that produced by waves, even with single particles.
-   **Interpretation (Wave-Particle Duality)**: Each particle passes through both slits simultaneously, interfering with itself. Attempting to determine **which slit** the particle passes through (observation) destroys the interference pattern, demonstrating the act of measurement affects the quantum state.

---

## Core Principles of Quantum Mechanics

### **Heisenberg’s Uncertainty Principle**
It is a fundamental principle in quantum mechanics that states it is impossible to simultaneously know with perfect precision certain pairs of complementary properties (conjugate variables) of a particle. The more accurately one property is known, the less accurately the other can be known.
-   **Position and Momentum**:
    $$\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$$
-   **Energy and Time**:
    $$\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$$
    *(Where $\Delta t$ refers to the lifetime of an energy state or the time duration over which energy is measured).*
-   **Angular Position and Angular Momentum**:
    $$\Delta \phi \cdot \Delta L_z \ge \frac{\hbar}{2}$$

**Significance for Macroscopic Bodies**: The uncertainty principle is not evident for macroscopic objects because Planck's constant ($\hbar$) is extremely small. The resulting uncertainties in position or momentum are far below any measurable limits for everyday objects, making classical mechanics sufficient.
Example: For a 150g baseball, even with highly precise velocity measurement, the calculated minimum uncertainty in position is $\approx 2.5 \times 10^{-33}$ m, which is negligible.

#### **Gamma-Ray Microscope Thought Experiment (Self-Study Topic)**
This thought experiment, proposed by Heisenberg himself, illustrates the position-momentum uncertainty principle.
**Setup:** Imagine trying to precisely determine the position of an electron using a hypothetical "gamma-ray microscope". To achieve high precision in position ($\Delta x$ is small), we need to use very short-wavelength (high-energy) gamma-ray photons because the resolution of a microscope is limited by the wavelength of light used.
**Observation:**
1.  **High Position Accuracy**: When a high-energy gamma-ray photon strikes the electron, it gives a very precise measurement of the electron's position ($\Delta x$ is small).
2.  **Momentum Disturbance**: However, the high-energy photon carries significant momentum ($p=h/\lambda$). When this photon collides with the electron to be "seen", it transfers a substantial, unpredictable amount of its momentum to the electron.
**Conclusion:** The very act of observing the electron's position with high precision (using short $\lambda$ photons) inevitably and uncontrollably changes its momentum ($\Delta p$ is large). Conversely, if you use low-energy photons to minimize momentum disturbance, you lose precision in position.
This thought experiment vividly demonstrates that precise measurement of one conjugate variable (position) directly increases the uncertainty in the other (momentum), confirming $\Delta x \Delta p \ge \hbar/2$.

### **Why an Electron Cannot Exist Inside the Nucleus (Self-Study Topic)**
The Heisenberg Uncertainty Principle provides a fundamental quantum mechanical argument against the existence of an electron confined within an atomic nucleus.

**Argument (using non-relativistic approx. for KE as per common pedagogical approach):**
1.  **Estimate Nuclear Size**: The typical diameter of an atomic nucleus is on the order of $10^{-14}$ to $10^{-15}$ meters. We can take this as the maximum uncertainty in the electron's position, $\Delta x \approx 10^{-14}$ m.
2.  **Estimate Minimum Momentum Uncertainty**:
    According to $\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$, the minimum uncertainty in the electron's momentum is:
    $$\Delta p_x \ge \frac{\hbar}{2 \Delta x} = \frac{1.054 \times 10^{-34} \text{ J s}}{2 \times 10^{-14} \text{ m}} \approx 5.27 \times 10^{-21} \text{ kg m/s}$$
3.  **Estimate Minimum Kinetic Energy (Non-Relativistic Approximation):**
    If an electron were confined, its momentum would be at least of the order of this uncertainty. For typical introductory arguments, the non-relativistic kinetic energy formula provides a sufficient illustration of the extreme energy required:
    Electron rest mass: $m_e \approx 9.109 \times 10^{-31} \text{ kg}$
    $$KE \approx \frac{(5.27 \times 10^{-21} \text{ kg m/s})^2}{2 \times (9.109 \times 10^{-31} \text{ kg})} \approx 1.524 \times 10^{-11} \text{ J}$$
4.  **Convert to MeV:** ($1 \text{ MeV} = 1.602 \times 10^{-13}$ J)
    $$KE \approx \frac{1.524 \times 10^{-11} \text{ J}}{1.602 \times 10^{-13} \text{ J/MeV}} \approx 95.1 \text{ MeV}$$
5.  **Comparison with Nuclear Binding Energies:**
    The binding energies of particles (protons and neutrons) inside the nucleus are typically only a few MeV (e.g., 7-8 MeV). The calculated minimum intrinsic kinetic energy for an electron confined within the nucleus (approx. 95 MeV) is vastly higher than these binding energies.

**Conclusion:** Quantum mechanics (Heisenberg Uncertainty Principle) dictates that an electron confined to the nucleus *must* possess a minimum energy far exceeding the strong nuclear force's capacity to bind it. An electron with such high intrinsic kinetic energy would not be a stable bound state; it would instantaneously escape. This evidence supports that electrons are *created* during beta decay from neutron-proton transformations, rather than pre-existing within the nucleus.
> See also: [Examples](Semester%201/Physics/Unit%201/Examples.md#Example%2011:%20Minimum%20Energy%20in%20a%201D%20Box%20(Nucleus)) *(Note: Example 11 uses the particle-in-a-box energy, not the uncertainty principle directly, but yields a similarly high energy, reinforcing the incompatibility.)*

### **The Wavefunction ($\Psi$)**
-   **Definition**: A complex valued function $\Psi(\mathbf{r}, t)$ that contains all the probabilistic information about a quantum system.
-   **Physical Interpretation (Born Interpretation)**: The wavefunction $\Psi$ itself has no direct physical meaning. Its squared magnitude, $|\Psi|^2 = \Psi^*\Psi$, represents the **probability density** of finding the particle at a certain position $\mathbf{r}$ and time $t$.
-   **Properties of a Valid Wavefunction**: Must be finite, single-valued, continuous, have continuous first derivatives, and be normalizable (total probability = 1).
-   **Superposition Principle**: If $\psi_1$ and $\psi_2$ are possible states, then any linear combination $\psi = c_1\psi_1 + c_2\psi_2$ is also a possible state. This underlies interference phenomena.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Give%20the%20physical%20interpretation%20of%20the%20wave%20function.), [Questions](Semester%201/Physics/Unit%201/Questions.md#Mention%20the%20important%20properties%20of%20a%20wave%20function.), [Questions](Semester%201/Physics/Unit%201/Questions.md#What%20is%20the%20physical%20significance%20of%20the%20normalization%20of%20a%20wave%20function%3F)

### **Observables, Operators, and Eigenvalues**
-   **Observables**: Measurable physical quantities (e.g., position, momentum, energy).
-   **Operators ($\hat{A}$)**: Mathematical constructs corresponding to observables.
    | Observable           | Operator ($\hat{A}$)                                            |
    | :------------------- | :-------------------------------------------------------------- |
    | Position (x)         | $\hat{x} = x$                                                   |
    | Momentum ($p_x$)     | $\hat{p}_x = -i\hbar\frac{\partial}{\partial x}$                 |
    | Kinetic Energy       | $\hat{K} = -\frac{\hbar^2}{2m}\nabla^2$                           |
    | Potential Energy     | $\hat{V} = V(\mathbf{r})$                                       |
    | Total Energy (Hamiltonian) | $\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$ |
-   **Eigenvalue Equation**: $\hat{A}\psi = a\psi$. Here, $\psi$ is an **eigenfunction** (a state where the observable has a definite value), and $a$ is the **eigenvalue** (that definite measured value).
-   **Expectation Value ($\langle A \rangle$)**: The theoretical average result of measuring an observable $A$ on many identical systems in state $\Psi$. If $\Psi$ is normalized, $\langle A \rangle = \int \Psi^* \hat{A} \Psi dV$.
> See also: [Questions](Semester%201/Physics/Unit%201/Questions.md#Explain%20operators,%20observables,%20and%20the%20eigenvalue%20equation.), [Questions](Semester%201/Physics/Unit%201/Questions.md#Write%20five%20operators%20associated%20with%20dynamical%20variables.), [Questions](Semester%201/Physics/Unit%201/Questions.md#Explain%20the%20concept%20of%20the%20"expectation%20value".), [Questions](Semester%201/Physics/Unit%201/Questions.md#Find%20the%20expectation%20value%20of%20position,%20$\langle%20x%20\rangle$,%20for%20a%20particle%20in%20a%20box%20of%20width%20L.)

---

## Quantum Computing Fundamentals (Self-Study Topic)

### **State Vectors and Qubits**
-   **State Vector**: In quantum mechanics, the complete state of a system is represented by a vector in a complex vector space called a **Hilbert space**. This is usually denoted as $|\psi\rangle$ (a "ket" vector).
-   **Qubit (Quantum Bit)**: The fundamental unit of quantum information. Unlike a classical bit (which can be 0 or 1), a qubit can exist in a **superposition** of both states simultaneously.
-   **Representation of a Qubit**: A qubit is typically represented as a linear superposition of two basis states, $|0\rangle$ and $|1\rangle$:
    $$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$
    Where $\alpha$ and $\beta$ are complex probability amplitudes, and $|\alpha|^2 + |\beta|^2 = 1$ ensures that the total probability of finding the qubit in either state is 1.
-   **Orthonormal Basis**: The basis states $|0\rangle$ and $|1\rangle$ are typically `orthonormal`, meaning:
    *   **Orthogonal**: They are perpendicular to each other ($\langle 0|1 \rangle = 0$).
    *   **Normalized**: Each has unit length ($\langle 0|0 \rangle = 1$, $\langle 1|1 \rangle = 1$).
    This allows them to represent distinct, measurable outcomes.
-   **Bloch Sphere**: A single qubit's state can be visualized as a point on the surface of a unit sphere (the Bloch sphere). $|0\rangle$ is at the North Pole, $|1\rangle$ at the South Pole. Any superposition $\alpha|0\rangle + \beta|1\rangle$ (after some phase factor elimination) maps to a unique point on the sphere, where the angles define $\alpha$ and $\beta$.

![Bloch Sphere](Attachments/bloch_sphere_qubit.png)

### **Inner and Outer Products of Qubits**
These are operations on state vectors that are fundamental in quantum mechanics.
-   **Inner Product (Dot Product)**: The inner product of two state vectors (e.g., $\langle \phi |$ and $|\psi\rangle$) results in a **scalar (complex number)**. It measures the "overlap" or similarity between the two states. If $\langle \phi | \psi \rangle = 0$, the states are orthogonal.
    *   If $|\psi\rangle = \alpha_0|0\rangle + \alpha_1|1\rangle$ and $|\phi\rangle = \beta_0|0\rangle + \beta_1|1\rangle$, then:
        $$\langle \phi | \psi \rangle = (\beta_0^*\langle 0| + \beta_1^*\langle 1|) (\alpha_0|0\rangle + \alpha_1|1\rangle) = \beta_0^*\alpha_0 \langle 0|0 \rangle + \beta_1^*\alpha_1 \langle 1|1 \rangle = \beta_0^*\alpha_0 + \beta_1^*\alpha_1$$
-   **Outer Product**: The outer product of two state vectors (e.g., $|\psi\rangle$ and $\langle \phi |$) results in an **operator (matrix)**. It's often used to construct projection operators onto a specific state.
    $$|\psi\rangle\langle\phi|$$
    *   If $|\psi\rangle = \begin{pmatrix} \alpha_0 \\ \alpha_1 \end{pmatrix}$ and $\langle\phi| = \begin{pmatrix} \beta_0^* & \beta_1^* \end{pmatrix}$, then:
        $$|\psi\rangle\langle\phi| = \begin{pmatrix} \alpha_0 \\ \alpha_1 \end{pmatrix} \begin{pmatrix} \beta_0^* & \beta_1^* \end{pmatrix} = \begin{pmatrix} \alpha_0\beta_0^* & \alpha_0\beta_1^* \\ \alpha_1\beta_0^* & \alpha_1\beta_1^* \end{pmatrix}$$

### **Projection Operators**
-   A **projection operator** $P_s = |s\rangle\langle s|$ projects any arbitrary state $|\psi\rangle$ onto the state $|s\rangle$. It represents the act of filtering out the component of $|\psi\rangle$ that lies along the direction of $|s\rangle$.
-   **In Measurement**: After a quantum measurement, the system's state "collapses" (or is projected) onto an eigenstate corresponding to the measured outcome. The probability of measuring a specific outcome $s$ (represented by state $|s\rangle$) is given by $P = |\langle s|\psi\rangle|^2$. The state *after* measurement (if outcome $s$ is obtained) is then proportional to $P_s |\psi\rangle$.

---
***
# [[Physics|Back]]