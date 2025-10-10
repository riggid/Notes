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

- **Domain**: The set of all points $(x, y)$ for which $f(x,y)$ is defined. This can be the entire $xy$-plane or a part of it.
- **Range**: The set of all possible corresponding values of $z$.

**Examples:**

1. For $z=\sqrt{1-x^{2}-y^{2}}$:
    - The expression under the square root must be non-negative, so $1-x^{2}-y^{2}\ge0$, which means $x^{2}+y^{2}\le1$.
    - **Domain**: The set of points inside and on the circle of radius 1 centered at the origin.
    - **Range**: The set of non-negative real numbers, specifically $[0, 1]$.

2. For $z=\frac{1}{x^{2}-y^{2}}$:
    - The denominator cannot be zero, so $x^2 - y^2 \neq 0$, which means $y \neq \pm x$.
    - **Domain**: All points in the $xy$-plane except those on the lines $y=x$ and $y=-x$.
    - **Range**: The set of all real numbers, $\mathbb{R}$.

3. For $z=\log(x+y)$:
    - The argument of the logarithm must be positive, so $x+y > 0$.
    - **Domain**: The set of all points above the line $y=-x$.
    - **Range**: The set of all real numbers, $\mathbb{R}$.

---

## Limits

A function $f(x,y)$ has a limit $L$ as $(x,y)$ approaches $(x_0, y_0)$ if for any small positive number $\epsilon$, we can find a small positive number $\delta$ such that:
$$|f(x,y)-L|<\epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_{0})^{2}+(y-y_{0})^{2}}<\delta$$
This is written as:
$$\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L$$

**Remarks:**
1. If a limit exists, it is **unique**.
2. In a 2D plane, a point can be approached from an infinite number of paths. For the limit to exist, it must be the **same along all possible paths**. If the limit depends on the path of approach, then the limit **does not exist**.

### Properties of Limits
If $\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L_{1}$ and $\lim_{(x,y)\rightarrow(x_{0},y_{0})}g(x,y)=L_{2}$, then:
- $\lim_{(x,y)\rightarrow(x_{0},y_{0})}[kf(x,y)]=kL_{1}$ for any constant k.
- $\lim_{(x,y)\rightarrow(x_{0},y_{0})}[f(x,y)+g(x,y)]=L_{1}+L_{2}$.
- $\lim_{(x,y)\rightarrow(x_{0},y_{0})}[f(x,y)g(x,y)]=L_{1}L_{2}$.
- $\lim_{(x,y)\rightarrow(x_{0},y_{0})}[\frac{f(x,y)}{g(x,y)}]=\frac{L_{1}}{L_{2}}$, provided $L_{2}\ne0$.

### Example: Show the limit does not exist for $\lim_{(x,y)\rightarrow(0,0)}\frac{xy}{x^{2}+y^{2}}$
To check if the limit exists, we approach $(0,0)$ along different paths.
Let's use the path $y=mx$. As $(x,y) \rightarrow (0,0)$, we have $x \rightarrow 0$.
$$ \lim_{x\rightarrow0}\frac{x(mx)}{x^{2}+(mx)^{2}} = \lim_{x\rightarrow0}\frac{mx^{2}}{x^{2}(1+m^{2})} = \frac{m}{1+m^{2}} $$
Since the resulting limit depends on $m$ (the slope of the path), the limit is path-dependent and therefore **does not exist**.

---

## Partial Differentiation

A **partial derivative** of a function of several variables is its derivative with respect to one of those variables, with the others held constant.

- The partial derivative of $z=f(x,y)$ with respect to $x$ (treating $y$ as a constant) is:
$$ \frac{\partial z}{\partial x} = f_x = \lim_{h\rightarrow0}\frac{f(x+h,y)-f(x,y)}{h} $$
- The partial derivative of $z=f(x,y)$ with respect to $y$ (treating $x$ as a constant) is:
$$ \frac{\partial z}{\partial y} = f_y = \lim_{h\rightarrow0}\frac{f(x,y+h)-f(x,y)}{h} $$

