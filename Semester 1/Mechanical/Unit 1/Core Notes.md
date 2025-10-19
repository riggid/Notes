# [Back](../Mechanical.md)
***
# Unit 1: Principles of Thermodynamics

## Introduction to Thermodynamics

-   **Thermodynamics** is the science that deals with the interaction of energy, primarily in the forms of heat and work.
-   It is studied in two main forms:
    -   **Classical Thermodynamics**: A macroscopic approach that addresses the bulk characteristics of matter, like pressure and temperature, without considering individual molecules.
    -   **Statistical Thermodynamics**: A microscopic approach that studies the behavior of individual molecules to explain macroscopic properties.

### **Systems, Surroundings, and Boundaries**
-   A **System** is a fixed quantity of matter or a region in space chosen for study.
-   The **Surroundings** is everything external to the system.
-   The **Boundary** is the real or imaginary surface that separates the system from its surroundings.
-   The combination of the system and surroundings is called the **Universe**.

### **Types of Thermodynamic Systems**
Systems are classified based on how they interact with their surroundings:
-   **Open System**: Can exchange both energy (heat/work) and matter with its surroundings.
    -   *Example*: A pot of boiling water without a lid.
-   **Closed System**: Can exchange energy but not matter with its surroundings.
    -   *Example*: A sealed pressure cooker.
-   **Isolated System**: Cannot exchange either energy or matter with its surroundings.
    -   *Example*: An idealized, perfectly insulated thermos flask.

---

## States, Processes, and Cycles

-   **State**: The condition of a system at any instant, defined by its properties (e.g., pressure, volume, temperature).
-   **Property**: A characteristic of a system whose value depends only on the state, not the path taken to reach that state.
    -   **Intensive Properties**: Independent of the system's size (e.g., pressure, temperature).
    -   **Extensive Properties**: Dependent on the system's size (e.g., mass, volume, energy).
-   **Process**: A change in a system's state that occurs when any of its properties change in value.
    -   **Isothermal Process**: Temperature remains constant ($T=C$).
    -   **Isobaric Process**: Pressure remains constant ($P=C$).
    -   **Isochoric Process**: Volume remains constant ($V=C$).
    -   **Isentropic Process**: Entropy remains constant ($s=C$).
    -   **Adiabatic Process**: No heat transfer occurs ($Q=0$).
-   **Cycle**: A sequence of processes that begins and ends at the same state.
-   **Quasi-Static Process**: An idealized process that happens so slowly that the system remains in thermodynamic equilibrium at every instant. This allows properties to be well-defined throughout the process.

### **Equilibrium and the Zeroth Law**
-   **Equilibrium**: A state where a system is in balance and its observable properties do not change over time when isolated. For this to occur, temperature and pressure must be uniform throughout the system.
-   **Zeroth Law of Thermodynamics**: If two systems (A and B) are each in thermal equilibrium with a third system (C), then A and B are in thermal equilibrium with each other. This law provides the basis for temperature measurement.

---

## Energy, Work, and Heat

-   **Internal Energy (U)**: The sum of all microscopic forms of energy (kinetic, potential, chemical, etc.) within a system. For an ideal gas, it depends only on temperature.
-   **Heat (Q)**: Energy transferred across a boundary due to a temperature difference.
    -   **Sign Convention**: Heat *transferred to* a system is **positive** (+Q). Heat *transferred from* a system is **negative** (–Q).
-   **Work (W)**: Energy transferred across a boundary that is not due to a temperature difference.
    -   **Sign Convention**: Work *done by* a system is **positive** (+W). Work *done on* a system is **negative** (–W).

