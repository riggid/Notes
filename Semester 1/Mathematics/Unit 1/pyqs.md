---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Infinite Series & Convergence

### 1. Convergence Test
**Question:** Test the convergence of the following series:
$$\frac{1^2}{4^2} + \frac{1^2 \cdot 5^2}{4^2 \cdot 8^2} + \frac{1^2 \cdot 5^2 \cdot 9^2}{4^2 \cdot 8^2 \cdot 12^2} + \dots$$

**Solution:**
The general term $u_n$ (ignoring the first term if needed for pattern) is given by:
$$ u_n = \left[ \frac{1 \cdot 5 \cdot 9 \cdots (4n-3)}{4 \cdot 8 \cdot 12 \cdots (4n)} \right]^2 $$
Apply **Ratio Test**:
$$ \frac{u_{n+1}}{u_n} = \left[ \frac{4(n+1)-3}{4(n+1)} \right]^2 = \left( \frac{4n+1}{4n+4} \right)^2 $$
Taking the limit as $n \to \infty$:
$$ \lim_{n \to \infty} \frac{u_{n+1}}{u_n} = \lim_{n \to \infty} \left( \frac{4 + 1/n}{4 + 4/n} \right)^2 = 1 $$
The Ratio Test fails. We apply **Raabe's Test**:
Consider $\lim_{n \to \infty} n \left( \frac{u_n}{u_{n+1}} - 1 \right)$.
$$ \frac{u_n}{u_{n+1}} = \left( \frac{4n+4}{4n+1} \right)^2 = \left( 1 + \frac{3}{4n+1} \right)^2 \approx 1 + \frac{6}{4n+1} \quad (\text{Binomial approx}) $$
$$ n \left( \frac{u_n}{u_{n+1}} - 1 \right) \approx n \left( \frac{6}{4n+1} \right) = \frac{6n}{4n+1} $$
$$ \lim_{n \to \infty} \frac{6n}{4n+1} = \frac{6}{4} = \frac{3}{2} = 1.5 $$
Since the limit $1.5 > 1$, the series is **Convergent** by Raabe's Test.

---

### 2. Trigonometric Series
**Question:** Discuss the convergence of the series $\sum_{n=1}^{\infty} \frac{1}{n} \tan\left(\frac{1}{n}\right)$.

**Solution:**
Let $u_n = \frac{1}{n} \tan\left(\frac{1}{n}\right)$.
For large $n$, $\frac{1}{n}$ is small, so $\tan\left(\frac{1}{n}\right) \approx \frac{1}{n}$.
Thus, $u_n \approx \frac{1}{n} \cdot \frac{1}{n} = \frac{1}{n^2}$.
We compare with the auxiliary series $v_n = \frac{1}{n^2}$.
$$ \lim_{n \to \infty} \frac{u_n}{v_n} = \lim_{n \to \infty} \frac{\frac{1}{n} \tan(1/n)}{1/n^2} = \lim_{n \to \infty} \frac{\tan(1/n)}{1/n} = 1 $$
(Using standard limit $\lim_{\theta \to 0} \frac{\tan \theta}{\theta} = 1$).
Since the limit is finite and non-zero, both series behave alike.
The series $\sum v_n = \sum \frac{1}{n^2}$ is a p-series with $p=2 > 1$, so it is convergent.
Therefore, the given series is **Convergent**.

---

### 3. Power Series
**Question:** Test the convergence of the series $\sum \frac{n^2-1}{n^2+1} x^n$ for positive values of $x$.

**Solution:**
Let $u_n = \frac{n^2-1}{n^2+1} x^n$.
Apply D'Alembert's Ratio Test:
$$ \frac{u_{n+1}}{u_n} = \frac{(n+1)^2-1}{(n+1)^2+1} x^{n+1} \cdot \frac{n^2+1}{n^2-1} \frac{1}{x^n} $$
$$ \lim_{n \to \infty} \frac{u_{n+1}}{u_n} = 1 \cdot x = x $$
-   If $x < 1$, the series converges.
-   If $x > 1$, the series diverges.
-   **Test at x = 1**:
    $$ u_n = \frac{n^2-1}{n^2+1} = \frac{1 - 1/n^2}{1 + 1/n^2} $$
    $$ \lim_{n \to \infty} u_n = 1 \neq 0 $$
    Since the n-th term does not approach zero, the series diverges at $x=1$.

**Conclusion**: The series converges for $x < 1$ and diverges for $x \ge 1$.

---

*Last updated: December 2025*
