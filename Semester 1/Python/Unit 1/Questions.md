---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 1: Question Bank (Theory & Concepts)

## Theoretical Questions

1. **FizzBuzz Logic**: Explain the logic used to determine factors of 3 and 5 in the FizzBuzz problem.
   - **Answer**: Use the modulo operator `%`. If `num % 3 == 0` it's divisible by 3. If `num % 5 == 0` it's divisible by 5. If `num % 3 == 0 and num % 5 == 0`, it is divisible by both.
2. **Type Conversion**: What is the difference between implicit and explicit type conversion? Give examples.
   - **Answer**: Implicit is automatic (e.g., `3 + 4.5` becomes float). Explicit is manual using functions like `int()`, `str()` (e.g., `int("10")`).
3. **Identifiers**: Which of the following identifier names are invalid and why?
   - `Serial_no.` (Invalid: dot), `1st_room` (Invalid: starts with digit), `Hundred$` (Invalid: $ symbol), `Total marks` (Invalid: space), `True` (Invalid: keyword).
4. **Modes**: In how many different ways can you work in Python? (Interactive vs Script).
   - **Answer**: Two: Interactive Mode (REPL) and Script Mode (executing .py files).
5. **Pros/Cons**: List 3 advantages and 2 limitations of Python.
   - **Pros**: Readability, Large Standard Library, Cross-platform. **Cons**: Slower execution (interpreted), High memory consumption.
6. **Mersenne Numbers**: What is the formula for a Mersenne number?
   - **Answer**: $M_n = 2^n - 1$.
7. **Bruteforce**: Define the Bruteforce approach in problem solving.
   - **Answer**: A method that solves a problem by exhaustively checking all possible candidates/solutions.
8. **Literals**: Define a literal and list the different types (Integer, Float, String, Boolean).
   - **Answer**: A notation for representing a fixed value in source code. Types: String (`'hi'`), Numeric (`10`, `3.14`), Boolean (`True`), Special (`None`).
9. **OS**: What is an Operating System?
   - **Answer**: System software that manages computer hardware and software resources and provides common services for computer programs.
10. **Escape Sequences**: What is an escape sequence? List three examples (e.g., `\n`, `\t`, `\\`).
    - **Answer**: A sequence of characters that does not represent itself but converts to another character. `\n` (newline), `\t` (tab), `\\` (backslash).
11. **Short Circuit**: Explain logic short-circuit evaluation in Python (`and`, `or`).
    - **Answer**: `and` stops if the first arg is False (result False). `or` stops if the first arg is True (result True).
12. **Memory**: Give an example of non-volatile memory.
    - **Answer**: Hard Drive, Flash Drive, ROM.
13. **Operators**: List the different categories of operators in Python.
    - **Answer**: Arithmetic, Relational, Logical, Bitwise, Assignment, Identity, Membership.

## True/False Questions

1. A flash (USB) drive is an example of a device containing nonvolatile memory. **(True)**
2. Arithmetic overflow can result from the division of two floating-point values. **(False)**
3. Charles Babbage is considered the first computer programmer. **(False - Ada Lovelace)**
4. The Boolean expression `'Abe' < 'Apple'` evaluates to true. **(True)**
5. `1 <= num <= 10` is allowed in Python (Chained comparison). **(True)**
6. Indentation is not significant in Python. **(False)**
7. All `if` statements must include an `else` header. **(False)**
8. The `id` function produces a unique number identifying a specific object in memory. **(True)**
9. All input is returned by the `input` function as a string type. **(True)**
10. Compiled programs generally execute faster than interpreted programs. **(True)**

## Fill in the Blanks

1. `10011` (Binary) translates to **19** in decimal.
2. A byte usually consists of **8** bits.
3. Floating-point values have both a **mantissa** and a **exponent**.
4. An identifier with a predefined meaning is known as a **keyword**.
5. The **=** operator is used to assign a value.
6. The floor division of two integers yields a result of **integer** type.
7. To check if two objects reference the same memory address, the **is** operator is used.
8. To print text without a newline, the **end** argument is used.
