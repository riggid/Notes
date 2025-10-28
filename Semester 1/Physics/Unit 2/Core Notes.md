# [Back](../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 2: Quantum Mechanics of Simple Systems

## Introduction

This unit applies the Schrödinger Wave Equation (SWE) to analyze the behavior of particles in simple potential energy fields. We'll examine how quantum mechanics predicts phenomena like reflection, transmission, tunneling, and energy quantization, which differ significantly from classical expectations. The Time-Independent Schrödinger Equation (TISE) is central to finding stationary states and their quantized energy levels.

---
## 1. Potential Step
![Core Notes-1.excalidraw](Core%20Notes-1.excalidraw.md)
A potential step describes a sudden change in potential energy $V(x)$ from $0$ to a constant value $V_0$ at a boundary (e.g., $x=0$).
The 1D time-independent SWE is: $\frac{d^{2}\psi}{dx^{2}}+\frac{2m}{\hbar^{2}}(E-V)\psi=0$.

**Region I ($x<0, V=0$):**
SWE: $\frac{d^{2}\psi_1}{dx^{2}}+k_1^{2}\psi_1=0$, where $k_1 = \sqrt{\frac{2mE}{\hbar^2}}$.
Solution: $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$.
*   $A e^{ik_1 x}$: Incident wave moving right (amplitude A).
*   $B e^{-ik_1 x}$: Reflected wave moving left (amplitude B).
*   **Behavior of wavelength**: The particle's de Broglie wavelength is $\lambda_1 = h/p_1 = h/(\hbar k_1)$.

**Region II ($x>0, V=V_0$):**

**Case 1: $E > V_0$ (Classically allowed region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}+k_2^{2}\psi_2=0$, where $k_2 = \sqrt{\frac{2m(E-V_0)}{\hbar^2}}$.
Solution: $\psi_2(x) = D e^{ik_2 x}$. (No reflection term $e^{-ik_2 x}$ as there is no potential change beyond this region for back-reflection).
*   The wave is transmitted into Region II. Its momentum ($p_2 = \hbar k_2$) and kinetic energy ($E-V_0$) are lower than in Region I.
*   **Behavior of wavelength**: Since $E-V_0 < E$ (for $V_0>0$), $k_2 < k_1$. This implies $p_2 < p_1$, so the de Broglie wavelength in Region II, $\lambda_2 = h/p_2$, is **longer** than $\lambda_1$ (the particle effectively slows down).

*   **Boundary Conditions** (at $x=0$):
    *   Continuity of wavefunction: $\psi_1(0)=\psi_2(0) \implies A+B=D$.
    *   Continuity of derivative: $\psi_1'(0)=\psi_2'(0) \implies ik_1(A-B) = ik_2 D \implies k_1(A-B)=k_2 D$.
*   Solving these two equations for B and D in terms of A gives:
    $B = A \frac{k_1-k_2}{k_1+k_2}$ and $D = A \frac{2k_1}{k_1+k_2}$.

*   **Reflection Coefficient (R)**: The probability that a particle is reflected at the step.
    $$R = \frac{|\text{Reflected Flux}|}{|\text{Incident Flux}|} = \frac{|B|^2}{|A|^2} = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2 = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$$
    **Physical Significance**: $R > 0$ even though $E>V_0$. This is a quantum mechanical prediction; classical mechanics predicts no reflection when $E>V_0$.

*   **Transmission Coefficient (T)**: The probability that a particle is transmitted past the step.
    $$T = \frac{|\text{Transmitted Flux}|}{|\text{Incident Flux}|} = \frac{|D|^2 k_2}{|A|^2 k_1} = \frac{4k_1 k_2}{(k_1+k_2)^2}$$
*   **Conservation of Probability**: $R+T=1$.

*(See Example 1 and Example 9 in the [Examples](Examples.md) file. See Q&A 1-3 in the [Q&A](Q&A.md) file for derivation and calculations.)*


**Case 2: $E < V_0$ (Classically forbidden region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}-\alpha^{2}\psi_2=0$, where $\alpha = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$.
Solution: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$.
*   Since the wave function must remain finite as $x \to \infty$, the term $G e^{\alpha x}$ (which grows exponentially) must be zero. So, $G=0$.
*   $\psi_2(x) = F e^{-\alpha x}$. The wave function decays exponentially in Region II. This behavior is for an **evanescent wave**.
*   **Behavior of wavelength**: In this classically forbidden region, the energy $E<V_0$ implies kinetic energy $E-V_0$ is negative. While we can still formally define a wavenumber $k_2 = i\alpha$, the wave function is no longer oscillatory (no real wavelength). Instead, it describes an exponential decay without propagation.

*   **Boundary Conditions** (at $x=0$):
    *   $A+B=F$
    *   $ik_1(A-B) = -\alpha F$.
*   Solving for R gives:
    $$R = \frac{|B|^2}{|A|^2} = \left| \frac{ik_1+\alpha}{ik_1-\alpha} \right|^2 = \frac{(ik_1+\alpha)(-ik_1+\alpha)}{(ik_1-\alpha)(-ik_1-\alpha)} = \frac{k_1^2+\alpha^2}{k_1^2+\alpha^2} = 1$$
    This means total reflection ($R=1$) occurs when $E<V_0$, which aligns with classical predictions.
*   **Transmission Coefficient (T)**: $T = 1-R = 0$. No steady stream of particles pass the boundary.

*   **Penetration Depth ($\Delta x$)**: Although $T=0$, the probability density $|\psi_2(x)|^2 = |F|^2 e^{-2\alpha x}$ is non-zero in Region II. This means the particle has a finite, observable probability of being found within the classically forbidden region. The penetration depth is the characteristic distance over which the wave function's amplitude drops to $1/e$ of its value at the boundary (or where probability density drops to $1/e^2$). It is defined as:
    $$\Delta x = \frac{1}{\alpha} = \frac{\hbar}{\sqrt{2m(V_0-E)}}$$
    Penetration depth increases as the particle's energy $E$ approaches the barrier height $V_0$, or for lighter particles.

