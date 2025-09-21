# Unit 1: DC Circuits

### **Basic Terminology**
- **Electrical Network**: An interconnection of electrical elements.
- **Electrical Circuit**: A network with at least one closed path for current flow.
- **Active Element**: Supplies energy (e.g., Voltage/Current Sources).
- **Passive Element**: Absorbs or stores energy (e.g., Resistors, Inductors, Capacitors).
- **Node**: A point where two or more elements are interconnected.

### **Fundamental Concepts**
- **Electric Current (I)**: The rate of flow of charge. $I = \frac{dQ}{dt}$. Measured in Amperes (A).
- **Potential Difference (V)**: Energy required to move a unit charge between two points. $V = \frac{W}{Q}$. Measured in Volts (V).
- **Electric Power (P)**: The rate of energy transfer. $P = V \times I$. Measured in Watts (W).
- **Ohm's Law**: Voltage across a conductor is proportional to the current flowing through it at a constant temperature. $V=IR$.
- **Open Circuit**: A path with infinite resistance, so current is zero.
- **Short Circuit**: A path with zero resistance, so voltage across it is zero.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 3: Open and Short Circuits|Example on Open/Short Circuits]]

---

# Kirchhoff's Laws

### **Kirchhoff's Current Law (KCL)**
- **Statement**: The algebraic sum of currents entering a node is zero. (Sum of incoming currents = Sum of outgoing currents).
- Based on the **conservation of charge**.

### **Kirchhoff's Voltage Law (KVL)**
- **Statement**: The algebraic sum of voltages around any closed path (loop) is zero.
- Based on the **conservation of energy**.
- **Voltage Rise**: Moving from a lower (-) to a higher (+) potential.
- **Voltage Drop**: Moving from a higher (+) to a lower (-) potential.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 1: Basic KVL|Basic KVL]] and [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 2: KVL with Multiple Loops|KVL with Multiple Loops]]

---

# Ideal and Practical Sources

### **Voltage Source**
- **Ideal**: Provides a constant terminal voltage regardless of the current it delivers. Has zero internal resistance.
- **Practical**: Modeled as an ideal voltage source in series with a small internal resistance ($R_s$). Terminal voltage drops as load current increases. $V_{load} = V_S - I \cdot R_s$.

### **Current Source**
- **Ideal**: Delivers a constant current regardless of the voltage across its terminals. Has infinite internal resistance.
- **Practical**: Modeled as an ideal current source in parallel with a large internal resistance ($R_s$). Load current falls as terminal voltage increases.

---

# Circuit Analysis Techniques

### **Series and Parallel Combinations**
- **Series**: Elements connected end-to-end, sharing the same current. $R_{eq} = R_1 + R_2 + \dots$
- **Parallel**: Elements connected across the same two nodes, sharing the same voltage. $R_{eq} = (\frac{1}{R_1} + \frac{1}{R_2} + \dots)^{-1}$.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 6: Series-Parallel Reduction|Example on Series-Parallel Reduction]]

### **Voltage and Current Division Rules**
- **Voltage Division (Series Circuits)**: Voltage across a resistor is proportional to its resistance.
$$ V_x = V_{total} \cdot \frac{R_x}{R_{total}} $$
- **Current Division (Parallel Circuits)**: Current through a branch is inversely proportional to its resistance. For two branches:
$$ I_1 = I_{total} \cdot \frac{R_2}{R_1 + R_2} $$
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 4: Current Division|Current Division]] and [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 5: Voltage Division|Voltage Division]]

### **Source Transformation**
- A practical voltage source can be converted into an equivalent practical current source, and vice-versa.
- A voltage source $V_S$ in series with $R_S$ is equivalent to a current source $I_S$ in parallel with $R_S$, where $V_S = I_S \cdot R_S$.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 7: Source Transformation|Example on Source Transformation]]

### **Star-Delta (Y-Δ) Transformation**
- Used to simplify circuits where series/parallel combinations are not obvious.
- **Delta to Star**: $R_a = \frac{R_{ab}R_{ca}}{R_{ab}+R_{bc}+R_{ca}}$
- **Star to Delta**: $R_{ab} = \frac{R_a R_b + R_b R_c + R_c R_a}{R_c}$
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 8: Star-Delta Transformation|Star-Delta Basic Conversions]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 9: Network Reduction with Y-Δ|Network Reduction 1]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 10: Network Reduction with Y-Δ|Network Reduction 2]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 11: Network Reduction with Y-Δ|Network Reduction 3]], and [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 12: Network Reduction with Y-Δ|Network Reduction 4]]

---

# Network Theorems

### **Mesh Analysis**
- A technique based on KVL to solve for unknown currents in a planar circuit.
- **Mesh**: A loop that does not contain any other loops within it.
- **Procedure**:
  1. Identify all meshes and assign a mesh current to each.
  2. Write a KVL equation for each mesh.
  3. Solve the resulting system of simultaneous equations.
- **With Current Sources**: If a current source exists only in one mesh, the mesh current is known. If it's between two meshes, a "supermesh" or current equation is used.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 13: Basic Mesh Analysis|Basic Mesh Analysis]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 14: Mesh Analysis with Current Sources|Mesh with Current Sources]], and [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 15: Mesh Analysis with a Shared Current Source|Mesh with a Shared Current Source]]

### **Superposition Theorem**
- **Statement**: In a linear circuit with multiple independent sources, the total response (current or voltage) in any element is the algebraic sum of the responses caused by each source acting alone.
- **Procedure**:
  1. Select one source. Deactivate all others (voltage sources shorted, current sources opened).
  2. Calculate the response in the desired element.
  3. Repeat for all other sources.
  4. Algebraically sum the individual responses.
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 16: Superposition Theorem 1|Superposition Example 1]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 17: Superposition Theorem 2|Superposition Example 2]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 18: Superposition Theorem 3|Superposition Example 3]]

### **Thevenin's Theorem**
- **Statement**: Any linear two-terminal network can be replaced by an equivalent circuit consisting of a single voltage source ($V_{TH}$) in series with a single resistor ($R_{TH}$).
- **Finding $V_{TH}$ (Thevenin Voltage)**: The open-circuit voltage across the two terminals.
- **Finding $R_{TH}$ (Thevenin Resistance)**: The equivalent resistance looking into the terminals with all independent sources deactivated.
- **Load Current**: $I_L = \frac{V_{TH}}{R_{TH} + R_L}$
> See: [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 19: Thevenin's Theorem 1|Thevenin Example 1]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 20: Thevenin's Theorem 2|Thevenin Example 2]], [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 21: Thevenin's Theorem 3|Thevenin Example 3]], and [[College/Semester 1/Electrical Engineering/Unit 1 Examples#Example 22: Thevenin's Theorem 4|Thevenin Example 4]]