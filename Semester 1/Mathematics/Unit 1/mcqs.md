---
dg-publish: true
---
# [[../Mathematics|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***
# Unit 1: Partial Differentiation - MCQs

## Partial Derivatives & Continuity

### Question 1
The partial derivative with respect to y gives the slope of the tangent line along the y direction
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
> 
> *The partial derivative $\partial f/\partial y$ measures the rate of change along the y-axis while x is held constant.*
</details>

### Question 2
The partial derivative with respect to x gives the slope of the tangent line on along curve
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
> 
> *The partial derivative $\partial f/\partial x$ gives the slope along the x-direction.*
</details>

---

## Chain Rule & Total Derivatives

### Question 1
The base radius r of a right circular cone is increasing at the rate of 1.5 mm/s while the perpendicular height h is decreasing at 6.0 mm/s. The rate at which the volume V is changing when r=12 mm and h=24 mm is
*   A) 3
*   B) 6
*   C) 0
*   D) 4

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) 0**
> 
> $V = \frac{1}{3}\pi r^2 h$
> 
> $\frac{dV}{dt} = \frac{1}{3}\pi(2rh\frac{dr}{dt} + r^2\frac{dh}{dt})$
> 
> $= \frac{\pi}{3}(2(12)(24)(1.5) + (144)(-6))$
> 
> $= \frac{\pi}{3}(864 - 864) = 0$
</details>

---

## Homogeneous Functions & Euler's Theorem

### Question 1
In Euler's theorem for a homogeneous function u, the constant n indicates
*   A) the order of u
*   B) the degree of u
*   C) neither order nor degree of u
*   D) the highest degree of x or y in the function u

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) the degree of u**
> 
> *Euler's theorem: $x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = nu$, where n is the degree of homogeneity.*
</details>

---

## Maxima and Minima

### Question 1
The rectangular solid of maximum volume which can be inscribed in a sphere is a
*   A) parallelogram
*   B) rectangle
*   C) cube
*   D) square

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) cube**
> 
> *By symmetry and Lagrange multipliers, the maximum volume inscribed solid is a cube.*
</details>

### Question 2
If the perimeter of a triangle is a constant, its area is maximum when the triangle is
*   A) scalene
*   B) isosceles
*   C) equilateral
*   D) right angled

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) equilateral**
> 
> *By isoperimetric inequality/Lagrange multipliers, area is maximized when all sides are equal.*
</details>

### Question 3
The condition for the function f(x,y) to have a saddle point is (where r, s, t are second partials $f_{xx}, f_{xy}, f_{yy}$)
*   A) $rt - s^2 > 0$
*   B) $rt - s^2 < 0$
*   C) $rt - s^2 = 0$
*   D) $r + t > 0$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) $rt - s^2 < 0$**
> 
> *When the Hessian determinant $H = f_{xx}f_{yy} - (f_{xy})^2 < 0$, the point is a saddle.*
</details>

---

## Lagrange Multipliers

### Question 1
The problem of finding maxima or minima of f(x,y,z) subject to g(x,y,z)=0 is referred to as a constrained extrema problem.
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
</details>

### Question 2
Nature of the stationary points cannot be determined. Further investigation is needed. This is the disadvantage of Lagrange's method.
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
> 
> *Lagrange multipliers find critical points but don't directly classify them as max/min/saddle.*
</details>

### Question 3
The area of the greatest rectangle that can be inscribed in an ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ is
*   A) ab
*   B) 2ab
*   C) 3ab
*   D) 4ab

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) 2ab**
> 
> *Maximum rectangle has vertices at $(\pm a/\sqrt{2}, \pm b/\sqrt{2})$, giving area $= 4 \cdot \frac{a}{\sqrt{2}} \cdot \frac{b}{\sqrt{2}} = 2ab$.*
</details>

### Question 4
Lagrange's method of undetermined multipliers cannot determine the nature of the
*   A) function
*   B) stationary point
*   C) multipliers
*   D) none of these

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) stationary point**
> 
> *The method finds critical points but requires further analysis (bordered Hessian) to classify them.*
</details>
