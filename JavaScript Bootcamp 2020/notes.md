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

