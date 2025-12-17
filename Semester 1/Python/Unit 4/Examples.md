---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 4: Examples (OOPs & Advanced)

## 1. Object Oriented Programming (OOP)

### Example 1: Class and Object Basics
**Problem:** Definitions of a class, constructor, and method.
```python
class Dog:
    # Class Attribute
    species = "Canis familiaris"

    # Initializer / Instance Attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Instance Method
    def description(self):
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

# Creating Objects
mikey = Dog("Mikey", 6)
tom = Dog("Tom", 9)

print(mikey.description())
print(tom.speak("Woof"))
print(f"Species: {mikey.species}")
```
**Output:**
```text
Mikey is 6 years old
Tom says Woof
Species: Canis familiaris
```

### Example 2: Managing Attributes (getattr, setattr, delattr)
**Problem:** Dynamically manage object attributes.
```python
class Person:
    pass

p = Person()

# Set attribute
setattr(p, 'name', 'Alice')
print(f"Name: {getattr(p, 'name')}")

# Add another
p.age = 30
print(f"Age: {p.age}")

# Delete attribute
delattr(p, 'name')
# print(p.name) # This would raise AttributeError
print(f"Has name? {hasattr(p, 'name')}")
```
**Output:**
```text
Name: Alice
Age: 30
Has name? False
```

### Example 3: Inheritance & Polymorphism
**Problem:** Demonstrate inheritance and method overriding.
```python
class Animal:
    def speak(self):
        print("Generic Sound")

class Dog(Animal):
    def speak(self):
        print("Woof")

class Cat(Animal):
    def speak(self):
        print("Meow")

animals = [Dog(), Cat(), Animal()]
for a in animals:
    a.speak()
```
**Output:**
```text
Woof
Meow
Generic Sound
```

### Example 4: Operator Overloading
**Problem:** Allow using `+` operator for vector addition.
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(v3)
```
**Output:**
```text
Vector(4, 6)
```

## 2. Functional Programming Features

### Example 5: Map and Filter w/ Lambda
```python
nums = [1, 2, 3, 4, 5, 6]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"Evens: {evens}")

# Square them using map
squared = list(map(lambda x: x**2, evens))
print(f"Squared Evens: {squared}")
```
**Output:**
```text
Evens: [2, 4, 6]
Squared Evens: [4, 16, 36]
```

### Example 6: Custom Iterator
**Problem:** Create a class that iterates from `start` down to 1.
```python
class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

print("Countdown:")
for num in CountDown(3):
    print(num)
```
**Output:**
```text
Countdown:
3
2
1
```
