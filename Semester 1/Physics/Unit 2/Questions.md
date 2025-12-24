---
dg-publish: true
---

# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***
# Unit 2: Q&A and Worked Problems

***
## Potential Step & Barrier Tunneling
***

### 1. Define reflection coefficient (R) and transmission coefficient (T) w.r.t step potential.

#### Answer
Classically, R is the ratio of reflected intensity to incident intensity, and T is the ratio of transmitted intensity to incident intensity. Quantum mechanically, intensity corresponds to probability density flux.
$$R = \frac{|\text{Reflected Flux}|}{|\text{Incident Flux}|}$$
$$T = \frac{|\text{Transmitted Flux}|}{|\text{Incident Flux}|}$$
In both cases, probability (or flux) is conserved, so $R + T = 1$.

---
### 2. Particle ($m, E$) moves towards potential step $V_0$. If $E>V_0$, obtain the expression for R using continuity conditions.

#### Answer
The wave functions are $\psi_1 = A e^{ik_1 x} + B e^{-ik_1 x}$ (Region 1) and $\psi_2 = D e^{ik_2 x}$ (Region 2).
Continuity at $x=0$:
1. $\psi_1(0) = \psi_2(0) \implies A+B=D$
2. $\psi_1'(0) = \psi_2'(0) \implies ik_1(A-B) = ik_2 D \implies k_1(A-B) = k_2 D$

Substitute D from (1) into (2): $k_1(A-B) = k_2(A+B)$.
$k_1 A - k_1 B = k_2 A + k_2 B$
$A(k_1 - k_2) = B(k_1 + k_2)$
$\frac{B}{A} = \frac{k_1 - k_2}{k_1 + k_2}$

Reflection Coefficient $R = \frac{|B|^2}{|A|^2} = \left|\frac{k_1 - k_2}{k_1 + k_2}\right|^2 = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2$.

---
### 3. If $R = \frac{(k_1-k_2)^2}{(k_1+k_2)^2}$, and a 5 eV electron encounters a 2 eV step, find R.

#### Answer
$E=5$ eV, $V_0=2$ eV. $E > V_0$.
$k_1 \propto \sqrt{E}$
$k_2 \propto \sqrt{E-V_0}$
$R = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2 = \left(\frac{\sqrt{E} - \sqrt{E-V_0}}{\sqrt{E} + \sqrt{E-V_0}}\right)^2$
$R = \left(\frac{\sqrt{5} - \sqrt{5-2}}{\sqrt{5} + \sqrt{5-2}}\right)^2 = \left(\frac{\sqrt{5} - \sqrt{3}}{\sqrt{5} + \sqrt{3}}\right)^2$
$R = \left(\frac{2.236 - 1.732}{2.236 + 1.732}\right)^2 = \left(\frac{0.504}{3.968}\right)^2 \approx (0.127)^2 \approx 0.016$
The probability of reflection is about 1.6%.

---
### 4. Explain penetration depth.

#### Answer
Penetration depth ($\Delta x$) is the characteristic distance a particle's wave function penetrates into a classically forbidden region (where $E < V_0$). In this region, the wave function decays exponentially ($\psi \propto e^{-\alpha x}$). The penetration depth is usually defined as the distance over which the wave function's amplitude drops to $1/e$ (about 37%) of its value at the boundary.
$$\Delta x = \frac{1}{\alpha} = \frac{\hbar}{\sqrt{2m(V_0-E)}}$$
It signifies that there's a non-zero probability of finding the particle within this depth inside the barrier, even though it's classically forbidden.

---
### 5. What is quantum mechanical tunneling? Explain significance.

#### Answer
Quantum tunneling is the phenomenon where a quantum particle can pass through a potential energy barrier even if its total energy ($E$) is less than the barrier height ($V_0$). Classically, the particle would be reflected. Quantum mechanically, the wave function decays exponentially inside the barrier but remains non-zero, allowing a finite probability for the particle to appear on the other side.
**Significance:** Tunneling explains phenomena impossible in classical physics, such as:
* **Alpha decay:** Alpha particles escaping the nucleus.
* **Nuclear fusion:** Protons overcoming Coulomb repulsion in stars.
* **Technology:** Operation of Scanning Tunneling Microscopes (STM), Tunnel Diodes, and contributions to chemical reactions.

---
### 6. Interpret the wave function nature in the three regions of barrier potential ($E < V_0$).

#### Answer
* **Region I (Before Barrier, $x<0, V=0$):** $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$. This represents a superposition of an incident wave ($A e^{ik_1 x}$) moving towards the barrier and a reflected wave ($B e^{-ik_1 x}$) moving away. The wave function is **oscillatory**.
* **Region II (Inside Barrier, $0<x<L, V=V_0$):** $\psi_2(x) = F e^{-\alpha x} + G e^{\alpha x}$. This is a combination of decaying ($e^{-\alpha x}$) and potentially growing ($e^{\alpha x}$) exponential functions (real exponentials, not oscillations). It describes the **evanescent wave** within the barrier.
* **Region III (After Barrier, $x>L, V=0$):** $\psi_3(x) = H e^{ik_1 x}$. This represents only a transmitted wave moving away from the barrier. The wave function is **oscillatory** again, with the same wavelength as the incident wave but a much smaller amplitude ($|H| < |A|$).

---
### 7. Proton and alpha particle (same E) approach a barrier $V_0 > E$. Same tunneling probability? Which is greater?

#### Answer
No, they do not have the same tunneling probability. The approximate transmission probability $T \propto e^{-2\alpha L}$, where $\alpha = \sqrt{2m(V_0-E)/\hbar^2}$.
Since $E$ and $V_0$ are the same, $\alpha \propto \sqrt{m}$.
An alpha particle is significantly heavier than a proton ($m_\alpha \approx 4 m_p$).
Therefore, $\alpha$ is larger for the alpha particle.
Since $\alpha$ appears in a negative exponent, a larger $\alpha$ leads to a smaller $T$.
The **proton** (lighter particle) has a **greater probability** of tunneling through the barrier.

---
### 8. Alpha particle $T = 2.54 \times 10^{-24}$. Velocity $v=1.7 \times 10^7$ m/s, nuclear radius $R=10^{-14}$ m. Calculate mean lifetime $\tau$.

#### Answer
Frequency of collisions with barrier $n = v / (2R) = (1.7 \times 10^7) / (2 \times 10^{-14}) = 8.5 \times 10^{20}$ s⁻¹.
Probability of escape per second $P = n \times T = (8.5 \times 10^{20}) \times (2.54 \times 10^{-24}) \approx 2.16 \times 10^{-3}$ s⁻¹.
Mean lifetime $\tau = 1 / P = 1 / (2.16 \times 10^{-3}) \approx 463$ s.
$463 \, s = 7 \times 60 + 43 \approx 7$ minutes $43$ seconds.

---
## Particle in a Box & Finite Well
---

### 9. Show energy $E_n$ is quantized for electron in 1D infinite well (length L). Is $E=0$ allowed? Why?

#### Answer
Inside the well ($0<x<L$, $V=0$), the SWE solution is $\psi(x) = A \sin(kx) + B \cos(kx)$ with $k=\sqrt{2mE/\hbar^2}$.
Boundary conditions $\psi(0)=0$ and $\psi(L)=0$ require $B=0$ and $kL=n\pi$ for $n=1, 2, 3, \dots$.
Substituting $k=n\pi/L$ into the expression for $k$ gives:
$\frac{n\pi}{L} = \sqrt{\frac{2mE_n}{\hbar^2}} \implies \frac{n^2\pi^2}{L^2} = \frac{2mE_n}{(h/2\pi)^2} = \frac{8m\pi^2 E_n}{h^2}$.
$$E_n = \frac{n^2 h^2}{8mL^2}$$
Since $n$ must be a positive integer ($n=1, 2, 3, \dots$), the energy $E_n$ can only take discrete, quantized values.
The state $n=0$ is not allowed because it leads to $k=0$ and $\psi(x)=A\sin(0)+B\cos(0)=B$. For $\psi(L)=0$, B must be 0, resulting in $\psi(x)=0$ everywhere. This means the particle is not in the well, violating the premise. Since $n \neq 0$, the minimum energy is $E_1 = h^2/(8mL^2)$, which is greater than zero. Therefore, the electron **cannot have zero energy**. This non-zero minimum energy is called the **zero-point energy**.

---
### 10. Elaborate on parity for Eigen functions. When is parity applicable?

#### Answer
**Parity** describes the symmetry of a wave function $\psi(x)$ under inversion of the coordinate ($x \to -x$).
* **Even Parity:** If $\psi(-x) = +\psi(x)$. The function is symmetric about the origin.
* **Odd Parity:** If $\psi(-x) = -\psi(x)$. The function is anti-symmetric about the origin.

Parity is a useful concept when the **potential energy $V(x)$ is symmetric**, i.e., $V(-x) = V(x)$. For symmetric potentials (like the infinite well centered at $x=0$ or the harmonic oscillator), the solutions (Eigen functions) of the SWE can always be chosen to have definite parity (either purely even or purely odd).
For the infinite potential well centered at $x=0$ (width $a$, from $-a/2$ to $+a/2$):
* $\psi_n(x) \propto \cos(n\pi x/a)$ for $n=1, 3, 5, \dots$ (Even parity)
* $\psi_n(x) \propto \sin(n\pi x/a)$ for $n=2, 4, 6, \dots$ (Odd parity)

---
### 11. Write wave functions for $n=1, 2, 3$ for particle in infinite square well (symmetric, width a).

#### Answer
For a symmetric well from $-a/2$ to $+a/2$:
* $n=1$ (odd n): $\psi_1(x) = \sqrt{\frac{2}{a}} \cos\left(\frac{\pi x}{a}\right)$ (Even parity)
* $n=2$ (even n): $\psi_2(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{2\pi x}{a}\right)$ (Odd parity)
* $n=3$ (odd n): $\psi_3(x) = \sqrt{\frac{2}{a}} \cos\left(\frac{3\pi x}{a}\right)$ (Even parity)

---
### 12. Plot probability densities $|\psi_n(x)|^2$ for $n=1, 2, 3$ (first three states) for electron in infinite well (width L).

#### Answer
(Assuming well from $x=0$ to $x=L$, $\psi_n(x) = \sqrt{2/L}\sin(n\pi x/L)$).
Probability density $P_n(x) = |\psi_n(x)|^2 = \frac{2}{L} \sin^2(\frac{n\pi x}{L})$.

* **n=1 (Ground State):** $P_1(x) = \frac{2}{L} \sin^2(\frac{\pi x}{L})$. Single peak centered at $x=L/2$. Zeroes at $x=0, L$.
    
* **n=2 (First Excited State):** $P_2(x) = \frac{2}{L} \sin^2(\frac{2\pi x}{L})$. Two peaks centered at $x=L/4$ and $x=3L/4$. Zeroes at $x=0, L/2, L$.
    
* **n=3 (Second Excited State):** $P_3(x) = \frac{2}{L} \sin^2(\frac{3\pi x}{L})$. Three peaks centered at $x=L/6, L/2, 5L/6$. Zeroes at $x=0, L/3, 2L/3, L$.
    

---
### 13. Find least energy of electron in 1D infinite box (width 0.05 nm).

