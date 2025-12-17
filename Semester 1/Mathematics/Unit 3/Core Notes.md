---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]

# Unit 3: Partial Differential Equations

## 1. Introduction to Partial Differential Equations (PDEs)

A **Partial Differential Equation (PDE)** is an equation involving an unknown function of two or more independent variables and its partial derivatives with respect to those variables.

Let $z$ be a dependent variable and $x, y$ be independent variables, i.e., $z = f(x, y)$.
The partial derivatives are denoted as systematically:
*   **First Order derivatives**:
    *   $p = \frac{\partial z}{\partial x} = z_x$
    *   $q = \frac{\partial z}{\partial y} = z_y$
*   **Second Order derivatives**:
    *   $r = \frac{\partial^2 z}{\partial x^2} = z_{xx}$
    *   $s = \frac{\partial^2 z}{\partial x \partial y} = z_{xy}$
    *   $t = \frac{\partial^2 z}{\partial y^2} = z_{yy}$

A PDE of the first order involving $x, y, z, p, q$ can be written generally as:
$$ f(x, y, z, p, q) = 0 $$

A PDE of second order involving $x, y, z, p, q, r, s, t$ is written as:
$$ g(x, y, z, p, q, r, s, t) = 0 $$

### 1.1 Order and Degree
*   **Order**: The order of the highest derivative appearing in the equation.
*   **Degree**: The power of the highest order derivative occurring in the equation, provided the equation is free from radicals and fractions w.r.t derivatives.
*   **Linear PDE**: If the dependent variable $z$ and its derivatives appear only in the first degree and are not multiplied together, the PDE is linear.

***

## 2. Formation of Partial Differential Equations

Partial differential equations can be formed either by the elimination of arbitrary constants or by the elimination of arbitrary functions.

### 2.1 Elimination of Arbitrary Constants
Consider a relation $f(x, y, z, a, b) = 0$ involving two arbitrary constants $a$ and $b$. To form a PDE:
1.  Differentiate the given relation partially with respect to $x$ to get an equation involving $p$.
2.  Differentiate the given relation partially with respect to $y$ to get an equation involving $q$.
3.  Eliminate the constants $a$ and $b$ using the original equation and the two derived equations.
Since there are two constants to be eliminated from three equations, we typically get a first-order PDE.