*(See Example 2 in the [Examples](Examples.md) file. See Q&A 4 in the [Q&A](Q&A.md) file.)*

---
## 2. Potential Barrier and Tunneling
![Core Notes-2.excalidraw](Core%20Notes-2.excalidraw.md)
A potential barrier has $V(x)=V_0$ for $0 < x < L$ (finite width $L$) and $V(x)=0$ otherwise ($x<0$ or $x>L$). We primarily consider the case where $E < V_0$.

**Regions and Wave Function Nature ($E < V_0$):**
1.  **Region I ($x<0, V=0$)**: $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$, $k_1 = \sqrt{2mE/\hbar^2}$.
    *   Represents a superposition of an incident wave ($A e^{ik_1 x}$) moving towards the barrier and a reflected wave ($B e^{-ik_1 x}$) moving away. The wave function is **oscillatory**. Wavelength $\lambda_1 = h/(\hbar k_1)$.
2.  **Region II ($0<x<L, V=V_0$)**: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$, $\alpha = \sqrt{2m(V_0-E)/\hbar^2}$.
    *   Represents a combination of decaying ($e^{-\alpha x}$) and growing ($e^{\alpha x}$) exponential functions. This describes the **evanescent wave** within the barrier. Classically, the particle is forbidden here. No real wavelength in this region.
3.  **Region III ($x>L, V=0$)**: $\psi_3(x) = H e^{ik_1 x}$.
    *   Represents only a transmitted wave moving away from the barrier. The wave function is **oscillatory** again, with the same wavelength as the incident wave ($\lambda_1 = h/(\hbar k_1)$, since potential is $0$) but generally a much smaller amplitude ($|H| < |A|$).

