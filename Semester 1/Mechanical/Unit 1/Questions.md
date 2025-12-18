---
dg-publish: true
---

# [[../Mechanical|Back]]
***
# Q&A: Mechanical Engineering Science

## Fundamentals of Thermodynamics

### 1. What are the definitions of system, property, state, and process?
* **System**: A fixed quantity of matter or a specific region in space that is chosen for study. Everything outside the system is called the **surroundings**.
* **Property**: A measurable characteristic of a system, such as pressure, temperature, or volume. Its value depends only on the current state of the system, not on how it got there.
* **State**: The specific condition of a system at any given moment, defined by its properties. If any property changes, the state of the system changes.
* **Process**: The path of state changes that a system undergoes when its properties are altered. Examples include isothermal (constant temperature) and isobaric (constant pressure) processes.

***

### 2. How do temperature, heat, and internal energy differ?
* **Temperature** is a property that determines the direction of heat flow. It's a measure of the average kinetic energy of the molecules in a system.
* **Heat** is the energy that is transferred between systems due to a temperature difference. It is energy in transit, not something a system possesses.
* **Internal Energy (U)** is the total energy stored within a system. It is the sum of all microscopic forms of energy (kinetic, potential, chemical) of the system's molecules. For an ideal gas, it depends only on temperature.

***

### 3. What are the Zeroth, First, and Second Laws of Thermodynamics?
* **Zeroth Law of Thermodynamics**: This law deals with thermal equilibrium. It states that if two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This is the principle that allows thermometers to work.
* **First Law of Thermodynamics**: This is the principle of energy conservation. For a process, it's stated as $\Delta U = Q - W$, meaning the change in a system's internal energy ($\Delta U$) equals the heat added to it ($Q$) minus the work it does ($W$). For a cycle, the net heat transfer equals the net work done ($Q_{net} = W_{net}$).
* **Second Law of Thermodynamics**: This law provides direction to energy transfer and sets limits on efficiency. It can be expressed in two key ways:
    * **Kelvin-Planck Statement**: It's impossible for a heat engine to operate in a cycle and produce net work by exchanging heat with only a single reservoir. (Meaning, you can't convert 100% of heat into work).
    * **Clausius Statement**: It's impossible to construct a device that operates in a cycle and produces no effect other than transferring heat from a cooler body to a hotter body. (Meaning, a refrigerator needs work input to operate).

***

### 4. What is a quasi-static process?
A quasi-static (or quasi-equilibrium) process is an idealized process that happens so infinitely slowly that the system remains in thermodynamic equilibrium at every single moment. This means properties like pressure and temperature are uniform throughout the system at all times. It is achieved by applying changes (like force or heat) very gradually to avoid any sudden shifts or turbulence.

---

## Hydraulic Machines & Fluid Energy

### 5. What is a hydraulic machine, and what is the difference between a turbine and a pump?
A **hydraulic machine** is a device that converts the energy of a fluid into mechanical energy, or vice versa.
* A **turbine** converts the energy of a fluid (kinetic and pressure energy) into mechanical work. For example, the force of water turns the blades of a turbine, which rotates a shaft.
* A **pump** does the opposite; it uses mechanical work to increase the energy (primarily pressure) of a fluid.

***

### 6. How does a hydroelectric power plant work?
In a hydroelectric plant, water stored at a high elevation (potential energy) flows down through a pipe. This flowing water strikes the blades of a **hydraulic turbine**, causing its shaft to rotate (mechanical energy). This rotating shaft is connected to a **generator**, which converts the mechanical energy into electrical energy.

---

## Internal Combustion (IC) Engines

