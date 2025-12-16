---
dg-publish: true
---

# [[Mathematics|Back]]
***
[[Semester 1/Mathematics/Unit 2/Core Notes|Core Notes]] | [[Semester 1/Mathematics/Unit 2/Examples|Examples]] | [[Semester 1/Mathematics/Unit 2/Q&A|Questions]]
***
# Unit 2: Worked Examples

<a id="example-1-cf-real-distinct-roots"></a>
### Example 1: C.F. Real, Distinct Roots
Find the solution of $y''-y'-6y=0$.
**Solution:**
The characteristic equation is $m^2 - m - 6 = 0$.
Factoring gives $(m-3)(m+2) = 0$, so the roots are $m_1 = 3$ and $m_2 = -2$.
These are real and distinct (Case I).
The general solution is $y(x) = A e^{3x} + B e^{-2x}$.

---
<a id="example-2-cf-real-distinct-roots-ivp"></a>
### Example 2: C.F. Real, Distinct Roots (IVP)
Solve the initial value problem $4y''-8y'+3y=0$, $y(0)=1$, $y'(0)=3$.
**Solution:**
The characteristic equation is $4m^2 - 8m + 3 = 0$.
The roots are $m = 1/2, 3/2$.
The general solution is $y(x) = A e^{(3x)/2} + B e^{x/2}$.
Apply initial conditions:
1. $y(0) = A e^0 + B e^0 \implies 1 = A + B$
2. $y'(x) = \frac{3A}{2} e^{(3x)/2} + \frac{B}{2} e^{x/2}$
   $y'(0) = \frac{3A}{2} + \frac{B}{2} \implies 3 = \frac{3A}{2} + \frac{B}{2}$
Solving the system $A+B=1$ and $3A+B=6$ gives $A = 5/2$ and $B = -3/2$.
The solution is $y(x) = \frac{5}{2} e^{(3x)/2} - \frac{3}{2} e^{x/2}$.

---
<a id="example-3-cf-repeated-roots"></a>
### Example 3: C.F. Repeated Roots
Find the solution of $4y''+4y'+y=0$.
**Solution:**
The characteristic equation is $4m^2 + 4m + 1 = 0$, or $(2m+1)^2 = 0$.
The roots are $m = -1/2, -1/2$ (a repeated root, Case II).
The general solution is $y(x) = (A+Bx) e^{-x/2}$.

---
<a id="example-4-cf-repeated-roots-ivp"></a>
### Example 4: C.F. Repeated Roots (IVP)
Solve the initial value problem $y''+6y'+9y=0$, $y(0)=2$, $y'(0)=3$.
**Solution:**
The characteristic equation is $m^2 + 6m + 9 = 0$, or $(m+3)^2 = 0$.
The roots are $m = -3, -3$.
The general solution is $y(x) = (A+Bx) e^{-3x}$.
Apply initial conditions:
1. $y(0) = (A + B \cdot 0) e^0 \implies 2 = A$
2. $y'(x) = B e^{-3x} - 3(A+Bx) e^{-3x}$
   $y'(0) = B - 3A \implies 3 = B - 3(2) \implies B = 9$.
The solution is $y(x) = (2+9x) e^{-3x}$.

---
<a id="example-5-cf-complex-roots"></a>
### Example 5: C.F. Complex Roots
Find the solution of $y''+2y'+2y=0$.
**Solution:**
The characteristic equation is $m^2 + 2m + 2 = 0$.
Using the quadratic formula, $m = \frac{-2 \pm \sqrt{4-8}}{2} = \frac{-2 \pm \sqrt{-4}}{2} = -1 \pm i$.
This is Case III with $\alpha = -1$ and $\beta = 1$.
The general solution is $y(x) = e^{-x} (A \cos x + B \sin x)$.

---
<a id="example-6-cf-complex-roots-ivp"></a>
### Example 6: C.F. Complex Roots (IVP)
Solve the initial value problem $y''+4y'+13y=0$, $y(0)=0$, $y'(0)=1$.
**Solution:**
The characteristic equation is $m^2 + 4m + 13 = 0$.
The roots are $m = \frac{-4 \pm \sqrt{16-52}}{2} = -2 \pm 3i$.
The general solution is $y(x) = e^{-2x} (A \cos 3x + B \sin 3x)$.
Apply initial conditions:
1. $y(0) = e^0 (A \cos 0 + B \sin 0) \implies 0 = A$
2. $y'(x) = e^{-2x} (-3A \sin 3x + 3B \cos 3x) - 2e^{-2x} (A \cos 3x + B \sin 3x)$
   With $A=0$, this simplifies to $y'(x) = e^{-2x} (3B \cos 3x) - 2e^{-2x} (B \sin 3x)$.
   $y'(0) = e^0(3B \cos 0) - 2e^0(B \sin 0) \implies 1 = 3B \implies B = 1/3$.
