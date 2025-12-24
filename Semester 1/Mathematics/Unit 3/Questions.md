---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 3 Questions: Partial Differential Equations

## 1. Formation of PDE

### 1. Form the PDE from $z = y^2 + 2f\left(\frac{1}{x} + \log y\right)$.

#### Detailed Answer:
1.  **Differentiate partially with respect to $x$ ($p = \partial z/\partial x$):**
    $$p = 0 + 2f'\left(\frac{1}{x} + \log y\right) \cdot \left(-\frac{1}{x^2}\right)$$
    $$p = -\frac{2}{x^2} f' \dots (1)$$
2.  **Differentiate partially with respect to $y$ ($q = \partial z/\partial y$):**
    $$q = 2y + 2f'\left(\frac{1}{x} + \log y\right) \cdot \left(\frac{1}{y}\right)$$
    $$q - 2y = \frac{2}{y} f' \dots (2)$$
3.  **Eliminate $f'$:**
    From (1), $f' = -\frac{x^2 p}{2}$.
    Substitute into (2):
    $$q - 2y = \frac{2}{y} \left(-\frac{x^2 p}{2}\right)$$
    $$q - 2y = -\frac{x^2 p}{y}$$
    $$y(q - 2y) = -x^2 p$$
    $$yq - 2y^2 = -x^2 p$$
    $$x^2 p + yq = 2y^2$$

***

### 2. Form the PDE from $z = (x+y)f(x^2 - y^2)$.

#### Detailed Answer:
1.  **Differentiate w.r.t $x$:**
    $$p = f(x^2 - y^2) + (x+y)f'(x^2 - y^2) \cdot (2x)$$
    $$p = \frac{z}{x+y} + 2x(x+y)f' \dots (1)$$
2.  **Differentiate w.r.t $y$:**
    $$q = f(x^2 - y^2) + (x+y)f'(x^2 - y^2) \cdot (-2y)$$
    $$q = \frac{z}{x+y} - 2y(x+y)f' \dots (2)$$
3.  **Eliminate $f'$:**
    Multiply (1) by $y$ and (2) by $x$:
    $$py = \frac{yz}{x+y} + 2xy(x+y)f'$$
    $$qx = \frac{xz}{x+y} - 2xy(x+y)f'$$
    Add them:
    $$py + qx = \frac{z(x+y)}{x+y} = z$$
    $$py + qx = z$$

***

### 3. Form the PDE from $z = f(x+at) + g(x-at)$.

#### Detailed Answer:
1.  **Differentiate w.r.t $x$:**
    $$\partial z/\partial x = f'(x+at) + g'(x-at)$$
    $$\partial^2 z/\partial x^2 = f''(x+at) + g''(x-at)$$
2.  **Differentiate w.r.t $t$:**
    $$\partial z/\partial t = a f'(x+at) - a g'(x-at)$$
    $$\partial^2 z/\partial t^2 = a^2 f''(x+at) + (-a)(-a) g''(x-at) = a^2 [f''(x+at) + g''(x-at)]$$
3.  **Compare the two second derivatives:**
    $$\frac{\partial^2 z}{\partial t^2} = a^2 \frac{\partial^2 z}{\partial x^2}$$

***

### 4. Form the PDE by eliminating arbitrary function from $f(x^2+y^2, z-xy) = 0$.

