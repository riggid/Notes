---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Special Functions: Beta, Gamma, Bessel

### 1. Beta-Gamma Relation
**Question:** Prove the relationship between Beta and Gamma functions: $\beta(m, n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$

**Solution:**
1.  Definition of Gamma function: $\Gamma(n) = \int_0^\infty e^{-x} x^{n-1} dx$.
    Substitute $x = y^2$, then $dx = 2y dy$: $\Gamma(n) = 2 \int_0^\infty e^{-y^2} y^{2n-1} dy$.
2.  Consider the product $\Gamma(m) \Gamma(n)$:
    $$ \Gamma(m) \Gamma(n) = \left( 2 \int_0^\infty e^{-x^2} x^{2m-1} dx \right) \left( 2 \int_0^\infty e^{-y^2} y^{2n-1} dy \right) $$
    $$ = 4 \int_0^\infty \int_0^\infty e^{-(x^2+y^2)} x^{2m-1} y^{2n-1} dx dy $$
3.  Convert to polar coordinates: $x = r \cos \theta, y = r \sin \theta, dx dy = r dr d\theta$.
    Limits: $r$ from $0$ to $\infty$, $\theta$ from $0$ to $\pi/2$.
    $$ = 4 \int_0^\infty e^{-r^2} (r \cos \theta)^{2m-1} (r \sin \theta)^{2n-1} r dr d\theta $$
    $$ = 4 \left[ \int_0^\infty e^{-r^2} r^{2m+2n-1} dr \right] \left[ \int_0^{\pi/2} \cos^{2m-1} \theta \sin^{2n-1} \theta d\theta \right] $$
4.  The radial part is $\frac{1}{2} \Gamma(m+n)$.
    The angular part is related to Beta function: $\beta(m, n) = 2 \int_0^{\pi/2} \sin^{2m-1} \theta \cos^{2n-1} \theta d\theta$.
    So angular integral = $\frac{1}{2} \beta(m, n)$.
5.  Combine:
    $$ \Gamma(m) \Gamma(n) = 4 \cdot \left[ \frac{1}{2} \Gamma(m+n) \right] \cdot \left[ \frac{1}{2} \beta(m, n) \right] $$
    $$ \Gamma(m) \Gamma(n) = \Gamma(m+n) \beta(m, n) $$
    $$ \implies \beta(m, n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)} $$

---

### 2. Bessel Functions: Half Order
**Question:** Prove that $J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x$.

**Solution:**
1.  Bessel function series expansion:
    $$ J_n(x) = \sum_{r=0}^\infty \frac{(-1)^r}{r! \Gamma(n+r+1)} \left( \frac{x}{2} \right)^{n+2r} $$
2.  For $n = 1/2$:
    $$ J_{1/2}(x) = \sum_{r=0}^\infty \frac{(-1)^r}{r! \Gamma(r+3/2)} \left( \frac{x}{2} \right)^{1/2+2r} $$
    $$ = \sqrt{\frac{x}{2}} \sum_{r=0}^\infty \frac{(-1)^r}{r! \Gamma(r+3/2)} \left( \frac{x}{2} \right)^{2r} $$