### **Moving Boundary Work**
This is the work associated with the expansion or compression of a gas in a piston-cylinder device.
-   The general expression for moving boundary work is:
    $$W_{1-2} = \int_{1}^{2} P dV$$
    > See also: [Examples](Semester%201/Mechanical/Unit%201/Examples.md#Example%201:%20Isothermal%20Work), [Examples](Semester%201/Mechanical/Unit%201/Examples.md#Example%202:%20Polytropic%20Work)

-   The work done depends on the process path relating pressure (P) and volume (V).
    -   **Isobaric Process ($P=C$)**:
        $$W = P(V_2 - V_1)$$
    -   **Isothermal Process ($PV=C$)**:
        $$W = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)$$
    -   **Polytropic Process ($PV^n=C$)**:
        $$W = \frac{P_1V_1 - P_2V_2}{n-1}$$
    -   **Adiabatic Process ($PV^\gamma=C$)**:
        $$W = \frac{P_1V_1 - P_2V_2}{\gamma-1}$$
    -   **Isochoric Process ($V=C$)**:
        $$W = 0$$

---

## The First and Second Laws of Thermodynamics

### **First Law of Thermodynamics**
This is the principle of conservation of energy.
-   **For a Process**: The change in the total energy of a system is equal to the net heat added to the system minus the net work done by the system.
    $$\Delta U = Q - W$$
    > See also: [Examples](Semester%201/Mechanical/Unit%201/Examples.md#Example%206:%20Stirring%20Work)
-   **For a Cycle**: Since the system returns to its initial state, the change in internal energy is zero ($\Delta U = 0$). Therefore, the net heat transfer equals the net work done.
    $$Q_{net} = W_{net}$$
    > See also: [Examples](Semester%201/Mechanical/Unit%201/Examples.md#Example%204:%20First%20Law%20for%20a%20Cycle)

### **Second Law of Thermodynamics**
The first law states that energy is conserved, but the second law provides direction and sets limits on the conversion of heat to work.
-   **Kelvin-Planck Statement**: It is impossible for any device that operates on a cycle to receive heat from a single reservoir and produce a net amount of work. This means a heat engine must reject some waste heat to a low-temperature sink.
-   **Clausius Statement**: It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a lower-temperature body to a higher-temperature body. This means a refrigerator requires external work to operate.

---

## Internal Combustion (IC) Engines

A **heat engine** is a device that converts chemical energy into thermal energy, which is then used to perform work.
-   **Internal Combustion (IC) Engine**: Combustion occurs inside the engine cylinder.
-   **External Combustion (EC) Engine**: Combustion occurs outside the engine.

### **Classification of IC Engines**
IC engines can be classified by:
-   **Number of Strokes**: Four-stroke or two-stroke.
-   **Thermodynamic Cycle**: Otto cycle (petrol engines), Diesel cycle, or Dual cycle.
-   **Ignition System**: Spark Ignition (SI) or Compression Ignition (CI).
-   **Cylinder Arrangement**: In-line, V-type, radial, opposed, etc..
-   **Cooling System**: Air-cooled (with fins) or water-cooled (with a radiator).
-   **Fuel Used**: Petrol, diesel, gas (CNG, LPG), or bi-fuel.

### **Engine Components & Terminology**
-   **Core Components**: Cylinder, piston, connecting rod, crankshaft, valves, cylinder head, and flywheel.
-   **Key Terminology**:
    -   **Bore (d)**: Inner diameter of the cylinder.
    -   **Stroke (L)**: Distance the piston travels between dead centers.
    -   **Top Dead Center (TDC)**: Piston's position farthest from the crankshaft.
    -   **Bottom Dead Center (BDC)**: Piston's position nearest to the crankshaft.
    -   **Swept Volume ($V_s$)**: Volume displaced by the piston in one stroke. $$V_s = A \times L = \frac{\pi}{4}d^2L$$
    -   **Clearance Volume ($V_c$)**: Volume in the cylinder when the piston is at TDC.
    -   **Compression Ratio (r)**: Ratio of total volume (at BDC) to clearance volume (at TDC). $$r = \frac{V_s + V_c}{V_c}$$

### **Four-Stroke Engine Operation**
A four-stroke cycle is completed in four piston strokes (two crankshaft revolutions).
1.  **Suction/Intake Stroke**: The piston moves from TDC to BDC, drawing in air (Diesel) or an air-fuel mixture (Petrol) through the open inlet valve.
2.  **Compression Stroke**: The piston moves from BDC to TDC, compressing the charge with both valves closed.
3.  **Expansion/Power Stroke**: Combustion is initiated (by spark in SI, by self-ignition in CI), and the high-pressure gas forces the piston from TDC to BDC, producing work. Both valves remain closed.
4.  **Exhaust Stroke**: The piston moves from BDC to TDC, pushing the burnt gases out of the cylinder through the open exhaust valve.

### **Combustion in SI vs. CI Engines**
| Feature | SI (Petrol) Engine | CI (Diesel) Engine |
| :--- | :--- | :--- |
| **Intake** | A mixture of air and fuel is drawn in during the suction stroke. | Only air is drawn in during the suction stroke. |
| **Compression** | The air-fuel mixture is compressed. Compression ratio is lower (typically 6-10). | Air alone is compressed to a very high pressure. Compression ratio is higher (typically 16-20). |
| **Ignition** | A **spark plug** ignites the compressed air-fuel mixture at the end of the compression stroke. | Fuel is injected into the hot, highly compressed air and **self-ignites** due to the high temperature. |

### **Engine Performance Parameters**
-   **Indicated Power (IP)**: The theoretical power developed inside the cylinder by the combustion of fuel.
    $$IP = \frac{n \cdot P_m \cdot L \cdot A \cdot N \cdot K}{60}$$
    (where K=1/2 for 4-stroke, K=1 for 2-stroke; n for number of cylinders).
-   **Brake Power (BP)**: The actual useful power available at the crankshaft, after accounting for internal friction losses.
    $$BP = \frac{2\pi NT}{60}$$
-   **Friction Power (FP)**: The power lost to friction and other parasitic loads within the engine. $FP = IP - BP$.
-   **Mechanical Efficiency ($\eta_{mech}$)**: The ratio of brake power to indicated power. It represents how effectively the power developed in the cylinders is transmitted to the crankshaft.
    $$\eta_{mech} = \frac{BP}{IP}$$
-   **Brake Thermal Efficiency ($\eta_{bth}$)**: The ratio of brake power to the total energy supplied by the fuel.
    $$\eta_{bth} = \frac{BP}{m_f \times CV}$$
-   **Brake Specific Fuel Consumption (BSFC)**: The mass of fuel consumed per unit of brake power produced per hour.
    $$BSFC = \frac{m_f (\text{kg/hr})}{BP (\text{kW})}$$
> See also: [Examples](Semester%201/Mechanical/Unit%201/Examples.md#Example%208:%20IC%20Engine%20Performance)

---

## Hydraulic Machines & Fluid Energy

-   A **hydraulic machine** is a device that converts the energy of a fluid into mechanical energy, or vice versa. They are critical in power generation and fluid transportation.

### **Turbines vs. Pumps**
-   A **Turbine** converts the fluid's energy (kinetic and pressure energy) into mechanical work. For example, water flowing through a turbine causes its blades and shaft to rotate.
-   A **Pump** does the opposite; it uses mechanical work (from an external source like an electric motor) to increase the energy (primarily pressure) of a fluid, enabling it to be moved to a higher elevation or overcome resistance.

### **Hydroelectric Power Plant Working Principle**
In a hydroelectric power plant:
1.  **Potential Energy**: Water stored at a high elevation (e.g., in a reservoir behind a dam) possesses high potential energy.
2.  **Kinetic Energy**: This water flows downwards through large pipes called penstocks. As it flows, its potential energy is converted into kinetic energy.
3.  **Mechanical Energy Conversion**: The fast-flowing water strikes the blades of a **hydraulic turbine** (e.g., Pelton, Francis, Kaplan turbine), causing the turbine's shaft to rotate at high speed. This rotation is mechanical energy.
4.  **Electrical Energy Generation**: The rotating turbine shaft is directly connected to a **generator**. The generator then converts this mechanical energy into electrical energy, which is transmitted through power lines.

---

## Electric and Hybrid Vehicles

### **Types of Electric Vehicles**
-   **Battery Electric Vehicle (BEV)**: Runs entirely on an electric motor powered by a large rechargeable battery pack. It produces zero tailpipe emissions and must be plugged in to charge.
-   **Hybrid Electric Vehicle (HEV)**: Combines an internal combustion engine (ICE) with an electric motor and a smaller battery. The battery is primarily charged by the ICE and regenerative braking; it is not typically plugged into the grid.
-   **Plug-in Hybrid Electric Vehicle (PHEV)**: An HEV with a larger battery that can be charged from the power grid, in addition to being charged by the ICE and regenerative braking. It offers a limited all-electric driving range before switching to hybrid mode.

### **HEV Architectures**
-   **Series Hybrid**: The ICE drives a generator, which then either charges the battery or powers the electric motor that drives the vehicle's wheels. There is no direct mechanical connection between the ICE and the wheels.
-   **Parallel Hybrid**: Both the ICE and the electric motor can deliver power directly to the wheels, either individually or together. This allows for more direct power transfer.
-   **Series-Parallel Hybrid**: A sophisticated combination of both series and parallel architectures, using a power split device to allow for highly flexible operation and optimized power delivery depending on speed and load.

### **Major Components of an Electric Vehicle (BEV)**
1.  **Battery (Power Pack)**: Stores the electrical energy that powers the vehicle. It's typically a large lithium-ion battery.
2.  **Electric Motor**: Converts electrical energy from the battery into mechanical energy to rotate the wheels, driving the vehicle.
3.  **Power Electronics Controller (Inverter)**: Regulates the flow of electricity from the battery to the motor, controlling the vehicle's speed, acceleration, and direction. It converts DC power from the battery to AC for the motor.
4.  **On-board Charger**: Converts AC electricity from an external charging station or wall outlet into DC electricity to recharge the battery.
5.  **Drivetrain**: Transmits mechanical power from the electric motor to the wheels.

### **Advantages of EVs over Conventional ICE Vehicles**
-   **Zero Tailpipe Emissions**: EVs produce no exhaust gases, significantly reducing air pollution and contribution to smog and greenhouse gases.
-   **Lower Operating Costs**: Electricity is generally cheaper per mile than gasoline. EVs also have fewer moving parts, leading to reduced maintenance requirements and costs.
-   **Quiet Operation**: Electric motors operate almost silently, reducing noise pollution in urban areas and enhancing driving comfort.
-   **Instant Torque & Smooth Acceleration**: Electric motors deliver maximum torque from a standstill, providing quick and smooth acceleration.
-   **Reduced Energy Dependence**: Can utilize diverse electricity sources (solar, wind, etc.), decreasing reliance on fossil fuels.

### **Role of the Battery Management System (BMS)**
The Battery Management System (BMS) is a crucial electronic system responsible for overseeing and controlling all aspects of the battery pack. Its key functions include:
-   **Safety**: Monitors cell voltage and temperature to prevent overcharging, over-discharging, and overheating, which are critical for safety and battery health.
-   **Optimization**: Balances the charge across individual battery cells to maximize the battery's usable energy and extend its range.
-   **Performance Monitoring**: Provides real-time data on the battery's state of charge (SoC), state of health (SoH), and remaining range.
-   **Lifespan Maximization**: By keeping the battery operating within its optimal parameters, the BMS significantly extends the battery's overall lifespan.

### **Why EVs Have Better Energy Efficiency than ICE Vehicles**
EVs inherently possess higher energy efficiency due to several factors:
1.  **Efficient Energy Conversion**: Electric motors are extremely efficient, converting typically 85-90% of the electrical energy into mechanical power to move the wheels. In contrast, internal combustion engines (ICEs) convert only about 25-30% of the chemical energy in fuel into useful mechanical power, with the vast majority lost as waste heat and friction.
2.  **Regenerative Braking**: EVs can recapture kinetic energy that is traditionally lost as heat during braking. The electric motor acts as a generator, converting the vehicle's momentum back into electricity to recharge the battery.
3.  **No Idling Losses**: An EV's electric motor consumes virtually no energy when the vehicle is stationary (e.g., at a traffic light). An ICE, however, continues to burn fuel while idling, wasting energy.
4.  **Fewer Moving Parts**: The simpler drivetrain of an EV means fewer mechanical losses due to friction compared to an ICE vehicle's complex transmission and engine components.
***
# [Back](../Mechanical.md)