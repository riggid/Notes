---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Mechanical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### 1. Thermodynamics and Cycles

### 1. Thermodynamic Systems
**Question:** Define a thermodynamic system. Differentiate between Open, Closed, and Isolated systems with examples.

**Answer:**
-   **System**: A quantity of matter or a region in space chosen for study.
-   **Types**:
    1.  **Open System**: Both energy and mass transfer across the boundary (e.g., Turbine, Pump, Nozzle).
    2.  **Closed System**: Only energy transfer occurs; mass is fixed (e.g., Piston-cylinder without valves).
    3.  **Isolated System**: Neither energy nor mass interaction occurs (e.g., Perfectly insulated flask).

### 2. Laws of Thermodynamics
**Question:** State and explain the Zeroth, First, and Second Laws of Thermodynamics. Explain the Kelvin-Planck and Clausius statements.

**Answer:**
-   **Zeroth Law**: If Body A is in thermal equilibrium with Body B, and Body B is with C, then A and C are in equilibrium. (Basis for Temperature).
-   **First Law**: Energy cannot be created or destroyed. For a cycle, cyclic integral of heat = cyclic integral of work ($\oint \delta Q = \oint \delta W$).
-   **Second Law**:
    -   **Kelvin-Planck**: It is impossible to construct a heat engine operating in a cycle that produces net work while exchanging heat with a single reservoir (Efficiency < 100%).
    -   **Clausius**: It is impossible to construct a device operating in a cycle that transfers heat from a colder to a hotter body without external work input (e.g., Refrigerator).

### 3. Carnot Cycle
**Question:** Describe the Carnot cycle with a P-V diagram. Derive an expression for the thermal efficiency of a Carnot engine.

**Answer:**
-   **Cycle**: Consists of 4 reversible processes:
    1.  Reversible Isothermal Expansion (Heat Addition $Q_1$ at $T_1$).
    2.  Reversible Adiabatic Expansion (Temp drops $T_1 \to T_2$).
    3.  Reversible Isothermal Compression (Heat Rejection $Q_2$ at $T_2$).
    4.  Reversible Adiabatic Compression (Temp rises $T_2 \to T_1$).
-   **Efficiency**:
    $$ \eta = \frac{\text{Work Output}}{\text{Heat Input}} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{Q_2}{Q_1} $$
    For reversible cycle, $\frac{Q_1}{T_1} = \frac{Q_2}{T_2}$.
    $$ \eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} $$
    Where $T_1$ is Source Temp and $T_2$ is Sink Temp in Kelvin.

### 2. IC Engines and Refrigeration

### 1. IC Engines (4-Stroke SI)
**Question:** Explain the working of a 4-stroke Petrol (SI) engine with a neat sketch and P-V diagram.

**Answer:**
1.  **Suction Stroke**: Inlet valve opens, Piston moves down, Air-Fuel mixture sucked in.
2.  **Compression Stroke**: Valves closed, Piston moves up, Mixture compressed, Spark plug ignites at the end.
3.  **Power/Expansion Stroke**: High pressure gas pushes piston down, Work is done.
4.  **Exhaust Stroke**: Exhaust valve opens, Piston moves up, Burnt gases pushed out.

### 2. Performance Parameters
**Question:** Define Indicated Power (IP), Brake Power (BP), Mechanical Efficiency, Brake Thermal Efficiency.

**Answer:**
-   **IP**: Power developed inside the cylinder. $IP = \frac{P_m L A N k}{60}$.
-   **BP**: Power available at the crankshaft. $BP = \frac{2\pi N T}{60}$.
-   **Mechanical Efficiency**: $\eta_{mech} = \frac{BP}{IP}$.
-   **Brake Thermal Efficiency**: Ratio of BP to heat supplied. $\eta_{bth} = \frac{BP}{\text{Mass of fuel} \times CV}$.

### 3. VCRS (Refrigeration)
**Question:** Explain the working principle of a Vapor Compression Refrigeration System (VCRS) with a block diagram.

**Answer:**
-   **Components**: Compressor, Condenser, Expansion Valve, Evaporator.
-   **Working**:
    1.  **Compressor**: Compresses refrigerant vapor to high pressure/temp.
    2.  **Condenser**: Rejects heat to surroundings, converting vapor to liquid.
    3.  **Expansion Valve**: Reduces pressure, temp drops drastically.
    4.  **Evaporator**: Absorbs heat from the space to be cooled (Refrigeration effect), turning liquid back to vapor.

### 3. Future Mobility

### 1. Electric Vehicles (BEV)
**Question:** Explain the working of a Battery Electric Vehicle (BEV) and list its major components.

**Answer:**
-   **Working**: Uses electricity stored in a battery pack to power an electric motor that drives the wheels. No IC engine. Regenerative braking recharges battery.
-   **Components**: Battery Pack (Li-ion), Electric Motor, Inverter (DC to AC), On-board Charger, Transmission (Single speed).

### 2. Hybrid Vehicles
**Question:** Discuss the different types of Hybrid Electric Vehicle (HEV) architectures.

**Answer:**
1.  **Series Hybrid**: IC Engine generates electricity to charge battery/power motor. Only Motor drives wheels.
2.  **Parallel Hybrid**: Both Engine and Motor can drive wheels simultaneously or independently.
3.  **Series-Parallel**: Combines features of both. Power split device allows flexible operation (e.g., Toyota Prius).

---

*Last updated: December 2025*
