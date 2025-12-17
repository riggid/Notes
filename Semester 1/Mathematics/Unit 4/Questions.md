---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]

# Unit 4 Questions: Special Functions

## Beta and Gamma Functions

### 1. Prove Legendre's Duplication Formula: $\Gamma(2p) \sqrt{\pi} = 2^{2p-1} \Gamma(p)\Gamma(p+1/2)$.

#### Detailed Proof:
1.  **Start with the Beta function definition:**
    $$\beta(m, n) = \int_0^1 x^{m-1} (1-x)^{n-1} dx = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$$
    Also recall the trigonometric form:
    $$\beta(m, n) = 2 \int_0^{\pi/2} \sin^{2m-1}\theta \cos^{2n-1}\theta d\theta$$
2.  **Set $m = n = p$:**
    $$\beta(p, p) = \frac{\Gamma(p)\Gamma(p)}{\Gamma(2p)} = \frac{[\Gamma(p)]^2}{\Gamma(2p)}$$
    Using the integral form:
    $$\beta(p, p) = 2 \int_0^{\pi/2} \sin^{2p-1}\theta \cos^{2p-1}\theta d\theta$$
    $$= 2 \int_0^{\pi/2} (\sin\theta \cos\theta)^{2p-1} d\theta$$
    $$= 2 \int_0^{\pi/2} \left(\frac{\sin 2\theta}{2}\right)^{2p-1} d\theta$$
    $$= \frac{2}{2^{2p-1}} \int_0^{\pi/2} (\sin 2\theta)^{2p-1} d\theta$$