**Boundary Conditions for a Finite Potential Barrier:**
At each interface ($x=0$ and $x=L$), the following conditions must be met for the wave function to be physically acceptable:
1.  **Continuity of the wave function ($\psi(x)$)**: The value of the wave function must be the same on both sides of the interface. (e.g., $\psi_1(0) = \psi_2(0)$ and $\psi_2(L) = \psi_3(L)$).
2.  **Continuity of the first derivative of the wave function ($\psi'(x)$)**: The slope of the wave function must be the same on both sides of the interface. (e.g., $\psi_1'(0) = \psi_2'(0)$ and $\psi_2'(L) = \psi_3'(L)$).

**Quantum Tunneling:**
Unlike classical mechanics, quantum mechanics predicts a non-zero probability for the particle to appear in Region III, even though its total energy $E$ is less than the barrier height $V_0$. This extraordinary phenomenon is called **tunneling**.

**Transmission Coefficient (T)**: Probability of tunneling.
For $\alpha L \gg 1$ (meaning a wide or high barrier), the transmission coefficient can be approximated as:
$$T \approx 16 \frac{E}{V_0} \left(1-\frac{E}{V_0}\right) e^{-2\alpha L}$$
A simpler, general exponential dependence is often used:
$$T \propto e^{-2\alpha L} = \exp\left(-2L \frac{\sqrt{2m(V_0-E)}}{\hbar}\right)$$
*   Tunneling probability decreases exponentially with barrier width $L$.
*   Tunneling probability decreases exponentially with the square root of the particle's mass $m$ and the energy difference $(V_0-E)$.
*   **Lighter particles** (smaller $m$) or particles with energy relatively close to the barrier height ($V_0-E$ is small) have a **greater probability** of tunneling.

**Significance & Applications of Tunneling:**
*   **Alpha Decay**: Alpha particles in radioactive nuclei tunnel through the Coulomb potential barrier to escape, explaining the wide range of nuclear half-lives. Bohr's classical model could not explain this.
*   **Nuclear Fusion**: Protons and other light nuclei in stars tunnel through their mutual Coulomb repulsion to fuse, powering the stars.
*   **Scanning Tunneling Microscope (STM)**: Utilizes electron tunneling across a tiny vacuum gap between a sharp conducting tip and a sample surface to image surfaces at atomic resolution.
*   **Tunnel Diodes**: Semiconductor devices that leverage quantum tunneling for specific electronic characteristics (e.g., negative resistance region).
*   **Chemical Reactions**: Tunneling can significantly enhance reaction rates, especially for reactions involving light atoms like hydrogen.

*(See Example 3 and Example 10 in the [Examples](Examples.md) file. See Q&A 5-8 in the [Q&A](Q&A.md) file for wave function interpretation, mass dependence, and lifetime calculation.)*

### **2.1 Multiple Potential Step / Barrier** **(Self-Study Topic)**
Instead of a single potential barrier, a particle may encounter a series of potential steps or multiple barriers. The analysis for such systems extends the concepts used for a single step/barrier.

*   **Regions and Boundary Conditions**: The space is divided into precisely defined regions, each with a constant potential. The Schrödinger equation is solved for each region, and the solutions are matched at every interface by ensuring the continuity of the wave function ($\psi$) and its first derivative ($\psi'$).
*   **Transfer Matrix Method**: For multiple steps or barriers, a common and systematic approach is the transfer matrix method. A $2 \times 2$ transfer matrix is associated with each interface (matching boundary conditions) and each propagation region (describing wave propagation). The overall transmission and reflection coefficients for the entire structure are obtained by multiplying these matrices. This method simplifies complex multilayer calculations.
*   **Resonance Phenomena**: When a particle encounters multiple barriers (forming one or more wells between them), resonance tunneling can occur. If the incoming particle's energy matches certain specific "quasi-bound" energy levels within the wells formed between the barriers, the transmission probability can significantly increase, sometimes even reaching unity (perfect transmission). This is analogous to a Fabry-Pérot interferometer in optics and results from constructive interference of waves reflecting within the wells.
*   **Applications**: Superlattices (periodic arrangements of semiconductor layers), quantum cascade lasers, artificial atomic structures (quantum dots).

### **2.2 Josephson Quantum Tunneling** **(Self-Study Topic)**
Josephson quantum tunneling is a fascinating macroscopic quantum phenomenon involving the tunneling of **superconducting Cooper pairs** (pairs of electrons bound together below a critical temperature) through a thin insulating barrier separating two superconductors. This is distinct from single-particle electron tunneling.

*   **Josephson Junction**: The device consists of two superconductors separated by a very thin insulating layer (typically 1-2 nm thick). This insulating barrier is thin enough to allow quantum tunneling of Cooper pairs.
*   **Two Key Effects**:
    1.  **DC Josephson Effect**: A supercurrent (a current of Cooper pairs) can flow across the junction even in the absence of any applied voltage. This current depends on the phase difference ($\Delta\phi$) between the macroscopic wave functions of the two superconductors: $I = I_c \sin(\Delta\phi)$, where $I_c$ is the critical current.
    2.  **AC Josephson Effect**: If a constant voltage $V$ is applied across the junction, the phase difference across the junction evolves linearly with time, $\Delta\phi(t) = \Delta\phi_0 + (2eV/\hbar)t$. This leads to an oscillating supercurrent, $I = I_c \sin(\Delta\phi_0 + (2eV/\hbar)t)$, at a frequency $f = 2eV/h$. This effect allows precise measurement of the fundamental constant ratio $e/h$.
*   **Applications**:
    *   **SQUIDs (Superconducting Quantum Interference Devices)**: Extremely sensitive magnetometers used in medical imaging (MEG, MRI), geophysical surveys, and fundamental physics research.
    *   **Voltage Standards**: The AC Josephson effect forms the basis for the international voltage standard.
    *   **Quantum Computing**: Josephson junctions are explored as superconducting qubits due to their macroscopic quantum coherence properties and non-linear inductive behavior necessary for qubit operation.

---
## 3. Particle in a Box (Infinite Potential Well)

A particle of mass $m$ is confined to a 1D region (e.g., $0 < x < L$) where $V=0$, with infinitely high potential walls ($V=\infty$) at the boundaries. This means the particle cannot exist outside the box or at its walls, so $\psi=0$ at $x=0$ and $x=L$.

Inside the well ($V=0$): The 1D time-independent SWE is $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$, where $k=\sqrt{2mE/\hbar^2}$.
General solution: $\psi(x) = A \sin(kx) + B \cos(kx)$.

**Boundary Conditions and Eigenfunctions:**
1.  Since $\psi$ must be zero at the walls (infinite potential):
    *   $\psi(0)=0 \implies A \sin(0) + B \cos(0) = 0 \implies B=0$.
    *   The solution simplifies to $\psi(x) = A \sin(kx)$.
2.  Now apply the second boundary condition:
    *   $\psi(L)=0 \implies A \sin(kL)=0$. Since $A \neq 0$ (otherwise no particle), we must have $\sin(kL)=0$.
    *   This implies $kL=n\pi$, where $n$ is a positive integer ($n=1, 2, 3, \dots$).
    *   $k_n = \frac{n\pi}{L}$.
    *   **Normalized Wave Functions (Eigenfunctions):** Using $\int_0^L |\psi_n(x)|^2 dx = 1$, we find $A = \sqrt{2/L}$.
        $$\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

**Quantized Energy Levels (Eigenvalues):**
Substituting $k_n = n\pi/L$ into the expression for $k$:
$\frac{n^2\pi^2}{L^2} = \frac{2mE_n}{\hbar^2} = \frac{8m\pi^2 E_n}{h^2}$.
Solving for $E_n$:
$$E_n = \frac{n^2 h^2}{8mL^2} \quad (n=1, 2, 3, \dots)$$
*   **Quantization**: Energy is quantized; only discrete values are allowed.
*   $n$ is the **principal quantum number**.
*   **Zero-Point Energy ($E_1$)**: The lowest possible energy is $E_1 = h^2 / (8mL^2)$, which is non-zero. This is dictated by the Heisenberg Uncertainty Principle.
*   **No Degeneracy (1D)**: For a 1D infinite potential well, each energy level $E_n$ corresponds to a unique set of quantum numbers (just $n$), thus there is **no degeneracy**.

### **Sketching Eigenfunctions and Probability Distributions (x=0 to x=a)**
**(i) For the well extending from $x=0$ to $x=a$ (i.e., $L=a$):**
Wavefunctions: $\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$
Probability Distributions: $P_n(x) = |\psi_n(x)|^2 = \frac{2}{a} \sin^2\left(\frac{n\pi x}{a}\right)$

*   **n=1 (Ground State):**
    *   $\psi_1(x)$: Starts at 0, goes positive, ends at 0. (One half-wave)
    *   $P_1(x)$: Single peak in the center. Electron most likely to be found at midpoint. (No nodes between boundaries)
*   **n=2 (First Excited State):**
    *   $\psi_2(x)$: Starts at 0, positive, then negative, ends at 0. (One full wave)
    *   $P_2(x)$: Two peaks, zero probability at midpoint. (One node at $x=a/2$)
*   **n=3 (Second Excited State):**
    *   $\psi_3(x)$: Starts at 0, pos, neg, pos, ends at 0. (One and a half waves)
    *   $P_3(x)$: Three peaks, two zero-probability points. (Two nodes at $x=a/3, 2a/3$)
*   **n=4 (Third Excited State):**
    *   $\psi_4(x)$: Starts at 0, pos, neg, pos, neg, ends at 0. (Two full waves)
    *   $P_4(x)$: Four peaks, three zero-probability points. (Three nodes at $x=a/4, a/2, 3a/4$)

*(General Notes: $\psi_n(x)$ has $n-1$ nodes in $0 < x < a$. $P_n(x)$ has $n$ peaks and $n-1$ nodes in $0 < x < a$.)*

### **Symmetric Well (from $-a/2$ to $+a/2$)**
(i) For the well extending from $x=-a/2$ to $x=+a/2$ (i.e., $L=a$):
The energy formula remains the same: $E_n = \frac{n^2 h^2}{8ma^2}$.
The wave functions can be chosen to have definite parity (symmetric or antisymmetric).
*   **Even Parity Wave Functions**: For $n=1, 3, 5, \dots$
    $$\psi_n(x) = \sqrt{\frac{2}{a}} \cos\left(\frac{n\pi x}{a}\right)$$
*   **Odd Parity Wave Functions**: For $n=2, 4, 6, \dots$
    $$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$$
    **Parity**: Describes the symmetry of a wave function under inversion ($x \to -x$). It is applicable when the potential $V(x)$ is symmetric ($V(-x)=V(x)$).
    *   Even parity: $\psi(-x) = +\psi(x)$.
    *   Odd parity: $\psi(-x) = -\psi(x)$.

### **Sketching Eigenfunctions and Probability Distributions (x=-a/2 to x=a/2)**

*   **n=1 (Ground State - Even):**
    *   $\psi_1(x)$: Cosine-like, symmetric with maximum at $x=0$.
    *   $P_1(x)$: Single peak at $x=0$, symmetric.
*   **n=2 (First Excited State - Odd):**
    *   $\psi_2(x)$: Sine-like, antisymmetric, zero at $x=0$.
    *   $P_2(x)$: Two peaks, one node at $x=0$, symmetric around origin.
*   **n=3 (Second Excited State - Even):**
    *   $\psi_3(x)$: Cosine-like with two nodes, symmetric.
    *   $P_3(x)$: Three peaks, two nodes, symmetric around origin.
*   **n=4 (Third Excited State - Odd):**
    *   $\psi_4(x)$: Sine-like with three nodes, antisymmetric.
    *   $P_4(x)$: Four peaks, three nodes, symmetric around origin.

*(General Notes: $\psi_n(x)$ for symmetric well has $n-1$ nodes in $-a/2 < x < a/2$. $P_n(x)$ has $n$ peaks and $n-1$ nodes in $-a/2 < x < a/2$.)*

*(See Example 4, Example 5, Example 6, Example 7 in the [Examples](Examples.md) file for energy and probability calculations. See Q&A 9-14 in the [Q&A](Q&A.md) file for quantization, zero-point energy, parity, wave functions, and probability plots.)*

### Particle in 2D/3D Box and Degeneracy

The concept extends to higher dimensions. The Hamiltonian operator separates into independent components for each dimension, allowing the SWE to be solved using separation of variables.

*   **1D Infinite Potential Well (No Degeneracy)**: In one dimension, energy levels $E_n = \frac{n^2 h^2}{8mL^2}$ are uniquely determined by a single quantum number $n$. Different $n$ values always lead to different energies. Hence, there is **no degeneracy** in a 1D infinite well.
*   **2D Box (LxL square well):**
    *   Energy: $$E_{n_x, n_y} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2), \quad n_x, n_y = 1, 2, \dots$$
    *   Wave function: $$\psi_{n_x, n_y}(x,y) = \frac{2}{L} \sin\left(\frac{n_x \pi x}{L}\right) \sin\left(\frac{n_y \pi y}{L}\right)$$
    **Degeneracy (2D)**: Degeneracy occurs when different combinations of quantum numbers $(n_x, n_y)$ (e.g., $(1,2)$ vs $(2,1)$) lead to the same energy eigenvalue. For example, $E_{1,2} = E_{2,1} = \frac{h^2}{8mL^2}(1^2+2^2) = \frac{5h^2}{8mL^2}$. This state is **two-fold degenerate**.
*   **3D Box (LxLxL cubic well):**
    *   Energy: $$E_{n_x, n_y, n_z} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2 + n_z^2), \quad n_x, n_y, n_z = 1, 2, \dots$$
    *   Wave function: $$\psi_{n_x, n_y, n_z}(x,y,z) = \left(\frac{2}{L}\right)^{3/2} \sin\left(\frac{n_x \pi x}{L}\right) \sin\left(\frac{n_y \pi y}{L}\right) \sin\left(\frac{n_z \pi z}{L}\right)$$
    **Degeneracy (3D)**: Degeneracy is common due to permutations. For example, $E_{1,1,2} = E_{1,2,1} = E_{2,1,1} = \frac{h^2}{8mL^2}(1^2+1^2+2^2) = \frac{6h^2}{8mL^2}$. This state is **three-fold degenerate**. Other states can have higher degeneracy depending on the value of $n_x^2+n_y^2+n_z^2$.

