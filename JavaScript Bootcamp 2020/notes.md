# Notes

## Lesson 9: NaN & Infinity

There is a NaN value, Infinity, -Infinity, 0 and -0

## Lesson 12: Unary Operators

```
let counter
counter = counter + 1;
counter += 1;
counter ++;
```

## Lesson 18: String indices

```
let song = "Surfin USA"
song[0] = "D"
song --> "Surfin USA"
```

strings in js are immutable, meaning u can't change one character of a string at a time

## Lesson 22: String escape characters

string escapes
```
\n - newline
\' - single quote
\" - double quote
\\ - backlash
```

## Lesson 23: String template literals

Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
```
`I counted ${3 + 4} sheep`. // "I counted 7 sheep"
```

must use backtick characters for string literals

{} = interpolating data

```
`You brought ${quantity} ${item} total price: $${price*quantity}`
```

double $$ is cuz the inner most is for the math operation and the outer most $ is for the number to be placed into the string

## Lesson 32: Running code from a script

Chrome console is called a REPL - Read, evaluate, print, loop

## Lesson 37: Truthy & Falsy Values

JS Falsy Values:

    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN

Everything else is truthy!

## Lesson 41: Operator Precedence

NOT (!) has higher precedence than && and ||

&& has higher precedence than ||

Can be altered with parens ()

## Lesson 42: Switch Statement

```
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
}
```

Don't forget you need to break in-between the cases otherwise after a match, every other case will run

Can have situation where multiple cases have the same output, can handle as follows:

```
let emoji = 'heart';

switch(emoji){
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}
```

## Lesson 43: Ternary Operator

condition ? expIfTrue: expIfFalse

```
let num = 7;

//if(num === 7) {
//    console.log('lucky');
//}
//else {
//    console.log('bad');
//}

num === 7 ? console.log('lucky') : console.log('bad');
```

```
let status = 'offline';

//let color;
//if (status === 'offline') {
//    color = 'red';
//}
//else {
//    color = 'green';
//}

let color = status === 'offline' ? 'red' : 'green';
```

## Lesson 48: Shift and Unshift

    - Push - add to end
    - Pop - remove from end
    - Shift - remove from start
    - Unshift - add to start

## Lesson 49: Concat

    - concat - merge arrays
    - includes - look for a value
    - indexOf - just like str.indexOf
    - join - creates a string from arr
    - reverse - reverses an array!
    - slice - copy portion of an arr
    - splice - remove/replace elements
    - sort - sorts an array

## Lesson 55: Intro to Reference Types

```
let fruit = 'orange';
let color = fruit;
fruit = 'watermelon'
```

Once fruit is set to a new value fruit and color will not have the same value

This is because they are primitive types, ie value type variables

Arrays store info via a pointer, so if you have two arrays set to the same values they will reference any changes, this is because the data is not stored in their container instead they store a reference to where the actual values are being stored.

## Lesson 56: Using Const with Arrays

You can store an array as a const, because the array stores the reference to the array and not the values of the array itself.

## Lesson 57: Nested Arrays
```
const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
]

animalPairs[2][0] //returns 'peahen'
```

## Lesson 58: Intro to Objects

    - Objects are collections of properties
    - Properties are a key-value pair
    - Rather than accessing data using an index, we use custom keys

## Lesson 59: Creating object literal

```
const fitBitData = {
    totalSteps: '308727,
    totalMiles: '211.7',
    avgCalorieBurn: '5755',
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}
```

Valid Keys

All Keys are converted to strings

*Except for Symbols, which we haven't covered yet

## Lesson 60: Accessing object properties

```
const numbers = {
    100: 'one hundred',
    15: 'sixteen',
    '76 trombones': 'great song',
    wow cool: 'awesome' //this won't work, needs the ''
}

numbers.100 //this will throw an error
numbers[100] //will work because the 'number' is converted into a string, just as what happens when 100 is used as a key in the object
numbers.76 trombones //this wont work, it starts with a # and has a space
numbers['76 trombones'] //this will work,
```

You must have the '' if you have #s or spaces inside the key string, also when accessing via square brackets must use '' otherwise js will get confused and just look for passed in value not within the object

## Lesson 61: Adding and Updating Properties
```
const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;
```

## Lesson 73: For...Of Intro
```
for (variable of iterable){
    statement
}

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for(let i = 0; i < subreddits.length; i++){
    console.log(subreddits[i]);
}

for(let sub of subreddits){
    console.log(sub);
}
```

For of only works on iterable items

