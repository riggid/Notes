---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[pyqs|PYQs]] | [[mcqs|MCQs]]

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

***


# Unit 2: Essential Examples & Programs

This document contains a comprehensive collection of Python programs for Unit 2 (Collections & Functions), including mandatory course programs and illustrative examples.

## 1. Strings & Patterns

### Program 1: Suffix Slicing (Mandatory)
**Problem:** Print pattern `abcd`, `bcd`, `cd`, `d`.
```python
s = "abcd"
for i in range(len(s)):
    print(s[i:])
```
**Output:**
```text
abcd
bcd
cd
d
```

### Program 2: Repeated Pattern (Mandatory)
**Problem:** Print `1`, `2 2`, `3 3 3`...
```python
rows = int(input("Rows: "))
for i in range(1, rows + 1):
    for _ in range(i):
        print(i, end=" ")
    print()
```
**Output:**
```text
Rows: 3
1 
2 2 
3 3 3 
```

### Program 3: Growing Pattern (Mandatory)
**Problem:** Print `1`, `1 2`, `1 2 3`...
```python
n = int(input("Rows: "))
for i in range(n):
    for j in range(i + 1):
        print(j + 1, end=" ")
    print()
```
**Output:**
```text
Rows: 3
1 
1 2 
1 2 3 
```

### Program 4: Common Letters in Strings (Mandatory)
```python
def find_common(s1, s2):
    return set(s1) & set(s2)

print(find_common("cattle", "concat"))
```
**Output:**
```text
{'a', 'c', 't'}
```

### Program 5: Vowel Counter
```python
text = "Python Programming"
vowels = "aeiou"
count = sum(1 for char in text.lower() if char in vowels)
print(f"Vowels in '{text}': {count}")
```
**Output:**
```text
Vowels in 'Python Programming': 4
```

## 2. Lists & Tuples

### Program 6: List Operations (Basics)
```python
nums = [10, 20, 30, 40, 50]
nums.append(60)       # Add
nums.pop(0)           # Remove first
print(nums[::-1])     # Reverse print
print(nums[1:4])      # Slice
```
**Output:**
```text
[60, 50, 40, 30, 20]
[30, 40, 50]
```

### Program 7: Filter List (1-100)
**Problem:** Keep only numbers between 1 and 100.
```python
inputs = [10, 200, 55, 99, 101, -5]
valid = [x for x in inputs if 1 <= x <= 100]
print(valid)
```
**Output:**
```text
[10, 55, 99]
```

### Program 8: Student Marks Data (Mandatory)
**Problem:** Organize student marks.
```python
data = [['PES01', 90, 80], ['PES02', 88, 92]]
# Dict: SRN -> [Marks]
s_dict = {item[0]: item[1:] for item in data}

# Print SRN and Total
for srn, marks in s_dict.items():
    print(f"{srn}: Total {sum(marks)}")
```
**Output:**
```text
PES01: Total 170
PES02: Total 180
```

### Program 9: Nested List Analysis
```python
lst = [[1, 2], [3, 4, 5], [6]]
total_items = sum(len(sub) for sub in lst)
total_sum = sum(sum(sub) for sub in lst)
print(f"Count: {total_items}, Sum: {total_sum}")
```
**Output:**
```text
Count: 6, Sum: 21
```

## 3. Dictionaries & Sets

### Program 10: Word Frequency (Mandatory)
```python
text = "good book good sleep read good book"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
```
**Output:**
```text
{'good': 3, 'book': 2, 'sleep': 1, 'read': 1}
```

### Program 11: Group Words by Start Letter (Mandatory)
```python
words = ["apple", "banana", "apricot", "berry", "cat"]
groups = {}
for w in words:
    initial = w[0]
    if initial not in groups:
        groups[initial] = []
    groups[initial].append(w)
print(groups)
```
**Output:**
```text
{'a': ['apple', 'apricot'], 'b': ['banana', 'berry'], 'c': ['cat']}
```

### Program 12: Cities and States Analysis (Mandatory)
**Problem:** Analyze `State City Place` data.
```python
data = [
    "Karnataka Bangalore Lalbagh",
    "Tamilnadu Chennai Marina",
    "Karnataka Mysore Palace"
]
hierarchy = {}
for line in data:
    state, city, place = line.split()
    if state not in hierarchy: hierarchy[state] = {}
    if city not in hierarchy[state]: hierarchy[state][city] = []
    hierarchy[state][city].append(place)

print(hierarchy)
```
**Output:**
```text
{'Karnataka': {'Bangalore': ['Lalbagh'], 'Mysore': ['Palace']}, 'Tamilnadu': {'Chennai': ['Marina']}}
```

### Program 13: Set Operations (Even but not Div by 4) (Mandatory)
```python
n = 20
evens = set(range(2, n + 1, 2))
div4 = set(range(4, n + 1, 4))
result = evens - div4
print(result)
```
**Output:**
```text
{2, 6, 10, 14, 18}
```

