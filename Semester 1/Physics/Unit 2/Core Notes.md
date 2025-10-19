# [Back](../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 2: Quantum Mechanics of Simple Systems

## Introduction

This unit applies the Schrödinger Wave Equation (SWE) to analyze the behavior of particles in simple potential energy fields. We'll examine how quantum mechanics predicts phenomena like reflection, transmission, tunneling, and energy quantization, which differ significantly from classical expectations.

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

**Region II ($x>0, V=V_0$):**

**Case 1: $E > V_0$ (Classically allowed region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}+k_2^{2}\psi_2=0$, where $k_2 = \sqrt{\frac{2m(E-V_0)}{\hbar^2}}$.
Solution: $\psi_2(x) = D e^{ik_2 x}$. (No reflection term $e^{-ik_2 x}$ as there is no potential change beyond this region for back-reflection).
*   The wave is transmitted into Region II, but its momentum ($p_2 = \hbar k_2$) and kinetic energy ($E-V_0$) are lower, leading to a longer wavelength ($\lambda_2 = h/p_2 > \lambda_1$).

*   **Boundary Conditions** (at $x=0$):
    *   Continuity of wavefunction: $\psi_1(0)=\psi_2(0) \implies A+B=D$.
    *   Continuity of derivative: $\psi_1'(0)=\psi_2'(0) \implies ik_1(A-B) = ik_2 D \implies k_1(A-B)=k_2 D$.
*   Solving these two equations for B and D in terms of A gives:
    $B = A \frac{k_1-k_2}{k_1+k_2}$ and $D = A \frac{2k_1}{k_1+k_2}$.

*   **Reflection Coefficient (R)**: The probability that a particle is reflected at the step. Defined as the ratio of reflected probability flux to incident probability flux.
    $$R = \frac{|\text{Reflected Flux}|}{|\text{Incident Flux}|} = \frac{|B|^2}{|A|^2} = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2 = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$$
    **Physical Significance**: Crucially, $R > 0$ even though $E>V_0$. This is a quantum mechanical prediction; classical mechanics predicts no reflection when $E>V_0$.

*   **Transmission Coefficient (T)**: The probability that a particle is transmitted past the step. Defined as the ratio of transmitted probability flux to incident probability flux.
    $$T = \frac{|\text{Transmitted Flux}|}{|\text{Incident Flux}|} = \frac{|D|^2 k_2}{|A|^2 k_1} = \frac{4k_1 k_2}{(k_1+k_2)^2}$$
*   **Conservation of Probability**: $R+T=1$.

*(See Example 1 and Example 9 in the [Examples](Examples.md) file. See Q&A 1-3 in the [Q&A](Q&A.md) file for derivation and calculations.)*


**Case 2: $E < V_0$ (Classically forbidden region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}-\alpha^{2}\psi_2=0$, where $\alpha = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$.
Solution: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$.
*   Since the wave function must remain finite as $x \to \infty$, the term $G e^{\alpha x}$ (which grows exponentially) must be zero. So, $G=0$.
*   $\psi_2(x) = F e^{-\alpha x}$. The wave function decays exponentially in Region II. This behavior is for an **evanescent wave**.

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
    *   Represents a superposition of an incident wave ($A e^{ik_1 x}$) moving towards the barrier and a reflected wave ($B e^{-ik_1 x}$) moving away. The wave function is **oscillatory**.
2.  **Region II ($0<x<L, V=V_0$)**: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$, $\alpha = \sqrt{2m(V_0-E)/\hbar^2}$.
    *   Represents a combination of decaying ($e^{-\alpha x}$) and growing ($e^{\alpha x}$) exponential functions. This describes the **evanescent wave** within the barrier. Classically, the particle is forbidden here.
3.  **Region III ($x>L, V=0$)**: $\psi_3(x) = H e^{ik_1 x}$.
    *   Represents only a transmitted wave moving away from the barrier. The wave function is **oscillatory** again, with the same wavelength as the incident wave (since potential is $0$) but generally a much smaller amplitude ($|H| < |A|$).

