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
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 1: Non-existent Limits|Example on non-existent limits]]

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
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 2: Second-Order Partial Derivatives|Example 2]] and [[College/Semester 1/Mathematics/Unit 1/Examples#Example 3: First and Second Partial Derivatives|Example 3]]

---

# Total Derivative and Chain Rule

### **Total Derivative**
- For $u=f(x,y)$ where $x=\phi(t)$ and $y=\psi(t)$.
$$
\frac{du}{dt} = \frac{\partial u}{\partial x} \frac{dx}{dt} + \frac{\partial u}{\partial y} \frac{dy}{dt}
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 4: Total Derivative|Total derivative example]]

### **Implicit Differentiation**
- For an implicit function $f(x,y)=c$.
$$
\frac{dy}{dx} = -\frac{\partial f / \partial x}{\partial f / \partial y}
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 5: Implicit Differentiation|Implicit differentiation example]]

### **Composite Functions**
- For $u=f(x,y)$ where $x$ and $y$ are functions of $r$ and $s$.
$$
\frac{\partial u}{\partial r} = \frac{\partial u}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial u}{\partial y}\frac{\partial y}{\partial r} \quad , \quad \frac{\partial u}{\partial s} = \frac{\partial u}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial u}{\partial y}\frac{\partial y}{\partial s}
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 6: Composite Functions|Composite function example]]

---

# Homogeneous Functions and Euler's Theorem

- A function is **homogeneous** of degree $n$ if it can be written as $f(x,y) = x^{n}\phi(y/x)$.
- **Euler's Theorem**: If $u$ is a homogeneous function of degree $n$:
$$
x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = nu
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 7: Euler's Theorem Application 1|Application 1]] and [[College/Semester 1/Mathematics/Unit 1/Examples#Example 8: Euler's Theorem Application 2|Application 2]]

---

# Taylor's and Maclaurin Series

### **Taylor's Series**
- Expands $f(x,y)$ around a point $(a,b)$.
$$
f(x,y) = f(a,b) + (x-a)f_x + (y-b)f_y + \frac{1}{2!}\left[ (x-a)^2 f_{xx} + \dots \right]
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 9: Taylor Series Expansion|Taylor series example]]

### **Maclaurin's Series**
- A special case of Taylor's series, expanded around $(0,0)$.
$$
f(x,y) = f(0,0) + xf_x + yf_y + \frac{1}{2!}\left[ x^2 f_{xx} + 2xyf_{xy} + y^2 f_{yy} \right] + \dots
$$
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 10: Maclaurin Series Expansion|Maclaurin series example]]

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
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 11: Finding Extrema|Extrema example]]

---

# Lagrange's Method of Undetermined Multipliers

- Finds extrema of $f(x,y,z)$ subject to a constraint $\phi(x,y,z)=0$.
- **Procedure**:
    1.  Construct the **auxiliary function** with multiplier $\lambda$:
        $$
        F(x,y,z) = f(x,y,z) + \lambda\phi(x,y,z)
        $$
    2.  Solve the system of equations: $F_x = 0$, $F_y = 0$, $F_z=0$, and $\phi=0$.
> See: [[College/Semester 1/Mathematics/Unit 1/Examples#Example 12: Lagrange Multipliers|Lagrange multiplier example]]





#  Unit 1 & 2 Math Formulas

## I. Partial Differentiation

### A. First-Order Partial Derivatives
For a function $z = f(x, y)$:

$$\frac{\partial z}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$

$$\frac{\partial z}{\partial y} = \lim_{h \to 0} \frac{f(x, y+h) - f(x, y)}{h}$$

### B. Second-Order Partial Derivatives
**Pure Derivatives:**
$$z_{xx} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial x^2}$$
$$z_{yy} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial y^2}$$

**Mixed Partial Derivatives:**
$$z_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right) = \frac{\partial^2 z}{\partial y \partial x}$$
$$z_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right) = \frac{\partial^2 z}{\partial x \partial y}$$

**Clairaut's Theorem (Equality of Mixed Partials):**
For continuous second derivatives, the order of differentiation does not matter.
$$z_{xy} = z_{yx}$$

### C. Total Derivatives & Chain Rule

**Total Derivative Rule (Implicitly defined $x$ and $y$ as functions of $t$):**
If $z = f(x, y)$ where $x = x(t)$ and $y = y(t)$, then:
$$\frac{dz}{dt} = \frac{\partial z}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial z}{\partial y} \cdot \frac{dy}{dt}$$

**Implicit Differentiation (If $z = f(x,y)$ and $\frac{dz}{dx}=0$):**
$$\frac{dy}{dx} = -\frac{z_x}{z_y}$$

### D. Homogeneous Functions and Euler's Theorem

