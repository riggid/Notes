---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***
# Unit 2: Higher-Order Differential Equations

## Linear Differential Equations

A linear differential equation is one where the dependent variable $y$ and its derivatives appear only in the first degree and are not multiplied together.

The general **$n^{th}$-order linear differential equation with constant coefficients** has the form:
$$\frac{d^{n}y}{dx^{n}}+k_{1}\frac{d^{n-1}y}{dx^{n-1}}+k_{2}\frac{d^{n-2}y}{dx^{n-2}}+\cdot\cdot\cdot+k_{n}y=X$$
where $k_1, k_2, ..., k_n$ are constants and $X$ is a function of $x$.

The **complete solution** (C.S.) is the sum of two parts:
$$y = C.F. + P.I.$$
1.  **Complementary Function (C.F.)**: The complete solution to the homogeneous equation (where $X=0$). It will contain $n$ arbitrary constants.
2.  **Particular Integral (P.I.)**: A specific solution to the non-homogeneous equation (with $X$) that contains no arbitrary constants.

---
## Operator D

The symbol $D$ stands for the operation of differentiation with respect to $x$.
$$Dy = \frac{dy}{dx}, \quad D^2y = \frac{d^2y}{dx^2}, \quad ... \quad D^ny = \frac{d^ny}{dx^n}$$
The $n^{th}$-order equation can be written in symbolic form as $f(D)y = X$, where $f(D) = D^{n}+k_{1}D^{n-1}+\cdot\cdot\cdot+k_{n}$.

---
## Rules for Finding the Complementary Function (C.F.)

To find the C.F., we solve the **Auxiliary Equation (A.E.)** $f(m) = 0$, which is found by replacing $D$ with $m$.
$$m^{n}+k_{1}m^{n-1}+k_{2}m^{n-2}+\cdot\cdot\cdot+k_{n}=0$$
Let the roots of the A.E. be $m_1, m_2, ..., m_n$. The form of the C.F. depends on the nature of these roots.

**Case I: Roots are Real and Distinct**
If all roots $m_1, m_2, ..., m_n$ are real and different, the C.F. is:
$$y_c = c_1 e^{m_1 x} + c_2 e^{m_2 x} + \cdots + c_n e^{m_n x}$$

