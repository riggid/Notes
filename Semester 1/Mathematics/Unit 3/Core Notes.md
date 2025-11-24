# [Back](../Mathematics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 3: Partial Differential Equations

## 1. Introduction to Partial Differential Equations (PDEs)

A **Partial Differential Equation (PDE)** is an equation involving an unknown function of two or more independent variables and its partial derivatives with respect to those variables.

Let $z$ be a dependent variable and $x, y$ be independent variables, so $z = z(x,y)$.
We define:
*   First-order partial derivatives: $p = \frac{\partial z}{\partial x} = z_x$ and $q = \frac{\partial z}{\partial y} = z_y$.
*   Second-order partial derivatives: $r = \frac{\partial^2 z}{\partial x^2} = z_{xx}$, $s = \frac{\partial^2 z}{\partial x \partial y} = z_{xy}$, $t = \frac{\partial^2 z}{\partial y^2} = z_{yy}$.

### **Classification of PDEs**

1.  **First-Order PDE**: An equation containing $x, y, z, p, q$ defines a first-order partial differential equation:
    $$f(x, y, z, p, q) = 0 \quad (1)$$
    This equation is **linear** if it is linear in $p$ and $q$.

2.  **Second-Order PDE**: An equation containing $x, y, z, p, q, r, s, t$ defines a second-order partial differential equation:
    $$g(x, y, z, p, q, r, s, t) = 0 \quad (2)$$
    This equation is **linear** if it is linear in $p, q, r, s, t$.

### **Examples of Fundamental PDEs**
Many physical processes are described by PDEs:
*   **One-dimensional heat conduction equation**: $u_t = u_{xx}$
*   **Laplace equation**: $u_{xx} + u_{yy} = 0$
*   **One-dimensional wave equation**: $u_{tt} = u_{xx}$

The solutions of partial differential equations are often of the form $f(x, y, z) = c$, which represents a surface in three dimensions.

## 2. Formation of Partial Differential Equations

PDEs can be formed by eliminating arbitrary constants or arbitrary functions from a given relation involving the variables and the unknown function.

### **Elimination of Arbitrary Functions**