*(See Q&A 15-18 in the [Q&A](Q&A.md) file for 2D/3D calculations and degeneracy.)*

---
## 4. Finite Potential Well (Qualitative)

The finite potential well has $V(x)=0$ for $-L/2 < x < L/2$, and $V(x)=V_0$ (finite, non-infinite) for $|x|>L/2$. We usually consider $E < V_0$ for bound states and $E \ge V_0$ for scattering states.

*   **Regions**:
    *   Inside the well ($-L/2 < x < L/2$, $V=0$): SWE leads to oscillatory solutions (sines and cosines).
    *   Outside the well ($|x|>L/2$, $V=V_0$):
        *   **Bound States ($E < V_0$)**: SWE leads to exponentially decaying solutions ($\psi \propto e^{-\alpha |x|}$), similar to the $E<V_0$ case for the potential step. These are confined within or near the well.
        *   **Scattering States ($E \ge V_0$)**: SWE leads to oscillatory solutions even outside the well. These describe particles that can pass over the well.

**Key Differences from Infinite Well (for Bound States):**
1.  **Wave Function Penetration**: Unlike the infinite well, the wave function does not drop to zero at the boundaries of the finite well. Instead, it penetrates into the classically forbidden regions ($|x|>L/2$), decaying exponentially. This means there's a non-zero probability of finding the particle *outside* the well.
2.  **Boundary Conditions**: The requirement that both $\psi(x)$ and its derivative $\psi'(x)$ must be continuous at the well boundaries ($x=\pm L/2$).
3.  **Energy Levels**:
    *   The allowed energy levels $E_n$ for a finite potential well are always **lower** than the corresponding energy levels for an infinite potential well of the same width $L$. This is because the wave function penetration effectively increases the effective size of the region over which the particle is spread, and $E_n \propto 1/L_{eff}^2$.
    *   The number of **bound states** ($E_n < V_0$) in a finite well is **finite**. There is always at least one bound state, regardless of $V_0$ and $L$. The number of bound states increases with well depth ($V_0$) and width ($L$).