## Lesson 74: Comparing For and For...Of
```
//Example of where for of is better
const magicSquare = [ [2, 7, 6], [9, 5, 1], [4, 3, 8]];

for (let i = 0; i < magicSquare.length, i++){
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++){
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

//Example of where for of is NOT better
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++>){
    console.log(`${words1[i]}${words2[i]}`);
}

//For of would be super difficult to implement on this example. Would have to do the for of on the words1 array then use indexOf to match the words2 array, which is more work and is unnecessary
```

## Lesson 75: For...Of with Objects

Unable to use with objects because objects are not iterable
```
const movieReviews = {
    Avengers: 9.5,
    'Captain America': 8.5,
    'Iron Man': 9.0,
    Thor: 8
};

//this will not work, because objects are not iterable
for (let x of movieReviews){
    console.log(x);
}
```

```
//could do this instead, could use Object.keys() or Object.values()
for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);

let total = 0;
for(let r of ratings){
    total += r;
}
let avg = total/ratings.length;
console.log(avg);
```

## Lesson 76: For...In Loops

Loop over the keys in an object
```
for (variable in object){
    statement
}
```

For in loops over the keys/properties of an object

```
const jeopardyWinnings = {
    regularPlay: 252700,
    watsonChallenge: 3000000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings){
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

let total = 0;
for(let prop in jeopardyWinnings){
    total+= jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${total}`);

//Using a for...in with an array is not recommened, each browser access the keys differently which can have major side-effects when trying to insert data into the array when using a for...in
```

## Lesson 88: Block Scope
const and let hold their block scope but var does not
```
for(var i = 0; ...){

}
//i is still accessible out here when using var, so if an i is declared before the loop it will be lost after the loop
```

## Lesson 89: Lexical Scope
```
function outer(){
    function inner(){

    }
}
\\the inner function is not accessbile except for within the outer function
```

## Lesson 90: Function Expressions
There are multiple ways to declare a function

```
function add(x,y){
    return x + y;
}

add(4,5);

//technically the function declared for sum is an annoimous function
const sum = function (x,y){
    return x + y;
}

sum(4,5);

const product = function multiply (x,y){
    return x * y;
}

product(3,5);
//multiply(3,5) will not work
```

## Lesson 93: Functions as Return Values
Note: He is using a trick that is hard to understand, may be a factory
```
function multiplyBy(num){
    return function (x){
        return x * num;
    }
}

const triple = multiplyBy(3);

triple(9); //returns 27
//it makes sense now, mutiplyBy  is just returning a function
//then calling said annonimous function via triple() is passes in x, which mutiplies by the original number
```

Another example
```
function makeBetweenFunc(x, y){
    return function (num){
        return num >=x && num <=y;
    }
}

const isChild = makeBetweenFunc(0,18);

isChild(17); //return's true
```

## Lesson 94: Callbacks

### Callback Functions
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

```
function callTwice(func){
    func();
    func();
}

function laugh(){
    console.log('HaHaHa');
}

callTwice(laugh); //laugh is a callback function!!!!!!
```

## Lesson 95: Hoisting
How JS handles function and variable declarations before running code
```
console.log(animal);
var animal = 'Tiger';
```
The code above should return an unexcepected variable error, but it doesn't 

because JS does the following essentially, techncially no code is re-written, its just OS/browser interpretation stuff
```
var animal;
console.log(animal);
animal = 'Tiger';
```
So the console.log is undefined

If using 'let' you will get an error saying the variable has not be initialized. Because let and const are not hoisted.

A function will be hoisted so it actually returns the function output.

Essentially just declare stuff before you use anything!

## Lesson 97: forEach
```
const numbers = [20, 21, 22, 23];

numbers.forEach(function(num)){
    console.log(num *2);
};

//or

function printTriple(n){
    console.log(n * 3);
}

numbers.forEach(printTriple);
```

## Lesson 98: Map

### Map
Creates a new array with the results of calling a callback on every element in the array.

```
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase();
});

texts; //['rofl', 'lol', 'omg', 'ttyl'];
caps; //['ROFL', 'LOL', 'OMG', 'TTYL'];
```

Essentailly map makes a new array for you.

## Lesson 99: Arrow Functions Intro
```
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

//parens are optional if there's only one parameter:
const square = x => {
    return x * x;
}

//use empty parens for functions w/ no parameters:
const singASong = () => {
    return "LA LA LA";
}
```

## Lesson 100: Arrow Function Implicit Return
An implicit return is an arrow function that does not need to declare the return keyword in order to return a value.

```
const isEven = num => num % 2 === 0; //one-liner implicit return
```

when the return is one expression it can be used as an implicit return, in one of two ways

```
const square = n => (
    return n * n;
)

