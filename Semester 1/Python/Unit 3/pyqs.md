---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Functions & Modules

### 1. Modules and Import
**Question:** What is a Module? Explain the significance of the `import` statement. List any three functions available in the `random` module.

**Answer:**
-   **Module**: A file containing Python definitions and statements (functions, classes, variables) that can be reused in other programs. The file name is the module name with the suffix `.py`.
-   **Significance of `import`**: It allows code in one module to access the code defined in another. It promotes code reusability and organization.
-   **`random` module functions**:
    1.  `random.randint(a, b)`: Returns a random integer N such that `a <= N <= b`.
    2.  `random.choice(seq)`: Returns a random element from the non-empty sequence `seq`.
    3.  `random.random()`: Returns the next random floating point number in the range `[0.0, 1.0)`.

### 2. Range Function
**Question:** Explain the `range()` function with its parameters (start, stop, step) and give examples of its usage in loops.

**Answer:**
-   **`range([start], stop, [step])`**: Generates a sequence of numbers (immutable sequence type).
    -   `start`: Starting value (default 0).
    -   `stop`: End value (exclusive).
    -   `step`: Difference between each number (default 1).
-   **Usage in Loops**:
    ```python
    # Example 1: Basic
    for i in range(3):
        print(i, end=' ')
    # Output: 0 1 2

    # Example 2: Start, Stop, Step
    for i in range(1, 10, 2):
        print(i, end=' ')
    # Output: 1 3 5 7 9
    ```

### 3. Function Arguments (Default, Keyword, Positional)
**Question:** Differentiate between default arguments, keyword arguments, and positional arguments in Python functions.

**Answer:**
1.  **Positional Arguments**: Parameters are matched based on their order (position).
    ```python
    def greet(name, msg):
        print(name, msg)
    greet("Alice", "Hello") # "Alice" -> name, "Hello" -> msg
    ```
2.  **Keyword Arguments**: Parameters are identified by parameter name. Order doesn't matter.
    ```python
    greet(msg="Hi", name="Bob") # Clarity improved
    ```
3.  **Default Arguments**: Parameters take a default value if no argument is provided during call.
    ```python
    def power(a, b=2):
        return a ** b
    print(power(3))    # Output: 9 (b=2 default)
    print(power(3, 3)) # Output: 27 (b=3 overridden)
    ```

---

*Last updated: December 2025*