3.  **Change variable $2\theta = \phi$ ($d\theta = d\phi/2$):**
    Limits: $0 \to \pi$.
    $$\beta(p, p) = \frac{1}{2^{2p-2}} \int_0^{\pi} (\sin \phi)^{2p-1} \frac{d\phi}{2}$$
    $$= \frac{1}{2^{2p-1}} \int_0^{\pi} (\sin \phi)^{2p-1} d\phi$$
    Using symmetry $\int_0^{\pi} f(\sin \phi) = 2 \int_0^{\pi/2} f(\sin \phi)$:
    $$\beta(p, p) = \frac{2}{2^{2p-1}} \int_0^{\pi/2} (\sin \phi)^{2p-1} d\phi$$
    This integral can be written as $\frac{1}{2} \beta(p, 1/2$? No.
    Recall $\int_0^{\pi/2} \sin^{2x-1}\theta d\theta = \frac{\sqrt{\pi}}{2} \frac{\Gamma(x)}{\Gamma(x+1/2)}$. Here $2x-1 = 2p-1 \implies x=p$.
    So integral is $\frac{\sqrt{\pi}}{2} \frac{\Gamma(p)}{\Gamma(p+1/2)}$.
    Substituting back:
    $$\beta(p, p) = \frac{1}{2^{2p-2}} \left[ \frac{\sqrt{\pi}}{2} \frac{\Gamma(p)}{\Gamma(p+1/2)} \right] = \frac{\sqrt{\pi}}{2^{2p-1}} \frac{\Gamma(p)}{\Gamma(p+1/2)}$$
4.  **Equate the two expressions for $\beta(p, p)$:**
    $$\frac{[\Gamma(p)]^2}{\Gamma(2p)} = \frac{\sqrt{\pi} \Gamma(p)}{2^{2p-1} \Gamma(p+1/2)}$$
    Cancel one $\Gamma(p)$:
    $$\frac{\Gamma(p)}{\Gamma(2p)} = \frac{\sqrt{\pi}}{2^{2p-1} \Gamma(p+1/2)}$$
    Rearrange:
    $$\Gamma(2p) \sqrt{\pi} = 2^{2p-1} \Gamma(p) \Gamma(p+1/2)$$

***

### 2. Prove $\beta(p, 1/2) = 2^{2p-1} \beta(p, p)$.

#### Detailed Answer:
1.  **Express LHS in Gamma functions:**
    $$\beta(p, 1/2) = \frac{\Gamma(p)\Gamma(1/2)}{\Gamma(p+1/2)} = \frac{\Gamma(p)\sqrt{\pi}}{\Gamma(p+1/2)}$$
2.  **Express RHS using Duplication Formula:**
    From Q1, $\Gamma(p+1/2) = \frac{\Gamma(2p)\sqrt{\pi}}{2^{2p-1}\Gamma(p)}$.
    Substitute this into the LHS denominator:
    $$\beta(p, 1/2) = \frac{\Gamma(p)\sqrt{\pi}}{\left[ \frac{\Gamma(2p)\sqrt{\pi}}{2^{2p-1}\Gamma(p)} \right]}$$
    $$= \frac{\Gamma(p)\sqrt{\pi} \cdot 2^{2p-1}\Gamma(p)}{\Gamma(2p)\sqrt{\pi}}$$
    $$= 2^{2p-1} \frac{\Gamma(p)\Gamma(p)}{\Gamma(2p)}$$
3.  **Recognize $\beta(p, p)$:**
    Since $\frac{\Gamma(p)\Gamma(p)}{\Gamma(2p)} = \beta(p, p)$,
    $$\beta(p, 1/2) = 2^{2p-1} \beta(p, p)$$

***

### 3. Evaluate $\int_0^{\infty} (x^2 + 4) e^{-2x^2} dx$.

#### Detailed Answer:
Let $I = \int_0^{\infty} x^2 e^{-2x^2} dx + 4 \int_0^{\infty} e^{-2x^2} dx$.
Using standard formula $\int_0^{\infty} x^n e^{-ax^2} dx = \frac{1}{2a^{(n+1)/2}} \Gamma\left(\frac{n+1}{2}\right)$. Here $a=2$.

1.  **First Part $I_1$ ($n=2$):**
    $$I_1 = \frac{1}{2(2)^{(3)/2}} \Gamma(3/2) = \frac{1}{4\sqrt{2}} \left(\frac{1}{2}\sqrt{\pi}\right) = \frac{\sqrt{\pi}}{8\sqrt{2}}$$
2.  **Second Part $4I_2$ ($n=0$):**
    $$I_2 = \frac{1}{2(2)^{1/2}} \Gamma(1/2) = \frac{\sqrt{\pi}}{2\sqrt{2}}$$
    $$4I_2 = \frac{4\sqrt{\pi}}{2\sqrt{2}} = \frac{2\sqrt{\pi}}{\sqrt{2}} = \sqrt{2\pi}$$
    Wait, let's normalize denominators to 8.
    $$4I_2 = 4 \cdot \frac{\sqrt{\pi}}{2\sqrt{2}} = \frac{2\sqrt{\pi}}{\sqrt{2}} = \frac{16\sqrt{\pi}}{8\sqrt{2}}$$
3.  **Sum:**
    $$I = \frac{\sqrt{\pi}}{8\sqrt{2}} + \frac{16\sqrt{\pi}}{8\sqrt{2}} = \frac{17\sqrt{\pi}}{8\sqrt{2}} = \frac{17\sqrt{2\pi}}{16}$$
    Check standard result: Is $\int e^{-2x^2} = \frac{1}{2}\sqrt{\pi/2}$? Yes. $4 \times = 2\sqrt{\pi/2} = \sqrt{2\pi}$.
    Is $\int x^2 e^{-2x^2} = \frac{1}{4\sqrt{2}}\frac{\sqrt{\pi}}{2} = \frac{\sqrt{\pi}}{8\sqrt{2}}$? Yes.
    Total = $\frac{1}{8\sqrt{2}}(\sqrt{\pi} + 16\sqrt{\pi}) = \frac{17\sqrt{\pi}}{8\sqrt{2}}$.
    Multiply num/den by $\sqrt{2}$:
    $$= \frac{17\sqrt{2\pi}}{16}$$
    (Note: The simple answer provided previously was $\frac{17\pi}{8}$? That looks like a typo in the previous summary or related to a different integral. Based on calculation, $\frac{17\sqrt{\pi}}{8\sqrt{2}}$ is correct).

***

### 4. Evaluate $\int_0^1 \frac{dx}{\sqrt{-\log x}}$.

#### Detailed Answer:
Let $-\log x = t \implies \log x = -t \implies x = e^{-t}$.
$dx = -e^{-t} dt$.
Limits: $x=0 \to t=\infty$, $x=1 \to t=0$.
$$I = \int_{\infty}^0 \frac{-e^{-t} dt}{\sqrt{t}} = \int_0^{\infty} t^{-1/2} e^{-t} dt$$
This is the definition of $\Gamma(1/2)$.
$$I = \Gamma(1/2) = \sqrt{\pi}$$

***

### 5. Evaluate $\int_0^{\infty} 3^{-4x^2} dx$.

#### Detailed Answer:
Rewrite $3^{-4x^2} = (e^{\log 3})^{-4x^2} = e^{-(4\log 3)x^2}$.
Form: $\int_0^{\infty} e^{-ax^2} dx$ where $a = 4\log 3$.
$$I = \frac{1}{2} \sqrt{\frac{\pi}{a}} = \frac{1}{2} \sqrt{\frac{\pi}{4\log 3}}$$
$$I = \frac{1}{2} \frac{\sqrt{\pi}}{2\sqrt{\log 3}} = \frac{\sqrt{\pi}}{4\sqrt{\log 3}}$$

***

### 6. Evaluate $\int_0^1 x^4 (1-x)^3 dx$.

#### Detailed Answer:
This is a Beta function $\beta(m, n)$ with $m-1=4 \implies m=5$ and $n-1=3 \implies n=4$.
$$I = \beta(5, 4) = \frac{\Gamma(5)\Gamma(4)}{\Gamma(9)}$$
$$= \frac{4! \cdot 3!}{8!} = \frac{(24)(6)}{40320} = \frac{144}{40320}$$
$$= \frac{1}{280}$$

***

### 7. Evaluate $\int_0^1 x^2 (1-x^5)^{-1/2} dx$.

#### Detailed Answer:
Put $x^5 = t \implies x = t^{1/5} \implies dx = \frac{1}{5} t^{-4/5} dt$.
Limits remain $0 \to 1$.
$$I = \int_0^1 (t^{1/5})^2 (1-t)^{-1/2} \frac{1}{5} t^{-4/5} dt$$
$$= \frac{1}{5} \int_0^1 t^{2/5} t^{-4/5} (1-t)^{-1/2} dt$$
$$= \frac{1}{5} \int_0^1 t^{-2/5} (1-t)^{-1/2} dt$$
Here $m-1 = -2/5 \implies m = 3/5$.
$n-1 = -1/2 \implies n = 1/2$.
$$I = \frac{1}{5} \beta(3/5, 1/2)$$
Or in terms of Gamma:
$$I = \frac{1}{5} \frac{\Gamma(0.6)\sqrt{\pi}}{\Gamma(1.1)}$$

***

### 8. Show that $\int_0^{\infty} xe^{-x^2} dx \times \int_0^{\infty} \frac{e^{-x^2}}{\sqrt{x}} dx = \frac{\pi}{2\sqrt{2}}$.

#### Detailed Answer:
1.  **First Integral ($I_1$):**
    $\int_0^{\infty} x e^{-x^2} dx$.
    Put $x^2 = t, 2x dx = dt$.
    $$I_1 = \int_0^{\infty} e^{-t} \frac{dt}{2} = \frac{1}{2} [-e^{-t}]_0^{\infty} = \frac{1}{2}(1) = \frac{1}{2}$$
2.  **Second Integral ($I_2$):**
    $\int_0^{\infty} x^{-1/2} e^{-x^2} dx$.
    Put $x^2 = t, x = \sqrt{t}, dx = \frac{dt}{2\sqrt{t}}$.
    $$I_2 = \int_0^{\infty} (t^{-1/4}) e^{-t} \frac{dt}{2t^{1/2}} = \frac{1}{2} \int_0^{\infty} t^{-3/4} e^{-t} dt$$
    $$= \frac{1}{2} \Gamma(1/4)$$
    Wait, standard Gamma identity is needed here.
    Alternative: Let's use the formula $\int_0^{\infty} x^n e^{-x^2} dx = \frac{1}{2}\Gamma(\frac{n+1}{2})$.
    For $I_2$, $n=-1/2$.
    $$I_2 = \frac{1}{2} \Gamma\left(\frac{-1/2+1}{2}\right) = \frac{1}{2} \Gamma(1/4)$$
3.  **Product:**
    $$I_1 \times I_2 = \frac{1}{2} \times \frac{1}{2} \Gamma(1/4) = \frac{1}{4} \Gamma(1/4)$$
    Does $\Gamma(1/4)$ relate to $\pi$?
    Using reflection formula $\Gamma(1/4)\Gamma(3/4) = \pi\sqrt{2}$. This doesn't simplify a single $\Gamma(1/4)$.
    Re-read the question target: $\frac{\pi}{2\sqrt{2}}$.
    This implies $\Gamma(1/4)$ should be related to $\pi$ or the question meant something else.
    Maybe the second integral is $\int e^{-x^4}$ which is $\frac{1}{4}\Gamma(1/4)$.
    Or maybe use Duplication on $\Gamma(1/4)$? No.
    Let's check if $I_2$ was $\int e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$.
    Then product is $\frac{1}{2} \frac{\sqrt{\pi}}{2} = \frac{\sqrt{\pi}}{4}$.
    Let's check the target derivation in source: $\frac{\pi}{2\sqrt{2}}$.
    This target equals $\frac{\sqrt{\pi}^2 \sqrt{2}}{4}$.
    Maybe one integral is $\Gamma(1/2)$ and other is $\Gamma(1/4)$?
    Given the ambiguity without source PDF, I will state the computed result.
    If the question meant $\int_0^{\infty} e^{-x^4} dx = \frac{1}{4}\Gamma(1/4)$...
    Let's solve strictly as written: Product = $\frac{1}{4}\Gamma(0.25) \approx 0.906$.
    Target $\frac{\pi}{2\sqrt{2}} \approx 1.11$.
    Assume the question might be flawed or I'm missing a specific identity.
    However, I will provide the step-by-step evaluation of the integrals as they are defined.

***

## Bessel Functions

### 9. Prove that $J_0'(x) = -J_1(x)$.

#### Detailed Answer:
1.  **Use Recurrence Relation 2:**
    $$\frac{d}{dx} [x^{-p} J_p(x)] = -x^{-p} J_{p+1}(x)$$
2.  **Set $p=0$:**
    $$\frac{d}{dx} [x^{0} J_0(x)] = -x^{0} J_{1}(x)$$
    $$\frac{d}{dx} [J_0(x)] = -J_1(x)$$
    $$J_0'(x) = -J_1(x)$$

***

### 10. Prove that $J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}} \cos x$.

#### Detailed Answer:
1.  **Series Definition:**
    $$J_p(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+p+1)} \left(\frac{x}{2}\right)^{2m+p}$$
    Set $p = -1/2$:
    $$J_{-1/2}(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+1/2)} \left(\frac{x}{2}\right)^{2m-1/2}$$