3.  Calculate terms:
    -   $r=0$: $\frac{1}{\Gamma(3/2)} = \frac{1}{(1/2)\sqrt{\pi}} = \frac{2}{\sqrt{\pi}}$. Term: $\frac{2}{\sqrt{\pi}}$.
    -   $r=1$: $\frac{-1}{1! \Gamma(5/2)} (x/2)^2$. $\Gamma(5/2) = \frac{3}{2} \cdot \frac{1}{2} \sqrt{\pi} = \frac{3}{4} \sqrt{\pi}$. Term: $-\frac{4}{3\sqrt{\pi}} \frac{x^2}{4} = -\frac{x^2}{3\sqrt{\pi}}$.
    Wait, $\sin x = x - x^3/3! \dots$.
    Let's expand carefully.
    $$ J_{1/2}(x) = \frac{(x/2)^{1/2}}{\Gamma(3/2)} \left[ 1 - \frac{(x/2)^2}{1 \cdot 3/2} + \frac{(x/2)^4}{1 \cdot 2 \cdot 3/2 \cdot 5/2} - \dots \right] $$
    $$ = \frac{\sqrt{x}}{\sqrt{2} \frac{1}{2}\sqrt{\pi}} \left[ 1 - \frac{x^2}{6} + \dots \right] $$
    Simplify prefactor: $\frac{2\sqrt{x}}{\sqrt{2\pi}} = \sqrt{\frac{2x}{\pi}} = \sqrt{\frac{2}{\pi x}} \cdot x$.
    The series inside brackets becomes $1 - \frac{x^2}{6} + \frac{x^4}{120} \dots = \frac{\sin x}{x}$.
    So $J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} x \frac{\sin x}{x} = \sqrt{\frac{2}{\pi x}} \sin x$.

---

### 3. Integral Evaluation
**Question:** Evaluate using Beta and Gamma functions: $\int_0^{\pi/2} \sin^6 x \cos^7 x \, dx$

**Solution:**
1.  Using the formula: $\int_0^{\pi/2} \sin^p x \cos^q x \, dx = \frac{1}{2} \beta\left(\frac{p+1}{2}, \frac{q+1}{2}\right) = \frac{\Gamma(\frac{p+1}{2}) \Gamma(\frac{q+1}{2})}{2 \Gamma(\frac{p+q+2}{2})}$.
2.  Here $p=6, q=7$.
    $$ I = \frac{\Gamma(\frac{7}{2}) \Gamma(\frac{8}{2})}{2 \Gamma(\frac{6+7+2}{2})} = \frac{\Gamma(3.5) \Gamma(4)}{2 \Gamma(7.5)} $$
3.  Values:
    -   $\Gamma(4) = 3! = 6$.
    -   $\Gamma(3.5) = \frac{5}{2} \cdot \frac{3}{2} \cdot \frac{1}{2} \sqrt{\pi} = \frac{15}{8} \sqrt{\pi}$.
    -   $\Gamma(7.5) = \frac{13}{2} \cdot \frac{11}{2} \cdot \frac{9}{2} \cdot \Gamma(3.5)$.
4.  Substitute:
    $$ I = \frac{\Gamma(3.5) \cdot 6}{2 \cdot \frac{13}{2} \frac{11}{2} \frac{9}{2} \frac{7}{2} \frac{5}{2} \frac{3}{2} \frac{1}{2} \sqrt{\pi}} $$
    Easier way:
    $$ I = \frac{6 \Gamma(3.5)}{2 \cdot (6.5)(5.5)(4.5)(3.5)(2.5)(1.5)(0.5)\sqrt{\pi}} $$
    Wait, $\Gamma(7.5) = 6.5 \cdot 5.5 \cdot 4.5 \cdot 3.5 \dots$ No, $\Gamma(n) = (n-1)\Gamma(n-1)$.
    $\Gamma(7.5) = 6.5 \cdot 5.5 \cdot 4.5 \cdot \Gamma(4.5) = \dots = \frac{13}{2} \frac{11}{2} \frac{9}{2} \frac{7}{2} \frac{5}{2} \frac{3}{2} \frac{1}{2} \sqrt{\pi}$.
    $\Gamma(3.5) = \frac{5}{2} \frac{3}{2} \frac{1}{2} \sqrt{\pi}$.
    So $\frac{\Gamma(3.5)}{\Gamma(7.5)} = \frac{1}{(13/2)(11/2)(9/2)(7/2)}$.
    $I = \frac{6}{2} \cdot \frac{1}{\frac{13 \cdot 11 \cdot 9 \cdot 7}{16}} = 3 \cdot \frac{16}{9009} = \frac{48}{9009} = \frac{16}{3003}$.
**Result:** The value is $\frac{16}{3003}$.

---

*Last updated: December 2025*
