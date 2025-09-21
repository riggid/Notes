# Examples for Unit 1

### Example 1: Isothermal Compression
A mass of 1.5 kg of air is compressed in a quasi-static process from 0.1 MPa to 0.7 MPa during which PV=constant. If the initial density of air is $1.16~kg/m^{3}$, determine the work done by the system.

#### Solution
The process is isothermal. Work done is given by:
$$ W_{1-2}=p_{1}V_{1}\ln\frac{V_{2}}{V_{1}}=p_{1}V_{1}\ln\frac{p_{1}}{p_{2}} $$
First, find the initial volume $V_1$:
$$ V_1 = \frac{\text{mass}}{\text{density}} = \frac{1.5 \text{ kg}}{1.16 \text{ kg/m}^3} = 1.293 \text{ m}^3 $$
Now, calculate the work:
$$ W_{1-2} = (0.1 \times 10^6 \text{ Pa}) \times (1.293 \text{ m}^3) \times \ln\left(\frac{0.1 \text{ MPa}}{0.7 \text{ MPa}}\right) $$
$$ W_{1-2} = 129300 \times (-1.946) = -251617.8 \text{ J} \approx -251.6 \text{ kJ} $$
The negative sign indicates work is done **on** the system.

---

### Example 2: Polytropic Compression
A mass of gas is compressed in a quasi-static process from 80 kPa, $0.1~m^{3}$ to 0.4 MPa, $0.03~m^{3}$. Assuming P & V are related by $PV^{n}=$ constant, determine the work done by the system.

#### Solution
1.  **Find the polytropic index n**:
    $p_{1}V_{1}^{n}=p_{2}V_{2}^{n} \implies (\frac{p_{1}}{p_{2}})=(\frac{V_{2}}{V_{1}})^{n}$
    Taking the logarithm of both sides:
    $\ln(\frac{80 \text{ kPa}}{400 \text{ kPa}})=n \times \ln(\frac{0.03 \text{ m}^3}{0.1 \text{ m}^3})$
    $\ln(0.2) = n \times \ln(0.3) \implies -1.6094 = n \times (-1.204) \implies n \approx 1.337$
2.  **Calculate the work done**:
    $$ W_{1-2}=\frac{p_{1}V_{1}-p_{2}V_{2}}{n-1} = \frac{(80 \times 0.1)-(400 \times 0.03)}{1.337-1} $$
    $$ W_{1-2} = \frac{8 - 12}{0.337} = \frac{-4}{0.337} \approx -11.87 \text{ kJ} $$

---

### Example 3: Multi-Process Work
Determine the total work done by a gas system following the expansion process shown in the figure (A-B is constant pressure, B-C is polytropic with n=1.3).
- $p_A = p_B = 50 \text{ bar} = 5000 \text{ kPa}$
- $V_A = 0.2 \text{ m}^3$, $V_B = 0.4 \text{ m}^3$, $V_C = 0.8 \text{ m}^3$

#### Solution
1.  **Work for Process A-B (Isobaric)**:
    $W_{A-B} = p_A(V_B - V_A) = 5000 \text{ kPa} \times (0.4 - 0.2) \text{ m}^3 = 1000 \text{ kJ}$
2.  **Work for Process B-C (Polytropic)**:
    First, find $p_C$:
    $p_C = p_B (\frac{V_B}{V_C})^{1.3} = 5000 \text{ kPa} \times (\frac{0.4}{0.8})^{1.3} = 5000 \times (0.5)^{1.3} \approx 2030.6 \text{ kPa}$
    Now calculate the work:
    $W_{B-C} = \frac{p_B V_B - p_C V_C}{n-1} = \frac{(5000 \times 0.4) - (2030.6 \times 0.8)}{1.3 - 1} = \frac{2000 - 1624.48}{0.3} \approx 1251.7 \text{ kJ}$
3.  **Total Work**:
    $W_{Total} = W_{A-B} + W_{B-C} = 1000 + 1251.7 = 2251.7 \text{ kJ}$

---

### Example 4: Cyclic Process Calculation
During one cycle, a working fluid has two work interactions (15 kJ to the fluid, 44 kJ from the fluid) and three heat interactions (75 kJ to the fluid, 40 kJ from the fluid, and one unknown). Evaluate the magnitude and direction of the third heat transfer.

#### Solution
For a cycle, $\sum Q = \sum W$.
- Net Work ($\sum W$): Work *from* fluid is positive, work *to* fluid is negative.
  $\sum W = (+44 \text{ kJ}) + (-15 \text{ kJ}) = 29 \text{ kJ}$
