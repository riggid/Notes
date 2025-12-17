---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]
***
# Unit 4: Special Functions - MCQs

## Gamma Function

### Question 1
The value of $\Gamma(5)$ is
*   A) 24
*   B) 120
*   C) 6
*   D) None

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) 24**
> 
> *$\Gamma(n) = (n-1)!$ for positive integers. $\Gamma(5) = 4! = 24$.*
</details>

### Question 2
$\Gamma(n)$ is defined for
*   A) All $n$ except for 0 and negative integers
*   B) all $n > 0$
*   C) all $n$
*   D) all $n \geq 0$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) All $n$ except for 0 and negative integers**
</details>

---

## Beta Function

### Question 1
Which of the following statements is false?
*   A) $B(m, n) = B(n, m)$
*   B) $B(m, n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$
*   C) $B(m, n)$ can be negative
*   D) $B(m, n)$ is symmetric

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) $B(m, n)$ can be negative**
> 
> *Beta function is always positive for positive m and n.*
</details>

---

## Bessel Functions

### Question 1
$J_n(x)$ is an ________ function when n is even.
*   A) even
*   B) odd
*   C) neither even nor odd
*   D) constant

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) even**
> 
> *$J_n(-x) = (-1)^n J_n(x)$. When n is even, $(-1)^n = 1$, so $J_n(-x) = J_n(x)$.*
</details>

### Question 2
The order of the Bessel's differential equation $x^2y'' + xy' + (x^2 - 81/4)y = 0$ is
*   A) 9
*   B) 9/2
*   C) 3
*   D) 2

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) 9/2**
> 
> *Standard form: $x^2y'' + xy' + (x^2 - n^2)y = 0$. Here $n^2 = 81/4$, so $n = 9/2$.*
</details>

### Question 3
The functions $J_n(x)$ and $J_{-n}(x)$ are linearly independent if
*   A) $n$ is an integer
*   B) $n$ is not an integer
*   C) n is a real number
*   D) n is a positive integer

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) $n$ is not an integer**
> 
> *When n is an integer, $J_{-n}(x) = (-1)^n J_n(x)$, so they are linearly dependent.*
</details>

---

## Jacobi Series

### Question 1
The value of $J_0(0)$ is
*   A) 1
*   B) 0
*   C) $\cos x$
*   D) $\sin x$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) 1**
> 
> *$J_0(x) = \sum_{k=0}^{\infty} \frac{(-1)^k}{(k!)^2} (\frac{x}{2})^{2k}$. At $x=0$, only $k=0$ term survives: $J_0(0) = 1$.*
</details>

---

## Recurrence Relations

### Question 1
$J_{n-1}(x) + J_{n+1}(x)$ is equal to
*   A) $\frac{2n}{x} J_n(x)$
*   B) $2J_n'(x)$
*   C) $J_n(x)$
*   D) $\frac{n}{x} J_n(x)$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) $\frac{2n}{x} J_n(x)$**
> 
> *Standard Bessel recurrence relation.*
</details>

### Question 2
$J_{n-1}(x) - J_{n+1}(x)$ is equal to
*   A) $\frac{2n}{x} J_n(x)$
*   B) $2J_n'(x)$
*   C) $J_n(x)$
*   D) $\frac{n}{x} J_n(x)$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) $2J_n'(x)$**
> 
> *Another standard Bessel recurrence relation.*
</details>

---

## Orthogonality

### Question 1
If $\alpha_m$ and $\alpha_n$ are distinct roots of the equation $J_n(x) = 0$ then $\int_0^1 x J_n(\alpha_m x) J_n(\alpha_n x) dx$ is
*   A) $\frac{1}{2}[J_{n+1}(\alpha_m)]^2$
*   B) $\frac{1}{2}[J_n(\alpha_m)]^2$
*   C) 0
*   D) a constant

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) 0**
> 
> *Orthogonality property of Bessel functions.*
</details>
