# [Back](../Physics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 2: Quantum Mechanics of Simple Systems

## Introduction

This unit applies the Schrödinger Wave Equation (SWE) to analyze the behavior of particles in simple potential energy fields. We'll examine how quantum mechanics predicts phenomena like reflection, transmission, tunneling, and energy quantization, which differ significantly from classical expectations.

---
## 1. Potential Step
[Core Notes-1.excalidraw](Core%20Notes-1.excalidraw.md)

A potential step describes a sudden change in potential energy $V(x)$ from $0$ to a constant value $V_0$ at a boundary (e.g., $x=0$).

The 1D time-independent SWE is: $\frac{d^{2}\psi}{dx^{2}}+\frac{2m}{\hbar^{2}}(E-V)\psi=0$.

**Region I ($x<0, V=0$):**
SWE: $\frac{d^{2}\psi_1}{dx^{2}}+k_1^{2}\psi_1=0$, where $k_1 = \sqrt{\frac{2mE}{\hbar^2}}$.
Solution: $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$.
* $A e^{ik_1 x}$: Incident wave moving right.
* $B e^{-ik_1 x}$: Reflected wave moving left.

**Region II ($x>0, V=V_0$):**

**Case 1: $E > V_0$ (Classically allowed region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}+k_2^{2}\psi_2=0$, where $k_2 = \sqrt{\frac{2m(E-V_0)}{\hbar^2}}$.
Solution: $\psi_2(x) = D e^{ik_2 x}$. (No reflection term $e^{-ik_2 x}$ as potential is constant for $x>0$).
* The wave is transmitted but with a longer wavelength ($\lambda_2 = h/\sqrt{2m(E-V_0)} > \lambda_1$) and lower kinetic energy. * **Boundary Conditions** (at $x=0$): $\psi_1(0)=\psi_2(0)$ and $\psi_1'(0)=\psi_2'(0)$.
    * $A+B=D$
    * $ik_1(A-B) = ik_2 D \implies k_1(A-B)=k_2 D$.
* Solving gives coefficients: $B = A \frac{k_1-k_2}{k_1+k_2}$ and $D = A \frac{2k_1}{k_1+k_2}$.
* **Reflection Coefficient (R)**: Probability of reflection.
    $$R = \frac{|\text{Reflected Flux}|}{|\text{Incident Flux}|} = \frac{|B|^2}{|A|^2} = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2 = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$$
    Crucially, $R > 0$ even though $E>V_0$. Quantum mechanics predicts reflection where classical mechanics predicts none.
* **Transmission Coefficient (T)**: Probability of transmission.
    $$T = \frac{|\text{Transmitted Flux}|}{|\text{Incident Flux}|} = \frac{|D|^2 v_2}{|A|^2 v_1} = \frac{|D|^2 k_2}{|A|^2 k_1} = \frac{4k_1 k_2}{(k_1+k_2)^2}$$
* Conservation of Probability: $R+T=1$.

*(See Example 1 and Example 9 in the [Examples](Examples.md) file. See Q&A 1-3 in the [Q&A](Q&A.md) file.)*

**Case 2: $E < V_0$ (Classically forbidden region)**
SWE: $\frac{d^{2}\psi_2}{dx^{2}}-\alpha^{2}\psi_2=0$, where $\alpha = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$.
Solution: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$.
* Since $\psi$ must remain finite as $x \to \infty$, we must have $G=0$.
* $\psi_2(x) = F e^{-\alpha x}$. The wave function decays exponentially in Region II. * **Boundary Conditions** (at $x=0$): $\psi_1(0)=\psi_2(0)$ and $\psi_1'(0)=\psi_2'(0)$.
    * $A+B=F$
    * $ik_1(A-B) = -\alpha F$.
* Solving gives: $\frac{B}{A} = \frac{ik_1+\alpha}{ik_1-\alpha}$ and $\frac{F}{A} = \frac{2ik_1}{ik_1-\alpha}$.
* **Reflection Coefficient (R)**:
    $$R = \frac{|B|^2}{|A|^2} = \left| \frac{ik_1+\alpha}{ik_1-\alpha} \right|^2 = \frac{(ik_1+\alpha)(-ik_1+\alpha)}{(ik_1-\alpha)(-ik_1-\alpha)} = \frac{k_1^2+\alpha^2}{k_1^2+\alpha^2} = 1$$
    Total reflection occurs, as expected classically.
