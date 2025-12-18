---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 4: Special Functions

## 1. Beta and Gamma Functions

Beta and Gamma functions are **improper integrals** that play a crucial role in mathematical analysis, especially in evaluating definite integrals involving powers and trigonometric functions.

### 1.1 The Gamma Function
The Gamma function, denoted by $\Gamma(\alpha)$, is defined for $\alpha > 0$ by the convergent improper integral:
$$ \Gamma(\alpha) = \int_0^{\infty} x^{\alpha-1} e^{-x} \, dx $$

**Key Properties and Identities:**
1.  **Fundamental Recurrence**: $\Gamma(\alpha+1) = \alpha \Gamma(\alpha)$.
2.  **Factorial Relation**: If $n$ is a positive integer, $\Gamma(n+1) = n!$.
    *   $\Gamma(1) = 1$.
3.  **Value at Half-Integer**: $\Gamma(1/2) = \sqrt{\pi}$.
4.  **Extension to Negative Values**: Since $\Gamma(\alpha) = \frac{\Gamma(\alpha+1)}{\alpha}$, we can define Gamma for negative non-integers. (It is undefined for negative integers).

### 1.2 The Beta Function
The Beta function, denoted by $\beta(m, n)$, is defined for $m>0, n>0$ by:
$$ \beta(m, n) = \int_0^1 x^{m-1} (1-x)^{n-1} \, dx $$

**Alternative Forms:**
1.  **Trigonometric Form**:
    $$ \beta(m, n) = 2 \int_0^{\pi/2} \sin^{2m-1}\theta \cos^{2n-1}\theta \, d\theta $$
    This forms the basis for evaluating integrals of type $\int_0^{\pi/2} \sin^p\theta \cos^q\theta \, d\theta = \frac{1}{2} \beta\left(\frac{p+1}{2}, \frac{q+1}{2}\right)$.
2.  **Improper Integral Form**:
    $$ \beta(m, n) = \int_0^{\infty} \frac{y^{m-1}}{(1+y)^{m+n}} \, dy $$

**Key Properties:**
1.  **Symmetry**: $\beta(m, n) = \beta(n, m)$.
2.  **Relation to Gamma Function**:
    $$ \beta(m, n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)} $$

*See [[Examples#example-1:-evaluation-using-beta-gamma-relation|Example 1]] and [[Questions#13.-evaluate-$\int_0^{\pi/2}-\sqrt{\tan-x}-\,-dx$.|Q&A Q13]].*

### 1.3 Important Theorems
**Legendre's Duplication Formula**:
$$ \Gamma(m)\Gamma(m + 1/2) = \frac{\sqrt{\pi}}{2^{2m-1}} \Gamma(2m) $$

**Euler's Reflection Formula**:
$$ \Gamma(p)\Gamma(1-p) = \frac{\pi}{\sin(p\pi)}, \quad 0 < p < 1 $$

***

## 2. Bessel Functions

Bessel functions appear in solutions to boundary value problems with cylindrical symmetry (e.g., heat flow in a cylinder, vibration of a circular drum). They arise from Bessel's Differential Equation.

### 2.1 Bessel's Differential Equation
It is a second-order linear ordinary differential equation of the form:
$$ x^2 \frac{d^2 y}{dx^2} + x \frac{dy}{dx} + (x^2 - p^2)y = 0 $$
or
$$ x^2 y'' + xy' + (x^2 - p^2)y = 0 $$
where $p$ is a constant called the **order** of the Bessel function.

### 2.2 Bessel Function of the First Kind ($J_p(x)$)
The solution obtained by the method of Frobenius (series solution) is non-singular at $x=0$.
$$ J_p(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+p+1)} \left( \frac{x}{2} \right)^{2m+p} $$

**General Solution of Bessel's Equation**:
1.  If $p$ is not an integer: $y(x) = c_1 J_p(x) + c_2 J_{-p}(x)$.
2.  If $p = n$ (integer): $J_{-n}(x)$ is linearly dependent on $J_n(x)$. Specifically:
    $$ J_{-n}(x) = (-1)^n J_n(x) $$
    In this case, a second linearly independent solution $Y_n(x)$ (Bessel function of the second kind or Neumann function) is needed: $y(x) = c_1 J_n(x) + c_2 Y_n(x)$.

### 2.3 Generating Function and Jacobi Series
*   **Generating Function**: The generating function for the Bessel function $J_n(x)$ is given by $e^{\frac{x}{2}(t - \frac{1}{t})} = \sum_{n=-\infty}^{\infty} J_n(x) t^n$.
    *   This formula allows deriving various properties and recurrence relations.
*   **Jacobi Series**: An expansion involving Bessel functions, often used in wave propagation and signal processing.

### 2.4 Recurrence Relations
These identities are useful for computing values and derivatives of Bessel functions.
1.  $\frac{d}{dx} [x^p J_p(x)] = x^p J_{p-1}(x)$
2.  $\frac{d}{dx} [x^{-p} J_p(x)] = -x^{-p} J_{p+1}(x)$
3.  $2J_p'(x) = J_{p-1}(x) - J_{p+1}(x)$
4.  $2p J_p(x) = x [J_{p-1}(x) + J_{p+1}(x)]$
5.  $x J_p'(x) = p J_p(x) - x J_{p+1}(x)$
6.  $x J_p'(x) = x J_{p-1}(x) - p J_p(x)$

### 2.4 Elementary Bessel Functions (Half-Integer Orders)
When the order is half an odd integer ($p = n + 1/2$), Bessel functions reduce to elementary functions involving sines and cosines.
*   **$J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x$**
*   **$J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}} \cos x$**
*   **$J_{3/2}(x) = \sqrt{\frac{2}{\pi x}} \left( \frac{\sin x}{x} - \cos x \right)$**

*See [[Examples#example-3:-prove-j_1/2-identity|Example 3]] and [[Questions#10.-prove-that-$j_{-1/2}(x|Q&A Q10]]-=-\sqrt{\frac{2}{\pi-x}}-\cos-x$.).*