Applying boundary conditions (continuity of $\psi$ and $\psi'$) at $x=0$ and $x=L$ allows solving for the coefficients, particularly H (transmitted amplitude).

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

---
## 3. Particle in a Box (Infinite Potential Well)

A particle of mass $m$ is confined to a 1D region (e.g., $0 < x < L$) where $V=0$, with infinitely high potential walls ($V=\infty$) at the boundaries. This means the particle cannot exist outside the box or at its walls.

Inside the well ($V=0$): The 1D time-independent SWE is $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$, where $k=\sqrt{2mE/\hbar^2}$.
General solution: $\psi(x) = A \sin(kx) + B \cos(kx)$.

**Boundary Conditions:**
1.  Since $\psi$ must be zero at the walls (infinite potential):
    *   $\psi(0)=0 \implies A \sin(0) + B \cos(0) = 0 \implies B=0$.
    *   The solution simplifies to $\psi(x) = A \sin(kx)$.
2.  Now apply the second boundary condition:
    *   $\psi(L)=0 \implies A \sin(kL)=0$. Since $A$ cannot be zero (otherwise $\psi=0$ everywhere, implying no particle exists), we must have $\sin(kL)=0$.
    *   This implies $kL=n\pi$, where $n$ is an integer.
    *   $k = \frac{n\pi}{L}$.
    *   We take $n=1, 2, 3, \dots$.
        *   $n=0$ gives $k=0$, which means $\psi(x)=0$ everywhere (no particle).
        *   Negative values of $n$ (e.g., $n=-1$) give the same physical wave function as positive values (e.g., $n=1$), just with a sign change of the overall amplitude A, which is absorbed into the normalization constant.

**Quantized Energy Levels (Eigenvalues):**
Substituting $k = n\pi/L$ into the expression for $k$:
$\frac{n^2\pi^2}{L^2} = \frac{2mE_n}{\hbar^2} = \frac{2mE_n}{(h/2\pi)^2} = \frac{8m\pi^2 E_n}{h^2}$.
Solving for $E_n$:
$$E_n = \frac{n^2 h^2}{8mL^2} \quad (n=1, 2, 3, \dots)$$
*   This shows that the energy of the particle is **quantized**; only discrete values are allowed.
*   $n$ is the **principal quantum number**.
*   **Zero-Point Energy**: The lowest possible energy (for $n=1$) is $E_1 = h^2 / (8mL^2)$, which is non-zero. This is called the **zero-point energy**.
    *   **Physical Significance of Zero-Point Energy**: The particle cannot have zero energy ($E=0$) because this would imply it is perfectly at rest ($p=0$) and its position is precisely known (within the box). This would violate the **Heisenberg Uncertainty Principle** ($\Delta x \Delta p \ge \hbar/2$), which dictates a minimum uncertainty in both position and momentum. Thus, the particle must always have some minimum motion/energy.

**Normalized Wave Functions (Eigenfunctions):**
Using the normalization condition $\int_0^L |\psi_n(x)|^2 dx = 1$:
$\int_0^L A^2 \sin^2(\frac{n\pi x}{L}) dx = A^2 \frac{L}{2} = 1 \implies A = \sqrt{2/L}$.
$$\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

**Symmetric Well (from $-a/2$ to $+a/2$):**
If the boundaries are at $x=\pm a/2$, the length of the well is $L=a$. The energy formula remains the same $E_n = \frac{n^2 h^2}{8ma^2}$. The wave functions, however, can be chosen to have definite parity:
*   **Even Parity Functions**: For $n=1, 3, 5, \dots$
    $$\psi_n(x) = \sqrt{\frac{2}{a}} \cos\left(\frac{n\pi x}{a}\right)$$
*   **Odd Parity Functions**: For $n=2, 4, 6, \dots$
    $$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$$
    **Parity**: Describes the symmetry of a wave function under inversion ($x \to -x$). It is applicable when the potential $V(x)$ is symmetric ($V(-x)=V(x)$).
    *   Even parity: $\psi(-x) = +\psi(x)$.
    *   Odd parity: $\psi(-x) = -\psi(x)$.

**Probability Density:** $P_n(x) = |\psi_n(x)|^2$.
*   For $n=1$ (ground state): $P_1(x) = \frac{2}{L} \sin^2(\frac{\pi x}{L})$. Has a single peak at the center ($x=L/2$).
*   For $n=2$ (first excited state): $P_2(x) = \frac{2}{L} \sin^2(\frac{2\pi x}{L})$. Has two peaks (at $L/4, 3L/4$) and a zero probability at the center ($x=L/2$).
*   For $n=3$ (second excited state): $P_3(x) = \frac{2}{L} \sin^2(\frac{3\pi x}{L})$. Has three peaks and two internal nodes ($x=L/3, 2L/3$).
*   Generally, the $n^{th}$ state has $n$ antinodes (peaks of probability) and $n-1$ internal nodes.

*(See Example 4, Example 5, Example 6, Example 7 in the [Examples](Examples.md) file for energy and probability calculations. See Q&A 9-14 in the [Q&A](Q&A.md) file for quantization, zero-point energy, parity, wave functions, and probability plots.)*

### Particle in 2D/3D Box

The concept extends to higher dimensions. The Hamiltonian operator separates into independent components for each dimension, allowing the SWE to be solved using separation of variables.

*   **2D Box (LxL square well):**
    *   Energy: $$E_{n_x, n_y} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2), \quad n_x, n_y = 1, 2, \dots$$
    *   Wave function: $$\psi_{n_x, n_y}(x,y) = \frac{2}{L} \sin\left(\frac{n_x \pi x}{L}\right) \sin\left(\frac{n_y \pi y}{L}\right)$$
