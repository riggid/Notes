---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 4: Functional Programming and OOP

## 1. Functional Programming
Functional programming treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

### 1.1 Lambda Functions
*   **Definition**: Anonymous, small functions defined on the fly.
*   **Syntax**: `lambda arguments : expression`
*   **Usage**: Usually passed as arguments to higher-order functions like `map` or `filter`.
*   **Example**: `square = lambda x: x * x`

### 1.2 Map, Filter, Reduce
*   **`map(function, iterable)`**:
    *   Applies `function` to every item in `iterable`.
    *   Returns a map object (iterator).
*   **`filter(function, iterable)`**:
    *   Constructs an iterator from elements of `iterable` for which `function` returns true.
*   **`reduce(function, iterable)`**:
    *   Applies a rolling computation to sequential pairs of values in a list.
    *   Needs import: `from functools import reduce`.

---

### 1.3 List Comprehension and Zip
*   **List Comprehension**: A concise way to create lists.
    *   **Syntax**: `[expression for item in iterable if condition]`
    *   **Example**: `[x**2 for x in range(10) if x % 2 == 0]`
*   **Zip Function**:
    *   **Usage**: `zip(iter1, iter2)` aggregates elements from each of the iterables.
    *   **Result**: Returns an iterator of tuples.

---

## 2. Object Oriented Programming (OOP)

### 2.1 Basic Concepts
*   **Class**: A blueprint for creating objects (data structure).
*   **Object**: An instance of a class.
*   **Encapsulation**: Bundling data (attributes) and methods within a class.
*   **Self**: Reference to the current instance of the class.

### 2.2 Inheritance
*   **Definition**: Mechanism where a new class inherits properties and behavior from an existing class.
*   **Types**:
    *   **Single**: A -> B
    *   **Multiple**: A, B -> C
    *   **Multilevel**: A -> B -> C
    *   **Hierarchical**: A -> B, A -> C
    *   **Hybrid**: Combination of above.
*   **MRO (Method Resolution Order)**: The order in which Python searches for a method in a hierarchy of classes (`__mro__`).
*   **`super()`**: Used to call methods from the parent class.

### 2.3 Polymorphism
*   **Definition**: The ability to present the same interface for differing underlying forms (data types).
*   **Method Overriding**: Child class provides a specific implementation of a method already provided by its parent class.
*   **Operator Overloading**: Defining custom behavior for standard operators (e.g., `+`, `-`) using magic methods.

### 2.4 Magic (Dunder) Methods
*   `__init__(self)`: Constructor/Initializer.
*   `__str__(self)`: String representation (seen by user).
*   `__repr__(self)`: String representation (seen by developer/debugger).
*   `__add__(self, other)`: Overloads `+`.
*   `__gt__(self, other)`: Overloads `>`.
*   `__iter__`, `__next__`: For Iterators.

### 2.5 Iterators
*   **Protocol**:
    *   `__iter__()`: Returns the iterator object itself.
    *   `__next__()`: Returns the next item from the container. Raises `StopIteration` when done.
*   **Usage**: Allows custom objects to be used in loops.

### 2.6 Introspection
*   `type(obj)`: Returns type of object.
*   `isinstance(obj, class)`: Checks if object is instance of class.
*   `issubclass(cls, class)`: Checks if class is subclass of another.

---

## 3. Error Handling and Exceptions

### 3.1 Concepts
*   **Exception**: An error that occurs during execution.
*   **Handling**: Python uses `try` and `except` blocks to catch and handle exceptions, preventing program crashes.

### 3.2 Syntax
```python
try:
    # Code that might raise an exception
except SomeException:
    # Code that runs if exception occurs
else:
    # Code that runs if NO exception occurs
finally:
    # Code that runs ALWAYS (cleanup)
```

### 3.3 Raising Exceptions
*   **`raise`**: Used to trigger an exception manually.
*   **Exception Propagation**: Bubbling up of exceptions from inner functions to outer functions until handled.
