# Unit 1: Principles of Thermodynamics

### **Core Concepts**
- **Thermodynamics**: The science of energy interaction, primarily as heat and work.
- **Classical Thermodynamics**: A macroscopic approach focusing on the bulk properties of matter (pressure, temperature, etc.).
- **Statistical Thermodynamics**: A microscopic approach concerned with the behavior of individual molecules.
- **System**: A fixed quantity of matter or a region in space chosen for study.
- **Surroundings**: Everything outside the system boundary.
- **Boundary**: The surface that separates the system from its surroundings.

### **Types of Systems**
- **Open System**: Exchanges both mass and energy with the surroundings.
- **Closed System**: Exchanges energy (heat/work) but not mass.
- **Isolated System**: Exchanges neither mass nor energy.

### **System State and Properties**
- **State**: The condition of a system at any instant, defined by its properties.
- **Property**: A measurable characteristic of a system (e.g., pressure, volume, temperature).
  - **Intensive Property**: Independent of the system's size (e.g., pressure, temperature).
  - **Extensive Property**: Depends on the system's size (e.g., mass, volume, energy).
- **Equilibrium**: A state where a system's properties are stable and uniform, with no internal changes.

### **Processes and Cycles**
- **Process**: A change in the state of a system.
  - **Isothermal**: Constant temperature.
  - **Isobaric**: Constant pressure.
  - **Isochoric**: Constant volume.
  - **Isentropic**: Constant entropy.
- **Quasi-Static Process**: An infinitely slow process where the system remains in near-equilibrium at every step.
- **Cycle**: A sequence of processes that returns the system to its initial state.

---

# Energy, Heat, and Work

### **Forms of Energy**
- **Internal Energy (U)**: The sum of all microscopic energies within a system (kinetic, potential, chemical, etc.). It is a property that depends only on the state.
- **Heat (Q)**: Energy transferred due to a temperature difference. Heat transfer **to** a system is positive.
- **Work (W)**: Energy transferred that is not heat. Work done **by** a system is positive.

### **Moving Boundary Work**
- Work done by expansion or compression of a gas in a piston-cylinder device.
$$ W_{1-2}=\int_{1}^{2}p~dV $$
- **Work in an Isobaric (Constant P) Process**: $W=P(V_{2}-V_{1})$
- **Work in an Isothermal (Constant T) Process**: $W=P_{1}V_{1}\ln(\frac{V_{2}}{V_{1}})$
- **Work in a Polytropic Process ($PV^n$=const)**: $W=\frac{p_{1}V_{1}-p_{2}V_{2}}{n-1}$
- **Work in an Adiabatic Process ($PV^\gamma$=const)**: $W=\frac{p_{1}V_{1}-p_{2}V_{2}}{\gamma-1}$
- **Work in an Isochoric (Constant V) Process**: $W=0$
> See: [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 1: Isothermal Compression|Isothermal Work]], [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 2: Polytropic Compression|Polytropic Work]], and [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 3: Multi-Process Work|Multi-Process Work]]

---

# Laws of Thermodynamics

### **Zeroth Law**
- If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other. This is the basis for temperature measurement.

### **First Law of Thermodynamics**
- A statement of the conservation of energy.
- **For a Cycle**: The net heat input equals the net work output.
$$ \oint\partial Q = \oint\partial W \quad \text{or} \quad \sum_{cycle}Q=\sum_{cycle}W $$
- **For a Process (Non-Cyclic)**: The change in total energy of a system is the difference between heat added and work done.
$$ \Delta U = Q - W $$
- **Limitations**: The First Law doesn't indicate the direction of a process or its feasibility.
> See: [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 4: Cyclic Process Calculation|Cyclic Process Calculation]], [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 5: Four-Process Cycle|Four-Process Cycle]], and [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 6: Stirring Work|Stirring Work]]

### **Second Law of Thermodynamics**
- Overcomes the limitations of the First Law by defining the direction of processes.
- **Kelvin-Planck Statement**: It is impossible for any device that operates on a cycle to receive heat from a single reservoir and produce a net amount of work. (Perfect heat engines are impossible).
- **Clausius Statement**: It is impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a cooler body to a hotter body. (Refrigerators require work input).

---

# Fluid Energy

