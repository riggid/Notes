## Maxwell's Equations in a Medium
Uses the  [[Nabla operator]]

### *Gauss's law for electric fields*
$$
\nabla \cdot \overrightarrow{E} = \frac{\rho}{\epsilon_{o}}
$$
###  *Gauss's law for magnetic fields*
$$
\nabla \cdot \overrightarrow{B} = 0
$$
it implies the absence of magnetic monopoles.

### *Faraday's law of electromagnetic induction*
$$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial t}
$$
### *Ampere - Maxwell circuital law*
$$
\nabla \times \overrightarrow{B} = \mu_{0}\overrightarrow{J} + \mu_{o} \epsilon_{o} \frac{\partial \overrightarrow{E}}{\partial t}
$$
This equation is an extension of the Ampere’s law. The second term represents the concept of
displacement current associated with time varying electric fields which is Maxwell’s contribution
## Maxwell's Equations in free space
In the case of free space (which does not have sources of charges and currents) then the
Maxwell’s equations reduce to
$$
\nabla \cdot \overrightarrow{E} = 0
$$
$$
\nabla \cdot \overrightarrow{B}
$$
$$
\nabla \times \overrightarrow{E} = - \frac{\partial \overrightarrow{B}}{\partial  t}
$$
$$
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
### Poynting Vector
Direction of energy of EM wave
$$
s \equiv \frac{1}{\mu_{0}} E \times B = c \cdot \epsilon_{0} E^2
$$

The average energy of the wave transmitted per unit time can be found by taking integral of the poynting vector a times period which gives us in the end :
$$
\frac{1}{2} \epsilon_{0} c E^2_{xo} = \frac{1}{2} c \frac{B^2_{yo}}{\mu_{o}} = \frac{1}{2} \frac{E_{xo} B_{yo}}{\mu_{0}}
$$
