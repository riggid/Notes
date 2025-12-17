---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 4: Question Bank (SOLVED)

## 1. True/False Questions

1. `zip()` modifies the original iterables. **(False)**
2. `zip()` can only combine two iterables. **(False - multiple allowed)**
3. `zip()` result length is equal to longest iterable. **(False - shortest)**
4. Lazy objects conserve memory. **(True)**
5. `map()` returns a list immediately. **(False - returns iterator in Py3)**
6. List comprehensions are eager. **(True)**
7. List comprehensions limited to one iterable. **(False)**
8. List comprehensions allow `if/else`. **(True)**
9. In Python, everything is an object. **(True)**
10. Python supports method overloading (same name, diff params) natively. **(False - uses default args or *args)**
11. Method overriding possible in composition? **(False - only in inheritance)**
12. Multiple `except` statements allowed? **(True)**
13. Possible to create empty class? **(True)**
14. Python supports multiple inheritance. **(True)**
15. `raise` forces specific exception. **(True)**
16. Python has automatic garbage collection. **(True)**
17. `finally` block executed only on exception. **(False - always executed)**

## 2. Fill in the Blanks

1. Return type of `zip()` is an **iterator** object.
2. `zip()` iterates over iterables **simultaneously**.
3. `zip()` stops at length of **shortest** input.
4. `map()` applies function to **each item**.
5. `filter()` returns elements where function returns **True**.
6. `map()` returns a **new iterator**.
7. `reduce()` repeatedly applies function to **pairs** of elements.
8. **Data Abstraction** ensures access only to implementation.
9. One-line anonymous function: **lambda**.
10. **Constructor (`__init__`)** is called when object created.
11. **Static** method is bound by class, not object.
12. **super()** allows child to refer to parent method.
13. Attributes are **public** by default in Python.
14. **Composition** is class containing objects of other classes as attributes.

## 3. Theoretical Questions

**1. zip() Function:**
*   **Purpose**: Aggregate elements from multiple iterables.
*   **Multiple**: `zip(list1, list2, list3)` works.
*   **Unzipping**: `zip(*zipped_object)`.

**2. map(), filter(), reduce():**
*   **map(func, iter)**: Transforms every element.
*   **filter(func, iter)**: Selects elements where func is True.
*   **reduce(func, iter)**: Aggregates elements to single value (e.g., sum).

**3. List Comprehension:**
*   **Syntax**: `[expression for item in iterable if condition]`
*   **Vs Map**: List comp is more readable and Pythonic but eager (returns list). Map is lazy (returns iterator).

**4. Exception Handling:**
*   **Syntax**:
    ```python
    try:
        # code
    except ValueError:
        # handle val error
    except IndexError:
        # handle index error
    finally:
        # always runs
    ```

**5. OOP Concepts:**
*   **Class**: Blueprint for objects.
*   **Inheritance**: Child class derives from Parent.
*   **Polymorphism**: ability to treat objects of different classes uniformly (e.g., method overriding).
*   **Composition**: "Has-a" relationship (Car has an Engine).

**6. Multiple Inheritance:**
*   **MRO**: Method Resolution Order (Left-to-Right, Depth-First usually, C3 Linearization). `Class.mro()` helps resolve diamond problem.

## 4. Programming Exercises (Solved)

**1. Filter Integers (Lambda):**
```python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
odds = list(filter(lambda x: x % 2 != 0, nums))
print(f"Evens: {evens}, Odds: {odds}")
```

**2. Uppercase & Unique (Map):**
```python
seq = "hello world"
# uppercased, unique, joined
res = ''.join(set(map(str.upper, seq)))
print(res)
```

**3. Integer Input (Exception):**
```python
try:
    val = int(input("Enter integer: "))
except ValueError:
    print("Not a valid integer")
```

**4. File Not Found:**
```python
try:
    with open("missing.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("File does not exist")
```

**5. Person Class (Age Calculation):**
```python
from datetime import date
class Person:
    def __init__(self, name, dob_year):
        self.name = name
        self.dob = dob_year
    def age(self):
        return date.today().year - self.dob

p = Person("John", 1995)
print(p.age())
```

**6. Shape Subclasses:**
```python
class Shape:
    def area(self): pass

class Square(Shape):
    def __init__(self, side): self.side = side
    def area(self): return self.side ** 2

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14 * self.r ** 2
```

**7. Point in Circle:**
```python
def point_in_circle(cx, cy, r, px, py):
    dist = ((px-cx)**2 + (py-cy)**2)**0.5
    if dist < r: return "Inside"
    elif dist == r: return "On"
    else: return "Outside"
```

**8. Filter Range:**
```python
# Even
print(list(filter(lambda x: x%2==0, range(1,11))))
# Divisible by 3
print(list(filter(lambda x: x%3==0, range(1,11))))
```

**9. Map Range:**
```python
# Squares
print(list(map(lambda x: x**2, range(1,11))))
# Cubes
print(list(map(lambda x: x**3, range(1,11))))
```

**10. List Comp (Fibonacci):**
```python
# Generating predefined list of fibs is complex in one-line comp, but usually done iteratively.
# Simple filtering exercise:
nums = [12, 24, 35, 70, 88, 120, 155]
div5_7 = [x for x in nums if x % 5 == 0 and x % 7 == 0]
print(div5_7) # [35, 70]
```
