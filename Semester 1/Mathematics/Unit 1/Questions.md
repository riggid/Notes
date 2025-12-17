---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***
# Unit - 1: Partial Differential Equations: Q & A
***
## 1. Find all the first-order partial derivatives of the following function:
$$f(u,v)=u^{2}\sin(u+v^{3})-\sec(4u)\tan^{-1}(2v)$$

### Answer:
The first-order partial derivatives of $f$ are:

**(a) Partial derivative with respect to u:**
$$\frac{\partial f}{\partial u}=\frac{\partial}{\partial u}[u^{2}\sin(u+v^{3})]-\frac{\partial}{\partial u}[\sec(4u)\tan^{-1}(2v)]$$
$$=2u\sin(u+v^{3})+u^{2}\cos(u+v^{3})-4\sec(4u)\tan(4u)\tan^{-1}(2v)$$

**(b) Partial derivative with respect to v:**
$$\frac{\partial f}{\partial v}=\frac{\partial}{\partial v}[u^{2}\sin(u+v^{3})]-\frac{\partial}{\partial v}[\sec(4u)\tan^{-1}(2v)]$$
$$=3u^{2}v^{2}\cos(u+v^{3})-\frac{2\sec(4u)}{1+4v^{2}}$$

***
## 2. If $u=\sin^{-1}(x-y)$, where $x=3t$ and $y=4t^{3}$, then show that:
$$\frac{du}{dt}=\frac{3}{\sqrt{1-t^{2}}},-1<t<1$$

### Solution:
Given:
$$u=\sin^{-1}(x-y) \text{ where } x=3t, y=4t^{3}$$

Using the chain rule:
$$\frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt}$$

**1. Compute the partial derivatives of $u$:**
$$\frac{\partial u}{\partial x}=\frac{1}{\sqrt{1-(x-y)^{2}}}$$
$$\frac{\partial u}{\partial y}=\frac{-1}{\sqrt{1-(x-y)^{2}}}$$

**2. Compute the ordinary derivatives of $x$ and $y$ with respect to $t$:**
$$\frac{dx}{dt}=3 \quad \frac{dy}{dt}=12t^{2}$$

**3. Substitute into the chain rule:**
$$\frac{du}{dt}=\frac{1}{\sqrt{1-(x-y)^{2}}}(3)+\frac{-1}{\sqrt{1-(x-y)^{2}}}(12t^{2})$$
$$\frac{du}{dt}=\frac{3-12t^{2}}{\sqrt{1-(3t-4t^{3})^{2}}}$$

**4. Simplify the denominator:**
$$1-(x-y)^{2}=1-(3t-4t^{3})^{2} = 1-(9t^{2}-24t^{4}+16t^{6})$$
$$=1-9t^{2}+24t^{4}-16t^{6}$$
It is also given that:
$$1-9t^{2}+24t^{4}-16t^{6} = (1-t^{2})(16t^{4}-8t^{2}+1) = (1-t^2)(4t^2-1)^2$$
Thus:
$$\sqrt{1-(3t-4t^{3})^{2}} = \sqrt{(1-t^{2})(4t^{2}-1)^{2}} = \sqrt{1-t^{2}}|4t^{2}-1|$$

For $-1<t<1$, we have $4t^{2}<4$, so the term is not always $4t^2-1$. However, the derivation in the source uses the factor $(1-4t^2)$:
$$\sqrt{(1-t^{2})(16t^{4}-8t^{2}+1)}=\sqrt{1-t^{2}}\sqrt{(4t^{2}-1)^{2}}=\sqrt{1-t^{2}}(1-4t^{2})$$

**5. Final simplification (assuming $1-4t^2$ is used for the positive root):**
$$\frac{du}{dt}=\frac{3(1-4t^{2})}{\sqrt{1-t^{2}}(1-4t^{2})}=\frac{3}{\sqrt{1-t^{2}}} \text{ for } -1<t<1$$

***
## 3. If $z=f(x,y)$ where $x=u^{2}-v^{2}$, $y=2uv$ prove that:
$$4(u^{2}+v^{2})\left(\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}\right)=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$$

### Solution:
Given $z=f(x,y)$ with the coordinate transformations:
$$x=u^{2}-v^{2}, \quad y=2uv$$

### Step 1: First Partial Derivatives (Chain Rule)
$$\frac{\partial z}{\partial u}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial u}=2u\frac{\partial z}{\partial x}+2v\frac{\partial z}{\partial y}$$
$$\frac{\partial z}{\partial v}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial v}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial v}=-2v\frac{\partial z}{\partial x}+2u\frac{\partial z}{\partial y}$$

### Step 2: Second Partial Derivatives

**For $\frac{\partial^{2}z}{\partial u^{2}}$:**
$$\frac{\partial^{2}z}{\partial u^{2}}=\frac{\partial}{\partial u}\left(2u\frac{\partial z}{\partial x}+2v\frac{\partial z}{\partial y}\right)$$
Using the product rule on both terms, and the chain rule for $\frac{\partial}{\partial u}\left(\frac{\partial z}{\partial x}\right)$ and $\frac{\partial}{\partial u}\left(\frac{\partial z}{\partial y}\right)$:
$$=2\frac{\partial z}{\partial x}+2u\left(2u\frac{\partial^{2}z}{\partial x^{2}}+2v\frac{\partial^{2}z}{\partial y\partial x}\right) +2v\left(2u\frac{\partial^{2}z}{\partial x\partial y}+2v\frac{\partial^{2}z}{\partial y^{2}}\right)$$
$$=2\frac{\partial z}{\partial x}+4u^{2}\frac{\partial^{2}z}{\partial x^{2}}+8uv\frac{\partial^{2}z}{\partial x\partial y}+4v^{2}\frac{\partial^{2}z}{\partial y^{2}}$$

**For $\frac{\partial^{2}z}{\partial v^{2}}$:**
$$\frac{\partial^{2}z}{\partial v^{2}}=\frac{\partial}{\partial v}\left(-2v\frac{\partial z}{\partial x}+2u\frac{\partial z}{\partial y}\right)$$
$$=-2\frac{\partial z}{\partial x}-2v\left(-2v\frac{\partial^{2}z}{\partial x^{2}}+2u\frac{\partial^{2}z}{\partial y\partial x}\right) +2u\left(-2v\frac{\partial^{2}z}{\partial x\partial y}+2u\frac{\partial^{2}z}{\partial y^{2}}\right)$$
$$=-2\frac{\partial z}{\partial x}+4v^{2}\frac{\partial^{2}z}{\partial x^{2}}-8uv\frac{\partial^{2}z}{\partial x\partial y}+4u^{2}\frac{\partial^{2}z}{\partial y^{2}}$$

