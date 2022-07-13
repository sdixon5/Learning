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

## Section 3: Analyzing Performance of Arrays and Objects

## Section 4: Problem Solving Approach

## Section 5: Problem Solving Patterns

## Section 6: 100% OPTIONal Challenges

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