*   **3D Box (LxLxL cubic well):**
    *   Energy: $$E_{n_x, n_y, n_z} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2 + n_z^2), \quad n_x, n_y, n_z = 1, 2, \dots$$
    *   Wave function: $$\psi_{n_x, n_y, n_z}(x,y,z) = \left(\frac{2}{L}\right)^{3/2} \sin\left(\frac{n_x \pi x}{L}\right) \sin\left(\frac{n_y \pi y}{L}\right) \sin\left(\frac{n_z \pi z}{L}\right)$$

**Degeneracy:** Occurs when different combinations of quantum numbers lead to the same energy level.
*   1D Infinite well: No degeneracy.
*   2D Square well: Degeneracy occurs when $n_x \neq n_y$ (e.g., $E_{1,2} = E_{2,1}$). This is **two-fold degenerate**.
*   3D Cubic well: Degeneracy is common due to permutations (e.g., $E_{1,1,2} = E_{1,2,1} = E_{2,1,1}$ is **three-fold degenerate**, and other states can have higher degeneracy).

*(See Q&A 15-18 in the [Q&A](Q&A.md) file for 2D/3D calculations and degeneracy.)*

---
## 4. Finite Potential Well (Qualitative)

The finite potential well has $V(x)=0$ for $-L/2 < x < L/2$, and $V(x)=V_0$ (finite, non-infinite) for $|x|>L/2$. We usually consider $E < V_0$ for bound states.

*   **Regions**:
    *   Inside the well ($-L/2 < x < L/2$, $V=0$): SWE leads to oscillatory solutions (sines and cosines).
    *   Outside the well ($|x|>L/2$, $V=V_0$): SWE leads to exponentially decaying solutions ($\psi \propto e^{-\alpha |x|}$), similar to the $E<V_0$ case for the potential step.

