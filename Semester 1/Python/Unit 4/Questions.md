---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 4: Question Bank (SOLVED)

## 1. Functional Programming Tools (zip, map, filter)

**1. What is the `zip()` function? Describe its return type and behavior with multiple iterables.**
*   **Answer**: `zip()` aggregates elements from multiple iterables (like lists or tuples) into an iterator of tuples.
    *   **Return Type**: Returns an **iterator** (lazy object), not a list.
    *   **Multiple Iterables**: It can take any number of iterables (e.g., `zip(list1, list2, list3)`).
    *   **Length Mismatch**: It stops when the **shortest** iterable is exhausted.

**2. True or False: `zip()` modifies the original iterables.**
*   **Answer**: **False**. It creates new tuples without changing the original data.

**3. Explain the difference between `map()` and `filter()` functions.**
*   **Answer**:
    *   **`map(func, iter)`**: Applies `func` to **every item** in the iterable and returns an iterator of results.
    *   **`filter(func, iter)`**: Applies `func` to every item and returns an iterator of only those items where `func` returns **True**.

**4. What does `reduce()` do?**
*   **Answer**: `reduce(func, iter)` (from `functools`) repeatedly applies a function to **pairs** of elements, reducing the iterable to a single cumulative value (e.g., sum or product).

**5. True or False: In Python 3, `map()` returns a list immediately.**
*   **Answer**: **False**. It returns a **map object** (an iterator). You must convert it to a list (e.g., `list(map(...))`) to see all values immediately.

**6. Programming Exercise: Filter Integers**
*   **Question**: Given `nums = [1, 2, 3, 4, 5, 6]`, use `filter` and `lambda` to separate evens and odds.
*   **Solution**:
    ```python
    nums = [1, 2, 3, 4, 5, 6]
    evens = list(filter(lambda x: x % 2 == 0, nums))
    odds = list(filter(lambda x: x % 2 != 0, nums))
    print(f"Evens: {evens}, Odds: {odds}")
    ```

**7. Programming Exercise: Uppercase & Unique**
*   **Question**: One-liner to uppercase a string `seq = "hello world"` and get unique characters.
*   **Solution**:
    ```python
    seq = "hello world"
    res = ''.join(set(map(str.upper, seq)))
    print(res)
    ```

**8. Programming Exercise: Filter & Map on Range**
*   **Question**: Filter even numbers from 1 to 10, then square them.
*   **Solution**:
    ```python
    # Filter even
    evens = list(filter(lambda x: x % 2 == 0, range(1, 11)))
    # Square them
    squared = list(map(lambda x: x**2, evens))
    print(squared) # [4, 16, 36, 64, 100]
    ```

## 2. List Comprehensions & Lazy Evaluation

**9. Compare List Comprehensions with `map()`/`filter()`.**
*   **Answer**:
    *   **List Comprehensions**: Concise syntax `[expr for x in iter]`. They are **eager** (create the full list in memory). Generally more "Pythonic" and readable.
    *   **Map/Filter**: Functional approach. They are **lazy** (return iterators), which is more memory efficient for large datasets.

**10. True or False: List comprehensions allow `if/else` logic.**
*   **Answer**: **True**. Example: `[x if x > 0 else 0 for x in nums]`.

**11. True or False: Lazy objects (like generators) conserve memory.**
*   **Answer**: **True**. They generate values on the fly rather than storing them all at once.

**12. Programming Exercise: List Comprehension Logic**
*   **Question**: Filter numbers divisible by both 5 and 7 from a list.
*   **Solution**:
    ```python
    nums = [12, 24, 35, 70, 88, 120, 155]
    div5_7 = [x for x in nums if x % 5 == 0 and x % 7 == 0]
    print(div5_7) # [35, 70]
    ```

## 3. Object Oriented Programming (OOP)

**13. Define the core OOP concepts: Class, Inheritance, Polymorphism, Composition.**
*   **Answer**:
    *   **Class**: A blueprint for creating objects.
    *   **Inheritance**: A child class derives attributes and methods from a Parent class.
    *   **Polymorphism**: The ability to treat objects of different classes uniformly (e.g., Method Overriding).
    *   **Composition**: A "Has-a" relationship where a class contains objects of other classes as attributes.

