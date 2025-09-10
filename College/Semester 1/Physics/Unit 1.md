## Maxwell's Equations in a Medium
Uses the  [[Nabla operator]]

### **Gauss's law for electric fields**
$$
\nabla \cdot \overrightarrow{E} = \frac{\rho}{\epsilon_{o}}
$$
###  **Gauss's law for magnetic fields**
$$
\nabla \cdot \overrightarrow{B} = 0
$$
it implies the absence of magnetic monopoles.

### **Faraday's law of electromagnetic induction**
$$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}
$$
### **Ampere - Maxwell circuital law**
$$
\nabla \times \overrightarrow{B} = \mu_{0}\overrightarrow{J} + \mu_{o} \epsilon_{o} \frac{\partial \overrightarrow{E}}{\partial t}
$$
This equation is an extension of the Ampere’s law. The second term represents the concept of
displacement current associated with time varying electric fields which is Maxwell’s contribution
## Maxwell's Equations in free space
In the case of free space (which does not have sources of charges and currents) then the
Maxwell’s equations reduce to
#### 1. $$
\nabla \cdot \overrightarrow{E} = 0
$$
#### 2. $$
\nabla \cdot \overrightarrow{B}
$$
#### 3. $$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial  t}
$$
#### 4. $$
\nabla \times \overrightarrow{B} = \mu_{o}\epsilon_{o} \frac{\partial \overrightarrow{E}}{\partial t}
$$

Taking the curl of the electric field the equation can be written as
$$
\nabla \times (\nabla \times \overrightarrow E) = \nabla \times \left(- \frac{\partial \overrightarrow{B}}{\partial t} \right)
$$
$$
\nabla(\nabla \cdot \overrightarrow{E}) - \nabla^2 \overrightarrow E = \left( - \frac{\partial \nabla \times \overrightarrow B}{\partial t} \right)
$$
Since $\nabla \cdot \overrightarrow E = 0$ this reduces to $-\nabla^2 \overrightarrow E = \left( -\frac{\partial \overrightarrow \nabla \times \overrightarrow B}{\partial t} \right)$ 

Substituting curl of B
$$
\nabla^2 \overrightarrow E = \left( \mu_{0} \epsilon_{0} \frac{\partial^2 E^2}{\partial t^2} \right)
$$
It is the general form of a wave equation, which implies
$$
\mu_{0} \epsilon_{0} = \frac{1}{c^2}
$$

Similarly curl of magnetic  field yields us  a transverse magnetic field vector travelling at the speed of light.
$$
\nabla^2 \overrightarrow B = \left(\frac{1}{c^2} \frac{\partial^2 \overrightarrow B}{\partial t^2} \right)
$$

## Energy of EM waves
Energy of electric field per unit volume
$$
E_n = \frac{1}{2} \epsilon_0 E^2
$$
Energy of electric component of wave
$$
\frac{1}{2} \epsilon_{0} E_{xo}^2 \cos^2{(\omega t + kz)}
$$
Energy of magnetic component of wave
$$
\frac{1}{2} \frac{B_{y}^2}{\mu_{0}} = \frac{1}{2} \frac{E_{x}^2}{c^2 \mu_{0}} = \frac{1}{2} \epsilon_{0} E_{x}^2
$$
Total energy
$$
\epsilon_{0} E_{x}^2
$$
### **Poynting Vector**
Direction of energy of EM wave
$$
s \equiv \frac{1}{\mu_{0}} E \times B = c \cdot \epsilon_{0} E^2
$$

The average energy of the wave transmitted per unit time can be found by taking integral of the poynting vector a times period which gives us in the end :
$$
\frac{1}{2} \epsilon_{0} c E^2_{xo} = \frac{1}{2} c \frac{B^2_{yo}}{\mu_{o}} = \frac{1}{2} \frac{E_{xo} B_{yo}}{\mu_{0}}
$$
## Polarization states of EM waves
- **Unpolarized Light**  
    Natural light is generally **unpolarized**. This means that the electric field oscillates randomly in all possible planes perpendicular to the direction of propagation, with equal probability.
    
- **Linearly Polarized Light**  
    Light in the form of a plane wave is said to be **linearly polarized** when the electric field oscillates in a single plane.
    
    - Example: If a horizontally polarized wave and a vertically polarized wave of the same amplitude and in the same phase are combined, the result is linearly polarized light at a **45° angle**.
    
- **Circularly Polarized Light**  
    When two plane waves of **equal amplitude** are combined with a **90° phase difference**, the resulting light is **circularly polarized**.
    
    - The tip of the electric field vector traces out a circle as the wave propagates.
    
- **Elliptically Polarized Light**  
    If the two plane waves have **different amplitudes** and are related in phase by 90°, or if the **relative phase is not 90°**, the resulting light is **elliptically polarized**.
    
    - In this case, the tip of the electric field vector traces out an ellipse.
    