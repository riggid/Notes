---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Data Structures: Tuples, Sets, Dictionaries

### 1. Tuples vs Lists
**Question:** Differentiate between Lists and Tuples. Why are Tuples called immutable?

**Answer:**
-   **Differences**:
    | Feature | List | Tuple |
    | :--- | :--- | :--- |
    | **Syntax** | `[]` (Square brackets) | `()` (Parentheses) |
    | **Mutability** | Mutable (Changeable) | Immutable (Unchangeable) |
    | **Perf** | Slower (Memory overhead) | Faster (Fixed size) |
    | **Methods** | Many (`append`, `pop`) | Few (`count`, `index`) |
-   **Immutability**: Once a tuple is created, its elements cannot be modified, added, or removed.
    ```python
    t = (1, 2)
    t[0] = 3 # Raises TypeError
    ```

### 2. Dictionary Keys
**Question:** Explain the characteristics of keys in a Python dictionary. Can a list be used as a key? Justify.

**Answer:**
-   **Characteristics**:
    -   Keys must be **unique** within a dictionary.
    -   Keys must be **immutable** (Hashable).
-   **Can List be a Key?**: **No**.
-   **Justification**: Lists are **mutable**. If a list were allowed as a key, its value could change (e.g., `append`), changing its hash. A dictionary requires hash stability to locate keys efficiently. Using a list as a key raises `TypeError: unhashable type: 'list'`.

### 3. Set Operations
**Question:** Discuss basic set operations (Union, Intersection, Difference) in Python with suitable method calls.

**Answer:**
Consider two sets: `A = {1, 2, 3}` and `B = {3, 4, 5}`.

1.  **Union**: Returns all elements from both sets (No duplicates).
    -   Operator: `|` or `union()`.
    -   `A | B` -> `{1, 2, 3, 4, 5}`.
2.  **Intersection**: Returns common elements.
    -   Operator: `&` or `intersection()`.
    -   `A & B` -> `{3}`.
3.  **Difference**: Returns elements in Set A but not in Set B.
    -   Operator: `-` or `difference()`.
    -   `A - B` -> `{1, 2}`.

---

*Last updated: December 2025*
