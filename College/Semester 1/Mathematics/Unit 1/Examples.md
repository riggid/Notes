# Questions and Examples from Unit 1

### Example 1: Non-existent Limits
Show that the following limits do not exist:
(i) $\lim_{(x,y)\rightarrow(0,0)}\frac{xy}{x^{2}+y^{2}}$
(ii) $\lim_{(x,y)\rightarrow(0,0)}\frac{x+\sqrt{y}}{x^{2}+y^{2}}$
(iii) $\lim_{(x,y)\rightarrow(0,0)}\frac{x^{3}y}{x^{6}+y^{2}}$

#### Solution
A limit does not exist if it is not finite or if it depends on the path of approach.

**(i)** Consider the path $y=mx$. As $(x,y)\rightarrow(0,0)$, $x\rightarrow0$:
$$
\lim_{x\rightarrow0}\frac{x(mx)}{x^{2}+(mx)^{2}} = \lim_{x\rightarrow0}\frac{mx^{2}}{x^{2}(1+m^{2})} = \frac{m}{1+m^{2}}
$$
Since the value depends on $m$, the limit is path-dependent and does not exist.

**(ii)** Consider the path $y=mx^{2}$. As $(x,y)\rightarrow(0,0)$, $x\rightarrow0$:
$$
\lim_{x\rightarrow0^{+}}\frac{x+\sqrt{mx^{2}}}{x^{2}+(mx^{2})^{2}} = \lim_{x\rightarrow0^{+}}\frac{x(1+\sqrt{m})}{x^{2}(1+m^{2}x^{2})} = \lim_{x\rightarrow0^{+}}\frac{1+\sqrt{m}}{x(1+m^{2}x^{2})} = \infty
$$
Since the limit is not finite, it does not exist.

**(iii)** Consider the path $y=mx^{3}$. As $(x,y)\rightarrow(0,0)$, $x\rightarrow0$:
$$
\lim_{x\rightarrow0}\frac{x^{3}(mx^{3})}{x^{6}+(mx^{3})^{2}} = \lim_{x\rightarrow0}\frac{mx^{6}}{x^{6}(1+m^{2})} = \frac{m}{1+m^{2}}
$$
Since the value depends on $m$, the limit is path-dependent and does not exist.

---

### Example 2: Second-Order Partial Derivatives
Find all the second-order partial derivatives of the function $f(x,y)=\ln(x^{2}+y^{2})+\tan^{-1}(y/x)$.

#### Solution
First-order derivatives:
$$
f_{x} = \frac{2x-y}{x^{2}+y^{2}} \quad , \quad f_{y} = \frac{2y+x}{x^{2}+y^{2}}
$$
Second-order derivatives:
$$
f_{xx} = \frac{2y^{2}-2x^{2}+2xy}{(x^{2}+y^{2})^{2}} \quad , \quad f_{yy} = \frac{2x^{2}-2y^{2}-2xy}{(x^{2}+y^{2})^{2}}
$$
$$
f_{xy} = \frac{y^{2}-x^{2}-4xy}{(x^{2}+y^{2})^{2}} \quad , \quad f_{yx} = \frac{y^{2}-x^{2}-4xy}{(x^{2}+y^{2})^{2}}
$$

---

### Example 3: First and Second Partial Derivatives
Find the first and second partial derivatives of $z=x^{3}+y^{3}-3axy$.

#### Solution
First-order derivatives:
$$
\frac{\partial z}{\partial x} = 3x^{2}-3ay \quad , \quad \frac{\partial z}{\partial y} = 3y^{2}-3ax
$$
Second-order derivatives:
$$
\frac{\partial^{2}z}{\partial x^{2}} = 6x \quad , \quad \frac{\partial^{2}z}{\partial y^{2}} = 6y
$$
$$
\frac{\partial^{2}z}{\partial y\partial x} = -3a \quad , \quad \frac{\partial^{2}z}{\partial x\partial y} = -3a
$$

---