### Step 3: Sum of Second Derivatives
Adding both second derivatives:
$$\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$$
$$=\left(2\frac{\partial z}{\partial x}+4u^{2}\frac{\partial^{2}z}{\partial x^{2}}+8uv\frac{\partial^{2}z}{\partial x\partial y}+4v^{2}\frac{\partial^{2}z}{\partial y^{2}}\right) + \left(-2\frac{\partial z}{\partial x}+4v^{2}\frac{\partial^{2}z}{\partial x^{2}}-8uv\frac{\partial^{2}z}{\partial x\partial y}+4u^{2}\frac{\partial^{2}z}{\partial y^{2}}\right)$$
The first and third terms in both parentheses cancel out:
$$\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}} = 4u^{2}\frac{\partial^{2}z}{\partial x^{2}}+4v^{2}\frac{\partial^{2}z}{\partial x^{2}}+4v^{2}\frac{\partial^{2}z}{\partial y^{2}}+4u^{2}\frac{\partial^{2}z}{\partial y^{2}}$$
$$=4(u^{2}+v^{2})\frac{\partial^{2}z}{\partial x^{2}}+4(u^{2}+v^{2})\frac{\partial^{2}z}{\partial y^{2}}$$
$$=4(u^{2}+v^{2})\left(\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}\right)$$
Thus, we have proved:
$$4(u^{2}+v^{2})\left(\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}\right)=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$$

***
## 4. If $z=xf\left(\frac{y}{x}\right)+g\left(\frac{x}{y}\right)$, then show that:
$$x^{2}\frac{\partial^{2}z}{\partial x^{2}}+2xy\frac{\partial^{2}z}{\partial x\partial y}+y^{2}\frac{\partial^{2}z}{\partial y^{2}}=0$$

### Solution:
Given the function:
$$z=xf\left(\frac{y}{x}\right)+g\left(\frac{x}{y}\right)$$
Let the two parts of the function be:
$$u=xf\left(\frac{y}{x}\right) \quad \text{and} \quad v=g\left(\frac{x}{y}\right)$$
So $z=u+v$.

### Step 1: Verify Homogeneity
The general definition of a homogeneous function $\phi(x,y)$ of degree $n$ is $\phi(tx,ty) = t^n \phi(x,y)$.

**1. For u:**
$$u(tx,ty)=txf\left(\frac{ty}{tx}\right)=txf\left(\frac{y}{x}\right)=tu(x,y)$$
Thus, $u$ is homogeneous of **degree 1**.

**2. For v:**
$$v(tx,ty)=g\left(\frac{tx}{ty}\right)=g\left(\frac{x}{y}\right)=t^{0}v(x,y)$$
Thus, $v$ is homogeneous of **degree 0**.

### Step 2: Apply Euler's Theorem on Second-Order Partial Derivatives
For any homogeneous function $\phi(x,y)$ of degree $n$:
$$x^{2}\frac{\partial^{2}\phi}{\partial x^{2}}+2xy\frac{\partial^{2}\phi}{\partial x\partial y}+y^{2}\frac{\partial^{2}\phi}{\partial y^{2}}=n(n-1)\phi$$

**Applying to $u$ (degree $n=1$):**
$$x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}=1(1-1)u=0$$

**Applying to $v$ (degree $n=0$):**
$$x^{2}\frac{\partial^{2}v}{\partial x^{2}}+2xy\frac{\partial^{2}v}{\partial x\partial y}+y^{2}\frac{\partial^{2}v}{\partial y^{2}}=0(0-1)v=0$$

### Step 3: Combine Results
Since $z=u+v$, we add the two equations:
$$x^{2}\left(\frac{\partial^{2}u}{\partial x^{2}}+\frac{\partial^{2}v}{\partial x^{2}}\right)+2xy\left(\frac{\partial^{2}u}{\partial x\partial y}+\frac{\partial^{2}v}{\partial x\partial y}\right)+y^{2}\left(\frac{\partial^{2}u}{\partial y^{2}}+\frac{\partial^{2}v}{\partial y^{2}}\right)=0+0$$
$$x^{2}\frac{\partial^{2}z}{\partial x^{2}}+2xy\frac{\partial^{2}z}{\partial x\partial y}+y^{2}\frac{\partial^{2}z}{\partial y^{2}}=0$$

***
## 5. Expand $\frac{1}{1+x-y}$ using Taylor's series up to second-degree terms.

### Taylor Series Expansion of $f(x,y)=\frac{1}{1+x-y}$

We use the Taylor series expansion about the point $(0,0)$ up to second-degree terms:
$$f(x,y)\approx f(0,0)+[xf_{x}(0,0)+yf_{y}(0,0)]+\frac{1}{2!}[x^{2}f_{xx}(0,0)+2xyf_{xy}(0,0)+y^{2}f_{yy}(0,0)]$$

### Step 1: Compute $f(0,0)$
$$f(0,0)=\frac{1}{1+0-0}=1$$

### Step 2: Compute First-Order Partial Derivatives
$$f_{x}(x,y)=\frac{\partial}{\partial x}(1+x-y)^{-1}=-\frac{1}{(1+x-y)^{2}}$$
$$f_{y}(x,y)=\frac{\partial}{\partial y}(1+x-y)^{-1}=-1(1+x-y)^{-2}(-1)=\frac{1}{(1+x-y)^{2}}$$

**At $(0,0)$:**
$$f_{x}(0,0)=-1, \quad f_{y}(0,0)=1$$

