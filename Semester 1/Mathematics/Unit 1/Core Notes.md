# [Back](../Mathematics.md)
# Unit 1: Partial Differentiation

## Function of Several Variables

We are extending the concepts of calculus from functions of a single variable, $y=f(x)$, to functions of two or more variables.

A real-valued function of two variables, $x$ and $y$, is a rule that assigns a real value $z$ to each point $(x,y)$ in a region of the $xy$-plane. This is written as:
$$z=f(x,y)$$
Here, $x$ and $y$ are the **independent variables**, and $z$ is the **dependent variable**.

In general, a real-valued function of $n$ variables is written as:
$$z=f(x_{1},x_{2},...,x_{n})$$
where $x_1, x_2, ..., x_n$ are the $n$ independent variables. This function $f$ maps a point in an $n$-dimensional space ($\mathbb{R}^n$) to a real number ($\mathbb{R}$).

- **Explicit Function**: A function defined as $z = f(x_1, ..., x_n)$. Its value can be directly calculated given the independent variables.
- **Implicit Function**: A function defined by a relation like $\phi(z, x_1, ..., x_n) = 0$. The dependent variable cannot be directly isolated.

### Functions of Two Variables

For a function $z=f(x,y)$:

- **Domain**: The set of all points $(x, y)$ for which $f(x,y)$ is defined.
- **Range**: The set of all possible corresponding values of $z$.

**Examples of Domain and Range:**
1. $z=\sqrt{1-x^{2}-y^{2}}$: Domain is $x^{2}+y^{2}\le1$ (a unit disk); Range is $[0, 1]$.
2. $z=\frac{1}{x^{2}-y^{2}}$: Domain is all points where $y \neq \pm x$; Range is $\mathbb{R}$.
3. $z=\log(x+y)$: Domain is all points where $x+y > 0$ (region above the line $y=-x$); Range is $\mathbb{R}$.

***

## Limits of Functions of Two Variables

A function $f(x,y)$ has a limit $L$ as $(x,y)$ approaches $(x_0, y_0)$ if for any small positive number $\epsilon > 0$, we can find a small positive number $\delta > 0$ such that:
$$|f(x,y)-L|<\epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_{0})^{2}+(y-y_{0})^{2}}<\delta$$
This is written as:
$$\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L$$

**Remarks:**
1. If a limit exists, it is **unique**.
2. For the limit to exist, it must be the **same along all possible paths** of approach to $(x_0, y_0)$. If the limit evaluates to different values along different paths, the limit **does not exist**.

### Properties of Limits
If $\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L_{1}$ and $\lim_{(x,y)\rightarrow(x_{0},y_{0})}g(x,y)=L_{2}$, then standard limit laws apply for scalar multiplication, addition, subtraction, multiplication, and division (provided $L_2 \neq 0$).

### Example: Non-existent Limit
The limit $\lim_{(x,y)\rightarrow(0,0)}\frac{xy}{x^{2}+y^{2}}$ does not exist because along the path $y=mx$, the limit depends on the slope $m$:
$$ \lim_{x\rightarrow0}\frac{x(mx)}{x^{2}+(mx)^{2}} = \lim_{x\rightarrow0}\frac{mx^{2}}{x^{2}(1+m^{2})} = \frac{m}{1+m^{2}} $$
*More non-existent limit examples are in [ Example 1](Semester%201/Mathematics/Unit%201/Examples.md#Example%201:%20Non-existent%20Limits).*

***

## Partial Differentiation

A **partial derivative** of a function of several variables is its derivative with respect to one of those variables, with the others held constant. It measures the rate of change of the function along a specific direction parallel to the coordinate axes.

- Partial derivative of $z=f(x,y)$ with respect to $x$ (holding $y$ constant):
$$ \frac{\partial z}{\partial x} = f_x = \lim_{h\rightarrow0}\frac{f(x+h,y)-f(x,y)}{h} $$
- Partial derivative of $z=f(x,y)$ with respect to $y$ (holding $x$ constant):
$$ \frac{\partial z}{\partial y} = f_y = \lim_{h\rightarrow0}\frac{f(x,y+h)-f(x,y)}{h} $$

### Higher-Order Partial Derivatives
Higher-order partial derivatives are obtained by differentiating the first-order partial derivatives.

- **Pure Second-Order Derivatives**:
    - $f_{xx} = \frac{\partial^{2}z}{\partial x^{2}} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right)$
    - $f_{yy} = \frac{\partial^{2}z}{\partial y^{2}} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right)$