### Program 14: Cartesian Product (Mandatory)
```python
A = {1, 2}
B = {3, 4}
product = {(a, b) for a in A for b in B}
print(product)
```
**Output:**
```text
{(1, 3), (1, 4), (2, 3), (2, 4)}
```

### Program 15: Sieve of Eratosthenes (Mandatory)
**Problem:** Find primes up to n.
```python
n = 30
sieve = set(range(2, n + 1))
while sieve:
    prime = min(sieve)
    print(prime, end=" ")
    sieve -= set(range(prime, n + 1, prime))
print()
```
**Output:**
```text
2 3 5 7 11 13 17 19 23 29 
```

## 4. Functions

### Program 16: Basic Functions (Mandatory)
```python
def even_words(s):
    return [w for w in s.split() if len(w) % 2 == 0]

print(even_words("code is poetry"))
```
**Output:**
```text
['code', 'is', 'poetry']
```

### Program 17: Flexible Arguments (*args)
```python
def summarize(*args):
    return f"Sum: {sum(args)}, Max: {max(args)}"

print(summarize(10, 20, 5, 40))
```
**Output:**
```text
Sum: 75, Max: 40
```
# Mandatory Programs - UNIT 2

> **Source**: PESU - UE25CS151A - Python for Computational Problem Solving (2025)

---

## Program 1: String Slicing Pattern

**Task**: Print a string pattern by progressively slicing.

```python
s = "abcd"
for i in range(len(s)):
    s1 = s[i:]
    print(s1)
```

**Output**:
```
abcd
bcd
cd
d
```

---

## Program 2: Number Triangle Pattern

**Task**: Print a number triangle where each row has the row number repeated.

```python
rows = int(input("Enter Rows:"))
for i in range(rows + 1):
    for j in range(i):
        print(i, end=" ")
    print()
```

---

## Program 3: Incremental Number Pattern

**Task**: Print an incremental number pattern (1, 1 2, 1 2 3, ...).

```python
n = int(input("Enter the rows:"))
for i in range(n):
    for j in range(i + 1):
        print(j + 1, end=" ")
    print()
```

---

## Program 4: String Split Operations

**Task**: Split a string and print parts using various methods.

```python
st = "Python programming"
x, y = st.split()  # tuple assignment
print(x)
print(y)
l = st.split()
print(l)
print(l[0], l[1])
print(st.split()[0])
print(st.split()[1])
print(st[:st.index(" ")])
```

---

## Program 5: Word Frequency Counter

**Task**: Count frequency of each unique word in a string using a dictionary.

```python
n = "good book good sleep read good book"
n1 = n.split()
d = {}
for word in n1:
    if word not in d.keys():
        d[word] = 0
    d[word] = d[word] + 1
print(d)
```

**Output**: `{'good': 3, 'book': 2, 'sleep': 1, 'read': 1}`

---

## Program 6: Group Words by First Letter

**Task**: Group words that start with the same alphabet using a dictionary.

```python
n = "good book good sleep read real book"
n1 = n.split()
r = {}
for word in n1:
    if word[0] not in r:
        r[word[0]] = set()
    r[word[0]].add(word)
print(r)
```

**Output**: `{'g': {'good'}, 'b': {'book'}, 's': {'sleep'}, 'r': {'real', 'read'}}`

---

## Program 7: Book Data Analysis (Multi-part)

### Data:
```python
all = """sanskrit kalidasa shakuntala
english r_k_narayan malgudi_days
kannada kuvempu ramayanadarshanam
sanskrit bhasa swapnavasavadatta
kannada kuvempu malegalalli_madumagalu
english r_k_narayan dateless_diary
kannada karanta chomanadudi
sanskrit baana harshacharita
kannada karanta sarasatammana_Samadhi
sanskrit kalidasa malavikagnimitra
sanskrit kalidasa raghuvamsha
sanskrit baana kadambari
sanskrit bhasa pratijnayogandhararayana"""
```

### a. Count Books:
```python
l = all.split("\n")
print(len(l))  # Output: 13
```

### b. Unique Languages:
```python
lang = set()
l = all.split("\n")
for line in l:
    lang.add(line.split()[0])
print(lang)          # {'sanskrit', 'english', 'kannada'}
print(len(lang))     # 3
```

### c. Books per Language:
```python
l = all.split("\n")
books_count = {}
for line in l:
    lang = line.split()[0]
    if lang not in books_count:
        books_count[lang] = 0
    books_count[lang] += 1
print(books_count)  # {'sanskrit': 7, 'english': 2, 'kannada': 4}
```