* **Transmission Coefficient (T)**: $T=0$. No steady stream of particles is transmitted.
* **Penetration Depth ($\Delta x$)**: Although $T=0$, the probability density $|\psi_2(x)|^2 = |F|^2 e^{-2\alpha x}$ is non-zero in Region II. The particle has a finite probability of being found in the classically forbidden region. The penetration depth is the distance where the probability density drops to $1/e$ of its value at the boundary (or where $\psi$ drops to $1/\sqrt{e}$), or more commonly, where $\psi$ drops to $1/e$. Defined as:
    $$\Delta x = \frac{1}{\alpha} = \frac{\hbar}{\sqrt{2m(V_0-E)}}$$
    Penetration depth increases as $E$ approaches $V_0$.

*(See Example 2 in the [Examples](Examples.md) file. See Q&A 4 in the [Q&A](Q&A.md) file.)*

---
## 2. Potential Barrier and Tunneling
![Core Notes-2.excalidraw](Core%20Notes-2.excalidraw.md)
A potential barrier has $V(x)=V_0$ for $0 < x < L$ and $V(x)=0$ otherwise ($x<0$ or $x>L$). Consider $E < V_0$.

**Regions:**
* **Region I ($x<0, V=0$)**: $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$, $k_1 = \sqrt{2mE/\hbar^2}$. (Incident + Reflected)
* **Region II ($0<x<L, V=V_0$)**: $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$, $\alpha = \sqrt{2m(V_0-E)/\hbar^2}$. (Decaying + Growing exponential)
* **Region III ($x>L, V=0$)**: $\psi_3(x) = H e^{ik_1 x}$. (Transmitted wave only)

Applying boundary conditions at $x=0$ and $x=L$ allows solving for the coefficients.

**Quantum Tunneling:**
Unlike classical mechanics, quantum mechanics predicts a non-zero probability for the particle to appear in Region III, even though $E < V_0$. This phenomenon is called **tunneling**.

**Transmission Coefficient (T)**: Probability of tunneling.
For $\alpha L \gg 1$ (wide or high barrier), it can be approximated as:
$$T \approx 16 \frac{E}{V_0} \left(1-\frac{E}{V_0}\right) e^{-2\alpha L}$$
Or simply $T \propto e^{-2\alpha L}$.
$$T \propto \exp\left(-2L \frac{\sqrt{2m(V_0-E)}}{\hbar}\right)$$
* Tunneling probability decreases exponentially with barrier width $L$.
* Tunneling probability decreases exponentially with the square root of the mass $m$ and the energy difference $(V_0-E)$.
* Heavier particles or particles with much lower energy than the barrier height are less likely to tunnel.

**Significance & Applications:**
* **Alpha Decay**: Alpha particles escape the nucleus by tunneling through the Coulomb barrier. Explains the wide range of half-lives. * **Nuclear Fusion**: Protons in stars tunnel through their mutual Coulomb repulsion to fuse.
* **Scanning Tunneling Microscope (STM)**: Electrons tunnel across a vacuum gap between a sharp tip and a surface, allowing atomic-scale imaging.
* **Tunnel Diodes**: Semiconductor device utilizing tunneling for specific electronic characteristics.

*(See Example 3 and Example 10 in the [Examples](Examples.md) file. See Q&A 5-8 in the [Q&A](Q&A.md) file.)*

---
## 3. Particle in a Box (Infinite Potential Well)

A particle of mass $m$ is confined to a 1D region (e.g., $0 < x < L$ or $-a/2 < x < +a/2$) where $V=0$, with infinitely high potential walls ($V=\infty$) at the boundaries.

Inside the well ($V=0$): SWE is $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$, where $k=\sqrt{2mE/\hbar^2}$.
General solution: $\psi(x) = A \sin(kx) + B \cos(kx)$.

**Boundary Conditions:** Since the walls are infinite, the particle cannot exist outside or at the walls. $\psi(0)=0$ and $\psi(L)=0$.
* $\psi(0)=0 \implies A \sin(0) + B \cos(0) = 0 \implies B=0$.
* Solution becomes $\psi(x) = A \sin(kx)$.
* $\psi(L)=0 \implies A \sin(kL)=0$. Since $A \neq 0$, we must have $kL=n\pi$, where $n$ is an integer.
* $k = \frac{n\pi}{L}$. Since $n=0$ gives $\psi=0$ (no particle) and negative $n$ gives the same solution as positive $n$ (just flips sign of A), we take $n=1, 2, 3, \dots$.

