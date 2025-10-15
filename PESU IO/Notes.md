# [[Semester 1|Back]]
***
a = 3 + $7i$
$\bar{a}$ = 3 - $7i$

b = 6 + $7i$
$\bar{b}$ = 6 - $7i$

c = -$8i$ - 11
$\bar{c}$ = $8i$ - 11

$ab$ = -31 + $63i$
a + b = 9 + $14i$
## **Qubit Basics**
#### Ket 
$\ket{\alpha}=\begin{pmatrix}\alpha_{1} \hat{a} \\ \alpha_{2} \hat{b} \\ .. \\ .. \\ \alpha_{26} \hat{z} \end{pmatrix}$

#### Ket of $u_{1}$
$$
\ket{u_{1}} = \begin{pmatrix}
2 + i \\ 3i \\ -2 -2i
\end{pmatrix}
$$
#### Ket of u
$$
\bra{u_{2}} = \begin{pmatrix}
2 - i & -3i & -2 + 2i
\end{pmatrix}  
$$
#### Inner Product
$$
\langle u_{2} | u_{1} \rangle = 5 + 9 + 8 = 22 
$$


$$
\ket{u} = \begin{pmatrix}
4 + 2i \\ 5 + 2i \\ 6i + 2
\end{pmatrix}
$$
$$
\ket{v}  = \begin{pmatrix}
7 + 6i \\ 6 + 7i \\ 6 + 9i
\end{pmatrix}
$$

Find $\langle u | v\rangle$
$$
\ket{v} = \begin{pmatrix}
7 + 6i \\ 6 + 7i \\ 6 + 9i
\end{pmatrix}
$$
$$
\bra{u} = \begin{pmatrix}
4 - 2i & 5 - 2i & 6i - 2
\end{pmatrix} 
$$
$$
\langle u | v \rangle = 40 - 10i + 44 + 23i + 66 - 8i = 150 + 15i 
$$

#### Rotation Matrix

$$
\begin{bmatrix}
x' \\ y'
\end{bmatrix}
=
\begin{bmatrix}
\cos \theta & - \sin \theta \\ \sin \theta & \cos \theta 
\end{bmatrix}
\begin{bmatrix}
x \\ y
\end{bmatrix}
$$

## Conditions for a group of vectors to be a Vector Space
- A set of vectors
- $\vec{a} + \vec{b}$ should be in the same vector space
- $c \vec{a}$ should also belong to the same vector space

## Question
if following are a vector space
- $$
v = (x,y) | x+y =1
$$
$$
\vec{a}(x_{1},y_{1}),\vec{b}(x_{2},y_{2}) \implies x_{1}+y_{1} = 1 , x_{2}+y_{2} = 1 
$$
v is a vector space then
$$
\vec{a} + \vec{b} = v(x_{1}+x_{2},y_{1}+y_{2}) \implies x_{1}+x_{2}+y_{1}+y_{2} = 2 \implies
 $$
 Not a vector space as a + b is not in the same vector space
- $$
v = (x,y,z) | 2x + 3y -2z = 0
$$
$$
\vec{a}(x_{1},y_{1},z_{1}),\vec{b}(x_{2},y_{2},z_{2}) \implies 2x_{1}+3y_{1} - 2z_{1} = 0 ,2x_{2}+3y_{2}-2z_{2}=0
$$
$$
\vec{a}+\vec{b} = \vec{V}(x_{1}+x_{2},y_{1}+y_{2},z_{1}+z_{2}) \implies 2x_{1}+2x_{2} + 3y_{1}+3y_{3} -2z_{1}-2z_{2} = 0 \implies
$$
it is a vector space

###  Liner Independence
vector space ({$\ket{v_{1}},\ket{v_{2}},\ket{v_{3}},\dots,\ket{v_{n}}$}) are linearly independent if
$$
c_{1}\ket{v_{1}} + c_{2}\ket{v_{2}} + c_{3}\ket{v_{3}}+\dots +c_{n}\ket{v_{n}}  = \ket{0}   
$$
implies $c_{1} = c_{2} = c_{3} c_{4} = \dots = c_{n} = 0$

### Qubit basis
$$
\ket{0}= \begin{pmatrix}
1 \\ 0
\end{pmatrix}
$$
$$
\ket{1} = \begin{pmatrix}
0 \\ 1
\end{pmatrix} 
$$
### Span
The set of all possible liner combinations of the vectors in the space
### Basis
A set of vectors that are:
- Linearly independent
- Span the entire vector space

### Orthogonal Vectors 
$\ket{u}$and $\ket{v}$ are orthogonal if $\langle u|v\rangle = 0$

### Orthogonormal Vectors
- orthogonal
- normalized
- Basically unit vectors that are orthogonal

### Eigenvalues
### Problem
For matrix A, find scalars $\lambda$ and non-zero vectors $\ket{v}$ such that
$$
A\ket{v} =  \lambda \ket{v}
$$
$\lambda$ = eigenvalue, $\ket{v}$ = eigenvector

### Alternative Form
$$
(A -\lambda I)\ket{v} = \ket{0}  
$$
For non-trivial solution: $\det(A-\lambda I) = 0$
### Example
$$
A = \begin{pmatrix}
0 & 1 \\ 1 & 0
\end{pmatrix}
\implies \det(A-\lambda I) = \begin{pmatrix}
-\lambda & 1 \\ 1 & -\lambda
\end{pmatrix}
= 0
$$
$$
\lambda^2 - 1 = 0 \implies \lambda = \pm 1
$$


## Bloch Sphere
$$
\ket{\psi} = \left(\cos \frac{\theta}{2}\ket{0} + e^{i\phi} \sin \frac{\theta}{2}\ket{1}\right) 
$$
where $0 < \theta \leq 2\pi$  and  $0 < \phi < 2\pi$ 



## Tensor product
$$
\otimes
$$
## CNOT Gate
$$
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\ 
0 & 0 & 0 & 1 \\ 
0 & 0 & 1 & 0 
\end{pmatrix}
$$

| Control | Target | Control' | Target' |
| ------- | ------ | -------- | ------- |
| 0       | 0      | 0        | 0       |
| 0       | 1      | 0        | 1       |
| 1       | 0      | 1        | 1       |
| 1       | 1      | 1        | 0       |

## CZ Gate
$$
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\ 
0 & 0 & 1 & 0 \\ 
0 & 0 & 0 & -1 
\end{pmatrix}
$$


##