---
sources:
  - "[[Physics]]"
---
> [!question] The Poynting vector describes the direction of energy flow in an electromagnetic wave, and its magnitude is given by  `____`.
>> [!success]- Answer
>> $s \equiv \frac{1}{\mu{0}} E \times B = c \cdot \epsilon{0} E^2$

> [!question] Derive the wave equation for the electric field from Maxwell's equations in free space and explain what the resulting equation implies about the nature of electromagnetic waves and the speed at which they propagate.
>> [!success]- Answer
>> In free space, Maxwell's equations simplify to: $\nabla \cdot \overrightarrow{E} = 0$, $\nabla \cdot \overrightarrow{B} = 0$, $\nabla \times \overrightarrow{E} = -\frac{\partial \overrightarrow{B}}{\partial t}$, and $\nabla \times \overrightarrow{B} = \mu_0\epsilon_0 \frac{\partial \overrightarrow{E}}{\partial t}$. Taking the curl of Faraday's law ($\nabla \times \overrightarrow{E} = -\frac{\partial \overrightarrow{B}}{\partial t}$) and substituting Ampere-Maxwell's law, we get:\n$\nabla \times (\nabla \times \overrightarrow{E}) = -\nabla \times \frac{\partial \overrightarrow{B}}{\partial t} = -\frac{\partial}{\partial t}(\nabla \times \overrightarrow{B}) = -\mu_0\epsilon_0 \frac{\partial^2 \overrightarrow{E}}{\partial t^2}$. Using the vector identity $\nabla \times (\nabla \times \overrightarrow{A}) = \nabla(\nabla \cdot \overrightarrow{A}) - \nabla^2 \overrightarrow{A}$, and since $\nabla \cdot \overrightarrow{E} = 0$, we obtain the wave equation: $\nabla^2 \overrightarrow{E} = \mu_0\epsilon_0 \frac{\partial^2 \overrightarrow{E}}{\partial t^2}$. This equation shows that the electric field propagates as a wave with a speed $c = \frac{1}{\sqrt{\mu_0\epsilon_0}}$. Similarly, we can derive the wave equation for the magnetic field showing electromagnetic waves are transverse waves.

> [!question] Briefly explain the concept of displacement current in the context of Maxwell's equations.
>> [!success]- Answer
>> Displacement current is an additional term in Ampere's law introduced by Maxwell. It accounts for the time-varying electric field contributing to the magnetic field, even in the absence of a physical current. This term is crucial in explaining electromagnetic wave propagation.