### d. Unique Authors:
```python
l = all.split("\n")
author_count = {}
for line in l:
    auth = line.split()[1]
    if auth not in author_count:
        author_count[auth] = 0
    author_count[auth] += 1
print(list(author_count))  # ['kalidasa', 'r_k_narayan', 'kuvempu', 'bhasa', 'karanta', 'baana']
print(len(author_count))   # 6
```

### e. Books by Author per Language:
```python
mapping = {}
for data in all.splitlines():
    lang, author, book = data.split()
    if lang not in mapping:
        mapping[lang] = {}
    if author not in mapping[lang]:
        mapping[lang][author] = set()
    mapping[lang][author].add(book)

for lang in mapping:
    print(lang, "=====>")
    for author in mapping[lang]:
        print("\t", author, "====>", len(mapping[lang][author]))
        for book in mapping[lang][author]:
            print("\t\t", book)
```

---

## Program 8: Set Operations - Even Numbers Not Divisible by 4

```python
n = 20
s = set(range(2, n + 1, 2))  # {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}
d = set(range(4, n + 1, 4))  # {4, 8, 12, 16, 20}
print(s - d)                  # {2, 6, 10, 14, 18}
```

---

## Program 9: Places Data Analysis

### Data:
```python
places = """karnataka bangalore lalbagh
tamilnadu kanyakumari vivekananda_rock
kerala Thiruvananthapuram padmanabha_temple
kerala idukki munnar
karnataka mysore brindavan_gardens
karnataka mysore mysore_palace
karnataka hassan shravanabelagola
tamilnadu chennai egmore_museum
tamilnadu kanyakumari kaamaakshmi_temple
karnataka bangalore cubbon_park
karnataka hampi maharnavami_dibba"""
```

### Unique States:
```python
state = set()
for line in places.split("\n"):
    state.add(line.split()[0])
print(state)      # {'kerala', 'karnataka', 'tamilnadu'}
print(len(state)) # 3
```

### Cities per State:
```python
l = places.split("\n")
result = {}
for line in l:
    state = line.split()[0]
    city = line.split()[1]
    if state not in result:
        result[state] = set()
    result[state].add(city)
print(result)

for state, city in result.items():
    print(state, "=", len(city))
```

### Places per City:
```python
l = places.split("\n")
result = {}
for line in l:
    state, city, place = line.split()
    if state not in result:
        result[state] = {}
    if city not in result[state]:
        result[state][city] = []
    result[state][city].append(place)
print(result)
```

---

## Program 10: Word Length Function

```python
def disp_count(s):
    wl = s.split()
    for word in wl:
        print(len(word), end=" ")

disp_count("Python programming is easy")  # Output: 6 11 2 4
```

---

## Program 11: Even Length Words

```python
def even_words(s):
    s = s.split()
    for word in s:
        if len(word) % 2 == 0:
            print(word, end=" ")

even_words("Indians stranded in Ukraine have been evacuated")
# Output: stranded in have been
```

---

## Program 12: Common Letters in Strings

```python
def find_common(s1, s2):
    set1 = set(s1)
    set2 = set(s2)
    return set1 & set2  # intersection

print(find_common("cattle", "concat"))  # {'c', 'a', 't'}
print(find_common("cattle", "horse"))   # {'e'}
print(find_common("cattle", "zzzzz"))   # set()
```

---

## Program 13: Student Marks Dictionary

### Data:
```python
s_list = [['PES12022001', 98, 89, 87, 92],
          ['PES12022002', 99, 88, 85, 95],
          ['PES12022003', 88, 89, 97, 98],
          ['PES12022004', 92, 85, 100, 91]]
```

### SRN with Marks List:
```python
s_dict = {}
for elem in s_list:
    s_dict[elem[0]] = elem[1:]

for srn, marks in s_dict.items():
    print(srn, ":", marks)
```

### SRN with Total:
```python
for srn, marks in s_dict.items():
    print(srn, ":", sum(marks))
```

---

## Program 14: Cartesian Product

```python
s1 = {23, 67}
s2 = {21, 79, 23}
cartesian = set()
for i in s1:
    for j in s2:
        cartesian.add((i, j))
print("Cartesian Product:", cartesian)
```

**Pythonic way (Set Comprehension)**:
```python
cartesian = {(i, j) for i in s1 for j in s2}
```

---

## Program 15: Sieve of Eratosthenes

**Task**: Find all prime numbers up to n.

```python
n = 17
sieve = set(range(2, n + 1))

while sieve:
    small = min(sieve)  # smallest is always prime
    print(small, end=" ")
    sieve = sieve - set(range(small, n + 1, small))

# Output: 2 3 5 7 11 13 17
```

**Alternative (storing primes)**:
```python
n = 17
sieve = set(range(2, n + 1))
primes = set()
while sieve:
    small = min(sieve)
    primes.add(small)
    sieve.difference_update(set(range(small, n + 1, small)))

for p in sorted(primes):
    print(p, end=" ")
```
