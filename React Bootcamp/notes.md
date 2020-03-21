# Section 1

## Lesson 4: Introducting Components

The building blocks of react

Pieces of UI & view logic

Classes that know how to render themselves into HTML

There are also function components

## Lesson 7: Writing our First Components

Class Components

    The Traditional React Component
    Write Logic in a JS Class
    Must include a render method


Bable takes jsx and turns it into js

Inside of the render return you can only return one thing, one element

## Lesson 8: Function vs Class Components

Function Components

    Historically used for simpler "dumb" components
    Write logic in a JS function
    No render method needed, just return content


What's the difference?

    Both can accept props and render content

    Historically, function components couldn't use important features like:
        State
        
        Lifecycle methods
    
    With the introduction of Hooks, we can now write full-featured function components

    This course covers hooks!


Our Approach

    We'll begin working with mainly class components

    That way you only have to worry about one syntax at first

    Later in the course we learn Hooks and mainly write function components

# Section 2

## Lesson 10: Basic Rules of JSX

JSX = JavaScript Syntax Extension or JavaScript plus XML

Combine UI and JS

You can write React without JSX but it is not recommended.

Using JSX

    JSX isn't legal JavaScript
        It has to be 'transpiled' to JavaScript
    You can do this with Babel

JSX Rules

    JSX is more strict than HTML - elements must either:
        Have an explicit close tag: <b> ... </b>
        Be explicitly self-closed: <input name='msg' />
            Cannot leave off that / or will get syntax error


## Lesson 11: How JSX works behind the scenes

Babel does all of the work for us to compile the JSX into JS

## Lesson 12: Embedding JavaScript in JSX

```
class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1>My number is: {2 * 8.4}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElemnetById('root'));
```
The {} will escape JSX and will execute JS inside them ... this returns:

my number is 16.8

## Lesson 14: Standard React App Layout

App

    It's conventional for the top-level component to be named App.
    This renders the other components.

    This way readers of code knwo where to start
    This is usually the only thing rendered in index.js

Order of Script Tags is important. 

Used script tags have to be known before they can be used.

So if index.js has a hello component then when loading scritps it should be ...

Hello.js
index.js



