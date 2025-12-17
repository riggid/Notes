---
dg-publish: true
---
# [[../Physics|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]
***
# Unit 4: Lasers, Optical Fibers, and Dielectrics - MCQs

## Quantum Transitions and Einstein's Coefficients

### Question 1
For a system to have a predominant stimulated photon emission, the ratio of the rate of stimulated emission to the rate of spontaneous emission should be
*   A) greater than 1
*   B) equal to 1
*   C) less than 1
*   D) greater than or equal to 1

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) greater than 1**
</details>

### Question 2
In the case of stimulated emission,
*   A) Coherent photons are emitted
*   B) Incoherent photons are emitted
*   C) The energy of the stimulating photon is not equal to that of the emitted photon
*   D) Metastable states are not involved

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) Coherent photons are emitted**
</details>




---

## Laser Action Conditions (2, 3, 4 Level Systems)

### Question 1
LASER emission is not possible in a two level system, because
*   A) $N_1 < N_2$
*   B) $N_1 > N_2$
*   C) Temperature is positive
*   D) Population inversion is not achieved

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) Population inversion is not achieved**
> (At best $N_2 = N_1$ with saturation).
</details>

### Question 2
The laser output is continuous when
*   A) Stimulated emission is dominant
*   B) Population inversion is achieved
*   C) Absorption and emission energy levels are decoupled
*   D) Ground state is highly populated

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Absorption and emission energy levels are decoupled**
> (Typically implies a 4-level system where lower laser level empties fast).
</details>

### Question 3
An atom has energy levels uniformly separated by 1.2 eV. The ratio of the number of atoms in the 7th excited state to that in the 5th excited state at 300K is
*   A) $522.4 \times 10^{-41}$
*   B) $52.24 \times 10^{-41}$
*   C) $5.224 \times 10^{-41}$
*   D) $0.5224 \times 10^{-41}$

<details>
<summary><strong>Check Answer</strong></summary>

> **Status: Cannot Verify**
> $\Delta E = (7-5) \times 1.2 = 2.4$ eV. Ratio $N_7/N_5 = e^{-\Delta E / kT}$.
> $kT \approx 0.0259$ eV. $\Delta E / kT \approx 2.4 / 0.0259 \approx 92.6$.
> $e^{-92.6} \approx 6 \times 10^{-41}$. Matches order of magnitude.
</details>

### Question 4
Absorption and emission levels are completely decoupled in a
*   A) 2 level laser
*   B) 3 level laser
*   C) 4 level laser
*   D) 3 & 4 level laser

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) 4 level laser**
</details>

### Question 5
The condition for stimulated emission to dominate absorption transition is
*   A) There should be more atoms in higher energy level than in the lower energy level
*   B) There exists population multiplication in both the higher and lower levels
*   C) There should be more atoms in the lower energy level than in the higher energy level
*   D) To activate the resonant excited states

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) There should be more atoms in higher energy level than in the lower energy level**
> (Population inversion).
</details>

---

## Laser Components: Cavity & Pumping

### Question 1
In a laser, the mirrors on either side of the cavity is to
*   A) Allow all possible wavelengths to escape out of the cavity
*   B) Make the emitted photons incoherent
*   C) Decrease the intensity of laser beam
*   D) Allow same photons continue to cause further batches of stimulating transitions

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) Allow same photons continue to cause further batches of stimulating transitions**
> (Positive feedback).
</details>

### Question 3
In a laser, pumping from external source is used to achieve ________
*   A) Ionization
*   B) Scattering
*   C) Population inversion
*   D) Absorption

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Population inversion**
</details>

### Question 4
The process in which, population inversion is achieved by heating the laser medium is
*   A) Thermal pumping
*   B) Electric pumping
*   C) Optical pumping
*   D) Chemical pumping

<details>
<summary><strong>Check Answer</strong></summary>

> **Status: Ambiguous**
> Heating usually thermalizes population (anti-inversion). Gas dynamic lasers use thermal expansion?
> Context implies "none of the above" or specific type? Or is it a trick?
> Perhaps confusion with "Thermal equilibrium"? No.
> Assuming standard types: Optical (light), Electrical (discharge). Thermal pumping exists in gas dynamic lasers but rare in basic syllabus.
</details>

---

## Cavity Laws & Gain

### Question 1
The gain in intensity of photons in an optical cavity of laser system is due to
*   A) Absorption
*   B) Scattering
*   C) Transmission
*   D) Reflection

<details>
<summary><strong>Check Answer</strong></summary>

> **Status: Context Dependent**
> Gain is due to **Stimulated Emission** (not listed).
> Intensity *growth* in cavity relies on Reflection (feedback)? Or maybe the question implies mechanism of amplification?
> If "gain" refers to limiting loss -> Reflection?
> If gain refers to process -> Stimulated Emission.
> Assuming "Reflection" allows the gain to build up.
</details>

### Question 2
Which one of the following statement is correct in the case of laser system?
*   A) Both the mirrors are partially reflecting
*   B) Photons are absorbed, scattered, transmitted and reflected
*   C) Intensity of photons decreases
*   D) Intensity of photons increases

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) Intensity of photons increases**
> (Amplification).
</details>