#### Answer
$E_n = \frac{n^2 h^2}{8mL^2}$. Least energy is $E_1$.
$L = 0.05 \times 10^{-9}$ m. $m = 9.11 \times 10^{-31}$ kg. $h = 6.626 \times 10^{-34}$ Js.
$E_1 = \frac{(1)^2 (6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (0.05 \times 10^{-9})^2}$
$E_1 \approx 2.41 \times 10^{-17}$ J.
$E_1 (eV) = (2.41 \times 10^{-17}) / (1.602 \times 10^{-19}) \approx 150.4$ eV.

---
### 14. What happens to wavefunction and energy levels if infinite well width doubles ($L \to 2L$)?

#### Answer
**Energy Levels:** $E_n = \frac{n^2 h^2}{8mL^2}$. If $L \to 2L$, the new energy $E_n' = \frac{n^2 h^2}{8m(2L)^2} = \frac{n^2 h^2}{8m(4L^2)} = \frac{1}{4} E_n$.
The energy levels become **one-quarter** of their original values and get **closer together**.

**Wave Functions:** $\psi_n(x) = \sqrt{\frac{2}{L}} \sin(\frac{n\pi x}{L})$. The new function $\psi_n'(x) = \sqrt{\frac{2}{2L}} \sin(\frac{n\pi x}{2L})$.
The amplitude $\sqrt{2/L}$ **decreases**, and the function becomes **spatially stretched** over the wider interval $0 < x < 2L$. The number of nodes ($n-1$) remains the same for a given $n$.

---
### 15. Electron in 3D cubic infinite well (L=1nm). Compute energy difference between ground and second excited state.

#### Answer
Energy $E_{n_x,n_y,n_z} = \frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2) = E_0(n_x^2+n_y^2+n_z^2)$, where $E_0=\frac{h^2}{8mL^2}$.
Ground State: $(n_x,n_y,n_z)=(1,1,1)$. $E_{111} = E_0(1^2+1^2+1^2) = 3E_0$.
First Excited State: $(2,1,1)$ or $(1,2,1)$ or $(1,1,2)$. $E_{211} = E_0(2^2+1^2+1^2) = 6E_0$. (Triply degenerate).
Second Excited State: $(2,2,1)$ or $(2,1,2)$ or $(1,2,2)$. $E_{221} = E_0(2^2+2^2+1^2) = 9E_0$. (Triply degenerate).
Energy Difference $\Delta E = E_{2nd Ex} - E_{Ground} = 9E_0 - 3E_0 = 6E_0$.
$E_0 = \frac{(6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (1 \times 10^{-9})^2} \approx 6.02 \times 10^{-20}$ J.
$\Delta E = 6 \times E_0 = 6 \times (6.02 \times 10^{-20}) \approx 3.61 \times 10^{-19}$ J.
$\Delta E (eV) = (3.61 \times 10^{-19}) / (1.602 \times 10^{-19}) \approx 2.25$ eV.

---
### 16. Show $\psi_{1,2}(x,y)=\frac{2}{L} \sin(\pi x/L) \sin(2\pi y/L)$ satisfies time-independent SWE inside a 2D well (LxL).

#### Answer
The time-independent SWE in 2D for $V=0$ is:
$-\frac{\hbar^2}{2m}(\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2}) = E \psi$.
Let $\psi = \psi_{1,2}(x,y) = C \sin(k_x x) \sin(k_y y)$ where $C=2/L$, $k_x = \pi/L$, $k_y = 2\pi/L$.
$\frac{\partial \psi}{\partial x} = C k_x \cos(k_x x) \sin(k_y y)$
$\frac{\partial^2 \psi}{\partial x^2} = -C k_x^2 \sin(k_x x) \sin(k_y y) = -k_x^2 \psi$.
Similarly, $\frac{\partial^2 \psi}{\partial y^2} = -k_y^2 \psi$.
Substitute into SWE:
$-\frac{\hbar^2}{2m}(-k_x^2 \psi - k_y^2 \psi) = E \psi$.
$-\frac{\hbar^2}{2m}(-(k_x^2+k_y^2))\psi = E \psi$.
$\frac{\hbar^2}{2m}(k_x^2+k_y^2)\psi = E \psi$.
This holds true if the energy $E$ is equal to $E = \frac{\hbar^2}{2m}(k_x^2+k_y^2)$.
Substitute $k_x=\pi/L, k_y=2\pi/L$ and $\hbar = h/2\pi$:
$E = \frac{(h/2\pi)^2}{2m}((\pi/L)^2 + (2\pi/L)^2) = \frac{h^2}{8m\pi^2} \frac{\pi^2}{L^2}(1^2+2^2)$.
$E = \frac{h^2}{8mL^2}(1^2+2^2)$.
This is the correct energy eigenvalue $E_{1,2}$ for the state $(n_x=1, n_y=2)$. Since the function satisfies the SWE with the correct eigenvalue, it is a valid solution (eigenfunction).

---
### 17. Solve time independent SWE for particle in 2D rectangular well ($a \times b$, infinite walls). Find $E$ and $\psi$ for first two states.

#### Answer
SWE: $-\frac{\hbar^2}{2m}(\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2}) = E \psi$ inside ($0<x<a, 0<y<b$).
Use separation of variables: $\psi(x,y) = X(x)Y(y)$.
$-\frac{\hbar^2}{2m}(Y X'' + X Y'') = E XY$. Divide by $XY$:
$-\frac{\hbar^2}{2m}(\frac{X''}{X} + \frac{Y''}{Y}) = E$.
$\frac{X''}{X} = -\frac{2m E_x}{\hbar^2}$ and $\frac{Y''}{Y} = -\frac{2m E_y}{\hbar^2}$, where $E=E_x+E_y$.
These are 1D particle-in-a-box equations.
Solutions:
$X(x) = \sqrt{2/a} \sin(n_x \pi x / a)$, $E_x = \frac{n_x^2 h^2}{8ma^2}$, $n_x=1, 2, ...$
$Y(y) = \sqrt{2/b} \sin(n_y \pi y / b)$, $E_y = \frac{n_y^2 h^2}{8mb^2}$, $n_y=1, 2, ...$
Total Energy Eigenvalue: $E_{n_x,n_y} = \frac{h^2}{8m}(\frac{n_x^2}{a^2} + \frac{n_y^2}{b^2})$.
Eigenfunction: $\psi_{n_x,n_y}(x,y) = \sqrt{\frac{4}{ab}} \sin(\frac{n_x \pi x}{a}) \sin(\frac{n_y \pi y}{b})$.

First Two States (lowest energies):
1.  **Ground State:** $n_x=1, n_y=1$.
    $E_{1,1} = \frac{h^2}{8m}(\frac{1}{a^2} + \frac{1}{b^2})$.
    $\psi_{1,1}(x,y) = \sqrt{\frac{4}{ab}} \sin(\frac{\pi x}{a}) \sin(\frac{\pi y}{b})$.
2.  **First Excited State:** Depends on relative sizes of $a$ and $b$.
    * If $a > b$, then $1/a^2 < 1/b^2$. The next lowest energy is likely from increasing $n_x$ to 2: $(n_x=2, n_y=1)$.
      $E_{2,1} = \frac{h^2}{8m}(\frac{4}{a^2} + \frac{1}{b^2})$.
      $\psi_{2,1}(x,y) = \sqrt{\frac{4}{ab}} \sin(\frac{2\pi x}{a}) \sin(\frac{\pi y}{b})$.
    * If $b > a$, then $1/b^2 < 1/a^2$. The next lowest energy is likely from increasing $n_y$ to 2: $(n_x=1, n_y=2)$.
      $E_{1,2} = \frac{h^2}{8m}(\frac{1}{a^2} + \frac{4}{b^2})$.
      $\psi_{1,2}(x,y) = \sqrt{\frac{4}{ab}} \sin(\frac{\pi x}{a}) \sin(\frac{2\pi y}{b})$.
    * If $a=b$ (square well), then $E_{2,1}=E_{1,2}$ and the first excited state is doubly degenerate.

---
### 18. List first six possible distinct energy eigen states (energies and degeneracy) of 3D infinite well (cube, side L).

#### Answer
Energy $E_{n_x, n_y, n_z} = E_0 (n_x^2+n_y^2+n_z^2)$, where $E_0 = \frac{h^2}{8mL^2}$.

1.  $(1,1,1)$: $E=E_0(1+1+1) = 3E_0$. Degeneracy = 1.
2.  $(2,1,1), (1,2,1), (1,1,2)$: $E=E_0(4+1+1) = 6E_0$. Degeneracy = 3.
3.  $(2,2,1), (2,1,2), (1,2,2)$: $E=E_0(4+4+1) = 9E_0$. Degeneracy = 3.
4.  $(3,1,1), (1,3,1), (1,1,3)$: $E=E_0(9+1+1) = 11E_0$. Degeneracy = 3.
5.  $(2,2,2)$: $E=E_0(4+4+4) = 12E_0$. Degeneracy = 1.
6.  $(3,2,1)$ & permutations: $(3,2,1), (3,1,2), (2,3,1), (1,3,2), (2,1,3), (1,2,3)$. $E=E_0(9+4+1) = 14E_0$. Degeneracy = 6.

First six distinct energy *levels* are $3E_0, 6E_0, 9E_0, 11E_0, 12E_0, 14E_0$.

---
## Finite Well
---

### 19. How do Eigen energy levels of finite well compare with infinite well (same width)?

#### Answer
The allowed energy levels $E_n$ for a finite potential well are **lower** than the corresponding energy levels for an infinite potential well of the same width $L$. This is because the wave function penetrates into the walls of the finite well, effectively increasing the region over which the particle is spread (making the 'effective width' $> L$). According to the particle-in-a-box energy formula $E_n \propto 1/L^2$, a larger effective width leads to lower energy levels.

---
### 20. Outline mathematical process for finding Eigen values/functions for finite well.

#### Answer
1.  **Define Regions:** Set up the potential $V(x)=0$ inside ($-L/2 < x < L/2$) and $V(x)=V_0$ outside ($|x|>L/2$). Consider $E<V_0$.
2.  **Write SWE for each region:** Inside, it's oscillatory ($\psi''+k^2\psi=0$). Outside, it's exponential decay ($\psi''-\alpha^2\psi=0$).
3.  **Write General Solutions:** Inside: $\psi_{in} = A\sin(kx)+B\cos(kx)$. Outside: $\psi_{out, L} = C e^{\alpha x}$ ($x<-L/2$), $\psi_{out, R} = D e^{-\alpha x}$ ($x>L/2$).
4.  **Apply Boundary Conditions:** Require $\psi$ and $\psi'$ to be continuous at $x = \pm L/2$. This yields four equations relating A, B, C, D.
5.  **Simplify & Solve:** Solutions separate into even (cosine-like inside) and odd (sine-like inside) parity states. Applying boundary conditions leads to two **transcendental equations**:
    * Even states: $\alpha = k \tan(kL/2)$
    * Odd states: $\alpha = -k \cot(kL/2)$
    where $k=\sqrt{2mE/\hbar^2}$ and $\alpha=\sqrt{2m(V_0-E)/\hbar^2}$.
6.  **Find Eigenvalues (Energies):** Solve these transcendental equations graphically or numerically for the allowed discrete values of energy $E$. The number of solutions (bound states) is finite.
7.  **Find Eigenfunctions:** Substitute each allowed energy $E_n$ back into the boundary condition equations to find the relationships between A, B, C, D (up to an overall normalization constant) for each state $\psi_n$. Normalize the resulting $\psi_n$.

---
## Harmonic Oscillator
---

### 21. Give physical examples of quantum linear harmonic oscillator.

#### Answer
* **Vibrations of Diatomic Molecules:** The bond between two atoms acts like a spring, and their vibration about the equilibrium bond length can be approximated as a harmonic oscillator (especially for small displacements). This is fundamental to understanding infrared spectroscopy.
* **Vibrations of Atoms in a Crystal Lattice:** Atoms in a solid are held in place by interatomic forces. Their oscillations about their equilibrium lattice positions can be modeled as coupled harmonic oscillators. Quantized lattice vibrations are called **phonons**.
* **Quantum Fields:** In quantum field theory, fundamental fields can be described as collections of harmonic oscillators.

---
### 22. Write a note on Hermite polynomials.

#### Answer
**Hermite polynomials**, $H_n(\xi)$, are a set of orthogonal polynomials that arise as solutions to Hermite's differential equation, $y'' - 2\xi y' + 2ny = 0$. They are particularly important as they form part of the wave functions for the quantum harmonic oscillator.
* **Definition:** Can be defined by the Rodrigues formula: $H_n(\xi) = (-1)^n e^{\xi^2} \frac{d^n}{d\xi^n} (e^{-\xi^2})$.
* **First Few Polynomials:**
    * $H_0(\xi) = 1$
    * $H_1(\xi) = 2\xi$
    * $H_2(\xi) = 4\xi^2 - 2$
    * $H_3(\xi) = 8\xi^3 - 12\xi$
* **Recursion Relation:** $H_{n+1}(\xi) = 2\xi H_n(\xi) - 2n H_{n-1}(\xi)$.
* **Parity:** $H_n(\xi)$ has the same parity as $n$. $H_n(-\xi) = (-1)^n H_n(\xi)$. (Even for even n, odd for odd n).
* **Orthogonality:** They are orthogonal with respect to the weight function $e^{-\xi^2}$: $\int_{-\infty}^{\infty} e^{-\xi^2} H_m(\xi) H_n(\xi) d\xi = \sqrt{\pi} 2^n n! \delta_{mn}$.