#### Detailed Answer:
This is of the form $f(u, v) = 0$ where $u = x^2 + y^2$ and $v = z - xy$.
The PDE is given by the determinant:
$$\begin{vmatrix} \frac{\partial u}{\partial x} & \frac{\partial v}{\partial x} \\ \frac{\partial u}{\partial y} & \frac{\partial v}{\partial y} \end{vmatrix} = 0$$
Or more formally $P p + Q q = R$ where:
$$P = \frac{\partial(u,v)}{\partial(y,z)} = \frac{\partial u}{\partial y}\frac{\partial v}{\partial z} - \frac{\partial u}{\partial z}\frac{\partial v}{\partial y}$$
$$Q = \frac{\partial(u,v)}{\partial(z,x)} = \frac{\partial u}{\partial z}\frac{\partial v}{\partial x} - \frac{\partial u}{\partial x}\frac{\partial v}{\partial z}$$
$$R = \frac{\partial(u,v)}{\partial(x,y)} = \frac{\partial u}{\partial x}\frac{\partial v}{\partial y} - \frac{\partial u}{\partial y}\frac{\partial v}{\partial x}$$

1.  **Calculate derivatives:**
    $u_x = 2x, u_y = 2y, u_z = 0$
    $v_x = p - y, v_y = q - x, v_z = 1$.
    Using the standard elimination relation $P p + Q q = R$ derived from Jacobian determinants:
    *   $P = \frac{\partial(u,v)}{\partial(y,z)} = u_y v_z - u_z v_y = (2y)(1) - (0)(q-x) = 2y$
    *   $Q = \frac{\partial(u,v)}{\partial(z,x)} = u_z v_x - u_x v_z = (0)(p-y) - (2x)(1) = -2x$
    *   $R = \frac{\partial(u,v)}{\partial(x,y)} = u_x v_y - u_y v_x = (2x)(-x) - (2y)(-y) = -2x^2 + 2y^2 = 2(y^2-x^2)$.
2.  **Form Equation:**
    $$2y p - 2x q = 2(y^2 - x^2)$$
    $$yp - xq = y^2 - x^2$$
    Or:
    $$xq - yp = x^2 - y^2$$

***

## 2. Linear PDEs (Lagrange's Method)

### 5. Solve $z(p - q) = z^2 + (x+y)^2$. (Corrected form $pz - qz = \dots$)

#### Detailed Answer:
Equation: $zp - zq = z^2 + (x+y)^2$.
Here $P = z, Q = -z, R = z^2 + (x+y)^2$.
Auxiliary Equations:
$$\frac{dx}{z} = \frac{dy}{-z} = \frac{dz}{z^2 + (x+y)^2}$$

1.  **First integration:**
    From first two fractions:
    $$\frac{dx}{z} = \frac{dy}{-z} \implies dx = -dy \implies dx + dy = 0$$
    Integrate: $x + y = c_1$.
2.  **Second integration:**
    Substitute $x+y = c_1$ into the third fraction:
    $$\frac{dx}{z} = \frac{dz}{z^2 + c_1^2}$$
    $$dx = \frac{z dz}{z^2 + c_1^2}$$
    Multiply by 2:
    $$2dx = \frac{2z dz}{z^2 + c_1^2}$$
    Integrate:
    $$2x = \log(z^2 + c_1^2) + c_2$$
    $$2x - \log(z^2 + (x+y)^2) = c_2$$
    Or $\log(z^2 + (x+y)^2) - 2x = c_2'$.
3.  **General Solution:**
    $$\phi\left(x+y, \log(z^2 + (x+y)^2) - 2x\right) = 0$$

***

### 6. Solve $2yzp + zxq = 3xy$.

#### Detailed Answer:
Auxiliary Equations:
$$\frac{dx}{2yz} = \frac{dy}{zx} = \frac{dz}{3xy}$$

1.  **First integration (using first two):**
    $$\frac{dx}{2yz} = \frac{dy}{zx}$$
    $$x dx = 2y dy$$
    Integrate: $\frac{x^2}{2} = y^2 + c$
    $$x^2 - 2y^2 = c_1$$
2.  **Second integration (using second and third):**
    $$\frac{dy}{zx} = \frac{dz}{3xy}$$
    $$3y dy = z dz$$
    Integrate: $\frac{3y^2}{2} = \frac{z^2}{2} + c$
    $$3y^2 - z^2 = c_2$$
