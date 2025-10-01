# Physics - Assignment Questions

1.  List 10 discoveries in physics in the last 30 years which have revolutionized technology.
2.  Write a short commentary on Quantum Computing.
3.  Write a short commentary on quantum physics.
4.  Connect the Four Maxwell's equations to Faraday's, Gauss's and Ampere's laws.
5.  What is the physical meaning of each of the Maxwell's equations?
6.  What is Maxwell's contribution to electromagnetic wave theory?
7.  Analyze Maxwell's equations in differential and integral forms.
8.  Set up a second order differential equation to describe a travelling wave.
9.  Set up a general second order differential equation by partially differentiating the wave function.
10. Explain each term of the expression for wave function in detail.
11. Using a cubical cavity, set up the stable standing wave modes and count them.
12. Describe Boltzmann distribution function and obtain an expression for it.
13. Study Compton's original paper and write a review on it.
14. Learn basic idea of energy according to special theory of relativity.
15. Write a note on single particle interference (the central mystery of QM) by studying Feynman Lectures Vol III.
16. Write a short note on Fourier transforms and their applications.
17. Heisenberg's uncertainty principle is the foundation of quantum mechanics. Can you figure out a theoretical scenario where the uncertainty principle is violated?
18. Deduce Hydrogen atom's first orbital radius using the Uncertainty principle.
19. Explore mathematical wave functions that can meet the conditions to be acceptable as quantum wave functions. List functions that are suitable.
20. Explore quantum states as elements of linear vector space (Hilbert space).
21. Prove that the Eigen values of a Hermitian operator are real.
22. Set up a differential equation by connecting the partial second order position and time derivatives of a a wavefunction of the type $y=a\sin(\omega t-kx)$.
23. Plot the graphs of the real part of $y=\exp(ikx)$ and compare with $y=\exp(kx)$. Discuss the behavior of the functions as x goes to + infinity and -infinity.
24. Why is the Schrodinger equation that we have set up in this class called the non-relativistic equation?
25. What is the physical meaning of the two parts of the solution to the Schrodinger equation for a free particle?
26. Why do you think a free particle's energy is not quantized? Can you link this to the uncertainty principle?
27. Interpret the components of wave functions a group of particles with energy E incident on a potential step of height $V_0 < E$. Also define the term reflection coefficient with respect to step potential.
28. Solve the Schrödinger's wave equation for a group of electrons with energy E incident on a step potential of height V ($E>V$) and show that $R+T=1$.


# Physics - Assignment Answers

### 4. Connect the Four Maxwell's equations to Faraday's, Gauss's and Ampere's laws.

Maxwell's equations are a unification and extension of previously known laws. They didn't come from scratch but were brilliantly synthesized by James Clerk Maxwell.

1.  **Gauss's Law for Electricity**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$. This is a direct adoption of Gauss's law, which was already established. It relates the electric field to its source, the electric charge.
2.  **Gauss's Law for Magnetism**: $\nabla \cdot \vec{B} = 0$. While others had observed that magnetic poles always come in pairs, this equation is the formal mathematical statement that there are no magnetic monopoles.
3.  **Faraday's Law of Induction**: $\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}$. This is the differential form of Faraday's law, which states that a changing magnetic field creates an electric field.
4.  **Ampere-Maxwell Law**: $\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$. This is Maxwell's crucial modification of Ampere's original circuital law. Ampere's law only included the current term ($\mu_0\vec{J}$). Maxwell added the **displacement current** term ($\mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}$), which states that a changing electric field also creates a magnetic field. This addition was the key to predicting electromagnetic waves.

---

### 5. What is the physical meaning of each of the Maxwell's equations?

1.  **Gauss's Law for E-field**: Charges create electric fields that radiate outwards (for positive charges) or converge inwards (for negative charges). It's a formal statement that electric field lines begin and end on charges.
2.  **Gauss's Law for B-field**: Magnetic field lines are always closed loops. They never start or end at a point, which means there are no magnetic "charges" (monopoles).
3.  **Faraday's Law**: A changing magnetic field creates a swirling (curling) electric field. This is the principle behind electric generators.
4.  **Ampere-Maxwell Law**: A swirling magnetic field is created by two things: a moving current of charges ($\vec{J}$) and a changing electric field ($\frac{\partial \vec{E}}{\partial t}$).

---

### 6. What is Maxwell's contribution to electromagnetic wave theory?

Maxwell's primary contributions were:
1.  **Unification**: He unified electricity, magnetism, and optics into a single, consistent theory of electromagnetism.
2.  **Displacement Current**: His most critical addition was the displacement current term to Ampere's law. Without it, the equations would not predict wave propagation.
3.  **Prediction of EM Waves**: By mathematically manipulating the four equations in a vacuum, he derived the wave equation, predicting that disturbances in electric and magnetic fields should propagate as waves.
4.  **Prediction of the Speed of Light**: His derivation showed that these waves travel at a speed $c = 1/\sqrt{\mu_0 \epsilon_0}$. When he calculated this value using the known constants for electricity and magnetism, it perfectly matched the measured speed of light, leading to the profound conclusion that light is an electromagnetic wave.

