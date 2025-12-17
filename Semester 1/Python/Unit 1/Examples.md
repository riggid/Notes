---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 1: Essential Examples & Programs

This document contains a comprehensive collection of Python programs for Unit 1, including mandatory course programs, solved questions, and illustrative examples organized by topic.

## 1. Input/Output & Basics

### Program 1: User Details (Mandatory)
**Problem:** Take a user’s name and age as input, print them with their types and IDs.
```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Name: {name} (Type: {type(name)}, ID: {id(name)})")
print(f"Age: {age} (Type: {type(age)}, ID: {id(age)})")
```
**Output:**
```text
Enter your name: Alice
Enter your age: 20
Name: Alice (Type: <class 'str'>, ID: 14023456789)
Age: 20 (Type: <class 'int'>, ID: 14023456890)
```

### Program 2: Variable Swap (Mandatory)
**Problem:** Swap two numbers without using a temporary variable.
```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(f"Before: a={a}, b={b}")
a = a + b
b = a - b
a = a - b
print(f"After: a={a}, b={b}")
```
**Output:**
```text
Enter first number: 10
Enter second number: 20
Before: a=10, b=20
After: a=20, b=10
```

### Program 3: ASCII Value
**Problem:** Display the ASCII value of a character.
```python
char = input("Enter a character: ")
print(f"ASCII value of {char} is {ord(char)}")
```
**Output:**
```text
Enter a character: A
ASCII value of A is 65
```

## 2. Arithmetic & Math

### Program 4: Circle Properties (Mandatory)
**Problem:** Find the diameter, circumference, and area of a circle.
```python
import math

radius = float(input("Enter radius: "))
print(f"ID of radius: {id(radius)}")

diameter = 2 * radius
circumference = 2 * math.pi * radius
area = math.pi * (radius ** 2)

print(f"Diameter: {diameter:.2f}")
print(f"Circumference: {circumference:.2f}")
print(f"Area: {area:.2f}")
```
**Output:**
```text
Enter radius: 5
ID of radius: 14023456999
Diameter: 10.00
Circumference: 31.42
Area: 78.54
```

### Program 5: Simple Calculator (Mandatory)
**Problem:** Perform addition, subtraction, multiplication, division, and modulus.
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
op = input("Enter operator (+, -, *, /, %): ")

if op == '+':
    print("Result:", num1 + num2)
elif op == '-':
    print("Result:", num1 - num2)
elif op == '*':
    print("Result:", num1 * num2)
elif op == '/':
    print("Result:", num1 / num2 if num2 != 0 else "Error: Division by zero")
elif op == '%':
    print("Result:", num1 % num2)
else:
    print("Invalid operator")
```
**Output:**
```text
Enter first number: 10
Enter second number: 5
Enter operator (+, -, *, /, %): /
Result: 2.0
```

### Program 6: Quadratic Equation
**Problem:** Solve $ax^2 + bx + c = 0$.
```python
import cmath

a = float(input("Enter a: "))
b = float(input("Enter b: "))
c = float(input("Enter c: "))

d = (b**2) - (4*a*c) # Discriminant
sol1 = (-b - cmath.sqrt(d)) / (2*a)
sol2 = (-b + cmath.sqrt(d)) / (2*a)

print(f"Solutions: {sol1} and {sol2}")
```
**Output:**
```text
Enter a: 1
Enter b: 5
Enter c: 6
Solutions: (-2+0j) and (-3+0j)
```

## 3. Conditionals (If/Else)

### Program 7: Even or Odd
```python
num = int(input("Enter a number: "))
if num % 2 == 0:
    print(f"{num} is Even")
else:
    print(f"{num} is Odd")
```
**Output:**
```text
Enter a number: 7
7 is Odd
```

### Program 8: Leap Year Checker
**Problem:** Check if a year is a leap year.
```python
year = int(input("Enter year: "))
if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print(f"{year} is a Leap Year")
else:
    print(f"{year} is not a Leap Year")
```
**Output:**
```text
Enter year: 2024
2024 is a Leap Year
```

### Program 9: Discount Calculator (Mandatory)
**Problem:** Calculate cost. 10% discount if >1000, 15% if >2000.
```python
qty = int(input("Enter quantity: "))
cost = qty * 100

if cost > 2000:
    discount = 0.15
elif cost > 1000:
    discount = 0.10
else:
    discount = 0.0

final_cost = cost - (discount * cost)
print(f"Original: {cost}, Final: {final_cost}")
```
**Output:**
```text
Enter quantity: 25
Original: 2500, Final: 2125.0
```

### Program 10: FizzBuzz
**Problem:** Divisible by 3 -> Fizz, 5 -> Buzz, Both -> FizzBuzz.
```python
n = int(input("Enter number: "))
if n % 3 == 0 and n % 5 == 0:
    print("FIZZBUZZ")
elif n % 3 == 0:
    print("FIZZ")
