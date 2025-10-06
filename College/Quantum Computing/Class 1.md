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