---

### 12. Describe Boltzman distribution function and obtain an expression for it.

The **Boltzmann distribution** is a probability distribution that gives the probability of a system in thermal equilibrium (at temperature T) being in a particular energy state E. It states that states with higher energy are exponentially less likely to be occupied.

The probability $P(E)$ of finding a system in a state with energy E is proportional to the **Boltzmann factor**:
$$P(E) \propto e^{-E/k_B T}$$
where $k_B$ is the Boltzmann constant.

To get the full expression for the probability distribution function, one must normalize it by dividing by the sum (or integral) of all possible Boltzmann factors, which is called the partition function, Z.
$$P(E) = \frac{e^{-E/k_B T}}{\int_0^\infty e^{-E/k_B T} dE}$$

---

### 13. Study Compton's original paper and write a review on it.

I am unable to access external websites or specific historical papers. However, based on the notes provided, a review would focus on these key points:
-   **The Problem**: Compton observed that when X-rays scattered off materials, the scattered X-rays had a longer wavelength than the incident ones, and this change in wavelength depended on the scattering angle. Classical wave theory could not explain this, as it predicted the scattered wave should have the same wavelength.
-   **The Hypothesis**: Compton treated the interaction not as a wave scattering, but as a "billiard ball" collision between two particles: an X-ray **photon** and an electron.
-   **The Derivation**: By applying the principles of **conservation of energy** and **conservation of momentum** to this particle-particle collision (using relativistic energy for the electron), Compton derived his famous formula for the wavelength shift: $\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$.
-   **The Conclusion**: The formula perfectly matched the experimental data, providing definitive proof for the particle nature of light (photons) and the validity of quantum theory.

---

### 18. Deduce Hydrogen atom's first orbital radius using the Uncertainty principle.

This is a classic estimation problem that gives a surprisingly accurate result.

1.  **Setup**: We assume the electron is confined within a radius $r$ of the proton. Therefore, the uncertainty in its position is approximately this radius: $\Delta x \approx r$.
2.  **Uncertainty Principle**: The uncertainty in momentum is given by $\Delta p \ge \frac{\hbar}{2\Delta x} \approx \frac{\hbar}{2r}$. We can approximate the magnitude of the electron's momentum $p$ as being at least this large: $p \approx \frac{\hbar}{r}$.
3.  **Total Energy**: The total energy E of the electron is the sum of its kinetic and potential energies:
    $$E = KE + PE = \frac{p^2}{2m_e} - \frac{e^2}{4\pi\epsilon_0 r}$$
4.  **Substitute Momentum**: Replace $p$ with our approximation from the uncertainty principle:
    $$E(r) = \frac{(\hbar/r)^2}{2m_e} - \frac{e^2}{4\pi\epsilon_0 r} = \frac{\hbar^2}{2m_e r^2} - \frac{e^2}{4\pi\epsilon_0 r}$$
5.  **Minimize Energy**: The ground state will be the state of minimum possible energy. To find this, we take the derivative of $E(r)$ with respect to $r$ and set it to zero.
    $$\frac{dE}{dr} = -\frac{2\hbar^2}{2m_e r^3} + \frac{e^2}{4\pi\epsilon_0 r^2} = 0$$
    $$-\frac{\hbar^2}{m_e r^3} + \frac{e^2}{4\pi\epsilon_0 r^2} = 0$$
6.  **Solve for r**:
    $$\frac{e^2}{4\pi\epsilon_0 r^2} = \frac{\hbar^2}{m_e r^3}$$
    $$r = \frac{4\pi\epsilon_0 \hbar^2}{m_e e^2}$$
This result is exactly the **Bohr radius ($a_0$)**, the most probable radius for the electron in the ground state of a hydrogen atom.

---

### 21. Prove that the Eigen values of a Hermitian operator are real.

A Hermitian operator is a fundamental concept in quantum mechanics because its eigenvalues correspond to real, measurable quantities (observables).

1.  **Start with the eigenvalue equation** for a Hermitian operator $\hat{A}$ and its corresponding eigenfunction $\psi$:
    $$\hat{A}\psi = a\psi$$
2.  **Multiply from the left by the complex conjugate** of the wavefunction, $\psi^*$, and integrate over all space:
    $$\int \psi^* (\hat{A}\psi) dV = \int \psi^* (a\psi) dV = a \int \psi^*\psi dV$$
3.  **Take the complex conjugate of the original eigenvalue equation**:
    $$(\hat{A}\psi)^* = (a\psi)^* \implies \psi^* \hat{A}^\dagger = a^* \psi^*$$
    For a Hermitian operator, by definition, $\hat{A}^\dagger = \hat{A}$. So, this becomes:
    $$\psi^* \hat{A} = a^* \psi^*$$