*See [[Examples#example-1-cf-real-distinct-roots|Example 1]] and [[Examples#example-2-cf-real-distinct-roots-ivp|Example 2]].*

**Case II: Roots are Real and Repeated**
- If a root $m_1$ is repeated twice (i.e., $m_1 = m_2$), the C.F. for those roots is:
  $$y_c = (c_1 + c_2 x) e^{m_1 x}$$
 
- If a root $m_1$ is repeated three times, the C.F. is:
  $$y_c = (c_1 + c_2 x + c_3 x^2) e^{m_1 x}$$
 
*See [[Examples#example-3-cf-repeated-roots|Example 3]] and [[Examples#example-4-cf-repeated-roots-ivp|Example 4]].*

**Case III: Roots are Complex (Imaginary)**
- If a pair of roots is complex, $m = \alpha \pm i\beta$, the C.F. for that pair is:
  $$y_c = e^{\alpha x} (C_1 \cos(\beta x) + C_2 \sin(\beta x))$$
  
*See [[Examples#example-5-cf-complex-roots|Example 5]] and [[Examples#example-6-cf-complex-roots-ivp|Example 6]].*

**Case IV: Roots are Complex and Repeated**
- If a complex pair $m = \alpha \pm i\beta$ is repeated twice, the C.F. is:
  $$y_c = e^{\alpha x} [(c_1 + c_2 x) \cos(\beta x) + (c_3 + c_4 x) \sin(\beta x)]$$
  
---
## Rules for Finding the Particular Integral (P.I.)

The P.I. is found using the inverse operator: $y_p = \frac{1}{f(D)} X$. The method depends on the form of $X$.

**Case I: $X = e^{ax}$**
Replace $D$ with $a$:
$$P.I. = \frac{1}{f(D)} e^{ax} = \frac{1}{f(a)} e^{ax}, \quad \text{provided } f(a) \neq 0$$
**If $f(a) = 0$ (Case of Failure):**
If $a$ is a root of the A.E. repeated $r$ times, the rule is:
$$P.I. = \frac{x^r}{f^{(r)}(a)} e^{ax} \quad \text{or} \quad P.I. = x^r \frac{1}{\phi(a)} e^{ax} \text{ where } f(D) = (D-a)^r \phi(D)$$
*See [[Examples#example-7-pi-case-i-eax|Example 7]] and [[Examples#example-8-pi-case-i-failure-case|Example 8]].*

**Case II: $X = \sin(ax+b)$ or $\cos(ax+b)$**
Replace $D^2$ with $-a^2$ in $f(D^2)$:
$$P.I. = \frac{1}{f(D^2)} \sin(ax+b) = \frac{1}{f(-a^2)} \sin(ax+b), \quad \text{provided } f(-a^2) \neq 0$$
**If $f(-a^2) = 0$ (Case of Failure):**
The rule is:
$$P.I. = x \frac{1}{f'(-a^2)} \sin(ax+b)$$
*See [[Examples#example-9-pi-case-ii-cosax|Example 9]] and [[Examples#example-10-pi-case-ii-failure-case|Example 10]].*

**Case III: $X = x^m$**
Expand $[f(D)]^{-1}$ in ascending powers of $D$ using binomial expansion, and operate on $x^m$. Stop after the $D^m$ term, as higher derivatives of $x^m$ are zero.
$$P.I. = [f(D)]^{-1} x^m = (a_0 + a_1 D + a_2 D^2 + \cdots + a_m D^m) x^m$$
*See [[Examples#example-11-pi-case-iii-xm|Example 11]].*

**Case IV: $X = e^{ax} V(x)$**
Use the **exponential shift theorem**. Move $e^{ax}$ to the left and replace $D$ with $(D+a)$:
$$P.I. = \frac{1}{f(D)} [e^{ax} V(x)] = e^{ax} \frac{1}{f(D+a)} V(x)$$
Then, solve for $V(x)$ using one of the other cases.
*See [[Examples#example-12-pi-case-iv-eaxv|Example 12]] and [[Examples#example-15-full-solution-case-iv|Example 15]].*

**Case V: $X$ is any other function**
Resolve $\frac{1}{f(D)}$ into partial fractions and apply each fraction to $X$:
$$P.I. = \left( \frac{A_1}{D-m_1} + \frac{A_2}{D-m_2} + \cdots \right) X$$
Then use the formula:
$$\frac{1}{D-a} X = e^{ax} \int X e^{-ax} dx$$

*This method is also used for $X = \sec(ax)$ or $\tan(ax)$. See [[Examples#example-16-pi-case-v-secax|Example 16]].*
*Note: An alternative for this case is the **Method of Variation of Parameters**.*

---
## Linear Equations with Variable Coefficients

### Cauchy's Homogeneous Linear Equation
An equation of the form:
$$x^{n}\frac{d^{n}y}{dx^{n}}+a_{1}x^{n-1}\frac{d^{n-1}y}{dx^{n-1}}+\cdot\cdot\cdot+a_{n}y=X$$

It is reduced to a linear equation with constant coefficients by the substitution:
$$x = e^z \quad \text{or} \quad z = \log x$$

This substitution transforms the operators as follows:
- $x\frac{dy}{dx} = Dy$
- $x^2\frac{d^2y}{dx^2} = D(D-1)y$
- $x^3\frac{d^3y}{dx^3} = D(D-1)(D-2)y$
where $D = \frac{d}{dz}$.
*See [[Examples#example-17-cauchy-euler-equation|Example 17]] and [[Examples#example-18-cauchy-euler-equation-pi|Example 18]].*

### Legendre's Homogeneous Linear Equation
An equation of the form:
$$(a+bx)^{n}\frac{d^{n}y}{dx^{n}}+a_{1}(a+bx)^{n-1}\frac{d^{n-1}y}{dx^{n-1}}+\cdot\cdot\cdot+a_{n}y=X$$

It is reduced to a linear equation with constant coefficients by the substitution:
$$a+bx = e^z \quad \text{or} \quad z = \log(a+bx)$$

This substitution transforms the operators as follows:
- $(a+bx)\frac{dy}{dx} = bDy$
- $(a+bx)^2\frac{d^2y}{dx^2} = b^2 D(D-1)y$
- $(a+bx)^3\frac{d^3y}{dx^3} = b^3 D(D-1)(D-2)y$
where $D = \frac{d}{dz}$.
*See [[Examples#example-19-legendres-equation|Example 19]].*

---
## Applications of Linear Differential Equations

### 1. L-C-R Series Circuit 

Based on Kirchhoff's voltage law ($E_L + E_R + E_C = E$), the differential equation for the charge $q(t)$ on the capacitor is:
$$L\frac{d^2q}{dt^2} + R\frac{dq}{dt} + \frac{1}{C}q = E(t)$$

Where $i = \frac{dq}{dt}$, $L$ is inductance (Henrys), $R$ is resistance (Ohms), $C$ is capacitance (Farads), and $E(t)$ is the electromotive force (Volts).
*See [[Examples#example-20-lcr-circuit-setup|Example 20]] and [[Examples#example-21-lcr-circuit-full-solution|Example 21]].*

### 2. Mass-Spring System (Mechanical Vibrations) 


[Image of a mass-spring system diagram]

Based on Newton's second law, the equation for the displacement $x(t)$ of a mass $m$ on a spring is:
$$m\frac{d^2x}{dt^2} + c\frac{dx}{dt} + kx = F(t)$$

Where $m$ is mass, $c$ is the damping constant, $k$ is the spring constant, and $F(t)$ is the external force.

**Free, Undamped Oscillations (Simple Harmonic Motion):**
If $c=0$ and $F(t)=0$, the equation becomes:
$$\frac{d^2x}{dt^2} + \omega^2 x = 0, \quad \text{where } \omega^2 = k/m$$

The solution is $x(t) = c_1 \cos(\omega t) + c_2 \sin(\omega t)$.
- **Amplitude:** $A = \sqrt{c_1^2 + c_2^2}$
- **Period:** $T = \frac{2\pi}{\omega}$
- **Natural Frequency:** $f = 1/T$
*See [[Examples#example-22-mass-spring-system-full-solution|Example 22]].*
***
# [[../Mathematics|Back]]