- Net Heat ($\sum Q$): Heat *to* fluid is positive, heat *from* fluid is negative.
  $\sum Q = (+75 \text{ kJ}) + (-40 \text{ kJ}) + Q_3 = 35 \text{ kJ} + Q_3$
- Equating the two:
  $35 + Q_3 = 29 \implies Q_3 = 29 - 35 = -6 \text{ kJ}$
The third heat transfer is **6 kJ from the fluid**.

---

### Example 5: Four-Process Cycle
A closed system undergoes a cycle of 4 processes with $\sum Q = -170$ kJ/cycle. The system completes 100 cycles/min. Complete the table and find the net rate of work output in kW.

#### Solution
- **Net Heat Rate**: $\sum \dot{Q} = -170 \frac{\text{kJ}}{\text{cycle}} \times 100 \frac{\text{cycles}}{\text{min}} = -17000 \frac{\text{kJ}}{\text{min}}$
- **First Law for a cycle**: $\sum \dot{Q} = \sum \dot{W} = -17000 \frac{\text{kJ}}{\text{min}}$
- **First Law for a process**: $\Delta E = Q - W$
- **For a full cycle**: $\sum \Delta E = 0$

1.  **Process a-b**: $\Delta E = 2170 - 0 = 2170$ kJ/min.
2.  **Process b-c**: $\Delta E = -21000 - 0 = -21000$ kJ/min.
3.  **Process c-d**: $W = Q - \Delta E = -2100 - (-36600) = 34500$ kJ/min.
4.  **For the cycle**: $\Delta E_{a-b} + \Delta E_{b-c} + \Delta E_{c-d} + \Delta E_{d-a} = 0$.
    $2170 + (-21000) + (-36600) + \Delta E_{d-a} = 0 \implies \Delta E_{d-a} = 55430$ kJ/min.
5.  **For the cycle**: $Q_{a-b} + Q_{b-c} + Q_{c-d} + Q_{d-a} = -17000$.
    $2170 + (-21000) + (-2100) + Q_{d-a} = -17000 \implies Q_{d-a} = 3930$ kJ/min.
6.  **Process d-a**: $W = Q - \Delta E = 3930 - 55430 = -51500$ kJ/min.
7.  **Net Work Rate**: $\sum \dot{W} = -17000$ kJ/min.
    Net work output in kW = $\frac{17000 \text{ kJ/min}}{60 \text{ s/min}} \approx 283.3 \text{ kW}$.

---

### Example 6: Stirring Work
1.5 kg of liquid with a specific heat of $2.5~kJ/kg \cdot K$ is stirred in a well-insulated chamber, causing the temperature to rise by $15^{\circ}C$. Find $\Delta E$ and $W$.

#### Solution
- The chamber is well-insulated, so heat transfer $Q=0$.
- The change in internal energy ($\Delta E$ or $\Delta U$) is due to the temperature change:
  $\Delta E = mC\Delta T = 1.5 \text{ kg} \times 2.5 \frac{\text{kJ}}{\text{kg}\cdot K} \times 15 \text{ K} = 56.25 \text{ kJ}$
- Using the First Law for a process:
  $\Delta E = Q - W \implies 56.25 = 0 - W \implies W = -56.25 \text{ kJ}$
The work is negative because it is done **on** the system (the liquid).

---

### Example 7: Hydraulic Turbine-Generator
Water is supplied at 5000 kg/s to a turbine from a lake with an elevation difference of 50 m. The electric power generated is 1862 kW and the generator efficiency is 95%. Find (a) the overall efficiency, (b) the turbine's mechanical efficiency, and (c) the shaft power.

#### Solution
(a) **Overall Efficiency**:
- Mechanical energy supplied by the fluid:
  $|\Delta\dot{E}_{mech}|=\dot{m}gh = (5000 \frac{\text{kg}}{\text{s}})(9.81 \frac{\text{m}}{\text{s}^2})(50 \text{ m}) = 2,452,500 \text{ W} = 2452.5 \text{ kW}$
- Overall efficiency:
  $\eta_{overall} = \frac{\dot{W}_{elect,out}}{|\Delta\dot{E}_{mech}|} = \frac{1862 \text{ kW}}{2452.5 \text{ kW}} \approx 0.76$ or 76%
(b) **Turbine Efficiency**:
- $\eta_{overall} = \eta_{turbine} \times \eta_{generator}$
  $\eta_{turbine} = \frac{\eta_{overall}}{\eta_{generator}} = \frac{0.76}{0.95} = 0.80$ or 80%
(c) **Shaft Power**:
- $\dot{W}_{shaft,out} = \eta_{turbine} \times |\Delta\dot{E}_{mech}| = 0.80 \times 2452.5 \text{ kW} = 1962 \text{ kW}$

---