### 7. How are IC engines classified?
IC engines can be classified based on several criteria:
* **Number of Strokes**: Four-stroke or two-stroke.
* **Thermodynamic Cycle**: Otto cycle (for petrol engine# ￼￼￼￼￼￼Back￼￼s) or Diesel cycle.
* **Ignition Method**: Spark Ignition (SI) for petrol engines, or Compression Ignition (CI) for diesel engines.
* **Fuel Used**: Petrol, diesel, gas (CNG, LPG), or bi-fuel.
* **Cylinder Arrangement**: In-line, V-type, radial, or opposed.
* **Cooling System**: Air-cooled (with fins) or water-cooled (with a radiator).

***

### 8. What are the functions of five major IC engine parts?
1.  **Cylinder**: The core part where fuel combustion takes place and the piston reciprocates to produce power.
2.  **Piston**: A cylindrical component that moves up and down inside the cylinder. It transfers the force from the expanding gas to the crankshaft.
3.  **Connecting Rod**: Connects the piston to the crankshaft, converting the piston's linear (reciprocating) motion into the crankshaft's rotational motion.
4.  **Crankshaft**: The main rotating shaft of the engine that converts the power from the pistons into rotational torque to drive the vehicle.
5.  **Valves (Inlet and Exhaust)**: Poppet valves, typically located in the cylinder head, that open and close to allow the air-fuel mixture to enter the cylinder (inlet) and the exhaust gases to exit (exhaust).

***

### 9. How does combustion differ in SI (Petrol) and CI (Diesel) engines?
| Feature | SI (Petrol) Engine | CI (Diesel) Engine |
| :--- | :--- | :--- |
| **Intake** | A mixture of air and fuel is drawn in during the suction stroke. | Only air is drawn in during the suction stroke. |
| **Compression** | The air-fuel mixture is compressed. Compression ratio is lower (6-10). | Air alone is compressed to a very high pressure. Compression ratio is higher (16-20). |
| **Ignition** | A **spark plug** ignites the compressed air-fuel mixture at the end of the compression stroke. | Fuel is injected into the hot, highly compressed air and **self-ignites** due to the high temperature. |

***

### 10. What are the four strokes of a 4-stroke CI (Diesel) engine?
1.  **Suction Stroke**: The piston moves down, and the inlet valve opens, drawing only air into the cylinder.
2.  **Compression Stroke**: Both valves close, and the piston moves up, compressing the air to a very high pressure and temperature.
3.  **Power (or Expansion) Stroke**: Fuel is injected into the hot compressed air, and it ignites instantly. The resulting combustion pushes the piston down, producing power. Both valves remain closed.
4.  **Exhaust Stroke**: The inlet valve remains closed, the exhaust valve opens, and the piston moves up, pushing the burnt gases out of the cylinder.

***

### 11. How are engine performance parameters defined?
* **Indicated Power (IP)**: The total theoretical power developed by the combustion of fuel inside the engine cylinder.
* **Brake Power (BP)**: The actual, useful power available at the engine's crankshaft after accounting for internal friction losses. It's the power that can be used to do work.
* **Mechanical Efficiency ($\eta_{mech}$)**: The ratio of brake power to indicated power. It represents how effectively the power developed in the cylinders is transmitted to the crankshaft. It is calculated as $\eta_{mech} = (BP / IP)$.

---

## Electric & Hybrid Vehicles (EVs & HEVs)

### 12. How do EVs and HEVs differ in terms of energy source and emissions?
| Feature           | Electric Vehicle (EV)                                                         | Hybrid Electric Vehicle (HEV)                                                                              |
| :---------------- | :---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Energy Source** | Runs solely on electricity stored in a rechargeable battery.                  | Uses a combination of a gasoline engine and an electric motor.                                             |
| **Emissions**     | Has **zero tailpipe emissions**, making it an environmentally cleaner option. | Produces lower emissions than a conventional car but is not zero-emission because it still burns gasoline. |

***

### 13. What are the major components of an Electric Vehicle?
1.  **Battery (Power Pack)**: Stores the electrical energy that powers the vehicle.
2.  **Electric Motor**: Converts electrical energy from the battery into mechanical energy to rotate the wheels.
3.  **Controller**: Regulates the flow of electricity from the battery to the motor, controlling the vehicle's speed and acceleration.
4.  **On-board Charger**: Converts AC electricity from an external source into DC electricity to charge the battery.

***

### 14. What are the advantages of EVs over conventional ICE vehicles?
* **Zero Emissions**: EVs produce no tailpipe emissions, reducing air pollution.
* **Lower Operating Costs**: Electricity is generally cheaper than gasoline, and EVs have fewer moving parts, leading to lower maintenance costs.
* **Quiet Operation**: Electric motors are nearly silent, which reduces noise pollution.
* **High Efficiency**: Electric motors are more efficient at converting energy into motion (85-90%) compared to ICEs (25-30%).

***

### 15. What is the role of the Battery Management System (BMS)?
The Battery Management System (BMS) is the "brain" of the battery pack. It monitors and controls all aspects of the battery's performance, including its state of charge, temperature, and health. Its key roles are to ensure safety, optimize battery performance, and maximize the battery's lifespan.

***

### 16. Why do EVs have better energy efficiency than ICE vehicles?
EVs are more efficient primarily because:
* **Efficient Energy Conversion**: Electric motors convert 85-90% of electrical energy into mechanical power to move the wheels, whereas internal combustion engines (ICEs) only convert about 25-30% of the energy stored in fuel, with the rest lost as heat and friction.
* **Regenerative Braking**: EVs can recapture energy that is normally lost as heat during braking and use it to recharge the battery.
* **No Idling Losses**: An EV's motor does not consume energy when the vehicle is stationary, unlike an ICE which continues to burn fuel while idling.

---

***
## Numerical Problems


### 1. Work Done Calculation
*Determine the work done in compressing 1 kg of air from a volume of 0.15 m³ at 1 bar to 0.05 m³, when compression is (i) isothermal, and (ii) adiabatic ($\gamma=1.4$).*

**Solution**:
(i) **Isothermal Work**: The formula is $W = P_1V_1 \ln(V_2/V_1)$.
$$ W = (1 \times 10^5 \text{ Pa}) \times (0.15 \text{ m}^3) \times \ln\left(\frac{0.05}{0.15}\right) $$
$$ W = 15000 \times (-1.0986) = -16479 \text{ J} = -16.48 \text{ kJ} $$
The work done is **-16.48 kJ** (negative sign indicates work is done *on* the system).

(ii) **Adiabatic Work**: First, find the final pressure $P_2$ using $P_1V_1^\gamma = P_2V_2^\gamma$.
$$ P_2 = P_1 \left(\frac{V_1}{V_2}\right)^\gamma = (1 \text{ bar}) \left(\frac{0.15}{0.05}\right)^{1.4} = 1 \times (3)^{1.4} = 4.655 \text{ bar} $$
Now use the formula $W = (P_1V_1 - P_2V_2) / (\gamma-1)$.
$$ W = \frac{(1 \times 10^5 \times 0.15) - (4.655 \times 10^5 \times 0.05)}{1.4 - 1} $$
$$ W = \frac{15000 - 23275}{0.4} = \frac{-8275}{0.4} = -20687.5 \text{ J} = -20.69 \text{ kJ} $$
The work done is **-20.69 kJ**.

***

### 2. Friction Loss Calculation
*A single-cylinder engine operating at 2000 rpm develops a torque of 8 N-m. The indicated power is 2.0 kW. Find the friction loss as a percentage of brake power.*

**Solution**:
First, calculate the Brake Power (BP).
$$ BP = \frac{2\pi NT}{60} = \frac{2 \pi \times 2000 \times 8}{60} = 1675.5 \text{ W} = 1.676 \text{ kW} $$
Next, find the Friction Power (FP).
$$ FP = IP - BP = 2.0 \text{ kW} - 1.676 \text{ kW} = 0.324 \text{ kW} $$
Finally, calculate the loss as a percentage of brake power.
$$ \% \text{ Loss} = \frac{FP}{BP} \times 100 = \frac{0.324}{1.676} \times 100 = 19.33\% $$
The friction loss is **19.33%** of the brake power.

***

### 3. Engine Performance Calculation
*From a test on a 4-stroke petrol engine: speed = 1000 rpm, brake torque = 70 Nm, IMEP = 10 bar, stroke = 150 mm, bore = 100 mm, fuel consumption = 2.57 kg/h, CV of petrol = 41000 kJ/kg. Calculate the indicated, brake, and mechanical efficiencies.*

**Solution**:
1.  **Indicated Power (IP)**:
    $A = (\pi/4)d^2 = (\pi/4)(0.1)^2 = 0.007854 \text{ m}^2$. For a 4-stroke, K=1/2.
    $$ IP = \frac{P_m L A N K}{60} = \frac{(10 \times 10^5) \times 0.15 \times 0.007854 \times 1000 \times (1/2)}{60} = 9.817 \text{ kW} $$
2.  **Brake Power (BP)**:
    $$ BP = \frac{2\pi NT}{60} = \frac{2 \pi \times 1000 \times 70}{60} = 7.33 \text{ kW} $$
3.  **Fuel Power (FP)**:
    Mass flow rate $m_f = 2.57 \text{ kg/h} / 3600 \text{ s/h} = 0.000714 \text{ kg/s}$.
    $$ \text{Fuel Power} = m_f \times CV = 0.000714 \times 41000 = 29.27 \text{ kW} $$
4.  **Efficiencies**:
    * **Indicated Thermal Efficiency**: $\eta_{ith} = \frac{IP}{\text{Fuel Power}} = \frac{9.817}{29.27} \times 100 = 33.54\%$
    * **Brake Thermal Efficiency**: $\eta_{bth} = \frac{BP}{\text{Fuel Power}} = \frac{7.33}{29.27} \times 100 = 25.04\%$
    * **Mechanical Efficiency**: $\eta_{mech} = \frac{BP}{IP} = \frac{7.33}{9.817} \times 100 = 74.67\%$

***

### 4. Engine Design Calculation
*A 4-cylinder, 4-stroke petrol engine develops 30 kW at 2500 rpm. The mean effective pressure is 8 bar and mechanical efficiency is 80%. Calculate the diameter and stroke of each cylinder, assuming L=1.5d.*

**Solution**:
1.  **Find Indicated Power (IP)**:
    $$ IP = \frac{BP}{\eta_{mech}} = \frac{30 \text{ kW}}{0.80} = 37.5 \text{ kW} $$
2.  **Use the IP Formula**:
    For a 4-cylinder, 4-stroke engine, n=4 and K=1/2.
    $$ IP = \frac{n \cdot P_m \cdot L \cdot A \cdot N \cdot K}{60} $$
    $$ 37500 = \frac{4 \times (8 \times 10^5) \times L \times A \times 2500 \times (1/2)}{60} $$
    $$ 37500 = 66666.67 \times L \times A $$
    $$ L \times A = 0.0005625 $$
3.  **Substitute L=1.5d and A=($\pi/4$)d²**:
    $$ (1.5d) \times (\frac{\pi}{4}d^2) = 0.0005625 $$
    $$ 1.1781 d^3 = 0.0005625 $$
    $$ d^3 = 0.0004774 \implies d = 0.0781 \text{ m} = 78.1 \text{ mm} $$
4.  **Find Stroke (L)**:
    $$ L = 1.5 \times d = 1.5 \times 78.1 = 117.15 \text{ mm} $$
The bore is **78.1 mm** and the stroke is **117.15 mm**.

### 5. Isothermal Work
A mass of 1.5 kg of air is compressed in a quasi-static process where $PV=constant$ from 0.1 MPa to 0.7 MPa. The initial density of the air is $1.16~kg/m^3$. Determine the work done.

#### Solution
- **Given Data**:
  - Mass, $m = 1.5$ kg
  - Initial pressure, $p_1 = 0.1$ MPa
  - Final pressure, $p_2 = 0.7$ MPa
  - Initial density, $\rho_1 = 1.16~kg/m^3$
  - Process: Isothermal ($PV=C$)

- **Calculations**:
  1.  The formula for work done during an isothermal process is:
      $$W = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)$$
  2.  For an isothermal process, $P_1V_1 = P_2V_2$, which means $\frac{V_2}{V_1} = \frac{P_1}{P_2}$.
  3.  The initial volume $V_1$ can be found from the density:
      $$V_1 = \frac{m}{\rho_1} = \frac{1.5~\text{kg}}{1.16~\text{kg/m}^3} \approx 1.293~m^3$$
  4.  Substitute the values into the work equation:
      $$W = P_1V_1 \ln\left(\frac{P_1}{P_2}\right) = (0.1 \times 10^6~\text{Pa})(1.293~m^3) \ln\left(\frac{0.1}{0.7}\right)$$
      $$W \approx (129300) \times (-1.946) \approx -251617.8~\text{J}$$
  5.  The work done is **-251.6 kJ**. The negative sign indicates that work is done *on* the system (compression).