### Second-Order Partial Derivatives
- **Pure Second-Order Derivatives**:
$$ f_{xx} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^{2}z}{\partial x^{2}} $$
$$ f_{yy} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^{2}z}{\partial y^{2}} $$
- **Mixed Second-Order Derivatives**:
$$ f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^{2}z}{\partial y\partial x} $$
$$ f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^{2}z}{\partial x\partial y} $$

**Note (Clairaut's Theorem)**: If the second-order partial derivatives are continuous, the order of differentiation does not matter, i.e., $f_{xy} = f_{yx}$.

### Geometric Interpretation
- If $f_{xx}>0$, the function $f(x,y)$ is concave up in the $x$ direction.
- If $f_{yy}>0$, the function $f(x,y)$ is concave up in the $y$ direction.
- The mixed partial $f_{xy}$ tells us how the rate of change in the $x$ direction is changing as we move in the $y$ direction.

### Example: Find the first and second partial derivatives of $z=x^{3}+y^{3}-3axy$.
**First-Order Derivatives**:
$$ \frac{\partial z}{\partial x} = 3x^{2}-3ay $$
$$ \frac{\partial z}{\partial y} = 3y^{2}-3ax $$

**Second-Order Derivatives**:
$$ \frac{\partial^{2}z}{\partial x^{2}} = \frac{\partial}{\partial x}(3x^{2}-3ay) = 6x $$
$$ \frac{\partial^{2}z}{\partial y^{2}} = \frac{\partial}{\partial y}(3y^{2}-3ax) = 6y $$
$$ \frac{\partial^{2}z}{\partial y\partial x} = \frac{\partial}{\partial y}(3x^{2}-3ay) = -3a $$
$$ \frac{\partial^{2}z}{\partial x\partial y} = \frac{\partial}{\partial x}(3y^{2}-3ax) = -3a $$
We can observe that $\frac{\partial^{2}z}{\partial y\partial x} = \frac{\partial^{2}z}{\partial x\partial y}$.

---

## Total Derivative

If $u=f(x,y)$, where $x$ and $y$ are themselves functions of a single variable $t$ (i.e., $x=\phi(t)$ and $y=\psi(t)$), then $u$ is ultimately a function of $t$ alone. The derivative $du/dt$ is called the **total derivative**.

**Chain Rule for Total Derivative**:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\cdot\frac{dx}{dt}+\frac{\partial u}{\partial y}\cdot\frac{dy}{dt} $$

If $u=f(x,y,z)$ where $x,y,z$ are functions of $t$:
$$ \frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt}+\frac{\partial u}{\partial z}\frac{dz}{dt} $$

### Differentiation of Implicit Functions
If an implicit function is given by $f(x,y)=c$, we can find $\frac{dy}{dx}$ by treating $f$ as a function of $x$ where $y$ is also a function of $x$. The total derivative with respect to $x$ is:
$$ \frac{df}{dx} = \frac{\partial f}{\partial x}\cdot\frac{dx}{dx} + \frac{\partial f}{\partial y}\cdot\frac{dy}{dx} = 0 $$
$$ \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y}\frac{dy}{dx} = 0 $$
This gives the formula:
$$ \frac{dy}{dx}=-\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial y}}, \quad \text{provided } \frac{\partial f}{\partial y}\ne0 $$

---

## Partial Derivatives of Composite Functions

If $u=f(x,y)$ where $x$ and $y$ are functions of two other independent variables, $r$ and $s$, then $u$ is a composite function of $r$ and $s$. The partial derivatives of $u$ with respect to $r$ and $s$ are found using the chain rule:
$$ \frac{\partial u}{\partial r}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial r} $$
$$ \frac{\partial u}{\partial s}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial s} $$

