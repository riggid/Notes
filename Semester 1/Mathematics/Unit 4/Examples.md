---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 4 Examples: Special Functions

### Example 1: Evaluation using Beta-Gamma Relation
Evaluate $\int_0^{\pi/2} \sin^4 x \cos^5 x \, dx$ using Beta functions.

#### Solution
1.  Recall the formula:
    $$ \int_0^{\pi/2} \sin^p \theta \cos^q \theta \, d\theta = \frac{1}{2} \beta\left( \frac{p+1}{2}, \frac{q+1}{2} \right) $$
2.  Here $p=4, q=5$.
    $$ I = \frac{1}{2} \beta\left( \frac{4+1}{2}, \frac{5+1}{2} \right) = \frac{1}{2} \beta\left( \frac{5}{2}, 3 \right) $$
3.  Use relation $\beta(m, n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$.
    $$ I = \frac{1}{2} \frac{\Gamma(5/2)\Gamma(3)}{\Gamma(5/2 + 3)} = \frac{1}{2} \frac{\Gamma(2.5)\Gamma(3)}{\Gamma(5.5)} $$
4.  Expand $\Gamma$ functions:
    *   $\Gamma(3) = 2! = 2$.
    *   $\Gamma(2.5) = 1.5 \times 0.5 \times \sqrt{\pi} = \frac{3}{2} \frac{1}{2} \sqrt{\pi} = \frac{3}{4}\sqrt{\pi}$.
    *   $\Gamma(5.5) = 4.5 \times 3.5 \times 2.5 \times 1.5 \times 0.5 \times \sqrt{\pi}$.
    $$ I = \frac{1}{2} \frac{(3/4 \sqrt{\pi}) (2)}{(9/2)(7/2)(5/2)(3/2)(1/2)\sqrt{\pi}} $$
    Cancel terms:
    $$ I = \frac{3/4}{(945/32)} = \frac{3}{4} \cdot \frac{32}{945} = \frac{8}{315} $$
**Answer:** $8/315$.

***

### Example 2: Gamma Function Integral
Evaluate $\int_0^{\infty} x^4 e^{-x} \, dx$.

#### Solution
1.  By definition, $\Gamma(n) = \int_0^{\infty} x^{n-1} e^{-x} \, dx$.
2.  Compare $x^4$ with $x^{n-1} \implies n-1 = 4 \implies n = 5$.
3.  The integral is $\Gamma(5)$.
4.  $\Gamma(5) = 4! = 24$.
**Answer:** 24.

***

### Example 3: Prove $J_{1/2}(x)$ Identity
Prove that $J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x$.

#### Solution
1.  Start with the series expansion for $J_p(x)$:
    $$ J_p(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+p+1)} \left( \frac{x}{2} \right)^{2m+p} $$
2.  Set $p = 1/2$.
    $$ J_{1/2}(x) = \left( \frac{x}{2} \right)^{1/2} \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+\frac{3}{2})} \left( \frac{x}{2} \right)^{2m} $$
3.  Analyze $\Gamma(m + 3/2)$:
    *   $m=0: \Gamma(3/2) = \frac{1}{2}\sqrt{\pi}$
    *   $m=1: \Gamma(5/2) = \frac{3}{2}\frac{1}{2}\sqrt{\pi}$
    *   In general: $\Gamma(m+3/2) = \frac{(2m+1)!}{2^{2m+1} m!} \sqrt{\pi}$ (actually simpler to plug in).
4.  Substitute back:
    $$ J_{1/2}(x) = \sqrt{\frac{x}{2}} \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \frac{(2m+1)(2m-1)\dots 1}{2^{m+1}}\sqrt{\pi}} \left( \frac{x}{2} \right)^{2m} $$
    After simplifying (as detailed in standard proofs):
    $$ J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \right) $$
5.  Recognize the series $x - \frac{x^3}{3!} + \dots$ as $\sin x$.
    $$ J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x $$
**Answer:** Proven.

***

### Example 4: Recurrence Relations
Express $J_5(x)$ in terms of $J_0(x)$ and $J_1(x)$.

#### Solution
1.  Use the recurrence relation: $J_{n+1}(x) = \frac{2n}{x} J_n(x) - J_{n-1}(x)$.
2.  **For n=1**: $J_2 = \frac{2}{x}J_1 - J_0$.
3.  **For n=2**: $J_3 = \frac{4}{x}J_2 - J_1$.
    Substitute $J_2$: $J_3 = \frac{4}{x}(\frac{2}{x}J_1 - J_0) - J_1 = (\frac{8}{x^2}-1)J_1 - \frac{4}{x}J_0$.
4.  **For n=3**: $J_4 = \frac{6}{x}J_3 - J_2$.
    Substitute $J_3, J_2$: simplify expression.
5.  **For n=4**: $J_5 = \frac{8}{x}J_4 - J_3$.
    Substitute $J_4, J_3$ and simplify to get final expression in terms of $J_1, J_0$.
    Final result involves terms like $\frac{1}{x^4}, \frac{1}{x^2}$ etc.

> See [[Questions#bessel-functions|Questions]] for result.