4.  **Multiply this second equation from the right by $\psi$** and integrate over all space:
    $$\int (\psi^* \hat{A}) \psi dV = \int (a^* \psi^*) \psi dV = a^* \int \psi^*\psi dV$$
5.  **The definition of a Hermitian operator** also requires that $\int \phi^* (\hat{A}\psi) dV = \int (\hat{A}\phi)^* \psi dV$. If we let $\phi=\psi$, then the integrals from step 2 and step 4 must be equal.
6.  **Equate the right-hand sides** of the equations from steps 2 and 4:
    $$a \int \psi^*\psi dV = a^* \int \psi^*\psi dV$$
7.  Since the wavefunction $\psi$ must be normalizable, the integral $\int \psi^*\psi dV$ is a non-zero constant. Therefore, we can divide both sides by it, leaving:
    $$a = a^*$$
A number that is equal to its own complex conjugate is, by definition, a **real number**. Thus, the eigenvalues of any Hermitian operator must be real.

---

### 28. Solve the Schrödinger's wave equation for a group of electrons with energy E incident on a step potential of height V ($E>V$) and show that $R+T=1$.

This demonstrates the conservation of probability; the probability that a particle is reflected (R) plus the probability that it is transmitted (T) must equal 1.

1.  **Define Wavefunctions**:
    -   **Region I (x < 0, V=0)**: Incident + Reflected wave. $\psi_1 = Ae^{ik_1 x} + Be^{-ik_1 x}$, where $k_1 = \frac{\sqrt{2mE}}{\hbar}$.
    -   **Region II (x > 0, V=V₀)**: Transmitted wave only. $\psi_2 = Ce^{ik_2 x}$, where $k_2 = \frac{\sqrt{2m(E-V_0)}}{\hbar}$.
2.  **Apply Boundary Conditions**: The wavefunction and its first derivative must be continuous at the boundary ($x=0$).
    -   $\psi_1(0) = \psi_2(0) \implies A+B=C$
    -   $\psi'_1(0) = \psi'_2(0) \implies ik_1 A - ik_1 B = ik_2 C \implies k_1(A-B) = k_2 C$
3.  **Solve for Coefficients B and C in terms of A**:
    -   From the first condition, $C=A+B$. Substitute into the second: $k_1(A-B) = k_2(A+B)$.
    -   $A(k_1-k_2) = B(k_1+k_2) \implies B = A\left(\frac{k_1-k_2}{k_1+k_2}\right)$.
    -   Substitute B back to find C: $C = A + A\left(\frac{k_1-k_2}{k_1+k_2}\right) = A\left(\frac{k_1+k_2+k_1-k_2}{k_1+k_2}\right) = A\left(\frac{2k_1}{k_1+k_2}\right)$.
4.  **Define Reflection and Transmission Coefficients (R and T)**:
    -   The coefficients are defined as the ratio of probability fluxes (flux $\propto |\text{amplitude}|^2 \times \text{velocity}$). The velocity is proportional to the wave number $k$.
    -   **Reflection Coefficient (R)**: $R = \frac{|\text{reflected flux}|}{|\text{incident flux}|} = \frac{|B|^2 v_1}{|A|^2 v_1} = \left|\frac{B}{A}\right|^2$.
    -   **Transmission Coefficient (T)**: $T = \frac{|\text{transmitted flux}|}{|\text{incident flux}|} = \frac{|C|^2 v_2}{|A|^2 v_1} = \left|\frac{C}{A}\right|^2 \frac{k_2}{k_1}$.
5.  **Calculate R and T**:
    -   $R = \left|\frac{A(\frac{k_1-k_2}{k_1+k_2})}{A}\right|^2 = \left(\frac{k_1-k_2}{k_1+k_2}\right)^2$.
    -   $T = \left|\frac{A(\frac{2k_1}{k_1+k_2})}{A}\right|^2 \frac{k_2}{k_1} = \frac{4k_1^2}{(k_1+k_2)^2} \frac{k_2}{k_1} = \frac{4k_1 k_2}{(k_1+k_2)^2}$.
6.  **Show that R + T = 1**:
    $$R+T = \frac{(k_1-k_2)^2}{(k_1+k_2)^2} + \frac{4k_1 k_2}{(k_1+k_2)^2}$$
    $$R+T = \frac{(k_1^2 - 2k_1 k_2 + k_2^2) + 4k_1 k_2}{(k_1+k_2)^2}$$
    $$R+T = \frac{k_1^2 + 2k_1 k_2 + k_2^2}{(k_1+k_2)^2} = \frac{(k_1+k_2)^2}{(k_1+k_2)^2} = 1$$
This confirms that the total probability is conserved; every incident particle is either reflected or transmitted.