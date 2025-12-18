---
dg-publish: true
---
# [[../Electrical|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
*** 
# Unit 1: Electrical Circuit Analysis

## Fundamental Concepts

### **Network Terminology**
- **Electrical Network**: An interconnection of electrical elements such as resistors, inductors, capacitors, and sources.
- **Electrical Circuit**: An electrical network that has at least one source and a closed path for current to flow.
- **Node**: A point in a circuit where two or more circuit elements are connected.
- **Branch**: A path in a circuit containing one element that connects two nodes.
- **Loop**: Any closed path in an electrical circuit.
- **Mesh**: A loop that does not contain any other loops within it.

### **Active and Passive Elements**
- **Active Elements**: Components that can supply or deliver energy to an electrical network. They are energy sources.
    - **Examples**: Voltage sources (batteries, generators) and current sources.
- **Passive Elements**: Components that absorb or store energy within an electrical network. They cannot generate energy.
    - **Examples**: Resistors (absorb/dissipate energy as heat), Inductors (store energy in magnetic fields), and Capacitors (store energy in electric fields).

---

## Basic Laws and Definitions

### **Electric Current & Potential Difference**
- **Electric Current (I)**: The rate of flow of electric charge through a conductor's cross-section.
  $$i(t) = \frac{dq}{dt}$$
  It is measured in **Amperes (A)**, where `1 A = 1 Coulomb/second`.
- **Potential Difference (V)**: Also known as **Voltage**. It is the work or energy required to move a unit positive charge from one terminal to another.
  $$v(t) = \frac{dw}{dq}$$
  It is measured in **Volts (V)**, where `1 V = 1 Joule/Coulomb`.

### **Ohm's Law**
At a constant temperature, the potential difference (`V`) across a conductor is directly proportional to the current (`I`) flowing through it.
$$V \propto I \implies V=IR$$
- **Resistance (R)**: The opposition to the flow of current. It is measured in **Ohms ($\Omega$)**. Resistance depends on the material's resistivity ($\rho$), length ($l$), and cross-sectional area ($A$).
  $$R = \frac{\rho l}{A}$$
- **Conductance (G)**: The reciprocal of resistance, representing how easily current flows. It is measured in **Siemens (S)**.
  $$G = \frac{1}{R}$$