### Example: If $u=F(x-y,y-z,z-x)$, prove that $\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z}=0$.
Let $r=x-y$, $s=y-z$, and $t=z-x$. Then $u=F(r,s,t)$.
Using the chain rule:
$$ \frac{\partial u}{\partial x}=\frac{\partial u}{\partial r}\frac{\partial r}{\partial x}+\frac{\partial u}{\partial s}\frac{\partial s}{\partial x}+\frac{\partial u}{\partial t}\frac{\partial t}{\partial x} = \frac{\partial u}{\partial r}(1)+\frac{\partial u}{\partial s}(0)+\frac{\partial u}{\partial t}(-1) = \frac{\partial u}{\partial r}-\frac{\partial u}{\partial t} $$
$$ \frac{\partial u}{\partial y}=\frac{\partial u}{\partial r}\frac{\partial r}{\partial y}+\frac{\partial u}{\partial s}\frac{\partial s}{\partial y}+\frac{\partial u}{\partial t}\frac{\partial t}{\partial y} = \frac{\partial u}{\partial r}(-1)+\frac{\partial u}{\partial s}(1)+\frac{\partial u}{\partial t}(0) = -\frac{\partial u}{\partial r}+\frac{\partial u}{\partial s} $$
$$ \frac{\partial u}{\partial z}=\frac{\partial u}{\partial r}\frac{\partial r}{\partial z}+\frac{\partial u}{\partial s}\frac{\partial s}{\partial z}+\frac{\partial u}{\partial t}\frac{\partial t}{\partial z} = \frac{\partial u}{\partial r}(0)+\frac{\partial u}{\partial s}(-1)+\frac{\partial u}{\partial t}(1) = -\frac{\partial u}{\partial s}+\frac{\partial u}{\partial t} $$
Adding these three results:
$$ \frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z} = \left(\frac{\partial u}{\partial r}-\frac{\partial u}{\partial t}\right) + \left(-\frac{\partial u}{\partial r}+\frac{\partial u}{\partial s}\right) + \left(-\frac{\partial u}{\partial s}+\frac{\partial u}{\partial t}\right) = 0 $$

---

## Homogeneous Functions and Euler's Theorem

A function $f(x,y)$ is a **homogeneous function of degree n** if every term in its expression is of the nth degree. Such a function can be written in the form:
$$f(x,y) = x^{n}\phi(y/x)$$

**Euler's Theorem on Homogeneous Functions**:
If $u$ is a homogeneous function of degree $n$ in $x$ and $y$, then:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu $$
For a function of more variables, the theorem extends:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}+...=nu $$

### Example: If $u=\sin^{-1}\left(\frac{x+2y+3z}{x^{8}+y^{8}+z^{8}}\right)$, find $x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}$.
Here, $u$ is not a homogeneous function. But we can define a new function:
$$ \omega = \sin u = \frac{x+2y+3z}{x^{8}+y^{8}+z^{8}} = \frac{x(1+2(y/x)+3(z/x))}{x^8(1+(y/x)^{8}+(z/x)^{8})} = x^{-7} \cdot \frac{1+2(y/x)+3(z/x)}{1+(y/x)^{8}+(z/x)^{8}} $$
So, $\omega$ is a homogeneous function of degree $n=-7$. By Euler's theorem:
$$ x\frac{\partial\omega}{\partial x}+y\frac{\partial\omega}{\partial y}+z\frac{\partial\omega}{\partial z}=-7\omega $$
Now we relate $\omega$ back to $u$: $\frac{\partial\omega}{\partial x} = \cos u \frac{\partial u}{\partial x}$, etc.
$$ x \cos u\frac{\partial u}{\partial x}+y \cos u\frac{\partial u}{\partial y}+z \cos u\frac{\partial u}{\partial z}=-7\sin u $$
Dividing by $\cos u$:
$$ x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}=-7\tan u $$

---

