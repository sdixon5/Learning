# JavaScript Algorithms and Data Structures

## Section 1: Introduction

Discusses all topics covered and best order to watch everything in. Boils down to each section has a list of pre-reqs, watch/learn those before moving on.

### How he runs his code:

All in browser.
No downloads.

## Section 2: Big O Notation

Contains math!

- Motivate the need for big o
- What is it?

  A way to compare code and determine which one is "best". We can assign generalized labels to each algorithm.

  It is a way to talk about how code compares to another.

  A way to talk about trade-offs

  Is useful to debug code.

  And ofcourse, it comes up in interviews!

- Simplify expressions
- Define "time complexity" and "space complexity"
- Evaluate the time and space complexity of different algorithms
- What is a logarithm?

Addition example has a slide with the math behind how the n(n+1)/2 alorigthm was made.

What does better mean?

- Faster? (we will focus on this)
- less memory usage?
- more readable?
- less characters?

The problem with time

- diff machines record diff time
- same machine will record diff time
- fast algorithms, speed measurement not precise enough

If not time, then what?

- Rather than time, count the number of simple operations.

Counting Operations

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

- There are 3 operations in the function above, 1 multiplication, 1 addition, 1 division. Those are the operations.

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

- The addition operation in the loop is not one operation. We are adding n, so the plus in the loop is n number of operations. So if n = 5, then 5 operations, but if n = 1 billion, then 1 billion operations. So there are n operations in this function. Plus the equals sign is another operation, so another n operations. The i++ is n additions and n assignments, the comparisons are n operations. The total and i assignments are 1 each.

- The high end of the number of operations is 5n+2
- The low end of the number of operations is 2n

- Regardless of the exact number, the number of operations grows roughly proportionally with n

Visualizing Time Complexities

- Cool graphing, easy to see time differences.

### Big O

Big O Notation is a way to formalize fuzzy counting.

It allows us to talk formally about how the runtime of an algorithm grows as the input grows

We only care about the broad trends.

Big O Definition

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventaully less than a constant times f(n), as n increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

Big O talks about the worst case scenario (the upper bound)

We only care about the order of magnitude

A loop in a loop is n^2, because it has the run through the list multiple times

### Simplifying Big O Expressions

Constants don't matter

Smaller terms don't matter

Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### Space Complexity

Auxiliary space complexity refers to the space taken up by the algorithm itself and not the space taken up by the inputs

In Javascript

- most primitives (bools, int, undefined, null) are constant space
- strings require O(n) space (where n is the string length)
- References types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

A variable that is set and changed is O(1)
An array that is set and is added to is O(n)

### Logarithms

What is a log again?

A log is the reverse of exponents

log2(8) = 3 (is really asking 2 to the power of what will give us 8) --> 2^3 = 8

log2(value) = exponent --> 2^exponent = value

for us we will omit the 2, the base doesn't matter, we are looking for the general trends

This isn't a math course, so here's a rule of thumb...

- The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**.

Examples

- log(8) = 3
- log(25) ~ 4.64

Who cares?
-searching algorithms have logarithmic time complexity
-efficient sorting algorithms involve logs
-recursion sometimes involves logarithmic space complexity

Peformance of algorithm is analyzed with Big O

## Section 3: Analyzing Performance of Arrays and Objects

This section will covers the runtime for arrays, objects and built-in js methods

### Objects

Unordered, key value pairs

When to use objects

- when you don't need order
- when you need fast access / insertion and removal

**Big O of objects**

- insertion -> O(1)
- removal -> O(1)
- searching -> O(n)
- access -> O(1)

when you don't need any ordering, objects are an excellent choice!

js uses hashmaps to create objects

**Big O of Object Methods**

- Object.keys -> O(n)
- Object.values -> O(n)
- Object.entries -> O(n)
- hasOwnProperty -> O(1)

### Arrays

Ordered lists!

When to use arrays?

- when you need order
- when you need fast access/insertion and removal (sort of...)

**Big O of arrays**

- Insertion - It depends
- Removal - It depends
- Searching - O(n)
- Access - O(1) (if using the index)

Insertion at end is O(1), array.push
Insertion at start is O(n), have to reindex everything, array.unshift()

Remove from beginning forces a re-index. So O(n) array.shift()
Remove from end of array... O(1) array.pop()