### Question 4
When a photon beam of intensity 30,000 passes through a cavity of length 1cm, the transmitted intensity was found to be 12,097. The loss coefficient is given by
*   A) $0.908 \text{ cm}^{-1}$
*   B) $9.08 \text{ cm}^{-1}$
*   C) $90.8 \text{ cm}^{-1}$
*   D) $908 \text{ cm}^{-1}$

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) $0.908 \text{ cm}^{-1}$**
> $I = I_0 e^{-\alpha x} \implies 12097 = 30000 e^{-\alpha(1)}$.
> $e^{-\alpha} = 12097/30000 \approx 0.403$.
> $-\alpha = \ln(0.403) \approx -0.908$.
</details>

---

## Laser Properties

### Question 1
Other than the Doppler effect, the emission line width of the laser beam also arises due to
*   A) Uncertainty principle
*   B) Dual nature of light waves
*   C) Stimulated emission
*   D) Resonant energy transfer

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) Uncertainty principle**
> (Natural linewidth $\Delta E \Delta t \ge \hbar$).
</details>

### Question 2
Which important characteristic of LASER allows it to be used in holography?
*   A) Directionality
*   B) Intensity
*   C) Monochromaticity
*   D) Coherent

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) Coherent**
> (Essential for stable interference patterns).
</details>

### Question 4
A laser emits light of 693.5 nm wavelength. Estimate the coherence length if the duration of the pulse is 0.1 ns.
*   A) 0.33 m
*   B) 0.03 m
*   C) 0.04 m
*   D) 0.43 m

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) 0.03 m**
> $L_c = c \Delta t = 3 \times 10^8 \times 0.1 \times 10^{-9} = 0.03$ m.
</details>

---

## Laser Types (Ruby, He-Ne, CO2)

### Question 2
In a He-Ne laser system, Neon atoms are involved in
*   A) Absorption
*   B) Emission
*   C) Amplification
*   D) Scattering

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) Emission**
> (Neon provides the lasing levels).
</details>

### Question 2 (CO2 Section)
The role of the $N_2$ molecule in the $CO_2$ laser is to
*   A) depopulate the 010 state
*   B) achieve population inversion
*   C) have stimulated emission
*   D) excite the $CO_2$ molecules

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) excite the $CO_2$ molecules**
> (Resonant energy transfer from excited N2 to CO2).
</details>

### Question 3
The transitions between vibrational energy states results in photon emission in the ______________
*   A) Visible region
*   B) Infrared region
*   C) UV region
*   D) microwave region

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) Infrared region**
> (Molecular vibration spectra).
</details>

---

## Semiconductor Lasers & LEDs

### Question 1
Light emitting diodes made with GaAs emit light in the
*   A) Microwave region
*   B) Infrared region
*   C) Ultraviolet region
*   D) Visible region

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) Infrared region**
> ($E_g \approx 1.4$ eV $\rightarrow \lambda \approx 880$ nm).
</details>

### Question 2
The wavelength of radiation emitted by an LED made up of a semiconducting material with band gap energy 2.8eV is
*   A) $44.38 \times 10^{-10}$ m
*   B) $4.438 \times 10^{-10}$ m
*   C) $0.443 \times 10^{-10}$ m
*   D) $4438 \times 10^{-10}$ m

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) $4438 \times 10^{-10}$ m**
> $\lambda = 12400 / E_g (\text{eV}) \text{ \AA} = 12400/2.8 \approx 4428 \text{ \AA}$.
> 4428 \AA = 442.8 nm.
> Option D is 4438 Angstroms.
</details>

### Question 5
Which process of electron-hole pair is responsible for the emission of light in LED?
*   A) Absorption
*   B) Dissociation
*   C) Recombination
*   D) Diffusion

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Recombination**
</details>

---

## Holography

### Question 2
While hologram recording is done, the laser light reflected from the object undergoes
*   A) Phase variation
*   B) Intensity variation
*   C) Both phase and intensity variations
*   D) Both transmission and reflection variations

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Both phase and intensity variations**
</details>

### Question 3
In order to see the image of an object recorded by holography, ____________ is required.
*   A) hologram
*   B) hologram and reference beam
*   C) hologram, reference beam and object beam
*   D) hologram, reference beam, object beam and object

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) hologram and reference beam**
> (Reconstruction requires illuminating hologram with reference beam).
</details>

---

## Dielectrics & Ferroelectrics

### Question 1
All piezoelectric are ferroelectric
*   A) True
*   B) False

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) False**
> (All ferroelectrics are piezoelectric, but not vice versa. e.g., Quartz is piezo but not ferro).
</details>

### Question 2
Which one of the following has the lowest switching/relaxation time?
*   A) Electronic Polarization
*   B) Ionic Polarization
*   C) Orientation polarization
*   D) spontaneous polarization

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) Electronic Polarization**
> (Fastest, $10^{-15}$ s).
</details>

### Question 1 (Non-linear Section)
Above Curie temperature, ferroelectrics exhibit
*   A) hysterisis
*   B) spontaneous polarization
*   C) paramagnetism
*   D) paraelectric behaviour

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) paraelectric behaviour**
</details>

### Question 4
Ferroelectrics do not exhibit
*   A) phase transition
*   B) spontaneous polarization
*   C) hysterisis
*   D) Hall effect

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) Hall effect**
> (They are typically insulators).
</details>

### Question 2 (Structure Section)
Which of these is not applicable to ferroelectric materials when T < Tc?
*   A) Presence of spontaneous polarization
*   B) Presence of remnant polarization
*   C) Exhibits paraelectric behaviour
*   D) Energy loss due to hysteresis

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Exhibits paraelectric behaviour**
</details>
