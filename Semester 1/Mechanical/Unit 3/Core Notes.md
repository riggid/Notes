
---

# Unit 3: Manufacturing Techniques and Metal Joining Processes

## I. Introduction to Manufacturing

**Manufacturing** is defined as the comprehensive process of converting raw materials into finished, functional products1. It is a central activity in mechanical engineering that requires balancing technical capabilities with economic factors to achieve the lowest cost while maintaining quality2222.

### Classification of Processes

Manufacturing operations are classified into five distinct groups based on the material transformation stage333:

|**Process Group**|**Primary Function**|**Examples**|
|---|---|---|
|**Primary Shaping**|Creating the initial bulk form.|Casting, Forming (rolling, extrusion, forging)4.|
|**Machining**|Achieving dimensional accuracy and final shape.|Turning, Drilling, Milling, Planing5.|
|**Surface Finishing**|Improving surface quality.|Buffing, Lapping, Anodising6.|
|**Joining**|Uniting discrete components.|Welding, Soldering, Brazing7.|
|**Property Change**|Imparting specific mechanical/physical characteristics.|Heat treatment, shot peening8.|

**Engineering Trade-off:** There is a natural hierarchy where primary shaping (like casting) establishes geometry with high throughput but lower precision, while subsequent machining acts as a corrective measure to achieve final tolerance 9.

---

## II. Metal Casting (Founding)

**Casting** (or Founding) involves pouring molten metal into a refractory mould cavity shaped like the desired object and allowing it to solidify 10.

### 2.1 Sand Casting

This is the principal technique utilizing sand as the refractory material11.

- **Advantages:** versatile (ferrous/non-ferrous), creates complex shapes, low tooling cost (ideal for trial/small lots), and produces components without directional properties 12.
    
- **Limitations:** Poor dimensional accuracy/surface finish (requires machining), labor-intensive, and prone to defects from moisture 13.
    

### 2.2 Terminology of Sand Moulding

- **Flask:** The structure holding the sand.
    
    - **Drag:** Lower flask14.
        
    - **Cope:** Upper flask15.
        
- **Pattern:** A replica of the final object used to create the mould cavity, incorporating allowances16.
    
- **Parting Line:** The dividing surface between the Cope and Drag17.
    
- **Core:** Refractory insert for creating hollow internal cavities18.
    
- **Gating System:**
    
    - **Pouring Basin:** Funnel for receiving molten metal19.
        
    - **Sprue:** Vertical passage controlling flow rate20.
        
    - **Runner:** Horizontal passage regulating flow to the cavity21.
        
    - **Gate:** Precise entry point into the mould cavity22.
        
    - **Riser:** Reservoir that feeds molten metal back into the cavity to compensate for **liquid shrinkage** during solidification 23.
        

### 2.3 Sand Moulding Procedure

The construction follows a precise sequence24:

1. **Drag Foundation:** Drag pattern is placed on a bottom board; facing sand is sprinkled to prevent sticking 25.
    
2. **Ramming (Drag):** Moulding sand is poured and rammed uniformly. **Uniformity is critical**: excessive ramming lowers permeability (traps gas), while insufficient ramming causes collapse 26.
    
3. **Venting:** Vent holes (1-2 mm) are created to allow gas escape27.
    
4. **Cope Assembly:** The drag is inverted. The cope pattern is aligned with dowel pins. Sprue and riser pins are positioned 28.
    
5. **Ramming (Cope):** Sand is filled and rammed around the pins29.
    
6. **Extraction:** Pins are removed. The cope is lifted. Patterns are withdrawn using draw spikes and **rapping** (which slightly enlarges the cavity) 30.
    
7. **Final Assembly:** Gates/runners are cut, the cope is replaced, and weights are added to resist metallostatic force31.
    

### 2.4 Properties of Moulding Sand

- **Refractoriness:** Ability to withstand high temps without fusing32.
    
- **Green Strength:** Strength of moist sand to retain shape during handling33.
    
- **Dry Strength:** Strength after moisture evaporates; essential to withstand pouring forces 34.
    
- **Permeability:** Porosity allowing steam and gases to escape; low permeability causes blow holes 35.
    
- **Collapsibility:** Ability of sand to break down after solidification. This is crucial to allow the metal to contract (solid shrinkage) without forming **hot tears** or warping 36.
    

### 2.5 Pattern Allowances

Corrections applied to the pattern to account for process physics37.

|**Allowance Type**|**Phenomenon Compensated**|**Adjustment**|
|---|---|---|
|**Shrinkage**|Volume contraction during solid cooling.|Pattern made oversized38.|
|**Finish/Machining**|Poor surface finish of casting.|Extra material added for removal39.|
|**Draft**|Friction on vertical faces during withdrawal.|Tapered vertical faces40.|
|**Shake**|Cavity enlargement due to rapping.|Dimensions reduced41.|
|**Distortion**|Warping of non-uniform sections.|Pattern pre-deformed in opposite direction42.|

### 2.6 Casting Defects

- **Gas Defects:** **Blow Holes** (internal) or **Open Blows** (surface) caused by trapped steam due to low permeability or high moisture 43. **Pin Holes** are caused by dissolved hydrogen44.
    
- **Shrinkage Cavities:** Caused by liquid shrinkage; remedied by proper Riser design 45.
    
- **Mould Defects:** **Cuts/Washes** (erosion), **Swell** (enlargement), **Drop** (loose sand falling in) 46.
    
- **Pouring Defects:** **Mis Runs** (incomplete filling) or **Cold Shuts** (streams fail to fuse) due to low fluidity 47.
    