### Example 4: Total Derivative
Given $u=\sin(x/y)$, $x=e^{t}$, and $y=t^{2}$, find $du/dt$ as a function of t and verify the result by direct substitution.

#### Solution
Using the chain rule:
$$
\frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt} = \left(\cos\left(\frac{x}{y}\right)\cdot\frac{1}{y}\right)e^{t} + \left(\cos\left(\frac{x}{y}\right)\cdot\left(-\frac{x}{y^{2}}\right)\right)2t
$$
Substituting $x=e^t$ and $y=t^2$:
$$
= \cos\left(\frac{e^{t}}{t^{2}}\right)\frac{e^{t}}{t^{2}} - 2t \cos\left(\frac{e^{t}}{t^{2}}\right)\frac{e^{t}}{t^{4}} = \frac{t-2}{t^{3}}e^{t}\cos\left(\frac{e^{t}}{t^{2}}\right)
$$
Verification by direct substitution: $u=\sin(e^{t}/t^{2})$
$$
\frac{du}{dt} = \cos\left(\frac{e^{t}}{t^{2}}\right) \cdot \frac{t^2(e^t) - e^t(2t)}{t^4} = \frac{t-2}{t^3}e^t \cos\left(\frac{e^t}{t^2}\right)
$$

---

### Example 5: Implicit Differentiation
If $u=x\log(xy)$ where $x^{3}+y^{3}+3xy=1$, find $du/dx$.

#### Solution
First, find $dy/dx$ from $f(x,y)=x^3+y^3+3xy-1=0$.
$$
\frac{dy}{dx} = -\frac{f_x}{f_y} = -\frac{3x^2+3y}{3y^2+3x} = -\frac{x^2+y}{y^2+x}
$$
Now, use the chain rule for $du/dx$:
$$
\frac{du}{dx} = \frac{\partial u}{\partial x} + \frac{\partial u}{\partial y}\frac{dy}{dx} = (1+\log(xy)) + \frac{x}{y}\left(-\frac{x^2+y}{y^2+x}\right)
$$

---

### Example 6: Composite Functions
If $u=F(x-y, y-z, z-x)$, prove that $\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z}=0$.

#### Solution
Let $r=x-y$, $s=y-z$, and $t=z-x$. Then $u=F(r,s,t)$.
$$
\frac{\partial u}{\partial x} = \frac{\partial u}{\partial r}(1) + \frac{\partial u}{\partial s}(0) + \frac{\partial u}{\partial t}(-1) = \frac{\partial u}{\partial r} - \frac{\partial u}{\partial t}
$$
$$
\frac{\partial u}{\partial y} = \frac{\partial u}{\partial r}(-1) + \frac{\partial u}{\partial s}(1) + \frac{\partial u}{\partial t}(0) = -\frac{\partial u}{\partial r} + \frac{\partial u}{\partial s}
$$
$$
\frac{\partial u}{\partial z} = \frac{\partial u}{\partial r}(0) + \frac{\partial u}{\partial s}(-1) + \frac{\partial u}{\partial t}(1) = -\frac{\partial u}{\partial s} + \frac{\partial u}{\partial t}
$$
Adding the three equations gives zero.

---

### Example 7: Euler's Theorem Application 1
Show that $x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=2u\log u$ where $\log u=\frac{x^{3}+y^{3}}{3x+4y}$.

#### Solution
Let $z=\log u$. The function $z$ is a homogeneous function of degree 2. By Euler's theorem for $z$:
$$
x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=2z
$$
Substitute $z = \log u$, so $\frac{\partial z}{\partial x} = \frac{1}{u}\frac{\partial u}{\partial x}$ and $\frac{\partial z}{\partial y} = \frac{1}{u}\frac{\partial u}{\partial y}$.
$$
x\left(\frac{1}{u}\frac{\partial u}{\partial x}\right)+y\left(\frac{1}{u}\frac{\partial u}{\partial y}\right)=2(\log u) \implies x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=2u\log u
$$

---