---

### 6. Polytropic Work
A mass of gas is compressed in a quasi-static process from 80 kPa, $0.1~m^3$ to 0.4 MPa, $0.03~m^3$. Assuming the process follows $PV^n = constant$, determine the work done.

#### Solution
- **Given Data**:
  - $p_1 = 80$ kPa, $V_1 = 0.1~m^3$
  - $p_2 = 0.4$ MPa = 400 kPa, $V_2 = 0.03~m^3$
  - Process: Polytropic ($PV^n=C$)

- **Calculations**:
  1.  **Find the polytropic index (n)**:
      $$p_1V_1^n = p_2V_2^n \implies \left(\frac{p_1}{p_2}\right) = \left(\frac{V_2}{V_1}\right)^n$$
      Taking the logarithm of both sides:
      $$\ln\left(\frac{p_1}{p_2}\right) = n \cdot \ln\left(\frac{V_2}{V_1}\right)$$
      $$n = \frac{\ln(80/400)}{\ln(0.03/0.1)} = \frac{\ln(0.2)}{\ln(0.3)} \approx \frac{-1.6094}{-1.2040} \approx 1.337$$
  2.  **Calculate the work done**:
      The formula for work in a polytropic process is:
      $$W_{1-2} = \frac{p_1V_1 - p_2V_2}{n-1}$$
      $$W_{1-2} = \frac{(80~\text{kPa} \times 0.1~m^3) - (400~\text{kPa} \times 0.03~m^3)}{1.337 - 1}$$
      $$W_{1-2} = \frac{8 - 12}{0.337} = \frac{-4}{0.337} \approx -11.87~\text{kJ}$$
  3.  The work done is **-11.87 kJ**. The negative sign indicates compression.