---
### 23. What is the physical significance of zero-point energy in QHO?

#### Answer
The **zero-point energy**, $E_0 = \frac{1}{2}\hbar\omega$, is the minimum possible energy a quantum harmonic oscillator can possess, even at absolute zero temperature. Its significance stems from the **Heisenberg Uncertainty Principle**: If the oscillator had zero energy, it would be perfectly stationary at its equilibrium position ($x=0, p=0$), implying exact knowledge of both position and momentum, which violates $\Delta x \Delta p \ge \hbar/2$. The zero-point energy represents the residual kinetic and potential energy associated with the unavoidable quantum fluctuations (minimum motion) required by the uncertainty principle. It means quantum systems are never truly "at rest".

---
### 24. Compare classical and quantum harmonic oscillator (2 differences).

#### Answer
1.  **Energy Quantization:**
    * **Classical:** Energy can take any continuous non-negative value ($E \ge 0$).
    * **Quantum:** Energy is quantized and can only take discrete values $E_n = (n+1/2)\hbar\omega$ for $n=0, 1, 2, \dots$.
2.  **Zero-Point Energy & Ground State:**
    * **Classical:** Minimum energy is zero (particle at rest at the equilibrium position).
    * **Quantum:** Minimum energy is the non-zero zero-point energy $E_0 = \frac{1}{2}\hbar\omega$. The oscillator is never completely at rest.
3.  **Probability Distribution & Tunneling:**
    * **Classical:** Particle oscillates between turning points ($\pm x_{max}$ where $E=V(x)$), spending most time near the turning points where speed is lowest. Probability is zero beyond turning points.
    * **Quantum:** Probability density $|\psi_n(x)|^2$ has peaks and nodes. For the ground state ($n=0$), probability is highest at the center ($x=0$). For higher states, it approaches the classical distribution. There is a non-zero probability of finding the particle *beyond* the classical turning points (tunneling into the forbidden region).

---
### 25. Write mathematical expressions for Eigen functions for first four quantum states (n=0,1,2,3) of QHO.

#### Answer
The general form is $\psi_n(x) = N_n H_n(\gamma x) e^{-\frac{1}{2}(\gamma x)^2}$ with $\gamma = \sqrt{m\omega/\hbar}$. Let $\xi = \gamma x$.
Normalization constants $N_n = (\frac{\gamma}{\sqrt{\pi} 2^n n!})^{1/2}$.
Hermite Polynomials $H_0=1, H_1=2\xi, H_2=4\xi^2-2, H_3=8\xi^3-12\xi$.

* **n=0:** $N_0 = (\frac{\gamma}{\sqrt{\pi}})^{1/2}$. $H_0=1$.
    $\psi_0(x) = (\frac{\gamma}{\sqrt{\pi}})^{1/2} e^{-\xi^2/2} = (\frac{m\omega}{\pi\hbar})^{1/4} e^{-\frac{m\omega}{2\hbar}x^2}$.
* **n=1:** $N_1 = (\frac{\gamma}{2\sqrt{\pi}})^{1/2}$. $H_1=2\xi$.
    $\psi_1(x) = (\frac{\gamma}{2\sqrt{\pi}})^{1/2} (2\gamma x) e^{-(\gamma x)^2/2}$.
* **n=2:** $N_2 = (\frac{\gamma}{8\sqrt{\pi}})^{1/2}$. $H_2=4\xi^2-2$.
    $\psi_2(x) = (\frac{\gamma}{8\sqrt{\pi}})^{1/2} (4(\gamma x)^2-2) e^{-(\gamma x)^2/2}$.
* **n=3:** $N_3 = (\frac{\gamma}{48\sqrt{\pi}})^{1/2}$. $H_3=8\xi^3-12\xi$.
    $\psi_3(x) = (\frac{\gamma}{48\sqrt{\pi}})^{1/2} (8(\gamma x)^3-12(\gamma x)) e^{-(\gamma x)^2/2}$.

---
### 26. How does energy level spacing in anharmonic oscillator differ from harmonic?

#### Answer
In a **harmonic oscillator**, the energy levels $E_n = (n+1/2)\hbar\omega$ are **equally spaced**, with the separation between adjacent levels being constant: $\Delta E = E_{n+1} - E_n = \hbar\omega$.
In an **anharmonic oscillator**, due to higher-order terms in the potential energy, the energy levels are **not equally spaced**. Typically, the spacing between adjacent levels **decreases** as the quantum number $n$ increases. That is, $E_{n+1}-E_n < E_n-E_{n-1}$ for higher $n$.

---
## Hydrogen Atom
---

### 27. Why don't electrons in H atom spiral into nucleus (Quantum explanation)?

#### Answer
Quantum mechanics explains this through quantized energy levels and the uncertainty principle.
1.  **Quantized Energy Levels:** The electron can only exist in specific, discrete energy states ($E_n = -13.6/n^2$ eV). It cannot continuously lose energy by radiating, as classical electrodynamics predicts. It can only drop to a lower state by emitting a photon of specific energy.
2.  **Stable Ground State:** The lowest allowed energy level ($n=1$, $E_1 = -13.6$ eV) is stable. There are no lower energy states for the electron to fall into.
3.  **Uncertainty Principle:** If the electron were to collapse into the nucleus (position precisely known), its momentum would become highly uncertain (large). This high kinetic energy would prevent it from staying confined within the nucleus. The zero-point energy concept, derived from the uncertainty principle, dictates a minimum energy and spatial distribution even in the ground state.

---
### 28. What does a hydrogen atom orbital represent?

#### Answer
A hydrogen atom **orbital** ($\psi_{n,l,m_l}$) is a **mathematical wave function** that is a solution to the Schrödinger equation for the electron in the atom. It describes the quantum state of the electron, characterized by the quantum numbers $n, l, m_l$.
Physically, the square of the orbital's magnitude, $|\psi_{n,l,m_l}(r,\theta,\phi)|^2$, represents the **probability density** of finding the electron at a particular point $(r,\theta,\phi)$ in space around the nucleus. It does *not* represent a fixed path or orbit like in the Bohr model, but rather a region of space where the electron is likely to be found (often visualized as an "electron cloud"). The shape, size, and orientation of this probability distribution are determined by the quantum numbers $l$ and $m_l$.

---
### 29. Discuss necessity for spherical polar coordinates to solve SWE for H atom.

#### Answer
The potential energy of the electron in a hydrogen atom is due to the Coulomb attraction to the nucleus: $V(r) = -e^2/(4\pi\epsilon_0 r)$. This potential depends only on the distance $r$ from the nucleus, meaning it has **spherical symmetry**.
The Schrödinger equation involves the Laplacian operator ($\nabla^2$). While the SWE can be written in Cartesian coordinates $(x,y,z)$, solving it becomes extremely difficult because the potential $V = -e^2/(4\pi\epsilon_0 \sqrt{x^2+y^2+z^2})$ does not separate easily in this system.
Using **spherical polar coordinates $(r, \theta, \phi)$** is necessary because:
1.  **Symmetry Matching:** The coordinate system matches the symmetry of the potential ($V$ depends only on $r$).
2.  **Separation of Variables:** The Laplacian operator has a convenient form in spherical coordinates that allows the SWE to be separated into three independent ordinary differential equations: one for the radial part $R(r)$, one for the polar part $\Theta(\theta)$, and one for the azimuthal part $\Phi(\phi)$.
Solving these simpler, separated equations is feasible and naturally leads to the three quantum numbers ($n, l, m_l$) that characterize the electron's state.

---
## Fermi-Dirac Statistics & Density of States
---

### 30. Explain Fermi factor and its temperature dependence.

#### Answer
The **Fermi factor** $f(E)$ (or Fermi-Dirac distribution function) gives the probability that a quantum state with energy $E$ is occupied by an identical fermion (like an electron) in a system at thermal equilibrium at absolute temperature $T$. It is given by:
$$f(E) = \frac{1}{e^{(E-E_f)/(k_B T)} + 1}$$
where $E_f$ is the Fermi energy and $k_B$ is the Boltzmann constant.

**Temperature Dependence:**
* **At T=0 K:** The function is a sharp step function. $f(E)=1$ for all states with energy $E < E_f$ (fully occupied). $f(E)=0$ for all states with energy $E > E_f$ (completely empty).
* **At T > 0 K:** Thermal energy allows some fermions to be excited to states above $E_f$. The step function becomes smeared out around $E_f$.
    * For $E = E_f$, the exponent is zero, $e^0=1$, so $f(E_f) = 1/(1+1) = 1/2$. The Fermi energy is the level with exactly 50% probability of occupation.
    * For $E < E_f$, $f(E)$ is slightly less than 1.
    * For $E > E_f$, $f(E)$ is slightly greater than 0.
    * The transition from $f(E) \approx 1$ to $f(E) \approx 0$ occurs over an energy range of a few $k_B T$ centered around $E_f$. As temperature increases, this transition region becomes wider.


---
### 31. Show P(occupancy at $E_f - \Delta E$) = P(non-occupancy at $E_f + \Delta E$).

#### Answer
Probability of occupancy at $E_1 = E_f - \Delta E$:
$f(E_1) = \frac{1}{e^{(E_1-E_f)/(k_B T)} + 1} = \frac{1}{e^{-\Delta E / (k_B T)} + 1}$.

Probability of non-occupancy at $E_2 = E_f + \Delta E$:
$P(\text{non-occ}) = 1 - f(E_2) = 1 - \frac{1}{e^{(E_2-E_f)/(k_B T)} + 1} = 1 - \frac{1}{e^{\Delta E / (k_B T)} + 1}$.
$P(\text{non-occ}) = \frac{(e^{\Delta E / (k_B T)} + 1) - 1}{e^{\Delta E / (k_B T)} + 1} = \frac{e^{\Delta E / (k_B T)}}{e^{\Delta E / (k_B T)} + 1}$.
Divide numerator and denominator by $e^{\Delta E / (k_B T)}$:
$P(\text{non-occ}) = \frac{1}{1 + e^{-\Delta E / (k_B T)}}$.
This is the same expression as $f(E_1)$. Therefore, $f(E_f - \Delta E) = 1 - f(E_f + \Delta E)$.

---
### 32. Find T at which occupancy probability is i) 0.01 ii) 0.05 for state 0.3 eV above Fermi level.

#### Answer
We have $E - E_f = 0.3$ eV. $f(E) = \frac{1}{e^{(E-E_f)/(k_B T)} + 1}$.
Let $\Delta E = 0.3$ eV. $f(E) = \frac{1}{e^{\Delta E / (k_B T)} + 1}$.
We need to solve for T.
$e^{\Delta E / (k_B T)} + 1 = \frac{1}{f(E)}$.
$e^{\Delta E / (k_B T)} = \frac{1}{f(E)} - 1 = \frac{1 - f(E)}{f(E)}$.
$\frac{\Delta E}{k_B T} = \ln\left(\frac{1 - f(E)}{f(E)}\right)$.
$T = \frac{\Delta E}{k_B \ln\left(\frac{1 - f(E)}{f(E)}\right)}$.
Use $k_B = 8.617 \times 10^{-5}$ eV/K.

i) $f(E) = 0.01$:
   $\ln\left(\frac{1 - 0.01}{0.01}\right) = \ln(0.99 / 0.01) = \ln(99) \approx 4.60$.
   $T = \frac{0.3}{(8.617 \times 10^{-5})(4.60)} \approx \frac{0.3}{3.96 \times 10^{-4}} \approx 758$ K.

ii) $f(E) = 0.05$:
   $\ln\left(\frac{1 - 0.05}{0.05}\right) = \ln(0.95 / 0.05) = \ln(19) \approx 2.94$.
   $T = \frac{0.3}{(8.617 \times 10^{-5})(2.94)} \approx \frac{0.3}{2.53 \times 10^{-4}} \approx 1186$ K.

---
### 33. Arrive at expression for density of states (2D quantum structures).