![[Attachments/ohms_law.svg|Ohm's Law Circuit]]

### **Circuit States: Open & Short Circuit**
- **Short Circuit**: A path of zero resistance ($R=0$).
    -   **Voltage**: Always zero ($V=0$) across the short.
    -   **Current**: Limited only by the rest of the circuit (can be very high).
- **Open Circuit**: A path of infinite resistance ($R=\infty$).
    -   **Current**: Always zero ($I=0$).
    -   **Voltage**: Determined by the rest of the circuit (can be high).

### **Sign Conventions for Voltage and Current**
- **Passive Sign Convention**: When current enters the positive terminal of an element, the element is **absorbing** power.
- **Active Sign Convention**: When current leaves the positive terminal of an element, the element is **supplying** or delivering power.
- **Voltage Drop/Rise**:
    - A **voltage drop** occurs when moving through an element in the direction of current flow (e.g., across a resistor, from positive to negative). This is typically taken as negative in KVL.
    - A **voltage rise** occurs when moving against the direction of current flow (e.g., across a resistor, from negative to positive) or when moving from the negative to the positive terminal of an ideal voltage source. This is typically taken as positive in KVL.

### **Electric Power (P)**
The rate at which electrical energy is absorbed or delivered by a circuit element. It is measured in **Watts (W)**.
$$p(t) = \frac{dw}{dt} = v(t) \cdot i(t)$$
$$P = VI$$
In a resistive circuit, $P = I^2R = V^2/R$.

---

## Kirchhoff's Laws

### **Kirchhoff’s Current Law (KCL)**
The algebraic sum of currents entering a junction (or node) is zero. This implies that the total current flowing into a node must equal the total current flowing out of it, representing the conservation of charge.
$$\sum I_{in} = \sum I_{out} \quad \text{or} \quad \sum I_{node} = 0$$

<!-- Missing Image: kcl_diagram.png -->

> For a numerical problem, see: [[Questions#question-2:-find-voltage-$v_{ab}$|Q&A Examples (Voltage)]]

### **Kirchhoff’s Voltage Law (KVL)**
The algebraic sum of all voltages (rises and drops) around any closed path (or loop) in an electric network is zero. This represents the conservation of energy.
$$\sum V = 0$$

<!-- Missing Image: kvl_diagram.png -->

> For numerical problems, see: [[Examples#example-1:-basic-kvl|Examples (Basic KVL)]], [[Questions#question-2:-find-voltage-$v_{ab}$|Q&A Examples (Voltage)]]

---

## DC Circuit Analysis Techniques

### **Series and Parallel Connections of Resistors**

- **Series Connection**: Components are connected end-to-end, providing only one path for the current.
    - **Equivalent Resistance**: The total equivalent resistance ($R_{eq}$) is the sum of individual resistances.
        $$R_{eq} = R_1 + R_2 + \dots + R_n$$
    - **Current**: The current is the same through all resistors in series.
    - **Voltage Division Rule**: In a series circuit, the voltage across any resistor ($R_x$) is given by:
        $$V_x = V_{total} \left( \frac{R_x}{R_{eq}} \right)$$

- **Parallel Connection**: Both ends of all components are connected together, providing multiple paths for the current.
    - **Equivalent Resistance**: The reciprocal of the equivalent resistance is the sum of the reciprocals of individual resistances.
        $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}$$
        For two resistors: $$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$$
    - **Voltage**: The voltage is the same across all resistors in parallel.
    - **Current Division Rule**: For two parallel resistors, the current through one resistor ($R_1$) is given by:
        $$I_1 = I_{total} \left( \frac{R_2}{R_1 + R_2} \right)$$
        Similarly, for $I_2$: $$I_2 = I_{total} \left( \frac{R_1}{R_1 + R_2} \right)$$

<!-- Missing Image: series_parallel_resistors.png -->

> For numerical applications, see: [[Examples#example-4:-current-division|Examples (Current Division)]], [[Examples#example-5:-voltage-division|Examples (Voltage Division)]]

### **Source Types**
- **Ideal Voltage Source**: Provides a constant terminal voltage that is independent of the current drawn from it. It has **zero internal resistance** ($R_{int}=0$).
- **Practical Voltage Source**: Modeled as an ideal voltage source ($V_S$) in series with a small internal resistance ($R_S$). The terminal voltage delivered to a load ($V_L$) drops as the load current ($I_L$) increases: $V_L = V_S - I_L R_S$.
- **Ideal Current Source**: Supplies a constant current regardless of the voltage across its terminals. It has **infinite internal resistance** ($R_{int}=\infty$).
- **Practical Current Source**: Modeled as an ideal current source ($I_S$) in parallel with a large internal resistance ($R_S$). The terminal current delivered to a load ($I_L$) drops as the load voltage ($V_L$) increases: $I_L = I_S - \frac{V_L}{R_S}$.

### **Source Transformation**
A practical voltage source (in series with a resistor) can be converted into an equivalent practical current source (in parallel with the same resistor), and vice versa. This technique simplifies circuits for analysis.

- **Voltage Source to Current Source**: A voltage source $V_S$ in series with a resistor $R_S$ is equivalent to a current source $I_S$ in parallel with the same resistor $R_S$.
  $$I_S = \frac{V_S}{R_S}$$
- **Current Source to Voltage Source**: A current source $I_S$ in parallel with a resistor $R_S$ is equivalent to a voltage source $V_S$ in series with the same resistor $R_S$.
  $$V_S = I_S R_S$$

<!-- Missing Image: source_transformation_diagram.png -->

> For numerical problems, see: [[Examples#example-7:-source-transformation|Examples (Source Transformation)]], [[Questions#question-2:-find-current-using-source-transformation|Q&A (Lecture 3, Q2)]]

### **Star (Y) and Delta ($\Delta$) Transformations**
These transformations are used to simplify complex resistive networks that cannot be reduced using simple series or parallel combinations (e.g., bridge circuits). They allow conversion between a three-terminal Star (Y) configuration and an equivalent Delta ($\Delta$) configuration.

- **Delta to Star Transformation**:
    *   For a delta network with resistors $R_{ab}, R_{bc}, R_{ca}$ connected between terminals A, B, C.
    *   **Logic**: The star resistor connected to a specific node is the product of the two adjacent delta resistors connected to that node, divided by the sum of all three delta resistors.
    $$R_a = \frac{R_{ab}R_{ca}}{R_{ab}+R_{bc}+R_{ca}}$$
    $$R_b = \frac{R_{ab}R_{bc}}{R_{ab}+R_{bc}+R_{ca}}$$
    $$R_c = \frac{R_{bc}R_{ca}}{R_{ab}+R_{bc}+R_{ca}}$$
- **Star to Delta Transformation**:
    *   For a star network with resistors $R_a, R_b, R_c$ connected from a common center node to terminals A, B, C.
    *   **Logic**: The delta resistor between two terminals is the sum of the two star resistors connected to those terminals, plus their product divided by the third (opposite) star resistor.
    $$R_{ab} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_c} = R_a + R_b + \frac{R_a R_b}{R_c}$$
    $$R_{bc} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_a} = R_b + R_c + \frac{R_b R_c}{R_a}$$
    $$R_{ca} = \frac{R_aR_b+R_bR_c+R_cR_a}{R_b} = R_c + R_a + \frac{R_c R_a}{R_b}$$

<!-- Missing Image: star_delta_transform.png -->

> For numerical problems, see: [[Examples#example-8:-star-delta-transformation|Examples (Star-Delta)]], [[Questions#question-2:-delta-to-star-transformation|Q&A (Lecture 7, Q2 & Q3)]]

---

## DC Network Theorems

### **Nodal Analysis**
A systematic method for solving circuits by applying KCL at each principal node (junction of three or more branches) to find the unknown node voltages. Once node voltages are known, currents in any branch can be found using Ohm's Law.

### **Mesh Analysis**
A systematic application of KVL to find unknown mesh currents in a circuit.
**Steps:**
1.  **Assign Mesh Currents**: Assign a unique clockwise (or counter-clockwise) current to each independent mesh.
2.  **Apply KVL to Each Mesh**: Write KVL equations for each mesh.
    *   For a resistor shared between two meshes, the current through it is the algebraic sum or difference of the two mesh currents.
    *   The voltage across a current source in a mesh is unknown and cannot be directly included in a KVL equation. This leads to the **Supermesh** concept.
3.  **Handle Current Sources (Supermesh)**:
    *   **Isolated Current Source**: If a current source is only in one mesh, that mesh's current is directly equal to the source current (mind the direction). No KVL equation is needed for that mesh.
    *   **Shared Current Source (Supermesh)**: If a current source is shared between two meshes, form a "supermesh" by combining these two meshes.
        *   Write a KVL equation around the outer boundary of this supermesh, *treating the current source branch as if it were open*.
        *   Write a KCL (constraint) equation at one of the nodes, expressing the relationship between the two mesh currents and the current source value.
4.  **Solve Simultaneous Equations**: Solve the resulting system of linear equations to find all mesh currents.
> For numerical problems, see: [[Questions#question-1-&-2:-mesh-analysis|Q&A (Lecture 10, Q1 & Q2)]], [[Examples#example-13:-basic-mesh-analysis|Examples (Basic & With Current Sources)]]

### **Superposition Theorem**
In any **linear circuit** with multiple independent sources, the total current through or voltage across any element is the algebraic sum of the current or voltage produced by each independent source acting alone.
**Steps:**
1.  **Activate One Source**: Select one independent voltage or current source.
2.  **Deactivate Other Sources**:
    *   **Voltage Sources**: Replaced by a short circuit (0V).
    *   **Current Sources**: Replaced by an open circuit (0A).
3.  **Calculate Response**: Compute the current or voltage in the desired element due to the active source.
4.  **Repeat**: Repeat steps 1-3 for each independent source in the circuit.
5.  **Algebraic Sum**: Algebraically add the individual responses (contributions) to find the total response in the element. Pay close attention to direction (positive for one direction, negative for opposite).
**Limitations**: This theorem applies to voltage and current, but **not directly to power**, as power is a non-linear quantity ($P=I^2R$).
> For numerical problems, see: [[Questions#determine-the-current-through-the-$2\omega$-resistor-using-superposition-theorem.|Q&A (Superposition Theorem)]], [[Examples#example-16:-superposition-theorem-1|Examples (Superposition)]]

### **Thevenin’s Theorem**
Any two-terminal linear electrical network can be replaced by an equivalent circuit consisting of a single voltage source ($V_{TH}$) in series with a single resistor ($R_{TH}$). This simplifies analysis of complex circuits for varying loads.
**Steps:**
1.  **Find Thevenin Voltage ($V_{TH}$)**:
    *   Remove the load (the component across which you want to find the equivalent circuit).
    *   Calculate the open-circuit voltage across the two terminals where the load was connected. This often requires KVL, KCL, Nodal, or Mesh analysis on the simplified circuit.
2.  **Find Thevenin Resistance ($R_{TH}$)**:
    *   Deactivate all independent sources in the original circuit:
        *   Replace independent voltage sources with a short circuit.
        *   Replace independent current sources with an open circuit.
    *   Calculate the equivalent resistance looking back into the two terminals from where the load was removed.
3.  **Draw Equivalent Circuit**: Construct the Thevenin equivalent circuit with $V_{TH}$ in series with $R_{TH}$.
4.  **Connect Load**: Reconnect the original load to the Thevenin equivalent circuit to find the load current or voltage.

<!-- Missing Image: thevenin_equivalent_circuit.png -->

> For numerical problems, see: [[Questions#obtain-the-thevenin's-equivalent-between-the-terminals-a-&-b.|Q&A (Thevenin's)]], [[Examples#example-19:-thevenin's-theorem-1|Examples (Thevenin's)]]