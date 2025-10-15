# [[Semester 1/Mechanical/Unit 1/Unit 1|Back]]
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
    > See also: [[Semester 1/Mechanical/Unit 1/Examples#Example 1: Isothermal Work]], [[Semester 1/Mechanical/Unit 1/Examples#Example 2: Polytropic Work]]

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
    > See also: [[Semester 1/Mechanical/Unit 1/Examples#Example 6: Stirring Work]]
-   **For a Cycle**: Since the system returns to its initial state, the change in internal energy is zero ($\Delta U = 0$). Therefore, the net heat transfer equals the net work done.
    $$Q_{net} = W_{net}$$
    > See also: [[Semester 1/Mechanical/Unit 1/Examples#Example 4: First Law for a Cycle]]

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
1.  **Suction/Intake Stroke**: The piston moves from TDC to BDC, drawing in air (Diesel) or an air-fuel mixture (Petrol).
2.  **Compression Stroke**: The piston moves from BDC to TDC, compressing the charge with both valves closed.
3.  **Expansion/Power Stroke**: Combustion is initiated (by spark in SI, by self-ignition in CI), and the high-pressure gas forces the piston from TDC to BDC, producing work.
4.  **Exhaust Stroke**: The piston moves from BDC to TDC, pushing the burnt gases out of the cylinder.

### **Engine Performance Parameters**
-   **Indicated Power (IP)**: The theoretical power developed inside the cylinder.
    $$IP = \frac{n \cdot P_m \cdot L \cdot A \cdot N \cdot K}{60}$$
    (where K=1/2 for 4-stroke, K=1 for 2-stroke).
-   **Brake Power (BP)**: The actual useful power available at the crankshaft.
    $$BP = \frac{2\pi NT}{60}$$
-   **Friction Power (FP)**: The power lost to friction. $FP = IP - BP$.
-   **Mechanical Efficiency ($\eta_{mech}$)**: The ratio of brake power to indicated power.
    $$\eta_{mech} = \frac{BP}{IP}$$
-   **Brake Thermal Efficiency ($\eta_{bth}$)**: The ratio of brake power to the energy supplied by the fuel.
    $$\eta_{bth} = \frac{BP}{m_f \times CV}$$
-   **Brake Specific Fuel Consumption (BSFC)**: The mass of fuel consumed per unit of brake power produced per hour.
    $$BSFC = \frac{m_f (\text{kg/hr})}{BP (\text{kW})}$$
> See also: [[Semester 1/Mechanical/Unit 1/Examples#Example 8: IC Engine Performance]]

---

## Electric and Hybrid Vehicles

### **Types of Electric Vehicles**
-   **Battery Electric Vehicle (BEV)**: Runs entirely on an electric motor and battery. It must be plugged in to charge.
-   **Hybrid Electric Vehicle (HEV)**: Combines an internal combustion engine (ICE) with an electric motor. The battery is charged by the ICE and regenerative braking, not by plugging in.
-   **Plug-in Hybrid Electric Vehicle (PHEV)**: An HEV with a larger battery that can be charged from the power grid.

### **HEV Architectures**
-   **Series Hybrid**: The ICE drives a generator, which either charges the battery or powers the electric motor that drives the wheels. There is no mechanical connection between the ICE and the wheels.
-   **Parallel Hybrid**: Both the ICE and the electric motor can deliver power to the wheels, either individually or together.
-   **Series-Parallel Hybrid**: A combination of both architectures, allowing for more flexible operation but with increased complexity.