3.  **General Solution:**
    $$\phi(x^2 - 2y^2, 3y^2 - z^2) = 0$$

***

### 7. Solve $y^2 p - xyq = x(z-2y)$.

#### Detailed Answer:
Auxiliary Equations:
$$\frac{dx}{y^2} = \frac{dy}{-xy} = \frac{dz}{x(z-2y)}$$

1.  **First integration:**
    Take first two terms:
    $$\frac{dx}{y^2} = \frac{dy}{-xy} \implies \frac{dx}{y} = \frac{dy}{-x}$$
    $$x dx = -y dy \implies x dx + y dy = 0$$
    Integrate: $x^2 + y^2 = c_1$.
2.  **Second integration:**
    Take second and third terms:
    $$\frac{dy}{-xy} = \frac{dz}{x(z-2y)}$$
    $$\frac{dy}{-y} = \frac{dz}{z-2y}$$
    $$(z-2y) dy = -y dz$$
    $$z dy - 2y dy = -y dz$$
    $$y dz + z dy = 2y dy$$
    $$d(yz) = 2y dy$$
    Integrate: $yz = y^2 + c_2 \implies yz - y^2 = c_2$ or $y(z-y) = c_2$.
3.  **General Solution:**
    $$\phi(x^2 + y^2, y(z-y)) = 0$$

***

### 8. Solve $2p + q = \frac{z}{y} \sin(x-2y)$.

#### Detailed Answer:
Rewritten: $2p + 1q = \frac{z \sin(x-2y)}{y}$.
Auxiliary Equations:
$$\frac{dx}{2} = \frac{dy}{1} = \frac{dz}{\frac{z}{y} \sin(x-2y)}$$

1.  **First integration:**
    $$dx - 2dy = 0 \implies x - 2y = c_1$$
2.  **Second integration:**
    Use $x - 2y = c_1$ in the third term.
    $$\frac{dy}{1} = \frac{dz}{\frac{z}{y} \sin(c_1)}$$
    $$\frac{\sin(c_1)}{y} dy = \frac{dz}{z}$$
    Integrate: $\sin(c_1) \log y = \log z + c$
    From $x - 2y = c_1$, the third term becomes $\frac{dz}{z \sin(c_1)/y} = \frac{y dz}{z \sin c_1}$.
    Equating $\frac{dy}{1}$:
    $$ \frac{dy}{1} = \frac{dz}{\frac{z}{y} \sin c_1} \implies \sin c_1 \frac{dy}{y} = \frac{dz}{z} $$
    Integrate:
    $$ \sin c_1 \ln y = \ln z - \ln c_2 $$
    $$ \ln z - \sin(x-2y) \ln y = \ln c_2 $$
    General Solution:
    $$ \Phi(x-2y, \ln z - \sin(x-2y)\ln y) = 0 $$

***

### 9. Solve $xzp + yzq = xy$.

#### Detailed Answer:
Auxiliary Equations:
$$\frac{dx}{xz} = \frac{dy}{yz} = \frac{dz}{xy}$$

1.  **First integration:**
    $$\frac{dx}{xz} = \frac{dy}{yz} \implies \frac{dx}{x} = \frac{dy}{y}$$
    Integrate: $\log x = \log y + \log c \implies x/y = c_1$.
2.  **Second integration:**
    Use equality of fractions:
    $$\frac{dy}{yz} = \frac{dz}{xy} \implies x dy = z dz$$
    Substitute $x = c_1 y$:
    $$c_1 y dy = z dz$$
    Integrate: $c_1 \frac{y^2}{2} = \frac{z^2}{2} + c$
    $$c_1 y^2 - z^2 = c_2$$
    Substitute $c_1 = x/y$:
    $$\frac{x}{y} y^2 - z^2 = c_2 \implies xy - z^2 = c_2$$
3.  **General Solution:**
    $$\phi(x/y, xy - z^2) = 0$$

***

