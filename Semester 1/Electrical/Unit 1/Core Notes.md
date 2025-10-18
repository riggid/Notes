# [[Electrical|Back]]
*** 
## Fundamental Concepts

### **Network Terminology**
- **Electrical Network**: An interconnection of electrical elements such as resistors, inductors, capacitors, and sources.
- **Electrical Circuit**: An electrical network that has at least one source and a closed path for current to flow.
- **Active Elements**: Components that can supply or deliver energy to an electrical network. **Examples**: Voltage sources and current sources.
- **Passive Elements**: Components that absorb or store energy within an electrical network. **Examples**: Resistors, inductors, and capacitors.

---

## Basic Laws and Definitions

### **Electric Current & Potential Difference**
- **Electric Current (I)**: The rate of flow of electric charge through a conductor's cross-section. It is measured in **Amperes (A)**, where $1 \text{ A} = 1 \text{ Coulomb/sec}$.
- **Potential Difference (V)**: The energy required to move a unit positive charge from one terminal to another. It is measured in **Volts (V)**, where $1 \text{ V} = 1 \text{ Joule/Coulomb}$.

### **Ohm's Law**
At a constant temperature, the potential difference ($V$) across a conductor is directly proportional to the current ($I$) flowing through it.
$$V \propto I \implies V=IR$$
- **Resistance (R)**: The opposition to the flow of current. It is measured in **Ohms ($\Omega$)**. Resistance depends on the material's resistivity ($\rho$), length ($l$), and cross-sectional area ($A$).
  $$R = \frac{\rho l}{A}$$
- **Conductance (G)**: The reciprocal of resistance, measured in **Siemens (S)**.
  $$G = \frac{1}{R}$$

### **Sign Conventions**
- **Passive Sign Convention**: Current **enters** the positive terminal of a passive element (e.g., a resistor absorbing power).
- **Active Sign Convention**: Current **leaves** the positive terminal of an active element (e.g., a battery supplying power).

### **Electric Power (P)**
The rate at which electrical energy is absorbed or delivered. It is measured in **Watts (W)**.
$$P = VI$$

---

## Kirchhoff's Laws

### **Kirchhoff’s Current Law (KCL)**
The algebraic sum of currents entering a junction (or node) is zero. In other words, the sum of currents entering a node equals the sum of currents leaving it.
$$\sum I_{in} = \sum I_{out}$$
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 2: KCL and KVL Application]]

### **Kirchhoff’s Voltage Law (KVL)**
The algebraic sum of voltages around any closed path (or loop) in an electric network is zero. Conventionally, a voltage drop is taken as negative and a voltage rise as positive.
$$\sum V = 0$$
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 1: KVL Application]]

---

## Circuit Analysis Techniques

### **Series and Parallel Connections**

- **Series Connection**: Components are connected end-to-end, providing only one path for the current. The total equivalent resistance ($R_{eq}$) is the sum of individual resistances.
  $$R_{eq} = R_1 + R_2 + \dots + R_n$$
- **Voltage Division Rule**: In a series circuit, the voltage across any resistor ($R_x$) is given by:
  $$V_x = V_{total} \left( \frac{R_x}{R_{eq}} \right)$$

- **Parallel Connection**: Both ends of all components are connected together, providing multiple paths for the current. The reciprocal of the equivalent resistance is the sum of the reciprocals of individual resistances.
  $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}$$
- **Current Division Rule**: For two parallel resistors, the current through one resistor ($R_1$) is given by:
  $$I_1 = I_{total} \left( \frac{R_2}{R_1 + R_2} \right)$$
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 3: Current Division]]

### **Source Types**
- **Ideal Voltage Source**: Terminal voltage is constant and independent of the current drawn from it. It has **zero internal resistance**.
- **Ideal Current Source**: Supplies a constant current regardless of the voltage across its terminals. It has **infinite internal resistance**.
- **Practical Voltage Source**: Modeled as an ideal voltage source in series with a small internal resistance ($R_S$). The terminal voltage drops as the load current increases: $V_L = V_S - I_L R_S$.
- **Practical Current Source**: Modeled as an ideal current source in parallel with a large internal resistance ($R_S$). The terminal current drops as the load voltage increases: $I_L = I_S - \frac{V_L}{R_S}$.

### **Source Transformation**
A practical voltage source can be converted into an equivalent practical current source, and vice versa.
- **Voltage Source to Current Source**:
  $$I_S = \frac{V_S}{R_S} \quad (\text{Resistor } R_S \text{ is placed in parallel})$$
- **Current Source to Voltage Source**:
  $$V_S = I_S R_S \quad (\text{Resistor } R_S \text{ is placed in series})$$
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 4: Source Transformation]]

### **Star (Y) and Delta ($\Delta$) Transformations**
A three-terminal resistive network can be converted between a Star (Y) and Delta ($\Delta$) configuration.

- **Delta to Star Transformation**:
  $$R_a = \frac{R_{ab}R_{ca}}{R_{ab}+R_{bc}+R_{ca}}, \quad R_b = \frac{R_{ab}R_{bc}}{R_{ab}+R_{bc}+R_{ca}}, \quad R_c = \frac{R_{bc}R_{ca}}{R_{ab}+R_{bc}+R_{ca}}$$
- **Star to Delta Transformation**:
  $$R_{ab} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_c}, \quad R_{bc} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_a}, \quad R_{ca} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_b}$$
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 5: Delta to Star Transformation]]

---

## Network Theorems

### **Mesh Analysis**
A systematic application of KVL to find unknown currents in a circuit. "Mesh currents" are assumed for each closed loop, and KVL equations are written for each mesh.
> See also: [[Semester 1/Electrical/Unit 1/Q&A#DC_Q3: What is a supermesh and when is it used?]]
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 6: Mesh Analysis]]

### **Superposition Theorem**
In any **linear network** with multiple independent sources, the current or voltage for any element is the algebraic sum of the responses caused by each source acting alone. All other sources are turned off (voltage sources replaced by short circuits and current sources by open circuits).
**Important**: This theorem applies to voltage and current, but **not directly to power**, as power is a non-linear quantity ($P=I^2R$).
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 7: Superposition Theorem]]

### **Thevenin’s Theorem**
Any two-terminal linear network can be replaced by an equivalent circuit consisting of a single voltage source ($V_{TH}$) in series with a single resistor ($R_{TH}$).
- **Thevenin Voltage ($V_{TH}$)**: The open-circuit voltage across the two terminals of interest.
- **Thevenin Resistance ($R_{TH}$)**: The equivalent resistance looking back into the terminals with all independent sources turned off (voltage sources shorted, current sources opened).
> For a numerical problem, see: [[Semester 1/Electrical/Unit 1/Examples#Example 8: Thevenin's Theorem]]