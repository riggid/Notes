---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Examples]] | [[Questions]]

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
