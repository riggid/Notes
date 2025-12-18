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

1. Using the Schrödinger's wave equation find the wave function associated with particle having energy 10 eV travelling along positive x-direction approach a potential step of height 7 eV.
2. Define the terms reflection coefficient and transmission coefficient with respect to step potential.
3. A stream of particles of mass m and total energy E moves towards a potential step of height V₀, if the energy of the electrons is lesser than the step potential (E < V₀) then by applying continuity conditions obtain the expression for reflection coefficient.
4. The probability of reflection from a potential step is given by R, where the k's are the wavenumbers in the two regions. If a 5 eV electron encounters a 2 eV potential step, what is the probability that it will be reflected?

---

## CL15: Penetration Depth

1. A particle of mass and total energy moves from a region of constant potential V₀ to a region of potential V₁. If E > V₀, find the associated wave function and reflection coefficient for the particle experience a step potential.
2. Explain the term penetration depth for a step potential.
3. A proton of energy 3 eV approaches a potential step of height 4 eV. Evaluate the possible depth of penetration into the classically forbidden region.
4. A spherical dust particle of given radius and density, moving at a given speed encounters a step potential of height equal to twice the K.E of the particle. Estimate the penetration depth of the particle inside the step.

---

## CL18: Infinite Potential Well

1. Obtain the energy Eigen values for a particle bound in an infinite potential well. Comment on why the particle cannot have zero energy?
2. Show that the probability of locating the particle between the limits 0 to 0.5L is the same in any quantum state. Here L is the width of the well.
3. Plot the first two states Eigen functions for a particle in an infinite potential well.
4. Plot the probability densities for the first three excited quantum states of an electron trapped in an infinite potential well of width L. Calculate the probability of locating the electron in the third excited state between the limits ⅜L and ⅝L where L is the width of the well?
5. Show that the energy of an electron confined in a 1-D symmetric potential well of length 'L' and infinite depth is quantized. Is the electron trapped in a potential well allowed to take zero energy? If not, why?
6. Derive the expression of energy Eigen values for a particle in an infinite potential well using the admissible solutions.
7. The wave function associated with a particle in a infinite potential box is given. What is the probability of finding the particle in the region x=0 to L/4 and L/4 to L?
8. A particle is free to move in a one dimensional region of zero potential between the two rigid walls. Show the energy relationships.
9. The lowest energy level of a particle confined to a one-dimensional region of space with fixed dimension L. If an identical particle is confined to a similar region with fixed distance L/2, what is the energy of the lowest energy level that the particles have in common?

---

## CL19: 3D Box & Degeneracy

1. What is meant by degeneracy of energy states in quantum systems?
2. Give examples for degenerate states for a particle in three dimensional box with infinite potential at the boundaries.
3. Calculate the Eigen value of the electron in the lowest energy level, confined in a 2D potential box of side 0.1 nm.
4. Using the appropriate boundary conditions obtain the energy eigen values and the corresponding eigenfunctions for a particle trapped in a three dimensional infinite potential box.

---

## CL21: Finite Well & Harmonic Oscillator

1. Compare the energy levels of the first three quantum states of identically sized finite and infinite potential wells.
2. Why do finite square wells have only a finite number of bound energy values? What are the characteristics of bound energy values?
3. A particle trapped in a finite potential well. Sketch the Eigen functions for first three energy states.
4. Plot the first two states Eigen wave functions and the probability function for a particle in a finite potential well.
5. How are the energy values of a quantum mechanical oscillator fundamentally different from the energy values of a classical oscillator?
6. The energy of a linear harmonic oscillator in the third excited state is 0.1 eV. Find the frequency of the oscillator.
7. Sketch the wave functions and probability densities for the first two quantum states of quantum harmonic oscillators.
8. A lithium atom, mass 1.17 × 10⁻²⁶ kg, is vibrating with simple harmonic motion in a crystal lattice, where the force constant k is 64.0 N/m. (a) what is the ground state energy of this system in eV? (b) What would be the wavelength of the photon that could excite this system to the n = 1 level?
9. Establish Schrodinger's equation of a linear harmonic oscillator and write its solution.

---

## CL22: Hydrogen Atom

1. Write down the Schrodinger wave equation for the hydrogen atom in spherical polar co-ordinates and explain the significance of different quantum numbers.
2. Explain the stationary states of the hydrogen atom.
3. Electrons in hydrogen are described by four numbers, n, l, m and ms. What restrictions (if any) are there on these four numbers?
4. In the analysis of Schrodinger's equation for a hydrogen atom using spherical polar coordinates, elaborate the azimuthal and polar wave function. Also comment on the possible values of magnetic quantum number.
5. Plot the ground-state eigen function of the hydrogen atom as a function of the distance r.

---

## CL24: Quantum Free Electron Theory

1. Give the basic ideas of quantum free electron theory of metals.
2. Explain the (energy) distribution of free electrons at 0K based on the quantum free electron theory.
3. Discuss the free electron theory of electronic conduction in metals. Comment on the effect of temperature and impurities on conductivity.
4. State Mattheissen's rule and give an account of the nature of total resistivity both at high and low temperature.
5. Describe how quantum free electron theory has been successful in overcoming the failures of classical free- electron theory.
6. Elucidate the difference between classical free electro theory and quantum free electron theory.

---

## CL25: Fermi Factor

1. Discuss the variation of Fermi factor on temperature and consequent effect on probability of occupation of energy levels.
2. Use the Fermi distribution function to obtain the value of Fd for E-EF = 0.01 eV at 200 K.
3. Show that the probability of occupancy of an energy level ΔE below the Fermi level is the same as that of the probability of non-occupancy of an energy level ΔE above the Fermi level.
4. At what temperature would the probability of occupancy of an energy state 0.01eV below the Fermi level be 0.95?
5. Estimate the temperature at which there is 2% probability that a state with energy 0.4 eV above the Fermi energy level is occupied.
6. Show that the density of states for conduction electron per unit volume of the metal.
7. Calculate the number of states lying in an energy interval above the Fermi-level for a crystal of unit volume with energy.

---

## CL27: Fermi Energy

1. Explain the concept of Fermi energy.
2. Obtain an expression for Fermi energy using the concept of density of states.
3. Determine the Fermi temperature and Fermi velocity in a metal with 18 × 10²⁸ free electrons per unit volume.
4. Calculate the Fermi energy in eV for a metal at 0K, whose density is 10500 kg/m³, atomic weight is 107.9, and it has one conduction electron per atom.
5. Using the expression of density of states, show that average energy of electrons in a metal at 0K is related to Fermi energy.
6. A current of 5A can easily be carried in a copper wire of length 3m and resistance 20 mΩ at room temperature. Given: Density of copper = 8.95 × 10³kg/m³, mobility of charge carriers = 4.3 × 10⁻³ m²/Vs and Fermi energy = 7eV. Estimate and compare the values of: a) Drift velocity b) Thermal velocity c) Fermi velocity

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