The solution is $y(x) = \frac{1}{3} e^{-2x} \sin 3x$.

---
<a id="example-7-pi-case-i-eax"></a>
### Example 7: P.I. Case I ($e^{ax}$)
Find the P.I. of $(D^2+5D+6)y=e^x$.
**Solution:**
$$P.I. = \frac{1}{D^2+5D+6} e^x$$
This is Case I. Replace $D$ with $a=1$:
$$P.I. = \frac{1}{(1)^2 + 5(1) + 6} e^x = \frac{1}{1+5+6} e^x = \frac{1}{12} e^x$$

---
<a id="example-8-pi-case-i-failure-case"></a>
### Example 8: P.I. Case I (Failure Case)
Find the P.I. of $(D+2)(D-1)^2 y = e^{-2x} + 2\sinh x$.
*(Note: $2\sinh x = e^x - e^{-x}$)*
$$P.I. = \frac{1}{(D+2)(D-1)^2} (e^{-2x} + e^x - e^{-x})$$
We solve for each part:
1.  **For $e^{-2x}$:** $f(D) = (D+2)(D-1)^2$. $f(-2) = (-2+2)(-2-1)^2 = 0$. This is a failure case.
    Let $f(D) = (D-a)\phi(D)$ where $a=-2$ and $\phi(D) = (D-1)^2$. $\phi(a) = \phi(-2) = (-2-1)^2 = 9$.
    Using the rule $\frac{x}{f'(a)} e^{ax}$ or $\frac{x}{\phi(a)} e^{ax}$:
    $P.I._1 = \frac{1}{(D+2)(D-1)^2} e^{-2x} = \frac{1}{(D-1)^2} \left[ \frac{1}{D+2} e^{-2x} \right] = \frac{1}{(D-1)^2} \left[ \frac{x}{1} e^{-2x} \right] = \frac{x e^{-2x}}{(-2-1)^2} = \frac{x e^{-2x}}{9}$
2.  **For $e^x$:** $f(1) = (1+2)(1-1)^2 = 0$. This is a failure case (root repeated twice).
    $f(D) = (D-1)^2 \phi(D)$ where $a=1$ and $\phi(D) = (D+2)$. $\phi(1) = 1+2 = 3$.
    Using the rule $\frac{x^r}{\phi(a)} e^{ax}$ with $r=2$:
    $P.I._2 = \frac{1}{(D+2)(D-1)^2} e^x = \frac{1}{D+2} \left[ \frac{1}{(D-1)^2} e^x \right] = \frac{1}{D+2} \left[ \frac{x^2}{2!} e^x \right] = \frac{1}{1+2} \left( \frac{x^2 e^x}{2} \right) = \frac{x^2 e^x}{6}$
3.  **For $-e^{-x}$:** $f(-1) = (-1+2)(-1-1)^2 = (1)(-2)^2 = 4$. This is not a failure case.
    $P.I._3 = \frac{1}{(D+2)(D-1)^2} (-e^{-x}) = \frac{-e^{-x}}{(-1+2)(-1-1)^2} = \frac{-e^{-x}}{(1)(4)} = -\frac{e^{-x}}{4}$
**Total P.I.:** $y_p = \frac{x e^{-2x}}{9} + \frac{x^2 e^x}{6} - \frac{e^{-x}}{4}$

---
<a id="example-9-pi-case-ii-cosax"></a>
### Example 9: P.I. Case II ($\cos(ax)$)
Find the P.I. of $(D^3+1)y = \cos(2x-1)$.
**Solution:**
$$P.I. = \frac{1}{D^3+1} \cos(2x-1) = \frac{1}{D \cdot D^2 + 1} \cos(2x-1)$$
This is Case II. Replace $D^2$ with $-a^2 = -2^2 = -4$:
$$P.I. = \frac{1}{D(-4) + 1} \cos(2x-1) = \frac{1}{1-4D} \cos(2x-1)$$
Rationalize the operator by multiplying by $(1+4D)$:
$$P.I. = \frac{1+4D}{(1-4D)(1+4D)} \cos(2x-1) = \frac{1+4D}{1 - 16D^2} \cos(2x-1)$$
Now, replace $D^2$ with $-4$ again:
$$P.I. = \frac{1+4D}{1 - 16(-4)} \cos(2x-1) = \frac{1+4D}{65} \cos(2x-1)$$

$$P.I. = \frac{1}{65} [ \cos(2x-1) + 4D(\cos(2x-1)) ]$$
$$P.I. = \frac{1}{65} [ \cos(2x-1) + 4(-2 \sin(2x-1)) ] = \frac{1}{65} [\cos(2x-1) - 8 \sin(2x-1)]$$

---
<a id="example-10-pi-case-ii-failure-case"></a>
### Example 10: P.I. Case II (Failure Case)
Find the P.I. of $\frac{d^3y}{dx^3}+4\frac{dy}{dx} = \sin 2x$.
**Solution:**
The symbolic form is $(D^3+4D)y = \sin 2x$.
$$P.I. = \frac{1}{D^3+4D} \sin 2x = \frac{1}{D(D^2+4)} \sin 2x$$

This is Case II. If we try to replace $D^2$ with $-a^2 = -2^2 = -4$, the denominator becomes $D(-4+4) = 0$. This is a failure case.
Use the rule $P.I. = x \frac{1}{f'(D)} \sin(ax)$. Here $f(D) = D^3+4D$, so $f'(D) = 3D^2+4$.
$$P.I. = x \frac{1}{3D^2+4} \sin 2x$$

Now, apply the Case II rule again (replace $D^2$ with $-4$):
$$P.I. = x \frac{1}{3(-4)+4} \sin 2x = x \frac{1}{-12+4} \sin 2x = -\frac{x}{8} \sin 2x$$

---
<a id="example-11-pi-case-iii-xm"></a>
### Example 11: P.I. Case III ($x^m$)
Find the P.I. of $\frac{d^2y}{dx^2}+\frac{dy}{dx} = x^2+2x+4$.
**Solution:**
The symbolic form is $(D^2+D)y = x^2+2x+4$.
$$P.I. = \frac{1}{D^2+D} (x^2+2x+4) = \frac{1}{D(1+D)} (x^2+2x+4)$$

This is Case III. Expand $\frac{1}{1+D}$ as $(1+D)^{-1}$ using the binomial series:
$$(1+D)^{-1} = 1 - D + D^2 - D^3 + \cdots$$

$$P.I. = \frac{1}{D} [1 - D + D^2 - \cdots] (x^2+2x+4)$$
We only need terms up to $D^2$, as $D^3(x^2) = 0$.
$$P.I. = \frac{1}{D} [ 1(x^2+2x+4) - D(x^2+2x+4) + D^2(x^2+2x+4) ]$$
$$P.I. = \frac{1}{D} [ (x^2+2x+4) - (2x+2) + (2) ]$$

$$P.I. = \frac{1}{D} [ x^2 + 4 ]$$
The operator $\frac{1}{D}$ means "integrate":
$$P.I. = \int (x^2+4) dx = \frac{x^3}{3} + 4x$$

---
<a id="example-12-pi-case-iv-eaxv"></a>
### Example 12: P.I. Case IV ($e^{ax}V$)
Find the P.I. of $(D^2-2D+4)y = e^x \cos x$.
**Solution:**
This is Case IV, with $a=1$ and $V(x) = \cos x$.
Use the shift theorem: $P.I. = e^x \frac{1}{f(D+a)} V(x)$.
$$P.I. = e^x \frac{1}{(D+1)^2 - 2(D+1) + 4} \cos x$$

$$P.I. = e^x \frac{1}{(D^2+2D+1) - 2D - 2 + 4} \cos x$$
$$P.I. = e^x \frac{1}{D^2+3} \cos x$$

Now this is Case II. Replace $D^2$ with $-a^2 = -1^2 = -1$:
$$P.I. = e^x \frac{1}{(-1)+3} \cos x = \frac{1}{2} e^x \cos x$$

---
<a id="example-13-full-solution-mixed-pi"></a>
### Example 13: Full Solution (Mixed P.I.)
Solve $(D^2-3D+2)y = xe^{3x} + \sin 2x$.
**Solution:**
**(i) To find C.F.:**
A.E. is $m^2-3m+2=0$, or $(m-1)(m-2)=0$. Roots are $m=1, 2$.
$C.F. = c_1 e^x + c_2 e^{2x}$.

**(ii) To find P.I.:**
$P.I. = P.I._1 + P.I._2 = \frac{1}{D^2-3D+2} (e^{3x} x) + \frac{1}{D^2-3D+2} (\sin 2x)$.

* **For $P.I._1$ (Case IV):**
    $P.I._1 = e^{3x} \frac{1}{(D+3)^2 - 3(D+3) + 2} x = e^{3x} \frac{1}{D^2+6D+9-3D-9+2} x = e^{3x} \frac{1}{D^2+3D+2} x$
    This is now Case III. Expand $\frac{1}{2(1 + \frac{3D+D^2}{2})}$:
    $P.I._1 = \frac{e^{3x}}{2} [1 + \frac{3D+D^2}{2}]^{-1} x = \frac{e^{3x}}{2} [1 - \frac{3D}{2} + \dots] x$
    $P.I._1 = \frac{e^{3x}}{2} [x - \frac{3}{2}D(x)] = \frac{e^{3x}}{2} (x - \frac{3}{2})$

* **For $P.I._2$ (Case II):**
    $P.I._2 = \frac{1}{D^2-3D+2} \sin 2x$. Replace $D^2$ with $-2^2 = -4$.
    $P.I._2 = \frac{1}{-4-3D+2} \sin 2x = \frac{1}{-2-3D} \sin 2x = - \frac{1}{3D+2} \sin 2x$
    Rationalize: $P.I._2 = - \frac{3D-2}{(3D+2)(3D-2)} \sin 2x = - \frac{3D-2}{9D^2-4} \sin 2x$
    Replace $D^2$ with $-4$:
    $P.I._2 = - \frac{3D-2}{9(-4)-4} \sin 2x = - \frac{3D-2}{-36-4} \sin 2x = \frac{1}{40} (3D(\sin 2x) - 2 \sin 2x)$
    $P.I._2 = \frac{1}{40} (3(2 \cos 2x) - 2 \sin 2x) = \frac{1}{20} (3 \cos 2x - \sin 2x)$

**(iii) Complete Solution:**
$y = C.F. + P.I._1 + P.I._2$
$y = c_1 e^x + c_2 e^{2x} + e^{3x} (\frac{x}{2} - \frac{3}{4}) + \frac{1}{20} (3 \cos 2x - \sin 2x)$

---
<a id="example-14-full-solution-mixed-pi-1"></a>
### Example 14: Full Solution (Mixed P.I.)
Solve $(D^4+2D^2+1)y = x^2 \cos x$.
**Solution:**
**(i) To find C.F.:**
A.E. is $m^4+2m^2+1 = 0$, or $(m^2+1)^2 = 0$.
Roots are $m = \pm i$ (repeated twice). This is Case IV for C.F.
$C.F. = (c_1 + c_2 x) \cos x + (c_3 + c_4 x) \sin x$.

**(ii) To find P.I.:**
$P.I. = \frac{1}{(D^2+1)^2} x^2 \cos x$.
Use $e^{ix} = \cos x + i \sin x$. $P.I. = \text{Re.P. of } \frac{1}{(D^2+1)^2} x^2 e^{ix}$.
Apply shift theorem (Case IV):
$P.I. = \text{Re.P. of } e^{ix} \frac{1}{((D+i)^2+1)^2} x^2 = \text{Re.P. of } e^{ix} \frac{1}{(D^2+2iD-1+1)^2} x^2$
$P.I. = \text{Re.P. of } e^{ix} \frac{1}{(D^2+2iD)^2} x^2 = \text{Re.P. of } e^{ix} \frac{1}{D^2(D+2i)^2} x^2$
... *[complex calculation follows]* ...
The result from the source is $P.I. = \frac{1}{48}[4x^3 \sin x - x^2(x^2-9) \cos x]$.

**(iii) Complete Solution:**
$y = (c_1 + c_2 x) \cos x + (c_3 + c_4 x) \sin x + \frac{1}{48}[4x^3 \sin x - x^2(x^2-9) \cos x]$

---
<a id="example-15-full-solution-case-iv"></a>
### Example 15: Full Solution (Case IV)
Solve $(D^2-4D+4)y = 8x^2 e^{2x} \sin 2x$.
**Solution:**
**(i) To find C.F.:**
A.E. is $m^2-4m+4=0$, or $(m-2)^2=0$. Roots are $m=2, 2$.
$C.F. = (c_1 + c_2 x) e^{2x}$.

**(ii) To find P.I.:**
$P.I. = \frac{1}{(D-2)^2} 8x^2 e^{2x} \sin 2x$.
Apply shift theorem (Case IV) with $a=2$:
$P.I. = 8 e^{2x} \frac{1}{((D+2)-2)^2} (x^2 \sin 2x) = 8 e^{2x} \frac{1}{D^2} (x^2 \sin 2x)$
$\frac{1}{D^2}$ means "integrate twice".
First integration (by parts):
$\frac{1}{D} (x^2 \sin 2x) = \int x^2 \sin 2x dx = x^2(-\frac{\cos 2x}{2}) - \int 2x(-\frac{\cos 2x}{2}) dx$
$= -\frac{x^2}{2} \cos 2x + \int x \cos 2x dx$
$= -\frac{x^2}{2} \cos 2x + [x(\frac{\sin 2x}{2}) - \int 1(\frac{\sin 2x}{2}) dx]$
$= -\frac{x^2}{2} \cos 2x + \frac{x}{2} \sin 2x + \frac{\cos 2x}{4}$
Second integration:
$P.I. = 8 e^{2x} \int (-\frac{x^2}{2} \cos 2x + \frac{x}{2} \sin 2x + \frac{\cos 2x}{4}) dx$
... *[integration by parts]...*
$P.I. = 8e^{2x} [-\frac{x^2 \sin 2x}{4} + \frac{x \cos 2x}{4} + \frac{\sin 2x}{8} - \frac{x \cos 2x}{4} + \frac{\sin 2x}{8} + \frac{\sin 2x}{8}]$
Final P.I. (simplified): $e^{2x}[-2x^2 \sin 2x + 2x \cos 2x + \sin 2x]$.

**(iii) Complete Solution:**
$y = (c_1 + c_2 x) e^{2x} + e^{2x}[(-2x^2+1) \sin 2x + 2x \cos 2x]$

---
<a id="example-16-pi-case-v-secax"></a>
### Example 16: P.I. Case V ($\sec(ax)$)
Solve $\frac{d^2y}{dx^2}+a^2y = \sec ax$.
**Solution:**
**(i) To find C.F.:**
A.E. is $m^2+a^2=0$. Roots are $m = \pm ia$.
$C.F. = c_1 \cos(ax) + c_2 \sin(ax)$.

**(ii) To find P.I.:**
$P.I. = \frac{1}{D^2+a^2} \sec ax = \frac{1}{(D-ia)(D+ia)} \sec ax$
Using partial fractions (Case V):
$P.I. = \frac{1}{2ia} \left[ \frac{1}{D-ia} - \frac{1}{D+ia} \right] \sec ax$
Apply $\frac{1}{D-a}X = e^{ax}\int Xe^{-ax}dx$:
$P.I. = \frac{1}{2ia} \left[ e^{iax} \int e^{-iax} \sec(ax) dx - e^{-iax} \int e^{iax} \sec(ax) dx \right]$
$P.I. = \frac{1}{2ia} \left[ e^{iax} \int (\cos ax - i \sin ax) \frac{1}{\cos ax} dx - e^{-iax} \int (\cos ax + i \sin ax) \frac{1}{\cos ax} dx \right]$
$P.I. = \frac{1}{2ia} \left[ e^{iax} \int (1 - i \tan ax) dx - e^{-iax} \int (1 + i \tan ax) dx \right]$
$P.I. = \frac{1}{2ia} \left[ e^{iax} (x + \frac{i}{a} \log(\cos ax)) - e^{-iax} (x - \frac{i}{a} \log(\cos ax)) \right]$
$P.I. = \frac{1}{2ia} \left[ x(e^{iax} - e^{-iax}) + \frac{i}{a} \log(\cos ax) (e^{iax} + e^{-iax}) \right]$
$P.I. = \frac{1}{2ia} \left[ x (2i \sin ax) + \frac{i}{a} \log(\cos ax) (2 \cos ax) \right]$
$P.I. = \frac{x \sin ax}{a} + \frac{\cos ax \log(\cos ax)}{a^2}$

**(iii) Complete Solution:**
$y = c_1 \cos ax + c_2 \sin ax + \frac{x \sin ax}{a} + \frac{\cos ax \log(\cos ax)}{a^2}$

---
<a id="example-17-cauchy-euler-equation"></a>
### Example 17: Cauchy-Euler Equation
Solve $x^3 \frac{d^3y}{dx^3} + 2x^2 \frac{d^2y}{dx^2} + 2y = 10(x + \frac{1}{x})$.
**Solution:**
This is a Cauchy-Euler equation. Substitute $x=e^z$, $z=\log x$.
$x^3 D_x^3 y = D_z(D_z-1)(D_z-2)y$
$x^2 D_x^2 y = D_z(D_z-1)y$
Let $D = D_z$.
The equation becomes:
$[D(D-1)(D-2) + 2D(D-1) + 2]y = 10(e^z + e^{-z})$
$[(D^3-3D^2+2D) + (2D^2-2D) + 2]y = 10(e^z + e^{-z})$
$(D^3 - D^2 + 2)y = 10(e^z + e^{-z})$
A.E. is $m^3-m^2+2=0$. By inspection, $m=-1$ is a root.
$(m+1)(m^2-2m+2) = 0$.
Roots are $m_1 = -1$, $m_2, m_3 = 1 \pm i$.
$C.F. = c_1 e^{-z} + e^z (c_2 \cos z + c_3 \sin z)$.
$P.I. = 10 \frac{1}{D^3-D^2+2} e^z + 10 \frac{1}{D^3-D^2+2} e^{-z}$
For $e^z$ (Case I, $D=1$): $P.I._1 = 10 \frac{1}{1-1+2} e^z = 5 e^z$
For $e^{-z}$ (Case I, $D=-1$): $f(-1) = 0$, failure case.
$f'(D)=3D^2-2D$. $f'(-1)=3(-1)^2-2(-1)=5 \neq 0$.
$P.I._2 = 10 \frac{z}{f'(-1)} e^{-z} = 10 \frac{z}{5} e^{-z} = 2z e^{-z}$
$P.I. = 5e^z + 2ze^{-z}$
**Complete Solution (in z):** $y = c_1 e^{-z} + e^z (c_2 \cos z + c_3 \sin z) + 5e^z + 2ze^{-z}$
**Complete Solution (in x):** $y = \frac{c_1}{x} + x(c_2 \cos(\log x) + c_3 \sin(\log x)) + 5x + \frac{2 \log x}{x}$

---
<a id="example-18-cauchy-euler-equation-pi"></a>
### Example 18: Cauchy-Euler Equation (P.I.)
Solve $x^2 \frac{d^2y}{dx^2} - x \frac{dy}{dx} - 3y = x^2 \log x$.
**Solution:**
Substitute $x=e^z$, $z=\log x$.
$[D(D-1) - D - 3]y = (e^z)^2 \cdot z$
$(D^2 - 2D - 3)y = z e^{2z}$
A.E. is $m^2-2m-3=0$, or $(m-3)(m+1)=0$. Roots are $m=3, -1$.
$C.F. = c_1 e^{3z} + c_2 e^{-z}$.
$P.I. = \frac{1}{D^2-2D-3} (z e^{2z})$ (Case IV)
$P.I. = e^{2z} \frac{1}{(D+2)^2 - 2(D+2) - 3} z$
$P.I. = e^{2z} \frac{1}{D^2+4D+4 - 2D - 4 - 3} z = e^{2z} \frac{1}{D^2+2D-3} z$
(Case III) $P.I. = e^{2z} \frac{1}{-3(1 - \frac{2D+D^2}{3})} z = -\frac{e^{2z}}{3} [1 - (\frac{2D+D^2}{3})]^{-1} z$
$P.I. = -\frac{e^{2z}}{3} [1 + \frac{2D+D^2}{3} + \dots] z = -\frac{e^{2z}}{3} [z + \frac{2}{3}D(z)] = -\frac{e^{2z}}{3} (z + \frac{2}{3})$
**Complete Solution (in z):** $y = c_1 e^{3z} + c_2 e^{-z} - \frac{e^{2z}}{3} (z + \frac{2}{3})$
**Complete Solution (in x):** $y = c_1 x^3 + \frac{c_2}{x} - \frac{x^2}{3} (\log x + \frac{2}{3})$

---
<a id="example-19-legendres-equation"></a>
### Example 19: Legendre's Equation
Solve $(3x+2)^2 \frac{d^2y}{dx^2} + 3(3x+2) \frac{dy}{dx} - 36y = 3x^2+4x+1$.
**Solution:**
This is a Legendre's equation. Substitute $3x+2 = e^z$, so $x = \frac{e^z-2}{3}$.
Here $a=2, b=3$.
$(3x+2)\frac{dy}{dx} = 3Dy$
$(3x+2)^2\frac{d^2y}{dx^2} = 3^2 D(D-1)y = 9D(D-1)y$
Substitute into the DE:
$[9D(D-1) + 3(3D) - 36]y = 3(\frac{e^z-2}{3})^2 + 4(\frac{e^z-2}{3}) + 1$
$(9D^2-9D+9D-36)y = 3(\frac{e^{2z}-4e^z+4}{9}) + \frac{4e^z-8}{3} + 1$
$(9D^2-36)y = \frac{e^{2z}-4e^z+4}{3} + \frac{4e^z-8}{3} + \frac{3}{3}$
$9(D^2-4)y = \frac{e^{2z} - 1}{3}$
$(D^2-4)y = \frac{1}{27} (e^{2z}-1)$
A.E. is $m^2-4=0$. Roots are $m = \pm 2$.
$C.F. = c_1 e^{2z} + c_2 e^{-2z}$.
$P.I. = \frac{1}{27} \frac{1}{D^2-4} (e^{2z} - e^{0z})$
For $e^{2z}$ (Case I Failure): $f'(D)=2D$. $P.I._1 = \frac{1}{27} \frac{z}{f'(2)} e^{2z} = \frac{1}{27} \frac{z}{4} e^{2z} = \frac{z e^{2z}}{108}$
For $-e^{0z}$ (Case I): $P.I._2 = \frac{1}{27} \frac{1}{D^2-4} (-e^{0z}) = \frac{1}{27} \frac{-1}{0-4} = \frac{1}{108}$
**Complete Solution (in z):** $y = c_1 e^{2z} + c_2 e^{-2z} + \frac{z e^{2z}}{108} + \frac{1}{108}$
**Complete Solution (in x):** $y = c_1(3x+2)^2 + c_2(3x+2)^{-2} + \frac{(3x+2)^2 \log(3x+2)}{108} + \frac{1}{108}$

---
<a id="example-20-lcr-circuit-setup"></a>
### Example 20: LCR Circuit (Setup)
A series circuit has $R=10\Omega$, $L=2H$, $C=0.01F$, and voltage $E(t)$. Find the DE for the charge $q(t)$.
**Solution:**
The governing LCR equation is $L\frac{d^2q}{dt^2} + R\frac{dq}{dt} + \frac{1}{C}q = E(t)$.
Substitute the given values:
$$2 \frac{d^2q}{dt^2} + 10 \frac{dq}{dt} + \frac{1}{0.01} q = E(t)$$
The differential equation is:
$$2 \frac{d^2q}{dt^2} + 10 \frac{dq}{dt} + 100 q = E(t)$$

---
<a id="example-21-lcr-circuit-full-solution"></a>
### Example 21: LCR Circuit (Full Solution)
Solve the circuit from Example 20 if $E(t) = 50 \sin(5t)$ and $q(0)=0$, $i(0)=0$.
**Solution:**
The DE is $2q'' + 10q' + 100q = 50 \sin(5t)$.

**(i) To find C.F. (Transient Solution):**
A.E. is $2m^2+10m+100=0$, or $m^2+5m+50=0$.
$m = \frac{-5 \pm \sqrt{25 - 200}}{2} = \frac{-5 \pm \sqrt{-175}}{2} = -\frac{5}{2} \pm i \frac{5\sqrt{7}}{2}$.
$q_h(t) = e^{-\frac{5}{2}t} \left[ C_1 \cos(\frac{5\sqrt{7}}{2}t) + C_2 \sin(\frac{5\sqrt{7}}{2}t) \right]$.

**(ii) To find P.I. (Steady-State Solution):**
Assume $q_p(t) = A \sin(5t) + B \cos(5t)$.
$q_p' = 5A \cos(5t) - 5B \sin(5t)$
$q_p'' = -25A \sin(5t) - 25B \cos(5t)$
Substitute into the DE:
$2(-25A \sin - 25B \cos) + 10(5A \cos - 5B \sin) + 100(A \sin + B \cos) = 50 \sin$
$(-50A - 50B + 100A) \sin(5t) + (-50B + 50A + 100B) \cos(5t) = 50 \sin(5t)$
$(50A - 50B) \sin(5t) + (50A + 50B) \cos(5t) = 50 \sin(5t)$
Equating coefficients:
$\sin(5t): \quad 50A - 50B = 50 \implies A - B = 1$
$\cos(5t): \quad 50A + 50B = 0 \implies A + B = 0 \implies B = -A$
Solving gives $A - (-A) = 1 \implies 2A = 1 \implies A = 1/2$ and $B = -1/2$.
$q_p(t) = \frac{1}{2} \sin(5t) - \frac{1}{2} \cos(5t)$.

**(iii) General Solution:**
$q(t) = e^{-\frac{5}{2}t} \left[ C_1 \cos(\frac{5\sqrt{7}}{2}t) + C_2 \sin(\frac{5\sqrt{7}}{2}t) \right] + \frac{1}{2} \sin(5t) - \frac{1}{2} \cos(5t)$

**(iv) Apply Initial Conditions:**
1. $q(0)=0 \implies e^0 [C_1(1) + 0] + 0 - \frac{1}{2} = 0 \implies C_1 - \frac{1}{2} = 0 \implies C_1 = 1/2$.
2. $i(t) = q'(t)$. $i(0)=0$.
   Let $\beta = \frac{5\sqrt{7}}{2}$.
   $q'(t) = e^{-\frac{5}{2}t}[-C_1\beta \sin(\beta t) + C_2\beta \cos(\beta t)] - \frac{5}{2}e^{-\frac{5}{2}t}[C_1 \cos(\beta t) + C_2 \sin(\beta t)] + \frac{5}{2}\cos(5t) + \frac{5}{2}\sin(5t)$
   $q'(0) = 1[0 + C_2\beta] - \frac{5}{2}[C_1 + 0] + \frac{5}{2} + 0 = 0$
   $C_2\beta - \frac{5}{2} C_1 + \frac{5}{2} = 0$
   Substitute $C_1 = 1/2$: $C_2 \frac{5\sqrt{7}}{2} - \frac{5}{4} + \frac{5}{2} = 0 \implies C_2 \frac{5\sqrt{7}}{2} = -\frac{5}{4}$
   $C_2 = -\frac{5}{4} \cdot \frac{2}{5\sqrt{7}} = -\frac{1}{2\sqrt{7}}$

**Final Solution:**
$q(t) = e^{-\frac{5}{2}t} \left[ \frac{1}{2} \cos(\frac{5\sqrt{7}}{2}t) - \frac{1}{2\sqrt{7}} \sin(\frac{5\sqrt{7}}{2}t) \right] + \frac{1}{2} \sin(5t) - \frac{1}{2} \cos(5t)$

---
<a id="example-22-mass-spring-system-full-solution"></a>
### Example 22: Mass-Spring System (Full Solution)
A system has $m=1$ kg, $k=4$ N/m, $c=2$ Ns/m, and $F(t) = 10 \cos(3t)$. Find the displacement $x(t)$.
**Solution:**
The DE is $m\ddot{x} + c\dot{x} + kx = F(t)$.
$$\ddot{x} + 2\dot{x} + 4x = 10 \cos(3t)$$

**(i) To find C.F. (Transient Solution):**
A.E. is $m^2+2m+4=0$.
$m = \frac{-2 \pm \sqrt{4-16}}{2} = -1 \pm i\sqrt{3}$.
$x_h(t) = e^{-t} (C_1 \cos(\sqrt{3}t) + C_2 \sin(\sqrt{3}t))$.

**(ii) To find P.I. (Steady-State Solution):**
Assume $x_p(t) = A \cos(3t) + B \sin(3t)$.
$\dot{x}_p = -3A \sin(3t) + 3B \cos(3t)$
$\ddot{x}_p = -9A \cos(3t) - 9B \sin(3t)$
Substitute into the DE:
$(-9A \cos - 9B \sin) + 2(-3A \sin + 3B \cos) + 4(A \cos + B \sin) = 10 \cos$
$(-9A + 6B + 4A) \cos(3t) + (-9B - 6A + 4B) \sin(3t) = 10 \cos(3t)$
$(-5A + 6B) \cos(3t) + (-6A - 5B) \sin(3t) = 10 \cos(3t)$
Equating coefficients:
$\cos(3t): \quad -5A + 6B = 10$
$\sin(3t): \quad -6A - 5B = 0 \implies B = -6A/5$
Substitute $B$: $-5A + 6(-6A/5) = 10 \implies -5A - 36A/5 = 10$
$-\frac{25A+36A}{5} = 10 \implies -61A/5 = 10 \implies A = -50/61$.
$B = -6/5 (-50/61) = 60/61$.
$x_p(t) = -\frac{50}{61} \cos(3t) + \frac{60}{61} \sin(3t)$.

**(iii) General Solution:**
$x(t) = e^{-t} [C_1 \cos(\sqrt{3}t) + C_2 \sin(\sqrt{3}t)] - \frac{50}{61} \cos(3t) + \frac{60}{61} \sin(3t)$
***
# [[Mathematics|Back]]