- **Metallurgical:** **Hot Tears** (cracks) due to poor mould collapsibility restricting contraction48.
    

### 2.7 Precision Investment Casting (Lost Wax)

Used for high-value components (e.g., turbine blades) requiring excellent finish and accuracy 49.

1. **Pattern:** Molten wax is injected into a die50.
    
2. **Shell:** Wax cluster is dipped in ceramic slurry and stuccoed with refractory grains51.
    
3. **Dewaxing:** Heated to melt out wax and cure the ceramic shell52.
    
4. **Pouring:** Molten metal is poured; shell is broken off after solidification53.
    

---

## III. Metal Forming Processes

Metal forming involves solid-state deformation using force to cause plastic flow 54.

### 3.1 Thermodynamic Classification

Processes are divided by the **Recrystallization Temperature ($T_{rec}$)**, which is roughly $1/3$ to $1/2$ of the melting point 55.

|**Feature**|**Hot Working (Above Trec​)**|**Cold Working (Below Trec​)**|
|---|---|---|
|**Deformation**|Unlimited (no strain hardening)56.|Limited (yield strength constraint)57.|
|**Properties**|High ductility, refined microstructure58.|Increased strength/hardness (strain hardening)59.|
|**Surface**|Poor (oxidation/scaling)60.|Excellent finish and dimensional control61.|

### 3.2 Bulk Deformation Processes

1. **Rolling:** Compressing metal between rotating rolls. Usually hot working for standard shapes (I, T, L sections) 62.
    
2. **Forging:** Shaping via impact or pressure63.
    
    - **Drawing Out:** Elongates metal, reduces cross-section64.
        
    - **Upsetting:** Increases cross-section, reduces length65.
        
    - **Drop Forging:** Impact blows in closed dies66.
        
    - **Press Forging:** Continuous hydraulic squeezing67.
        
3. **Extrusion:** Forcing metal through a die opening68.
    
    - **Forward:** Metal flows with ram; high friction69.
        
    - **Backward:** Metal flows opposite to ram; low friction but complex handling 70.
        
4. **Drawing:**
    
    - **Wire Drawing:** Pulling rod through a conical die (Cold working) 71.
        
    - **Deep Drawing:** Forming cups/shells from sheet metal where height > half diameter72.
        

---

## IV. Metal Joining Processes

### 4.1 Classification

- **Temporary:** Bolts, screws73.
    
- **Semi-Permanent:** Rivets (requires destroying fastener to separate)74.
    
- **Permanent:** Welding (requires destroying part to separate)75.
    

**Preparation:** Essential for success. Thick edges require **Edge Preparation** (V or U shape) for penetration. Surfaces must be **Cleaned** of oil (solvents) and oxides (pickling/wire brush) 76.

### 4.2 Electric Arc Welding

Melts metals using a plasma arc ($\approx 6000^\circ\text{C}$)77.

- **Polarity (DC):**
    
    - **Electrode Positive (Reverse):** Deeper penetration (heat on workpiece)78.
        
    - **Electrode Negative (Straight):** Faster deposition (heat on electrode)79.
        
- **Electrode Coating (Flux) Functions:**
    
    1. **Shielding:** Generates inert gas to block atmospheric O/N/H80.
        
    2. **Slag:** Forms protective layer over molten pool81.
        
    3. **Cooling:** Slows cooling to prevent brittleness82.
        
    4. **Stability:** Stabilizes the arc83.
        

### 4.3 Gas Welding (Oxy-Acetylene)

Uses fuel gas combustion for heat. Flame type is controlled by Oxygen:Acetylene ratio84:

- **Neutral ($\approx 1:1$):** Balanced heat, general welding85.
    
- **Reducing (Excess Acetylene):** Reddish feather, introduces carbon, used for high carbon steels86.
    
- **Oxidizing (Excess Oxygen):** Hottest, used for Copper/Zinc alloys87.
    

### 4.4 Advanced Arc Welding (MIG vs TIG)

Both use inert gas (Argon/Helium) for shielding88.

|**Feature**|**MIG (GMAW)**|**TIG (GTAW)**|
|---|---|---|
|**Electrode**|Consumable Wire89.|Non-consumable Tungsten90.|
|**Speed**|High (fast metal transfer)91.|Slow92.|
|**Quality**|Good for thick plates93.|Extremely smooth, no slag/flux94.|
|**Use Case**|Large scale manufacturing95.|Food processing, chemical, thin sheets96.|

### 4.5 Welding Defects

- **Cracks:** Caused by thermal stress or incompatible filler97.
    
- **Porosity:** Trapped gas due to moisture or poor shielding98.
    
- **Undercutting:** Groove melted into base metal due to excessive current99.
    
- **Slag Inclusion:** Non-metallic residue trapped between passes100.
    
- **Distortion:** Warping due to uneven heating/cooling101.
    

### 4.6 Allied Processes (Low Temp)

Techniques using filler metal with a melting point generally below that of the base metal.

- **Soldering:** Filler melts $< 450^\circ\text{C}$102.
    
- **Brazing:** Filler (spelter) melts $> 450^\circ\text{C}$; stronger than soldering103.
    
- **Braze Welding:** Uses groove preparation similar to fusion welding but with brazing filler104.
    

---

### Additional Context: Industrial Steelmaking

Note: While the text focuses on manufacturing, the assignment provided a diagram of the raw material phase.

Electric Arc Furnace (EAF): A method for steelmaking where graphite electrodes generate an arc to melt the charge (molten bath) within a refractory-lined hearth. This is often followed by a Continuous Casting Process where molten steel flows via a Tundish into a water-cooled mold to form solid shapes (billets/slabs) which are then cut to length 105.