---
dg-publish: true
---

# [[../Mechanical|Back]]
***
# Numerical Examples: Thermodynamics

### Example 1: Isothermal Work
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

### Example 2: Polytropic Work
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

### Example 4: First Law for a Cycle
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

### Example 6: Stirring Work
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

### Example 8: IC Engine Performance
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