2.  **Extract terms:**
    $$= \left(\frac{x}{2}\right)^{-1/2} \sum \frac{(-1)^m}{m! \Gamma(m+1/2)} \left(\frac{x}{2}\right)^{2m}$$
    $$= \sqrt{\frac{2}{x}} \sum \frac{(-1)^m}{m! \Gamma(m+1/2)} \frac{x^{2m}}{2^{2m}}$$
3.  **Evaluate $\Gamma(m+1/2)$:**
    *   $m=0: \Gamma(1/2) = \sqrt{\pi}$
    *   $m=1: \Gamma(3/2) = \frac{1}{2}\sqrt{\pi}$
    *   $m=2: \Gamma(5/2) = \frac{3}{2}\frac{1}{2}\sqrt{\pi}$
    Denominator becomes $m! \cdot \frac{(2m-1)!!}{2^m} \sqrt{\pi}$.
4.  **Simplify Series:**
    $$J_{-1/2}(x) = \sqrt{\frac{2}{x}} \frac{1}{\sqrt{\pi}} \left[ 1 - \frac{x^2}{1! \cdot 2^2 \cdot 1/2} + \frac{x^4}{2! \cdot 2^4 \cdot 3/4} \dots \right]$$
    $$= \sqrt{\frac{2}{\pi x}} \left[ 1 - \frac{x^2}{2} + \frac{x^4}{24} \dots \right]$$
    $$= \sqrt{\frac{2}{\pi x}} \left[ 1 - \frac{x^2}{2!} + \frac{x^4}{4!} \dots \right]$$
    This is the series for $\cos x$.
    $$J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}} \cos x$$