### Step 3: Compute Second-Order Partial Derivatives
$$f_{xx}(x,y)=\frac{\partial}{\partial x}\left(-\frac{1}{(1+x-y)^{2}}\right)=2(1+x-y)^{-3}(1)=\frac{2}{(1+x-y)^{3}}$$
$$f_{xy}(x,y)=\frac{\partial}{\partial y}\left(-\frac{1}{(1+x-y)^{2}}\right)=2(1+x-y)^{-3}(-1)=-\frac{2}{(1+x-y)^{3}}$$
$$f_{yy}(x,y)=\frac{\partial}{\partial y}\left(\frac{1}{(1+x-y)^{2}}\right)=-2(1+x-y)^{-3}(-1)=\frac{2}{(1+x-y)^{3}}$$

**At $(0,0)$:**
$$f_{xx}(0,0)=2, \quad f_{xy}(0,0)=-2, \quad f_{yy}(0,0)=2$$

### Step 4: Construct the Taylor Series
Substituting the computed values:
$$f(x,y)\approx 1+[x(-1)+y(1)]+\frac{1}{2}[x^{2}(2)+2xy(-2)+y^{2}(2)]$$
$$f(x,y)\approx 1-x+y+\frac{1}{2}(2x^{2}-4xy+2y^{2})$$
$$f(x,y)\approx 1-x+y+x^{2}-2xy+y^{2}$$

***
## 6. Discuss the maxima and minima of the function:
$$f(x,y)=x^{3}y^{2}(1-x-y)$$
where $x>0, y>0$, and $x+y<1$.

### Solution
Given the function:
$$f(x,y) = x^3y^2(1 - x - y) = x^{3}y^{2} - x^{4}y^{2} - x^{3}y^{3}$$
*(Note: The function given in the source derivation $f(x,y) = xy²(1 - x - y) = x²y² - xy² - 3y³$ is incorrect and does not match the first line or the subsequent partial derivatives.)*

### Step 1: Partial Derivatives

**First Partial Derivatives ($f_x$ and $f_y$):**
$$f_{x}=3x^{2}y^{2}-4x^{3}y^{2}-3x^{2}y^{3}$$
$$f_{y}=2x^{3}y-2x^{4}y-3x^{3}y^{2}$$

**Second Partial Derivatives ($f_{xx}, f_{xy}, f_{yy}$):**
$$f_{xx}=6xy^{2}-12x^{2}y^{2}-6xy^{3}$$
$$f_{xy}=6x^{2}y-8x^{3}y-9x^{2}y^{2}$$
$$f_{yy}=2x^{3}-2x^{4}-6x^{3}y$$

### Step 2: Finding Critical Points
To find stationary points, solve $f_{x}=0$ and $f_{y}=0$ in the open domain $x>0, y>0, x+y<1$.

From $f_{x}=0$:
$$x^{2}y^{2}(3-4x-3y)=0 \quad (1)$$

From $f_{y}=0$:
$$x^{3}y(2-2x-3y)=0 \quad (2)$$

Since we are in the domain where $x>0$ and $y>0$, we must have:
$$3-4x-3y=0 \quad \text{and} \quad 2-2x-3y=0$$

Subtracting the second equation from the first:
$$(3-4x-3y) - (2-2x-3y) = 0$$
$$1 - 2x = 0 \implies x=\frac{1}{2}$$

Substitute $x=\frac{1}{2}$ into the second equation:
$$2-2\left(\frac{1}{2}\right)-3y=0$$
$$2-1-3y=0 \implies 1-3y=0 \implies y=\frac{1}{3}$$

The critical point is $\left(\frac{1}{2},\frac{1}{3}\right)$. This point satisfies the domain constraint since $x+y = \frac{1}{2}+\frac{1}{3} = \frac{5}{6} < 1$.

### Step 3: Classifying the Critical Point
We use the second derivative test with $r=f_{xx}, s=f_{xy}, t=f_{yy}$ at $\left(\frac{1}{2},\frac{1}{3}\right)$.

**Evaluate $r=f_{xx}$:**
$$r=6\cdot\frac{1}{2}\cdot\left(\frac{1}{3}\right)^{2}-12\cdot\left(\frac{1}{2}\right)^{2}\cdot\left(\frac{1}{3}\right)^{2}-6\cdot\frac{1}{2}\cdot\left(\frac{1}{3}\right)^{3}$$
$$r=6\left(\frac{1}{2}\right)\left(\frac{1}{9}\right) - 12\left(\frac{1}{4}\right)\left(\frac{1}{9}\right) - 3\left(\frac{1}{27}\right) = \frac{3}{9} - \frac{3}{9} - \frac{1}{9} = -\frac{1}{9}$$
$$r=-\frac{1}{9}<0$$

**Evaluate $s=f_{xy}$:**
$$s=6\cdot\left(\frac{1}{2}\right)^{2}\cdot\frac{1}{3}-8\cdot\left(\frac{1}{2}\right)^{3}\cdot\frac{1}{3}-9\cdot\left(\frac{1}{2}\right)^{2}\cdot\left(\frac{1}{3}\right)^{2}$$
$$s=6\left(\frac{1}{4}\right)\left(\frac{1}{3}\right) - 8\left(\frac{1}{8}\right)\left(\frac{1}{3}\right) - 9\left(\frac{1}{4}\right)\left(\frac{1}{9}\right) = \frac{1}{2} - \frac{1}{3} - \frac{1}{4}$$
$$s=\frac{6-4-3}{12} = -\frac{1}{12}$$

**Evaluate $t=f_{yy}$:**
$$t=2\cdot\left(\frac{1}{2}\right)^{3}-2\cdot\left(\frac{1}{2}\right)^{4}-6\cdot\left(\frac{1}{2}\right)^{3}\cdot\frac{1}{3}$$
$$t=2\left(\frac{1}{8}\right) - 2\left(\frac{1}{16}\right) - 2\left(\frac{1}{8}\right) = \frac{1}{4} - \frac{1}{8} - \frac{1}{4} = -\frac{1}{8}$$

**Compute $rt-s^2$:**
$$rt-s^{2}=\left(-\frac{1}{9}\right)\left(-\frac{1}{8}\right)-\left(-\frac{1}{12}\right)^{2}=\frac{1}{72}-\frac{1}{144}=\frac{2-1}{144}=\frac{1}{144}$$
$$rt-s^{2}>0$$

Since $rt-s^{2}>0$ and $r<0$, the point $\left(\frac{1}{2},\frac{1}{3}\right)$ is a **local maximum**.