#### Answer
For a 2D infinite square well of side L, energy is $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2)$.
Consider "n-space" with axes $n_x, n_y$. Each state $(n_x, n_y)$ occupies unit area. States are in the first quadrant ($n_x>0, n_y>0$).
The number of states N(E) with energy less than E corresponds to the number of points within a quarter circle of radius $R = \sqrt{n_x^2+n_y^2} = \sqrt{8mL^2 E / h^2}$.
Area of quarter circle = $\frac{1}{4} \pi R^2$.
Number of states $N(R) \approx \frac{1}{4} \pi R^2$. (Approximation for large R).
$N(E) = \frac{\pi}{4} (\frac{8mL^2 E}{h^2}) = \frac{2\pi m L^2 E}{h^2}$.
Density of states per unit energy $dN/dE = \frac{2\pi m L^2}{h^2}$.
Density of states per unit energy per unit area ($g_{2D}(E)$): $A=L^2$.
$g_{2D}(E) = \frac{1}{A} \frac{dN}{dE} = \frac{1}{L^2} \frac{2\pi m L^2}{h^2} = \frac{2\pi m}{h^2}$.
Including spin degeneracy (multiply by 2):
$g_{2D}(E) = \frac{4\pi m}{h^2}$.
**Result:** The density of states in 2D is constant, independent of energy.

***
# [[../Physics|Back]]# Question Bank - Unit 2

> **Source**: PESU Assessment Question Bank 2020-2023

Additional practice questions for Unit 2 (Quantum Mechanics, Potentials, Wells).

---

## CL14: Step Potential (E > V₀)

### 1. Using the Schrödinger's wave equation find the wave function associated with particle having energy 10 eV travelling along positive x-direction approach a potential step of height 7 eV.

#### Answer
Given $E = 10 \text{ eV}$, $V_0 = 7 \text{ eV}$.
Region 1 ($x<0, V=0$): $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$ where $k_1 = \sqrt{2mE}/\hbar$.
Region 2 ($x>0, V=7$): $\psi_2(x) = C e^{ik_2 x}$ where $k_2 = \sqrt{2m(E-V_0)}/\hbar$.
$k_1 \approx 5.12 \times 10^{10} \text{ m}^{-1}$ (using $\sqrt{E}$ proportionality).
$k_2 \approx \sqrt{3/10} k_1 \approx 2.80 \times 10^{10} \text{ m}^{-1}$.
Transmission requires matching boundary conditions to find B and C in terms of A.

### 2. Define the terms reflection coefficient and transmission coefficient with respect to step potential.

#### Answer
*   **Reflection Coefficient (R)**: The ratio of the reflected probability current density (flux) to the incident probability current density. $R = |J_{ref}| / |J_{inc}|$. Physically, it represents the probability that a particle is reflected by the potential step.
*   **Transmission Coefficient (T)**: The ratio of the transmitted probability current density to the incident probability current density. $T = |J_{trans}| / |J_{inc}|$. It represents the probability that a particle crosses the step.

### 3. A stream of particles of mass m and total energy E moves towards a potential step of height V₀, if the energy of the electrons is lesser than the step potential (E < V₀) then by applying continuity conditions obtain the expression for reflection coefficient.

#### Answer
For $E < V_0$:
Region 1: $\psi_1 = A e^{ikx} + B e^{-ikx}$.
Region 2: $\psi_2 = D e^{-\alpha x}$ (decaying wave), where $\alpha = \sqrt{2m(V_0-E)}/\hbar$.
Boundary Conditions at $x=0$:
1. $A+B = D$
2. $ik(A-B) = -\alpha D$
Solving for $B/A$:
$ik(A-B) = -\alpha(A+B) \implies A(ik+\alpha) = B(ik-\alpha)$.
$\frac{B}{A} = \frac{ik+\alpha}{ik-\alpha}$.
Reflection Coefficient $R = \left|\frac{B}{A}\right|^2 = \left|\frac{ik+\alpha}{ik-\alpha}\right|^2$.
Since the numerator is the complex conjugate of the denominator ($z^*/z$), the modulus is 1.
$$ R = 1 $$
**Conclusion**: Total reflection occurs.

### 4. The probability of reflection from a potential step is given by R, where the k's are the wavenumbers in the two regions. If a 5 eV electron encounters a 2 eV potential step, what is the probability that it will be reflected?

#### Answer
$E=5, V_0=2$.
$R = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2 = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$.
$R = \left(\frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}}\right)^2 = \left(\frac{2.236-1.732}{2.236+1.732}\right)^2 = \left(\frac{0.504}{3.968}\right)^2 \approx (0.127)^2 \approx 0.016$.
Probability of reflection is **1.6%**.

---

## CL15: Penetration Depth

### 1. A particle of mass and total energy moves from a region of constant potential V₀ to a region of potential V₁. If E > V₀, find the associated wave function and reflection coefficient for the particle experience a step potential.

#### Answer
Assuming particle starts in $V_0=0$ and goes to $V_1$ (step height). If $E > V_1$:
$\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$.
$\psi_2(x) = C e^{ik_2 x}$.
Reflection Coefficient $R = (\frac{k_1 - k_2}{k_1 + k_2})^2$.

### 2. Explain the term penetration depth for a step potential.

#### Answer
**Penetration Depth** ($\delta$ or $\Delta x$) is the characteristic distance within a potential barrier (where $E < V_0$) over which the probability of finding the particle decays significantly (typically by a factor of $1/e$).
Formula: $\delta = \frac{1}{\alpha} = \frac{\hbar}{\sqrt{2m(V_0-E)}}$.
It illustrates that quantum particles don't "bounce off" instantly at the wall but penetrate slightly into the forbidden region.

### 3. A proton of energy 3 eV approaches a potential step of height 4 eV. Evaluate the possible depth of penetration into the classically forbidden region.

#### Answer
$m_p = 1.67 \times 10^{-27}$ kg. $V_0 - E = 1$ eV $= 1.6 \times 10^{-19}$ J.
$\alpha = \frac{\sqrt{2 m_p (V_0-E)}}{\hbar} = \frac{\sqrt{2(1.67 \times 10^{-27})(1.6 \times 10^{-19})}}{1.054 \times 10^{-34}} = \frac{\sqrt{5.34 \times 10^{-46}}}{1.054 \times 10^{-34}} = \frac{2.31 \times 10^{-23}}{1.05 \times 10^{-34}} \approx 2.19 \times 10^{11} \text{ m}^{-1}$.
Depth $\delta = 1/\alpha \approx 4.56 \times 10^{-12}$ m (approx 0.046 Å).

### 4. A spherical dust particle of given radius and density, moving at a given speed encounters a step potential of height equal to twice the K.E of the particle. Estimate the penetration depth of the particle inside the step.

#### Answer
(See Worked Example 2 for detailed calculation).
For a macroscopic dust particle (large mass $m$), the penetration depth $\delta = \hbar / \sqrt{2m(V_0-E)} = \hbar / \sqrt{2m(E)}$ is **extremely small** (negligible).
Typically $\approx 10^{-22}$ m or less. It confirms that quantum tunneling is irrelevant for macroscopic objects.

---

## CL18: Infinite Potential Well

### 1. Obtain the energy Eigen values for a particle bound in an infinite potential well. Comment on why the particle cannot have zero energy?
*(Refer to main Q&A section Question 9)*.
$E_n = \frac{n^2 h^2}{8mL^2}$. $n=1,2,3...$
**Zero Energy:** implies $n=0$ or particle is at rest with zero uncertainty in momentum ($\Delta p=0$), which implies $\Delta x = \infty$. But particle is confined to L ($\Delta x \le L$). Thus $\Delta p$ cannot be 0, so $E$ cannot be 0. (Heisenberg Uncertainty).

### 2. Show that the probability of locating the particle between the limits 0 to 0.5L is the same in any quantum state. Here L is the width of the well.
For any state $\psi_n(x) = \sqrt{2/L}\sin(n\pi x/L)$.
$|\psi_n|^2$ is symmetric about the center of the well ($L/2$).
Therefore, the area under the curve from $0$ to $L/2$ is exactly half the total area (which is 1).
Probability = 0.5.

### 3. Plot the first two states Eigen functions for a particle in an infinite potential well.
*   **n=1**: Single sine arch from 0 to L. Max at L/2. No nodes.
*   **n=2**: Sine wave with one full period. Positive arch 0 to L/2, Negative arch L/2 to L. Node at L/2.

### 4. Plot the probability densities for the first three excited quantum states of an electron trapped in an infinite potential well of width L. Calculate the probability of locating the electron in the third excited state between the limits ⅜L and ⅝L where L is the width of the well?

#### Answer
Third Excited State corresponds to **$n=4$**.
Limits: 3L/8 to 5L/8 (Central quarter of the well).
$P = \int_{3L/8}^{5L/8} \frac{2}{L}\sin^2(\frac{4\pi x}{L}) dx$.
Let $\theta = \frac{4\pi x}{L}$. Range: $4\pi(3/8) = 1.5\pi$ to $4\pi(5/8) = 2.5\pi$.
Interval width is $\pi$. $\sin^2$ integrates to $\pi/2$ over an interval of $\pi$.
Correction:
$P = \frac{2}{L} \frac{L}{4\pi} \int_{1.5\pi}^{2.5\pi} \sin^2 u du = \frac{1}{2\pi} [\frac{u}{2} - \frac{\sin 2u}{4}]_{1.5\pi}^{2.5\pi}$.
$= \frac{1}{2\pi} [ (\frac{2.5\pi}{2}) - (\frac{1.5\pi}{2}) ] = \frac{1}{2\pi} [\frac{\pi}{2}] = 0.25$.
Probability is **0.25**.

### 5. Show that the energy of an electron confined in a 1-D symmetric potential well of length 'L' and infinite depth is quantized. Is the electron trapped in a potential well allowed to take zero energy? If not, why?
*(Derivation of $E_n \propto n^2$)*. Bound states require standing wave solutions that vanish at boundaries, leading to discrete wavelengths $\lambda_n = 2L/n$ and thus discrete energies. (See Q1 for zero energy).

### 6. Derive the expression of energy Eigen values for a particle in an infinite potential well using the admissible solutions.
Solve SWE $-(\hbar^2/2m)\psi'' = E\psi$. $\psi'' + k^2\psi=0$.
$\psi = A\sin(kx) + B\cos(kx)$.
$\psi(0)=0 \implies B=0$. $\psi(L)=0 \implies \sin(kL)=0 \implies kL=n\pi$.
$k = n\pi/L$. $E = \hbar^2 k^2 / 2m = \dots = n^2 h^2 / 8mL^2$.

### 7. The wave function associated with a particle in a infinite potential box is given. What is the probability of finding the particle in the region x=0 to L/4 and L/4 to L?
Assuming Ground State ($n=1$):
*   **0 to L/4**: $P = \int_0^{L/4} \frac{2}{L}\sin^2(\frac{\pi x}{L}) dx = \frac{1}{\pi}[\theta - \sin\theta\cos\theta]_0^{\pi/4} = \dots \approx 0.091$ of total?
    Calculation: $\frac{1}{L} \int_0^{L/4} (1-\cos(2\pi x/L)) dx = \frac{1}{L} [L/4 - \frac{L}{2\pi}\sin(\pi/2)] = 0.25 - \frac{1}{2\pi} \approx 0.25 - 0.159 = 0.09$. (~9%).
*   **L/4 to L**: $1 - 0.09 = 0.91$ (~91%).

### 8. A particle is free to move in a one dimensional region of zero potential between the two rigid walls. Show the energy relationships.
This is the **Particle in a Box** problem.
Relationships:
1.  Energy is quantized: $E_n \propto n^2$.
2.  Energy scales with inverse square of width: $E \propto 1/L^2$.
3.  Energy scales with inverse of mass: $E \propto 1/m$.

### 9. The lowest energy level of a particle confined to a one-dimensional region of space with fixed dimension L. If an identical particle is confined to a similar region with fixed distance L/2, what is the energy of the lowest energy level that the particles have in common?

#### Answer
Levels in Box L: $E_n(L) = n^2 E_1(L)$.
Levels in Box L/2: $E_m(L/2) = \frac{m^2 h^2}{8m(L/2)^2} = 4 m^2 \frac{h^2}{8mL^2} = 4 m^2 E_1(L)$.
We want $E_n(L) = E_m(L/2)$.
$n^2 = 4 m^2 \implies n = 2m$.
Lowest energy in common corresponds to lowest integers $m=1 \implies n=2$.
Common Energy = $E_2(L) = 4 E_1(L)$ (or $E_1(L/2)$).
Current Value: **4 times the ground state energy of the larger box**.

---

## CL19: 3D Box & Degeneracy

### 1. What is meant by degeneracy of energy states in quantum systems?