***

### 11. Express $J_5(x)$ in terms of $J_0(x)$ and $J_1(x)$.

#### Detailed Answer:
Using recurrence relation: $J_{n+1}(x) = \frac{2n}{x} J_n(x) - J_{n-1}(x)$.

1.  **Find $J_2$:**
    $$J_2 = \frac{2(1)}{x} J_1 - J_0 = \frac{2}{x}J_1 - J_0$$
2.  **Find $J_3$:**
    $$J_3 = \frac{4}{x} J_2 - J_1 = \frac{4}{x}(\frac{2}{x}J_1 - J_0) - J_1 = (\frac{8}{x^2}-1)J_1 - \frac{4}{x}J_0$$
3.  **Find $J_4$:**
    $$J_4 = \frac{6}{x} J_3 - J_2 = \frac{6}{x}[(\frac{8}{x^2}-1)J_1 - \frac{4}{x}J_0] - (\frac{2}{x}J_1 - J_0)$$
    $$= (\frac{48}{x^3} - \frac{6}{x} - \frac{2}{x})J_1 - (\frac{24}{x^2}-1)J_0$$
    $$= (\frac{48}{x^3} - \frac{8}{x})J_1 - (\frac{24}{x^2}-1)J_0$$
4.  **Find $J_5$:**
    $$J_5 = \frac{8}{x} J_4 - J_3$$
    $$= \frac{8}{x}[(\frac{48}{x^3} - \frac{8}{x})J_1 - (\frac{24}{x^2}-1)J_0] - [(\frac{8}{x^2}-1)J_1 - \frac{4}{x}J_0]$$
    $$= (\frac{384}{x^4} - \frac{64}{x^2} - \frac{8}{x^2} + 1)J_1 - (\frac{192}{x^3} - \frac{8}{x} - \frac{4}{x})J_0$$
    $$= \left(\frac{384}{x^4} - \frac{72}{x^2} + 1\right)J_1 - \left(\frac{192}{x^3} - \frac{12}{x}\right)J_0$$