**Big O of Array Operations**

- push -> O(1)
- pop -> O(1)
- shift -> O(n)
- unshift -> O(n)
- concat -> O(n)
- slice -> O(n)
- splice -> O(n)
- sort -> O(n \* log n)
- forEach/map/filter/reduce/etc. -> O(n)

## Section 4: Problem Solving Approach

Objectives:

- define what an algorithm is
  - a **process** or **set of steps** to accomplish a certain task
- devise a plan to solve algorithms
- compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

Why do i need to know this?

- almost everything that you do in programming involves some kind of algorithm!
- it's the foundation for being a successful problem solver and developer

How do you improve?

1. devise a plan for problem solving
2. master common problem solving patterns

This phase covers the strategies.

Problem solving

- understand the problem
- explore concrete examples
- break it down
- solve/simplify
- look back and refactor

### Understand the problem

Note: many of these strategies are adapted from **George Polya**, whose book _How To Solve It_ is a great resource for anyone who wants to become a better problem solver

investigate the problem

basic question

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determines from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem? (What is the terminology?)

### Concrete Examples

Coming up with examples can help you understand the problem better.

Allows you to provide sanity checks

User stories are an example!
Unit tests!

- Start with simple examples
- progress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

### Break it down

pseudocode
communicate the plan
express the steps

Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

It's all about seeing your process in interviews!

### Solve/simplify

Solve the problem ... if you can't ... solve a simpler problem

#### Simplify

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

### Look back and refactor

Congrats on solving it, but you're not done!

Refactoring questions?

- can you check the result?
- can you dervice the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem?

## Section 5: Problem Solving Patterns

### Some common patterns

- frequency counter
- multiple pointers
- sliding window
- divide and conquer
- dynamic programming
- greedy algorithms
- backtracking
- many more!

not official terminology for the patterns

### frequency counter pattern

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations with array/strings

Example

- Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false (must be the same frequency)
```

#### A naive solution O(n^2)

```
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex,1)
  }
  return true
}
```

- is two loops because obvious for loop but indexOf is also a for loop, so a loop nested in a loop is n^2

#### refactored O(n)

```
function same(arr1, arr2){
  if(arr1.length != arr2.length){
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true;
}
```

#### anagram challenge

anagrams

- given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```
validAnagram('', '') //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('texttwisttime', 'timetwisttext') //true
```

##### solution

```
function validAnagram(first, second){
  if (first.length != second.length){
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++;){
    let letter = first[i];

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++;){
    let letter = second[i];

    if(!lookup[letter]){
      return false;
    }
    else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
```

### multiple pointers pattern

- creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

- very efficient for solving problems with minimal space complexity as well

#### example

- write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

```
sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
sumZero([-2,0,1,3]) //undefined
sumZero([1,2,3]) //undefined
```

##### naive solution time: O(n^2) space: O(1)

```
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}
```

#### using multiple pointer pattern time: O(n) space: O(1)

```
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }
    else if(sum > 0){
      right--;
    }
    else {
      left++;
    }
  }
}
```

#### another example, countUniqueValues

implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
countUniqueValues([1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4
```

##### his solution

-he uses two pointers and replaces values in the array at position i with the value of position j.
seems like overkill, just use an object!

```
function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

## Section 6: 100% OPTIONAL Challenges

## Section 7: Recursion

## Section 8: Recursion Problem Set

## Section 9: Bonus CHALLENGING Recursion Problems

## Section 10: Searching Algorithms

## Section 11: Bubble Sort

## Section 12: Selection Sort

## Section 13: Insertion Sort

## Section 14: Comparing Bubble, Selection, and Insertion Sort

## Section 15: Merge Sort

## Section 16: Quick Sort

## Section 17: Radix Sort

## Section 18: Data Structures Introduction

## Section 19: Singly Linked Lists

## Section 20: Doubly Linked Lists

## Section 21: Stacks + Queues

## Section 22: Binary Search Trees

## Section 23: Tree Traversal

## Section 24: Binary Heaps

## Section 25: Hash Tables

## Section 26: Graphs

## Section 27: Graph Traversal

## Section 28: Dijkstra's Algorithm!

## Section 29: Dynamic Programming

## Section 30: The Wild West