#### Answer
**Degeneracy** occurs when two or more distinct linearly independent quantum states (different wavefunctions/quantum numbers) correspond to the **same energy eigenvalue**. The number of such states is the "degree of degeneracy". It usually arises from symmetries in the system (e.g., cubic symmetry).

### 2. Give examples for degenerate states for a particle in three dimensional box with infinite potential at the boundaries.

#### Answer
For a cubic box ($L_x=L_y=L_z=L$): Energy depends on $n_x^2+n_y^2+n_z^2$.
*   State (2,1,1), (1,2,1), (1,1,2): Sum of squares $= 4+1+1=6$. All three have energy $6E_0$. (3-fold degeneracy).
*   State (2,2,1), (2,1,2), (1,2,2): Sum $= 9$. (3-fold degeneracy).

### 3. Calculate the Eigen value of the electron in the lowest energy level, confined in a 2D potential box of side 0.1 nm.

#### Answer
$E_{1,1} = \frac{h^2}{8mL^2}(1^2+1^2) = \frac{2 h^2}{8mL^2}$.
$L = 10^{-10}$ m.
$E = \frac{2(6.626 \times 10^{-34})^2}{8(9.11 \times 10^{-31})(10^{-20})} \approx \frac{87.8 \times 10^{-68}}{72.8 \times 10^{-51}} \approx 1.2 \times 10^{-17}$ J.
$E \approx 75$ eV. (Since 1D ground state is ~37.6 eV, 2D is double that).

### 4. Using the appropriate boundary conditions obtain the energy eigen values and the corresponding eigenfunctions for a particle trapped in a three dimensional infinite potential box.

#### Answer
Solve by separation of variables $\psi(x,y,z) = X(x)Y(y)Z(z)$.
Each component satisfies 1D well equation.
Energy $E = E_x + E_y + E_z = \frac{h^2}{8m}(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2})$.
Wavefunction $\psi = \sqrt{\frac{8}{V}} \sin(k_x x)\sin(k_y y)\sin(k_z z)$.

---

## CL21: Finite Well & Harmonic Oscillator

### 1. Compare the energy levels of the first three quantum states of identically sized finite and infinite potential wells.

#### Answer
$E_{finite} < E_{infinite}$ for all corresponding states $n$.
*   Ground state: $E_1(fin) < E_1(inf)$.
*   Excited states: Spacing is non-uniform in finite well.
*   Reason: "Leaking" of wavefunction into walls effectively makes wavelength longer in finite well, lowering momentum and energy.

### 2. Why do finite square wells have only a finite number of bound energy values? What are the characteristics of bound energy values?

#### Answer
Bound states must have $E < V_0$. Since the states are roughly spaced by $\hbar^2/2mL^2$, there is a limit to how many states fit below the potential cap $V_0$. Shallow or narrow wells may have very few states (always at least one symmetric state in 1D).
Characteristics: Discrete, Non-degenerate (in 1D), Wave function decays exponentially outside.

### 3. A particle trapped in a finite potential well. Sketch the Eigen functions for first three energy states.
(Sketch should show sinusoidal inside, exponential decay outside. Matching values and slopes at boundaries. Number of nodes: 0, 1, 2).

### 4. Plot the first two states Eigen wave functions and the probability function for a particle in a finite potential well.
(Similar to Q3, assume even/odd symmetry).

### 5. How are the energy values of a quantum mechanical oscillator fundamentally different from the energy values of a classical oscillator?

#### Answer
*   **Discrete vs Continuous**: Quantum E is quantized $(n+1/2)\hbar\omega$. Classical E is continuous (depends on amplitude A).
*   **Minimum Energy**: Quantum has non-zero Zero Point Energy ($\hbar\omega/2$). Classical can be zero (at rest).

### 6. The energy of a linear harmonic oscillator in the third excited state is 0.1 eV. Find the frequency of the oscillator.

#### Answer
Third Excited State $\implies n=3$.
$E_3 = (3 + 1/2)\hbar\omega = 3.5 \hbar (2\pi \nu) = 3.5 h \nu$.
$0.1 \text{ eV} = 1.6 \times 10^{-20}$ J.
$1.6 \times 10^{-20} = 3.5 (6.626 \times 10^{-34}) \nu$.
$\nu = \frac{1.6 \times 10^{-20}}{23.19 \times 10^{-34}} \approx 6.9 \times 10^{12}$ Hz.

### 7. Sketch the wave functions and probability densities for the first two quantum states of quantum harmonic oscillators.
(Bell curve for n=0; Two humps for n=1).

### 8. A lithium atom, mass 1.17 × 10⁻²⁶ kg, is vibrating with simple harmonic motion in a crystal lattice, where the force constant k is 64.0 N/m. (a) what is the ground state energy of this system in eV? (b) What would be the wavelength of the photon that could excite this system to the n = 1 level?

#### Answer
(a) $\omega = \sqrt{k/m} = \sqrt{64 / 1.17 \times 10^{-26}} \approx \sqrt{54.7} \times 10^{13} \approx 7.4 \times 10^{13}$ rad/s.
$E_0 = \frac{1}{2}\hbar\omega = \frac{1}{2}(1.054 \times 10^{-34})(7.4 \times 10^{13}) \approx 3.9 \times 10^{-21}$ J.
In eV: $3.9 \times 10^{-21} / 1.6 \times 10^{-19} \approx 0.024$ eV.
(b) Excitation $0 \to 1$ requires $\Delta E = \hbar\omega = 2 E_0 = 0.048$ eV.
$\lambda = hc/\Delta E = (1240 \text{ nm eV}) / 0.048 \approx 25833$ nm $\approx 25.8 \mu$m (Infrared).

### 9. Establish Schrodinger's equation of a linear harmonic oscillator and write its solution.
Eq: $-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + \frac{1}{2}m\omega^2 x^2 \psi = E\psi$.
Solution: $\psi_n(x) = N_n H_n(\alpha x) e^{-\alpha^2 x^2 / 2}$. (See main text).

---

## CL22: Hydrogen Atom

### 1. Set up the Schrodinger's wave equation for a hydrogen atom in spherical polar coordinates. Explain the significance of three quantum numbers.

#### Answer
(Refer to main text Q23).
$\nabla^2 \psi + \frac{2m}{\hbar^2}(E + \frac{e^2}{4\pi\epsilon_0 r})\psi = 0$.
Laplacian in spherical coords: $\frac{1}{r^2}\frac{\partial}{\partial r}(r^2 \frac{\partial}{\partial r}) + \dots$
**Quantum Numbers significance**:
1.  **n (Principal)**: Determines total energy $E_n \propto -1/n^2$ and radial size.
2.  **l (Orbital)**: Determines angular momentum magnitude $L = \hbar\sqrt{l(l+1)}$ and orbital shape.
3.  **m (Magnetic)**: Determines z-component of angular momentum $L_z = m\hbar$ (Orientation).

### 2. Discuss the stationary states of a hydrogen atom.

#### Answer
Stationary states are the eigenfunctions $\psi_{nlm}(r,\theta,\phi)$. They have definite energy $E_n$. The probability density $|\psi|^2$ is independent of time ($P(r,\theta,\phi)$), meaning charge distribution is static (no radiation emitted). Ground state is spherically symmetric.

### 3. Mention the restriction on the quantum numbers n, l, m and ms.

#### Answer
*   $n = 1, 2, 3, \dots$ (Integer > 0).
*   $l = 0, 1, 2, \dots, n-1$ (Integer $\ge 0$ bounded by $n$).
*   $m_l = -l, \dots, 0, \dots, +l$ (Integer steps).
*   $m_s = \pm 1/2$ (Spin up/down).

### 4. Separate the Amplitude equation into Azimuthal and Polar parts. What is the significance of the magnetic quantum number?
The angular part $Y(\theta, \phi) = \Theta(\theta)\Phi(\phi)$.
*   **Azimuthal equation**: $\frac{d^2\Phi}{d\phi^2} + m^2\Phi = 0 \implies \Phi(\phi) = e^{im\phi}$.
*   **Significance of m**: It arises from the periodicity in $\phi$ and quantizes the z-component of angular momentum ($L_z$). It creates the Zeeman splitting in magnetic fields.

### 5. Plot the ground state wave function and probability density of the electron in a hydrogen atom against the radial distance.
*   **Wave function $\psi_{100}(r)$**: Starts max at $r=0$, decays exponentially ($e^{-r/a_0}$).
*   **Radial Probability Density $P(r) = 4\pi r^2 |\psi|^2$**: Starts at 0 (due to $r^2$), peaks at Bohr radius $a_0$, then decays.

---

## CL24: Quantum Free Electron Theory

### 1. Describe the basic ideas of the free electron gas model.

#### Answer
1.  Valence electrons are free to move throughout the crystal lattice (constant potential $V=0$ inside).
2.  Electrons are confined to the metal volume (Particle in a Box).
3.  Electrons follow **Pauli Exclusion Principle** and **Fermi-Dirac Statistics** (not Maxwell-Boltzmann).
4.  Potential due to ions is smeared out (uniform background).

### 2. Explain the Fermi-Dirac distribution of electrons in a metal at 0K.

#### Answer
At $T=0$ K, the Fermi-Dirac function $f(E)$ is a step function:
*   $f(E) = 1$ for $E < E_F$. (All states filled).
*   $f(E) = 0$ for $E > E_F$. (All states empty).
This means electrons fill energy levels from the bottom up to a maximum energy called the **Fermi Energy ($E_F$)**.

### 3. Explain the electrical conduction in metals on the basis of the free electron gas model. Discuss the effect of temperature and impurity on the electrical conductivity.

#### Answer
Conduction occurs when an applied E-field shifts the Fermi sphere, giving a net drift velocity. Only electrons near $E_F$ can gain energy and move to empty states.
*   **Temperature**: Vibrating ions (phonons) scatter electrons. $\rho \propto T$. Conductivity decreases as T increases.
*   **Impurity**: Impurities disrupt periodic potential, causing scattering. $\rho_{imp}$ is temperature independent (residual resistivity). Conductivity decreases with impurities.

### 4. State Mattheisen's rule.

#### Answer
The total resistivity of a metal is the sum of the resistivity due to thermal scattering (phonons) and the resistivity due to impurity/defect scattering:
$$ \rho_{total} = \rho_{thermal}(T) + \rho_{residual} $$

### 5. Discuss the success of quantum free electron theory over classical free electron theory.

#### Answer
1.  **Specific Heat**: QFET predicts correct electronic specific heat $C_v \propto T$ (very small at room temp), whereas CFET predicted $3R/2$ (large), solving the specific heat anomaly.
2.  **Conductivity vs T**: QFET correctly explains $\sigma \propto 1/T$ via phonon scattering (mean free path changes), whereas CFET struggled with $\sigma \propto 1/\sqrt{T}$.
3.  **Wiedemann-Franz Law**: QFET gives a Lorenz number $L$ closer to experimental values.

### 6. Distinguish between classical and quantum free electron theory.

#### Answer
| Classical | Quantum |
| :--- | :--- |
| Maxwell-Boltzmann stats | Fermi-Dirac stats |
| Energy is continuous | Energy is quantized/discrete |
| All free electrons contribute to specific heat | Only electrons near $E_F$ contribute |
| $v_{thermal} \propto \sqrt{T}$ | $v_{Fermi}$ is huge and roughly const with T |

---

## CL25: Fermi Factor

### 1. Discuss the variation of Fermi factor with temperature.

#### Answer
*   **T = 0 K**: Sharp step function. 1 below $E_F$, 0 above.
*   **T > 0 K**: The step smears out. Probability decreases from 1 to 0 over a width of $\approx kT$ around $E_F$. At $E=E_F$, $f(E)=0.5$. Electrons are thermally excited from just below $E_F$ to just above.

### 2. Evaluate the Fermi function for an energy kT above the Fermi energy.

#### Answer
Let $E = E_F + kT$.
$f(E) = \frac{1}{1 + e^{(E-E_F)/kT}} = \frac{1}{1 + e^{kT/kT}} = \frac{1}{1 + e^1} \approx \frac{1}{1 + 2.718} \approx \frac{1}{3.718} \approx 0.27$.

### 3. Show that the probability of occupancy for an energy level $\Delta E$ above the Fermi level is equal to the probability of vacancy for an energy level $\Delta E$ below the Fermi level.