## Taylor's and Maclaurin Series
# Taylor and Maclaurin Series (Single Variable)

## Taylor Series

The **Taylor series** of a function $f(x)$ that is infinitely differentiable at a number $a$ is given by the power series:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

The expanded form is:
$$
f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots
$$

This series is an approximation of $f(x)$ centered around the point $x=a$.

## Maclaurin Series

The **Maclaurin series** is a special case of the Taylor series where the expansion is centered at $a=0$.

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
$$

The expanded form is:
$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots
$$

### Taylor's Theorem
The Taylor's series expansion of a function $f(x, y)$ about a point $(a, b)$ is given by:
$$ f(x, y) = f(a, b) + \left[(x - a)f_x(a, b) + (y - b)f_y(a, b)\right] + \frac{1}{2!}\left[(x - a)^2f_{xx}(a, b) + 2(x - a)(y - b)f_{xy}(a, b) + (y - b)^2f_{yy}(a, b)\right] + \cdots $$

### Maclaurin's Series
This is a special case of the Taylor's series where the expansion is about the point $(0, 0)$:
$$ f(x, y) = f(0, 0) + \left[xf_x(0, 0) + yf_y(0, 0)\right] + \frac{1}{2!}\left[x^2f_{xx}(0, 0) + 2xyf_{xy}(0, 0) + y^2f_{yy}(0, 0)\right] + \cdots $$

---

## Maxima and Minima of a Function of Two Variables

A function $f(x,y)$ has an **extreme value** (a maximum or minimum) at a point $(a,b)$.
- **Maximum**: Like the top of a dome, where the surface goes down in every direction.
- **Minimum**: Like the bottom of a bowl, where the surface goes up in every direction.
- **Saddle Point**: A point where the tangent plane is horizontal, but the surface goes up in some directions and down in others. It is not an extreme value.

A **critical point** is a point $(a, b)$ where $f_x = 0$ and $f_y = 0$, or where these derivatives do not exist.

### Working Rule to Find Maxima and Minima (Second Derivative Test)

1. Find the first partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$. Set them to zero and solve the simultaneous equations to find the critical points $(a,b), (c,d), \dots$.
2. For each critical point, calculate the second partial derivatives:
    - $r = \frac{\partial^2f}{\partial x^2}$
    - $s = \frac{\partial^2f}{\partial x\partial y}$
    - $t = \frac{\partial^2f}{\partial y^2}$
3. Evaluate the discriminant $D = rt - s^2$ at each critical point.
    - If $D > 0$ and $r < 0$, the point is a **local maximum**.
    - If $D > 0$ and $r > 0$, the point is a **local minimum**.
    - If $D < 0$, the point is a **saddle point**.
    - If $D = 0$, the test is inconclusive and requires further investigation.

---

## Lagrange's Method of Undetermined Multipliers

This method finds the extreme values of a function $f(x, y, z)$ subject to a constraint given by $\phi(x, y, z) = 0$.

### Procedure
1. Construct an **auxiliary function** $F(x, y, z)$ using an undetermined Lagrange multiplier, $\lambda$:
$$ F(x, y, z) = f(x, y, z) + \lambda\phi(x, y, z) $$
2. The extreme values of $f$ must occur at the stationary points of $F$. Find these points by solving the following system of equations:
    - $\frac{\partial F}{\partial x} = f_x + \lambda\phi_x = 0$
    - $\frac{\partial F}{\partial y} = f_y + \lambda\phi_y = 0$
    - $\frac{\partial F}{\partial z} = f_z + \lambda\phi_z = 0$
    - $\phi(x, y, z) = 0$ (the original constraint)
3. Solving this system gives the coordinates $(x, y, z)$ of the stationary points, which correspond to the maximum and minimum values of the original function $f$.

**Note**: This method identifies the stationary points but does not classify them as maxima or minima. This classification often comes from the physical or geometrical context of the problem.

---
---