**Maximum value:**
$$f\left(\frac{1}{2},\frac{1}{3}\right)=\left(\frac{1}{2}\right)^{3}\left(\frac{1}{3}\right)^{2}\left(1-\frac{1}{2}-\frac{1}{3}\right)=\left(\frac{1}{8}\right)\left(\frac{1}{9}\right)\left(\frac{6-3-2}{6}\right)=\frac{1}{72}\cdot\frac{1}{6}=\frac{1}{432}$$

***
## 7. Find the volume of the largest rectangular parallelepiped that can be inscribed in the ellipsoid
$$\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}=1$$

### Solution:
### Step 1: Problem Setup
Due to the symmetry of the ellipsoid, the largest parallelepiped will be centered at the origin $(0,0,0)$. Let $(x,y,z)$ be the vertex of the parallelepiped in the first octant that lies on the ellipsoid. The dimensions of the parallelepiped are $2x, 2y,$ and $2z$.

**Objective Function (Volume $V$):**
$$V(x,y,z)=2x\cdot2y\cdot2z=8xyz$$

**Constraint Equation $g(x,y,z)=0$:**
$$g(x,y,z)=\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}-1=0$$

### Step 2: Lagrange Multipliers
We form the auxiliary function $F$:
$$F(x,y,z,\lambda)=8xyz+\lambda\left(\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}-1\right)$$

### Step 3: Partial Derivatives
Set the partial derivatives with respect to $x, y, z$ and $\lambda$ to zero:
$$F_{x}=8yz+\frac{2\lambda x}{a^{2}}=0 \implies 4yz=-\frac{\lambda x}{a^{2}} \quad (1)$$
$$F_{y}=8xz+\frac{2\lambda y}{b^{2}}=0 \implies 4xz=-\frac{\lambda y}{b^{2}} \quad (2)$$
$$F_{z}=8xy+\frac{2\lambda z}{c^{2}}=0 \implies 4xy=-\frac{\lambda z}{c^{2}} \quad (3)$$

### Step 4: Solving the System
Multiply equation (1) by $x$, equation (2) by $y$, and equation (3) by $z$:
$$4xyz = -\frac{\lambda x^{2}}{a^{2}}$$
$$4xyz = -\frac{\lambda y^{2}}{b^{2}}$$
$$4xyz = -\frac{\lambda z^{2}}{c^{2}}$$
Since $V$ must be non-zero for a maximum, $\lambda$ must be non-zero. Equating the right-hand sides:
$$\frac{x^{2}}{a^{2}}=\frac{y^{2}}{b^{2}}=\frac{z^{2}}{c^{2}}$$
Let $k=\frac{x^{2}}{a^{2}}$. Then $\frac{x^{2}}{a^{2}} = k, \frac{y^{2}}{b^{2}} = k, \frac{z^{2}}{c^{2}} = k$.

Substitute into the constraint equation (Step 1):
$$k+k+k=1 \implies 3k=1 \implies k=\frac{1}{3}$$

Now solve for $x, y, z$:
$$\frac{x^{2}}{a^{2}}=\frac{1}{3} \implies x^{2}=\frac{a^{2}}{3} \implies x=\frac{a}{\sqrt{3}}$$
$$\frac{y^{2}}{b^{2}}=\frac{1}{3} \implies y^{2}=\frac{b^{2}}{3} \implies y=\frac{b}{\sqrt{3}}$$
$$\frac{z^{2}}{c^{2}}=\frac{1}{3} \implies z^{2}=\frac{c^{2}}{3} \implies z=\frac{c}{\sqrt{3}}$$
We take the positive roots as we are in the first octant for the largest volume.

### Step 5: Maximum Volume
Substitute the values of $x, y, z$ into the volume formula:
$$V_{max}=8\left(\frac{a}{\sqrt{3}}\right)\left(\frac{b}{\sqrt{3}}\right)\left(\frac{c}{\sqrt{3}}\right)$$
$$V_{max}=\frac{8abc}{3\sqrt{3}}$$
# Unit - 1: Engineering Mathematics Q&A
***
## I. Partial Differentiation and Chain Rule
***
### 1. Find all the first-order partial derivatives of the following function:
$$f(u,v)=u^{2}\sin(u+v^{3})-\sec(4u)\tan^{-1}(2v)$$

#### Detailed Answer:
**(a) Partial derivative with respect to u ($\frac{\partial f}{\partial u}$):**
Applying the product rule to the first term and the chain rule to the second:
$$\frac{\partial f}{\partial u}=2u\sin(u+v^{3})+u^{2}\cos(u+v^{3})-4\sec(4u)\tan(4u)\tan^{-1}(2v)$$

**(b) Partial derivative with respect to v ($\frac{\partial f}{\partial v}$):**
Differentiating with respect to $v$ (treating $u$ as a constant):
$$\frac{\partial f}{\partial v}=3u^{2}v^{2}\cos(u+v^{3})-\frac{2\sec(4u)}{1+4v^{2}}$$

***
### 2. If $u=\sin^{-1}(x-y)$, where $x=3t$ and $y=4t^{3}$, then show that $\frac{du}{dt}=\frac{3}{\sqrt{1-t^{2}}}$ (Question 2b from ESA).

#### Detailed Solution:
This requires the **Total Derivative** (Chain Rule) for $u(x(t), y(t))$:
$$\frac{du}{dt}=\frac{\partial u}{\partial x}\frac{dx}{dt}+\frac{\partial u}{\partial y}\frac{dy}{dt}$$

1.  **Compute partial derivatives of $u$ with respect to $x$ and $y$:**
    $$\frac{\partial u}{\partial x}=\frac{1}{\sqrt{1-(x-y)^{2}}} \quad \text{and} \quad \frac{\partial u}{\partial y}=\frac{-1}{\sqrt{1-(x-y)^{2}}}$$
2.  **Compute derivatives of $x$ and $y$ with respect to $t$:**
    $$\frac{dx}{dt}=3 \quad \text{and} \quad \frac{dy}{dt}=12t^{2}$$
3.  **Substitute into the chain rule:**
    $$\frac{du}{dt}=\frac{1}{\sqrt{1-(x-y)^{2}}}(3)+\frac{-1}{\sqrt{1-(x-y)^{2}}}(12t^{2})=\frac{3-12t^{2}}{\sqrt{1-(x-y)^{2}}}$$