### Example 8: Euler's Theorem Application 2
If $u=\sin^{-1}\left(\frac{x+2y+3z}{x^{8}+y^{8}+z^{8}}\right)$, find $x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}$.

#### Solution
Let $\omega = \sin u = \frac{x+2y+3z}{x^{8}+y^{8}+z^{8}}$. The function $\omega$ is homogeneous of degree -7. By Euler's theorem for $\omega$:
$$
x\frac{\partial \omega}{\partial x}+y\frac{\partial \omega}{\partial y}+z\frac{\partial \omega}{\partial z}=-7\omega
$$
Substitute $\omega = \sin u$, so $\frac{\partial \omega}{\partial x} = \cos u \frac{\partial u}{\partial x}$.
$$
\cos u \left(x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}\right)=-7\sin u
$$
$$
x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}=-7\tan u
$$

---

### Example 9: Taylor Series Expansion
Expand $f(x,y) = \tan^{-1}(y/x)$ about $(1,1)$ up to the second-degree terms.

#### Solution
Evaluate derivatives at $(1,1)$: $f(1,1) = \pi/4$, $f_x = -1/2$, $f_y = 1/2$, $f_{xx} = 1/2$, $f_{yy} = -1/2$, $f_{xy} = 0$.
Plug into the Taylor series formula:
$$
\tan^{-1}(y/x) \approx \frac{\pi}{4} - \frac{1}{2}(x-1) + \frac{1}{2}(y-1) + \frac{1}{4}(x-1)^2 - \frac{1}{4}(y-1)^2
$$

---

### Example 10: Maclaurin Series Expansion
Expand $e^{x}\log(1+y)$ in powers of $x$ and $y$ up to terms of the third degree.

#### Solution
Evaluate derivatives at $(0,0)$: $f(0,0)=0, f_x=0, f_y=1, f_{xx}=0, f_{xy}=1, f_{yy}=-1, f_{xxx}=0, f_{xxy}=1, f_{xyy}=-1, f_{yyy}=2$.
Plug into Maclaurin's formula:
$$
e^{x}\log(1+y) \approx y + xy - \frac{1}{2}y^2 + \frac{1}{2}x^2y - \frac{1}{2}xy^2 + \frac{1}{3}y^3
$$

---

### Example 11: Finding Extrema
Examine $f(x,y)=x^{4}+y^{4}-2x^{2}+4xy-2y^{2}$ for extreme values.

#### Solution
1.  **Critical points**: Solving $f_x=0$ and $f_y=0$ gives the points $(0,0)$, $(\sqrt{2}, -\sqrt{2})$, and $(-\sqrt{2}, \sqrt{2})$.
2.  **Second derivatives**: $r = 12x^2-4$, $s = 4$, $t = 12y^2-4$.
3.  **Classify**:
    - **At $(\sqrt{2}, -\sqrt{2})$**: $r = 20 > 0$, $D = (20)(20) - 16 > 0 \implies$ **Minimum**.
    - **At $(-\sqrt{2}, \sqrt{2})$**: $r = 20 > 0$, $D = (20)(20) - 16 > 0 \implies$ **Minimum**.
    - **At $(0,0)$**: $D = (-4)(-4) - 16 = 0 \implies$ Test is inconclusive.

---

### Example 12: Lagrange Multipliers
Given $x+y+z=a$, find the maximum value of $f(x,y,z) = x^{m}y^{n}z^{p}$.

#### Solution
Let $\phi(x,y,z) = x+y+z-a = 0$.
The system $f_x+\lambda\phi_x=0$, etc., gives $\frac{m}{x} = \frac{n}{y} = \frac{p}{z} = -\lambda/f$.
From this, we find $x = \frac{am}{m+n+p}$, $y = \frac{an}{m+n+p}$, $z = \frac{ap}{m+n+p}$.
The maximum value of $f$ is:
$$
f_{max} = \frac{a^{m+n+p}m^m n^n p^p}{(m+n+p)^{m+n+p}}
$$
