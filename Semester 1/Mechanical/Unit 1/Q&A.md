# [Back](../Mechanical.md)
***
# Q&A: Mechanical Engineering Science

## Fundamentals of Thermodynamics

### What are the definitions of system, property, state, and process?
* **System**: A fixed quantity of matter or a specific region in space that is chosen for study. Everything outside the system is called the **surroundings**.
* **Property**: A measurable characteristic of a system, such as pressure, temperature, or volume. Its value depends only on the current state of the system, not on how it got there.
* **State**: The specific condition of a system at any given moment, defined by its properties. If any property changes, the state of the system changes.
* **Process**: The path of state changes that a system undergoes when its properties are altered. Examples include isothermal (constant temperature) and isobaric (constant pressure) processes.

***

### How do temperature, heat, and internal energy differ?
* **Temperature** is a property that determines the direction of heat flow. It's a measure of the average kinetic energy of the molecules in a system.
* **Heat** is the energy that is transferred between systems due to a temperature difference. It is energy in transit, not something a system possesses.
* **Internal Energy (U)** is the total energy stored within a system. It is the sum of all microscopic forms of energy (kinetic, potential, chemical) of the system's molecules. For an ideal gas, it depends only on temperature.

***

### What are the Zeroth, First, and Second Laws of Thermodynamics?
* **Zeroth Law of Thermodynamics**: This law deals with thermal equilibrium. It states that if two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This is the principle that allows thermometers to work.
* **First Law of Thermodynamics**: This is the principle of energy conservation. For a process, it's stated as $\Delta U = Q - W$, meaning the change in a system's internal energy ($\Delta U$) equals the heat added to it ($Q$) minus the work it does ($W$). For a cycle, the net heat transfer equals the net work done ($Q_{net} = W_{net}$).
* **Second Law of Thermodynamics**: This law provides direction to energy transfer and sets limits on efficiency. It can be expressed in two key ways:
    * **Kelvin-Planck Statement**: It's impossible for a heat engine to operate in a cycle and produce net work by exchanging heat with only a single reservoir. (Meaning, you can't convert 100% of heat into work).
    * **Clausius Statement**: It's impossible to construct a device that operates in a cycle and produces no effect other than transferring heat from a cooler body to a hotter body. (Meaning, a refrigerator needs work input to operate).

***

### What is a quasi-static process?
A quasi-static (or quasi-equilibrium) process is an idealized process that happens so infinitely slowly that the system remains in thermodynamic equilibrium at every single moment. This means properties like pressure and temperature are uniform throughout the system at all times. It is achieved by applying changes (like force or heat) very gradually to avoid any sudden shifts or turbulence.

---

## Hydraulic Machines & Fluid Energy

### What is a hydraulic machine, and what is the difference between a turbine and a pump?
A **hydraulic machine** is a device that converts the energy of a fluid into mechanical energy, or vice versa.
* A **turbine** converts the energy of a fluid (kinetic and pressure energy) into mechanical work. For example, the force of water turns the blades of a turbine, which rotates a shaft.
* A **pump** does the opposite; it uses mechanical work to increase the energy (primarily pressure) of a fluid.

***

### How does a hydroelectric power plant work?
In a hydroelectric plant, water stored at a high elevation (potential energy) flows down through a pipe. This flowing water strikes the blades of a **hydraulic turbine**, causing its shaft to rotate (mechanical energy). This rotating shaft is connected to a **generator**, which converts the mechanical energy into electrical energy.

---

## Internal Combustion (IC) Engines

### How are IC engines classified?
IC engines can be classified based on several criteria:
* **Number of Strokes**: Four-stroke or two-stroke.
* **Thermodynamic Cycle**: Otto cycle (for petrol engines) or Diesel cycle.
* **Ignition Method**: Spark Ignition (SI) for petrol engines, or Compression Ignition (CI) for diesel engines.
* **Fuel Used**: Petrol, diesel, gas (CNG, LPG), or bi-fuel.
* **Cylinder Arrangement**: In-line, V-type, radial, or opposed.
* **Cooling System**: Air-cooled (with fins) or water-cooled (with a radiator).

***

### What are the functions of five major IC engine parts?
1.  **Cylinder**: The core part where fuel combustion takes place and the piston reciprocates to produce power.
2.  **Piston**: A cylindrical component that moves up and down inside the cylinder. It transfers the force from the expanding gas to the crankshaft.
3.  **Connecting Rod**: Connects the piston to the crankshaft, converting the piston's linear (reciprocating) motion into the crankshaft's rotational motion.
4.  **Crankshaft**: The main rotating shaft of the engine that converts the power from the pistons into rotational torque to drive the vehicle.
5.  **Valves (Inlet and Exhaust)**: Poppet valves, typically located in the cylinder head, that open and close to allow the air-fuel mixture to enter the cylinder (inlet) and the exhaust gases to exit (exhaust).