***

### 12. Express $J_{-5/2}(x)$ in terms of sine and cosine.

#### Detailed Answer:
Use relation $J_{-(n+1)/2}$ reduction or explicit simple forms.
Using $J_{-(p+1)} = \frac{2p}{x} J_{-p} - J_{-(p-1)}$? No, valid for integer.
Use general recurrence $J_{n-1} = \frac{2n}{x} J_n - J_{n+1}$ backwards?
$J_{p-1} + J_{p+1} = \frac{2p}{x}J_p$.
Let $p = -3/2$: $J_{-5/2} + J_{-1/2} = \frac{-3}{x} J_{-3/2}$.
So $J_{-5/2} = -\frac{3}{x} J_{-3/2} - J_{-1/2}$.

1.  **Know basics:**
    $J_{-1/2} = \sqrt{\frac{2}{\pi x}} \cos x$
    $J_{1/2} = \sqrt{\frac{2}{\pi x}} \sin x$
2.  **Find $J_{-3/2}$:**
    Using $p=-1/2$: $J_{-3/2} + J_{1/2} = \frac{-1}{x} J_{-1/2}$.
    $$J_{-3/2} = -\frac{1}{x} J_{-1/2} - J_{1/2}$$
    $$= -\sqrt{\frac{2}{\pi x}} (\frac{1}{x} \cos x + \sin x)$$
3.  **Find $J_{-5/2}$:**
    $$J_{-5/2} = -\frac{3}{x} [-\sqrt{\frac{2}{\pi x}} (\frac{1}{x} \cos x + \sin x)] - \sqrt{\frac{2}{\pi x}} \cos x$$
    $$= \sqrt{\frac{2}{\pi x}} \left[ \frac{3}{x^2} \cos x + \frac{3}{x} \sin x - \cos x \right]$$
    $$= \sqrt{\frac{2}{\pi x}} \left[ \frac{3}{x} \sin x + \left(\frac{3}{x^2} - 1\right) \cos x \right]$$
    $$= \sqrt{\frac{2}{\pi x}} \left[ \frac{3}{x} \sin x + \frac{3-x^2}{x^2} \cos x \right]$$
    (Note: The previous summary had sine/cosine terms swapped or different coefficients. This derivation is consistent with recurrence).

***

### 13. Evaluate $\int_0^{\pi/2} \sqrt{\tan x} \, dx$.

#### Detailed Answer:
$$I = \int_0^{\pi/2} \sin^{1/2}x \cos^{-1/2}x dx$$
Using formula: $\int_0^{\pi/2} \sin^p x \cos^q x dx = \frac{1}{2} \beta\left(\frac{p+1}{2}, \frac{q+1}{2}\right)$.
Here $p=1/2, q=-1/2$.
$$I = \frac{1}{2} \beta\left(\frac{1/2+1}{2}, \frac{-1/2+1}{2}\right)$$
$$= \frac{1}{2} \beta(3/4, 1/4)$$
Using relationship $\beta(m, n) = \Gamma(m)\Gamma(n)/\Gamma(m+n)$:
$$I = \frac{1}{2} \Gamma(3/4)\Gamma(1/4)$$
Using reflection formula $\Gamma(p)\Gamma(1-p) = \pi/\sin(p\pi)$:
With $p=1/4$: $\Gamma(1/4)\Gamma(3/4) = \frac{\pi}{\sin(\pi/4)} = \frac{\pi}{1/\sqrt{2}} = \pi\sqrt{2}$.
$$I = \frac{1}{2} (\pi\sqrt{2}) = \frac{\pi}{\sqrt{2}}$$
---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]

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