**Key Differences from Infinite Well:**
1.  **Wave Function Penetration**: Unlike the infinite well, the wave function does not drop to zero at the boundaries of the finite well. Instead, it penetrates into the classically forbidden regions ($|x|>L/2$), decaying exponentially, but remaining non-zero. This effectively makes the "volume" occupied by the particle larger.
2.  **Boundary Conditions**: The requirement that both $\psi(x)$ and its derivative $\psi'(x)$ must be continuous at the well boundaries ($x=\pm L/2$).
3.  **Energy Levels**:
    *   The allowed energy levels $E_n$ for a finite potential well are **lower** than the corresponding energy levels for an infinite potential well of the same width $L$. This is because the wave function penetration effectively increases the size of the region over which the particle is spread, and by $E_n \propto 1/L_{eff}^2$, a larger effective length leads to lower energy.
    *   The number of **bound states** ($E_n < V_0$) in a finite well is **finite**. There is always at least one bound state, regardless of $V_0$ and $L$.
4.  **Mathematical Solution Process (Outline)**:
    *   **Define Regions and Potentials**: Split space into regions with uniform potential.
    *   **Write SWE for each region**: Obtain solutions in terms of sines/cosines (inside) and real exponentials (outside).
    *   **Apply Boundary Conditions**: At each interface, enforce continuity of the wave function and its first derivative. Also, require outside solutions to decay to zero ($\psi \to 0$ as $|x|\to\infty$).
    *   **Derive Transcendental Equations**: The boundary conditions lead to a system of equations. Solving these results in **transcendental equations** (equations involving both algebraic and trigonometric/hyperbolic terms) for the allowed energy values. E.g., for even states: $\alpha = k \tan(kL/2)$ and for odd states: $\alpha = -k \cot(kL/2)$.
    *   **Solve for Eigenvalues**: These transcendental equations must be solved graphically or numerically to find the discrete, quantized energy eigenvalues $E_n$.
    *   **Determine Eigenfunctions**: Substitute the found energy eigenvalues back into the general solutions and boundary conditions to determine the constants and obtain the complete wave functions $\psi_n(x)$, which are then normalized.

*(See Q&A 19-20 in the [Q&A](Q&A.md) file for comparison and solution outline.)*

---
## 5. Quantum Harmonic Oscillator (QHO)

The quantum harmonic oscillator models systems where a particle (mass $m$) experiences a linear restoring force ($F=-kx$), which translates to a quadratic potential energy $V(x) = \frac{1}{2} k x^2 = \frac{1}{2} m \omega^2 x^2$, where $\omega = \sqrt{k/m}$ is the classical angular frequency of oscillation.

**Physical Examples**:
*   **Vibrations of Diatomic Molecules**: The chemical bond acts like a spring, and the vibrational motion of the atoms about their equilibrium separation can be approximated as a QHO.
*   **Vibrations of Atoms in a Crystal Lattice**: Atoms in a solid oscillate around their equilibrium positions, which can be modeled as coupled harmonic oscillators.
*   **Quantum Fields**: Fundamental fields in quantum field theory can be viewed as collections of harmonic oscillators.

**Time-Independent SWE for QHO**:
$$\frac{d^{2}\psi}{dx^{2}}+\frac{2m}{\hbar^{2}}\left(E-\frac{1}{2}m\omega^{2}x^{2}\right)\psi=0$$

**Quantized Energy Levels (Eigenvalues):**
Solutions to the SWE for the QHO exist only for discrete energy values:
$$E_n = \left(n+\frac{1}{2}\right) \hbar \omega \quad (n=0, 1, 2, \dots)$$
*   $n$ is the **vibrational quantum number**.
*   **Zero-Point Energy ($n=0$)**: $E_0 = \frac{1}{2} \hbar \omega$. This is the minimum possible energy the QHO can have, even at absolute zero temperature.
    *   **Physical Significance of Zero-Point Energy**: It's a direct consequence of the **Heisenberg Uncertainty Principle**. If the QHO had zero energy, it would be stationary at $x=0$ with zero momentum, implying exact knowledge of both position and momentum, which is forbidden by the uncertainty principle. The zero-point energy signifies the unavoidable, residual quantum fluctuations in position and momentum.
*   **Equal Spacing**: The energy levels are **equally spaced**, with the separation between adjacent levels being constant: $\Delta E = E_{n+1} - E_n = \hbar \omega$.

