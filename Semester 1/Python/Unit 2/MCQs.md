---
dg-publish: true
---
# [[../Python|Back]]
***
[[Core Notes]] | [[Questions]] | [[PYQs]] | [[MCQs]]
***
# Unit 2: Collections & Functions - MCQs

## Lists & Tuples

### Question 1
Which of the following commands will create a list?
*   A) list1 = list()
*   B) list1 = []
*   C) list1 = list([1, 2, 3])
*   D) All of the mentioned

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) All of the mentioned**
</details>

### Question 2
What is the output of the following program: `print((1, 2) + (3, 4))`
*   A) (1, 2), (3, 4)
*   B) (4, 6)
*   C) (1, 2, 3, 4)
*   D) Invalid Syntax

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) (1, 2, 3, 4)**
> 
> *Tuple concatenation joins elements: `(1, 2) + (3, 4) = (1, 2, 3, 4)`*
</details>

### Question 3
Can tuple be used as dictionary key in python?
*   A) True
*   B) False
*   C) Tuple is not used in dictionary
*   D) None of the above

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) True**
> 
> *Tuples are immutable, so they can be used as dictionary keys.*
</details>

---

## Dictionaries

### Question 1
What will be the output of the following code? `D={1:7,2:"everyone"}; print(D[2])`
*   A) 7
*   B) 1
*   C) 2
*   D) everyone

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) everyone**
> 
> *`D[2]` accesses the value with key 2, which is "everyone".*
</details>

### Question 2
Apart from indexing which alternative function is used to access the pair value?
*   A) pair()
*   B) key()
*   C) get()
*   D) None

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) get()**
> 
> *`dict.get(key)` is the safe way to access values.*
</details>

### Question 3
If you delete the key will the associated pair with the key also get deleted?
*   A) Yes
*   B) No

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) Yes**
> 
> *Deleting a key removes both the key and its value.*
</details>

---

## Sets

### Question 1
What is the output of following: `set([1,1,2,3,4,2,3,4])`
*   A) [1,1,2,3,4,2,3,4]
*   B) {1,2,3,4}
*   C) {1,1,2,3,4,2,3,4}
*   D) Invalid Syntax

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) {1,2,3,4}**
> 
> *Sets automatically remove duplicates.*
</details>

### Question 2
Which of the following statements is used to create an empty set?
*   A) []
*   B) {}
*   C) ()
*   D) set()

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) set()**
> 
> *`{}` creates an empty dictionary, not a set.*
</details>

### Question 3
If `a={5,6,7}`, what happens when `a.add(5)` is executed?
*   A) a={5,5,6,7}
*   B) a={5,6,7}
*   C) Error as there is no add function for set data type
*   D) Error as 5 already exists in the set

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) a={5,6,7}**
> 
> *Sets ignore duplicate additions. No error is raised.*
</details>

---

## String Operations

### Question 1
Which of the following is False?
*   A) String is immutable
*   B) capitalize() function converts the whole string to uppercase
*   C) lower() function converts the whole string to lowercase
*   D) None of these

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: B) capitalize() function converts the whole string to uppercase**
> 
> *`capitalize()` only capitalizes the first character.*
</details>

### Question 2
What will be the output? `print("abc DEF".capitalize())`
*   A) abc def
*   B) ABC DEF
*   C) Abc def
*   D) Abc Def

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) Abc def**
> 
> *`capitalize()` makes the first char uppercase, rest lowercase.*
</details>

---

## Functions

### Question 1
Which of the following is the use of function in python?
*   A) Functions are reusable pieces of programs
*   B) Functions don't provide better modularity
*   C) You can't create your own functions
*   D) All of the mentioned

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: A) Functions are reusable pieces of programs**
</details>

### Question 2
In a program, Function can be called ________ times.
*   A) 2
*   B) 3
*   C) 5
*   D) multiple times

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: D) multiple times**
</details>

### Question 3
Which of the following statement is a function call?
*   A) call sum()
*   B) def sum()
*   C) sum()
*   D) function sum()

<details>
<summary><strong>Check Answer</strong></summary>

> **Correct Answer: C) sum()**
</details>
