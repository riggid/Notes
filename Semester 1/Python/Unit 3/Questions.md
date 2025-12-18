---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 3: Question Bank (SOLVED)

## 1. Recursion

**1. Recursive Average:** Write a recursive function to obtain the average of all numbers present in a given list.
```python
def get_average(lst, n):
    if n == 1:
        return lst[0]
    return (get_average(lst, n - 1) * (n - 1) + lst[n - 1]) / n
```

**2. Sanitize List:** Recursive function to replace all negative numbers with 0 in a list.
```python
def replace(lst, i, n):
    if i > n: return
    if lst[i] < 0: lst[i] = 0
    replace(lst, i + 1, n)
```

**3. Output Tracing:**
```python
def fun(num):
    if num > 100:
        return num - 10
    return fun(fun(num + 11))
print(fun(75))
```
**Answer:** `91`

**4. Power of Two:** Check if a number is a power of two recursively.
```python
def is_power_of_two(n):
    if n <= 0: return False
    if n == 1: return True
    if n % 2 == 0: return is_power_of_two(n // 2)
    return False
```

**5. Palindrome Check:** Recursive palindrome check.
```python
def is_palindrome(s):
    if len(s) <= 1: return True
    if s[0] != s[-1]: return False
    return is_palindrome(s[1:-1])
```

## 2. Generators & Iterators

**6. Unique Words Generator:** Use a generator to yield unique words from a line of text.
```python
def unique_words(text):
    seen = set()
    for word in text.split():
        if word not in seen:
            seen.add(word)
            yield word
```

**7. Reverse Generator:** Generate characters from a string in reverse order.
```python
def reverse_chars(s):
    for i in range(len(s)-1, -1, -1):
        yield s[i]
```

**8. Generator vs List Comprehension:** Difference between `sum([x**2...])` and `sum(x**2...)`?
**Answer:** The first creates a full list in memory (eager). The second uses a generator expression (lazy), which is more memory efficient.

## 3. Closures

**9. Define Closure:** Explain what a closure is and provide an example.
**Answer:** A closure is a nested function that remembers and has access to variables in the scope of its enclosing function even after the outer function has finished executing.
```python
def outer(x):
    def inner(y):
        return x + y
    return inner
add_5 = outer(5)
print(add_5(10)) # 15
```

**10. Free Variable:** What is a free variable in closures?
**Answer:** A variable used in a closure that is not defined in the closure itself but in the enclosing scope (like `x` in the example above).

**11. Benefits:** Why use closures?
**Answer:** Data hiding/encapsulation, factory functions, replacing classes for simple interfaces.

## 4. Decorators

**12. True/False on Decorators:**
*   A decorator adds some features to an existing function. **(True)**
*   Once a decorator is created, it can be applied to only one function. **(False)**
*   Function decorated must not receive arguments. **(False)**
*   Function decorated must not return value. **(False)**

**13. Simple Decorator:**
```python
def my_decorator(func):
    def wrapper():
        print("Something before")
        func()
        print("Something after")
    return wrapper
```

**14. Nested Decorators:** Can you apply multiple decorators?
**Answer:** Yes, they are applied in order (bottom to top).

## 5. Modules & Packages

**15. True/False on Modules:**
*   Modular design allows breaking programs into manageable parts. **(True)**
*   A module may be just design without implementation. **(True)**
*   Modules have their own namespace. **(True)**
*   `__doc__` is used for docstrings. **(True)**
*   `__name__ == "__main__"` means the module is being run directly. **(True)**

**16. Docstrings:** Fill in the blank: `__doc__` extension is used in the creation of docstrings.

**17. Packages:** What special file is required in a directory to treat it as a package?
**Answer:** `__init__.py`.

**18. Import Styles:**
*   `import module`: Access via `module.func()`
*   `from module import func`: Access via `func()`
*   `from module import *`: Imports everything (can cause name clashes).

## 6. GUI (wxPython)

**19. Widgets:**
*   **wx.StaticText**: Dispay static text (Label).
*   **wx.Button**: Trigger an action.
*   **wx.TextCtrl**: Single line (or multi-line) text input.
*   **Sizers**: `wx.BoxSizer` (linear), `wx.GridSizer` (grid), `wx.GridBagSizer` (complex grid).

**20. Event Handling:**
**Answer:** Using `Bind()` method to link an event (e.g., `wx.EVT_BUTTON`) to a handler function.

## 7. Short Answers

*   **PDB**: Python Debugger. Commands: `n` (next), `s` (step), `c` (continue), `q` (quit).
*   **Namespace**: A mapping from names to objects.
*   **Difference generator function vs regular**: Generator uses `yield`, returns an iterator, pauses execution. Regular returns once.
---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

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

## 4. GUI Programming (wxPython)

### Example 5: Basic wxPython Window
**Problem:** Create a window with a label and a button that changes the label text.
```python
import wx

def on_click(event):
    label.SetLabel("Button Clicked!")
    label.SetForegroundColour(wx.RED)

app = wx.App()
frame = wx.Frame(None, title="My App", size=(300, 200))
panel = wx.Panel(frame)

sizer = wx.BoxSizer(wx.VERTICAL)

label = wx.StaticText(panel, label="Hello GUI")
font = label.GetFont()
font.SetPointSize(12)
label.SetFont(font)
sizer.Add(label, 0, wx.ALL | wx.CENTER, 10)

btn = wx.Button(panel, label="Click Me")
btn.Bind(wx.EVT_BUTTON, on_click)
sizer.Add(btn, 0, wx.ALL | wx.CENTER, 10)

panel.SetSizer(sizer)
frame.Show()
app.MainLoop()
```
**Output:**
*A window appears with "Hello GUI". Clicking "Click Me" changes text to "Button Clicked!" in red.*

### Example 6: Grid Layout & Entry (wxPython)
**Problem:** Create a simple Login form using GridBagSizer.
```python
import wx

class LoginFrame(wx.Frame):
    def __init__(self, parent, title):
        super(LoginFrame, self).__init__(parent, title=title, size=(300, 200))
        
        panel = wx.Panel(self)
        sizer = wx.GridBagSizer(5, 5)

        # Labels
        st1 = wx.StaticText(panel, label="Username:")
        sizer.Add(st1, pos=(0, 0), flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL, border=5)
        
        st2 = wx.StaticText(panel, label="Password:")
        sizer.Add(st2, pos=(1, 0), flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL, border=5)

        # Entry Fields
        self.entry_user = wx.TextCtrl(panel)
        sizer.Add(self.entry_user, pos=(0, 1), flag=wx.EXPAND|wx.ALL, border=5)
        
        self.entry_pass = wx.TextCtrl(panel, style=wx.TE_PASSWORD)
        sizer.Add(self.entry_pass, pos=(1, 1), flag=wx.EXPAND|wx.ALL, border=5)

        # Button
        button = wx.Button(panel, label="Login")
        button.Bind(wx.EVT_BUTTON, self.on_login)
        sizer.Add(button, pos=(2, 0), span=(1, 2), flag=wx.ALIGN_CENTER|wx.ALL, border=10)

        panel.SetSizer(sizer)
        self.Centre()

    def on_login(self, event):
        print(f"Username: {self.entry_user.GetValue()}")
        print(f"Password: {self.entry_pass.GetValue()}")

app = wx.App()
frame = LoginFrame(None, "Login")
frame.Show()
app.MainLoop()
```
**Output:**
*Window with Username/Password fields. Entering text and clicking Login prints credentials to console.*
```text
Username: admin
Password: 123
```