**Quantized Energy Levels:**
Substituting $k = n\pi/L$ into $k=\sqrt{2mE/\hbar^2}$:
$\frac{n^2\pi^2}{L^2} = \frac{2mE_n}{\hbar^2} = \frac{2mE_n}{(h/2\pi)^2} = \frac{8m\pi^2 E_n}{h^2}$.
$$E_n = \frac{n^2 h^2}{8mL^2} \quad (n=1, 2, 3, \dots)$$
* Energy is **quantized**, only discrete values are allowed.
* $n$ is the **principal quantum number**.
* **Zero-Point Energy**: The lowest energy ($n=1$) is $E_1 = h^2 / (8mL^2)$, which is non-zero. The particle cannot have zero energy (consistent with Uncertainty Principle - if E=0, momentum=0, position uncertainty would be infinite, violating confinement).

**Normalized Wave Functions:**
Using $\int_0^L |\psi_n(x)|^2 dx = 1$:
$\int_0^L A^2 \sin^2(\frac{n\pi x}{L}) dx = 1 \implies A^2 (L/2) = 1 \implies A = \sqrt{2/L}$.
$$\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

**Symmetric Well ($-a/2$ to $+a/2$):**
If boundaries are at $\pm a/2$, the solutions separate by parity:
* $E_n = \frac{n^2 h^2}{8ma^2}$ (same energy formula, $L=a$).
* $\psi_n(x) = \sqrt{\frac{2}{a}} \cos(\frac{n\pi x}{a})$ for $n=1, 3, 5, \dots$ (Even parity)
* $\psi_n(x) = \sqrt{\frac{2}{a}} \sin(\frac{n\pi x}{a})$ for $n=2, 4, 6, \dots$ (Odd parity)

**Probability Density:** $P_n(x) = |\psi_n(x)|^2$.
* $n=1$: Max probability at center ($L/2$).
* $n=2$: Max probability at $L/4$ and $3L/4$; Zero probability at center.
* $n=3$: Max probability at $L/6, L/2, 5L/6$.

*(See Example 4 and Example 5 in the [Examples](Examples.md) file. See Q&A 9-14 in the [Q&A](Q&A.md) file.)*

**Particle in 2D/3D Box:**
The SWE separates for each dimension.
* **2D Box (LxL):**
    $E_{n_x, n_y} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2)$, $n_x, n_y = 1, 2, \dots$
    $\psi_{n_x, n_y}(x,y) = \frac{2}{L} \sin(\frac{n_x \pi x}{L}) \sin(\frac{n_y \pi y}{L})$.
* **3D Box (LxLxL):**
    $E_{n_x, n_y, n_z} = \frac{h^2}{8mL^2} (n_x^2 + n_y^2 + n_z^2)$, $n_x, n_y, n_z = 1, 2, \dots$
    $\psi_{n_x, n_y, n_z}(x,y,z) = (\frac{2}{L})^{3/2} \sin(\frac{n_x \pi x}{L}) \sin(\frac{n_y \pi y}{L}) \sin(\frac{n_z \pi z}{L})$.

**Degeneracy:** When multiple distinct combinations of quantum numbers ($n_x, n_y, n_z$) give the same energy level.
* 1D: No degeneracy.
* 2D (Square): Degeneracy occurs when $n_x \neq n_y$ (e.g., $E_{1,2} = E_{2,1}$).
* 3D (Cube): Degeneracy occurs when quantum numbers are permuted (e.g., $E_{1,1,2} = E_{1,2,1} = E_{2,1,1}$ is 3-fold degenerate).

*(See Q&A 15-18 in the [Q&A](Q&A.md) file.)*

---
## 4. Finite Potential Well (Qualitative)

Potential $V(x)=0$ for $-L/2 < x < L/2$, and $V(x)=V_0$ (finite) for $|x|>L/2$.

* **Inside Well ($-L/2 < x < L/2$)**: SWE is $\frac{d^{2}\psi}{dx^{2}}+k^{2}\psi=0$, $k=\sqrt{2mE/\hbar^2}$. Solutions are sinusoidal (sin/cos).
* **Outside Well ($|x|>L/2$)**: SWE is $\frac{d^{2}\psi}{dx^{2}}-\alpha^{2}\psi=0$, $\alpha=\sqrt{2m(V_0-E)/\hbar^2}$. Solutions are decaying exponentials $\psi \propto e^{-\alpha |x|}$.

**Key Differences from Infinite Well:**
* **Wave function penetrates** into the classically forbidden region ($|x|>L/2$), decaying exponentially.
* **Boundary Conditions:** $\psi$ and $\psi'$ must be continuous at $x=\pm L/2$. This leads to transcendental equations for allowed energies (no simple formula like infinite well). Graphical/numerical solutions are needed.
* **Energy Levels:** Allowed energies $E_n$ are lower than the corresponding energies in an infinite well of the same width L. This is because the 'effective width' for the wave function is larger due to penetration ($L + 2\Delta x$).
* **Number of Bound States:** There is always at least one bound state, but only a finite number of bound states exist ($E_n < V_0$). The number depends on the depth $V_0$ and width $L$.