//or

const square = n => n * n;
```

more examples
```
const nums = [1, 2, 3, 4, 5];

const doubles1 = nums.map(function (n) {
    return n * 2;
})

const doubles2 = nums.map(n => {
    return n * 2;
})

const doubles3 = nums.map(n => n * 2);

const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

//still an implicit return, just wrapped in {} so that it is easier to read what is going on

const parityList = nums.map((n) => {
    n % 2 === 0 ? 'even' : 'odd'
});
```

## Lesson 101: Array.find
.find only returns the first match

## Lesson 102: Filter
```
const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
    return n % 2 === 1; //callback returns true or false, if true item is added to odds array
})
```

## Lesson 104: Revisiting Sort
```
const prices = [400.50, 3000, 99.99, 35.99, 12.00];

prices.sort(); // will return [12,3000,35.99,400.5,9500,99.99]; because .sort switches everything to a string before comparing, dumb

prices.ascSort((a, b) => a - b); //will sort smallest to largest
prices.descSort((a, b) => b - a);
```

### Rules
arr.sort(compareFunc(a,b))
* If compareFunc(a,b) returns less than 0
    * Sort a before b
* If compareFunc(a,b) returns 0
    * Leave a and b unchanged with respect to each other
* If compareFunc(a,b) returns greater than 0
    * Sort b before a

REMEMBER sort will mutate the original array, so sorting will change the order of the original array

could do arr.slice() to create a copy then do .sort
```
const books = [{
    title: '',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing my mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
}];

books.sort((a,b ) => a.rating - b.rating); //worst to best
```

## Lesson 105: Reduce Intro

Reduce

Executes a reducer function on each element of the array, **resulting in a single value.**

```
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

//accumulator is also called the total value
//the total is passed along as the array keeps increasing the total
```

| Callback  | Accumulator   | Current Value | Return Value  |
| ---------- |:----------:|:----------:|----------:|
| first call | 3 | 5 | 8 |
| second call | 8 | 7 | 15 |
| thrid call | 15 | 9 | 24 |
| fourth call | 24 | 11 | 35 |

The accumulator/first parameter will hold the value of the previous return, until the end when it returns the end result of the reduce function.

```
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
});
```

## Lesson 106: Reduce Pt. 2

```
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currVal) => {
    if (currVal > max) return currVal;
    return max;
});
topScore; //99

//using Math library and an implicit return
const topScore = grades.reduce((max, currVal) => {
    Math.max(max, currVal);
});
```
//Could have an initial value with an extra parameter after the callback function.
```
const sum = [10, 20, 30].reduce((sum, currVal) => {
    return sum + currVal;
}, 500);
```
## Lesson 107: Even More Reduce

```
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const tally = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {}); //initial value: {} an object

tally; //{y: 7, n: 6}

//another example
const groupdedByRating = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {});
```

## Lesson 109: Default Parameters
```
//old way
function multiply(x,y){
    if(typeof y === 'undefined'){
        y = 1;
    }
    return x * y;
}

//or 
function multiply(x,y){
    y = typeof y === 'undefined' ? 1 : y;
    return x * y;
}

//new way
function multiply(a, b = 1){
    return a * b;
}

//another example
const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`);
}
```

Note: default parameters have to be at the end, 

it CAN'T be default then normal parameters, it doesn't work like that!

## Lesson 110: Spread for Function Calls

Spread

Spread Syntax allows an iterable such as an array to be expanded in places where zero or more argumetns (for function call) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literal) are expected.

Spread For Function Calls

Expands an iterable (array, string, etc.) into a list of orguments
```
const nums = [9, 3, 2, 8];
Math.max(nums); //Nan

Math.max(...nums); //67
//Same as calling Math.max(9,3,2,8);
```

Essentailly instead of passing in the array object, it will pass in the elements in the array instead.

```
function giveMeFour(a, b, c, d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red', 'blue', 'black'];

giveMeFour(colors); //returns -> a [], b undefined ...
giveMeFour(...colors); //returns -> a red, b blue ...
```

## Lesson 111: Spread in Array Literals

Spread In Array Literals

Create a new array using an existing array. Spreads the elements from one array into a new array.

```
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[ ...nums, ...nums2];
//[1,2,3,4,5,6]
['a','b', ...nums2];
//['a','b',4,5,6];
```

## Lesson 112: Spread in Object Literals

Spread in object literals

Copies properties from one object into another object literal.

```
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const cat = {
    ...feline,
    personality: 'unpredicatable',
    awesome: true
};
```

When spreading it matters the order in cases where properties have the same key name.

