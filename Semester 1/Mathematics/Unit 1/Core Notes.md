# [[Semester 1/Mathematics/Unit 1/Unit 1| Back]]
# Unit 1: Partial Differentiation

## Function of Several Variables

We are extending the concepts of calculus from functions of a single variable, $y=f(x)$, to functions of two or more variables.

A real-valued function of two variables, $x$ and $y$, is a rule that assigns a real value $z$ to each point $(x,y)$ in a region of the $xy$-plane. This is written as:
$$z=f(x,y)$$
Here, $x$ and $y$ are the **independent variables**, and $z$ is the **dependent variable**.

In general, a real-valued function of $n$ variables is written as:
$$z=f(x_{1},x_{2},...,x_{n})$$
where $x_1, x_2, ..., x_n$ are the $n$ independent variables. This function $f$ maps a point in an $n$-dimensional space ($\mathbb{R}^n$) to a real number ($\mathbb{R}$).

- **Explicit Function**: A function defined as $z = f(x_1, ..., x_n)$.
- **Implicit Function**: A function defined by a relation like $\phi(z, x_1, ..., x_n) = 0$.

### Functions of Two Variables

For a function $z=f(x,y)$:

- **Domain**: The set of all points $(x, y)$ for which $f(x,y)$ is defined.
- **Range**: The set of all possible corresponding values of $z$.

**Examples of Domain and Range:**
1. $z=\sqrt{1-x^{2}-y^{2}}$: Domain is $x^{2}+y^{2}\le1$; Range is $[0, 1]$.
2. $z=\frac{1}{x^{2}-y^{2}}$: Domain is all points where $y \neq \pm x$; Range is $\mathbb{R}$.
3. $z=\log(x+y)$: Domain is all points where $x+y > 0$; Range is $\mathbb{R}$.

***

## Limits

A function $f(x,y)$ has a limit $L$ as $(x,y)$ approaches $(x_0, y_0)$ if for any small positive number $\epsilon$, we can find a small positive number $\delta$ such that:
$$|f(x,y)-L|<\epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_{0})^{2}+(y-y_{0})^{2}}<\delta$$
This is written as:
$$\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L$$

**Remarks:**
1. If a limit exists, it is **unique**.
2. For the limit to exist, it must be the **same along all possible paths** of approach. If it is path-dependent, the limit **does not exist**.

### Properties of Limits
If $\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L_{1}$ and $\lim_{(x,y)\rightarrow(x_{0},y_{0})}g(x,y)=L_{2}$, then standard limit laws apply for scalar multiplication, addition, multiplication, and division (provided $L_2 \neq 0$).

### Example: Non-existent Limit
The limit $\lim_{(x,y)\rightarrow(0,0)}\frac{xy}{x^{2}+y^{2}}$ does not exist because along the path $y=mx$, the limit depends on the slope $m$:
$$ \lim_{x\rightarrow0}\frac{x(mx)}{x^{2}+(mx)^{2}} = \frac{m}{1+m^{2}} $$
*More non-existent limit examples are in [ Example 1](Semester%201/Mathematics/Unit%201/Examples.md#Example%201:%20Non-existent%20Limits).*

***

## Partial Differentiation

A **partial derivative** of a function of several variables is its derivative with respect to one of those variables, with the others held constant.

- Partial derivative of $z=f(x,y)$ with respect to $x$ (holding $y$ constant):
$$ \frac{\partial z}{\partial x} = f_x = \lim_{h\rightarrow0}\frac{f(x+h,y)-f(x,y)}{h} $$
- Partial derivative of $z=f(x,y)$ with respect to $y$ (holding $x$ constant):
$$ \frac{\partial z}{\partial y} = f_y = \lim_{h\rightarrow0}\frac{f(x,y+h)-f(x,y)}{h} $$

### Second-Order Partial Derivatives
- **Pure Second-Order Derivatives**: $f_{xx} = \frac{\partial^{2}z}{\partial x^{2}}$ and $f_{yy} = \frac{\partial^{2}z}{\partial y^{2}}$.
- **Mixed Second-Order Derivatives**: $f_{xy} = \frac{\partial^{2}z}{\partial y\partial x}$ and $f_{yx} = \frac{\partial^{2}z}{\partial x\partial y}$.

**Clairaut's Theorem**: If the second-order partial derivatives are continuous, the order of differentiation does not matter, i.e., $f_{xy} = f_{yx}$.

### Geometric Interpretation
- $f_{xx}$ and $f_{yy}$ describe the **concavity** in the $x$ and $y$ directions. ($f_{xx}>0 \implies$ concave up in $x$ direction).
- $f_{xy}$ describes how the slope in one direction (say, $x$) changes as you move in the other direction ($y$).

*For differentiation practice, see [Example 3](Semester%201/Mathematics/Unit%201/Examples.md#Example%203:%20First%20and%20Second%20Partial%20Derivatives) and [ Example 2](Semester%201/Mathematics/Unit%201/Examples.md#Example%202:%20Second-Order%20Partial%20Derivatives).*

***

## Total Derivative

If $u=f(x,y)$ where $x=\phi(t)$ and $y=\psi(t)$, $u$ is a function of $t$ alone. The derivative $\frac{du}{dt}$ is the **total derivative**.

**Chain Rule for Total Derivative**:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\cdot\frac{dx}{dt}+\frac{\partial u}{\partial y}\cdot\frac{dy}{dt} $$
For three variables:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt}+\frac{\partial u}{\partial z}\frac{dz}{dt} $$
*See [Example 4](Semester%201/Mathematics/Unit%201/Examples.md#Example%204:%20Total%20Derivative) for an application.*

### Differentiation of Implicit Functions
For an implicit function $f(x,y)=c$, the derivative $\frac{dy}{dx}$ is:
$$ \frac{dy}{dx}=-\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial y}}, \quad \text{provided } \frac{\partial f}{\partial y}\ne0 $$
*See [Example 5](Semester%201/Mathematics/Unit%201/Examples.md#Example%205:%20Implicit%20Differentiation) for an application.*

***

## Partial Derivatives of Composite Functions

If $u=f(x,y)$ where $x$ and $y$ are functions of two other independent variables, $r$ and $s$, then $u$ is a composite function of $r$ and $s$. The partial derivatives are found using the chain rule:
$$ \frac{\partial u}{\partial r}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial r} $$
$$ \frac{\partial u}{\partial s}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial s} $$

