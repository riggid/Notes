# [Back](../Physics.md)
***
# Unit 2:Quantum Mechanics and Simple Quantum Mechanical Systems

## **Schrodinger Wave Equation**
## Time Dependent
$$
E = KE + V
$$
Multiplying by 
$$
\psi(x,t) . \hat{E} = \hat{(KE)}(\psi) + V(\psi)
$$
### **TDSE(1-D)**
$$
 i \hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar}{2m} \frac{\partial^2\psi}{\partial x^2} + V\psi
$$

## Time Independent
Write 
$$
\psi(x,t) = \psi(x)\phi(t)
$$
$$
\hat{E} = \hat{KE} + \hat{V}
$$
$$
\implies i \hbar \frac{\partial}{\partial t} \psi(x)\phi(t) = -\frac{\hbar}{2m} \frac{\partial^2\psi(x)\phi(t)}{\partial x^2} + V \psi(x)\phi(t)
$$
As
$$
E = i \hbar \frac{\partial}{\partial t}
$$
$$
E \psi(x)\phi(t) = \left(-\frac{\hbar}{2m} \frac{\partial^2\psi(x)}{\partial x^2} + V \psi(x)\right)\phi(t)
$$
$$
\implies \phi(t)\left[ E\psi(x) + \frac{\hbar}{2m} \frac{\partial^2\psi}{\partial x^2} - V\psi(x) \right] = 0
$$
Since $\phi(t) \neq 0$
### **TISE**
$$
E \psi(x) + \frac{\hbar}{2m} \frac{\partial^2\psi(x)}{\partial x} - V \psi(x) = 0
$$

## In 3-D
### **TDSE**
$$
i\hbar \frac{\partial\psi(r,t)}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2\psi(r,t)}{\partial x^2} + V \psi(\vec{r},t)
$$
### **TISE**
$$
E \psi(r) + \frac{\hbar^2}{2m} \frac{\partial^2\psi(r,t)}{\partial x^2} - V \psi(r,t) = 0
$$
## Template to Solve Problems
1. Define the physical system
2. Write SWE and apply conditions
3. Obtain general wave function
4. Verify behavior
	- finiteness, discreteness,continuity
	- normalization of wave
5. Interpret Solution

## Problem: Free Particle Solution
$$
F = -\partial \frac{V}{\partial x} = 0 \implies V = 0
$$
or some constant

When V = 0:
$$
E\psi(X) = -\frac{\hbar^2}{2m} \frac{\partial^2\psi(x)}{\psi x^2} + 0
$$
$$
\implies \frac{\hbar^2}{2m} \frac{\partial^2\psi}{\partial x^2} + E \psi(x) = 0
$$
$$
\implies  \frac{\partial\psi}{\partial x^2} + \frac{2mE}{\hbar^2}\psi = 0
$$

**propagation constant(k)**
$$
k = \frac{2mE}{\hbar^2} 
$$

### **General Solution**
$$
\psi = A e^{ikx} + Be^{-ikx}
$$
$$
E = \frac{\hbar^2k^2}{2m}
$$

## Potential Step
when there is a large jump in potential, the behavior depends on
-  Energy of the particle
-  Energy of the Step

1. E > $V_0 \implies$ 
	- passes into **region 2**
	- reduced wavelength energy
	- some reflection occurs
2. E < $v_{0} \implies$ Quantum effect not present classically
![](Drawing%202025-10-14%2017.05.35.excalidraw.md)

### $\frac{\partial^2\psi}{\partial x^2} + \frac{2m}{\hbar^2}[E - V]\psi = 0$ 

We know in **Region 1** $\implies V =0 \implies \frac{\partial^2\psi}{\partial x^2}+ \frac{2mE}{\hbar^2}\psi = 0$

Therefore **Region 1** : 
$$
\psi_{1} = A e^{ik_{1}x} + Be^{-ik_{1}x}
$$
$$
k_{1} = \sqrt{\frac{2mE}{\hbar^2} } , \lambda_{1}= \frac{h}{\sqrt{ 2mE }}
$$

### Case 1: $E > V_{0}$
$$
\frac{\partial^2\psi}{\partial x^2} + \frac{2m}{\hbar^2} (E - V_{0})\psi = 0
$$

$$
\psi_{2} = Ae^{-ik_{2}x} + Be^{-ik_{2}x}
$$
- Nature in 2: oscillatory(cyclic)
- Reduced KE,increased $\lambda$
$$
k_{2} = \sqrt{ \frac{2m(E-V_{0})}{\hbar^2} }
$$

