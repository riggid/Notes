---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Partial Differential Equations (PDE)

### 1. Formation of PDE
**Question:** Form the partial differential equation by eliminating the arbitrary function from $z = f(x^2 - y^2)$.

**Solution:**
1.  Let $z = f(u)$ where $u = x^2 - y^2$.
2.  Differentiate partially w.r.t $x$:
    $$ p = \frac{\partial z}{\partial x} = f'(u) \cdot \frac{\partial u}{\partial x} = f'(u) \cdot 2x $$
    $$ \implies \frac{p}{2x} = f'(u) $$
3.  Differentiate partially w.r.t $y$:
    $$ q = \frac{\partial z}{\partial y} = f'(u) \cdot \frac{\partial u}{\partial y} = f'(u) \cdot (-2y) $$
    $$ \implies \frac{q}{-2y} = f'(u) $$
4.  Equating the values of $f'(u)$:
    $$ \frac{p}{2x} = \frac{q}{-2y} $$
    $$ -2yp = 2xq \implies py + qx = 0 $$
**Answer:** The required PDE is $py + qx = 0$.

---

### 2. Lagrange's Linear Equation
**Question:** Solve the PDE using Lagrange's method: $y^2p - xyq = x(z-2y)$.

**Solution:**
1.  The standard form is $Pp + Qq = R$.
    Here $P = y^2$, $Q = -xy$, $R = x(z-2y)$.
2.  Auxiliary equations: $\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R}$.
    $$ \frac{dx}{y^2} = \frac{dy}{-xy} = \frac{dz}{x(z-2y)} $$
3.  **First Solution**: Take the first two members:
    $$ \frac{dx}{y^2} = \frac{dy}{-xy} \implies \frac{dx}{y} = \frac{dy}{-x} $$
    $$ x dx = -y dy \implies x dx + y dy = 0 $$
    Integrating: $\frac{x^2}{2} + \frac{y^2}{2} = c_1 \implies x^2 + y^2 = C_1$.
4.  **Second Solution**: Take the second and third members:
    $$ \frac{dy}{-xy} = \frac{dz}{x(z-2y)} $$
    Cancelling $x$ (assuming $x \neq 0$):
    $$ \frac{dy}{-y} = \frac{dz}{z-2y} \implies (z-2y) dy = -y dz $$
    $$ z dy - 2y dy = -y dz \implies y dz + z dy = 2y dy $$
    $$ d(yz) = 2y dy $$
    Integrating: $yz = y^2 + C_2 \implies yz - y^2 = C_2$.
5.  **General Solution**:
    $$ \phi(x^2 + y^2, yz - y^2) = 0 $$

---

### 3. Separation of Variables
**Question:** Solve the one-dimensional heat equation $\frac{\partial u}{\partial t} = c^2 \frac{\partial^2 u}{\partial x^2}$ using the method of separation of variables.

**Solution:**
1.  Let the solution be $u(x, t) = X(x) \cdot T(t)$.
2.  Substitute into the PDE:
    $$ X(x) T'(t) = c^2 X''(x) T(t) $$
    $$ \frac{T'(t)}{c^2 T(t)} = \frac{X''(x)}{X(x)} = k \text{ (constant)} $$
3.  **Case 1 ($k > 0$)**: Trivial/Unstable solutions. (Rejects usually for physical problems).
    **Case 2 ($k = 0$)**: Linear solution $u = (ax+b)t + d$.
    **Case 3 ($k < 0$)**: Let $k = -p^2$.
    -   For $X$: $X'' + p^2 X = 0 \implies X(x) = A \cos(px) + B \sin(px)$.
    -   For $T$: $T' + c^2 p^2 T = 0 \implies T(t) = C e^{-c^2 p^2 t}$.
4.  **General Solution**:
    $$ u(x, t) = (A \cos px + B \sin px) e^{-c^2 p^2 t} $$
    The constants $A, B, p$ are determined by boundary and initial conditions.

---

*Last updated: December 2025*
