---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 3 Examples: Partial Differential Equations

### Example 1: Formation by Eliminating Constants
Form the partial differential equation by eliminating arbitrary constants $a$ and $b$ from $z = (x+a)(y+b)$.

#### Solution
1.  Given:
    $$ z = (x+a)(y+b) \quad \dots(1) $$
2.  Differentiate partially w.r.t $x$:
    $$ p = \frac{\partial z}{\partial x} = 1 \cdot (y+b) = y+b \quad \dots(2) $$
3.  Differentiate partially w.r.t $y$:
    $$ q = \frac{\partial z}{\partial y} = (x+a) \cdot 1 = x+a \quad \dots(3) $$
4.  Substitute $(y+b) = p$ and $(x+a) = q$ from (2) and (3) into (1):
    $$ z = q \cdot p $$
    $$ z = pq $$
**Answer:** The required PDE is $z = pq$.

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
    $D(y-1) = 0$ (deriv w.r.t x), $D'(y-1) = 1$ (deriv w.r.t y).
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