*See [[Examples#example-1:-formation-by-eliminating-constants|Example 1]] for a detailed walkthrough.*

### 2.2 Elimination of Arbitrary Functions
Consider a relation $z = f(u)$ where $u$ is a known function of $x, y$ (e.g., $u = x^2 + y^2$), or a more general implicit form $\phi(u, v) = 0$ where $u, v$ are functions of $x, y, z$.

**Case A: $z = f(u(x, y))$**
Differentiating w.r.t $x$:
$$ p = \frac{\partial z}{\partial x} = f'(u) \frac{\partial u}{\partial x} $$
Differentiating w.r.t $y$:
$$ q = \frac{\partial z}{\partial y} = f'(u) \frac{\partial u}{\partial y} $$
Eliminating $f'(u)$ between these gives the PDE.

**Case B: $\phi(u, v) = 0$ where $u = u(x, y, z), v = v(x, y, z)$**
Differentiating $\phi(u, v) = 0$ with respect to $x$ (keeping $y$ constant, $z$ depends on $x$):
$$ \frac{\partial \phi}{\partial u} \left( \frac{\partial u}{\partial x} + p \frac{\partial u}{\partial z} \right) + \frac{\partial \phi}{\partial v} \left( \frac{\partial v}{\partial x} + p \frac{\partial v}{\partial z} \right) = 0 $$
Differentiating with respect to $y$:
$$ \frac{\partial \phi}{\partial u} \left( \frac{\partial u}{\partial y} + q \frac{\partial u}{\partial z} \right) + \frac{\partial \phi}{\partial v} \left( \frac{\partial v}{\partial y} + q \frac{\partial v}{\partial z} \right) = 0 $$
Eliminating $\frac{\partial \phi}{\partial u}$ and $\frac{\partial \phi}{\partial v}$ leads to a determinant form, which expands to:
$$ P p + Q q = R $$
where
$$ P = \frac{\partial(u, v)}{\partial(y, z)}, \quad Q = \frac{\partial(u, v)}{\partial(z, x)}, \quad R = \frac{\partial(u, v)}{\partial(x, y)} $$

*See [[Examples#example-2:-formation-by-eliminating-arbitrary-functions|Example 2]] and [[Questions#1.-form-the-pde-from-$z-=-y^2-+-2f(1/x-+-\log-y|Q&A Q1]]$.).*

***

## 3. Linear PDEs of First Order: Lagrange's Equation

A linear PDE of the first order is of the form:
$$ P(x, y, z)p + Q(x, y, z)q = R(x, y, z) $$
This is known as **Lagrange's Linear Equation**.

### 3.1 Method of Multipliers / Grouping (Lagrange's Auxiliary Equations)
The general solution of $Pp + Qq = R$ is $\phi(u, v) = 0$, where $u(x, y, z) = c_1$ and $v(x, y, z) = c_2$ are two independent solutions of the **Lagrange's Auxiliary Equations (or Subsidiary Equations)**:

$$ \frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R} $$

To find $u$ and $v$:
1.  **Method of Grouping**: Take any two fractions where variables can be separated easily (e.g., $dx/x = dy/y$) and integrate.
2.  **Method of Multipliers**: Choose multipliers $(l, m, n)$ such that $lP + mQ + nR = 0$ or is an exact differential. If the denominator becomes zero, then the numerator $l dx + m dy + n dz = 0$, which can be integrated.

*See [[Examples#example-3:-lagrange's-method---grouping|Example 3]] and [[Questions#6.-solve-$2yzp-+-zxq-=-3xy$.|Q&A Q6]].*

***

## 4. Higher Order Linear PDEs with Constant Coefficients

An $n$-th order linear PDE with constant coefficients has the form:
$$ \left( A_0 D^n + A_1 D^{n-1}D' + \dots + A_n (D')^n \right) z = f(x, y) $$
where $D = \frac{\partial}{\partial x}$ and $D' = \frac{\partial}{\partial y}$.

The complete solution is:
$$ z = \text{Complementary Function (C.F.)} + \text{Particular Integral (P.I.)} $$

### 4.1 Complementary Function (C.F.)
Consider the homogeneous part $F(D, D')z = 0$.
The auxiliary equation is formed by replacing $D$ with $m$ and $D'$ with $1$ (or treating it as such to solve for $m$ in $D - mD'$ factors).
Specifically, if the operator can be factorized into $(D - m_1 D')(D - m_2 D')...z = 0$, the roots $m_1, m_2, \dots$ determine the C.F.

1.  **Distinct Roots ($m_1 \neq m_2 \dots$)**:
    $$ \text{C.F.} = \phi_1(y + m_1 x) + \phi_2(y + m_2 x) + \dots $$
2.  **Repeated Roots ($m_1 = m_2 = m$)**:
    $$ \text{C.F.} = \phi_1(y + mx) + x \phi_2(y + mx) $$
    (If repeated 3 times, add $x^2 \phi_3, etc.)

*Note: If a factor is just $D$, it corresponds to $m \to \infty$ or just strict integration. Usually, we handle factors like $(aD + bD')$. The solution for $(aD + bD')z=0$ is $\phi(bx - ay)$.*
Standard notation: Factors usually extracted as $(D - mD')$. If root is $m$, factor is $(D-mD')$, solution $\phi(y+mx)$.

### 4.2 Particular Integral (P.I.)
$$ \text{P.I.} = \frac{1}{F(D, D')} f(x, y) $$

**Case 1: $f(x, y) = e^{ax + by}$**
Substitute $D = a$ and $D' = b$.
$$ \text{P.I.} = \frac{1}{F(a, b)} e^{ax+by}, \quad \text{provided } F(a, b) \neq 0 $$
If $F(a, b) = 0$ (Case of Failure):
Multiply by $x$ and differentiate the denominator w.r.t $D$. Repeat if necessary.
Or use the general formula for failure: $\frac{1}{(bD - aD')^n} \phi(ax+by) = \frac{x^n}{b^n n!} \phi(ax+by)$.

**Case 2: $f(x, y) = \sin(ax + by)$ or $\cos(ax + by)$**
Substitute $D^2 = -a^2$, $D D' = -ab$, $(D')^2 = -b^2$.
$$ \text{P.I.} = \frac{1}{F(D^2, DD', D'^2)} \sin(ax+by) $$
(Do not replace $D$ or $D'$ directly, only second order terms).

**Case 3: $f(x, y) = x^m y^n$ (Polynomial)**
Expand the inverse operator $[F(D, D')]^{-1}$ in ascending powers of $D'/D$ (if $n$ small) or $D/D'$ (if $m$ small).
$$ \frac{1}{D^n (1 + \dots)} x^m y^n = D^{-n} (1 + \dots)^{-1} x^m y^n $$
Use Binomial expansion $(1+X)^{-1} = 1 - X + X^2 - \dots$.

**Case 4: General Case $f(x, y)$**
Factorize $F(D, D')$ into linear factors $(D - m_1 D')(D - m_2 D')\dots$.
Resolve into partial fractions or apply successively:
$$ \frac{1}{D - mD'} f(x, y) = \int f(x, c - mx) dx $$
where $y$ is replaced by $c - mx$ for integration, and after integration $c$ is replaced back by $y + mx$.

*See [[Examples#example-5:-higher-order-pde-solution|Example 5]] and [[Questions#13.-solve-$(d^2-+-dd'---2d'^2|Q&A Q13]]z-=-5e^{x+2y}$.).*

***

## 5. Applications of PDEs

### 5.1 One-Dimensional Heat Equation
The heat equation describes the distribution of heat (temperature variations) in a given region over time.
For a rod of length $L$, the temperature $u(x, t)$ is governed by:
$$ \frac{\partial u}{\partial t} = \alpha^2 \frac{\partial^2 u}{\partial x^2} $$
where $\alpha^2 = \frac{k}{c\rho}$ is the **thermal diffusivity**.
($k =$ thermal conductivity, $c =$ specific heat, $\rho =$ density).

### 5.2 Method of Separation of Variables
To solve $u_t = \alpha^2 u_{xx}$, we assume a solution of the form:
$$ u(x, t) = X(x) T(t) $$
Substituting into the PDE:
$$ X T' = \alpha^2 X'' T \implies \frac{X''}{X} = \frac{1}{\alpha^2} \frac{T'}{T} = k \text{ (constant)} $$

Three cases for $k$:
1.  **$k > 0$ ($k=p^2$)**: $X = c_1 e^{px} + c_2 e^{-px}$, $T = c_3 e^{\alpha^2 p^2 t}$. (Unstable, temperature rises indefinitely).
2.  **$k = 0$**: $X = c_1 x + c_2$, $T = c_3$. (Linear steady state).
3.  **$k < 0$ ($k=-p^2$)**:
    $$ X'' + p^2 X = 0 \implies X(x) = c_1 \cos(px) + c_2 \sin(px) $$
    $$ T' + \alpha^2 p^2 T = 0 \implies T(t) = c_3 e^{-\alpha^2 p^2 t} $$
    **Solution**: $u(x, t) = (A \cos px + B \sin px) e^{-\alpha^2 p^2 t}$.

This form ($k < 0$) is the only physically realistic solution for transient heat conduction (decaying over time). Examples involve applying boundary conditions (e.g., $u(0, t)=0, u(L, t)=0$) to find $p$ and initial conditions to find coefficients using Fourier series.

*See [[Examples#example-6:-separation-of-variables---heat-eq|Example 6]] and [[Questions#10.-solve-$x^2-\frac{\partial-u}{\partial-x}-+-y^2-\frac{\partial-u}{\partial-y}-=-0$.|Q&A Q10]].*