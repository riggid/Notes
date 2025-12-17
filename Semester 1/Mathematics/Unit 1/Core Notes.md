---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]
***
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
*More non-existent limit examples are in [[Examples#example-1:-non-existent-limits| Example 1]].*

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

*For differentiation practice, see [[Examples#example-2:-second-order-partial-derivatives|Example 2]], [[Examples#example-3:-first-and-second-partial-derivatives|Example 3]], and [[Questions#1.-find-all-the-first-order-partial-derivatives-of-the-following-function:|Q&A Q1 (First Order)]], [[Questions#3.-find-all-the-first-order-partial-derivatives-of-the-following-function:|Q&A Q3]], [[Questions#4.-find-all-the-first-order-partial-derivatives-of-the-following-function:|Q&A Q4]].*

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
*See [[Examples#example-4:-total-derivative|Example 4]], [[Questions#2.-if-$u=\sin^{-1}(x-y|Q&A Q2]]$%20where%20$x=3t$%20and%20$y=4t^{3}$,%20then%20show%20that:), and [[Questions#6.-find-$\frac{du}{dx}$-if:-$u=\cos(x^{2}+y^{2}|Q&A Q6]]$%20and%20$a^{2}x^{2}+b^{2}y^{2}=c^{2}$) for applications.*

### Differentiation of Implicit Functions
For an implicit function $f(x,y)=c$, where $y$ is implicitly a function of $x$, the derivative $\frac{dy}{dx}$ can be found as:
$$ \frac{dy}{dx}=-\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial y}}, \quad \text{provided } \frac{\partial f}{\partial y}\ne0 $$
This formula is derived from the total derivative by noting that $\frac{df}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y}\frac{dy}{dx} = 0$.
*See [[Examples#example-5:-implicit-differentiation|Example 5]] for an application.*

### Partial Derivatives of Composite Functions
If $u=f(x,y)$ where $x$ and $y$ are functions of two other independent variables, $r$ and $s$, then $u$ is a composite function of $r$ and $s$. The partial derivatives with respect to $r$ and $s$ are found using the chain rule:
$$ \frac{\partial u}{\partial r}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial r} $$
$$ \frac{\partial u}{\partial s}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial s} $$
This concept extends to finding higher-order partial derivatives like $\frac{\partial^2 u}{\partial r^2}$, etc., which involves applying the chain rule multiple times and using product rules. These techniques are crucial for **transforming partial differential equations** between different coordinate systems.
*A complex composite function example proving a relation is shown in [[Examples#example-6:-composite-functions|Example 6]].*
*See also for advanced applications of derivative transformations: [[Questions#3.-if-$z=f(x,y|Q&A Q3]]$%20where%20$x=u^{2}-v^{2}$,%20$y=2uv$%20prove%20that:), [[Questions#8.-if-$z=f(x,y|Q&A Q8]]$%20where%20$x=u^{2}-v^{2}$,%20$y=2uv$%20prove%20that:), [[Questions#10.-if-$z$-is-a-function-of-$x$-and-$y$,-and-$x=u\cos\alpha-v\sin\alpha$,-$y=u\sin\alpha+v\cos\alpha$,-then-show-that:|Q&A Q10]], and [[Questions#11.-transform-the-partial-differential-equation-$z_{xx}+2z_{xy}+z_{yy}=0$-by-changing-the-independent-variables-using-the-transformation:|Q&A Q11]].*

**Invariance of the Laplacian Operator**: Some differential operators remain unchanged under specific coordinate transformations. A notable example is the **Laplacian operator** ($\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$). It is invariant under rotations of the coordinate axes, as shown in [[Questions#10.-if-$z$-is-a-function-of-$x$-and-$y$,-and-$x=u\cos\alpha-v\sin\alpha$,-$y=u\sin\alpha+v\cos\alpha$,-then-show-that:|Q&A Q10]], where $x=u\cos\alpha-v\sin\alpha$ and $y=u\sin\alpha+v\cos\alpha$ are rotation formulas, leading to $\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$.

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
*Applications of Euler's theorem are demonstrated in [[Examples#example-7:-euler's-theorem-application-1|Example 7]], [[Examples#example-8:-euler's-theorem-application-2|Example 8]], and [[Questions#7.-if-$(\sqrt{x}+\sqrt{y}|Q&A Q7]]%5Csin^{2}u-x^{%5Cfrac{1}{3}}-y^{%5Cfrac{1}{3}}=0,$%20prove%20that%20$12x%5Cfrac{%5Cpartial%20u}{%5Cpartial%20x}+12y%5Cfrac{%5Cpartial%20u}{%5Cpartial%20y}+%5Ctan%20u=0.).*

**Euler's Theorem on Homogeneous Functions (Second Order)**:
If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, then:
$$ x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}=n(n-1)u $$
This powerful identity avoids direct computation of second-order derivatives in many cases related to homogeneous functions.
*This theorem is applied in [[Questions#4.-if-$z=xf\left(\frac{y}{x}\right|Q&A Q4]]+g\left(\frac{x}{y}\right)$,%20then%20show%20that:), [[Questions#9.-if-$z=xf\left(\frac{y}{x}\right|Q&A Q9]]+g\left(\frac{x}{y}\right)$,%20then%20show%20that:), and [[Questions#13.-if-$u=x^{2}\tan^{-1}(\frac{y}{x}|Q&A Q13]]-y^{2}%5Ctan^{-1}(%5Cfrac{x}{y})$).*

***

## Taylor's and Maclaurin Series Expansions

These series allow approximation of a function of several variables by polynomials, particularly useful for understanding local behavior or for numerical approximations.

### Taylor's Theorem (Two Variables)
The expansion of $f(x, y)$ about a point $(a, b)$ is:
$$ f(x, y) = f(a, b) + \left[(x - a)f_x(a,b) + (y - b)f_y(a,b)\right] + \frac{1}{2!}\left[(x - a)^2f_{xx}(a,b) + 2(x - a)(y - b)f_{xy}(a,b) + (y - b)^2f_{yy}(a,b)\right] + \cdots $$
This expansion represents the function as an infinite sum of terms, where each term's order of derivatives increases. It is a generalization of the single-variable Taylor series.
*See [[Examples#example-9:-taylor-series-expansion|Example 9]] and [[Questions#14.-expand-$f(x,y|Q&A Q14]]=x^{2}+xy+y^{2}$%20in%20powers%20of%20$(x-1)&(y-2)$%20up%20to%20second%20degree%20terms.) for series examples.*

### Maclaurin's Series (Two Variables)
This is the special case of Taylor's series expanded about the origin, the point $(0, 0)$:
$$ f(x, y) = f(0, 0) + \left[xf_x(0,0) + yf_y(0,0)\right] + \frac{1}{2!}\left[x^2f_{xx}(0,0) + 2xyf_{xy}(0,0) + y^2f_{yy}(0,0)\right] + \cdots $$
*See [[Examples#example-10:-maclaurin-series-expansion|Example 10]], [[Questions#5.-expand-$\frac{1}{1+x-y}$-using-taylor's-series-up-to-second-degree-terms.|Q&A Q5]] and [[Questions#15.-expand-$\frac{1}{1+x-y}$-using-taylor's-series-up-to-second-degree-terms-(about-(0,0|Q&A Q15]]).) for Maclaurin series examples.*

### Approximations using Differentials and Taylor Series
Taylor series provides a powerful tool for approximating function values. The first-degree Taylor polynomial (or total differential) gives a linear approximation:
$$ f(x,y) \approx f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b) $$
This is particularly useful for estimating function values near a known point or for calculating approximate errors.
*See [[Questions#16.-if-$f(x,y|Q&A Q16]]=%5Ctan^{-1}(xy)$,%20compute%20an%20approximate%20value%20of%20$f(0.9,%20-1.2)$.).*

***

## Maxima and Minima of a Function of Two Variables

Finding extreme values (local maxima or minima) of functions of several variables is crucial for optimization problems.

An **extreme value** (maximum or minimum) occurs at a **critical point**, which is a point $(a,b)$ where:
1.  $f_x(a,b) = 0$ and $f_y(a,b) = 0$ (stationary points), OR
2.  One or both of the first partial derivatives do not exist.

- **Saddle Point**: A critical point that is neither a local maximum nor a local minimum. It is a maximum in some directions and a minimum in others.
![[Core Notes-1.png]]
### Working Rule (Second Derivative Test)

To classify stationary points $(a, b)$:
1. Find critical points $(a, b)$ by solving the system $f_x = 0$ and $f_y = 0$.
2. Calculate the second partial derivatives: $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$.
3. Evaluate the discriminant $D = rt - s^2$ at each critical point $(a, b)$:
    - If **$D > 0$ and $r < 0$** (or $t<0$) $\implies$ **Local Maximum** at $(a,b)$.
    - If **$D > 0$ and $r > 0$** (or $t>0$) $\implies$ **Local Minimum** at $(a,b)$.
    - If **$D < 0$** $\implies$ **Saddle Point** at $(a,b)$.
    - If **$D = 0$** $\implies$ The test is inconclusive; further analysis is required.

*Finding extrema is demonstrated in [[Examples#example-11:-finding-extrema|Example 11]], [[Questions#6.-discuss-the-maxima-and-minima-of-the-function:|Q&A Q6]], [[Questions#17.-discuss-the-maxima-and-minima-of-the-function:|Q&A Q17]], and [[Questions#18.-find-the-maximum-and-minimum-values-of-the-function:|Q&A Q18]].*

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

*See [[Examples#example-12:-lagrange-multipliers|Example 12]], [[Questions#7.-if-$(\sqrt{x}+\sqrt{y}|Q&A Q7]]%5Csin^{2}u-x^{%5Cfrac{1}{3}}-y^{%5Cfrac{1}{3}}=0,$%20prove%20that%20$12x%5Cfrac{%5Cpartial%20u}{%5Cpartial%20x}+12y%5Cfrac{%5Cpartial%20u}{%5Cpartial%20y}+%5Ctan%20u=0.), [[Questions#19.-find-the-volume-of-the-largest-rectangular-parallelepiped-that-can-be-inscribed-in-the-ellipsoid|Q&A Q19]], [[Questions#20.-a-tent-on-a-square-base-of-side-$x$,-has-its-sides-vertical-of-height-$y$-and-the-top-is-a-regular-pyramid-of-height-$h$.|Q&A Q20]], [[Questions#21.-divide-the-number-24-into-three-parts-such-that-the-continued-product-of-the-first,-square-of-the-second,-and-the-cube-of-the-third-may-be-maximum.|Q&A Q21]], and [[Questions#22.-find-the-maximum-value-of-$x^{m}y^{n}z^{p}$-subject-to-the-constraint-$x+y+z=a.$|Q&A Q22]].*

***

## Error Propagation and Approximations using Differentials

When measurements of quantities with associated errors are used to calculate another quantity, the error propagates. Differentials provide a method to estimate this propagation.

For a function $f(x,y)$, the total differential $df$ provides an approximation of the change in $f$, $\Delta f$, when $x$ changes by $\Delta x$ and $y$ changes by $\Delta y$:
$$ \Delta f \approx df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy $$
Here, $dx$ and $dy$ represent small changes or errors in $x$ and $y$. This formula uses the first-order Taylor approximation.

In error analysis, if $\Delta x$ and $\Delta y$ are the absolute errors in $x$ and $y$, then the approximate absolute error in $f$ is:
$$ \Delta f \approx \left| \frac{\partial f}{\partial x}\right| |\Delta x| + \left| \frac{\partial f}{\partial y}\right| |\Delta y| $$
The **relative error** is then $\frac{\Delta f}{f}$, and the **percentage error** is $\frac{\Delta f}{f} \times 100\%$.

*For a practical application, see [[Questions#23.-in-estimating-the-cost-of-a-pile-of-bricks-measured-as-$6m\times50m\times4m$-the-tape-is-stretched-1%-beyond-the-standard-length.|Q&A Q23]].*
---
# [[../Mathematics|Back]]