*A complex composite function example is shown in [Example 6](Semester%201/Mathematics/Unit%201/Examples.md#Example%206:%20Composite%20Functions).*

***

## Homogeneous Functions and Euler's Theorem

A function $f(x,y)$ is a **homogeneous function of degree n** if $f(x,y) = x^{n}\phi(y/x)$.

**Euler's Theorem on Homogeneous Functions**:
If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, then:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu $$
For $n$ variables:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}+...=nu $$

*Applications of Euler's theorem are demonstrated in [Example 7](Semester%201/Mathematics/Unit%201/Examples.md#Example%207:%20Euler's%20Theorem%20Application%201) and [Example 8](Semester%201/Mathematics/Unit%201/Examples.md#Example%208:%20Euler's%20Theorem%20Application%202).*

***

## Taylor's and Maclaurin Series

### Taylor's Theorem (Two Variables)
The expansion of $f(x, y)$ about a point $(a, b)$ is:
$$ f(x, y) = f(a, b) + \left[(x - a)f_x + (y - b)f_y\right] + \frac{1}{2!}\left[(x - a)^2f_{xx} + 2(x - a)(y - b)f_{xy} + (y - b)^2f_{yy}\right] + \cdots $$
(Derivatives are evaluated at $(a, b)$.)

### Maclaurin's Series (Two Variables)
This is the special case of Taylor's series expanded about the point $(0, 0)$:
$$ f(x, y) = f(0, 0) + \left[xf_x + yf_y\right] + \frac{1}{2!}\left[x^2f_{xx} + 2xyf_{xy} + y^2f_{yy}\right] + \cdots $$
(Derivatives are evaluated at $(0, 0)$.)

*See [Example 9](Semester%201/Mathematics/Unit%201/Examples.md#Example%209:%20Taylor%20Series%20Expansion) and [Example 10](Semester%201/Mathematics/Unit%201/Examples.md#Example%2010:%20Maclaurin%20Series%20Expansion) for series examples.*

***

## Maxima and Minima of a Function of Two Variables

An **extreme value** (maximum or minimum) occurs at a **critical point**, where $f_x = 0$ and $f_y = 0$, or where these derivatives don't exist.

- **Saddle Point**: A point that is a maximum in one direction and a minimum in another. It is *not* an extreme value.

### Working Rule (Second Derivative Test)

1. Find critical points $(a, b)$ by solving $f_x = 0$ and $f_y = 0$.
2. Calculate second partial derivatives: $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$.
3. Evaluate the discriminant $D = rt - s^2$ at each critical point:
    - If $D > 0$ and $r < 0 \implies$ **Local Maximum**.
    - If $D > 0$ and $r > 0 \implies$ **Local Minimum**.
    - If $D < 0 \implies$ **Saddle Point**.
    - If $D = 0 \implies$ Test is inconclusive.

*Finding extrema is demonstrated in [Example 11](Semester%201/Mathematics/Unit%201/Examples.md#Example%2011:%20Finding%20Extrema).*

***

## Lagrange's Method of Undetermined Multipliers

This method finds the extreme values of a function $f(x, y, z)$ subject to a constraint $\phi(x, y, z) = 0$.

### Procedure
1. Construct the **auxiliary function**:
$$ F(x, y, z) = f(x, y, z) + \lambda\phi(x, y, z) $$
2. Solve the system of equations for stationary points:
    - $\frac{\partial F}{\partial x} = f_x + \lambda\phi_x = 0$
    - $\frac{\partial F}{\partial y} = f_y + \lambda\phi_y = 0$
    - $\frac{\partial F}{\partial z} = f_z + \lambda\phi_z = 0$
    - $\phi(x, y, z) = 0$ (the constraint)
3. The solutions $(x, y, z)$ give the coordinates for the extreme values of $f$.

*See [Example 12](Semester%201/Mathematics/Unit%201/Examples.md#Example%2012:%20Lagrange%20Multipliers) for a maximization problem using this method.*