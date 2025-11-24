# [Back](../Mathematics.md)
***
[Core Notes](Core%20Notes.md) | [Examples](Examples.md) | [Q&A](Q&A.md)
***
# Unit 3: Worked Examples

### Example 1: Eliminate Arbitrary Function (z=f(x²+y²))
Eliminate the arbitrary function from $z = f(x^2 + y^2)$ to obtain a first-order partial differential equation.

#### Solution
Let $u = x^2 + y^2$. So $z = f(u)$.
Differentiating partially with respect to $x$ and $y$:
$$p = \frac{\partial z}{\partial x} = \frac{dz}{du} \frac{\partial u}{\partial x} = f'(u) \cdot 2x$$
$$q = \frac{\partial z}{\partial y} = \frac{dz}{du} \frac{\partial u}{\partial y} = f'(u) \cdot 2y$$
Eliminating $f'(u)$ from the two equations:
From the first equation, $f'(u) = p/(2x)$. Substitute this into the second equation:
$$q = \frac{p}{2x} \cdot 2y \implies q = \frac{p y}{x} \implies xq = yp$$
The required first-order PDE is $xq - yp = 0$.

---

### Example 2: Eliminate Arbitrary Functions (u=f(x+ct)+g(x–ct))
Obtain a second-order partial differential equation by eliminating the arbitrary functions from $u = f(x + ct) + g(x - ct)$.

#### Solution
Given $u = f(x + ct) + g(x - ct)$.
Differentiating $u$ partially with respect to $x$ and $t$:
$$\frac{\partial u}{\partial x} = f'(x + ct) + g'(x - ct)$$
$$\frac{\partial u}{\partial t} = cf'(x + ct) - cg'(x - ct)$$
Now, take the second partial derivatives:
$$\frac{\partial^2 u}{\partial x^2} = f''(x + ct) + g''(x - ct)$$
$$\frac{\partial^2 u}{\partial t^2} = c^2 f''(x + ct) + c^2 g''(x - ct)$$
From the second equation, $\frac{\partial^2 u}{\partial t^2} = c^2 (f''(x + ct) + g''(x - ct))$.
Substitute $\frac{\partial^2 u}{\partial x^2}$ into this expression:
$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$$
This is the one-dimensional wave equation.

---

### Example 3: Eliminate Arbitrary Function (phi(u,v)=0, u=xyz, v=x+y+z)
Obtain the partial differential equation governing the equations $\phi(u, v) = 0$, where $u = xyz$ and $v = x + y + z$.

#### Solution
Given $\phi(u, v) = 0$, where $u = xyz$ and $v = x+y+z$.
The required PDE is of the form $P p + Q q = R$, where $p = \partial z / \partial x$ and $q = \partial z / \partial y$.
The coefficients $P, Q, R$ are given by Jacobians:
$$P = \frac{\partial(u, v)}{\partial(y, z)} = \begin{vmatrix} \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z} \\ \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z} \end{vmatrix} = \begin{vmatrix} xz & xy \\ 1 & 1 \end{vmatrix} = xz - xy = x(z - y)$$
$$Q = \frac{\partial(u, v)}{\partial(z, x)} = \begin{vmatrix} \frac{\partial u}{\partial z} & \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial z} & \frac{\partial v}{\partial x} \end{vmatrix} = \begin{vmatrix} xy & yz \\ 1 & 1 \end{vmatrix} = xy - yz = y(x - z)$$
$$R = \frac{\partial(u, v)}{\partial(x, y)} = \begin{vmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{vmatrix} = \begin{vmatrix} yz & xz \\ 1 & 1 \end{vmatrix} = yz - xz = z(y - x)$$
Substituting these into the Lagrange's form $Pp + Qq = R$:
$$x(z - y)p + y(x - z)q = z(y - x)$$
This can be rewritten as $px(y-z) + qy(z-x) = z(x-y)$.

---

### Example 4: Eliminate Arbitrary Function (f(x+y+z, x²+y²+z²)=0)
Obtain the partial differential equation by eliminating the arbitrary function from the equation: $f(x + y + z, x^2 + y^2 + z^2) = 0$.

#### Solution
Let $u = x + y + z$ and $v = x^2 + y^2 + z^2$. Note that $z$ is implicitly $z(x,y)$.
The given equation is $f(u, v) = 0$.
Differentiating partially with respect to $x$ and $y$:
Applying $\frac{\partial}{\partial x}(f(u,v))=0$:
$$\frac{\partial f}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial x} = 0$$
$$\frac{\partial f}{\partial u}\left(1 + \frac{\partial z}{\partial x}\right) + \frac{\partial f}{\partial v}\left(2x + 2z\frac{\partial z}{\partial x}\right) = 0$$
$$\frac{\partial f}{\partial u}(1 + p) + \frac{\partial f}{\partial v}(2x + 2zp) = 0 \quad (1)$$
Applying $\frac{\partial}{\partial y}(f(u,v))=0$:
$$\frac{\partial f}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial y} = 0$$
$$\frac{\partial f}{\partial u}\left(1 + \frac{\partial z}{\partial y}\right) + \frac{\partial f}{\partial v}\left(2y + 2z\frac{\partial z}{\partial y}\right) = 0$$
$$\frac{\partial f}{\partial u}(1 + q) + \frac{\partial f}{\partial v}(2y + 2zq) = 0 \quad (2)$$
To eliminate $\frac{\partial f}{\partial u}$ and $\frac{\partial f}{\partial v}$, we can cross-multiply (assuming they are non-zero):
From (1) and (2), we get:
$$(1 + p)(2y + 2zq) - (1 + q)(2x + 2zp) = 0$$
Divide by 2:
$$(1 + p)(y + zq) - (1 + q)(x + zp) = 0$$
This is the required first-order PDE.