### **Momentum**
$$
\hbar k_{2} = \sqrt{ 2m(E-V_{0}) } = p
$$
$$
\lambda_{2}= \frac{h}{\sqrt{ 2m(E-V_{0}) }} \implies
$$
more than **Region 1**

At $x = 0, \psi_{1} = \psi_{2} \implies A + B =D$
$d\psi_{1} = d\psi_{2} \implies  (A-B)k_{1} = Dk_{2}$

$$
B = A \frac{k_{1}-k_{2}}{k_{1}+k_{2}}
$$
$$
D = A \frac{2k_{1}}{k_{1}+k_{2}}
$$
### **Reflection Co eff(R)**
$$
R =  \frac{B}{A} \frac{Bv_{1}}{Av_{1}} = \frac{(k_{1}-k_{2})^2}{(k_{1}+k_{2})^2}
$$
### **Transmission Co eff(T)**
$$
T = \frac{D}{A} \frac{Dv_{2}}{Av_{1}} = \frac{4k_{1}k_{2}}{(k_{1}+k_{2})^2}
$$
$$
k_{1} = \sqrt{ \frac{2mE}{\hbar^2} }
$$
$$
k_{2} = \sqrt{ \frac{1m(E-V_{0})}{\hbar^2} }
$$
$E >V_{0}$ mostly means transmitted classically
But due to quantum nature, it may also reflect

### Case 2: $\psi_x = Ae^{ikx} + Be^{-ikx}$

$$
\frac{\partial\psi_{2}}{\partial x^2} - \frac{2m}{\hbar^2} (V_{0}-E) = 0
$$

#### Solution: $\psi_{2} = Fe^{-\alpha x} + Ge^{\alpha x}$ 
#### $\alpha = \sqrt{ \frac{2m(V_{0}-E)}{\hbar^2} }$
G = 0; This makes $\psi \to \infty$ for $x \to \infty$

Therefore $\psi_{2} = Fe^{-\alpha x}$ 
this shows that there is still a small probability it penetrates **2**,even though it classically can't

$$
\psi_{2}(\Delta x) = Fe^{-\alpha \Delta x} = F \frac{1}{e}
$$
Therefore
$$\alpha \Delta x = 1 \implies \Delta x = \frac{1}{\alpha} = \sqrt{ \frac{\hbar^2}{2m(V_{0}-E)} }$$
if E increases, delta x decreases, The partial can't physically exist in *2*

#### **Observations**:
1. Reflection possible at $E > V_{0}$
2. Transmission possible at $E < V_{0}$ (quantum tunneling)

## Potential Barrier
![](Drawing%202025-10-14%2018.07.01.excalidraw.md)

### **Region 1:** $V = 0$  $\frac{\partial^2\psi_{1}}{\partial x^2}+ \frac{2mE}{\hbar^2} \psi_{1} =0$
1.  $\psi_{1} = Ae^{ik_{1}x} + Be^{-ik_{1}x}$ **incident wave + reflected wave**
2. $k_{1} = \sqrt{ \frac{2mE}{\hbar^2} }$
3. $\lambda_{1}= \frac{h}{\sqrt{ 2mE }}$

### **Region 2:** $0 < x <d \ \& \ V(x) = V_{0}$
$$
\frac{\partial^2\psi_{2}}{\partial x^2} - \frac{2m(v_{0}-E)}{\hbar^2} \psi_{2} = 0
$$
$$
\psi_{2} = C e^{\alpha x} + De^{-\alpha x} \\ ; \\ \alpha = \sqrt{ \frac{2m(V_{0}-E)}{\hbar^2} }
$$
$$
\Delta x = \frac{1}{\alpha} = \sqrt{ \frac{\hbar^2}{2m(V_{0}-E)} }
$$
If this extends to $+ \infty$ then only decaying element is applicable 
$$
\lambda_{2} = \frac{h}{\sqrt{ 2m(V_{0}-E) }}
$$
### **Region 3** $\frac{\partial^2\psi_{3}}{\partial x^2}+ \frac{2mE}{\hbar^2} \psi_{3} = 0$
##### $\psi_{3}(x) = Fe^{ik_{1}x}$
only transmitted wave exists

Terms:
1. Quantum Tunneling: Even though E < $V_0$ , the wave function in 2 is non zero
2. Penetration Depth: distance over which wave decays to 1/e factor
3. Transmission coefficent(T) $$