- **Mixed Second-Order Derivatives**:
    - $f_{xy} = \frac{\partial^{2}z}{\partial y\partial x} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right)$ (differentiate w.r.t. x first, then y)
    - $f_{yx} = \frac{\partial^{2}z}{\partial x\partial y} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)$ (differentiate w.r.t. y first, then x)

**Clairaut's Theorem (Equality of Mixed Partials)**: If the mixed second-order partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk, then the order of differentiation does not matter, i.e., $f_{xy} = f_{yx}$. This simplifies calculations significantly.

*For differentiation practice, see [Example 2](Semester%201/Mathematics/Unit%201/Examples.md#Example%202:%20Second-Order%20Partial%20Derivatives), [Example 3](Semester%201/Mathematics/Unit%201/Examples.md#Example%203:%20First%20and%20Second%20Partial%20Derivatives), and [Q&A Q1 (First Order)](Semester%201/Mathematics/Unit%201/Q&A.md#1.%20Find%20all%20the%20first-order%20partial%20derivatives%20of%20the%20following%20function:), [Q&A Q3](Semester%201/Mathematics/Unit%201/Q&A.md#3.%20Find%20all%20the%20first-order%20partial%20derivatives%20of%20the%20following%20function:), [Q&A Q4](Semester%201/Mathematics/Unit%201/Q&A.md#4.%20Find%20all%20the%20first-order%20partial%20derivatives%20of%20the%20following%20function:).*

### Geometric Interpretation
- $\frac{\partial z}{\partial x}$ represents the slope of the tangent line to the surface $z=f(x,y)$ in the positive $x$-direction (for a fixed $y$).
- $\frac{\partial z}{\partial y}$ represents the slope of the tangent line to the surface $z=f(x,y)$ in the positive $y$-direction (for a fixed $x$).
- $f_{xx}$ and $f_{yy}$ describe the **concavity** or curvature of the surface in the $x$ and $y$ directions, respectively. (e.g., $f_{xx}>0 \implies$ concave up in the $x$ direction).
- $f_{xy}$ describes how the slope in one direction (say, $x$) changes as you move in the other direction ($y$).

***

## Chain Rule for Functions of Several Variables

The chain rule is essential when dealing with composite functions, where the independent variables of a function are themselves functions of other variables.

### Total Derivative
If $u=f(x,y)$ where $x=\phi(t)$ and $y=\psi(t)$, then $u$ is indirectly a function of $t$ alone. The derivative $\frac{du}{dt}$ is the **total derivative**.

**Chain Rule for Total Derivative**:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\cdot\frac{dx}{dt}+\frac{\partial u}{\partial y}\cdot\frac{dy}{dt} $$
For three variables:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt}+\frac{\partial u}{\partial z}\frac{dz}{dt} $$
*See [Example 4](Semester%201/Mathematics/Unit%201/Examples.md#Example%204:%20Total%20Derivative), [Q&A Q2](Semester%201/Mathematics/Unit%201/Q&A.md#2.%20If%20$u=\sin^{-1}(x-y)$%20where%20$x=3t$%20and%20$y=4t^{3}$,%20then%20show%20that:), and [Q&A Q6](Semester%201/Mathematics/Unit%201/Q&A.md#6.%20Find%20$\frac{du}{dx}$%20if:%20$u=\cos(x^{2}+y^{2})$%20and%20$a^{2}x^{2}+b^{2}y^{2}=c^{2}$) for applications.*

### Differentiation of Implicit Functions
For an implicit function $f(x,y)=c$, where $y$ is implicitly a function of $x$, the derivative $\frac{dy}{dx}$ can be found as:
$$ \frac{dy}{dx}=-\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial y}}, \quad \text{provided } \frac{\partial f}{\partial y}\ne0 $$
This formula is derived from the total derivative by noting that $\frac{df}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y}\frac{dy}{dx} = 0$.
*See [Example 5](Semester%201/Mathematics/Unit%201/Examples.md#Example%205:%20Implicit%20Differentiation) for an application.*

### Partial Derivatives of Composite Functions
If $u=f(x,y)$ where $x$ and $y$ are functions of two other independent variables, $r$ and $s$, then $u$ is a composite function of $r$ and $s$. The partial derivatives with respect to $r$ and $s$ are found using the chain rule:
$$ \frac{\partial u}{\partial r}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial r} $$
$$ \frac{\partial u}{\partial s}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial s} $$
This concept extends to finding higher-order partial derivatives like $\frac{\partial^2 u}{\partial r^2}$, etc., which involves applying the chain rule multiple times and using product rules. These techniques are crucial for **transforming partial differential equations** between different coordinate systems.
*A complex composite function example proving a relation is shown in [Example 6](Semester%201/Mathematics/Unit%201/Examples.md#Example%206:%20Composite%20Functions).*
*See also for advanced applications of derivative transformations: [Q&A Q3](Semester%201/Mathematics/Unit%201/Q&A.md#3.%20If%20$z=f(x,y)$%20where%20$x=u^{2}-v^{2}$,%20$y=2uv$%20prove%20that:), [Q&A Q8](Semester%201/Mathematics/Unit%201/Q&A.md#8.%20If%20$z=f(x,y)$%20where%20$x=u^{2}-v^{2}$,%20$y=2uv$%20prove%20that:), [Q&A Q10](Semester%201/Mathematics/Unit%201/Q&A.md#10.%20If%20$z$%20is%20a%20function%20of%20$x$%20and%20$y$,%20and%20$x=u\cos\alpha-v\sin\alpha$,%20$y=u\sin\alpha+v\cos\alpha$,%20then%20show%20that:), and [Q&A Q11](Semester%201/Mathematics/Unit%201/Q&A.md#11.%20Transform%20the%20partial%20differential%20equation%20$z_{xx}+2z_{xy}+z_{yy}=0$%20by%20changing%20the%20independent%20variables%20using%20the%20transformation:).*

**Invariance of the Laplacian Operator**: Some differential operators remain unchanged under specific coordinate transformations. A notable example is the **Laplacian operator** ($\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$). It is invariant under rotations of the coordinate axes, as shown in [Q&A Q10](Semester%201/Mathematics/Unit%201/Q&A.md#10.%20If%20$z$%20is%20a%20function%20of%20$x$%20and%20$y$,%20and%20$x=u\cos\alpha-v\sin\alpha$,%20$y=u\sin\alpha+v\cos\alpha$,%20then%20show%20that:), where $x=u\cos\alpha-v\sin\alpha$ and $y=u\sin\alpha+v\cos\alpha$ are rotation formulas, leading to $\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$.

***

## Homogeneous Functions and Euler's Theorem

A function $f(x,y)$ is a **homogeneous function of degree n** if, when each variable is multiplied by a scalar $t$, the function itself is scaled by $t^n$. Mathematically:
$$ f(tx,ty) = t^{n}f(x,y) $$
An alternative definition, particularly useful for identification, is $f(x,y) = x^{n}\phi(y/x)$ or $f(x,y) = y^{n}\psi(x/y)$.

**Euler's Theorem on Homogeneous Functions (First Order)**:
If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, then:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu $$
For three variables:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}=nu $$
*Applications of Euler's theorem are demonstrated in [Example 7](Semester%201/Mathematics/Unit%201/Examples.md#Example%207:%20Euler's%20Theorem%20Application%201), [Example 8](Semester%201/Mathematics/Unit%201/Examples.md#Example%208:%20Euler's%20Theorem%20Application%202), and [Q&A Q7](Semester%201/Mathematics/Unit%201/Q&A.md#7.%20If%20$(\sqrt{x}+\sqrt{y})\sin^{2}u-x^{\frac{1}{3}}-y^{\frac{1}{3}}=0,$%20prove%20that%20$12x\frac{\partial%20u}{\partial%20x}+12y\frac{\partial%20u}{\partial%20y}+\tan%20u=0.).*

**Euler's Theorem on Homogeneous Functions (Second Order)**:
If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, then:
$$ x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}=n(n-1)u $$
This powerful identity avoids direct computation of second-order derivatives in many cases related to homogeneous functions.
*This theorem is applied in [Q&A Q4](Semester%201/Mathematics/Unit%201/Q&A.md#4.%20If%20$z=xf\left(\frac{y}{x}\right)+g\left(\frac{x}{y}\right)$,%20then%20show%20that:), [Q&A Q9](Semester%201/Mathematics/Unit%201/Q&A.md#9.%20If%20$z=xf\left(\frac{y}{x}\right)+g\left(\frac{x}{y}\right)$,%20then%20show%20that:), and [Q&A Q13](Semester%201/Mathematics/Unit%201/Q&A.md#13.%20If%20$u=x^{2}\tan^{-1}(\frac{y}{x})-y^{2}\tan^{-1}(\frac{x}{y})$).*

***

## Taylor's and Maclaurin Series Expansions

These series allow approximation of a function of several variables by polynomials, particularly useful for understanding local behavior or for numerical approximations.

### Taylor's Theorem (Two Variables)
The expansion of $f(x, y)$ about a point $(a, b)$ is:
$$ f(x, y) = f(a, b) + \left[(x - a)f_x(a,b) + (y - b)f_y(a,b)\right] + \frac{1}{2!}\left[(x - a)^2f_{xx}(a,b) + 2(x - a)(y - b)f_{xy}(a,b) + (y - b)^2f_{yy}(a,b)\right] + \cdots $$
This expansion represents the function as an infinite sum of terms, where each term's order of derivatives increases. It is a generalization of the single-variable Taylor series.
*See [Example 9](Semester%201/Mathematics/Unit%201/Examples.md#Example%209:%20Taylor%20Series%20Expansion) and [Q&A Q14](Semester%201/Mathematics/Unit%201/Q&A.md#14.%20Expand%20$f(x,y)=x^{2}+xy+y^{2}$%20in%20powers%20of%20$(x-1)\&(y-2)$%20up%20to%20second%20degree%20terms.) for series examples.*

### Maclaurin's Series (Two Variables)
This is the special case of Taylor's series expanded about the origin, the point $(0, 0)$:
$$ f(x, y) = f(0, 0) + \left[xf_x(0,0) + yf_y(0,0)\right] + \frac{1}{2!}\left[x^2f_{xx}(0,0) + 2xyf_{xy}(0,0) + y^2f_{yy}(0,0)\right] + \cdots $$
*See [Example 10](Semester%201/Mathematics/Unit%201/Examples.md#Example%2010:%20Maclaurin%20Series%20Expansion), [Q&A Q5](Semester%201/Mathematics/Unit%201/Q&A.md#5.%20Expand%20$\frac{1}{1+x-y}$%20using%20Taylor's%20series%20up%20to%20second-degree%20terms.) and [Q&A Q15](Semester%201/Mathematics/Unit%201/Q&A.md#15.%20Expand%20$\frac{1}{1+x-y}$%20using%20Taylor's%20series%20up%20to%20second-degree%20terms%20(about%20(0,0)).) for Maclaurin series examples.*

### Approximations using Differentials and Taylor Series
Taylor series provides a powerful tool for approximating function values. The first-degree Taylor polynomial (or total differential) gives a linear approximation:
$$ f(x,y) \approx f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b) $$
This is particularly useful for estimating function values near a known point or for calculating approximate errors.
*See [Q&A Q16](Semester%201/Mathematics/Unit%201/Q&A.md#16.%20If%20$f(x,y)=\tan^{-1}(xy)$,%20compute%20an%20approximate%20value%20of%20$f(0.9,%20-1.2)$.).*

***

## Maxima and Minima of a Function of Two Variables

Finding extreme values (local maxima or minima) of functions of several variables is crucial for optimization problems.

An **extreme value** (maximum or minimum) occurs at a **critical point**, which is a point $(a,b)$ where:
1.  $f_x(a,b) = 0$ and $f_y(a,b) = 0$ (stationary points), OR
2.  One or both of the first partial derivatives do not exist.

- **Saddle Point**: A critical point that is neither a local maximum nor a local minimum. It is a maximum in some directions and a minimum in others.

### Working Rule (Second Derivative Test)

To classify stationary points $(a, b)$:
1. Find critical points $(a, b)$ by solving the system $f_x = 0$ and $f_y = 0$.
2. Calculate the second partial derivatives: $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$.
3. Evaluate the discriminant $D = rt - s^2$ at each critical point $(a, b)$:
    - If **$D > 0$ and $r < 0$** (or $t<0$) $\implies$ **Local Maximum** at $(a,b)$.
    - If **$D > 0$ and $r > 0$** (or $t>0$) $\implies$ **Local Minimum** at $(a,b)$.
    - If **$D < 0$** $\implies$ **Saddle Point** at $(a,b)$.
    - If **$D = 0$** $\implies$ The test is inconclusive; further analysis is required.

*Finding extrema is demonstrated in [Example 11](Semester%201/Mathematics/Unit%201/Examples.md#Example%2011:%20Finding%20Extrema), [Q&A Q6](Semester%201/Mathematics/Unit%201/Q&A.md#6.%20Discuss%20the%20maxima%20and%20minima%20of%20the%20function:), [Q&A Q17](Semester%201/Mathematics/Unit%201/Q&A.md#17.%20Discuss%20the%20maxima%20and%20minima%20of%20the%20function:), and [Q&A Q18](Semester%201/Mathematics/Unit%201/Q&A.md#18.%20Find%20the%20maximum%20and%20minimum%20values%20of%20the%20function:).*

***

## Lagrange's Method of Undetermined Multipliers (Constrained Optimization)

This powerful method finds the extreme values of a function $f(x, y, z)$ subject to one or more constraint(s) of the form $\phi(x, y, z) = 0$.

### Procedure (for one constraint)
1.  Define the **objective function** $f(x,y,z)$ to be maximized or minimized.
2.  Define the **constraint function** $\phi(x,y,z) = 0$.
3.  Construct the **Lagrangian auxiliary function**:
    $$ L(x, y, z, \lambda) = f(x, y, z) + \lambda\phi(x, y, z) $$
    where $\lambda$ is the **Lagrange multiplier**.
4.  Solve the system of equations by setting the partial derivatives of $L$ with respect to $x, y, z,$ and $\lambda$ to zero:
    - $\frac{\partial L}{\partial x} = f_x + \lambda\phi_x = 0$
    - $\frac{\partial L}{\partial y} = f_y + \lambda\phi_y = 0$
    - $\frac{\partial L}{\partial z} = f_z + \lambda\phi_z = 0$
    - $\frac{\partial L}{\partial \lambda} = \phi(x, y, z) = 0$ (which is the original constraint)
5.  The solutions $(x, y, z)$ obtained from this system are the critical points where extreme values of $f$ subject to the constraint *may* occur. Further analysis (physical context, testing values) may be needed to determine if it's a maximum or minimum, though often in practical problems, the context makes this clear.

*See [Example 12](Semester%201/Mathematics/Unit%201/Examples.md#Example%2012:%20Lagrange%20Multipliers), [Q&A Q7](Semester%201/Mathematics/Unit%201/Q&A.md#7.%20If%20$(\sqrt{x}+\sqrt{y})\sin^{2}u-x^{\frac{1}{3}}-y^{\frac{1}{3}}=0,$%20prove%20that%20$12x\frac{\partial%20u}{\partial%20x}+12y\frac{\partial%20u}{\partial%20y}+\tan%20u=0.), [Q&A Q19](Semester%201/Mathematics/Unit%201/Q&A.md#19.%20Find%20the%20volume%20of%20the%20largest%20rectangular%20parallelepiped%20that%20can%20be%20inscribed%20in%20the%20ellipsoid), [Q&A Q20](Semester%201/Mathematics/Unit%201/Q&A.md#20.%20A%20tent%20on%20a%20square%20base%20of%20side%20$x$,%20has%20its%20sides%20vertical%20of%20height%20$y$%20and%20the%20top%20is%20a%20regular%20pyramid%20of%20height%20$h$.), [Q&A Q21](Semester%201/Mathematics/Unit%201/Q&A.md#21.%20Divide%20the%20number%2024%20into%20three%20parts%20such%20that%20the%20continued%20product%20of%20the%20first,%20square%20of%20the%20second,%20and%20the%20cube%20of%20the%20third%20may%20be%20maximum.), and [Q&A Q22](Semester%201/Mathematics/Unit%201/Q&A.md#22.%20Find%20the%20maximum%20value%20of%20$x^{m}y^{n}z^{p}$%20subject%20to%20the%20constraint%20$x+y+z=a.$).*

***

## Error Propagation and Approximations using Differentials

When measurements of quantities with associated errors are used to calculate another quantity, the error propagates. Differentials provide a method to estimate this propagation.

For a function $f(x,y)$, the total differential $df$ provides an approximation of the change in $f$, $\Delta f$, when $x$ changes by $\Delta x$ and $y$ changes by $\Delta y$:
$$ \Delta f \approx df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy $$
Here, $dx$ and $dy$ represent small changes or errors in $x$ and $y$. This formula uses the first-order Taylor approximation.

In error analysis, if $\Delta x$ and $\Delta y$ are the absolute errors in $x$ and $y$, then the approximate absolute error in $f$ is:
$$ \Delta f \approx \left| \frac{\partial f}{\partial x}\right| |\Delta x| + \left| \frac{\partial f}{\partial y}\right| |\Delta y| $$
The **relative error** is then $\frac{\Delta f}{f}$, and the **percentage error** is $\frac{\Delta f}{f} \times 100\%$.

*For a practical application, see [Q&A Q23](Semester%201/Mathematics/Unit%201/Q&A.md#23.%20In%20estimating%20the%20cost%20of%20a%20pile%20of%20bricks%20measured%20as%20$6m\times50m\times4m$%20the%20tape%20is%20stretched%201%25%20beyond%20the%20standard%20length.).*
---
# [Back](../Mathematics.md)