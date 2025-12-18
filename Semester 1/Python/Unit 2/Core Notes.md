---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 2: Collections and Functions

## 1. Sequence Data Structures
Python provides built-in sequence data structures to store collections of data.

### 1.1 Lists
*   **Definition**: A mutable, ordered sequence of elements.
*   **Syntax**: `my_list = [1, 2, "three", 4.0]`
*   **Characteristics**:
    *   **Heterogeneous**: Can hold elements of different data types.
    *   **Ordered**: Elements maintain their insertion order.
    *   **Indexable**: Accessed via zero-based index `my_list[0]`. Supports negative indexing.
    *   **Mutable**: Elements can be changed, added, or removed.
    *   **Iterable**: Can be traversed using loops.
*   **Operations**:
    *   **Concatenation**: `list1 + list2`
    *   **Repetition**: `list1 * n`
    *   **Membership**: `x in list1`
    *   **Slicing**: `list1[start:stop:step]`
*   **Common Methods**:
    *   `append(x)`: Adds `x` to the end.
    *   `extend(iterable)`: Appends elements from an iterable.
    *   `insert(i, x)`: Inserts `x` at index `i`.
    *   `remove(x)`: Removes the first occurrence of `x`.
    *   `pop([i])`: Removes and returns item at index `i` (default last).
    *   `clear()`: Removes all items.
    *   `index(x)`: Returns index of first occurrence of `x`.
    *   `count(x)`: Returns number of occurrences of `x`.
    *   `sort()`: Sorts the list in place.
    *   `reverse()`: Reverses the list in place.
    *   `copy()`: Returns a shallow copy.

### 1.2 Tuples
*   **Definition**: An immutable, ordered sequence of elements.
*   **Syntax**: `my_tuple = (1, 2, "three")`
*   **Characteristics**:
    *   **Immutable**: Cannot be changed after creation (no append, remove, etc.).
    *   **Faster**: Generally faster than lists for iteration.
*   **Usage**: Used for fixed collections of items, e.g., coordinates `(x, y)`.
*   **Singleton Tuple**: Must include a comma: `t = (1,)`.

### 1.3 Sets
*   **Definition**: An unordered collection of unique elements.
*   **Syntax**: `my_set = {1, 2, 3}` or `set([1, 2, 3])`
*   **Characteristics**:
    *   **Unordered**: No indexing or slicing.
    *   **Unique**: No duplicate elements.
*   **Operations**: Union (`|`), Intersection (`&`), Difference (`-`), Symmetric Difference (`^`).

### 1.4 Dictionaries
*   **Definition**: A collection of key-value pairs.
*   **Syntax**: `my_dict = {"key": "value", "a": 1}`
*   **Characteristics**:
    *   **Keys**: Must be unique and immutable (strings, numbers, tuples).
    *   **Values**: Can be any type.
    *   **Mutable**: Keys can be added/removed.
*   **Methods**: `keys()`, `values()`, `items()`, `get()`, `update()`.

---

## 2. Functions

### 2.1 Definition and Syntax
A function is a reusable block of code that performs a specific task.
```python
def function_name(parameters):
    """Docstring explaining the function."""
    # Body
    return value
```

### 2.2 Parameters and Arguments
*   **Formal Parameters**: Variables listed in the function definition.
*   **Actual Arguments**: Values passed during the function call.
*   **Pass by Object Reference**:
    *   If you pass immutable objects (int, string, tuple), the function cannot modify the original variable.
    *   If you pass mutable objects (list, dict), the function can modify the contents of the object.

### 2.3 Types of Arguments
1.  **Positional Arguments**: Arguments matched by position.
2.  **Keyword Arguments**: Arguments matched by parameter name (`func(a=1, b=2)`).
3.  **Default Arguments**: Parameters with default values (`def func(a, b=5):`).
4.  **Variable-Length Arguments**:
    *   `*args`: Collects positional arguments into a **tuple**.
    *   `**kwargs`: Collects keyword arguments into a **dictionary**.

### 2.4 Scope and Lifetime
*   **Local Scope**: Variables defined inside a function. specific to that function.
*   **Global Scope**: Variables defined at the top level of the module.
*   **`global` Keyword**: Used to modify a global variable inside a function.

---

## 3. Files (Brief Overview)
*   **Opening**: `f = open("filename", "mode")`
    *   Modes: `'r'` (read), `'w'` (write), `'a'` (append), `'b'` (binary).
*   **Reading**: `read()`, `readline()`, `readlines()`.
*   **Writing**: `write()`, `writelines()`.
*   **Closing**: `f.close()` or use context manager `with open(...) as f:`.
