The $\overrightarrow{\nabla}$ operator is a partial differential mathematical operator given by
$$
\nabla = \hat{i} \frac{\partial}{\partial x} + \hat{j} \frac{\partial}{\partial y} + \hat{k} \frac{\partial}{\partial z} 
$$
### *Gradient*
The simple multiplication of $\nabla$ with a scalar  A written as $\nabla A$ 

Example: 
$$
\nabla V = \hat{i}\frac{\partial V_{x}}{\partial x} + \hat{j}\frac{\partial V_{y}}{\partial y} + \hat{k}\frac{\partial V_{z}}{\partial z} = \hat{i} E_{x} + \hat{j} E_{y} + \hat{k} E_{z}
$$
It gives the direction of the highest rate of change of the field
### *Divergence*
The dot product of the $\nabla$ operator with another vector field results in a scalar quantity
$$
\nabla \cdot \overrightarrow{A} = \hat{i} \frac{\partial A_{x}}{\partial x} + \hat{j} \frac{\partial A_{y}}{\partial y} + \hat{k} \frac{\partial A_{z}}{\partial z}
$$
It gives the rate of change of the field in the three orthogonal directions

### *Curl*
The cross product of $\nabla$ operator with a vector field 
$$
\nabla \times \overrightarrow{A} =

\begin{bmatrix}
 \hat{i} & \hat{j}  & \hat{k} \\
 \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
 A_{x} & A_{y} & A_{z} 
\end{bmatrix}
$$
It gives the curl of the field and results in a vector which is perpendicular ti both $\nabla$ and the given vector

## *Laplacian*
The curl of the curl of a vector
$$
\nabla \times \nabla \times \overrightarrow{E} = \nabla (\nabla \cdot \overrightarrow{E}) - \nabla^2 \overrightarrow{E}
$$

where 
$$
\nabla^2 = \nabla \cdot \nabla = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
$$ is the scalar Laplacian operator