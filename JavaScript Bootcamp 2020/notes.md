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



