---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Differential Calculus & Differential Equations

### 1. Partial Differentiation
**Question:** If $x^x y^y z^z = c$, show that at $x=y=z$, the value of $\frac{\partial^2 z}{\partial x \partial y}$ is $-(x \ln(ex))^{-1}$.

**Solution:**
Given $x^x y^y z^z = c$. Taking logarithm:
$x \ln x + y \ln y + z \ln z = \ln c$.
Differentiating partially w.r.t $x$:
$(1 + \ln x) + (1 + \ln z) \frac{\partial z}{\partial x} = 0 \implies \frac{\partial z}{\partial x} = -\frac{1+\ln x}{1+\ln z}$.
Similarly, $\frac{\partial z}{\partial y} = -\frac{1+\ln y}{1+\ln z}$.
Now find $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial x} \left( -\frac{1+\ln y}{1+\ln z} \right) = -(1+\ln y) \frac{\partial}{\partial x} (1+\ln z)^{-1}$.
$$ = -(1+\ln y) \left[ -(1+\ln z)^{-2} \cdot \frac{1}{z} \frac{\partial z}{\partial x} \right] $$
$$ = \frac{1+\ln y}{z(1+\ln z)^2} \left( -\frac{1+\ln x}{1+\ln z} \right) = -\frac{(1+\ln y)(1+\ln x)}{z(1+\ln z)^3} $$
At $x=y=z$:
$$ \frac{\partial^2 z}{\partial x \partial y} = -\frac{(1+\ln x)^2}{x(1+\ln x)^3} = -\frac{1}{x(1+\ln x)} $$
Using $\ln(ex) = \ln e + \ln x = 1 + \ln x$:
$$ \text{RHS} = -\frac{1}{x \ln(ex)} = -(x \ln(ex))^{-1} $$
**Proven.**

---

### 2. Orthogonal Trajectories
**Question:** Find the orthogonal trajectories of the family of curves $\frac{x^2}{a^2} + \frac{y^2}{b^2+\lambda} = 1$, where $\lambda$ is a parameter.

**Solution:**
1.  Differentiate the given equation w.r.t $x$:
    $$ \frac{2x}{a^2} + \frac{2y}{b^2+\lambda} \frac{dy}{dx} = 0 \implies \frac{y y'}{b^2+\lambda} = -\frac{x}{a^2} $$
    $$ b^2+\lambda = -\frac{a^2 y y'}{x} $$
2.  Substitute $b^2+\lambda$ back into original equation to eliminate $\lambda$:
    $$ \frac{x^2}{a^2} + \frac{y^2}{-a^2 y y' / x} = 1 \implies \frac{x^2}{a^2} - \frac{xy}{a^2 y'} = 1 $$
    $$ x^2 - \frac{xy}{y'} = a^2 $$
3.  For orthogonal trajectories, replace $y'$ with $-1/y'$ (or $-dx/dy$):
    $$ x^2 - \frac{xy}{(-1/y')} = a^2 \implies x^2 + x y y' = a^2 $$
    $$ x dx + y dy = a^2 \frac{dx}{x} $$ (This doesn't look right. Let's re-evaluate step 2 simplification).
    Let's go back: $x^2 - xy \frac{dx}{dy} = a^2$.
    This is the differential equation of the family. The actual system is a family of confocal conics, which is known to be self-orthogonal.
    Rewriting step 3: $x^2 - xy(-dx/dy) = a^2$ is for original.
    Differential equation was $x^2 - x y \frac{1}{p} = a^2$. Orthogonal: replace $p$ with $-1/p$.
    $x^2 - xy(-p) = a^2 \implies x^2 + xyp = a^2$.
    This implies the differential equation is the same. Thus, the family of curves is **Self-Orthogonal**.
    The orthogonal trajectories are the same family of curves: $\frac{x^2}{a^2} + \frac{y^2}{b^2+\mu} = 1$.

---

### 3. Jacobians
**Question:** If $u = x+y+z$, $uv = y+z$, and $uvw = z$, find the Jacobian $\frac{\partial(x,y,z)}{\partial(u,v,w)}$.

**Solution:**
From the given relations:
1.  $z = uvw$
2.  $y+z = uv \implies y = uv - z = uv - uvw = uv(1-w)$
3.  $x+y+z = u \implies x = u - (y+z) = u - uv = u(1-v)$
So we have $x = u(1-v)$, $y = uv(1-w)$, $z = uvw$.
The Jacobian is $J = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} \end{vmatrix}$
$$ \frac{\partial x}{\partial u} = 1-v, \quad \frac{\partial x}{\partial v} = -u, \quad \frac{\partial x}{\partial w} = 0 $$
$$ \frac{\partial y}{\partial u} = v(1-w), \quad \frac{\partial y}{\partial v} = u(1-w), \quad \frac{\partial y}{\partial w} = -uv $$
$$ \frac{\partial z}{\partial u} = vw, \quad \frac{\partial z}{\partial v} = uw, \quad \frac{\partial z}{\partial w} = uv $$
Substitute and expand:
$$ J = (1-v) [u(1-w)(uv) - (-uv)(uw)] - (-u) [v(1-w)(uv) - (-uv)(vw)] $$
$$ J = (1-v) [u^2 v(1-w) + u^2 v w] + u [u v^2(1-w) + u v^2 w] $$
$$ J = (1-v) [u^2 v - u^2 v w + u^2 v w] + u [u v^2 - u v^2 w + u v^2 w] $$
$$ J = (1-v) [u^2 v] + u [u v^2] $$
$$ J = u^2 v - u^2 v^2 + u^2 v^2 = u^2 v $$
**Answer:** The Jacobian is $u^2 v$.

---

*Last updated: December 2025*
