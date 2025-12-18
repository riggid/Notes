---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

# Unit 1: Introduction to Python and Problem Solving

## 1. Introduction to Python
*   **Definition**: Python is a high-level, interpreted, interactive, and object-oriented scripting language.
*   **History**: Created by Guido van Rossum and first released in 1991.
*   **Features**:
    *   **Readable**: Uses English keywords and indentation.
    *   **Interpreted**: Code is executed line by line.
    *   **Dynamic Typing**: Variable types are determined at runtime.
    *   **Cross-platform**: Runs on Windows, Mac, Linux, etc.
    *   **Standard Library**: Extensive built-in modules.
*   **Modes of Operation**:
    *   **Interactive Mode**: Immediate execution of commands in the Python shell (`>>>`).
    *   **Script Mode**: executing code saved in a file (e.g., `.py` file).

## 2. Python Basics
### 2.1 Identifiers and Keywords
*   **Identifiers**: Names given to variables, functions, classes, etc.
    *   Rules:
        *   Must start with a letter (a-z, A-Z) or underscore (`_`).
        *   Can contain letters, digits, and underscores.
        *   Case-sensitive (`Age` != `age`).
        *   Cannot be a keyword.
*   **Keywords**: Reserved words with special meaning (e.g., `if`, `else`, `True`, `None`, `def`).

### 2.2 Variables and Data Types
*   **Variable**: A named location in memory to store data. Created by assignment (`x = 10`).
*   **Standard Data Types**:
    *   **Numeric**: `int` (integers), `float` (floating-point), `complex` (complex numbers).
    *   **Boolean**: `bool` (True, False).
    *   **Sequence**: `str` (String), `list`, `tuple`.
    *   **Set**: `set`, `frozenset`.
    *   **Mapping**: `dict` (Dictionary).

### 2.3 Type Conversion
*   **Implicit Conversion**: Python automatically converts one data type to another (e.g., `int` + `float` -> `float`).
*   **Explicit Conversion (Type Casting)**: User manually converts data types using functions like `int()`, `float()`, `str()`.

## 3. Operators
*   **Arithmetic**: `+`, `-`, `*`, `/` (division), `//` (floor division), `%` (modulus), `**` (exponent).
*   **Relational (Comparison)**: ` ==`, `!=`, `>`, `<`, `>=`, `<=`.
*   **Logical**: `and`, `or`, `not`.
*   **Assignment**: ` =`, `+=`, `-=`, etc.
*   **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`.
*   **Membership**: `in`, `not in`.
*   **Identity**: `is`, `is not`.

## 4. Input and Output
*   **Input**: `input("prompt")`. Always returns a string.
    *   Example: `age = int(input("Enter age: "))`
*   **Output**: `print(object, sep=' ', end='\n')`.
    *   `sep`: Separator between arguments (default is space).
    *   `end`: Character printed at the end (default is newline).

## 5. Control Flow
### 5.1 Conditional Statements
*   **if Statement**: Executes a block if condition is true.
*   **if...else**: Executes one block if true, another if false.
*   **if...elif...else**: Checks multiple conditions.
    ```python
    if condition1:
        # code
    elif condition2:
        # code
    else:
        # code
    ```

### 5.2 Loops
*   **while Loop**: Repeats as long as a condition is true.
    ```python
    while condition:
        # code
    ```
*   **for Loop**: Iterates over a sequence (list, string, range).
    ```python
    for i in range(5):
        print(i)
    ```
*   **Loop Control**:
    *   `break`: Exits the loop immediately.
    *   `continue`: Skips the rest of the current iteration.
    *   `pass`: Null operation (placeholder).

## 6. Number Systems (Brief)
*   Computers use binary (Base 2).
*   **Conversions**:
    *   `bin(x)`: Convert to binary (`0b...`).
    *   `oct(x)`: Convert to octal (`0o...`).
    *   `hex(x)`: Convert to hexadecimal (`0x...`).
    *   `int(string, base)`: Convert string of a base to integer.