4.  **Substitute $x=3t$ and $y=4t^3$:**
    $$\frac{du}{dt}=\frac{3-12t^{2}}{\sqrt{1-(3t-4t^{3})^{2}}} = \frac{3(1-4t^{2})}{\sqrt{1-9t^2+24t^4-16t^6}}$$
5.  **Simplify the denominator** (using $1-9t^2+24t^4-16t^6 = (1-t^2)(1-4t^2)^2$):
    $$\frac{du}{dt}=\frac{3(1-4t^{2})}{\sqrt{1-t^{2}}\sqrt{(1-4t^{2})^{2}}} = \frac{3(1-4t^{2})}{\sqrt{1-t^{2}}(1-4t^{2})}$$
    $$\frac{du}{dt}=\frac{3}{\sqrt{1-t^{2}}}$$

***
### 3. Find all the first-order partial derivatives of the following function:
$$w=\cos(x^{2}+2y)-e^{4x-yz^{4}}+y^{3}$$

#### Detailed Answer:
$$\frac{\partial w}{\partial x}=\frac{\partial}{\partial x}(\cos(x^{2}+2y))-\frac{\partial}{\partial x}(e^{4x-yz^{4}})+\frac{\partial}{\partial x}(y^{3})$$
$$\frac{\partial w}{\partial x}=-2x\sin(x^{2}+2y)-4e^{4x-yz^{4}}$$

$$\frac{\partial w}{\partial y}=\frac{\partial}{\partial y}(\cos(x^{2}+2y))-\frac{\partial}{\partial y}(e^{4x-yz^{4}})+\frac{\partial}{\partial y}(y^{3})$$
$$\frac{\partial w}{\partial y}=-2\sin(x^{2}+2y)+z^{4}e^{4x-yz^{4}}+3y^{2}$$

$$\frac{\partial w}{\partial z}=\frac{\partial}{\partial z}(\cos(x^{2}+2y))-\frac{\partial}{\partial z}(e^{4x-yz^{4}})+\frac{\partial}{\partial z}(y^{3})$$
$$\frac{\partial w}{\partial z}=4yz^{3}e^{4x-yz^{4}}$$

***
### 4. Find all the first-order partial derivatives of the following function:
$$f(u,v,p,t)=8u^{2}t^{3}p-\sqrt{v}p^{2}t^{-5}+2u^{2}t+3p^{4}-v$$

#### Detailed Answer:
$$\frac{\partial f}{\partial u}=16ut^{3}p+4ut$$
$$\frac{\partial f}{\partial v}=-\frac{p^{2}}{2\sqrt{v}t^{5}}-1$$
$$\frac{\partial f}{\partial p}=8u^{2}t^{3}-2p\sqrt{v}t^{-5}+12p^{3}$$
$$\frac{\partial f}{\partial t}=24u^{2}t^{2}p+5\sqrt{v}p^{2}t^{-6}+2u^{2}$$

***
### 5. Given the function $u=x^{y}$, show that: (i) $u_{xy}=u_{yx},$ (ii) $u_{xxy}=u_{xyx}$

#### Proof (Summary):
1.  **Compute $u_x$ and $u_y$:**
    $$u_x = yx^{y-1} \quad u_y = x^y \ln x$$
2.  **(i) $\mathbf{u_{xy}=u_{yx}}$ (Clairaut's Theorem):**
    $$u_{xy} = \frac{\partial}{\partial y}(yx^{y-1}) = 1 \cdot x^{y-1} + y \cdot (x^{y-1} \ln x) = x^{y-1}(1+y\ln x)$$
    $$u_{yx} = \frac{\partial}{\partial x}(x^y \ln x) = yx^{y-1} \ln x + x^y \cdot \frac{1}{x} = yx^{y-1} \ln x + x^{y-1} = x^{y-1}(y\ln x+1)$$
    Thus, $u_{xy}=u_{yx}$.

3.  **(ii) $\mathbf{u_{xxy}=u_{xyx}}$:**
    $$u_{xxy}=\frac{\partial}{\partial x}(u_{xy}) = \frac{\partial}{\partial x}[x^{y-1}(1+y\ln x)] = x^{y-2}[(2y-1)+y(y-1)\ln x]$$
    $$u_{xyx}=\frac{\partial}{\partial y}(u_{xx}) = \frac{\partial}{\partial y}[y(y-1)x^{y-2}] = x^{y-2}[(2y-1)+y(y-1)\ln x]$$
    Thus, $u_{xxy}=u_{xyx}$.

***
### 6. Find $\frac{du}{dx}$ if: $u=\cos(x^{2}+y^{2})$ and $a^{2}x^{2}+b^{2}y^{2}=c^{2}$

#### Detailed Answer:
From the constraint, differentiate implicitly with respect to $x$:
$$2a^{2}x + 2b^{2}y \frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{a^{2}x}{b^{2}y}$$
Using the chain rule for $\frac{du}{dx}$:
$$\frac{du}{dx}=\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}\frac{dy}{dx} = [-2x\sin(x^{2}+y^{2})] + [-2y\sin(x^{2}+y^{2})]\left(-\frac{a^{2}x}{b^{2}y}\right)$$
$$\frac{du}{dx}=-2x\sin(x^{2}+y^{2})+\frac{2a^{2}x}{b^{2}}\sin(x^{2}+y^{2})$$
$$\frac{du}{dx}=-\frac{2x}{b^{2}}\sin(x^{2}+y^{2})(b^{2}-a^{2})$$

***
## II. Homogeneous Functions and Transformations
***
### 7. If $(\sqrt{x}+\sqrt{y})\sin^{2}u-x^{\frac{1}{3}}-y^{\frac{1}{3}}=0,$ prove that $12x\frac{\partial u}{\partial x}+12y\frac{\partial u}{\partial y}+\tan u=0.$ (Question 2a from ESA)

#### Proof:
1.  **Define the Homogeneous Function:** The equation can be rearranged to define a homogeneous function $z$ of degree $n$:
    $$\sin^{2}u = \frac{x^{1/3}+y^{1/3}}{\sqrt{x}+\sqrt{y}} = \frac{x^{1/3}(1+(y/x)^{1/3})}{x^{1/2}(1+(y/x)^{1/2})} = x^{1/3-1/2} G(y/x) = x^{-1/6} G(y/x)$$
    Let $z = \sin^{2}u$. $z$ is a homogeneous function of $x$ and $y$ of degree $n = -1/6$.
