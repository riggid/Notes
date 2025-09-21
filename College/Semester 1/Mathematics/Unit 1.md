# Unit 1: Partial Differentiation

### **Functions of Several Variables**
- A function of two variables is written as $z = f(x,y)$.
- **Independent variables**: $x, y$
- **Dependent variable**: $z$
- **Explicit Function**: $z=f(x,y)$
- **Implicit Function**: $\phi(z,x,y)=0$
- **Domain**: Set of $(x,y)$ points where $f(x,y)$ is defined.
- **Range**: The set of all possible $z$ values.

---

### **Limits**
- The limit of $f(x,y)$ as $(x,y) \rightarrow (x_{0},y_{0})$ is $L$.
$$
\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=L
$$
- The limit, if it exists, is **unique** and **independent of the path** of approach.
- If the limit depends on the path, it **does not exist**.
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 1: Non-existent Limits|Example on non-existent limits]]

---

# Partial Derivatives

### **First-Order Partial Derivatives**
- The derivative of a multivariable function with respect to one variable, holding others constant.
- With respect to **x**:
$$
\frac{\partial z}{\partial x} = \lim_{h\rightarrow0}\frac{f(x+h,y)-f(x,y)}{h}
$$
- With respect to **y**:
$$
\frac{\partial z}{\partial y} = \lim_{h\rightarrow0}\frac{f(x,y+h)-f(x,y)}{h}
$$

### **Second-Order and Mixed Partial Derivatives**
- **Second derivatives**: $f_{xx} = \frac{\partial^{2}z}{\partial x^{2}}$ and $f_{yy} = \frac{\partial^{2}z}{\partial y^{2}}$
- **Mixed derivatives**: $f_{xy} = \frac{\partial^{2}z}{\partial y\partial x}$ and $f_{yx} = \frac{\partial^{2}z}{\partial x\partial y}$
- If derivatives are continuous, then $f_{xy} = f_{yx}$.
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 2: Second-Order Partial Derivatives|Example 2]] and [[College/Semester 1/Mathematics/Unit 1 Examples#Example 3: First and Second Partial Derivatives|Example 3]]

---

# Total Derivative and Chain Rule

### **Total Derivative**
- For $u=f(x,y)$ where $x=\phi(t)$ and $y=\psi(t)$.
$$
\frac{du}{dt} = \frac{\partial u}{\partial x} \frac{dx}{dt} + \frac{\partial u}{\partial y} \frac{dy}{dt}
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 4: Total Derivative|Total derivative example]]

### **Implicit Differentiation**
- For an implicit function $f(x,y)=c$.
$$
\frac{dy}{dx} = -\frac{\partial f / \partial x}{\partial f / \partial y}
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 5: Implicit Differentiation|Implicit differentiation example]]

### **Composite Functions**
- For $u=f(x,y)$ where $x$ and $y$ are functions of $r$ and $s$.
$$
\frac{\partial u}{\partial r} = \frac{\partial u}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial u}{\partial y}\frac{\partial y}{\partial r} \quad , \quad \frac{\partial u}{\partial s} = \frac{\partial u}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial u}{\partial y}\frac{\partial y}{\partial s}
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 6: Composite Functions|Composite function example]]

---

# Homogeneous Functions and Euler's Theorem

- A function is **homogeneous** of degree $n$ if it can be written as $f(x,y) = x^{n}\phi(y/x)$.
- **Euler's Theorem**: If $u$ is a homogeneous function of degree $n$:
$$
x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = nu
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 7: Euler's Theorem Application 1|Application 1]] and [[College/Semester 1/Mathematics/Unit 1 Examples#Example 8: Euler's Theorem Application 2|Application 2]]

---

# Taylor's and Maclaurin Series

### **Taylor's Series**
- Expands $f(x,y)$ around a point $(a,b)$.
$$
f(x,y) = f(a,b) + (x-a)f_x + (y-b)f_y + \frac{1}{2!}\left[ (x-a)^2 f_{xx} + \dots \right]
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 9: Taylor Series Expansion|Taylor series example]]

### **Maclaurin's Series**
- A special case of Taylor's series, expanded around $(0,0)$.
$$
f(x,y) = f(0,0) + xf_x + yf_y + \frac{1}{2!}\left[ x^2 f_{xx} + 2xyf_{xy} + y^2 f_{yy} \right] + \dots
$$
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 10: Maclaurin Series Expansion|Maclaurin series example]]

---

# Maxima and Minima

- **Maximum**: Peak of a surface (dome).
- **Minimum**: Lowest point of a surface (bowl).
- **Saddle Point**: Not an extremum.
- **Critical Point**: A point where $f_x=0$ and $f_y=0$.

### **Working Rule (Second Derivative Test)**
1.  Find **critical points** by solving $f_x = 0$ and $f_y = 0$.
2.  Calculate for each point: $r = f_{xx}$, $s = f_{xy}$, $t = f_{yy}$
3.  Classify using $D = rt - s^2$:
    - $D > 0$ and $r < 0 \implies$ **Local Maximum**
    - $D > 0$ and $r > 0 \implies$ **Local Minimum**
    - $D < 0 \implies$ **Saddle Point**
    - $D = 0 \implies$ Test is inconclusive.
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 11: Finding Extrema|Extrema example]]

---

# Lagrange's Method of Undetermined Multipliers

- Finds extrema of $f(x,y,z)$ subject to a constraint $\phi(x,y,z)=0$.
- **Procedure**:
    1.  Construct the **auxiliary function** with multiplier $\lambda$:
        $$
        F(x,y,z) = f(x,y,z) + \lambda\phi(x,y,z)
        $$
    2.  Solve the system of equations: $F_x = 0$, $F_y = 0$, $F_z=0$, and $\phi=0$.
> See: [[College/Semester 1/Mathematics/Unit 1 Examples#Example 12: Lagrange Multipliers|Lagrange multiplier example]]