4.  **Mathematical Solution Process (Outline for Bound States)**:
    *   **Define Regions and Potentials**: Split space into regions with uniform potential.
    *   **Write SWE for each region**: Obtain oscillatory solutions (inside) and real exponentials (outside, decaying).
    *   **Apply Boundary Conditions**: At each interface, enforce continuity of the wave function and its first derivative. Also, require outside solutions to decay to zero ($\psi \to 0$ as $|x|\to\infty$).
    *   **Derive Transcendental Conditions**: The boundary conditions lead to a system of equations. Solving these results in **transcendental equations** (equations involving both algebraic and trigonometric/hyperbolic terms) for the allowed energy values. E.g., for even states: $\alpha = k \tan(kL/2)$ and for odd states: $\alpha = -k \cot(kL/2)$.
    *   **Solve for Eigenvalues**: These transcendental equations must be solved graphically or numerically to find the discrete, quantized energy eigenvalues $E_n$.
    *   **Determine Eigenfunctions**: Substitute the found energy eigenvalues back into the general solutions and boundary conditions to determine the constants and obtain the complete wave functions $\psi_n(x)$, which are then normalized.

### **Sketching Probability Density Distributions (Infinite vs. Finite Well)**
**Characteristics:**
*   **Infinite Well**: Probability density $P_n(x) = |\psi_n(x)|^2$ is strictly zero outside the well and drops sharply to zero at the boundaries. The number of peaks and nodes follow the $n$ quantum number.
*   **Finite Well**: $P_n(x)$ is non-zero outside the well, decaying exponentially into the classically forbidden regions (penetration). The wave function is "less confined" and the peaks are somewhat broadened compared to the infinite well, reflecting the lower energy levels. Nodes still occur consistent with $n$.

*(See Q&A 19-20 in the [Q&A](Q&A.md) file for comparison and solution outline.)*

### **4.1 Double Potential Well** **(Self-Study Topic)**
A double potential well consists of two finite potential wells separated by a finite potential barrier. This system introduces significant quantum effects not seen in single wells.

*   **Symmetry and Energy States**: If the two wells are identical, the potential $V(x)$ is symmetric. This leads to energy eigenstates that can be classified by their parity (even or odd). For each energy level of a single isolated well, the double well typically produces two closely spaced energy levels (a **doublet**): one even parity (symmetric combination) and one odd parity state (antisymmetric combination).
*   **Tunneling between Wells**: Due to quantum tunneling, a particle initially localized in one well has a non-zero probability of tunneling through the central barrier to the other well, even if its energy is below the barrier height. This leads to energy level splitting and the formation of symmetric and antisymmetric combinations of single-well states.
*   **Coherent Oscillations (Tunneling) **: If a particle is prepared in a state initially localized within one well, it will coherently oscillate between the two wells at a characteristic **tunneling frequency**, determined by the energy splitting of the doublet states.
*   **Applications**:
    *   **Molecular Vibrations**: Ammonia ($NH_3$) inversion is a classic example, where the nitrogen atom tunnels between two equivalent potential minima.
    *   **Quantum Dots / Artificial Atoms**: Double quantum dots can be used to study tunneling and coherent coupling, relevant for quantum computing.
    *   **Conformational Changes**: Tunneling can play a role in biological processes involving changes in molecular conformation.

---
## 5. Quantum Harmonic Oscillator (QHO)

The quantum harmonic oscillator models systems where a particle (mass $m$) experiences a linear restoring force ($F=-kx$), which translates to a quadratic potential energy $V(x) = \frac{1}{2} k x^2 = \frac{1}{2} m \omega^2 x^2$, where $\omega = \sqrt{k/m}$ is the classical angular frequency of oscillation.

**Physical Examples**:
*   **Vibrations of Diatomic Molecules**: The chemical bond acts like a spring, and the vibrational motion of the atoms about their equilibrium separation can be approximated as a QHO.
*   **Vibrations of Atoms in a Crystal Lattice**: Atoms in a solid oscillate around their equilibrium positions, which can be modeled as coupled harmonic oscillators.
*   **Quantum Fields**: Fundamental fields in quantum field theory can be viewed as collections of harmonic oscillators.

### **Potential Energy Curve and Energy Spectrum**
*   **Potential Energy Curve**: A parabolic shape centered at $x=0$, $V(x) = \frac{1}{2} m \omega^2 x^2$.
    *(Sketch: A symmetric parabola opening upwards, with the bottom at $V=0, x=0$.)*
*   **Quantized Energy Levels (Eigenvalues):** Solutions to the SWE exist only for discrete energy values:
    $$E_n = \left(n+\frac{1}{2}\right) \hbar \omega \quad (n=0, 1, 2, \dots)$$
    *   $n$ is the **vibrational quantum number**.
    *   **Zero-Point Energy ($n=0$)**: $E_0 = \frac{1}{2} \hbar \omega$. This is the minimum possible energy the QHO can have, even at absolute zero temperature.
        *   **Physical Significance of Zero-Point Energy**: It's a direct consequence of the **Heisenberg Uncertainty Principle**. If the QHO had zero energy, it would be stationary at $x=0$ with zero momentum, implying exact knowledge of both position and momentum, which is forbidden by the uncertainty principle. The zero-point energy signifies the unavoidable, residual quantum fluctuations in position and momentum.
    *   **Equal Spacing**: The energy levels are **equally spaced**, with the separation between adjacent levels being constant: $\Delta E = E_{n+1} - E_n = \hbar \omega$.
    *(Sketch: Horizontal lines representing $E_0, E_1, E_2, \dots$ symmetrically spaced on the potential curve, extending out to the classical turning points where the energy line intersects the parabola.)*