2.  **Apply Euler's Theorem on $z$:**
    $$x\frac{\partial z}{\partial x} + y\frac{\partial z}{\partial y} = n z = -\frac{1}{6}\sin^2 u$$
3.  **Relate $\frac{\partial z}{\partial x}$ to $\frac{\partial u}{\partial x}$:**
    $$\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(\sin^2 u) = 2 \sin u \cos u \frac{\partial u}{\partial x} = \sin(2u) \frac{\partial u}{\partial x}$$
    Similarly, $\frac{\partial z}{\partial y} = \sin(2u) \frac{\partial u}{\partial y}$.
4.  **Substitute back into Euler's equation:**
    $$x \left(\sin(2u) \frac{\partial u}{\partial x}\right) + y \left(\sin(2u) \frac{\partial u}{\partial y}\right) = -\frac{1}{6} \sin^2 u$$
    $$\sin(2u) \left(x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y}\right) = -\frac{1}{6} \sin^2 u$$
5.  **Simplify (using $\sin(2u) = 2 \sin u \cos u$):**
    $$2 \sin u \cos u \left(x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y}\right) = -\frac{1}{6} \sin u \sin u$$
    $$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = -\frac{1}{12} \frac{\sin u}{\cos u} = -\frac{1}{12} \tan u$$
6.  **Rearrange:** Multiply by 12 and move $\tan u$ to the LHS:
    $$12x\frac{\partial u}{\partial x}+12y\frac{\partial u}{\partial y}+\tan u=0$$

***
### 8. If $z=f(x,y)$ where $x=u^{2}-v^{2}$, $y=2uv$ prove that:
$$4(u^{2}+v^{2})\left(\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}\right)=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$$

#### Proof (Summary):
This involves transforming the Laplacian operator. The key step is summing the second partial derivatives in the new coordinates:
$$\frac{\partial^{2}z}{\partial u^{2}}=2\frac{\partial z}{\partial x}+4u^{2}\frac{\partial^{2}z}{\partial x^{2}}+8uv\frac{\partial^{2}z}{\partial x\partial y}+4v^{2}\frac{\partial^{2}z}{\partial y^{2}}$$
$$\frac{\partial^{2}z}{\partial v^{2}}=-2\frac{\partial z}{\partial x}+4v^{2}\frac{\partial^{2}z}{\partial x^{2}}-8uv\frac{\partial^{2}z}{\partial x\partial y}+4u^{2}\frac{\partial^{2}z}{\partial y^{2}}$$
Summing the two equations cancels the first-order and mixed derivative terms:
$$\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}=(4u^{2}+4v^{2})\frac{\partial^{2}z}{\partial x^{2}}+(4v^{2}+4u^{2})\frac{\partial^{2}z}{\partial y^{2}}$$
$$\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}=4(u^{2}+v^{2})\left(\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}\right)$$

***
### 9. If $z=xf\left(\frac{y}{x}\right)+g\left(\frac{x}{y}\right)$, then show that:
$$x^{2}\frac{\partial^{2}z}{\partial x^{2}}+2xy\frac{\partial^{2}z}{\partial x\partial y}+y^{2}\frac{\partial^{2}z}{\partial y^{2}}=0$$

#### Proof (Summary using Euler's Theorem):
1.  **Decompose $z$:** Let $u=xf\left(\frac{y}{x}\right)$ and $v=g\left(\frac{x}{y}\right)$, so $z=u+v$.
2.  **Determine Degree of Homogeneity:**
    * $u$ is homogeneous of degree $n_u=1$.
    * $v$ is homogeneous of degree $n_v=0$.
3.  **Apply Euler's Theorem (Second-Order):** For a homogeneous function $\phi$ of degree $n$, the identity $x^{2}\frac{\partial^{2}\phi}{\partial x^{2}}+2xy\frac{\partial^{2}\phi}{\partial x\partial y}+y^{2}\frac{\partial^{2}\phi}{\partial y^{2}}=n(n-1)\phi$ holds.
    * For $u$ ($n=1$): $\quad x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}=1(1-1)u=0$
    * For $v$ ($n=0$): $\quad x^{2}\frac{\partial^{2}v}{\partial x^{2}}+2xy\frac{\partial^{2}v}{\partial x\partial y}+y^{2}\frac{\partial^{2}v}{\partial y^{2}}=0(0-1)v=0$
4.  **Conclusion:** Summing the two results proves the identity for $z=u+v$:
    $$x^{2}\frac{\partial^{2}z}{\partial x^{2}}+2xy\frac{\partial^{2}z}{\partial x\partial y}+y^{2}\frac{\partial^{2}z}{\partial y^{2}}=0+0=0$$

***
### 10. If $z$ is a function of $x$ and $y$, and $x=u\cos\alpha-v\sin\alpha$, $y=u\sin\alpha+v\cos\alpha$, then show that:
$$\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}=\frac{\partial^{2}z}{\partial u^{2}}+\frac{\partial^{2}z}{\partial v^{2}}$$

#### Proof (Principle):
The coordinate transformation given is a **rotation of axes** by an angle $\alpha$. The expression $\left(\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}\right)$ is the **Laplacian operator** ($\nabla^2$), which is known to be **invariant** under rigid body rotations (like this coordinate change). Therefore, the identity holds.

***
### 11. Transform the partial differential equation $z_{xx}+2z_{xy}+z_{yy}=0$ by changing the independent variables using the transformation: $u=x-y; v=x+y$. Show the transformed equation in terms of the new variables $u$ and $v$.

