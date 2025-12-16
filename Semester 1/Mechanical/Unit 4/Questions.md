---
dg-publish: true
---

# [[Mechanical|Back]]
***
[[Semester 1/Mechanical/Unit 4/Core Notes|Core Notes]] | [[Semester 1/Mechanical/Unit 4/Examples|Examples]] | [[Semester 1/Mechanical/Unit 4/Q&A|Questions]]
***
# Unit 4: Modern Machining, Heat Treatment, Control Systems, and Robotics - Practice Questions

---

## 1. Metal Cutting Fundamentals: Machining Operations and Chip Formation

**1. Define "machining" or "metal cutting" and state the three major functions of a machine tool.**
*   **Answer**: Machining is material removal by shearing/cutting. Machine tool functions: rigid support of workpiece/tool, provide relative motion, provide speeds/feeds. See [Core Notes.md](Core%20Notes.md#111-functions-of-a-machine-tool).

**2. Identify the three main categories of chips formed during metal cutting.**
*   **Answer**: Continuous chip, Discontinuous chip, Continuous chip with built-up edge. See [Core Notes.md](Core%20Notes.md#123-categories-of-chips-formed-during-metal-cutting).

**3. Explain "secondary shear" in metal cutting and its cause.**
*   **Answer**: Occurs when newly formed chips compress and shear off previously welded chip material from the tool's rake surface, due to friction-induced welding. See [Core Notes.md](Core%20Notes.md#121-primary-and-secondary-shear-zones).

**4. Explain the primary difference between Conventional Machining and Non-Conventional Machining processes, including their primary energy sources and give examples of each.**
*   **Answer**: **Conventional**: Physical tool contact, chip removal, mechanical energy (e.g., Turning, Milling). **Non-Conventional**: Often no direct contact, material removed via thermal/chemical/electrical/abrasive energy, no traditional chips (e.g., AJM, EBM). See [Core Notes.md](Core%20Notes.md#13-conventional-vs-non-conventional-machining).

---

## 2. Lathe Operations: Turning, Taper Turning, and Work Holding

**5. Describe the function of the Headstock and Tailstock components on a Lathe machine.**
*   **Answer**: **Headstock**: Left end, contains spindle (speed control), distributes power. **Tailstock**: Right end, movable, supports workpiece, holds drills/reamers, used for taper turning offset. See [Core Notes.md](Core%20Notes.md#211-main-parts-of-a-lathe-machine).

**6. Explain "Plain Turning" and "Facing" operations performed on a Lathe machine, including their purpose and workpiece/tool motions.**
*   **Answer**: **Plain Turning**: Produce cylindrical surface, workpiece rotates, tool feeds parallel to axis. **Facing**: Produce flat end surfaces, workpiece rotates, tool feeds perpendicular to axis. See [Core Notes.md](Core%20Notes.md#22-lathe-operations-turning-facing-taper-turning-thread-cutting-knurling-parting).

**7. Describe at least four different methods of "Taper Turning" on a Lathe, explaining how each achieves the conical shape.**
*   **Answer**: Form Tools, Swiveling Compound Rest, Offsetting Tailstock, Taper Turning Attachment. Each uses different tool/workpiece setup or motion to generate conical surface. See [Core Notes.md](Core%20Notes.md#22-lathe-operations-turning-facing-taper-turning-thread-cutting-knurling-parting).

**8. For quickly centering and clamping a cylindrical part on a lathe, what type of chuck is most efficient and why?**
*   **Answer**: A **three-jaw (self-centering) chuck** is most efficient. All jaws move simultaneously, automatically centering round/symmetrical jobs. See [Core Notes.md](Core%20Notes.md#23-work-holding-devices-chucks) and [Examples.md](Examples.md#Example%202:%20Efficient%20Chuck%20for%20Cylindrical%20Part).

**9. Explain the calculation of machining time and determination of roughing/finishing passes for a single turning operation.**
*   **Answer**: Machining time $t = \frac{L + L_o}{f \times N}$. Number of passes derived from total stock, finish allowance, and depth of cut. See [Core Notes.md](Core%20Notes.md#24-machining-time-calculation-for-turning-operations).

**10. Describe the Drilling operation and the main parts and functions of a Twist Drill's spiral flutes.**
*   **Answer**: Drilling makes holes with a rotating drill bit. Twist drill has body and shank. Flutes remove chips, admit coolant, curl chips, and form cutting edges. See [Core Notes.md](Core%20Notes.md#252-twist-drill-tool-parts-and-flute-functions).

**11. Differentiate between "Up Milling (Conventional Milling)" and "Down Milling (Climb Milling)" in terms of cutter rotation vs. table movement and impact on cutting forces/stability.**
*   **Answer**: **Up Milling**: Cutter rotates opposite to feed; forces lift workpiece (needs rigid clamping). **Down Milling**: Cutter rotates same direction as feed; forces push workpiece down (improves stability). See [Core Notes.md](Core%20Notes.md#262-up-milling-conventional-milling-vs-down-milling-climb-milling).

**12. Compare the construction and operational capabilities of a "Horizontal Milling Machine" versus a "Vertical Milling Machine."**
*   **Answer**: Differentiated by spindle orientation (horizontal vs. vertical), cutter movement, mounting, tilt, and typical operations. See [Core Notes.md](Core%20Notes.md#263-horizontal-vs-vertical-milling-machines).

---

## 3. Non-Conventional Machining Processes (UCM): Advanced Material Removal

**13. What distinguishes Unconventional Machining Processes (UCM) from conventional machining? List its main characteristics and suitability.**
*   **Answer**: UCM uses non-mechanical energy (thermal, chemical, electrical) to remove material, often without direct tool contact, with no traditional chip formation. Suitable for hard materials, intricate shapes. See [Core Notes.md](Core%20Notes.md#312-distinction-from-conventional-machining-and-main-characteristics).

**14. Describe the principle of operation for Abrasive Jet Machining (AJM). Explain how material removal occurs and list its key advantages and limitations.**
*   **Answer**: High-velocity abrasive particle jet causes tiny brittle fractures. Advantages: suitable for brittle/hard materials, intricate shapes, no direct contact, low heat. Limitations: low MRR, not for ductile materials. See [Core Notes.md](Core%20Notes.md#32-abrasive-jet-machining-ajm) and [Examples.md](Examples.md#Example%203:%20Non-Conventional%20Machining%20for%20Ceramic%20Holes).

**15. Explain the principle of operation of Electron Beam Machining (EBM). Describe the mechanism of material removal and list at least three advantages and three disadvantages.**
*   **Answer**: Focused high-speed electron beam transfers kinetic energy to melt/vaporize material. Advantages: no burr/HAZ (controlled), fast for tough alloys, high precision. Disadvantages: high cost, vacuum needed, complex setup. See [Core Notes.md](Core%20Notes.md#33-electron-beam-machining-ebm).

---

## 4. Heat Treatment Processes: Tailoring Material Properties

**16. Define Heat Treatment and explain its purpose, listing properties controlled.**
*   **Answer**: Process of heating/cooling metals to control microstructure and mechanical properties (hardness, toughness, ductility). See [Core Notes.md](Core%20Notes.md#4-heat-treatment-processes-tailoring-material-properties).

**17. Describe the "Normalizing" process, including its process steps, main purposes, and effects on steel properties.**
*   **Answer**: Heat steel 30-50°C above critical point, hold, cool in still air. Purposes: refine grain, remove stress, improve properties. Effects: higher yield/tensile strength, lower ductility than annealed steel. See [Core Notes.md](Core%20Notes.md#41-normalizing-process).

**18. Explain the "Annealing" heat treatment process. Discuss its general purposes and differentiate between "Process Annealing" and "Full Annealing."**
*   **Answer**: Heating metal and slow cooling. Purposes: soften for machining, remove stress, increase ductility, refine grain. **Process Annealing**: below/near lower critical temp (for cold-worked ductility). **Full Annealing**: above upper critical temp, very slow furnace cool (maximum softness, full grain refinement). See [Core Notes.md](Core%20Notes.md#42-annealing-process).

**19. Describe the "Tempering" heat treatment process. Explain its definition, primary purposes, and differentiate between its three main temperature-based types.**
*   **Answer**: Reheating hardened steel below critical range to reduce hardness/stress, increase ductility by transforming martensite. Types: Low (150-250°C), Medium (350-450°C), High (500-600°C), each yielding different hardness/toughness balance. See [Core Notes.md](Core%20Notes.md#44-tempering-process).

**20. Explain "Carburizing" as a case hardening process. Describe its effect and intended microstructure.**
*   **Answer**: Heating low-carbon steel in carbon-rich atmosphere to absorb carbon into surface (case). After quenching, case becomes hard martensite, core remains tough. See [Core Notes.md](Core%20Notes.md#452-carburizing).

**21. Describe "Cyaniding" as a case hardening process, including its process and advantages.**
*   **Answer**: Rapid surface hardening by heating steel in molten cyanide salt bath, followed by quenching. Forms thin case of carbides/nitrides. Economical. See [Core Notes.md](Core%20Notes.md#453-cyaniding).

**22. Explain "Nitriding" as a case hardening process, noting its key advantage regarding hardness.**
*   **Answer**: Exposing steel to ammonia gas at high temp to diffuse nitrogen into surface, forming hard nitrides. Advantage: Produces a harder case than carburizing. See [Core Notes.md](Core%20Notes.md#454-nitriding).

**23. Evaluate the effectiveness of "Induction Hardening" for large steel components. Discuss its advantages (distortion, core properties) and limitations.**
*   **Answer**: Effective surface hardening via rapid, localized induction heating. Advantages: low distortion, maintained core toughness, localized hardness. Limitations: high cost, precise control, material specific. See [Core Notes.md](Core%20Notes.md#46-induction-hardening).

---

## 5. Control Systems: Open-Loop, Closed-Loop, and Components

**24. Discuss the concepts of "Open Loop" and "Closed Loop" control systems. Provide a clear example for each to illustrate the presence or absence of a feedback mechanism.**
*   **Answer**: **Open Loop**: No feedback (e.g., electric heater without thermostat). **Closed Loop**: Has feedback, output adjusts input (e.g., electric heater with person/thermometer). See [Core Notes.md](Core%20Notes.md#51-basic-forms-of-control-systems).

**25. List and briefly explain the basic elements of a control system.**
*   **Answer**: Comparison Element (produces error signal), Feedback Loop (signal from output), Control Unit (decides action), Correction Unit (implements change), Process Unit (system controlled), Measurement Unit (actual output sensor). See [Core Notes.md](Core%20Notes.md#52-basic-elements-of-a-control-system).

**26. Differentiate between a Sensor and a Transducer.**
*   **Answer**: A **sensor** produces a signal related to a measured quantity. A **transducer** converts one form of energy/signal to another. All sensors are transducers, but not all transducers are sensors. See [Core Notes.md](Core%20Notes.md#53-sensors-and-transducers).

---

## 6. Advanced Manufacturing Systems: NC, CNC, AM, FDM, and Robotics

**27. Define Numerical Control (NC) and explain its basic components. What were its main drawbacks?**
*   **Answer**: Programmable automation controlled by numbers/symbols from punched tape. Components: Program, Controller, Machine Tool. Drawbacks: tape wear, limited flexibility, programming mistakes. See [Core Notes.md](Core%20Notes.md#611-numerical-control-nc).

**28. Evaluate the key advantages a company gains by switching from a conventional NC system to a CNC system, focusing on program management, flexibility, and automation.**
*   **Answer**: CNC advantages: superior program storage/editing (memory-based), increased flexibility (adaptable programs, fixed cycles), higher automation (reduced intervention, improved consistency/quality). See [Core Notes.md](Core%20Notes.md#612-computer-numerical-control-cnc).

**29. Define Additive Manufacturing (AM) and explain its core principle. Discuss its broad impact and list at least three distinct domains where it is currently used.**
*   **Answer**: Layer-by-layer fabrication from digital model. Core principle: digital-to-physical conversion allowing complex geometries. Impact: new opportunities, diverse domains (healthcare, aerospace, automotive, construction, retail, R&D). See [Core Notes.md](Core%20Notes.md#621-additive-manufacturing-am).

**30. Describe the Material Extrusion process, specifically Fused Deposition Modelling (FDM). Explain its fundamental mechanism and detail the four key stages of the FDM process.**
*   **Answer**: FDM pushes molten thermoplastic filament through heated nozzle, depositing layer-by-layer. Stages: Part Preparation, FDM Machine Setup, FDM Printing, FDM Part Removal. See [Core Notes.md](Core%20Notes.md#622-material-extrusion--fused-deposition-modelling-fdm).

**31. Justify why industrial robots are considered commercially and technologically important in modern manufacturing, providing three distinct reasons.**
*   **Answer**: 1) Substitution in hazardous environments. 2) Consistency and repeatability. 3) Reprogrammability and flexibility. 4) Computer Integrated Manufacturing (CIM). See [Core Notes.md](Core%20Notes.md#631-reasons-for-commercial-and-technological-importance-of-industrial-robots).

---
# [[Mechanical|Back]]