---

### 7. First Law for a Cycle
During one cycle, an engine has two work interactions (15 kJ *to* the fluid, 44 kJ *from* the fluid) and three heat interactions (75 kJ *to* the fluid, 40 kJ *from* the fluid, and one unknown). Evaluate the third heat transfer.

#### Solution
- **Conventions**:
  - Work done *to* fluid: Negative (-)
  - Work done *from* fluid: Positive (+)
  - Heat transferred *to* fluid: Positive (+)
  - Heat transferred *from* fluid: Negative (-)

- **Calculations**:
  1.  For a complete cycle, the First Law of Thermodynamics states $\sum Q = \sum W$.
  2.  Calculate the net work ($\sum W$):
      $$\sum W = (+44~\text{kJ}) + (-15~\text{kJ}) = 29~\text{kJ}$$
  3.  Calculate the net heat ($\sum Q$): Let the unknown heat transfer be $Q_3$.
      $$\sum Q = (+75~\text{kJ}) + (-40~\text{kJ}) + Q_3 = 35~\text{kJ} + Q_3$$
  4.  Equate net heat and net work:
      $$35~\text{kJ} + Q_3 = 29~\text{kJ}$$
      $$Q_3 = 29 - 35 = -6~\text{kJ}$$
  5.  The third heat transfer is **6 kJ *from* the fluid**.

