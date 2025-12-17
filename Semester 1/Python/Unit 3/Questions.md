---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

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
**Answer:** `91` (McCarthy 91 function)

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

## 6. GUI (Tkinter)

**19. Widgets:**
*   **Label**: Display text/image.
*   **Button**: Trigger an action.
*   **Entry**: Single line text input.
*   **Grid vs Pack**: `grid()` uses row/col, `pack()` uses side/anchor relative positioning.

**20. Event Handling:**
**Answer:** Using `command=` parameter in buttons or `bind()` method for other events.

## 7. Short Answers

*   **PDB**: Python Debugger. Commands: `n` (next), `s` (step), `c` (continue), `q` (quit).
*   **Namespace**: A mapping from names to objects.
*   **Difference generator function vs regular**: Generator uses `yield`, returns an iterator, pauses execution. Regular returns once.