**14. Fill in the blanks:**
    *   **Constructor**: The `__init__` method is called when an object is created.
    *   **Static Method**: A method bound by the **class**, not the instance.
    *   **super()**: Function used to refer to the parent class methods.
    *   **Data Abstraction**: Hides implementation details and exposes only functionality.

**15. True or False: Python natively supports method overloading (same name, different params).**
*   **Answer**: **False**. Python uses default arguments or variable-length arguments (`*args`) to achieve similar behavior, not native overloading.

**16. True or False: Method overriding is possible in Composition.**
*   **Answer**: **False**. Overriding is a feature of **Inheritance**.

**17. Explain Multiple Inheritance and MRO.**
*   **Answer**: Python supports a class inheriting from multiple parents. **MRO (Method Resolution Order)** determines the order in which base classes are searched for a method (usually Left-to-Right, Depth-First).

**18. True or False: In Python, everything is an object.**
*   **Answer**: **True**. Functions, classes, and basic types are all objects.

**19. True or False: Attributes are public by default in Python.**
*   **Answer**: **True**.

**20. Abstract Classes & Destructors:**
*   **Abstract Class**: Defined using `ABC` module. Contains at least one abstract method.
*   **Destructor**: `__del__` method, called when object is garbage collected.

## Code Output Tracing (New)

1. **Inheritance & Super**:
   ```python
   class A:
       def show(self): return "A"
   class B(A):
       def show(self): return "B " + super().show()
   print(B().show())
   ```
   - **Output**: `B A`

2. **Polymorphism**:
   ```python
   class Dog:
       def speak(self): return "Woof"
   class Cat:
       def speak(self): return "Meow"
   for animal in [Dog(), Cat()]:
       print(animal.speak())
   ```
   - **Output**: `Woof` then `Meow`.

3. **Exception Order**:
   ```python
   try:
       1 / 0
   except ZeroDivisionError:
       print("Zero")
   except ArithmeticError:
       print("Arithmetic")
   ```
   - **Output**: `Zero` (First matching catch block executes).

**21. Programming Exercise: Person Class**
*   **Question**: Create a `Person` class with `name` and `dob_year`, and a method to calculate age.
*   **Solution**:
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

**21. Programming Exercise: Shape Subclasses**
*   **Question**: Create a `Shape` base class and `Square`/`Circle` subclasses with an `area()` method.
*   **Solution**:
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

**22. Programming Exercise: Point in Circle**
*   **Question**: Function to check if a point `(px, py)` is inside a circle defined by `(cx, cy, r)`.
*   **Solution**:
    ```python
    def point_in_circle(cx, cy, r, px, py):
        dist = ((px-cx)**2 + (py-cy)**2)**0.5
        if dist < r: return "Inside"
        elif dist == r: return "On"
        else: return "Outside"
    ```

## 4. Exception Handling

**23. What is the syntax for handling exceptions in Python?**
*   **Answer**:
    ```python
    try:
        # Risky code
    except SpecificError:
        # Handle error
    finally:
        # Always executes (cleanup)
    ```

**24. True or False: The `finally` block is executed only if an exception occurs.**
*   **Answer**: **False**. It is **always** executed, regardless of whether an exception occurred or not.

**25. True or False: You can have multiple `except` blocks for a single `try`.**
*   **Answer**: **True**. You can catch different exceptions separately.

**26. Programming Exercise: Integer Input**
*   **Question**: Handle the error when a user inputs a non-integer.
*   **Solution**:
    ```python
    try:
        val = int(input("Enter integer: "))
    except ValueError:
        print("Not a valid integer")
    ```

**27. Programming Exercise: File Not Found**
*   **Question**: Handle the case where a file does not exist.
*   **Solution**:
    ```python
    try:
        with open("missing.txt", "r") as f:
            print(f.read())
    except FileNotFoundError:
        print("File does not exist")
    ```