---

### Example 5: Lagrange's Equation (xp+yq=3z)
Find the general solution of the Lagrange's equation $xp + yq = 3z$.

#### Solution
The auxiliary equations are:
$$\frac{dx}{x} = \frac{dy}{y} = \frac{dz}{3z}$$
**1. Solve the first pair:** $\frac{dx}{x} = \frac{dy}{y}$
Integrating both sides: $\ln|x| = \ln|y| + \ln|C_1|$
$$\ln|x/y| = \ln|C_1| \implies \frac{x}{y} = C_1$$
This is the first independent solution, $u = x/y$.

**2. Solve the first and third pair:** $\frac{dx}{x} = \frac{dz}{3z}$
Integrating both sides: $\ln|x| = \frac{1}{3}\ln|z| + \frac{1}{3}\ln|C_2|$
$$3\ln|x| = \ln|z| + \ln|C_2| \implies \ln|x^3/z| = \ln|C_2| \implies \frac{x^3}{z} = C_2$$
This is the second independent solution, $v = x^3/z$.

The general solution is $\phi(C_1, C_2) = 0$, or $\phi\left(\frac{x}{y}, \frac{x^3}{z}\right) = 0$.
(It can also be written in forms like $\frac{x^3}{z} = F(\frac{x}{y})$ or $x^3 = z F(\frac{x}{y})$).

---

### Example 6: Lagrange's Equation (yzp-xzq=xy)
Find the general solution of the Lagrange's equation $yzp - xzq = xy$.

#### Solution
The auxiliary equations are:
$$\frac{dx}{yz} = \frac{dy}{-xz} = \frac{dz}{xy}$$
**1. Solve the first and second fractions:** $\frac{dx}{yz} = \frac{dy}{-xz}$
Cancel $z$ (assuming $z \neq 0$): $\frac{dx}{y} = \frac{dy}{-x}$
Rearrange: $xdx + ydy = 0$.
Integrating both sides: $\frac{x^2}{2} + \frac{y^2}{2} = C_1'$
$$x^2 + y^2 = C_1$$
This is the first independent solution, $u = x^2 + y^2$.

**2. Solve the first and third fractions:** $\frac{dx}{yz} = \frac{dz}{xy}$
Cancel $y$ (assuming $y \neq 0$): $\frac{dx}{z} = \frac{dz}{x}$
Rearrange: $xdx - zdz = 0$.
Integrating both sides: $\frac{x^2}{2} - \frac{z^2}{2} = C_2'$
$$x^2 - z^2 = C_2$$
This is the second independent solution, $v = x^2 - z^2$.

The general solution is $\phi(C_1, C_2) = 0$, or $\phi(x^2 + y^2, x^2 - z^2) = 0$.

---

### Example 7: Lagrange's Equation (z(z²+xy)(px–qy)=x⁴)
Find the general solution of the Lagrange's equation $z(z^2 + xy)(px - qy) = x^4$.