*(See Q&A 19-20 in the [Q&A](Q&A.md) file.)*

---
## 5. Quantum Harmonic Oscillator

Describes systems with a restoring force proportional to displacement ($F=-kx$), leading to potential energy $V(x) = \frac{1}{2} k x^2 = \frac{1}{2} m \omega^2 x^2$, where $\omega = \sqrt{k/m}$ is the classical angular frequency. Models vibrations of diatomic molecules (using reduced mass $\mu$).

SWE: $\frac{d^{2}\psi}{dx^{2}}+\frac{2m}{\hbar^{2}}(E-\frac{1}{2}m\omega^{2}x^{2})\psi=0$.

**Quantized Energy Levels:**
Solutions exist only for discrete energy values:
$$E_n = \left(n+\frac{1}{2}\right) \hbar \omega \quad (n=0, 1, 2, \dots)$$
* $n$ is the vibrational quantum number.
* **Zero-Point Energy ($n=0$)**: $E_0 = \frac{1}{2} \hbar \omega$. The minimum energy is non-zero, required by the Uncertainty Principle (if E=0, both x=0 and p=0, violating $\Delta x \Delta p \ge \hbar/2$).
* **Equal Spacing**: Energy levels are equally spaced by $\Delta E = \hbar \omega$.

**Wave Functions:**
Involve Hermite polynomials $H_n(\xi)$ and a Gaussian term:
$$\psi_n(x) = N_n H_n(\gamma x) e^{-\frac{1}{2}(\gamma x)^2}$$
where $\gamma = \sqrt{m\omega/\hbar}$, $\xi = \gamma x$, and $N_n$ is a normalization constant.
* $H_0(\xi)=1, H_1(\xi)=2\xi, H_2(\xi)=4\xi^2-2, \dots$
* Ground state ($n=0$) is a Gaussian function. Higher states have nodes.
* Parity alternates: $n=0$ (even), $n=1$ (odd), $n=2$ (even), etc.
* Penetration into classically forbidden regions (where $E < V(x)$) occurs.

*(See Q&A 21-25 in the [Q&A](Q&A.md) file.)*

**Anharmonic Oscillator:**
Real molecular potentials deviate from the perfect parabola $V(x) \propto x^2$, especially at larger displacements. They include higher-order terms (e.g., $x^3, x^4$).
* **Unequal Spacing**: Energy levels are no longer equally spaced. Typically, the spacing $\Delta E$ decreases as $n$ increases.
* **Dissociation**: At high enough energy, the bond breaks (dissociation).
* **Significance**: Anharmonicity is crucial for spectroscopy (observing transitions) and for creating qubits (like transmons) by allowing selective addressing of transitions between specific energy levels (e.g., $E_0 \leftrightarrow E_1$ vs $E_1 \leftrightarrow E_2$).

*(See Q&A 26 in the [Q&A](Q&A.md) file.)*

---
## 6. Hydrogen Atom (Qualitative)

Simplest atom (one proton, one electron). Potential is the Coulomb potential $V(r) = -\frac{e^2}{4\pi\epsilon_0 r}$, which is spherically symmetric.
SWE is solved in spherical coordinates $(r, \theta, \phi)$.

The wave function separates: $\psi(r, \theta, \phi) = R(r) \Theta(\theta) \Phi(\phi)$.
Solving the three separated equations naturally introduces three **quantum numbers**:

* **Principal Quantum Number (n)**: Arises from the radial equation. Determines the energy level.
    * $n = 1, 2, 3, \dots$
    * Energy: $E_n = -\frac{me^4}{8\epsilon_0^2 h^2 n^2} = -\frac{13.6 \, eV}{n^2}$. Energy is quantized and negative (bound state). Ground state $n=1$, $E_1 = -13.6$ eV.
* **Angular Momentum (Orbital) Quantum Number (l)**: Arises from the polar angle ($\theta$) equation. Determines the magnitude of the electron's orbital angular momentum $L = \sqrt{l(l+1)}\hbar$. Describes the shape of the orbital.
    * $l = 0, 1, 2, \dots, (n-1)$.
    * Spectroscopic notation: $l=0 \rightarrow s$, $l=1 \rightarrow p$, $l=2 \rightarrow d$, $l=3 \rightarrow f$.
* **Magnetic Quantum Number ($m_l$)**: Arises from the azimuthal angle ($\phi$) equation. Determines the orientation of the orbital angular momentum in space (specifically, its z-component $L_z = m_l \hbar$).
    * $m_l = -l, -(l-1), \dots, 0, \dots, (l-1), l$. (Total $2l+1$ values).