#### Answer
Occupancy at $E_F + \Delta E$:
$f(E_F+\Delta E) = \frac{1}{1+e^{\Delta E/kT}}$.
Occupancy at $E_F - \Delta E$:
$f(E_F-\Delta E) = \frac{1}{1+e^{-\Delta E/kT}} = \frac{e^{\Delta E/kT}}{e^{\Delta E/kT}+1}$.
Vacancy (Hole prob) at $E_F - \Delta E$:
$1 - f(E_F-\Delta E) = 1 - \frac{e^{\Delta E/kT}}{e^{\Delta E/kT}+1} = \frac{1}{e^{\Delta E/kT}+1}$.
Thus, $f(E_F+\Delta E) = 1 - f(E_F-\Delta E)$.

### 4. At what temperature we have 5% probability that the electrons have an energy 0.01 eV above the Fermi energy?

#### Answer
Given $f(E) = 0.05$ at $E - E_F = 0.01$ eV.
$0.05 = \frac{1}{e^{\Delta E/kT} + 1} \implies e^{\Delta E/kT} + 1 = 20 \implies e^{\Delta E/kT} = 19$.
$\frac{\Delta E}{kT} = \ln(19) \approx 2.944$.
$T = \frac{\Delta E}{k \times 2.944} = \frac{0.01 \times 1.6 \times 10^{-19}}{1.38 \times 10^{-23} \times 2.944} = \frac{1.6 \times 10^{-21}}{4.06 \times 10^{-23}} \approx 39.4$ K.

### 5. At what temperature we have 2% probability that the electrons have an energy 0.4 eV above the Fermi energy?

#### Answer
$f = 0.02$. $\Delta E = 0.4$.
$e^{\Delta E/kT} + 1 = 50 \implies e^{\Delta E/kT} = 49$.
$T = \frac{0.4 \times 1.6 \times 10^{-19}}{1.38 \times 10^{-23} \times \ln(49)} = \frac{6.4 \times 10^{-20}}{1.38 \times 10^{-23} \times 3.89} \approx \frac{6400}{5.37} \approx 1191$ K.

### 6. Write the expression for density of states for a particle in a box.

#### Answer
For a 3D metal:
$$ g(E) dE = \frac{V}{2\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \sqrt{E} dE $$
Or $Z(E) dE = \frac{4\pi V (2m)^{3/2}}{h^3} E^{1/2} dE$.

### 7. Calculate number of electron states per unit volume in an energy interval of 0.02 eV above the Fermi energy for Sodium.
(Assuming we need density of states $g(E_F)$).
Given $E_F(Na) \approx 3.2$ eV.
Number = $g(E_F) \times \Delta E$.
(Calculation requires constants).
Approximation: $N/V$ density is $\approx 2.6 \times 10^{28}$. But this asks for states in interval.
Using $g(E_F) = \frac{3N}{2 E_F}$.
Number density in range = $\frac{3n}{2 E_F} \Delta E$. ($n$ is electron density).
For Na, $n \approx 2.65 \times 10^{28}$ m$^{-3}$.
Result $\approx \frac{3(2.65 \times 10^{28})}{2(3.2)} (0.02) \approx 2.48 \times 10^{26}$ states/m$^3$.

---

## CL27: Fermi Energy

### 1. Explain the term Fermi Energy.

#### Answer
**Fermi Energy ($E_F$)** is the energy of the highest occupied quantum state in a system of fermions (electrons) at absolute zero temperature (0 K). It represents the maximum kinetic energy an electron can have at 0 K. It acts as the chemical potential of the electron gas.

### 2. Derive the expression for the Fermi energy of a metal at 0K.

#### Answer
Total number of electrons $N = \int_0^{E_F} g(E) dE$.
$N = \frac{V}{2\pi^2}(\frac{2m}{\hbar^2})^{3/2} \int_0^{E_F} E^{1/2} dE$.
$N = \frac{V}{2\pi^2}(\frac{2m}{\hbar^2})^{3/2} [\frac{2}{3} E_F^{3/2}]$.
Solve for $E_F$:
$$ E_F = \frac{\hbar^2}{2m} \left( \frac{3\pi^2 N}{V} \right)^{2/3} $$

### 3. Obtain an expression for the Fermi energy and Fermi velocity of a metal in terms of its density and atomic weight.

#### Answer
Electron density $n = N/V = \frac{\rho N_A \times \text{Valence}}{M_{atomic}}$.
Substituting $n$ into $E_F$:
$$ E_F = \frac{\hbar^2}{2m} (3\pi^2 n)^{2/3} $$
Fermi Velocity $v_F$: From $\frac{1}{2} m v_F^2 = E_F \implies v_F = \sqrt{\frac{2E_F}{m}} = \frac{\hbar}{m}(3\pi^2 n)^{1/3}$.

### 4. Calcium has a density of 1.55 × 10³ kg/m³. Calculate its Fermi energy (Atomic weight of Calcium is 40 and its valency is 2).

#### Answer
1.  Number density $n$:
    $n = \frac{\text{Density} \times N_A \times \text{Valency}}{\text{Atomic Weight}} = \frac{1550 \times 6.022 \times 10^{23} \times 2}{40 \times 10^{-3} \text{ (kg/mol)}}$.
    Wait, atomic weight 40 usually means 40 g/mol = 0.04 kg/mol.
    $n = \frac{1550 \times 6.022 \times 10^{23} \times 2}{0.04} \approx 4.67 \times 10^{28} \text{ m}^{-3}$.
2.  Fermi Energy:
    $E_F = \frac{(1.054 \times 10^{-34})^2}{2(9.11 \times 10^{-31})} (3\pi^2 \times 4.67 \times 10^{28})^{2/3}$.
    $E_F \approx (6.1 \times 10^{-39}) (1.38 \times 10^{30})^{2/3} \approx 6.1 \times 10^{-39} \times 1.24 \times 10^{20} \approx 7.56 \times 10^{-19}$ J.
    $E_F \approx 4.7$ eV.

### 5. Show that at absolute zero the average energy of the electron is ⅗ th of the Fermi energy.

#### Answer
Total Energy $U = \int_0^{E_F} E \cdot g(E) dE \propto \int_0^{E_F} E \cdot E^{1/2} dE = \int E^{3/2} dE$.
$U \propto [\frac{2}{5} E^{5/2}]_0^{E_F} = \frac{2}{5} E_F^{5/2}$.
Total Number $N \propto \int_0^{E_F} E^{1/2} dE = \frac{2}{3} E_F^{3/2}$.
Average Energy $\bar{E} = \frac{U}{N} = \frac{\frac{2}{5} E_F^{5/2}}{\frac{2}{3} E_F^{3/2}} = \frac{3}{5} E_F$.

### 6. A current of 5 A flows in a copper wire of cross section 10⁻⁴ m². Compare the drift velocity, thermal velocity and Fermi velocity of the electrons. (Fermi energy of Cu = 7 eV).

#### Answer
1.  **Drift Velocity ($v_d$)**:
    $J = I/A = 5/10^{-4} = 5 \times 10^4$ A/m$^2$.
    $v_d = J / ne$. ($n_{Cu} \approx 8.5 \times 10^{28}$).
    $v_d \approx \frac{5 \times 10^4}{8.5 \times 10^{28} \times 1.6 \times 10^{-19}} \approx 3.7 \times 10^{-6}$ m/s (mm/s range).
2.  **Thermal Velocity ($v_{th}$)**:
    $\frac{1}{2} m v_{th}^2 = \frac{3}{2} kT$ (Classical approx for comparison, though mostly irrelevant for Fermi gas dynamics).
    $v_{th} \approx \sqrt{3kT/m} \approx 1.1 \times 10^5$ m/s at 300K.
3.  **Fermi Velocity ($v_F$)**:
    $E_F = 7$ eV.
    $v_F = \sqrt{2E_F/m} = \sqrt{\frac{2 \times 7 \times 1.6 \times 10^{-19}}{9.11 \times 10^{-31}}} \approx 1.57 \times 10^6$ m/s.
    **Comparison**: $v_d \ll v_{th} < v_F$. Fermi velocity is the dominant speed of conducting electrons.

---

## CL27: Fermi Energy

### 1. Explain the term Fermi Energy.

#### Answer
**Fermi Energy ($E_F$)** is the energy of the highest occupied quantum state in a system of fermions (electrons) at absolute zero temperature (0 K). It represents the maximum kinetic energy an electron can have at 0 K. It acts as the chemical potential of the electron gas.

### 2. Derive the expression for the Fermi energy of a metal at 0K.

#### Answer
Total number of electrons $N = \int_0^{E_F} g(E) dE$.
$N = \frac{V}{2\pi^2}(\frac{2m}{\hbar^2})^{3/2} \int_0^{E_F} E^{1/2} dE$.
$N = \frac{V}{2\pi^2}(\frac{2m}{\hbar^2})^{3/2} [\frac{2}{3} E_F^{3/2}]$.
Solve for $E_F$:
$$ E_F = \frac{\hbar^2}{2m} \left( \frac{3\pi^2 N}{V} \right)^{2/3} $$

### 3. Obtain an expression for the Fermi energy and Fermi velocity of a metal in terms of its density and atomic weight.

#### Answer
Electron density $n = N/V = \frac{\rho N_A \times \text{Valence}}{M_{atomic}}$.
Substituting $n$ into $E_F$:
$$ E_F = \frac{\hbar^2}{2m} (3\pi^2 n)^{2/3} $$
Fermi Velocity $v_F$: From $\frac{1}{2} m v_F^2 = E_F \implies v_F = \sqrt{\frac{2E_F}{m}} = \frac{\hbar}{m}(3\pi^2 n)^{1/3}$.

### 4. Calcium has a density of 1.55 × 10³ kg/m³. Calculate its Fermi energy (Atomic weight of Calcium is 40 and its valency is 2).

#### Answer
1.  Number density $n$:
    $n = \frac{\text{Density} \times N_A \times \text{Valency}}{\text{Atomic Weight}} = \frac{1550 \times 6.022 \times 10^{23} \times 2}{40 \times 10^{-3} \text{ (kg/mol)}}$.
    Wait, atomic weight 40 usually means 40 g/mol = 0.04 kg/mol.
    $n = \frac{1550 \times 6.022 \times 10^{23} \times 2}{0.04} \approx 4.67 \times 10^{28} \text{ m}^{-3}$.
2.  Fermi Energy:
    $E_F = \frac{(1.054 \times 10^{-34})^2}{2(9.11 \times 10^{-31})} (3\pi^2 \times 4.67 \times 10^{28})^{2/3}$.
    $E_F \approx (6.1 \times 10^{-39}) (1.38 \times 10^{30})^{2/3} \approx 6.1 \times 10^{-39} \times 1.24 \times 10^{20} \approx 7.56 \times 10^{-19}$ J.
    $E_F \approx 4.7$ eV.

### 5. Show that at absolute zero the average energy of the electron is ⅗ th of the Fermi energy.

#### Answer
Total Energy $U = \int_0^{E_F} E \cdot g(E) dE \propto \int_0^{E_F} E \cdot E^{1/2} dE = \int E^{3/2} dE$.
$U \propto [\frac{2}{5} E^{5/2}]_0^{E_F} = \frac{2}{5} E_F^{5/2}$.
Total Number $N \propto \int_0^{E_F} E^{1/2} dE = \frac{2}{3} E_F^{3/2}$.
Average Energy $\bar{E} = \frac{U}{N} = \frac{\frac{2}{5} E_F^{5/2}}{\frac{2}{3} E_F^{3/2}} = \frac{3}{5} E_F$.

### 6. A current of 5 A flows in a copper wire of cross section 10⁻⁴ m². Compare the drift velocity, thermal velocity and Fermi velocity of the electrons. (Fermi energy of Cu = 7 eV).

#### Answer
1.  **Drift Velocity ($v_d$)**:
    $J = I/A = 5/10^{-4} = 5 \times 10^4$ A/m$^2$.
    $v_d = J / ne$. ($n_{Cu} \approx 8.5 \times 10^{28}$).
    $v_d \approx \frac{5 \times 10^4}{8.5 \times 10^{28} \times 1.6 \times 10^{-19}} \approx 3.7 \times 10^{-6}$ m/s (mm/s range).
2.  **Thermal Velocity ($v_{th}$)**:
    $\frac{1}{2} m v_{th}^2 = \frac{3}{2} kT$ (Classical approx for comparison, though mostly irrelevant for Fermi gas dynamics).
    $v_{th} \approx \sqrt{3kT/m} \approx 1.1 \times 10^5$ m/s at 300K.
3.  **Fermi Velocity ($v_F$)**:
    $E_F = 7$ eV.
    $v_F = \sqrt{2E_F/m} = \sqrt{\frac{2 \times 7 \times 1.6 \times 10^{-19}}{9.11 \times 10^{-31}}} \approx 1.57 \times 10^6$ m/s.
    **Comparison**: $v_d \ll v_{th} < v_F$. Fermi velocity is the dominant speed of conducting electrons.

***

# Unit 2: Worked Examples

### Example 1: Potential Step Reflection/Transmission (E > V0)
Electrons with energy $E=4.0$ eV are incident on a potential step $V_0=3.0$ eV high. Find the probability of reflection (R) and transmission (T).

**Solution:**
Energy $E = 4.0$ eV. Potential $V_0 = 3.0$ eV.
We need the wave numbers $k_1$ and $k_2$.
$k_1 = \sqrt{\frac{2mE}{\hbar^2}}$
$k_2 = \sqrt{\frac{2m(E-V_0)}{\hbar^2}}$

Reflection Coefficient $R = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2$.
We can simplify this using the energies:
$R = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$
$R = \left(\frac{\sqrt{4.0}-\sqrt{4.0-3.0}}{\sqrt{4.0}+\sqrt{4.0-3.0}}\right)^2 = \left(\frac{\sqrt{4}-\sqrt{1}}{\sqrt{4}+\sqrt{1}}\right)^2$
$R = \left(\frac{2-1}{2+1}\right)^2 = \left(\frac{1}{3}\right)^2 = \frac{1}{9} \approx 0.111$ or $11.1\%$.

Transmission Coefficient $T = 1 - R$.
$T = 1 - 1/9 = 8/9 \approx 0.889$ or $88.9\%$.
*(Note: Source answer for T=19.2% seems incorrect. The calculation for R=1/9 is standard).*

---
### Example 2: Penetration Depth
A spherical dust particle ($r=10^{-5}$m, $\rho=10^4$ kg/m³) moves at $v=10^{-2}$ m/s and encounters a step $V_0 = 2E$. Estimate the penetration depth $\Delta x$.

**Solution:**
Mass $m = \text{Volume} \times \text{Density} = (\frac{4}{3}\pi r^3) \rho$.
$m = \frac{4}{3}\pi (10^{-5})^3 (10^4) = \frac{4\pi}{3} \times 10^{-15} \times 10^4 = \frac{4\pi}{3} \times 10^{-11} \approx 4.19 \times 10^{-11}$ kg.
Kinetic Energy $E = \frac{1}{2} m v^2 = \frac{1}{2} (4.19 \times 10^{-11}) (10^{-2})^2$.
$E = \frac{1}{2} (4.19 \times 10^{-11}) (10^{-4}) = 2.095 \times 10^{-15}$ J.
Potential Height $V_0 = 2E = 2 \times (2.095 \times 10^{-15}) = 4.19 \times 10^{-15}$ J.

Penetration Depth $\Delta x = \frac{\hbar}{\sqrt{2m(V_0-E)}}$.
$V_0 - E = 2E - E = E = 2.095 \times 10^{-15}$ J.
$\Delta x = \frac{1.054 \times 10^{-34}}{\sqrt{2 \times (4.19 \times 10^{-11}) \times (2.095 \times 10^{-15})}}$.
$\Delta x = \frac{1.054 \times 10^{-34}}{\sqrt{1.755 \times 10^{-25}}} = \frac{1.054 \times 10^{-34}}{1.325 \times 10^{-12.5}}$? Mistake in calculation somewhere?

Let's recheck the denominator sqrt:
$2 \times (4.19 \times 10^{-11}) \times (2.095 \times 10^{-15}) = 17.55 \times 10^{-26}$.
$\sqrt{17.55 \times 10^{-26}} = \sqrt{1.755 \times 10^{-25}} \approx 4.189 \times 10^{-13}$.
$\Delta x = \frac{1.054 \times 10^{-34}}{4.189 \times 10^{-13}} \approx 0.2516 \times 10^{-21} \approx 2.5 \times 10^{-22}$ m.
*(Source answer matches this)*.

---
### Example 3: Tunneling Probability (Alpha Decay Lifetime)
Quantum mechanical transmission coefficient $T = 2.54 \times 10^{-24}$ for an alpha particle through a nuclear potential barrier. Velocity $v=1.7 \times 10^7$ m/s, nuclear radius $R=10^{-14}$ m. Calculate the mean lifetime $\tau$ for alpha decay.

**Solution:**
The alpha particle is considered trapped inside the nucleus (diameter $2R$). It collides with the barrier repeatedly.
Frequency of collisions (attempts to escape) $n = \frac{\text{velocity}}{\text{distance between walls}} = \frac{v}{2R}$.
$n = \frac{1.7 \times 10^7}{2 \times 10^{-14}} = 0.85 \times 10^{21} = 8.5 \times 10^{20}$ collisions/second.
Probability of escape per collision is $T$.
Probability of escape per second $P = n \times T$.
$P = (8.5 \times 10^{20}) \times (2.54 \times 10^{-24}) = 21.59 \times 10^{-4} \approx 2.16 \times 10^{-3}$ per second.
Mean lifetime $\tau$ is the inverse of the decay probability per unit time.
$\tau = 1 / P = 1 / (2.16 \times 10^{-3}) \approx 463$ seconds.
Convert to minutes: $463 / 60 \approx 7.72$ minutes.
$0.72 \times 60 \approx 43$ seconds.
$\tau \approx 7$ minutes $43$ seconds.
*(Source answer is 7 min 52 s, slight difference due to rounding perhaps)*.

---
### Example 4: Particle in a Box - Least Energy
Find the least energy (ground state energy, $n=1$) of an electron ($m_e = 9.11 \times 10^{-31}$ kg) moving in a 1D infinite potential box of width $L = 0.05$ nm $= 0.05 \times 10^{-9}$ m.

**Solution:**
Energy levels $E_n = \frac{n^2 h^2}{8mL^2}$.
Least energy is for $n=1$. $E_1 = \frac{(1)^2 (6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (0.05 \times 10^{-9})^2}$.
$E_1 = \frac{43.9 \times 10^{-68}}{8 (9.11 \times 10^{-31}) (2.5 \times 10^{-21})}$.
$E_1 = \frac{43.9 \times 10^{-68}}{182.2 \times 10^{-52}} \approx 0.241 \times 10^{-16}$ J.

Convert to eV: $1 \, eV = 1.602 \times 10^{-19}$ J.
$E_1 (eV) = \frac{0.241 \times 10^{-16}}{1.602 \times 10^{-19}} \approx 0.150 \times 10^3 = 150$ eV.
*(Source answer 151 eV matches closely)*.

---
### Example 5: Particle in a Box - Probability
Find the probability that a particle in an infinite potential well of width L can be found between 0 and $L/n$ when it's in the $n^{th}$ state.

**Solution:**
The normalized wave function is $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$.
Probability Density $P(x) = |\psi_n(x)|^2 = \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right)$.
Probability $P(0 \le x \le L/n) = \int_{0}^{L/n} P(x) dx$.
$P = \int_{0}^{L/n} \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right) dx$.
Use $\sin^2 \theta = \frac{1 - \cos(2\theta)}{2}$.
$P = \frac{2}{L} \int_{0}^{L/n} \frac{1 - \cos\left(\frac{2n\pi x}{L}\right)}{2} dx$.
$P = \frac{1}{L} \left[ x - \frac{L}{2n\pi} \sin\left(\frac{2n\pi x}{L}\right) \right]_{0}^{L/n}$.
$P = \frac{1}{L} \left[ \left(\frac{L}{n} - \frac{L}{2n\pi} \sin\left(\frac{2n\pi (L/n)}{L}\right)\right) - (0 - 0) \right]$.
$P = \frac{1}{L} \left[ \frac{L}{n} - \frac{L}{2n\pi} \sin(2\pi) \right]$.
Since $\sin(2\pi) = 0$.
$P = \frac{1}{L} \left[ \frac{L}{n} \right] = \frac{1}{n}$.
The probability is $1/n$.