**Wave Functions (Eigenfunctions):**
The solutions involve **Hermite polynomials** $H_n(\xi)$ and a Gaussian exponential term:
$$\psi_n(x) = N_n H_n(\gamma x) e^{-\frac{1}{2}(\gamma x)^2}$$
where $\gamma = \sqrt{m\omega/\hbar}$, $\xi = \gamma x$, and $N_n$ is a normalization constant.
*   **Hermite Polynomials ($H_n(\xi)$)**: These determine the number of nodes in the wave function.
    *   $H_0(\xi)=1$ (Ground state, no nodes)
    *   $H_1(\xi)=2\xi$ (First excited state, one node at $\xi=0$)
    *   $H_n(-\xi) = (-1)^n H_n(\xi)$ (definite parity).
*   **Penetration**: The wave functions extend beyond the classical turning points (where $E=V(x)$), indicating a non-zero probability of finding the particle in the classically forbidden region.

**Comparison: Classical vs. Quantum Harmonic Oscillator:**
| Feature                 | Classical Harmonic Oscillator                                 | Quantum Harmonic Oscillator                                  |
| :---------------------- | :------------------------------------------------------------ | :----------------------------------------------------------- |
| **Energy**              | Can take any continuous non-negative value ($E \ge 0$).        | Is quantized to discrete values $E_n = (n+1/2)\hbar\omega$. |
| **Minimum Energy**      | Can be zero (particle at rest at equilibrium).                | Is the non-zero zero-point energy $E_0 = \frac{1}{2}\hbar\omega$. The particle is never at rest. |
| **Energy Spacing**      | Not applicable (continuous).                                | Energy levels are equally spaced: $\Delta E = \hbar\omega$. |
| **Position Probability**| Spends most time near turning points where speed is lowest. Zero probability beyond turning points. | For $n=0$, max probability at center. For $n>0$, has peaks and nodes. Finite probability of being *beyond* classical turning points (tunneling). |

### Anharmonic Oscillator

Real physical systems (like molecular vibrations) are not perfectly harmonic. Their potential energy function deviates from the ideal quadratic form ($V(x) = \frac{1}{2}m\omega^2 x^2$) due to higher-order terms (e.g., $x^3, x^4$). This is known as **anharmonicity**.

*   **Unequal Energy Spacing**: Unlike the QHO, the energy levels of an anharmonic oscillator are **not equally spaced**. Typically, the spacing between adjacent levels **decreases** as the vibrational quantum number $n$ increases ($E_{n+1}-E_n < E_n-E_{n-1}$).
*   **Dissociation**: At sufficiently high energies, the potential leads to dissociation (e.g., a molecule breaks apart).
*   **Significance**: Anharmonicity is important in spectroscopy (explaining selection rules and overtones) and in quantum information science.
*   **Probability Density Modification**: In an anharmonic oscillator, the probability density distributions $|\psi(x)|^2$ are modified compared to the harmonic case. They tend to be **asymmetrically shifted** away from the center ($x=0$) towards regions where the potential is less steep, especially for higher energy states. They may also show slightly different peak shapes and nodes.

#### **Why a Purely Harmonic Oscillator Cannot Serve as a Qubit**
A qubit requires two distinct and addressable quantum states (e.g., $|0\rangle$ and $|1\rangle$). For effective manipulation and readout, it is crucial that these two states can be individually controlled without inadvertently affecting higher energy states.
*   In a **purely harmonic oscillator**, all energy levels are **equally spaced** ($E_{n+1} - E_n = \hbar\omega$).
*   If you attempt to drive a transition from $|0\rangle$ to $|1\rangle$ using an electromagnetic pulse of frequency $\omega = (E_1-E_0)/\hbar$, this same pulse frequency would also drive transitions from $|1\rangle$ to $|2\rangle$ (since $E_2-E_1 = \hbar\omega$), from $|2\rangle$ to $|3\rangle$, and so on.
*   This equal spacing means you cannot selectively address only the $|0\rangle \to |1\rangle$ transition. The control pulse would simultaneously excite higher states, leading to signal leakage and errors, making the system unsuitable for reliable qubit operation.
*   **Anharmonicity is essential for qubits** because it makes the energy level spacing non-uniform, allowing for selective control of specific transitions (e.g., $|0\rangle \to |1\rangle$) without disturbing others (e.g., $|1\rangle \to |2\rangle$). This is how superconducting qubits (like the transmon) utilize engineered anharmonicity.

---
## 6. Hydrogen Atom (Qualitative)

The hydrogen atom, with one proton and one electron, is the simplest atom and serves as a fundamental model in quantum mechanics. The force between the electron and proton is the spherically symmetric Coulomb attraction, so the potential energy is $V(r) = -\frac{e^2}{4\pi\epsilon_0 r}$.

**Schrödinger Equation in Spherical Coordinates**:
*   Due to the spherical symmetry of the Coulomb potential, the SWE is typically solved using **spherical polar coordinates $(r, \theta, \phi)$**.
*   The non-relativistic time-independent Schrödinger equation for the hydrogen atom in spherical coordinates is:
    $$-\frac{\hbar^2}{2\mu}\left[ \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2} \right] - \frac{e^2}{4\pi\epsilon_0 r}\psi = E\psi$$
    (where $\mu$ is the reduced mass of the electron-proton system).
*   Using **separation of variables**: The wave function can be expressed as a product of three independent functions: $\psi(r, \theta, \phi) = R(r) Y(\theta, \phi) = R(r) \Theta(\theta) \Phi(\phi)$.
*   Solving the three separated ordinary differential equations naturally leads to the introduction of three **quantum numbers**:

1.  **Principal Quantum Number (n)**: Arises from the radial equation. Determines the **energy level** and the overall size of the orbital.
    *   $n = 1, 2, 3, \dots$ (positive integers).
    *   Energy: $E_n = -\frac{\mu e^4}{8\epsilon_0^2 h^2 n^2} = -\frac{13.6 \, \text{eV}}{n^2}$.
        *   Energy is quantized and negative, indicating a bound state.
        *   Energy depends only on $n$.
2.  **Angular Momentum (Orbital) Quantum Number (l)**: Arises from the polar angle ($\theta$) equation. Determines the **magnitude of the electron's orbital angular momentum** $L = \sqrt{l(l+1)}\hbar$. It primarily describes the **shape** of the electron's probability distribution (orbital).
    *   $l = 0, 1, 2, \dots, (n-1)$. (Non-negative integer, up to $n-1$).
    *   **Spectroscopic notation**: $l=0 \rightarrow s$ orbital (spherical), $l=1 \rightarrow p$ orbital (dumbbell), $l=2 \rightarrow d$ orbital (cloverleaf), $l=3 \rightarrow f$ orbital, etc.
3.  **Magnetic Quantum Number ($m_l$)**: Arises from the azimuthal angle ($\phi$) equation. Determines the **orientation of the orbital angular momentum** in space (specifically, its z-component $L_z = m_l \hbar$). It defines the spatial orientation of the orbital.
    *   $m_l = -l, -(l-1), \dots, 0, \dots, (l-1), l$. (Integer values, total $2l+1$ values).

**Hydrogen Atom Orbital**:
An orbital ($\psi_{n,l,m_l}$) is a **mathematical wave function** that is a solution to the Schrödinger equation, characterized by the three quantum numbers $n, l, m_l$.
*   **Physical Interpretation**: The square of the orbital's magnitude, $|\psi_{n,l,m_l}(r,\theta,\phi)|^2$, represents the **probability density** of finding the electron at a particular point in space around the nucleus. It does *not* represent a fixed path or trajectory. The shapes often depicted for orbitals (spheres, dumbbells) are regions of high probability density (electron clouds).

**Calculation of Ground and First Excited State Energies and Degeneracies:**
The energy levels are $E_n = -\frac{13.6 \, \text{eV}}{n^2}$. The degeneracy for a given $n$ is $n^2$.

*   **Ground State ($n=1$)**:
    *   $E_1 = -\frac{13.6 \, \text{eV}}{1^2} = -13.6 \, \text{eV}$.
    *   Allowed $l$ values: $l=0$ (since $l$ can go from $0$ to $n-1 = 1-1=0$).
    *   Allowed $m_l$ values: $m_l=0$ (since $m_l$ can go from $-l$ to $l=0$).
    *   Only one state: $(n,l,m_l) = (1,0,0)$.
    *   **Degeneracy**: $n^2 = 1^2 = 1$. The ground state is non-degenerate.

*   **First Excited State ($n=2$)**:
    *   $E_2 = -\frac{13.6 \, \text{eV}}{2^2} = -\frac{13.6 \, \text{eV}}{4} = -3.4 \, \text{eV}$.
    *   Allowed $l$ values: $l=0, 1$ (since $l$ can go from $0$ to $n-1 = 2-1=1$).
        *   For $l=0$ (s-orbital): $m_l=0$. (1 state)
        *   For $l=1$ (p-orbital): $m_l=-1, 0, +1$. (3 states)
    *   Total states for $n=2$: $1+3=4$ states.
    *   **Degeneracy**: $n^2 = 2^2 = 4$. The first excited state is four-fold degenerate.

**Stability of the Hydrogen Atom (Quantum Explanation)**:
Quantum mechanics inherently explains the stability of the hydrogen atom, contrary to classical electromagnetism (which predicts electron spiraling into the nucleus).
1.  **Quantized Energy Levels**: The electron can only exist in discrete, stable energy states. It cannot continuously radiate energy and spiral inwards. Energy changes only occur by "jumping" between these fixed levels, emitting or absorbing photons of specific energies.
2.  **Stable Ground State**: The $n=1$ state is the lowest energy state available. Since there's no lower energy level, the electron cannot fall further and continuously radiate, thus the atom is stable.
3.  **Uncertainty Principle**: The electron cannot collapse onto the nucleus because doing so would imply a precise position (within the tiny nucleus) and low momentum (if at rest), violating the Heisenberg Uncertainty Principle. The electron must maintain a minimum momentum (and thus kinetic energy) keeping it away from the nucleus, even in its ground state.

*(See Q&A 27-29 in the [Q&A](Q&A.md) file for the stability, orbital representation, and necessity of spherical coordinates.)*

---
## 7. Fermi-Dirac Statistics

Fermi-Dirac statistics describe the statistical distribution of identical, indistinguishable particles with half-integer spin (**fermions**, e.g., electrons, protons, neutrons) over available energy states in thermal equilibrium. A key principle governing fermions is the **Pauli Exclusion Principle**, which states that no two identical fermions can occupy the exact same quantum state (i.e., have the same set of quantum numbers).

*   **Fermi Energy ($E_f$)**: At absolute zero temperature (0 K), fermions fill up the lowest available energy states. The Fermi energy is the highest energy level occupied by a fermion at 0 K. All states with energy $E < E_f$ are fully occupied, and all states with energy $E > E_f$ are completely empty.

*   **Fermi Factor ($f(E)$ or $F_d$)**: This function gives the probability that a quantum state with energy $E$ is occupied by a fermion at an absolute temperature $T$.
    $$f(E) = \frac{1}{e^{(E-E_f)/(k_B T)} + 1}$$
    Where $k_B$ is the Boltzmann constant.

