---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 3: Examples (Recursion & Files & GUI)

## 1. Recursion

### Example 1: Recursive Factorial
```python
def factorial(n):
    # Base Case
    if n == 0 or n == 1:
        return 1
    # Recursive Case
    return n * factorial(n - 1)

print(f"Factorial of 5: {factorial(5)}")
```
**Output:**
```text
Factorial of 5: 120
```

### Example 2: Recursive Fibonacci
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

n_terms = 5
print(f"Fibonacci sequence ({n_terms} terms):")
for i in range(n_terms):
    print(fibonacci(i), end=" ")
print()
```
**Output:**
```text
Fibonacci sequence (5 terms):
0 1 1 2 3
```

## 2. Higher Order Functions

### Example 3: Callback with Sort
```python
words = ["apple", "Banana", "cherry", "Date"]

# Sort case-insensitive using a callback
def ignore_case(s):
    return s.lower()

words.sort(key=ignore_case)
# Equivalent lambda: words.sort(key=lambda s: s.lower())

print(f"Sorted: {words}")
```
**Output:**
```text
Sorted: ['apple', 'Banana', 'cherry', 'Date']
```

## 3. Testing

### Example 4: Doctest
```python
def add(a, b):
    """
    Returns the sum of a and b.
    >>> add(2, 3)
    5
    >>> add(-1, 1)
    0
    """
    return a + b

if __name__ == "__main__":
    import doctest
    doctest.testmod()
    print("Doctests run (no output means success)")
```
**Output:**
```text
Doctests run (no output means success)
```

## 4. GUI Programming (Tkinter)

### Example 5: Basic Tkinter Window
**Problem:** Create a window with a label and a button that changes the label text.
```python
import tkinter as tk

def on_click():
    label.config(text="Button Clicked!", fg="red")

root = tk.Tk()
root.title("My App")
root.geometry("200x100")

label = tk.Label(root, text="Hello GUI", font=("Arial", 12))
label.pack(pady=10)

btn = tk.Button(root, text="Click Me", command=on_click)
btn.pack()

root.mainloop()
```
**Output:**
*A window appears with "Hello GUI". Clicking "Click Me" changes text to "Button Clicked!" in red.*

### Example 6: Grid Layout & Entry
**Problem:** Create a simple Login form using Grid layout.
```python
import tkinter as tk

def login():
    print(f"Username: {entry_user.get()}")
    print(f"Password: {entry_pass.get()}")

root = tk.Tk()
root.title("Login")

# Labels
tk.Label(root, text="Username:").grid(row=0, column=0, padx=5, pady=5)
tk.Label(root, text="Password:").grid(row=1, column=0, padx=5, pady=5)

# Entry Fields
entry_user = tk.Entry(root)
entry_user.grid(row=0, column=1, padx=5, pady=5)

entry_pass = tk.Entry(root, show="*")
entry_pass.grid(row=1, column=1, padx=5, pady=5)

# Button
tk.Button(root, text="Login", command=login).grid(row=2, column=0, columnspan=2, pady=10)

root.mainloop()
```
**Output:**
*Window with Username/Password fields. Entering text and clicking Login prints credentials to console.*
```text
Username: admin
Password: 123
```