#### Solution
The given equation can be written as $z(z^2 + xy)p x - z(z^2 + xy)q y = x^4$.
So $P = xz(z^2 + xy)$, $Q = -yz(z^2 + xy)$, $R = x^4$.
The auxiliary equations are:
$$\frac{dx}{xz(z^2 + xy)} = \frac{dy}{-yz(z^2 + xy)} = \frac{dz}{x^4}$$
**1. Solve the first and second fractions:** $\frac{dx}{xz(z^2 + xy)} = \frac{dy}{-yz(z^2 + xy)}$
Cancel $z(z^2 + xy)$ (assuming it's non-zero): $\frac{dx}{x} = \frac{dy}{-y}$
Rearrange: $\frac{dx}{x} + \frac{dy}{y} = 0$.
Integrating both sides: $\ln|x| + \ln|y| = \ln|C_1|$
$$\ln|xy| = \ln|C_1| \implies xy = C_1$$
This is the first independent solution, $u = xy$.

**2. Solve using previous solution and multipliers:**
Take $\frac{dx}{xz(z^2 + xy)} = \frac{dz}{x^4}$.
$$\frac{dx}{z(z^2 + C_1)} = \frac{dz}{x^3}$$
$$x^3 dx = z(z^2 + C_1) dz$$
Integrating both sides:
$$\int x^3 dx = \int (z^3 + C_1 z) dz$$
$$\frac{x^4}{4} = \frac{z^4}{4} + C_1 \frac{z^2}{2} + C_2'$$
Multiply by 4: $x^4 = z^4 + 2 C_1 z^2 + 4 C_2'$. Let $C_2 = 4 C_2'$.
$$x^4 - z^4 - 2 C_1 z^2 = C_2$$
Substitute $C_1 = xy$:
$$x^4 - z^4 - 2(xy)z^2 = C_2$$
This is the second independent solution, $v = x^4 - z^4 - 2xyz^2$.

The general solution is $\phi(xy, x^4 - z^4 - 2xyz^2) = 0$.

---

### Example 8: Lagrange's Equation (px(x+y)=qy(x+y)–...))
Find the general solution of the Lagrange's equation $px(x+y) = qy(x+y) - (x-y)(2x+2y+z)$.

#### Solution
The equation is $px(x+y) - qy(x+y) = -(x-y)(2x+2y+z)$.
So $P = x(x+y)$, $Q = -y(x+y)$, $R = -(x-y)(2x+2y+z)$.
The auxiliary equations are:
$$\frac{dx}{x(x+y)} = \frac{dy}{-y(x+y)} = \frac{dz}{-(x-y)(2x+2y+z)}$$
**1. Solve the first and second fractions:** $\frac{dx}{x(x+y)} = \frac{dy}{-y(x+y)}$
Cancel $(x+y)$: $\frac{dx}{x} = \frac{dy}{-y}$
Rearrange: $\frac{dx}{x} + \frac{dy}{y} = 0$.
Integrating: $\ln|x| + \ln|y| = \ln|C_1| \implies xy = C_1$.
This is the first independent solution, $u = xy$.

**2. Solve using multipliers:**
Consider the multipliers $a=1, b=1, c=0$:
$$\frac{dx+dy}{x(x+y)-y(x+y)} = \frac{dx+dy}{(x-y)(x+y)}$$
Now, consider the sum of the first two ratios and the third ratio:
$$\frac{dx+dy}{(x+y)(x-y)} = \frac{dz}{-(x-y)(2x+2y+z)}$$
Cancel $(x-y)$ (assuming it's non-zero):
$$\frac{dx+dy}{x+y} = \frac{dz}{-(2(x+y)+z)}$$
Let $(x+y) = s$. Then $\frac{ds}{s} = \frac{dz}{-(2s+z)}$.
This is a homogeneous ODE in $s$ and $z$.
Consider $(2s+z)ds + s dz = 0$. This is exact if $\frac{\partial}{\partial z}(2s+z) = \frac{\partial}{\partial s}(s)$.
$1=1$, so it is exact.
The solution is $\int (2s+z)ds + \int (s \text{ term without } s)dz = C_2'$.
$2\frac{s^2}{2} + sz = C_2'$.
$$s^2 + sz = C_2'$$
Substitute back $s = x+y$:
$$(x+y)^2 + (x+y)z = C_2$$
This is the second independent solution, $v = (x+y)(x+y+z)$.

The general solution is $\phi(xy, (x+y)(x+y+z)) = 0$.

---

### Example 9: Lagrange's Equation ((x²–y²–yz)p+...)
Find the general solution of the Lagrange's equation $(x^2 - y^2 - yz)p + (x^2 - y^2 - zx)q = z(x - y)$.

#### Solution
$P = (x^2 - y^2 - yz)$, $Q = (x^2 - y^2 - zx)$, $R = z(x - y)$.
The auxiliary equations are:
$$\frac{dx}{x^2 - y^2 - yz} = \frac{dy}{x^2 - y^2 - zx} = \frac{dz}{z(x - y)}$$
**1. Using multipliers $1, -1, 0$ for a combination with $dx-dy$:**
$$\frac{dx - dy}{(x^2 - y^2 - yz) - (x^2 - y^2 - zx)} = \frac{dx - dy}{z(x - y)}$$
Now equate with the third fraction:
$$\frac{dx - dy}{z(x - y)} = \frac{dz}{z(x - y)}$$
This implies $dx - dy = dz$, or $dx - dy - dz = 0$.
Integrating directly: $x - y - z = C_1$.
This is the first independent solution, $u = x - y - z$.

**2. Using multipliers $x, -y, 0$ for $xdx - ydy$:**
Consider $\frac{dx}{P} = \frac{dy}{Q} = \frac{xdx - ydy}{x(x^2 - y^2 - yz) - y(x^2 - y^2 - zx)}$.
Denominator: $x^3 - xy^2 - xyz - x^2y + y^3 + xyz = x^3 - xy^2 - x^2y + y^3 = x(x^2-y^2) - y(x^2-y^2) = (x-y)(x^2-y^2)$.
So, $\frac{xdx - ydy}{(x-y)(x^2-y^2)} = \frac{dz}{z(x-y)}$
Cancel $(x-y)$: $\frac{xdx - ydy}{x^2-y^2} = \frac{dz}{z}$
This is $\frac{1}{2}\frac{d(x^2-y^2)}{x^2-y^2} = \frac{dz}{z}$.
Integrating: $\frac{1}{2}\ln|x^2-y^2| = \ln|z| + \ln|\sqrt{C_2}|$
$$\ln|x^2-y^2| = 2\ln|z| + \ln|C_2| \implies \ln\left|\frac{x^2-y^2}{z^2}\right| = \ln|C_2| \implies \frac{x^2-y^2}{z^2} = C_2$$
This is the second independent solution, $v = \frac{x^2-y^2}{z^2}$.

The general solution is $\phi(x - y - z, \frac{x^2 - y^2}{z^2}) = 0$.

---

### Example 10: Separation of Variables (3uₓ+2uᵧ=0)
Use the separation of variables technique to solve $3u_x + 2u_y = 0$ with $u(x, 0) = 4e^{-x}$.

#### Solution
Assume a separable solution $u(x, y) = X(x)Y(y)$.
Then $u_x = X'Y$ and $u_y = XY'$.
Substitute into the PDE:
$$3X'Y + 2XY' = 0$$
Rearrange by dividing by $XY$:
$$\frac{3X'}{X} + \frac{2Y'}{Y} = 0 \implies \frac{3X'}{X} = -\frac{2Y'}{Y}$$
Since the LHS is a function of $x$ alone and the RHS is a function of $y$ alone, both must be equal to a constant, say $k$.
$$\frac{3X'}{X} = k \implies 3X' = kX \implies X' - \frac{k}{3}X = 0$$
$$\frac{2Y'}{Y} = -k \implies 2Y' = -kY \implies Y' + \frac{k}{2}Y = 0$$
Solving these two first-order ODEs:
From $X' - \frac{k}{3}X = 0$, $X(x) = C_1 e^{(k/3)x}$.
From $Y' + \frac{k}{2}Y = 0$, $Y(y) = C_2 e^{(-k/2)y}$.
So the general solution is $u(x, y) = X(x)Y(y) = C_1 C_2 e^{(k/3)x} e^{(-k/2)y} = C e^{k(x/3 - y/2)}$.

Now apply the initial condition $u(x, 0) = 4e^{-x}$:
$$u(x, 0) = C e^{k(x/3 - 0)} = C e^{kx/3}$$
We need this to be equal to $4e^{-x}$.
Comparing $C e^{kx/3} = 4e^{-x}$:
This implies $C = 4$ and $k/3 = -1$, so $k = -3$.
Substitute $C=4$ and $k=-3$ into the general solution:
$$u(x, y) = 4 e^{-3(x/3 - y/2)} = 4 e^{-x + 3y/2} = 4 e^{-(x - 3y/2)}$$

---

### Example 11: Solution of Homogeneous PDE ((D²–D'²)z=0)
Find the general solution of $(D^2 - D'^2)z = 0$.

#### Solution
The given equation is $(D^2 - D'^2)z = 0$.
Factor the operator: $(D - D')(D + D')z = 0$.
This is a homogeneous PDE in derivatives with distinct linear factors.
The factors are $(D - m_1 D')$ and $(D - m_2 D')$, where $m_1 = 1$ and $m_2 = -1$.
The general solution for homogeneous PDE is $\phi_1(y + m_1 x) + \phi_2(y + m_2 x)$.
Here, $m_1 = 1$ (from $D-D'$ meaning $D - 1D'$) means $y + 1x$.
And $m_2 = -1$ (from $D+D'$ meaning $D - (-1)D'$) means $y - 1x$.
So the solution is:
$$z = \phi_1(y + x) + \phi_2(y - x)$$
(The source uses $(-x-y)$, which implies $D-(-1)D'$, and $(x-y)$, which implies $D-1D'$. The convention $\phi(y+mx)$ or $\phi(x-my)$ are both valid. The source's form $z = \phi_1(-x-y) + \phi_2(x-y)$ is equivalent to my solution by re-labeling constants and functions, reflecting the freedom in arbitrary functions. My preference is $y+mx$ which maps $m$ to positive or negative coefficient of $x$. So $m_1 = 1$, $m_2 = -1$. It can also be $m_1 = -1, m_2=1$ for general result.)

---

### Example 12: Solution of Homogeneous PDE (D³–6D²D’²+...)z=0)
Find the general solution of $(D^3 - 6D^2 D' + 11DD'^2 - 6D'^3)z = 0$.

#### Solution
The given equation is $(D^3 - 6D^2 D' + 11DD'^2 - 6D'^3)z = 0$.
This is a homogeneous PDE. We can find the roots of the characteristic equation by setting $D=m$ and $D'=1$:
$m^3 - 6m^2 + 11m - 6 = 0$.
By inspection, $m=1$ is a root: $1 - 6 + 11 - 6 = 0$.
Dividing by $(m-1)$, we get $m^2 - 5m + 6 = 0$, which factors as $(m-2)(m-3) = 0$.
So the roots are $m_1=1, m_2=2, m_3=3$.
The factors of the operator are $(D - D')$, $(D - 2D')$, and $(D - 3D')$.
The general solution is of the form $z = \phi_1(y+m_1x) + \phi_2(y+m_2x) + \phi_3(y+m_3x)$.
$$z = \phi_1(y + x) + \phi_2(y + 2x) + \phi_3(y + 3x)$$

---

### Example 13: Solution of Homogeneous PDE (D⁴–2D²D’²+D’⁴)z=0)
Find the general solution of $(D^4 - 2D^2 D'^2 + D'^4)z = 0$.

#### Solution
The given equation is $(D^4 - 2D^2 D'^2 + D'^4)z = 0$.
Factor the operator:
$$(D^2 - D'^2)^2 z = 0$$
$$((D - D')(D + D'))^2 z = 0$$
$$(D - D')^2 (D + D')^2 z = 0$$
This PDE has repeated linear factors: $(D - D')$ is repeated twice, and $(D + D')$ is repeated twice.
For a factor $(D - mD')^k$, the solution is $\phi_1(y+mx) + x\phi_2(y+mx) + \dots + x^{k-1}\phi_k(y+mx)$.

1.  **For $(D - D')^2$**: Here $m=1$ and $k=2$.
    The part of the solution is $\phi_1(y + x) + x\phi_2(y + x)$.
    (The source uses $(-x-y)$, which implies $D-(-1)D'$, so $m=-1$. For $D-D'$, $m=1$.)
    Using the source's interpretation of factors $(D-D')$ related to $(-x-y)$ and $(D+D')$ related to $(x-y)$ then:
    $(D-D')^2$ relates to $y+x$ if written as $(D-(-1)D')^2$ or $y+x$ for the more common form
    Let's align to the interpretation of the factors $D-mD'$ where $m$ is the coefficient of $D'$.
    So for $(D-D')^2$, $m=1$, $k=2$. Solutions: $\phi_1(y+x) + x\phi_2(y+x)$.
    For $(D+D')^2$, $m=-1$, $k=2$. Solutions: $\phi_3(y-x) + x\phi_4(y-x)$.
Combining these:
$$z = \phi_1(y + x) + x\phi_2(y + x) + \phi_3(y - x) + x\phi_4(y - x)$$
(The provided solution format using $\psi$ functions and $x\phi()$ and $\phi()$ is also valid.)

---

### Example 14: Solution of Homogeneous PDE (4D³–3DD’²+D’³)z=0)
Find the general solution of $(4D^3 - 3DD'^2 + D'^3)z = 0$.

#### Solution
The given equation is $(4D^3 - 3DD'^2 - D'^3)z = 0$. (Note: OCR seems to have a typo, one minus sign is missing). Taking it from the document (4D³ - 3DD'² + D'³)z = 0
The characteristic equation for $m=D/D'$ is $4m^3 - 3m^2 + 1 = 0$.
Let's check roots by inspection. $m=1$ is not a root. $m=-1$ is a root: $4(-1) - 3(-1)(1) + 1 = -4+3+1 = 0$.
So $(m+1)$ is a factor. Divide $(4m^3 - 3m + 1)$ by $(m+1)$:
$$(m+1)(4m^2 - 4m + 1) = 0$$
The quadratic factor is $(2m - 1)^2$.
So the roots are $m_1 = -1$ (single root) and $m_2 = 1/2$ (repeated root with multiplicity 2).
The factors of the operator are $(D + D')$ (for $m=-1$) and $(2D - D')^2$ (for $m=1/2$).
The general solution for a non-homogeneous case with repeated roots is $z = \phi_1(y+m_1x) + \phi_2(y+m_2x) + x\phi_3(y+m_2x)$
$$z = \phi_1(y - x) + \phi_2(y + \frac{1}{2}x) + x\phi_3(y + \frac{1}{2}x)$$
We can also write the second term as the factor $(2D-D')^2$ as $2(y+x/2)$.
$$z = \phi_1(y - x) + \phi_2(2y + x) + x\phi_3(2y + x)$$

---

### Example 15: Particular Integral (e²ˣ⁺³ʸ)
Find the general solution of the partial differential equation $[2D^2 - DD' - (D')^2 + D - D']z = e^{2x+3y}$.

#### Solution
The operator is $F(D, D') = 2D^2 - DD' - (D')^2 + D - D'$.
The right-hand side is $f(x, y) = e^{2x+3y}$, so $a=2, b=3$.

**1. Complementary Function (CF):**
Factor $F(D, D')$:
$F(D, D') = (2D + D' + 1)(D - D')$.
Homogeneous equation: $(2D + D' + 1)(D - D')z = 0$.
*   For the factor $(D - D')$: $a_1=1, b_1=-1, c_1=0$. Solution is $\phi_1(y+x)$.
*   For the factor $(2D + D' + 1)$: $a_2=2, b_2=1, c_2=1$. Solution is $e^{-(1x)/2}\phi_2(1x - 2y) = e^{-x/2}\phi_2(x-2y)$.
So, the CF is $z_{CF} = \phi_1(y + x) + e^{-x/2}\phi_2(x - 2y)$.

**2. Particular Integral (PI):**
Evaluate $F(a, b)$ with $a=2, b=3$:
$F(2, 3) = 2(2)^2 - (2)(3) - (3)^2 + 2 - 3 = 2(4) - 6 - 9 + 2 - 3 = 8 - 6 - 9 + 2 - 3 = -8$.
Since $F(2, 3) = -8 \neq 0$, the PI is:
$$z_{PI} = \frac{1}{F(2, 3)} e^{2x+3y} = \frac{1}{-8} e^{2x+3y}$$

**3. General Solution:**
$z = z_{CF} + z_{PI} = \phi_1(y + x) + e^{-x/2}\phi_2(x - 2y) - \frac{1}{8} e^{2x+3y}$.

---

### Example 16: Particular Integral (e(x+2y)/2)
Find a particular integral of the differential equation $(4D^2 + 3DD' - D'^2 - D - D')z = 3e^{(x+2y)/2}$.

#### Solution
The operator is $F(D, D') = 4D^2 + 3DD' - D'^2 - D - D'$.
The right-hand side is $f(x, y) = 3e^{(x+2y)/2}$, so $a=1/2, b=1$.
**1. Check for Case of Failure for $e^{ax+by}$ form:**
Evaluate $F(a, b)$ with $a=1/2, b=1$:
$F(1/2, 1) = 4(1/2)^2 + 3(1/2)(1) - (1)^2 - (1/2) - 1$
$= 4(1/4) + 3/2 - 1 - 1/2 - 1 = 1 + 3/2 - 1 - 1/2 - 1 = 0$.
Since $F(1/2, 1) = 0$, this is a case of failure.

**2. Apply the modified procedure for failure case:**
We usually express $F(D,D')$ as $F(D,D') = F(D_0+a, D'_0+b) \rightarrow F(D+a, D'+b)$.
Here, $z_{PI} = e^{ax+by} \frac{1}{F(D+a, D'+b)} (3)$.
The operator is $F(D, D') = (4D^2 + 3DD' - D'^2) - (D + D')$.
Substitute $D \rightarrow D+1/2, D' \rightarrow D'+1$:
$F(D+1/2, D'+1) = 4(D+1/2)^2 + 3(D+1/2)(D'+1) - (D'+1)^2 - (D+1/2) - (D'+1)$.
This is a complex polynomial. The solution provided uses a specific factorization or expansion for $F(D,D')$.
Let's use the factorization from the text: $F(D, D') = (D+D')(4D - D' - 1)$.
Then $z_{PI} = \frac{1}{(D+D')(4D - D' - 1)} 3e^{(x+2y)/2}$.
For $D+D'$ and $a=1/2, b=1$, $1/2+1 = 3/2 \neq 0$.
For $4D-D'-1$ and $a=1/2, b=1$, $4(1/2) - 1 - 1 = 2-1-1 = 0$. This is the failing factor.
So, let's treat the non-failing factor first:
$$z_{PI} = 3e^{(x+2y)/2} \frac{1}{ (D+1/2)+(D'+1) } \frac{1}{ (4(D+1/2)-(D'+1)-1) }(1)$$
This translates to $3e^{(x+2y)/2} \frac{1}{D+D'+3/2} \frac{1}{4D-D'-1}(1)$.
Let's take the simpler method, which is to differentiate with respect to $x$ when $F(a,b)=0$.
Here, $F(D,D') = (4D-D'-1)(D+D')$.
Let $G(D,D') = D+D'$. $G(1/2,1) = 3/2 \neq 0$.
Let $H(D,D') = 4D-D'-1$. $H(1/2,1) = 0$.
So $z_{PI} = \frac{1}{G(1/2,1)}\left( \frac{x \cdot 3e^{(x+2y)/2}}{ \frac{\partial}{\partial D}(H(D,D')) \text{ at } (1/2,1) } \right)$.
$\frac{\partial H}{\partial D} = 4$.
$$z_{PI} = \frac{1}{3/2} \left( \frac{x \cdot 3e^{(x+2y)/2}}{4} \right) = \frac{2}{3} \cdot \frac{3x}{4} e^{(x+2y)/2} = \frac{x}{2} e^{(x+2y)/2}$$
This matches the solution from the text.

---

### Example 17: Particular Integral (sin(x-2y))
Find the particular integral of the differential equation $2\frac{\partial^2 z}{\partial x^2} - 3\frac{\partial^2 z}{\partial x \partial y} + \frac{\partial^2 z}{\partial y^2} = \sin(x - 2y)$.

#### Solution
The given PDE in operator form is $[2D^2 - 3DD' + D'^2]z = \sin(x - 2y)$.
Here $a=1, b=-2$.
Substitute $D^2 \rightarrow -a^2 = -(1)^2 = -1$.
Substitute $DD' \rightarrow -ab = -(1)(-2) = 2$.
Substitute $D'^2 \rightarrow -b^2 = -(-2)^2 = -4$.
Evaluate the operator $F(-a^2, -ab, -b^2)$:
$$F(-1, 2, -4) = 2(-1) - 3(2) + (-4) = -2 - 6 - 4 = -12$$
Since it is not zero, the particular integral is:
$$z_{PI} = \frac{1}{-12} \sin(x - 2y)$$

---

### Example 18: Particular Integral (x²+y²)
Find the particular integral of the differential equation $\left(\frac{\partial^2}{\partial x^2} - \frac{\partial^2}{\partial y^2}\right)z = x^2 + y^2$.

#### Solution
The PDE in operator form is $[D^2 - D'^2]z = x^2 + y^2$.
Here $f(x, y) = x^2 + y^2$.
$$z_{PI} = \frac{1}{D^2 - D'^2} (x^2 + y^2)$$
Factor $D^2 - D'^2 = D^2(1 - (D'/D)^2)$.
$$z_{PI} = \frac{1}{D^2 (1 - (D'/D)^2)} (x^2 + y^2) = D^{-2} (1 - (D'/D)^2)^{-1} (x^2 + y^2)$$
Using binomial expansion $(1-X)^{-1} = 1 + X + X^2 + \dots$:
$$z_{PI} = D^{-2} (1 + (D'/D)^2 + (D'/D)^4 + \dots) (x^2 + y^2)$$
Operate term by term. Note that $D'$ operates on $y$ and $D$ operates on $x$.
$D'(x^2+y^2) = 2y$. $D'^2(x^2+y^2) = 2$. Higher $D'$ derivatives are zero for $y^2$.
So we only need terms up to $(D'/D)^2$.
$$z_{PI} = D^{-2} (1 + D'^2 D^{-2}) (x^2 + y^2)$$
$$z_{PI} = D^{-2} (x^2 + y^2) + D^{-4} D'^2 (x^2 + y^2)$$
$$z_{PI} = D^{-2} (x^2 + y^2) + D^{-4} (2)$$
$D^{-1}(x^2+y^2) = \frac{x^3}{3} + xy^2$.
$D^{-2}(x^2+y^2) = \frac{x^4}{12} + \frac{x^2y^2}{2}$.
$D^{-1}(2) = 2x$. $D^{-2}(2) = x^2$. $D^{-3}(2) = \frac{x^3}{3}$. $D^{-4}(2) = \frac{x^4}{12}$.
$$z_{PI} = \frac{x^4}{12} + \frac{x^2y^2}{2} + \frac{x^4}{12} = \frac{x^4}{6} + \frac{x^2y^2}{2}$$

---

### Example 19: Particular Integral (3x+2y)
Find the particular integral of the differential equation $[D^2 + 2DD' + D'^2]z = 3x + 2y$.

#### Solution
The PDE in operator form is $[D + D']^2 z = 3x + 2y$.
Here $f(x, y) = 3x + 2y$.
$$z_{PI} = \frac{1}{(D + D')^2} (3x + 2y)$$
We can write this as $\frac{1}{D^2(1 + D'/D)^2} (3x+2y) = D^{-2}(1+D'/D)^{-2}(3x+2y)$.
Using binomial expansion $(1+X)^{-2} = 1 - 2X + 3X^2 - \dots$:
$$z_{PI} = D^{-2} (1 - 2(D'/D) + 3(D'/D)^2 - \dots) (3x + 2y)$$
Operate term by term. For $3x+2y$, $D'(3x+2y) = 2$, $D'^2(3x+2y) = 0$. So we only need up to $D'/D$.
$$z_{PI} = D^{-2} (1 - 2D'/D) (3x + 2y)$$
$$z_{PI} = D^{-2} (3x + 2y - 2D'D^{-1}(3x + 2y))$$
$$z_{PI} = D^{-2} (3x + 2y - 2D'(\frac{3x^2}{2} + 2xy))$$
$$z_{PI} = D^{-2} (3x + 2y - 2(2x)) = D^{-2} (3x + 2y - 4x) = D^{-2} (2y - x)$$
$D^{-1}(2y - x) = 2xy - \frac{x^2}{2}$.
$D^{-2}(2y - x) = x^2y - \frac{x^3}{6}$.
So the particular integral is $z_{PI} = x^2y - \frac{x^3}{6}$.

---

### Example 20: Particular Integral (yeˣ)
Find the solution of the differential equation $[2D^2 + 5DD' + 3D'^2]z = ye^x$.

#### Solution
**1. Complementary Function (CF):**
The operator is $F(D, D') = 2D^2 + 5DD' + 3D'^2$.
Factor the homogeneous part: $(2D + 3D')(D + D')z = 0$.
*   For the factor $(D + D')$: $m_1 = -1$. Contribution $\phi_1(y - x)$.
*   For the factor $(2D + 3D')$: In the form $(D - m D')$, $m_2 = -3/2$. Contribution $\phi_2(y - \frac{3}{2}x) = \phi_2(2y - 3x)$.
So the CF is $z_{CF} = \phi_1(y - x) + \phi_2(2y - 3x)$.

**2. Particular Integral (PI):**
Here $f(x, y) = ye^x$. This is a product of a polynomial in $x,y$ and $e^{ax+by}$.
$$z_{PI} = \frac{1}{(2D + 3D')(D + D')} ye^x$$
We can apply the rule $z_{PI} = e^{ax+by} \frac{1}{F(D+a, D'+b)} V(x,y)$, where $V(x,y)=y$, $a=1,b=0$.
$$z_{PI} = e^x \frac{1}{(2(D+1) + 3D')((D+1) + D')} y$$
$$z_{PI} = e^x \frac{1}{(2D + 3D' + 2)(D + D' + 1)} y$$
We want to operate on $y$. Expand operators in powers of $D$ and $D'$.
$$z_{PI} = e^x \frac{1}{2(1 + D + 3D'/2)(1 + D + D')} y$$
$$z_{PI} = e^x \frac{1}{2} (1 + (D + 3D'/2))^{-1} (1 + D + D')^{-1} y$$
$$z_{PI} = e^x \frac{1}{2} (1 - (D + 3D'/2) + \dots) (1 - (D + D') + \dots) y$$
For operating on $y$, only $D'$ matters ($D'y=1$), $D'(\text{constant})=0$. $Dy=0$.
$$z_{PI} = e^x \frac{1}{2} (1 - 3D'/2) (1 - D') y$$
*(The given solution is long and uses term-by-term integration as shown in the notes for the general procedure. Let's follow the general procedure as given in the notes on page 22-23 to demonstrate it fully).*

Using the method:
$z_{PI} = (2D + 3D')^{-1}(D + D')^{-1}(ye^x)$.
First calculate $u = (D + D')^{-1}(ye^x)$.
This involves solving $(D+D')u = ye^x$.
The auxiliary equations for $p+q=0$ ($D+D' = 0$) are $dx/1 = dy/1 = du/(ye^x)$.
From $dx=dy$, $y-x=c$. So $y=x+c$.
From $dx = du/(ye^x)$, $dx = du/((x+c)e^x)$.
So $du = (x+c)e^x dx$.
Integrating: $u = \int (x+c)e^x dx = xe^x - e^x + ce^x = e^x(x+c-1)$.
Substitute $c=y-x$:
$u = e^x(x+(y-x)-1) = e^x(y-1)$.
So $(D+D')^{-1}(ye^x) = (y-1)e^x$.

Now, $z_{PI} = (2D + 3D')^{-1}((y-1)e^x)$.
This means we need to solve $(2D+3D')z = (y-1)e^x$.
The auxiliary equations for $2p+3q=0$ are $dx/2 = dy/3 = dz/((y-1)e^x)$.
From $dx/2 = dy/3$, $3x-2y=c_1$. So $y = (3x-c_1)/2$.
From $dx/2 = dz/((y-1)e^x)$:
$dz = \frac{1}{2}(y-1)e^x dx = \frac{1}{2}\left(\frac{3x-c_1}{2}-1\right)e^x dx = \frac{1}{4}(3x-c_1-2)e^x dx$.
Integrating:
$z = \frac{1}{4}\int (3x-c_1-2)e^x dx = \frac{1}{4}[(3x-c_1-2)e^x - 3e^x]$. (Using $\int P(x)e^x dx = e^x(P(x)-P'(x)+\dots)$).
$z = \frac{1}{4}(3x-c_1-5)e^x$.
Substitute $c_1 = 3x-2y$:
$z = \frac{1}{4}(3x-(3x-2y)-5)e^x = \frac{1}{4}(2y-5)e^x$.
This is the particular integral $z_{PI} = \frac{1}{4}(2y-5)e^x$.

The general solution is $z = z_{CF} + z_{PI} = \phi_1(y - x) + \phi_2(2y - 3x) + \frac{1}{4}(2y - 5)e^x$.

---
# [Back](../Mathematics.md)