*   **Temperature Dependence of the Fermi Factor**:
    *   **At $T=0$ K**:
        *   If $E < E_f$, then $(E-E_f)/(k_B T)$ approaches $-\infty$. So $e^{-\infty} \to 0$, giving $f(E)=1$.
        *   If $E > E_f$, then $(E-E_f)/(k_B T)$ approaches $+\infty$. So $e^{\infty} \to \infty$, giving $f(E)=0$.
        *   The Fermi factor is a sharp step function.
    *   **At $T > 0$ K**: Thermal energy allows some fermions to be excited to states above $E_f$. The step function becomes "smeared out" around the Fermi energy.
        *   For $E = E_f$, the exponent is 0, so $f(E_f) = 1/(e^0+1) = 1/2$. This means the Fermi energy is the energy level that has exactly a 50% probability of being occupied.
        *   For $E < E_f$, $f(E)$ is slightly less than 1.
        *   For $E > E_f$, $f(E)$ is slightly greater than 0.
        *   The transition from an occupation probability of nearly 1 to nearly 0 occurs over an energy range of a few $k_B T$ centered around $E_f$. As temperature increases, this transition region becomes wider.
    *   **Symmetry**: The probability of a state with energy $E_f - \Delta E$ being occupied is equal to the probability of a state with energy $E_f + \Delta E$ being *unoccupied*:
        $$f(E_f - \Delta E) = 1 - f(E_f + \Delta E)$$

*(See Example 8 in the [Examples](Examples.md) file for occupancy probability calculations. See Q&A 30-32 in the [Q&A](Q&A.md) file for definition, temperature dependence, and the symmetry property.)*

---
## 8. Density of States ($g(E)$)

The density of states (DOS), $g(E)$, describes the number of available quantum states per unit energy interval, per unit volume. It is crucial for understanding how electrons fill energy bands in materials and for calculating properties like specific heat and electrical conductivity.

### Density of States for 3D Free Electrons

For free electrons in a 3D metal (modeled as particles in a 3D infinite potential box of side L):
The energy levels are $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)$.
1.  **n-Space**: Each set of quantum numbers $(n_x, n_y, n_z)$ (positive integers) represents a unique quantum state. We envision these points in a 3D "n-space".
2.  **Radius in n-Space**: Define $R = \sqrt{n_x^2+n_y^2+n_z^2}$. From the energy equation, $R^2 = \frac{8mL^2 E}{h^2}$.
3.  **Counting States**: The number of states $N(E)$ with energy less than $E$ (i.e., with radius $R_{max} = \sqrt{8mL^2 E / h^2}$) corresponds to the number of points within the positive octant of a sphere of radius $R_{max}$ in n-space. Each point $(n_x,n_y,n_z)$ represents unit volume.
    *   Volume of an octant of a sphere = $\frac{1}{8} \times \frac{4}{3} \pi R_{max}^3 = \frac{\pi}{6} R_{max}^3$.
    *   So, $N(E) = \frac{\pi}{6} \left(\frac{8mL^2 E}{h^2}\right)^{3/2}$.
4.  **Density of States**: To find the density of states per unit energy, we differentiate $N(E)$ with respect to $E$:
    *   $\frac{dN(E)}{dE} = \frac{\pi}{6} \left(\frac{8mL^2}{h^2}\right)^{3/2} \frac{3}{2} E^{1/2} = \frac{\pi}{4} \left(\frac{8mL^2}{h^2}\right)^{3/2} E^{1/2}$.
5.  **Per Unit Volume and Spin Degeneracy**: The density of states per unit volume, $g(E)$, considering two electrons per state (due to spin, Pauli exclusion principle):
    *   $g(E) = \frac{2}{L^3} \frac{dN(E)}{dE} = \frac{2}{L^3} \frac{\pi}{4} \left(\frac{8mL^2}{h^2}\right)^{3/2} E^{1/2}$
    *   Simplifying and substituting $V=L^3$:
        $$g(E) = \frac{\pi}{2} \left(\frac{8m}{h^2}\right)^{3/2} E^{1/2}$$
    *   **Result**: For 3D free electron gas, the number of available states increases with the square root of energy ($g(E) \propto E^{1/2}$).

### Density of States for 2D Quantum Structures

For 2D systems (e.g., quantum wells, electron gas in thin films), free electrons are confined to a 2D area $A = L^2$.
The energy levels are $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2)$.
1.  **n-Space in 2D**: Consider a 2D "n-space" with axes $n_x, n_y$. Each state $(n_x, n_y)$ occupies unit area. States are in the first quadrant ($n_x>0, n_y>0$).
2.  **Radius in n-Space**: $R^2 = n_x^2+n_y^2 = \frac{8mL^2 E}{h^2}$.
3.  **Counting States (2D)**: The number of states $N(E)$ with energy less than $E$ corresponds to the number of points within a quarter circle of radius $R = \sqrt{8mL^2 E / h^2}$.
    *   Area of quarter circle = $\frac{1}{4} \pi R^2$.
    *   $N(E) = \frac{1}{4} \pi \left(\frac{8mL^2 E}{h^2}\right) = \frac{2\pi m L^2 E}{h^2}$.
4.  **Density of States (2D)**: Differentiate $N(E)$ w.r.t. $E$:
    *   $\frac{dN(E)}{dE} = \frac{2\pi m L^2}{h^2}$.
5.  **Per Unit Area and Spin Degeneracy**: The density of states per unit energy *per unit area* ($g_{2D}(E)$), accounting for spin (2 electrons per state):
    *   $g_{2D}(E) = \frac{2}{A} \frac{dN(E)}{dE} = \frac{2}{L^2} \frac{2\pi m L^2}{h^2} = \frac{4\pi m}{h^2}$.
    *   **Result**: For 2D systems, the density of states is **constant and independent of energy**. $g_{2D}(E) \propto E^0$.

*(See Example 12 in the [Examples](Examples.md) file for a conceptual overview of 3D DOS. See Q&A 33 in the [Q&A](Q&A.md) file for the derivation of 2D DOS.)*

***
# [Back](../Physics.md)