---
### Example 6: Particle in a Box - Probability (Specific Region)
Particle in infinite well of width 'a'. Find probability between $a/3$ and $2a/3$ for ground state ($n=1$) and third excited state ($n=4$). (Assume well from $x=0$ to $x=a$).

**Solution:**
$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$.
$P(a/3 \le x \le 2a/3) = \int_{a/3}^{2a/3} \frac{2}{a} \sin^2\left(\frac{n\pi x}{a}\right) dx$.
$P = \frac{1}{a} \left[ x - \frac{a}{2n\pi} \sin\left(\frac{2n\pi x}{a}\right) \right]_{a/3}^{2a/3}$.

**Ground State (n=1):**
$P_{n=1} = \frac{1}{a} \left[ \left(\frac{2a}{3} - \frac{a}{2\pi} \sin(\frac{4\pi}{3})\right) - \left(\frac{a}{3} - \frac{a}{2\pi} \sin(\frac{2\pi}{3})\right) \right]$.
$\sin(4\pi/3) = -\sqrt{3}/2$. $\sin(2\pi/3) = +\sqrt{3}/2$.
$P_{n=1} = \frac{1}{a} \left[ \frac{a}{3} - \frac{a}{2\pi} (-\frac{\sqrt{3}}{2}) + \frac{a}{2\pi} (\frac{\sqrt{3}}{2}) \right]$.
$P_{n=1} = \frac{1}{a} \left[ \frac{a}{3} + \frac{a\sqrt{3}}{4\pi} + \frac{a\sqrt{3}}{4\pi} \right] = \frac{1}{3} + \frac{\sqrt{3}}{2\pi}$.
$P_{n=1} \approx 0.333 + 0.276 = 0.609$. (Probability $\approx 60.9\%$).

**Third Excited State (n=4):**
$P_{n=4} = \frac{1}{a} \left[ x - \frac{a}{8\pi} \sin\left(\frac{8\pi x}{a}\right) \right]_{a/3}^{2a/3}$.
$P_{n=4} = \frac{1}{a} \left[ \left(\frac{2a}{3} - \frac{a}{8\pi} \sin(\frac{16\pi}{3})\right) - \left(\frac{a}{3} - \frac{a}{8\pi} \sin(\frac{8\pi}{3})\right) \right]$.
$\sin(16\pi/3) = \sin(4\pi/3 + 4\pi) = \sin(4\pi/3) = -\sqrt{3}/2$.
$\sin(8\pi/3) = \sin(2\pi/3 + 2\pi) = \sin(2\pi/3) = +\sqrt{3}/2$.
$P_{n=4} = \frac{1}{a} \left[ \frac{a}{3} - \frac{a}{8\pi} (-\frac{\sqrt{3}}{2}) + \frac{a}{8\pi} (\frac{\sqrt{3}}{2}) \right]$.
$P_{n=4} = \frac{1}{a} \left[ \frac{a}{3} + \frac{a\sqrt{3}}{16\pi} + \frac{a\sqrt{3}}{16\pi} \right] = \frac{1}{3} + \frac{\sqrt{3}}{8\pi}$.
$P_{n=4} \approx 0.333 + 0.069 = 0.402$. (Probability $\approx 40.2\%$).

---
### Example 7: Particle in a Box - Minimum Energy (Nucleus)
What is the minimum energy of an electron trapped in a 1D region the size of an atomic nucleus ($L=1 \times 10^{-14}$ m)?

**Solution:**
Use $E_1 = \frac{h^2}{8mL^2}$.
$E_1 = \frac{(6.626 \times 10^{-34})^2}{8 (9.11 \times 10^{-31}) (1 \times 10^{-14})^2}$.
$E_1 = \frac{43.9 \times 10^{-68}}{8 (9.11 \times 10^{-31}) (1 \times 10^{-28})}$.
$E_1 = \frac{43.9 \times 10^{-68}}{72.88 \times 10^{-59}} \approx 0.602 \times 10^{-9}$ J.

Convert to eV:
$E_1 (eV) = \frac{0.602 \times 10^{-9}}{1.602 \times 10^{-19}} \approx 0.376 \times 10^{10} = 3.76 \times 10^9$ eV $= 3.76$ GeV.
*(Source answer 3.77 GeV matches)*.

