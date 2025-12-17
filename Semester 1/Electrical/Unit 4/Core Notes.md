---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]
***

# Unit 4: Electromagnetism & Electrical Machines

## 1. Electromagnetism Basics

### 1.1 Magnetic Quantities
*   **Magnetic Flux ($\phi$)**: The total magnetic lines of force produced by a magnet. Unit: **Weber (Wb)**.
*   **Magnetic Flux Density ($B$)**: Flux per unit area normal to the flux. $B = \phi / A$. Unit: **Tesla (T)** or $Wb/m^2$.
*   **Magnetizing Force ($H$)**: The force exerted by a unit pole placed at a point in the field. Also called Magnetic Field Intensity. $H = NI / l$. Unit: **Ampere-turns/meter (AT/m)**.
*   **Magneto Motive Force (MMF)**: The driving force that sets up flux. $MMF = N \times I$. Unit: **Ampere-turns (AT)**.

### 1.2 Reluctance and Permeability
*   **Reluctance ($S$)**: Opposition offered by a magnetic circuit to the magnetic flux. Analogous to Resistance in electric circuits.
    $$ S = \frac{l}{\mu_0 \mu_r A} $$
    Where $l$ is length, $A$ is area, $\mu_0$ is permeability of free space ($4\pi \times 10^{-7}$), $\mu_r$ is relative permeability.
*   **Relation between B and H**:
    $$ B = \mu H = \mu_0 \mu_r H $$