elif n % 5 == 0:
    print("BUZZ")
else:
    print(n)
```
**Output:**
```text
Enter number: 15
FIZZBUZZ
```

## 4. Loops (For & While)

### Program 11: Multiplication Table (Mandatory)
```python
n = int(input("Enter the number: "))
for i in range(1, 11):
    print(f"{n} X {i} = {n * i}")
```
**Output:**
```text
Enter the number: 5
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
```

### Program 12: Reverse a Number (Mandatory)
```python
n = int(input("Enter a number: "))
if n < 0:
    print("Please enter a positive number.")
else:
    rev = 0
    temp = n
    while temp > 0:
        digit = temp % 10
        rev = rev * 10 + digit
        temp //= 10
    print(f"Reversed: {rev}")
```
**Output:**
```text
Enter a number: 1234
Reversed: 4321
```

### Program 13: Fibonacci Series (Mandatory)
```python
limit = int(input("Enter limit: "))
a, b = 0, 1
while a <= limit:
    print(a, end=" ")
    a, b = b, a + b
print()
```
**Output:**
```text
Enter limit: 10
0 1 1 2 3 5 8
```

### Program 14: Prime Check (Mandatory)
```python
num = int(input("Enter a number: "))
if num > 1:
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            print(f"{num} is not prime.")
            break
    else:
        print(f"{num} is prime.")
else:
    print("Enter a number greater than 1.")
```
**Output:**
```text
Enter a number: 17
17 is prime.
```

### Program 15: LCM of Two Numbers (Mandatory)
```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
greater = max(num1, num2)

while True:
    if greater % num1 == 0 and greater % num2 == 0:
        print(f"LCM is {greater}")
        break
    greater += 1
```
**Output:**
```text
Enter first number: 12
Enter second number: 15
LCM is 60
```

### Program 16: Range Printer (Even/Odd) (Mandatory)
```python
start = int(input("Start: "))
end = int(input("End: "))
choice = input("Print (e)ven, (o)dd, or (b)oth? ")

for num in range(start, end + 1):
    if choice == 'e' and num % 2 == 0:
        print(num, end=" ")
    elif choice == 'o' and num % 2 != 0:
        print(num, end=" ")
    elif choice == 'b':
        print(f"{num}{'(odd)' if num%2!=0 else ''}", end=" ")
print()
```
**Output:**
```text
Start: 1
End: 5
Print (e)ven, (o)dd, or (b)oth? o
1 3 5
```

### Program 17: Sum of Even and Odd Numbers (Mandatory)
```python
n1 = int(input("Num 1: "))
n2 = int(input("Num 2: "))
se, so = 0, 0
for i in range(min(n1, n2), max(n1, n2) + 1):
    if i % 2 == 0: se += i
    else: so += i
print(f"Sum Even: {se}, Sum Odd: {so}")
```
**Output:**
```text
Num 1: 1
Num 2: 5
Sum Even: 6, Sum Odd: 9
```

### Program 18: Sum of Series ($1 + x + x^2 ...$)
```python
x = float(input("x: "))
n = int(input("n: "))
s = sum(x**a for a in range(n + 1))
print(f"Sum: {s}")
```
**Output:**
```text
x: 2
n: 3
Sum: 15.0
```

## 5. Number Systems

### Program 19: Decimal to Binary (Mandatory)
```python
num = int(input("Enter decimal: "))
print(f"Binary using bin(): {bin(num)}")

# Manual conversion
result = ""
temp = num
if temp == 0: result = "0"
while temp > 0:
    result = str(temp % 2) + result
    temp //= 2
print(f"Binary manual: {result}")
```
**Output:**
```text
Enter decimal: 10
Binary using bin(): 0b1010
Binary manual: 1010
```

### Program 20: 4-Digit Binary to Decimal
```python
print("Enter 4 binary digits:")
val = 0
val += int(input("Bit 1 (MSB): ")) * 8
val += int(input("Bit 2: ")) * 4
val += int(input("Bit 3: ")) * 2
val += int(input("Bit 4 (LSB): ")) * 1
print(f"Decimal: {val}")
```
**Output:**
```text
Enter 4 binary digits:
Bit 1 (MSB): 1
Bit 2: 0
Bit 3: 1
Bit 4 (LSB): 0
Decimal: 10
```

## 6. Patterns

### Program 21: Star Triangle
```python
rows = 5
for i in range(1, rows + 1):
    print("*" * i)
```
**Output:**
```text
*
**
***
****
*****
```

### Program 22: Alphabet Pyramid
```python
val = 65 # 'A'
inc = 1
for i in range(4):
    for j in range(inc):
        if val > 90: break
        print(chr(val), end="")
        val += 1
    print()
    inc += 2
# A
# BCD
# EFGHI...
```
**Output:**
```text
A
BCD
EFGHI
JKLMNOP
```