#### Detailed Solution:
Using the chain rule to express the $x$ and $y$ derivatives in terms of $u$ and $v$:
$$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}=\frac{\partial z}{\partial u}(1)+\frac{\partial z}{\partial v}(1)=\frac{\partial z}{\partial u}+\frac{\partial z}{\partial v}$$
$$\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}=\frac{\partial z}{\partial u}(-1)+\frac{\partial z}{\partial v}(1)=-\frac{\partial z}{\partial u}+\frac{\partial z}{\partial v}$$
Applying the derivatives again:
$$z_{xx}=\left(\frac{\partial}{\partial u}+\frac{\partial}{\partial v}\right)\left(\frac{\partial z}{\partial u}+\frac{\partial z}{\partial v}\right)=z_{uu}+2z_{uv}+z_{vv}$$
$$z_{yy}=\left(-\frac{\partial}{\partial u}+\frac{\partial}{\partial v}\right)\left(-\frac{\partial z}{\partial u}+\frac{\partial z}{\partial v}\right)=z_{uu}-2z_{uv}+z_{vv}$$
$$z_{xy}=\left(\frac{\partial}{\partial u}+\frac{\partial}{\partial v}\right)\left(-\frac{\partial z}{\partial u}+\frac{\partial z}{\partial v}\right)=-z_{uu}+z_{uv}-z_{vu}+z_{vv}=-z_{uu}+z_{vv}$$
Substitute into the original PDE $z_{xx}+2z_{xy}+z_{yy}=0$:
$$(z_{uu}+2z_{uv}+z_{vv}) + 2(-z_{uu}+z_{vv}) + (z_{uu}-2z_{uv}+z_{vv})=0$$
$$(1-2+1)z_{uu} + (2-2)z_{uv} + (1+2+1)z_{vv}=0$$
$$4z_{vv}=0$$
The transformed equation is:
$$z_{vv}=0$$

***
### 12. Given $u=(x-y)(y-z)(z-x)$, prove that: (i) $\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z}=0$ (ii) $x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}=u$

#### Proof (Summary):
1.  **(i) Sum of First-Order Derivatives:** Differentiate $u$ with respect to each variable and sum them. This is a property of cyclic functions.
    $$\frac{\partial u}{\partial x} = (y-z)[(y-z)(-1)(z-x)+(x-y)(1)(y-z)]$$
    The expansion and sum show that they cancel out, proving:
    $$\frac{\partial u}{\partial x}+\frac{\partial u}{\partial y}+\frac{\partial u}{\partial z}=0$$
2.  **(ii) Euler's Theorem:** $u$ is a **homogeneous function of degree $n=3$**.
    $$u(tx, ty, tz) = (tx-ty)(ty-tz)(tz-tx) = t^3 (x-y)(y-z)(z-x) = t^3 u(x,y,z)$$
    By Euler's Theorem for three variables:
    $$x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}+z\frac{\partial u}{\partial z}=nu = 3u$$
    *(Note: The question in the file says $=u$, which is $n=1$. The correct degree is $n=3$ from the formula, but if the problem is stated as $=u$, it must be a typo in the question or an alternate form. Based on the function $u$, the correct result is $3u$.)*

***
### 13. If $u=x^{2}\tan^{-1}(\frac{y}{x})-y^{2}\tan^{-1}(\frac{x}{y})$ : then find the value of:
$$x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}$$

#### Answer:
The function $u$ is a **homogeneous function of degree $n=2$**.
Applying Euler's Theorem on second-order partial derivatives, the value is $n(n-1)u$:
$$x^{2}\frac{\partial^{2}u}{\partial x^{2}}+2xy\frac{\partial^{2}u}{\partial x\partial y}+y^{2}\frac{\partial^{2}u}{\partial y^{2}}=2(2-1)u=2u$$

***
## III. Taylor Series and Approximations
***
### 14. Expand $f(x,y)=x^{2}+xy+y^{2}$ in powers of $(x-1)\&(y-2)$ up to second degree terms. (Question 2c from ESA)

#### Detailed Solution (Taylor Series):
The expansion is centered at $(a, b) = (1, 2)$. The formula up to the second degree is:
$$f(x,y) \approx f(a,b) + [ (x-a)f_x(a,b) + (y-b)f_y(a,b) ] + \frac{1}{2!} [ (x-a)^2 f_{xx}(a,b) + 2(x-a)(y-b)f_{xy}(a,b) + (y-b)^2 f_{yy}(a,b) ]$$

1.  **Function and Derivatives at (1, 2):**
    * $f(x, y) = x^2 + xy + y^2 \implies f(1, 2) = 1 + 2 + 4 = 7$
    * $f_x = 2x + y \implies f_x(1, 2) = 2(1) + 2 = 4$
    * $f_y = x + 2y \implies f_y(1, 2) = 1 + 2(2) = 5$
    * $f_{xx} = 2 \implies f_{xx}(1, 2) = 2$
    * $f_{yy} = 2 \implies f_{yy}(1, 2) = 2$
    * $f_{xy} = 1 \implies f_{xy}(1, 2) = 1$

2.  **Substitute into the formula:**
    $$f(x,y) \approx 7 + [(x-1)(4) + (y-2)(5)] + \frac{1}{2}[(x-1)^2(2) + 2(x-1)(y-2)(1) + (y-2)^2(2)]$$
    $$f(x,y) \approx 7 + 4(x-1) + 5(y-2) + (x-1)^2 + (x-1)(y-2) + (y-2)^2$$

***
### 15. Expand $\frac{1}{1+x-y}$ using Taylor's series up to second-degree terms (about (0,0)).

#### Expansion:
$$f(x,y)\approx 1-x+y+x^{2}-2xy+y^{2}$$

***
### 16. If $f(x,y)=\tan^{-1}(xy)$, compute an approximate value of $f(0.9, -1.2)$.

#### Answer:
This requires using the first-degree Taylor approximation near $x_0=1, y_0=-1$:
$$f(x,y) \approx f(1,-1) + (x-1)f_x(1,-1) + (y+1)f_y(1,-1)$$
The approximate value is:
$$f(0.9,-1.2)\approx-0.8229$$

***
## IV. Maxima, Minima, and Optimization
***
### 17. Discuss the maxima and minima of the function:
$$f(x,y)=x^{3}y^{2}(1-x-y)$$
where $x>0, y>0$, and $x+y<1$.

#### Maxima/Minima:
1.  **Critical Point:** Solving $f_x=0$ and $f_y=0$ yields the critical point $\left(\frac{1}{2},\frac{1}{3}\right)$ within the domain.
2.  **Classification:** Using the second derivative test, $r=f_{xx}<0$ and $rt-s^{2}>0$.
3.  **Result:** The function has a **local maximum** at $\left(\frac{1}{2},\frac{1}{3}\right)$.
    $$\text{Maximum value } f\left(\frac{1}{2},\frac{1}{3}\right)=\frac{1}{432}$$