### **Mechanical Energy in Fluids**
- **Hydraulic Machines**: Devices that convert between mechanical and hydraulic energy (e.g., turbines, pumps).
- **Mechanical Energy of a Flowing Fluid** (per unit mass):
$$ e_{mech}=\frac{P}{\rho}+\frac{V^{2}}{2}+gz $$
- **Mechanical Energy Change** (incompressible flow):
$$ \Delta e_{mech}=\frac{P_{2}-P_{1}}{\rho}+\frac{V_{2}^{2}-V_{1}^{2}}{2}+g(z_{2}-z_{1}) $$
- **Maximum Power from a Turbine**: $\dot{W}_{max}=\dot{m}\Delta e_{mech}$

### **Efficiency**
- **Pump Efficiency**: $\eta_{pump}=\frac{\text{Mechanical power increase of fluid}}{\text{Mechanical power input}}$
- **Turbine Efficiency**: $\eta_{turbine}=\frac{\text{Mechanical power output}}{\text{Mechanical power decrease of fluid}}$
- **Overall Efficiency** (Turbine-Generator): $\eta_{turbine-gen}=\eta_{turbine}\eta_{generator}$
> See: [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 7: Hydraulic Turbine-Generator|Hydraulic Turbine-Generator]]

---

# IC Engines

### **Engine Types**
- **Heat Engine**: Converts chemical energy (fuel) to thermal energy, then to mechanical work.
- **External Combustion (EC) Engine**: Combustion occurs outside the engine (e.g., steam engine).
- **Internal Combustion (IC) Engine**: Combustion occurs inside the engine cylinder.

### **Classification of IC Engines**
- **By Strokes**: Four-Stroke vs. Two-Stroke.
- **By Thermodynamic Cycle**: Otto (petrol), Diesel, Dual.
- **By Ignition**: Spark Ignition (SI) vs. Compression Ignition (CI).
- **By Cylinder Arrangement**: In-line, V-type, Radial, Opposed.
- **By Cooling**: Air-cooled vs. Water-cooled.

### **Engine Components & Terminology**
- **Components**: Cylinder, Piston, Connecting Rod, Crankshaft, Valves, Flywheel.
- **Terminology**: Bore (d), Stroke (L), Top Dead Center (TDC), Bottom Dead Center (BDC), Swept Volume ($V_s$), Clearance Volume ($V_c$).
- **Compression Ratio (r)**: $r=\frac{V_{C}+V_{s}}{V_{C}}$

### **Working Principles**
- **4-Stroke Petrol (SI) Engine**: Involves four strokes: Suction (intake of air-fuel mix), Compression, Power (spark ignition), and Exhaust.
- **4-Stroke Diesel (CI) Engine**: Similar cycle, but inducts air only, compresses it to a high temperature, and then injects fuel, which self-ignites.

### **Performance Parameters**
- **Indicated Power (IP)**: Power developed inside the cylinder.
- **Brake Power (BP)**: Net power available at the crankshaft.
- **Friction Power (FP)**: The difference, representing mechanical losses. $FP=IP-BP$
- **Mechanical Efficiency**: $\eta_{mech}=\frac{BP}{IP}$
- **Brake Thermal Efficiency**: $\eta_{bth}=\frac{BP}{m_{f}\times CV}$
- **Brake Specific Fuel Consumption (BSFC)**: $\text{BSFC} = \frac{\text{Mass of fuel consumed (kg/hr)}}{\text{Brake Power (kW)}}$
> See: [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 8: Engine Performance Test 1|Engine Test 1]], [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 9: Engine Performance Test 2|Engine Test 2]], [[College/Semester 1/Mechanical Engineering/Unit 1 Examples#Example 10: Engine Design Calculation|Engine Design Calculation]]

---

# Electric and Hybrid Vehicles (HEVs)

### **Vehicle Types**
- **Battery Electric Vehicle (BEV)**: Runs entirely on an electric motor and battery; must be plugged in to charge.
- **Hybrid Electric Vehicle (HEV)**: Combines an IC engine with an electric motor. Cannot be plugged in; recharges via the engine and regenerative braking.
- **Plug-in Hybrid (PHEV)**: An HEV with a larger battery that can be plugged in to charge.

### **HEV Architectures**
- **Series Hybrid**: IC engine drives a generator, which powers the electric motor or charges the battery. The engine never directly drives the wheels.
- **Parallel Hybrid**: Both the IC engine and the electric motor can power the wheels, either together or independently.
- **Series-Parallel Hybrid**: A combination of both, offering more flexibility but with greater complexity.

### **Advantages & Disadvantages**
- **EVs**: Zero tailpipe emissions and lower running costs, but suffer from limited range, long charging times, and high initial cost.
- **HEVs**: Better fuel economy and no range anxiety, but are more complex and still produce emissions.