---

### 8. Stirring Work
1.5 kg of a liquid with a constant specific heat of $2.5~\text{kJ/kg-K}$ is stirred in a well-insulated chamber, causing its temperature to rise by 15°C. Find the change in internal energy ($\Delta E$) and the work done (W).

#### Solution
- **Given Data**:
  - $m = 1.5$ kg
  - $C = 2.5$ kJ/kg-K
  - $\Delta T = 15$ °C = 15 K
  - Process: Well-insulated, so adiabatic ($Q=0$).

- **Calculations**:
  1.  **Change in Internal Energy ($\Delta E$)**:
      The change in internal energy for the liquid is given by:
      $$\Delta E = mC\Delta T$$
      $$\Delta E = (1.5~\text{kg}) \times (2.5~\text{kJ/kg-K}) \times (15~\text{K}) = 56.25~\text{kJ}$$
  2.  **Work Done (W)**:
      Apply the First Law of Thermodynamics for a process:
      $$Q = \Delta E + W$$
      Since the chamber is well-insulated, $Q=0$.
      $$0 = \Delta E + W \implies W = -\Delta E$$
      $$W = -56.25~\text{kJ}$$
  3.  The change in internal energy is **+56.25 kJ** and the work done is **-56.25 kJ**. The negative work indicates that stirring work was done *on* the system.

---

### 9. IC Engine Performance
A single-cylinder, four-stroke engine test yields the following data:
- Brake drum diameter: 60 cm
- Rope diameter: 3 cm
- Load on brake drum (W): 25 kg
- Spring balance reading (S): 5 kg
- Engine speed: 400 rpm
- Indicated Power (IP): 3.141 kW
Calculate the Brake Power (BP) and Mechanical Efficiency ($\eta_{mech}$).

#### Solution
- **Given Data**:
  - $D_b = 0.60$ m
  - $d_r = 0.03$ m
  - $W = 25$ kg
  - $S = 5$ kg
  - $N = 400$ rpm
  - $IP = 3.141$ kW

- **Calculations**:
  1.  **Brake Power (BP)**:
      First, calculate the braking torque (T):
      $$T = (\text{Net Force}) \times (\text{Effective Radius})$$
      $$T = (W-S) \cdot g \cdot \left(\frac{D_b + d_r}{2}\right)$$
      $$T = (25-5)~\text{kg} \times 9.81~\text{m/s}^2 \times \left(\frac{0.60 + 0.03}{2}\right)~\text{m}$$
      $$T = 20 \times 9.81 \times 0.315 \approx 61.803~\text{N-m}$$
      Now, calculate the Brake Power:
      $$BP = \frac{2\pi NT}{60 \times 1000} \quad (\text{to get kW})$$
      $$BP = \frac{2 \pi \times 400 \times 61.803}{60000} \approx 2.589~\text{kW}$$
  2.  **Mechanical Efficiency ($\eta_{mech}$)**:
      $$\eta_{mech} = \frac{BP}{IP} = \frac{2.589~\text{kW}}{3.141~\text{kW}} \approx 0.8241$$
  3.  The Brake Power is **2.589 kW** and the Mechanical Efficiency is **82.41%**.