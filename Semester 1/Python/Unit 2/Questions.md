---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

# Unit 2: Question Bank (Theory & Concepts)

## Theoretical Questions

1. **Data Structures**: What is meant by data structures?
   - **Answer**: A specialized format for organizing, processing, retrieving and storing data.
2. **Tuples vs Lists**: What is a tuple? What is the main difference between a list and a tuple? (Mutable vs Immutable).
   - **Answer**: A tuple is an ordered sequence of elements. Main difference: Lists are mutable (changeable), Tuples are immutable (cannot change).
3. **Docstring**: What is a docstring? Where is it placed?
   - **Answer**: A string literal that occurs as the first statement in a module, function, class, or method definition. Used for documentation.
4. **Dictionaries**: Describe Python's dictionary data structure.
   - **Answer**: A collection of key-value pairs. Keys must be unique and immutable; values can be of any type. Unordered (in older Python, ordered in 3.7+).
5. **Exceptions**: Indicate reasons why an `IOError` might occur when opening a file.
   - **Answer**: File not found, lack of permissions, disk full, or file is a directory.
6. **List Indexing**: What is the range of index values for a list of 10 elements? (0 to 9).
   - **Answer**: 0 to 9 (positive indexing), or -1 to -10 (negative indexing).
7. **List Methods**: Which list operations do not need an index value? (`append`, `pop` (optional), `remove`, `clear`).
   - **Answer**: `append()`, `remove()`, `clear()`, `extend()`. (`pop()` uses index but defaults to last if empty).
8. **Traversal**: What is the process of accessing each element of a list one-by-one?
   - **Answer**: Traversal (often done using a `for` loop).
9. **Set syntax**: How do you denote an empty set vs an empty dictionary? (`set()` vs `{}`).
   - **Answer**: Empty Set: `set()`. Empty Dictionary: `{}`.
10. **Tuple Syntax**: How do you write a tuple of only one element? (`(x,)`).
    - **Answer**: `(x,)` (must include a comma).

## True/False Questions

1. A list in Python is an immutable linear data structure. **(False)**
2. A list traversal is a means of accessing elements one-by-one. **(True)**
3. Lists and tuples are both denoted by square brackets. **(False)**
4. Lists are immutable. **(False)**
5. `find` method returns the *index* of the occurrences, not the count. **(True - Correction from previous)**
6. `isdigit` returns true only if the string contains digits. **(True)**
7. It is important to close a file that is open for writing. **(True)**
8. The `readline` method reads up to the newline character. **(True)**

## Fill in the Blanks
1. In a List, the size can be **shrunk/grown** dynamically.
2. In Tuple, elements are enclosed in **parentheses**.
3. The **tuple** is an immutable collection type.
4. A **set** is a mutable data type with unique, unordered values.
5. A dictionary is accessed by a **key** rather than an index.
6. The **strip** string function returns a copy with leading/trailing whitespace removed.
7. When a file is opened, a **file object** is created.