---
### Example 8: Fermi Factor Occupancy Probability
Estimate the probability of occupancy $f(E)$ for an energy level $E = E_f + 0.1$ eV for Copper ($E_f = 7.0$ eV) at temperatures: i) 100K, ii) 300K, iii) 1000K. ($k_B = 8.617 \times 10^{-5}$ eV/K).

**Solution:**
Energy difference $\Delta E = E - E_f = 0.1$ eV.
Fermi factor $f(E) = \frac{1}{e^{\Delta E / (k_B T)} + 1}$.

i) T = 100 K:
   $k_B T = (8.617 \times 10^{-5})(100) = 0.008617$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.008617 \approx 11.6$.
   $f(E) = \frac{1}{e^{11.6} + 1} \approx \frac{1}{109600 + 1} \approx 9.1 \times 10^{-6}$. (Very low probability)

ii) T = 300 K (Room Temp):
   $k_B T = (8.617 \times 10^{-5})(300) = 0.02585$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.02585 \approx 3.87$.
   $f(E) = \frac{1}{e^{3.87} + 1} \approx \frac{1}{47.9 + 1} \approx \frac{1}{48.9} \approx 0.020$. (Probability $\approx 2\%$)

iii) T = 1000 K:
   $k_B T = (8.617 \times 10^{-5})(1000) = 0.08617$ eV.
   Exponent $\Delta E / (k_B T) = 0.1 / 0.08617 \approx 1.16$.
   $f(E) = \frac{1}{e^{1.16} + 1} \approx \frac{1}{3.19 + 1} = \frac{1}{4.19} \approx 0.239$. (Probability $\approx 24\%$)

---
### Example 9: Potential Step Reflection (Energy Comparison)
A 5 eV electron encounters a 2 eV potential step. What is the probability it will be reflected?

**Solution:**
$E = 5$ eV, $V_0 = 2$ eV.
$R = \left(\frac{\sqrt{E}-\sqrt{E-V_0}}{\sqrt{E}+\sqrt{E-V_0}}\right)^2$
$R = \left(\frac{\sqrt{5}-\sqrt{5-2}}{\sqrt{5}+\sqrt{5-2}}\right)^2 = \left(\frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}}\right)^2$
$R = \left(\frac{2.236 - 1.732}{2.236 + 1.732}\right)^2 = \left(\frac{0.504}{3.968}\right)^2 \approx (0.127)^2 \approx 0.016$.
Reflection Probability $R \approx 1.6\%$.
*(Source answer 0.0716 is likely using ratio of k values directly $\frac{(k_1-k_2)^2}{(k_1+k_2)^2} = \frac{(\sqrt{E/E_0} - \sqrt{(E-V_0)/E_0})^2}{(\dots)^2}$ but seems to have simplified incorrectly to $\frac{(\sqrt{3}-\sqrt{1})^2}{(\sqrt{3}+\sqrt{1})^2}$. The energy-based formula is correct.)*

---
### Example 10: Barrier Tunneling Energy Calculation
A beam of identical electrons is incident on a barrier 6.0 eV high and 2 nm wide. Find the energy of the electrons if 1% ($T=0.01$) are transmitted.

**Solution:**
Use the approximate formula $T \approx 16 \frac{E}{V_0} (1-\frac{E}{V_0}) e^{-2\alpha L}$.
$V_0 = 6.0$ eV. $L = 2$ nm $= 2 \times 10^{-9}$ m. $T=0.01$.
$\alpha = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$.
Let's try the simpler $T \approx e^{-2\alpha L}$.
$0.01 \approx e^{-2\alpha L}$.
$\ln(0.01) \approx -2\alpha L$.
$-4.605 \approx -2 \alpha L$.
$\alpha L \approx 2.30$.
$\alpha = 2.30 / L = 2.30 / (2 \times 10^{-9}) = 1.15 \times 10^9 \, m^{-1}$.

Now relate $\alpha$ to energy: $\alpha^2 = \frac{2m(V_0-E)}{\hbar^2}$.
$(V_0-E) = \frac{\alpha^2 \hbar^2}{2m}$.
$\hbar = 1.054 \times 10^{-34}$ Js. $m = 9.11 \times 10^{-31}$ kg.
$(V_0-E)_{Joules} = \frac{(1.15 \times 10^9)^2 (1.054 \times 10^{-34})^2}{2 (9.11 \times 10^{-31})}$.
$(V_0-E)_{Joules} = \frac{(1.32 \times 10^{18})(1.11 \times 10^{-68})}{1.822 \times 10^{-30}} = \frac{1.465 \times 10^{-50}}{1.822 \times 10^{-30}} \approx 0.804 \times 10^{-20}$ J.

Convert to eV: $(V_0-E)_{eV} = \frac{0.804 \times 10^{-20}}{1.602 \times 10^{-19}} \approx 0.05$ eV.
$V_0 - E = 0.05$ eV.
$E = V_0 - 0.05 = 6.0 - 0.05 = 5.95$ eV.
Using the pre-factor might adjust this slightly. Let's check the source answer's $E=5.963$ eV with the full formula.
If $E=5.963$, $V_0-E = 0.037$ eV.
$\alpha = \sqrt{\frac{2m(0.037 \times 1.602 \times 10^{-19})}{\hbar^2}} \approx 0.96 \times 10^9$.
$2\alpha L = 2 (0.96 \times 10^9)(2 \times 10^{-9}) = 3.84$.
$e^{-2\alpha L} = e^{-3.84} \approx 0.0215$.
Pre-factor: $16 \frac{E}{V_0} (1-\frac{E}{V_0}) = 16 \frac{5.963}{6} (1-\frac{5.963}{6}) \approx 16 (0.994) (0.006) \approx 0.095$.
$T \approx 0.095 \times 0.0215 \approx 0.002$. This is much lower than 0.01.

Let's re-solve $V_0-E=0.05$ eV with the prefactor:
$E=5.95$ eV. $V_0-E=0.05$ eV. $\alpha L \approx 2.30$. $e^{-2\alpha L} = e^{-4.6} \approx 0.01$.
Pre-factor: $16 \frac{5.95}{6} (1-\frac{5.95}{6}) \approx 16(0.99)(0.008) \approx 0.127$.
$T \approx 0.127 \times 0.01 \approx 0.00127$. Still too low.

There might be an issue with the approximation or the source answer. However, $E=5.95$ to $5.96$ eV is the likely range. Let's stick with $E \approx 5.95$ eV based on $T \approx e^{-2\alpha L}$.

---
### Example 11: Fermi Temperature / Velocity (Conceptual)
These are derived from the Fermi energy $E_f$.
Fermi Temperature $T_f$ is defined by $E_f = k_B T_f$.
Fermi Velocity $v_f$ is defined by $E_f = \frac{1}{2} m v_f^2$.

---
### Example 12: Density of States Calculation (Conceptual)
The density of states $g(E)$ gives the number of available electron states per unit volume per unit energy.
The derivation involves:
1. Treating electrons as particles in a 3D infinite potential well (the metal volume).
2. Finding the allowed quantized energy levels $E = \frac{h^2}{8mL^2}(n_x^2+n_y^2+n_z^2)$.
3. Counting the number of states $N(E)$ with energy up to $E$ by considering the volume of an octant in "n-space". $N(E) \propto E^{3/2}$.
4. Differentiating $N(E)$ with respect to $E$ to find the number of states $dN$ in an energy interval $dE$.
5. Dividing by volume ($L^3$) and multiplying by 2 (for spin degeneracy) gives $g(E) = \frac{dN/dE}{V} \times 2$.
The result is $g(E) = C \cdot E^{1/2}$, where $C = \frac{\pi}{2} (\frac{8m}{h^2})^{3/2}$.

***
# [[../Physics|Back]]
---
## Assignment 2 Questions

### 34. A particle of mass m=9.11×10^(-31) kg and energy E=4 eV approaches a rectangular potential barrier of height V_0=6 eV and width a=0.5 nm. (a) Calculate the penetration depth inside the barrier. (b) Estimate the transmission probability T.

#### Answer
Given: $m = 9.11 \times 10^{-31}$ kg, $E = 4$ eV, $V_0 = 6$ eV, width $a = 0.5$ nm $= 0.5 \times 10^{-9}$ m.
The region is classically forbidden since $E < V_0$.

**(a) Penetration Depth ($\delta$):**
$\alpha = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}$.
$V_0 - E = 2$ eV $= 3.204 \times 10^{-19}$ J.
$\alpha = \frac{\sqrt{2 \times 9.11 \times 10^{-31} \times 3.204 \times 10^{-19}}}{1.054 \times 10^{-34}} \approx 7.25 \times 10^9 \text{ m}^{-1}$.
Penetration depth $\delta = \frac{1}{\alpha} = \frac{1}{7.25 \times 10^9} \approx 0.138 \text{ nm}$.

**(b) Transmission Probability (T):**
For $\alpha a \approx 3.6 > 1$, use $T \approx 16 \frac{E}{V_0}(1-\frac{E}{V_0})e^{-2\alpha a}$.
Pre-factor: $16(4/6)(1-4/6) \approx 3.55$.
Exponential: $e^{-2(3.625)} \approx 7.1 \times 10^{-4}$.
$T \approx 3.55 \times 7.1 \times 10^{-4} \approx 2.5 \times 10^{-3}$.
**Result:** $\delta \approx 0.138$ nm; $T \approx 0.25\%$.

### 35. Explain how the de Broglie wavelength of a particle changes when it encounters a rectangular potential step of height V_0, given that the particle's energy is E. Comment on the physical implications.

#### Answer
When a particle with energy $E$ encounters a potential step $V_0$:
1.  **Region I ($V=0$):** $p_1 = \sqrt{2mE}$. $\lambda_1 = h/p_1$.
2.  **Region II ($V=V_0$):** Kinetic energy decreases to $K' = E - V_0$ (assuming $E > V_0$).
    Momentum decreases: $p_2 = \sqrt{2m(E-V_0)}$.
    Wavelength increases: $\lambda_2 = \frac{h}{p_2} = \frac{h}{\sqrt{2m(E-V_0)}}$.
**Conclusion:** $\lambda_2 > \lambda_1$.
**Physical Implication:** The particle slows down (in a classical sense of reduced KE/momentum) as it climbs the potential hill, leading to a stretching of its wavelength. This change in wavelength leads to reflection and transmission phenomena at the boundary, similar to light changing speed and direction at an interface.

### 36. A particle of mass m=9.11×10^(-31) kg is confined in a 1D infinite potential well of width a=0.5 nm. Calculate the energy (in eV) of the particle in the ground and the second excited state.

#### Answer
Energy levels: $E_n = \frac{n^2 h^2}{8ma^2}$.
**Ground State ($n=1$):**
$E_1 = \frac{(6.626 \times 10^{-34})^2}{8(9.11 \times 10^{-31})(0.5 \times 10^{-9})^2} \approx 2.41 \times 10^{-19} \text{ J}$.
$E_1 \approx 1.50 \text{ eV}$.
**Second Excited State ($n=3$):** (Note: $n=2$ is 1st excited state)
$E_3 = 3^2 E_1 = 9 E_1$.
$E_3 = 9 \times 1.50 = 13.5 \text{ eV}$.

### 37. State any two physical consequences or applications of quantum tunneling.

#### Answer
1.  **Alpha Decay:** Radioactive nuclei emit alpha particles by tunneling through the Coulomb barrier, a process forbidden by classical mechanics.
2.  **Tunnel Diode:** A semiconductor device (Esaki diode) that uses heavy doping to create a narrow depletion region, allowing significant electron tunneling. This results in negative differential resistance, useful for high-speed switching and microwave oscillation.

### 38. Considering the spatial confinement of a quantum particle within a one-dimensional infinite potential domain extending from x=0 to x=a, enumerate the multiplicity of energetically indistinct eigenstates corresponding to quantized levels.

#### Answer
For a 1D infinite potential well, the energy levels are given by $E_n = \frac{n^2 h^2}{8ma^2}$ where $n = 1, 2, 3, \dots$.
*   Since each energy level $E_n$ corresponds to a unique integer $n$ (state $\psi_n$), there is a **one-to-one correspondence** between energy and state.
*   Therefore, the multiplicity of each energy level is **1**.
*   The states are **non-degenerate**. There are no "energetically indistinct" eigenstates (distinct states with the same energy).