**Wave Functions (Eigenfunctions):**
The solutions involve **Hermite polynomials** $H_n(\xi)$ and a Gaussian exponential term:
$$\psi_n(x) = N_n H_n(\gamma x) e^{-\frac{1}{2}(\gamma x)^2}$$
where $\gamma = \sqrt{m\omega/\hbar}$, $\xi = \gamma x$, and $N_n$ is a normalization constant.
*   **Hermite Polynomials ($H_n(\xi)$)**: These are a set of orthogonal polynomials that are solutions to Hermite's differential equation. They determine the number of nodes in the wave function.
    *   $H_0(\xi)=1$
    *   $H_1(\xi)=2\xi$
    *   $H_2(\xi)=4\xi^2-2$
    *   $H_3(\xi)=8\xi^3-12\xi$
    *   Hermite polynomials exhibit definite parity: $H_n(-\xi) = (-1)^n H_n(\xi)$ (even for even $n$, odd for odd $n$).
*   The ground state ($n=0$) wave function is a simple Gaussian function (no nodes). Higher states have $n$ nodes.
*   **Penetration**: The wave functions extend beyond the classical turning points (where $E=V(x)$), indicating a non-zero probability of finding the particle in the classically forbidden region.

*(See Q&A 21-25 in the [Q&A](Q&A.md) file for physical examples, Hermite polynomials, zero-point energy significance, and wave function expressions.)*

**Comparison: Classical vs. Quantum Harmonic Oscillator:**
| Feature                 | Classical Harmonic Oscillator                                 | Quantum Harmonic Oscillator                                  |
| :---------------------- | :------------------------------------------------------------ | :----------------------------------------------------------- |
| **Energy**              | Can take any continuous non-negative value ($E \ge 0$).        | Is quantized to discrete values $E_n = (n+1/2)\hbar\omega$. |
| **Minimum Energy**      | Can be zero (particle at rest at equilibrium).                | Is the non-zero zero-point energy $E_0 = \frac{1}{2}\hbar\omega$. The particle is never at rest. |
| **Energy Spacing**      | Not applicable (continuous).                                | Energy levels are equally spaced: $\Delta E = \hbar\omega$. |
| **Position Probability**| Spends most time near turning points where speed is lowest. Zero probability beyond turning points. | For $n=0$, max probability at center. For $n>0$, has peaks and nodes. Finite probability of being *beyond* classical turning points (tunneling). |

### Anharmonic Oscillator

Real physical systems (like molecular vibrations) are not perfectly harmonic. Their potential energy function deviates from the ideal quadratic form ($\frac{1}{2}m\omega^2 x^2$) due to higher-order terms (e.g., $x^3, x^4$). This is known as **anharmonicity**.

*   **Unequal Energy Spacing**: Unlike the QHO, the energy levels of an anharmonic oscillator are **not equally spaced**. Typically, the spacing between adjacent levels **decreases** as the vibrational quantum number $n$ increases ($E_{n+1}-E_n < E_n-E_{n-1}$).
*   **Dissociation**: At sufficiently high energies, the potential leads to dissociation (e.g., a molecule breaks apart).
*   **Significance**: Anharmonicity is important in spectroscopy (explaining selection rules and overtones) and in quantum information science (allowing selective addressing of specific energy transitions for qubits).

*(See Q&A 26 in the [Q&A](Q&A.md) file for differences in energy level spacing.)*

---
## 6. Hydrogen Atom (Qualitative)

The hydrogen atom, with one proton and one electron, is the simplest atom and serves as a fundamental model in quantum mechanics. The force between the electron and proton is the spherically symmetric Coulomb attraction, so the potential energy is $V(r) = -\frac{e^2}{4\pi\epsilon_0 r}$.

**Solving the Schrödinger Equation**:
*   The spherical symmetry of the potential makes it challenging to solve the SWE in Cartesian coordinates $(x,y,z)$.
*   It is **necessary to use spherical polar coordinates $(r, \theta, \phi)$**. This is because the Laplacian operator, $\nabla^2$, can be separated into parts depending only on $r$, $\theta$, and $\phi$ when $V$ depends only on $r$.
*   Using **separation of variables**: The wave function can be expressed as a product of three independent functions: $\psi(r, \theta, \phi) = R(r) \Theta(\theta) \Phi(\phi)$.
*   Solving the three separated ordinary differential equations naturally leads to the introduction of three **quantum numbers**:

1.  **Principal Quantum Number (n)**: Arises from the radial equation. It determines the **energy level** of the electron.
    *   $n = 1, 2, 3, \dots$ (positive integers).
    *   Energy: $E_n = -\frac{me^4}{8\epsilon_0^2 h^2 n^2} = -\frac{13.6 \, \text{eV}}{n^2}$.
        *   Energy is quantized and negative, indicating a bound state.
        *   The ground state ($n=1$) has the lowest energy ($E_1 = -13.6$ eV).

2.  **Angular Momentum (Orbital) Quantum Number (l)**: Arises from the polar angle ($\theta$) equation. It determines the **magnitude of the electron's orbital angular momentum** $L = \sqrt{l(l+1)}\hbar$. It primarily describes the **shape** of the electron's probability distribution (orbital).
    *   $l = 0, 1, 2, \dots, (n-1)$. (Non-negative integer, up to $n-1$).
    *   **Spectroscopic notation**: $l=0 \rightarrow s$ orbital (spherical), $l=1 \rightarrow p$ orbital (dumbbell), $l=2 \rightarrow d$ orbital (cloverleaf), $l=3 \rightarrow f$ orbital, etc.

3.  **Magnetic Quantum Number ($m_l$)**: Arises from the azimuthal angle ($\phi$) equation. It determines the **orientation of the orbital angular momentum** in space (specifically, its z-component $L_z = m_l \hbar$). It determines the spatial orientation of the orbital.
    *   $m_l = -l, -(l-1), \dots, 0, \dots, (l-1), l$. (Integer values, total $2l+1$ values).

**Hydrogen Atom Orbital**:
An orbital ($\psi_{n,l,m_l}$) is a **mathematical wave function** that is a solution to the Schrödinger equation, characterized by the three quantum numbers $n, l, m_l$.
*   **Physical Interpretation**: The square of the orbital's magnitude, $|\psi_{n,l,m_l}(r,\theta,\phi)|^2$, represents the **probability density** of finding the electron at a particular point in space around the nucleus. It does *not* represent a fixed path or trajectory. The shapes often depicted for orbitals (spheres, dumbbells) are regions of high probability density (electron clouds).

**Stability of the Hydrogen Atom (Quantum Explanation)**:
Quantum mechanics inherently explains the stability of the hydrogen atom, contrary to classical electromagnetism (which predicts electron spiraling into the nucleus).
1.  **Quantized Energy Levels**: The electron can only exist in discrete, stable energy states. It cannot continuously radiate energy and spiral inwards. Energy changes only occur by "jumping" between these fixed levels, emitting or absorbing photons of specific energies.
2.  **Stable Ground State**: The $n=1$ state is the lowest energy state available. Since there's no lower energy level, the electron cannot fall further and continuously radiate, thus the atom is stable.
3.  **Uncertainty Principle**: The electron cannot collapse onto the nucleus because doing so would imply a precise position (within the tiny nucleus) and low momentum (if at rest), violating the Heisenberg Uncertainty Principle. The electron must maintain a minimum momentum (and thus kinetic energy) keeping it away from the nucleus, even in its ground state.

*(See Q&A 27-29 in the [Q&A](Q&A.md) file for the stability, orbital representation, and necessity of spherical coordinates.)*

---
## 7. Fermi-Dirac Statistics

Fermi-Dirac statistics describe the statistical distribution of identical, indistinguishable particles with half-integer spin (these are called **fermions**, e.g., electrons, protons, neutrons) over available energy states in thermal equilibrium. A key principle governing fermions is the **Pauli Exclusion Principle**, which states that no two identical fermions can occupy the exact same quantum state (i.e., have the same set of quantum numbers).

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