### 1.3 B-H Curve and Hysteresis
The **B-H Curve** (Magnetization Curve) plots Flux Density ($B$) vs Magnetizing Force ($H$).
*   **Saturation**: The point where increasing $H$ yields no significant increase in $B$.
*   **Hysteresis Loop**: The loop formed by the B-H curve when a magnetic material is magnetized, demagnetized, and re-magnetized in the opposite direction.

    ![[https://upload.wikimedia.org/wikipedia/commons/4/4b/Hysteresis-comparison.svg|Hysteresis Loop]]
    > Hysteresis loops for soft and hard ferromagnetic materials.

    *   **Retentivity**: The amount of magnetism remaining ($B$) when the external field $H$ is reduced to zero (Residual Magnetism).
    *   **Coercivity**: The reverse magnetizing force ($H$) required to reduce the residual magnetism ($B$) to zero.
    *   **Hysteresis Loss**: The energy lost as heat due to the reversal of magnetization, proportional to the area of the hysteresis loop.

### 1.4 Electromagnetic Induction Rules
*   **Faraday's Laws**:
    1.  Whenever flux linking a coil changes, an EMF is induced.
    2.  Magnitude of induced EMF is proportional to the rate of change of flux. $e = -N \frac{d\phi}{dt}$.
*   **Lenz's Law**: The direction of induced EMF is such that it opposes the cause producing it (hence the negative sign).
*   **Fleming's Right Hand Rule** (Generator Rule): Used to find direction of **induced EMF/Current**. Thumb = Motion, Forefinger = Field, Middle Finger = Induced Current.
*   **Fleming's Left Hand Rule** (Motor Rule): Used to find direction of **Force/Motion**. Thumb = Force, Forefinger = Field, Middle Finger = Current.

***

## 2. Transformer (Single Phase)

### 2.1 Principle and Construction
A static device transferring electrical energy between two circuits via mutual induction without changing frequency.
*   **Core Type**: Windings surround the core. Easier insulation.
*   **Shell Type**: Core surrounds the windings. Stronger mechanical support.

![[https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Transformer_winding_formats.jpg/640px-Transformer_winding_formats.jpg|Transformer Winding Formats]]
> (a) Core Type Transformer (b) Shell Type Transformer Windings

### 2.2 EMF Equation and Ratios
**Induced EMF Equation**:
$$ E = 4.44 f \phi_m N $$
*   **Derivation Logic**:
    *   Average EMF per turn = $4 f \phi_m$ (Flux changes from 0 to $\phi_m$ in time $T/4$. Rate = $\phi_m / (1/4f) = 4f\phi_m$).
    *   RMS value = Form Factor $\times$ Average Value.
    *   For a sinusoidal flux, Form Factor ($K_f$) = $1.11$.
    *   $E_{rms} = 1.11 \times 4 f \phi_m N \approx 4.44 f \phi_m N$.

Where $f$ is frequency, $\phi_m$ is max flux, $N$ is turns.
**Transformation Ratio ($K$)**:
$$ K = \frac{E_2}{E_1} = \frac{N_2}{N_1} = \frac{I_1}{I_2} $$
*   $K > 1$: Step-up.
*   $K < 1$: Step-down.

### 2.3 Losses and Efficiency
1.  **Core (Iron) Losses**:
    *   **Hysteresis Loss**: Reduced by using soft silicon steel.
    *   **Eddy Current Loss**: Reduced by using **laminated** cores.
    *   Constant irrespective of load. Found via **Open Circuit (OC) Test**.
2.  **Copper Losses**: $I^2 R$ losses in windings. Varies with load square. Found via **Short Circuit (SC) Test**.

**Efficiency ($\eta$)**:
$$ \eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{x VI \cos\phi}{x VI \cos\phi + P_i + x^2 P_{cu(FL)}} $$
**Condition for Max Efficiency**: when **Iron Loss = Copper Loss** ($P_i = P_{cu}$).

***

## 3. DC Machines

### 3.1 Construction
Same for Generator and Motor:
*   **Stator (Field System)**: Yoke, Poles, Field Winding. Produces magnetic field.
*   **Rotor (Armature)**: Armature Core (laminated), Armature Winding (Lap/Wave), Commutator.
    *   **Lap Winding**: Parallel paths $A = P$. For high current.
    *   **Wave Winding**: Parallel paths $A = 2$. For high voltage.
*   **Commutator**: Converts AC induced in armature to DC (Generator) or limits constant torque direction (Motor).

![[https://upload.wikimedia.org/wikipedia/commons/6/6e/DC-MOTOR_CONSTRUCTION.PNG|DC Machine Construction]]
> Cross-section of a DC Machine

### 3.2 DC Generator
*   **Principle**: Dynamically induced EMF.
*   **EMF Equation**:
    $$ E_g = \frac{\phi Z N P}{60 A} $$
    Where $P$ = poles, $Z$ = total conductors, $N$ = speed (rpm), $A$ = parallel paths.

### 3.3 DC Motor
*   **Principle**: Lorentz force on a current-carrying conductor in a magnetic field.
*   **Back EMF ($E_b$)**: The act of rotation induces an EMF opposing the supply voltage.
    $$ V = E_b + I_a R_a $$
*   **Torque Equation**:
    $$ T = \frac{\phi Z I_a P}{2\pi A} \approx 0.159 \phi Z I_a \frac{P}{A} $$
*   **Significance**: Torque is proportional to Flux ($\phi$) and Armature Current ($I_a$).

***

## 4. Three Phase Induction Motor

### 4.1 Principle and Construction
*   **Stator**: Carries 3-phase winding. When supplied with 3-phase AC, produces a **Rotating Magnetic Field (RMF)** of constant magnitude ($1.5 \phi_m$) rotating at **Synchronous Speed ($N_s$)**.
    $$ N_s = \frac{120 f}{P} $$
*   **Rotor**:
    *   **Squirrel Cage**: Bars shorted by end rings. Rugged, low starting torque.
    *   **Slip Ring (Wound)**: Winding connected to slip rings. Allows external resistance for high starting torque.

### 4.2 Operation and Slip
Rotor rotates in the direction of RMF to catch up, but never acts synchronous speed (otherwise induction stops).
*   **Slip ($s$)**:
    $$ s = \frac{N_s - N}{N_s} $$
*   **Rotor Frequency**: $f_r = s \times f$ (at stand still $s=1$, $f_r = f$).

***

## 5. Special Electrical Machines

### 5.1 Brushless DC Motor (BLDC)
*   **Construction**:
    *   **Stator**: 3-phase winding (star connected).
    *   **Rotor**: Permanent Magnets (e.g., NdFeB).
    *   **Sensors**: Hall Effect sensors to detect rotor position.
    *   **Controller**: ESC (Electronic Speed Controller) performs electronic commutation.
*   **Advantages over Combined DC**: Higher efficiency (no brush friction), no sparking, longer life, quieter, higher power density.
*   **Applications**: Drones, EVs, Computer fans, Medical devices.

### 5.2 Stepper Motor
*   **Introduction**: Digital electromechanical device rotating in discrete steps.
*   **Types**:
    1.  **Variable Reluctance**: No permanent magnets, simple, audible noise.
    2.  **Permanent Magnet**: PM on rotor, higher torque.
    3.  **Hybrid**: Best of both.
*   **Operation**: Stator coils are energized in a sequence (A, B, C, D) attracting rotor poles to align. Step angle depends on pole configuration.
*   **Micro-stepping**: Energizing two phases partially to achieve smaller intermediate steps.
*   **Applications**: Printers, Disk drives, Robotics, Position control.