***

### How does combustion differ in SI (Petrol) and CI (Diesel) engines?
| Feature | SI (Petrol) Engine | CI (Diesel) Engine |
| :--- | :--- | :--- |
| **Intake** | A mixture of air and fuel is drawn in during the suction stroke. | Only air is drawn in during the suction stroke. |
| **Compression** | The air-fuel mixture is compressed. Compression ratio is lower (6-10). | Air alone is compressed to a very high pressure. Compression ratio is higher (16-20). |
| **Ignition** | A **spark plug** ignites the compressed air-fuel mixture at the end of the compression stroke. | Fuel is injected into the hot, highly compressed air and **self-ignites** due to the high temperature. |

***

### What are the four strokes of a 4-stroke CI (Diesel) engine?
1.  **Suction Stroke**: The piston moves down, and the inlet valve opens, drawing only air into the cylinder.
2.  **Compression Stroke**: Both valves close, and the piston moves up, compressing the air to a very high pressure and temperature.
3.  **Power (or Expansion) Stroke**: Fuel is injected into the hot compressed air, and it ignites instantly. The resulting combustion pushes the piston down, producing power. Both valves remain closed.
4.  **Exhaust Stroke**: The inlet valve remains closed, the exhaust valve opens, and the piston moves up, pushing the burnt gases out of the cylinder.

***

### How are engine performance parameters defined?
* **Indicated Power (IP)**: The total theoretical power developed by the combustion of fuel inside the engine cylinder.
* **Brake Power (BP)**: The actual, useful power available at the engine's crankshaft after accounting for internal friction losses. It's the power that can be used to do work.
* **Mechanical Efficiency ($\eta_{mech}$)**: The ratio of brake power to indicated power. It represents how effectively the power developed in the cylinders is transmitted to the crankshaft. It is calculated as $\eta_{mech} = (BP / IP)$.

---

## Electric & Hybrid Vehicles (EVs & HEVs)

### How do EVs and HEVs differ in terms of energy source and emissions?
| Feature | Electric Vehicle (EV) | Hybrid Electric Vehicle (HEV) |
| :--- | :--- | :--- |
| **Energy Source** | Runs solely on electricity stored in a rechargeable battery. | Uses a combination of a gasoline engine and an electric motor. |
| **Emissions** | Has **zero tailpipe emissions**, making it an environmentally cleaner option. | Produces lower emissions than a conventional car but is not zero-emission because it still burns gasoline. |

***

### What are the major components of an Electric Vehicle?
1.  **Battery (Power Pack)**: Stores the electrical energy that powers the vehicle.
2.  **Electric Motor**: Converts electrical energy from the battery into mechanical energy to rotate the wheels.
3.  **Controller**: Regulates the flow of electricity from the battery to the motor, controlling the vehicle's speed and acceleration.
4.  **On-board Charger**: Converts AC electricity from an external source into DC electricity to charge the battery.

***

### What are the advantages of EVs over conventional ICE vehicles?
* **Zero Emissions**: EVs produce no tailpipe emissions, reducing air pollution.
* **Lower Operating Costs**: Electricity is generally cheaper than gasoline, and EVs have fewer moving parts, leading to lower maintenance costs.
* **Quiet Operation**: Electric motors are nearly silent, which reduces noise pollution.
* **High Efficiency**: Electric motors are more efficient at converting energy into motion (85-90%) compared to ICEs (25-30%).

***

### What is the role of the Battery Management System (BMS)?
The Battery Management System (BMS) is the "brain" of the battery pack. It monitors and controls all aspects of the battery's performance, including its state of charge, temperature, and health. Its key roles are to ensure safety, optimize battery performance, and maximize the battery's lifespan.

***

### Why do EVs have better energy efficiency than ICE vehicles?
EVs are more efficient primarily because:
* **Efficient Energy Conversion**: Electric motors convert 85-90% of electrical energy into mechanical power to move the wheels, whereas internal combustion engines (ICEs) only convert about 25-30% of the energy stored in fuel, with the rest lost as heat and friction.
* **Regenerative Braking**: EVs can recapture energy that is normally lost as heat during braking and use it to recharge the battery.
* **No Idling Losses**: An EV's motor does not consume energy when the vehicle is stationary, unlike an ICE which continues to burn fuel while idling.

---

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