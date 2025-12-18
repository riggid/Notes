---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***
# Unit 2: Higher Order Differential Equations - MCQs

## ODE Order and Degree

### Question 1
The order and degree of the differential equation $(1+y')^3 = (y')^2$ are respectively
*   A) 1 and 2
*   B) 2 and 3
*   C) 1 and 3
*   D) order 1 and degree is undefined

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) 1 and 3**
> 
> *Highest derivative is $y'$ (order 1). Expanding: highest power of $y'$ is 3 (degree 3).*
</details>

### Question 2
If p and q are the degree and order of the differential equation $(y'')^2 + 3y' + y''' = 4$ respectively then the value of $2p-3q$ is
*   A) 7
*   B) -7
*   C) 3
*   D) -2

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) -7**
> 
> *Order $q=3$ (highest derivative $y'''$). Degree $p=1$ (power of $y'''$ after removing radicals). $2(1) - 3(3) = 2 - 9 = -7$.*
</details>

### Question 3
The degree of the differential equation $y'' + \sin(y') = 0$ is not defined.
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
> 
> *The ODE contains transcendental functions of derivatives, making degree undefined.*
</details>

### Question 4
The degree of the ODE $y'' + 2(y')^2 = x^2 \log(y'')$ is
*   A) 1
*   B) 2
*   C) 4
*   D) undefined

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) undefined**
> 
> *The ODE contains $\log(y'')$, a transcendental function of a derivative.*
</details>

---

## Complementary Function

### Question 1
The general solution of $y''' - y'' + y' - y = 0$ is
*   A) [Image]
*   B) [Image]
*   C) cos [Image]
*   D) cos [Image]

<details>
<summary><strong>Check Answer</strong></summary>

> **Status: Cannot Verify** (Image-based)
> 
> *Characteristic equation: $m^3 - m^2 + m - 1 = 0 \implies (m-1)(m^2+1)=0$.*
> *Roots: $m=1, \pm i$. General solution: $y = c_1 e^x + c_2 \cos x + c_3 \sin x$.*
</details>

### Question 2
The Complementary Function of $y'' + y' - 12y = \sin 2x$ is
*   A) [Image]
*   B) [Image]
*   C) [Image]
*   D) None of these

<details>
<summary><strong>Check Answer</strong></summary>

> **Status: Cannot Verify** (Image-based)
> 
> *Characteristic equation: $m^2 + m - 12 = 0 \implies (m+4)(m-3)=0$.*
> *Roots: $m=-4, 3$. CF: $y_c = c_1 e^{-4x} + c_2 e^{3x}$.*
</details>

---

## Wronskian

### Question 1
The Wronskian of the differential equation $(D^2 + 4)y = 4\tan 2x$ is
*   A) -2
*   B) 2
*   C) -4
*   D) 4

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) 2**
> 
> *Homogeneous solutions: $\cos 2x, \sin 2x$.*
> $W = \begin{vmatrix} \cos 2x & \sin 2x \\ -2\sin 2x & 2\cos 2x \end{vmatrix} = 2\cos^2 2x + 2\sin^2 2x = 2$.
</details>

---

## Simple Harmonic Motion & RLC Circuits

### Question 1
In a simple harmonic motion of a particle, the maximum displacement from the centre is called
*   A) velocity
*   B) amplitude
*   C) frequency
*   D) retardation

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) amplitude**
</details>

### Question 2
The differential equation governing the motion of a particle whose acceleration is proportional to its displacement from a fixed point and is directed towards it is
*   A) $\frac{d^2x}{dt^2} = k^2 t$
*   B) $\frac{d^2x}{dt^2} = -k^2 t$
*   C) $\frac{d^2x}{dt^2} = k^2 x$
*   D) $\frac{d^2x}{dt^2} = -k^2 x$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) $\frac{d^2x}{dt^2} = -k^2 x$**
> 
> *Negative sign indicates restoring force (directed toward equilibrium).*
</details>

### Question 3
In a simple harmonic motion of a particle, the number of oscillations per second is called the
*   A) amplitude
*   B) periodic time
*   C) frequency
*   D) none of these

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) frequency**
</details>

### Question 4
The displacement of a particle in a straight line is expressed by the equation $x = 3\cos nt + 4\sin nt$. If the motion of the particle is simple harmonic then the amplitude is
*   A) $\cos nt$
*   B) $\sin nt$
*   C) 5
*   D) $\sqrt{9\cos^2 nt + 16\sin^2 nt}$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) 5**
> 
> *Amplitude $= \sqrt{3^2 + 4^2} = 5$.*
</details>

### Question 5
A particle is executing simple harmonic motion with amplitude 5 meters and time 4 seconds. The time required by the particle in passing between points which are at distances 4 and 2 meters from the centre of force and are on the same side of it is
*   A) 0.33 sec
*   B) 0.27 sec
*   C) 1.28 sec
*   D) 0.52 sec

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) 0.27 sec**
> 
> *Using $x = A\sin(\omega t)$, $\omega = 2\pi/4 = \pi/2$.*
> $t_1 = \frac{1}{\omega}\sin^{-1}(2/5)$, $t_2 = \frac{1}{\omega}\sin^{-1}(4/5)$.
> $\Delta t = t_2 - t_1 \approx 0.27$ s.
</details>