### Example 8: Engine Performance Test 1
A single-cylinder 4-stroke engine test gives: Brake drum diameter = 60 cm, Rope diameter = 3 cm, Load = 25 kg, Spring balance = 5 kg, Speed = 400 rpm, IP = 3.141 kW. Calculate BP and Mechanical Efficiency.

#### Solution
1.  **Brake Power (BP)**:
    - Net Force = $(W-S) \times g = (25-5) \text{ kg} \times 9.81 \text{ m/s}^2 = 196.2 \text{ N}$
    - Effective Radius = $\frac{D+d}{2} = \frac{0.6+0.03}{2} = 0.315 \text{ m}$
    - Torque (T) = Force $\times$ Radius = $196.2 \times 0.315 = 61.8 \text{ Nm}$
    - $BP = \frac{2\pi NT}{60 \times 1000} = \frac{2\pi \times 400 \times 61.8}{60000} \approx 2.589 \text{ kW}$
2.  **Mechanical Efficiency**:
    - $\eta_{mech} = \frac{BP}{IP} = \frac{2.589}{3.141} \approx 0.824$ or 82.4%

---

### Example 9: Engine Performance Test 2
A 4-stroke diesel engine test gives: Speed = 250 rpm, Brake load = 70 kg, Brake drum diameter = 2m, Fuel consumption = 0.1 L/min, Fuel specific gravity = 0.78, CV = 43900 kJ/kg, IP = 24.54 kW. Find BP and efficiencies.

#### Solution
1.  **Brake Power (BP)**:
    - Torque (T) = $F \times R = (70 \times 9.81) \times 1 = 686.7 \text{ Nm}$
    - $BP = \frac{2\pi NT}{60000} = \frac{2\pi \times 250 \times 686.7}{60000} \approx 17.98 \text{ kW}$
2.  **Mechanical Efficiency**:
    - $\eta_{mech} = \frac{BP}{IP} = \frac{17.98}{24.54} \approx 0.733$ or 73.3%
3.  **Fuel Mass Flow Rate ($m_f$)**:
    - Volume flow = $0.1 \frac{\text{L}}{\text{min}} = \frac{0.1 \times 10^{-3}}{60} \frac{\text{m}^3}{\text{s}}$
    - Density ($\rho$) = $0.78 \times 1000 = 780 \text{ kg/m}^3$
    - $m_f = \rho \times \text{Volume flow} = 780 \times \frac{0.1 \times 10^{-3}}{60} = 0.0013 \text{ kg/s}$
4.  **Brake Thermal Efficiency**:
    - $\eta_{Bth} = \frac{BP}{m_f \times CV} = \frac{17.98}{0.0013 \times 43900} \approx 0.315$ or 31.5%
5.  **Indicated Thermal Efficiency**:
    - $\eta_{Ith} = \frac{IP}{m_f \times CV} = \frac{24.54}{0.0013 \times 43900} \approx 0.43$ or 43%

---

### Example 10: Engine Design Calculation
A four-cylinder, four-stroke petrol engine develops 30 kW BP at 2500 rpm. The mean effective pressure is 8 bar and mechanical efficiency is 80%. Calculate the diameter and stroke of each cylinder, assuming L=1.5d.

#### Solution
1.  **Indicated Power (IP)**:
    - $IP = \frac{BP}{\eta_{mech}} = \frac{30}{0.8} = 37.5 \text{ kW}$
2.  **Use IP formula to find L and d**:
    - $IP = \frac{n \times p_m \times L \times A \times K}{60}$ (where IP is in kW and pm is in kPa)
    - $37.5 = \frac{4 \times (8 \times 100 \text{ kPa}) \times (1.5d) \times (\frac{\pi}{4}d^2) \times (\frac{1}{2})}{60}$
    - $37.5 = \frac{4 \times 800 \times 1.5 \times \frac{\pi}{4} \times 0.5 \times d^3 \times 2500}{60}$
    - Let's use the standard formula where $N$ is in rpm:
    - $IP = \frac{p_m L A N K n}{60}$
    - $37500 = \frac{(8 \times 10^5 \text{ Pa}) \times (1.5d) \times (\frac{\pi}{4}d^2) \times 2500 \times 0.5 \times 4}{60}$
    - $37500 = \frac{(8 \times 10^5) \times (1.5d^3) \times (\pi/4) \times 5000}{60}$
    - $d^3 = \frac{37500 \times 60}{8 \times 10^5 \times 1.5 \times (\pi/4) \times 5000} \approx 0.000477$
    - $d = \sqrt[3]{0.000477} \approx 0.078 \text{ m} = 78 \text{ mm}$
    - **Stroke (L)** = $1.5 \times 78 = 117 \text{ mm}$