1.  **From an equation involving a single arbitrary function**: A first-order PDE can be derived.
    > See also: [Examples](Examples.md#Example%201:%20Eliminate%20Arbitrary%20Function%20(z=f(x%C2%B2+y%C2%B2)))

2.  **From an equation involving two arbitrary functions**: A second-order PDE may often arise.
    > See also: [Examples](Examples.md#Example%202:%20Eliminate%20Arbitrary%20Functions%20(u=f(x+ct)+g(x%E2%80%93ct)))

3.  **From a relation $\phi(u, v) = 0$ where $u$ and $v$ are functions of $x, y, z$**:
    Differentiating $\phi(u, v) = 0$ partially with respect to $x$ and $y$ (and noting that $\frac{\partial\phi}{\partial u}$ and $\frac{\partial\phi}{\partial v}$ cannot both be zero for a non-trivial solution) leads to a first-order PDE of the form:
    $$P(x, y, z)p + Q(x, y, z)q = R(x, y, z)$$
    Where $P, Q, R$ are given by the Jacobians:
    $$P = \frac{\partial(u, v)}{\partial(y, z)}, \quad Q = \frac{\partial(u, v)}{\partial(z, x)}, \quad R = \frac{\partial(u, v)}{\partial(x, y)}$$
    > See also: [Examples](Examples.md#Example%203:%20Eliminate%20Arbitrary%20Function%20(phi(u,v)=0,%20u=xyz,%20v=x+y+z))

4.  **From an equation involving two arbitrary functions of specific composite arguments**:
    This often involves complex chain rule applications.
    > See also: [Examples](Examples.md#Example%204:%20Eliminate%20Arbitrary%20Function%20(f(x+y+z,%20x%C2%B2+y%C2%B2+z%C2%B2)=0))

## 3. Solution of First Order Equations: Lagrange's Equation

A linear first-order partial differential equation of the form:
$$P(x, y, z)p + Q(x, y, z)q = R(x, y, z) \quad (1)$$
is called **Lagrange's Equation**.

### **General Solution using Auxiliary Equations**

The general solution of Lagrange's equation (1) is given by $\phi(u, v) = 0$, where $\phi$ is an arbitrary function, and $u(x, y, z) = C_1$ and $v(x, y, z) = C_2$ are two linearly independent solutions of the **auxiliary (or subsidiary) equations**:
$$\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R} \quad (2)$$
Here, $C_1$ and $C_2$ are arbitrary constants. The solution can also be written as $C_2 = \phi(C_1)$ or $C_1 = \phi(C_2)$.

### **Methods for Determining Solutions of Auxiliary Equations**

1.  **Pairing Terms**: Solve by taking any two pairs of fractions from the auxiliary equations (2). This is useful when one variable is absent from a term, allowing direct integration.
    > See also: [Examples](Examples.md#Example%205:%20Lagrange's%20Equation%20(xp+yq=3z)), [Examples](Examples.md#Example%206:%20Lagrange's%20Equation%20(yzp-xzq=xy))

2.  **Using Multipliers**: Choose a set of multipliers $a, b, c$ (which can be functions of $x, y, z$) such that:
    $$\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R} = \frac{a dx + b dy + c dz}{aP + bQ + cR}$$
    *   **Case 1: $aP + bQ + cR = 0$**: If the denominator becomes zero, then the numerator $a dx + b dy + c dz = 0$. If this numerator is an exact differential, it can be integrated directly to give one solution (e.g., $u = C_1$).
    *   **Case 2: $aP + bQ + cR \neq 0$**: If the numerator $a dx + b dy + c dz = d(aP + bQ + cR)$, then the expression $\frac{a dx + b dy + c dz}{aP + bQ + cR}$ can be integrated to yield a solution (e.g., $\log(aP+bQ+cR) = C_1$).

    > See also: [Examples](Examples.md#Example%207:%20Lagrange's%20Equation%20(z(z%C2%B2+xy)(px%E2%80%93qy)%3Dx%E2%81%B4)), [Examples](Examples.md#Example%208:%20Lagrange's%20Equation%20(px(x+y)=qy(x+y)%E2%80%93...))), [Examples](Examples.md#Example%209:%20Lagrange's%20Equation%20((x%C2%B2%E2%80%93y%C2%B2%E2%80%93yz)p+%E2%80%A6))

## 4. Method of Separation of Variables

The method of **separation of variables** is a powerful technique to solve PDEs, especially linear ones with homogeneous boundary conditions. It reduces a PDE to a set of ordinary differential equations (ODEs).

### **Procedure**

1.  **Assume a Separable Solution**: For a PDE involving a function $u(x, t)$, assume the solution is separable:
    $$u(x, t) = X(x)T(t)$$
    where $X(x)$ is a function of $x$ alone and $T(t)$ is a function of $t$ alone.
2.  **Substitute and Separate**: Substitute $u$ and its partial derivatives into the PDE. Rearrange the equation so that all terms involving $x$ are on one side and all terms involving $t$ are on the other side.
    For example, if a PDE transforms to $f(X, X', X'', \dots) = g(T, T', T'', \dots)$, then:
    $$\frac{f(X, X', X'', \dots)}{X} = \frac{g(T, T', T'', \dots)}{T}$$
3.  **Equate to a Constant**: Since the left-hand side is a function of $x$ only and the right-hand side is a function of $t$ only, both sides must be equal to a common constant (separation constant), say $k$.
    $$f(X, X', X'', \dots) = k \quad \text{and} \quad g(T, T', T'', \dots) = k$$
4.  **Solve ODEs**: Solve the resulting two (or more) ODEs. The choice of $k$ (positive, negative, or zero) will depend on the physical nature of the problem and boundary conditions.
    > See also: [Examples](Examples.md#Example%2010:%20Separation%20of%20Variables%20(3u%E2%82%93x+2u%E2%82%93y=0))

### **Derivation of the One-Dimensional Heat Equation**

This section typically involves applying physical principles (Fourier's law of heat conduction, conservation of energy) to a segment of a material.
*   **Fourier's Law**: Heat flow rate $Q \propto -KA \frac{\partial u}{\partial x}$, where $K$ is thermal conductivity, $A$ is cross-sectional area, and $\frac{\partial u}{\partial x}$ is temperature gradient.
*   **Energy Conservation**: The net rate of heat retained in a small slab leads to a temperature change over time.
Combining these, for a uniform bar with insulated sides, we derive the **One-Dimensional Heat Equation**:
$$\frac{\partial u}{\partial t} = c^2 \frac{\partial^2 u}{\partial x^2}$$
where $c^2 = K/(s\rho)$ is the thermal diffusivity, with $s$ as specific heat and $\rho$ as density.

### **Solution of the Heat Equation using Separation of Variables**

Applying separation of variables $u(x,t) = X(x)T(t)$ to the heat equation leads to two ODEs:
$$\frac{d^2X}{dx^2} - kX = 0 \quad \text{and} \quad \frac{dT}{dt} - kc^2T = 0$$
The solutions depend on the sign of $k$:
*   **Case 1: $k > 0$ (e.g., $k = p^2$)**: Solutions involve exponential functions (e.g., $e^{px}, e^{-px}$) in $x$ and $e^{c^2p^2t}$ in $t$.
*   **Case 2: $k < 0$ (e.g., $k = -p^2$)**: Solutions involve trigonometric functions (e.g., $\cos(px), \sin(px)$) in $x$ and $e^{-c^2p^2t}$ in $t$. This is typically chosen for physically realistic solutions where temperature decreases over time.
    $$u(x,t) = (C_1 \cos(px) + C_2 \sin(px))C_3 e^{-c^2p^2t}$$
*   **Case 3: $k = 0$**: Solutions involve linear functions in $x$ and constant in $t$.

The appropriate solution is chosen based on initial and boundary conditions of the specific problem.

## 5. Higher-Order Linear Equations with Constant Coefficients

These PDEs resemble higher-order linear ODEs and can be solved using similar techniques involving operator notation.

### **Differential Operators**

We use the notation:
*   $D = \frac{\partial}{\partial x}$, $D' = \frac{\partial}{\partial y}$
*   $D^2 = \frac{\partial^2}{\partial x^2}$, $DD' = \frac{\partial^2}{\partial x \partial y}$, $D'^2 = \frac{\partial^2}{\partial y^2}$

A general linear homogeneous PDE with constant coefficients can be written as:
$$F(D, D')z = 0 \quad (3)$$
where $F(D, D')$ is a polynomial in $D$ and $D'$.

### **Reducible and Irreducible Forms**

*   **Reducible**: If $F(D, D')$ can be factorized into linear factors of the form $(a_i D + b_i D' + c_i)$.
*   **Irreducible**: If it cannot be factorized in this way.

We primarily focus on **reducible forms**. If all terms in $F(D, D')$ have the same total degree (e.g., $D^2, DD', D'^2$ are all degree 2), the equation is called **homogeneous in derivatives**.

### **Complementary Function (CF)**

The complementary function is the general solution of the homogeneous equation $F(D, D')z = 0$.

1.  **Distinct Linear Factors (Homogeneous $F(D,D')$: $c_i=0$)**:
    If $F(D, D') = (D - m_1 D')(D - m_2 D')\dots(D - m_n D') = 0$, where $m_i$ are distinct, the solution is:
    $$z = \phi_1(y + m_1 x) + \phi_2(y + m_2 x) + \dots + \phi_n(y + m_n x)$$
    (This is derived from factors like $a_iD + b_iD'$ or $D - (\frac{-a_i}{b_i})D'$, with $m_i = -a_i/b_i$).
    > See also: [Examples](Examples.md#Example%2011:%20Solution%20of%20Homogeneous%20PDE%20(D%C2%B2%E2%80%93D%E2%80%B2%C2%B2)z=0)

2.  **Distinct Linear Factors (Non-Homogeneous $F(D,D')$: $c_i \neq 0$)**:
    If $F(D, D') = (a_1 D + b_1 D' + c_1)(a_2 D + b_2 D' + c_2)\dots z = 0$, the general solution is the sum of terms from each factor:
    $$z = \sum_{i=1}^n e^{-(c_i x)/a_i} \phi_i(b_i x - a_i y) \quad \text{(if } a_i \neq 0 \text{)}$$
    Or if $b_i \neq 0$:
    $$z = \sum_{i=1}^n e^{-(c_i y)/b_i} \phi_i(b_i x - a_i y)$$
    > See also: [Examples](Examples.md#Example%2012:%20Solution%20of%20Homogeneous%20PDE%20(D%C2%B3%E2%80%936D%C2%B2D%E2%80%B2%2B%E2%80%A6)z=0)

3.  **Repeated Linear Factors**:
    If a factor $(aD + bD' + c)$ is repeated $m$ times, i.e., $(aD + bD' + c)^m z = 0$, then the corresponding part of the CF is:
    $$e^{-(cx)/a} [\phi_1(bx - ay) + x\phi_2(bx - ay) + \dots + x^{m-1}\phi_m(bx - ay)] \quad \text{(if } a \neq 0 \text{)}$$
    (Replace $x$ with $y$ and $a$ with $b$ if $b \neq 0$).
    > See also: [Examples](Examples.md#Example%2013:%20Solution%20of%20Homogeneous%20PDE%20(D%E2%81%B4%E2%80%932D%C2%B2D%E2%80%B2%C2%B2%2BD%E2%80%B2%E2%81%B4)z=0), [Examples](Examples.md#Example%2014:%20Solution%20of%20Homogeneous%20PDE%20(4D%C2%B3%E2%80%933DD%E2%80%B2%C2%B2%2BD%E2%80%B2%C2%B3)z=0)

### **Particular Integral (PI)**

The particular integral is a specific solution of the non-homogeneous equation $F(D, D')z = f(x, y)$ that does not contain any arbitrary functions. It's written as $z_{PI} = [F(D, D')]^{-1} f(x, y)$.

1.  **When $f(x, y) = e^{ax+by}$**:
    $$z_{PI} = \frac{1}{F(a, b)} e^{ax+by}, \quad \text{if } F(a, b) \neq 0$$
    **Case of Failure (when $F(a, b) = 0$)**:
    If $F(D, D')$ can be written as $(D-mD')^r \psi(D, D')$ and $a=m b$, then
    $$z_{PI} = \frac{x^r}{r!} e^{ax+by}$$
    More generally, when $F(a,b)=0$, we use a modified procedure involves a substitution $z = \phi(x,y)e^{ax+by}$ and operating on 1.
    > See also: [Examples](Examples.md#Example%2015:%20Particular%20Integral%20(e%E2%81%B2%E2%81%B8%2B%C2%B3%E2%81%B9)), [Examples](Examples.md#Example%2016:%20Particular%20Integral%20(e(x%2B2y)/2))

2.  **When $f(x, y) = \sin(ax+by)$ or $\cos(ax+by)$**:
    Substitute $D^2 \rightarrow -a^2$, $D'^2 \rightarrow -b^2$, $DD' \rightarrow -ab$ into $F(D,D')$.
    $$z_{PI} = \frac{1}{F(-a^2, -ab, -b^2)}\sin(ax+by), \quad \text{if } F(-a^2, -ab, -b^2) \neq 0$$
    **Case of Failure**: If the denominator becomes zero, apply the operator method by multiplying by $x$ or $y$ and differentiating or by more advanced techniques.
    > See also: [Examples](Examples.md#Example%2017:%20Particular%20Integral%20(sin(x-2y)))

3.  **When $f(x, y) = x^m y^n$ (or a polynomial)**:
    Expand $[F(D, D')]^{-1}$ in an infinite series, typically using binomial expansion like $(1+X)^{-1} \approx 1 - X + X^2 - \dots$, and then operate on $x^m y^n$.
    *   If $F(D, D')$ does not contain a constant term, expand in powers of $(D')^{-1}D$ if $m < n$, or $D^{-1}D'$ if $m > n$.
    *   Remember $D^{-1}$ means $\int (\dots)dx$ (treating $y$ as constant) and $(D')^{-1}$ means $\int (\dots)dy$ (treating $x$ as constant).
    > See also: [Examples](Examples.md#Example%2018:%20Particular%20Integral%20(x%C2%B2%2By%C2%B2)), [Examples](Examples.md#Example%2019:%20Particular%20Integral%20(3x%2B2y))

4.  **General Procedure (for specific reducible factors)**:
    If $f(x, y)$ is not of the above forms or in case of failure, and $F(D, D')$ is reducible, we can process one factor at a time using the Lagrange's equation approach.
    For a factor $(a_1 D + b_1 D' + c_1)$, for $f(x,y)$, the particular integral is:
    $$z = \frac{1}{a_1} \int F(x, c) dx$$
    where $c = b_1 x - a_1 y$ and $F(x, c)$ is $f(x, y)$ with $y$ replaced using $c = b_1 x - a_1 y$. This integral is then evaluated.
    > See also: [Examples](Examples.md#Example%2020:%20Particular%20Integral%20(ye%E2%81%B8))

## 6. Applications of Partial Differential Equations

PDEs are fundamental to describing a wide range of physical phenomena:
*   **Fluid Mechanics**: Navier-Stokes equations
*   **Solid Mechanics**: Equations of elasticity
*   **Heat Transfer**: Heat equation
*   **Electromagnetic Theory**: Maxwell's equations
*   **Quantum Mechanics**: Schrödinger equation
*   **Wave Phenomena**: Wave equation

Many of these problems involve **Initial Boundary Value Problems (IBVPs)**, where the PDE is solved subject to initial conditions (state at starting time) and/or boundary conditions (state at edges of the region). The method of separation of variables is particularly effective for linear IBVPs with homogeneous boundary conditions.

---
# [Back](../Mathematics.md)