**Homogeneous Function Definition:**
A function $u=f(x,y)$ is homogeneous of degree $n$ if it can be expressed as:
$$u = x^n g\left(\frac{y}{x}\right) \quad \text{or} \quad u = y^n g\left(\frac{x}{y}\right)$$

**Euler's Theorem (Statement 1):**
If $u=f(x,y)$ is a homogeneous function of degree $n$:
$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = nu$$

**Euler's Theorem (Corollary 1):**
$$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy \frac{\partial^2 u}{\partial x \partial y} + y^2 \frac{\partial^2 u}{\partial y^2} = n(n-1)u$$

**Euler's Theorem Deduction (If $z=f(u)$ is a homogeneous function of degree $n$):**
$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n \cdot \frac{f(u)}{f'(u)}$$

### E. Maxima and Minima

**Necessary Conditions for Stationary Points (Extrema):**
$$\frac{\partial f}{\partial x} = 0 \quad \text{and} \quad \frac{\partial f}{\partial y} = 0$$

**Second Derivative Test (Sufficient Conditions):**
Define the second partials:
$$r = f_{xx}, \quad t = f_{yy}, \quad s = f_{xy}$$

Calculate the determinant: $D = rt - s^2$

1.  If $D > 0$ and $r < 0$: **Maximum** at $(a, b)$.
2.  If $D > 0$ and $r > 0$: **Minimum** at $(a, b)$.
3.  If $D < 0$: **Saddle point**.
4.  If $D = 0$: Further investigation required.

**Lagrange's Method of Undetermined Multipliers (To maximize/minimize $f(x,y,z)$ subject to $\phi(x,y,z)=0$):**
Form the auxiliary function $F$:
$$F(x,y,z, \lambda) = f(x,y,z) + \lambda \phi(x,y,z)$$
Solve the system of equations:
$$F_x = 0, \quad F_y = 0, \quad F_z = 0, \quad \phi(x,y,z) = 0$$

---

## II. Differential Equations

### A. First-Order Linear Equations

**General Form:**
$$\frac{dy}{dx} + P(x)y = Q(x)$$

**Integrating Factor (I.F.):**
$$I.F. = e^{\int P \, dx}$$

**General Solution:**
$$y \cdot (I.F.) = \int Q \cdot (I.F.) \, dx + C$$

**Form with respect to $y$ (General Form):**
$$\frac{dx}{dy} + P(y)x = Q(y)$$

**Integrating Factor (I.F.):**
$$I.F. = e^{\int P \, dy}$$

**General Solution:**
$$x \cdot (I.F.) = \int Q \cdot (I.F.) \, dy + C$$

### B. Bernoulli's Differential Equation

**General Form:**
$$\frac{dy}{dx} + P(x)y = Q(x)y^n$$

**Procedure:**
1.  Divide by $y^n$: $y^{-n} \frac{dy}{dx} + P y^{1-n} = Q$
2.  Substitute $t = y^{1-n}$. The equation transforms into a linear form: $$\frac{dt}{dx} + (1-n)P t = (1-n)Q$$
3.  Solve the resulting linear equation for $t$, then substitute back $y^{1-n}$ for $t$.

### C. Exact Differential Equations

**General Form:**
$$M(x,y) \, dx + N(x,y) \, dy = 0$$

**Condition for Exactness:**
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

**General Solution:**
$$\int M \, dx \quad \text{(treating } y \text{ as constant)} + \int \text{(terms of } N \text{ independent of } x) \, dy = C$$

### D. Higher Order Homogeneous Linear DE with Constant Coefficients

**Auxiliary Equation (A.E.):**
$f(m)=0$

| Roots of Auxiliary Equation ($f(m)=0$) | Complementary Function ($y_c$) |
| :--- | :--- |
| **Case 1:** Real and Distinct Roots ($m_1, m_2$) | $$y_c = c_1 e^{m_1 x} + c_2 e^{m_2 x}$$ |
| **Case 2:** Real and Equal Roots ($m_1 = m_2 = m$) | $$y_c = (c_1 + c_2 x) e^{m x}$$ |
| **Case 3:** Complex Conjugate Roots ($\alpha \pm i\beta$) | $$y_c = e^{\alpha x} (c_1 \cos(\beta x) + c_2 \sin(\beta x))$$ |

### E. Non-Homogeneous Linear DE

**General Solution:**
$$y = y_c + y_p$$

**Type $f(D)y = e^{ax}$**

**Particular Integral ($y_p$):**
$$y_p = \frac{1}{f(D)} e^{ax} = \frac{1}{f(a)} e^{ax} \quad \text{if } f(a) \ne 0$$
$$\text{If } f(a) = 0 \text{ (Case of Failure): } y_p = x \frac{1}{f'(a)} e^{ax}$$
*If $f'(a) = 0$, repeat: $y_p = x^2 \frac{1}{f''(a)} e^{ax}$, and so on.*