**Wave Functions (Orbitals):**
Solutions $\psi_{n,l,m_l}(r,\theta,\phi)$ describe the state of the electron. $|\psi|^2$ gives the probability density of finding the electron.
* **Radial Part $R_{nl}(r)$**: Depends on $n$ and $l$. Determines how probability varies with distance from nucleus. Contains nodes (radii where probability is zero). * **Angular Part $Y_{lm_l}(\theta, \phi)$ (Spherical Harmonics)**: Depends on $l$ and $m_l$. Determines the shape and orientation of the orbital.
    * $s$ orbitals ($l=0$) are spherically symmetric.
    * $p$ orbitals ($l=1$) are dumbbell-shaped along x, y, z axes ($m_l=-1, 0, +1$).
    * $d$ orbitals ($l=2$) have more complex shapes.

**Stability:** Quantum mechanics explains why the electron doesn't spiral into the nucleus. It must occupy a quantized energy level, with the lowest possible energy ($E_1$) being non-zero and stable.

*(See Q&A 27-29 in the [Q&A](Q&A.md) file.)*

---
## 7. Fermi-Dirac Statistics

Describes the statistical distribution of identical, indistinguishable particles with half-integer spin (like electrons) over available energy states in thermal equilibrium. Key principle: **Pauli Exclusion Principle** - no two fermions can occupy the same quantum state.

* **Fermi Energy ($E_f$)**: At absolute zero (0 K), fermions fill the lowest available energy states up to a maximum energy level, the Fermi energy. All states below $E_f$ are occupied, all states above $E_f$ are empty.
* **Fermi Factor ($f(E)$ or $F_d$)**: Gives the probability that a state with energy $E$ is occupied by a fermion at temperature $T$.
    $$f(E) = \frac{1}{e^{(E-E_f)/(k_B T)} + 1}$$
    Where $k_B$ is the Boltzmann constant.
* **Temperature Dependence**:
    * At $T=0$ K: $f(E)=1$ for $E<E_f$; $f(E)=0$ for $E>E_f$. (Step function)
    * At $T>0$ K: The transition becomes smeared out over an energy range of roughly $k_B T$ around $E_f$.
        * $f(E_f) = 1/2$ (Fermi level is the energy with 50% occupation probability).
        * Some states below $E_f$ become empty, some states above $E_f$ become occupied due to thermal excitation.
    * The probability of a state $\Delta E$ below $E_f$ being occupied is equal to the probability of a state $\Delta E$ above $E_f$ being *unoccupied*: $f(E_f-\Delta E) = 1 - f(E_f+\Delta E)$.

*(See Example 8 in the [Examples](Examples.md) file. See Q&A 30-32 in the [Q&A](Q&A.md) file.)*

---
## 8. Density of States ($g(E)$)

Describes the number of available quantum states per unit energy interval, per unit volume. For free electrons in a 3D metal (modeled as particle in a 3D box):
$$g(E) dE = \frac{\pi}{2} \left(\frac{8m}{h^2}\right)^{3/2} E^{1/2} dE$$
* The number of available states increases with the square root of energy.

**Calculation of Number of States:**
Model electrons in a 3D box of side L. Energy is $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)$.
Each combination $(n_x, n_y, n_z)$ represents a state. These points form a lattice in "n-space".
The number of states N(E) with energy less than E corresponds to the number of points within the positive octant of a sphere of radius $R = \sqrt{n_x^2+n_y^2+n_z^2} = \sqrt{8mL^2 E / h^2}$ in n-space.
Volume of octant = $\frac{1}{8} \times \frac{4}{3} \pi R^3$. Each state occupies unit volume in n-space.
Number of states $N(R) = \frac{1}{8} \frac{4}{3} \pi R^3 = \frac{\pi}{6} R^3$.
Substitute R in terms of E: $N(E) = \frac{\pi}{6} \left(\frac{8mL^2 E}{h^2}\right)^{3/2}$.
Density of states $g(E) = \frac{1}{V} \frac{dN(E)}{dE}$ (where $V=L^3$).
Accounting for spin (2 electrons per energy state):
$g(E) = \frac{2}{L^3} \frac{dN(E)}{dE} = \frac{2}{L^3} \frac{\pi}{6} \left(\frac{8mL^2}{h^2}\right)^{3/2} \frac{3}{2} E^{1/2}$
$$g(E) = \frac{\pi}{2} \left(\frac{8m}{h^2}\right)^{3/2} E^{1/2}$$

*(See Q&A 33 in the [Q&A](Q&A.md) file.)*

***
# [Back](../Physics.md)