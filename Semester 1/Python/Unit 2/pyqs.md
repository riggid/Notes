---
dg-publish: true
---

# Previous Year Questions (PYQs)

# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***

## 📝 Selected Previous Year Questions with Solutions

### Strings & List Operations

### 1. String Operations
**Question:** Predict the output of the following snippet and explain the operation:
```python
x = "python" * 2
print(x)
```

**Answer:**
-   **Output**: `pythonpython`
-   **Explanation**: The `*` operator, when used with a string and an integer `n`, acts as a **repetition operator**. It repeats the string `n` times.

### 2. List Methods (Append vs Extend)
**Question:** Differentiate between `append()` and `extend()` methods in Python lists with an example.

**Answer:**
-   **append(x)**: Adds the element `x` to the end of the list as a **single item**.
    ```python
    a = [1, 2]
    a.append([3, 4])
    # Result: [1, 2, [3, 4]] (Nested list)
    ```
-   **extend(iterable)**: Appends **each element** from the iterable (list, tuple) to the end of the list.
    ```python
    a = [1, 2]
    a.extend([3, 4])
    # Result: [1, 2, 3, 4] (Flat list)
    ```

### 3. Slicing
**Question:** Explain string slicing with syntax `[start:stop:step]` and valid examples.

**Answer:**
-   **Syntax**: `sequence[start:stop:step]`
    -   `start`: Starting index (inclusive, default 0).
    -   `stop`: Ending index (exclusive, default end of string).
    -   `step`: Stride (default 1).
-   **Examples**:
    ```python
    s = "Hello World"
    print(s[0:5])    # Output: 'Hello' (From index 0 to 4)
    print(s[:5])     # Output: 'Hello' (Default start 0)
    print(s[::2])    # Output: 'HloWrd' (Every 2nd char)
    print(s[::-1])   # Output: 'dlroW olleH' (Reverse string)
    ```

---

*Last updated: December 2025*
