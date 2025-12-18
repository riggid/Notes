---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]
***
# Unit 3: Advanced Functions, Testing, Debugging, and GUI

## 1. Advanced Functions

### 1.1 Generators
*   **Definition**: Functions that yield a sequence of values lazily using `yield` keyword.
*   **Benefits**: Memory efficient (generates one item at a time), handles infinite sequences.
*   **Next**: `next()` retrieves the next value.
*   **Expression**: `gen = (x**2 for x in range(5))` (similar to list comprehension but with `()`).

### 1.2 Decorators
*   **Definition**: A design pattern that allows user to add new functionality to an existing object without modifying its structure.
*   **Syntax**: `@decorator_name` above function definition.
*   **Usage**: Logging, authentication, timing functions.

### 1.3 Recursion
*   **Definition**: A function calling itself to solve a smaller instance of the problem.
*   **Components**:
    *   **Base Case**: The condition that stops the recursion.
    *   **Recursive Case**: The step where the function calls itself.
*   **Implementation**: Uses the call stack (LIFO).
*   **Usage**: Suitable for hierarchical problems (trees, graphs) and mathematical series (Fibonacci, Factorial).
*   **Pros/Cons**: Cleaner code vs Potential Stack Overflow/Memory overhead.

### 1.4 Callbacks
*   **Definition**: Passing a function as an argument to another function.
*   **Usage**:
    *   Event handling (GUI).
    *   Custom sorting (e.g., `list.sort(key=custom_function)`).
    *   Asynchronous programming.

### 1.5 Closures
*   **Definition**: A nested function that captures and remembers values from its enclosing scope even after the outer function has finished execution.
*   **Requirement**: Nested function must refer to value in enclosing scope, and enclosing function must return the nested function.

---

## 2. Testing and Debugging

### 2.1 Assert Statements
*   **Syntax**: `assert expression, "Optional Message"`
*   **Function**: If `expression` is False, raises `AssertionError`. Used for sanity checks and internal constraints.

### 2.2 Testing Frameworks
*   **Pytest**:
    *   **Discovery**: Automatically finds files `test_*.py` or `*_test.py` and functions starting with `test_`.
    *   **Running**: `pytest` or `pip install pytest`.
    *   **Status**: `.` (Pass), `F` (Fail).
    *   **Features**: Fixtures, Parametrized testing, Assert rewriting.
    *   **Selecting Tests**: `pytest -k "expression"` (run tests matching expression).
*   **Doctest**:
    *   **Concept**: embed test cases in docstrings resembling interactive shell sessions (`>>>`).
    *   **Running**: `import doctest; doctest.testmod()`.
    *   **Benefit**: Keeps documentation up-to-date and verifiable.

### 2.3 Debugging (pdb)
*   **Module**: `pdb` (Python Debugger).
*   **Starting**:
    *   In code: `import pdb; pdb.set_trace()` or `breakpoint()` (Python 3.7+).
    *   Command line: `python -m pdb myscript.py`.
*   **Commands**:
    *   `n` (next): Execute next line.
    *   `s` (step): Step into function.
    *   `c` (continue): Continue execution until next breakpoint.
    *   `l` (list): Show code.
    *   `p var` (print): Print variable value.
    *   `q` (quit): Exit debugger.

---

## 3. Graphical User Interface (GUI)

### 3.1 Introduction
*   **GUI**: Allows users to interact via windows, icons, and buttons.
*   **Event-Driven**: Programs respond to user actions (clicks, key presses).

### 3.2 wxPython
*   **Definition**: A cross-platform GUI toolkit wrapper for wxWidgets (C++).
*   **Structure**:
    *   `wx.App`: The application object. Starts the GUI.
    *   `wx.Frame`: The window interface.
    *   `wx.Panel`: Container for widgets.
    *   `wx.EVT_*`: Event binders (e.g., `wx.EVT_BUTTON`).
    *   **MainLoop**: `app.MainLoop()` starts the event loop.
    *   **Widgets**:
        *   `wx.StaticText`: Display text (Label).
        *   `wx.TextCtrl`: User input (Single line, Multiline, Password).
        *   `wx.Button`: Trigger actions.
        *   `wx.CheckBox`: Boolean input.
        *   `wx.MessageDialog`: Popups (Info, Limit, Error).
        *   `wx.TextEntryDialog`: Get single line input.
    *   **Formatting**:
        *   `SetFont()`: Change font style, size, weight.
        *   `SetBackgroundColour()`: Change widget color.
        *   `SetSize()`: Manually set pixel size and position.

### 3.3 Layout Managers (Sizers)
*   **Definition**: Automatically arrange widgets instead of fixed `pos=(x,y)`.
*   **wx.BoxSizer**:
    *   Rows or Columns (`wx.HORIZONTAL` or `wx.VERTICAL`).
    *   `Add(widget, proportion, flag, border)`.
*   **wx.GridSizer**:
    *   Table-like grid (`rows`, `cols`, `vgap`, `hgap`).
    *   Cells have equal size.


---

## 4. Modules and Regular Expressions

### 4.1 Regular Expressions (`re`)
*   **Module**: `import re`
*   **Usage**: Pattern matching in strings.
*   **Functions**:
    *   `re.search(pattern, string)`: Finds the first location.
    *   `re.findall(pattern, string)`: Returns all non-overlapping matches.
    *   `re.match(pattern, string)`: Checks for a match only at the beginning of the string.
    *   `re.sub(pattern, repl, string)`: Replaces matches with a string.

### 4.2 Standard and External Modules
*   **NumPy**: Library for large, multi-dimensional arrays and matrices, along with mathematical functions.
*   **NLTK (Natural Language Toolkit)**:
    *   Platform for building Python programs to work with human language data.
    *   Key functions: `word_tokenize`, `sent_tokenize`, `stopwords`.
*   **Scikit-learn (`sklearn`)**:
    *   Machine learning library. implements algorithms for classification, regression, clustering, etc.
    *   Key components: `train_test_split`, `accuracy_score`.