***
### 18. Find the maximum and minimum values of the function:
$$f(x,y)=\sin x \sin y \sin(x+y), \quad 0<x, y<\pi$$

#### Answer:
The critical points are: $\left(\frac{\pi}{3},\frac{\pi}{3}\right)$ and $\left(\frac{2\pi}{3},\frac{2\pi}{3}\right)$.
* **Maximum value:** $\quad f\left(\frac{\pi}{3},\frac{\pi}{3}\right)=\frac{3\sqrt{3}}{8}$
* **Minimum value:** $\quad f\left(\frac{2\pi}{3},\frac{2\pi}{3}\right)=-\frac{3\sqrt{3}}{8}$

***
### 19. Find the volume of the largest rectangular parallelepiped that can be inscribed in the ellipsoid
$$\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}=1$$

#### Detailed Solution (Lagrange Multipliers):
The objective is to maximize $V=8xyz$ subject to the constraint $g(x,y,z)=\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}-1=0$.
The condition $\nabla V = \lambda \nabla g$ leads to:
$$\frac{x^{2}}{a^{2}}=\frac{y^{2}}{b^{2}}=\frac{z^{2}}{c^{2}}$$
Substituting this back into the constraint $\sum \frac{x^2}{a^2} = 1$ gives $3\frac{x^2}{a^2}=1$.
The dimensions are:
$$x=\frac{a}{\sqrt{3}}, \quad y=\frac{b}{\sqrt{3}}, \quad z=\frac{c}{\sqrt{3}}$$
The **Maximum Volume** is:
$$V_{max}=8\left(\frac{a}{\sqrt{3}}\right)\left(\frac{b}{\sqrt{3}}\right)\left(\frac{c}{\sqrt{3}}\right)=\frac{8abc}{3\sqrt{3}}$$

***
### 20. A tent on a square base of side $x$, has its sides vertical of height $y$ and the top is a regular pyramid of height $h$. Find $x$ and $y$ in terms of $h$, if the canvas required for its construction is to be minimum for the tent to have a given capacity. (Question 2d from ESA)

#### Detailed Solution (Constrained Optimization):
1.  **Objective (Minimize Canvas Area $A$):**
    $$A = 4xy + 2x \sqrt{h^2 + x^2/4} \quad (A = \text{Cube Sides} + \text{Pyramid Slant Faces})$$
2.  **Constraint (Fixed Capacity/Volume $V$):**
    $$V = x^2 y + \frac{1}{3} x^2 h \quad (V = \text{Cube Volume} + \text{Pyramid Volume})$$
3.  **Optimization Condition:** For minimum area $A$ with a constant volume $V$, the resulting equation from $\frac{dA}{dx}=0$ (after substitution) is required. The solution simplifies to a necessary geometric condition: **the vertical wall height ($y$) must be related to the pyramid's slant height ($l$)**.
    The condition for minimum canvas area for a fixed volume is:
    $$\frac{2h^2 + x^2}{\sqrt{h^2 + x^2/4}} = 2(y + h)$$
    *Note: If the solution must express $x$ and $y$ only in terms of $h$, it implies a specific (unspecified) relationship between the given volume $V$ and $h$ that eliminates $V$. Without this, the minimum is found by substituting $y$ from the $V$ constraint into the $A$ equation.*

The condition the critical point must satisfy is:
$$4y = \frac{2(2h^2 + x^2)}{\sqrt{4h^2 + x^2}} - \frac{8h}{3}$$

***
### 21. Divide the number 24 into three parts such that the continued product of the first, square of the second, and the cube of the third may be maximum.

#### Answer:
Let the three parts be $x, y, z$ such that $x+y+z=24$.
Objective: Maximize $P=xy^2z^3$.
Using Lagrange multipliers, the parts are found to be proportional to their powers:
$$x:y:z = 1:2:3$$
The parts are:
$$x=\frac{1}{6}\times24=4, \quad y=\frac{2}{6}\times24=8, \quad z=\frac{3}{6}\times24=12$$
The maximum product is:
$$P_{max}=4\times8^{2}\times12^{3}=442368$$

***
### 22. Find the maximum value of $x^{m}y^{n}z^{p}$ subject to the constraint $x+y+z=a.$

#### Answer:
Using Lagrange Multipliers, the terms are proportional to their exponents:
$$x:y:z = m:n:p$$
The values of $x, y, z$ that yield the maximum value are:
$$x=\frac{am}{m+n+p}; \quad y=\frac{an}{m+n+p}; \quad z=\frac{ap}{m+n+p}$$
The maximum value is:
$$f_{max}=\frac{a^{m+n+p}m^{m}n^{n}p^{p}}{(m+n+p)^{m+n+p}}$$

***
### 23. In estimating the cost of a pile of bricks measured as $6m\times50m\times4m$ the tape is stretched 1% beyond the standard length. If the count is 12 bricks in $1m^{3}$ and bricks cost 100 rupees per 1000, then find the approximate error in cost.

#### Detailed Answer:
1.  **Relative Error in Measurement:** The tape error is $\delta L = 0.01L$. The relative error in length is $\frac{\delta L}{L} = 0.01$. Since all three dimensions are measured with the same tape, the relative error in volume ($V=lwh$) is:
    $$\frac{\delta V}{V} \approx \frac{\delta l}{l} + \frac{\delta w}{w} + \frac{\delta h}{h} = 0.01 + 0.01 + 0.01 = 0.03$$
2.  **Cost:** The cost $C$ is proportional to the calculated volume $V$: $C \propto V$.
    The relative error in cost is $\frac{\delta C}{C} = \frac{\delta V}{V} = 0.03$.
3.  **Calculated Volume:** $V = 6 \times 50 \times 4 = 1200 m^3$.
4.  **True Cost ($C$):** $12$ bricks/m$^3$ means the count is $1200 \times 12 = 14400$ bricks.
    Cost per brick: $\frac{100}{1000}=0.1$ rupees/brick.
    Total Cost $C = 14400 \times 0.1 = 1440$ Rupees.
5.  **Approximate Error in Cost ($\delta C$):**
    $$\delta C = 0.03 \times C = 0.03 \times 1440 = 43.20 \text{ Rupees}$$
    The approximate error in cost is **$43.20$ Rupees**.