## 3. Higher Order Linear PDEs

### 10. Solve $(D^4 - 2D^2 D'^2 + D'^4)z = 0$.

#### Detailed Answer:
Auxiliary Equation (put $D=m, D'=1$):
$$m^4 - 2m^2 + 1 = 0$$
$$(m^2 - 1)^2 = 0$$
$$(m - 1)^2 (m + 1)^2 = 0$$
Roots: $m = 1, 1, -1, -1$.

Solution for repeated roots $m_1, m_1$: $\phi_1(y+m_1x) + x\phi_2(y+m_1x)$.
Here we have two pairs of repeated roots.
1. For $m=1, 1$: $\phi_1(y+x) + x\phi_2(y+x)$
2. For $m=-1, -1$: $\phi_3(y-x) + x\phi_4(y-x)$

Total C.F.:
$$z = \phi_1(y+x) + x\phi_2(y+x) + \phi_3(y-x) + x\phi_4(y-x)$$

***

### 11. Solve $(D^2 + DD' - 2D'^2)z = 5e^{x+2y}$.

#### Detailed Answer:
1.  **Complementary Function (C.F.):**
    Auxiliary Eq: $m^2 + m - 2 = 0$
    $$(m+2)(m-1) = 0 \implies m = 1, -2$$
    $$C.F. = \phi_1(y+x) + \phi_2(y-2x)$$
2.  **Particular Integral (P.I.):**
    $$P.I. = \frac{1}{D^2 + DD' - 2D'^2} (5e^{x+2y})$$
    Substitute $D = a = 1, D' = b = 2$:
    $$F(1, 2) = (1)^2 + (1)(2) - 2(2)^2 = 1 + 2 - 8 = -5$$
    $$P.I. = \frac{5}{-5} e^{x+2y} = -e^{x+2y}$$
3.  **Complete Solution:**
    $$z = \phi_1(y+x) + \phi_2(y-2x) - e^{x+2y}$$

***

### 12. Solve $(3D^2 + 10DD' + 3D'^2)z = e^{x-y}$.

#### Detailed Answer:
1.  **C.F.:**
    $3m^2 + 10m + 3 = 0$
    $3m^2 + 9m + m + 3 = 0$
    $3m(m+3) + 1(m+3) = 0$
    $(3m+1)(m+3) = 0 \implies m = -1/3, -3$
    $$C.F. = \phi_1(y - \frac{1}{3}x) + \phi_2(y - 3x)$$
    (Or equivalently $\phi_1(3y-x) + \phi_2(y-3x)$ since function of constant*argument is same).
2.  **P.I.:**
    $$P.I. = \frac{1}{3D^2 + 10DD' + 3D'^2} e^{x-y}$$
    Substitute $D=1, D'=-1$:
    $$F(1, -1) = 3(1)^2 + 10(1)(-1) + 3(-1)^2 = 3 - 10 + 3 = -4$$
    $$P.I. = \frac{1}{-4} e^{x-y}$$
3.  **Solution:**
    $$z = \phi_1(3y-x) + \phi_2(y-3x) - \frac{1}{4}e^{x-y}$$

***

### 13. Solve $(2D^2 + 5DD' - 3D'^2)z = \sin(2x-y)$.

#### Detailed Answer:
1.  **C.F.:**
    $2m^2 + 5m - 3 = 0$
    $2m^2 + 6m - m - 3 = 0$
    $2m(m+3) - 1(m+3) = 0 \implies m = 1/2, -3$
    $$C.F. = \phi_1(2y+x) + \phi_2(y-3x)$$
2.  **P.I.:**
    $$P.I. = \frac{1}{2D^2 + 5DD' - 3D'^2} \sin(2x-y)$$
    $a=2, b=-1$.
    Replace $D^2 = -a^2 = -4$, $D D' = -ab = -(-2) = 2$, $D'^2 = -b^2 = -1$.
    $$Denominator = 2(-4) + 5(2) - 3(-1) = -8 + 10 + 3 = 5$$
    $$P.I. = \frac{1}{5} \sin(2x-y)$$
3.  **Solution:**
    $$z = \phi_1(2y+x) + \phi_2(y-3x) + \frac{1}{5}\sin(2x-y)$$

***

### 14. Solve $(D^2 + 3DD' + 2D'^2)z = 84 \cos(x+3y)$.

#### Detailed Answer:
1.  **C.F.:**
    $m^2 + 3m + 2 = 0 \implies (m+1)(m+2) = 0 \implies m = -1, -2$
    $$C.F. = \phi_1(y-x) + \phi_2(y-2x)$$
2.  **P.I.:**
    $$P.I. = \frac{84}{D^2 + 3DD' + 2D'^2} \cos(x+3y)$$
    $D^2 \to -1, DD' \to -3, D'^2 \to -9$.
    $$Denom = (-1) + 3(-3) + 2(-9) = -1 - 9 - 18 = -28$$
    $$P.I. = \frac{84}{-28} \cos(x+3y) = -3 \cos(x+3y)$$
3.  **Solution:**
    $$z = \phi_1(y-x) + \phi_2(y-2x) - 3\cos(x+3y)$$

***

### 15. Solve $(2D^2 - 7DD' + 6D'^2)z = x^3 y$.

#### Detailed Answer:
1.  **C.F.:**
    $2m^2 - 7m + 6 = 0 \implies (2m-3)(m-2) = 0 \implies m=3/2, 2$.
    $$C.F. = \phi_1(2y+3x) + \phi_2(y+2x)$$
2.  **P.I.:**
    $$P.I. = \frac{1}{2D^2 - 7DD' + 6D'^2} x^3 y$$
    Factor denominator: $(2D-3D')(D-2D')$.
    For polynomial, expand in powers of $D'/D$.
    From $2D^2(1 - \frac{7D'}{2D} + \frac{3D'^2}{D^2})$:
    $$P.I. = \frac{1}{2D^2} \left[ 1 - \left(\frac{7D'}{2D} - \frac{3D'^2}{D^2}\right) \right]^{-1} x^3y$$
    $$= \frac{1}{2D^2} \left[ 1 + \frac{7D'}{2D} + \dots \right] x^3y$$
    $$= \frac{1}{2D^2} \left[ x^3y + \frac{7}{2D}(x^3 \cdot 1) \right]$$
    $$D^{-1}x^3 = x^4/4, D^{-2}x^3 = x^5/20$$.
    $$= \frac{1}{2D^2} (x^3y) + \frac{7}{4D^3} (x^3)$$
    $$= \frac{1}{2} (y \frac{x^5}{20}) + \frac{7}{4} \frac{x^6}{120}$$
    Wait, let's integrating $x^3$ three times: $x^4/4 \to x^5/20 \to x^6/120$.
    $$P.I. = \frac{x^5 y}{40} + \frac{7x^6}{480}$$
    This matches $\frac{x^5}{480} (12y + 7x)$?
    $12xy + 7x^2$?
    Let's check term $\frac{1}{2D^2}(x^3y)$. $D^{-1}(x^3y) = y x^4/4$. $D^{-2} = y x^5/20$. Correct.
    The second term $\frac{7}{2D}(\frac{x^4}{4}) \cdot \frac{1}{2D^2}$? No.
    Term is $(1 + \frac{7D'}{2D}) x^3 y = x^3y + \frac{7}{2D} x^3$.
    Apply $\frac{1}{2D^2}$:
    $\frac{1}{2} D^{-2} (x^3y) + \frac{7}{4} D^{-3} (x^3)$.
    $= \frac{1}{2} (y \frac{x^5}{20}) + \frac{7}{4} (\frac{x^6}{120}) = \frac{x^5 y}{40} + \frac{7 x^6}{480} = \frac{x^5}{480} (12y + 7x)$.

***

### 16. Solve $(D^2 - DD' - 2D'^2)z = 16 x e^{2y}$.

#### Detailed Answer:
1.  **C.F.:**
    $m^2 - m - 2 = 0 \implies (m-2)(m+1) = 0 \implies m=2, -1$.
    $$C.F. = \phi_1(y+2x) + \phi_2(y-x)$$
2.  **P.I.:**
    $$P.I. = \frac{1}{(D-2D')(D+D')} 16 x e^{2y}$$
    This involves $V = e^{ax+by} V(x,y)$ rule? No, it's $x \cdot e^{2y}$.
    Can use shift formula: $P.I. = e^{0x+2y} \frac{1}{F(D, D'+2)} 16x$.
    Shift $D \to D, D' \to D'+2$.
    $F(D, D'+2) = D^2 - D(D'+2) - 2(D'+2)^2$
    $= D^2 - DD' - 2D - 2(D'^2 + 4D' + 4)$
    $= D^2 - DD' - 2D - 2D'^2 - 8D' - 8$.
    We need $\frac{1}{-8 - 2D - 8D' + \dots} 16x$.
    $$= 16 e^{2y} \frac{1}{-8 [1 + \frac{2D+8D'}{8}]} x$$
    Using binomial expansion $(1+X)^{-1} \approx 1-X$:
    $$= -2 e^{2y} [1 - \frac{D+4D'}{4}] x$$
    $$= -2 e^{2y} [x - \frac{1}{4}(1 + 0)]$$ (Since $Dx=1, D'x=0$)
    $$= -2 e^{2y} (x - \frac{1}{4}) = e^{2y} (\frac{1}{2} - 2x)$$

***

## 4. Separation of Variables

### 17. Solve $x^2 \frac{\partial u}{\partial x} + y^2 \frac{\partial u}{\partial y} = 0$.

#### Detailed Answer:
Let $u = X(x)Y(y)$.
Substitute into PDE:
$$x^2 X' Y + y^2 X Y' = 0$$
Divide by $X Y$:
$$x^2 \frac{X'}{X} + y^2 \frac{Y'}{Y} = 0$$
$$x^2 \frac{X'}{X} = -y^2 \frac{Y'}{Y} = k \text{ (constant)}$$

1.  **Solve for X:**
    $$\frac{X'}{X} = \frac{k}{x^2}$$
    $$\log X = \int k x^{-2} dx = -\frac{k}{x} + c_1$$
    $$X = A e^{-k/x}$$
2.  **Solve for Y:**
    $$-\frac{Y'}{Y} = \frac{k}{y^2} \implies \frac{Y'}{Y} = -\frac{k}{y^2}$$
    $$\log Y = \int -k y^{-2} dy = \frac{k}{y} + c_2$$
    $$Y = B e^{k/y}$$
3.  **Combine:**
    $$u = X Y = (AB) e^{-k/x + k/y} = C e^{k(1/y - 1/x)}$$
    (Note: The sign of k is arbitrary, so $e^{k(1/x - 1/y)}$ is also valid).

***

### 18. Solve $4 \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y} = 3u$, given $u(0, y) = 2e^{5y}$.

#### Detailed Answer:
Let $u = X(x)Y(y)$.
$$4 X' Y + X Y' = 3 X Y$$
Divide by $XY$:
$$4 \frac{X'}{X} + \frac{Y'}{Y} = 3$$
$$4 \frac{X'}{X} = 3 - \frac{Y'}{Y} = k$$

1.  **Solve for X:**
    $$4 \frac{X'}{X} = k \implies \frac{X'}{X} = \frac{k}{4} \implies X = c_1 e^{kx/4}$$
2.  **Solve for Y:**
    $$3 - \frac{Y'}{Y} = k \implies \frac{Y'}{Y} = 3 - k \implies Y = c_2 e^{(3-k)y}$$
3.  **General Solution:**
    $$u(x,y) = A e^{\frac{k}{4}x + (3-k)y}$$
4.  **Apply Boundary Condition:**
    $$u(0, y) = A e^{0 + (3-k)y} = A e^{(3-k)y}$$
    Given $u(0, y) = 2 e^{5y}$.
    Comparing coefficients:
    $A = 2$
    $3 - k = 5 \implies k = -2$
5.  **Final Solution:**
    Substitute $A=2, k=-2$ into the general solution:
    $$u(x,y) = 2 e^{\frac{-2}{4}x + 5y} = 2 e^{-\frac{1}{2}x + 5y}$$

***

### Example 2: Formation by Eliminating Arbitrary Functions
Form the PDE from $z = f(x^2 - y^2)$.

#### Solution
1.  Given $z = f(u)$ where $u = x^2 - y^2$.
2.  Differentiate w.r.t $x$:
    $$ p = \frac{\partial z}{\partial x} = f'(u) \cdot \frac{\partial u}{\partial x} = f'(x^2 - y^2) \cdot (2x) $$
    $$ p = 2x f'(u) \quad \implies \quad f'(u) = \frac{p}{2x} \quad \dots(1) $$
3.  Differentiate w.r.t $y$:
    $$ q = \frac{\partial z}{\partial y} = f'(u) \cdot \frac{\partial u}{\partial y} = f'(x^2 - y^2) \cdot (-2y) $$
    $$ q = -2y f'(u) \quad \dots(2) $$
4.  Substitute $f'(u)$ from (1) into (2):
    $$ q = -2y \left( \frac{p}{2x} \right) $$
    $$ q = -\frac{yp}{x} $$
    $$ xq = -yp $$
**Answer:** $yp + xq = 0$.

***

### Example 3: Lagrange's Method - Grouping
Solve $xp + yq = 3z$.

#### Solution
1.  Identify $P=x, Q=y, R=3z$.
2.  Auxiliary Equations:
    $$ \frac{dx}{x} = \frac{dy}{y} = \frac{dz}{3z} $$
3.  **First Solution ($u$)**: Take first two fractions.
    $$ \frac{dx}{x} = \frac{dy}{y} $$
    Integrate: $\ln x = \ln y + \ln c_1 \implies \ln(x/y) = \ln c_1 \implies \frac{x}{y} = c_1$.
    So, $u = \frac{x}{y}$.
4.  **Second Solution ($v$)**: Take first and third fractions.
    $$ \frac{dx}{x} = \frac{dz}{3z} $$
    Integrate: $3 \ln x = \ln z + \ln c_2 \implies \ln x^3 - \ln z = \ln c_2 \implies \frac{x^3}{z} = c_2$.
    So, $v = \frac{x^3}{z}$.
5.  General Solution: $\phi(u, v) = 0$.
**Answer:** $\phi \left( \frac{x}{y}, \frac{x^3}{z} \right) = 0$.

***

### Example 4: Lagrange's Method - Multipliers
Solve $x(y-z)p + y(z-x)q = z(x-y)$.

#### Solution
1.  Auxiliary Equations:
    $$ \frac{dx}{x(y-z)} = \frac{dy}{y(z-x)} = \frac{dz}{z(x-y)} $$
2.  Choose multipliers $1, 1, 1$.
    Numerator: $dx + dy + dz$.
    Denominator: $x(y-z) + y(z-x) + z(x-y) = xy - xz + yz - yx + zx - zy = 0$.
    Since denominator is 0, numerator must be 0:
    $$ dx + dy + dz = 0 \implies x + y + z = c_1 $$
3.  Choose multipliers $1/x, 1/y, 1/z$.
    Numerator: $\frac{1}{x}dx + \frac{1}{y}dy + \frac{1}{z}dz$.
    Denominator: $(y-z) + (z-x) + (x-y) = 0$.
    So, $\frac{dx}{x} + \frac{dy}{y} + \frac{dz}{z} = 0$.
    Integrate: $\ln x + \ln y + \ln z = \ln c_2 \implies xyz = c_2$.
**Answer:** $\phi(x+y+z, xyz) = 0$.

***

### Example 5: Higher Order PDE Solution
Solve $(D^2 - D D' - 2D'^2)z = (y-1)e^x$.

#### Solution
1.  **Complementary Function (C.F.)**:
    Auxiliary Equation: Put $m$ for $D$ and $1$ for $D'$.
    $$ m^2 - m - 2 = 0 $$
    $$ (m-2)(m+1) = 0 \implies m = 2, -1 $$
    C.F. = $\phi_1(y + 2x) + \phi_2(y - x)$.

2.  **Particular Integral (P.I.)**:
    $$ \text{P.I.} = \frac{1}{D^2 - D D' - 2D'^2} (y-1)e^x $$
    Factorize operator: $(D - 2D')(D + D')$.
    $$ \text{P.I.} = \frac{1}{(D - 2D')(D + D')} (y-1)e^x $$
    Apply $\frac{1}{D+D'}$ first. This corresponds to integration $\int f(x, c+x) dx$.
    Let's use the explicit method for $e^{ax+by} V$. Here $e^{x} (y-1)$ is $e^{1x + 0y}(y-1)$.
    Shift rule: $\frac{1}{F(D, D')} e^{ax+by} V = e^{ax+by} \frac{1}{F(D+a, D'+b)} V$.
    Here $a=1, b=0$.
    $$ \text{P.I.} = e^x \frac{1}{(D+1)^2 - (D+1)D' - 2D'^2} (y-1) $$
    $$ = e^x \frac{1}{D^2 + 2D + 1 - DD' - D' - 2D'^2} (y-1) $$
    Since term is $y^1$, expand in powers of $D, D'$. Keep lowest degree terms.
    $$ \approx e^x \frac{1}{1 + (2D - D')} (y-1) = e^x [1 + (2D - D')]^{-1} (y-1) $$
    $$ = e^x [1 - (2D - D') + \dots] (y-1) $$
    $$ = e^x [ (y-1) - 2D(y-1) + D'(y-1) ] $$
    $$ = e^x [ y - 1 + 1 ] = y e^x $$

3.  **Complete Solution**:
    $$ z = \phi_1(y+2x) + \phi_2(y-x) + y e^x $$

***

### Example 6: Separation of Variables - Heat Eq
Solve $3u_x + 2u_y = 0$ with $u(x, 0) = 4e^{-x}$ using separation of variables.

#### Solution
1.  Assume $u(x, y) = X(x)Y(y)$.
2.  PDE becomes $3X'Y + 2XY' = 0$.
3.  Divide by $XY$: $3\frac{X'}{X} + 2\frac{Y'}{Y} = 0 \implies \frac{X'}{X} = -\frac{2}{3}\frac{Y'}{Y} = k$.
4.  Solve for X: $\frac{X'}{X} = k \implies \ln X = kx + \ln c_1 \implies X = c_1 e^{kx}$.
5.  Solve for Y: $\frac{Y'}{Y} = -\frac{3}{2}k \implies Y = c_2 e^{-\frac{3}{2}ky}$.
6.  $u(x, y) = C e^{kx - \frac{3}{2}ky}$.
7.  Apply condition $u(x, 0) = 4e^{-x}$:
    $$ u(x, 0) = C e^{kx} = 4e^{-x} $$
    Comparing coefficients: $C = 4, k = -1$.
8.  Substitute back:
    $$ u(x, y) = 4 e^{-x - \frac{3}{2}(-1)y} = 4 e^{-x + \frac{3}{2}y} $$
**Answer:** $u(x, y) = 4 e^{\frac{3y-2x}{2}}$.