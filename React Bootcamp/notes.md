# Section 1: A Taste of React

## Lesson 4: Introducting Components

 * The building blocks of react

 * Pieces of UI & view logic

 * Classes that know how to render themselves into HTML

 * There are also function components

## Lesson 7: Writing our First Components

### Class Components

 * The Traditional React Component
 * Write Logic in a JS Class
 * Must include a render method

 * Babel takes jsx and turns it into js

 * Inside of the render return you can only return one thing, one element

## Lesson 8: Function vs Class Components

### Function Components

 * Historically used for simpler "dumb" components
 * Write logic in a JS function
 * No render method needed, just return content

### What's the difference?

 * Both can accept props and render content

 * Historically, function components couldn't use important features like:
     * State

     * Lifecycle methods

 * With the introduction of Hooks, we can now write full-featured function components

 * This course covers hooks!

### Our Approach

 * We'll begin working with mainly class components

 * That way you only have to worry about one syntax at first

 * Later in the course we learn Hooks and mainly write function components

# Section 2: Introducing JSX

## Lesson 10: Basic Rules of JSX

 * JSX = JavaScript Syntax Extension or JavaScript plus XML

 * Combine UI and JS

 * You can write React without JSX but it is not recommended.

### Using JSX

 * JSX isn't legal JavaScript
     * It has to be 'transpiled' to JavaScript
 * You can do this with Babel

### JSX Rules

 * JSX is more strict than HTML - elements must either:
     * Have an explicit close tag: `<b> ... </b>`
     * Be explicitly self-closed: `<input name='msg' />`
         * Cannot leave off that / or will get syntax error

## Lesson 11: How JSX works behind the scenes

 * Babel does all of the work for us to compile the JSX into JS

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

 * The {} will escape JSX and will execute JS inside them ... this returns:

 * my number is 16.8

## Lesson 14: Standard React App Layout

### App

 * It's conventional for the top-level component to be named App.
 * This renders the other components.

 * This way readers of code knwo where to start
 * This is usually the only thing rendered in index.js

 * Order of Script Tags is important.

 * Used script tags have to be known before they can be used.

 * So if index.js has a hello component then when loading scritps it should be ...

     * Hello.js
     * index.js

# Section 3: Props and More

## Lesson 15: Intro to React Props

### Properties

 * aka. Props

 * A useful component is a reusable one.

 * This often means making it configurable or customizable.

## Lesson 16: Props are Immutable?

### Properties Requirements

 * Properties are for confiuring your component

 * Properties are immutable
     * they don't change, they cannot change
     * props are read only!
     * cannot add props either

## Lesson 17: Other types of props

### Properties Requirements

 * Properties can be strings

 * For other types, embed JS expression using the curly braces
     * this is how you pass in numbers, arrays and other JS data types

## Lesson 21: looping in JSX

 * Looping in JSX

 * It's common to use array.map(fn) to output loops in JSX

## Lesson 22: Adding Default Props

### Default Props

 * Components can specify default values for missing props

 * Simply define an object called default props

```
class Hello extends React.Component {
    static defaultProps = {
        from: "Joel",
    };
}
```

 * YES ... the object must be called defaultProps !

## Lesson 23: Styling React

### Styling React

Like normal with a few react specific tweaks

Inline Styles

    You can inline CSS styles, but now style takes a JS object

# Section 4: Introducing Create React App

## Lesson 24: Intro to Create React App

 * React is a front-end library ... you don't need server-side stuff

 * You can get react.js and react-dom.js from a CDN

 * You can transpile JSX in the browser at runtime.

 * But there is a better way

### Create React App

 * Create React App is a utility script that:

     * Creates a skeleton react project

     * Sets it up so that JS files are run through Babel automatically

     * Lets us use super-modern JavaScript features/idioms

     * Makes testing & deloyment much easier

## Lesson 27: Starting Up the Server

### Webpack

 * CRA is built on top of 'Webpack', a JS utility that:
     * Enables module importing/explorting
         * Packages up all CSS/images/JS into a single file for browser
         * Dramatically reduces # of HTTP requests for performance
     * Hot reloading: when you change a source file, automatically reloads
         * Is very clever and tries to only reload relevant files
     * Enables easy testing and deployment

## Lesson 28: Modules: Import & Export Crash Course

### Modules

 * CRA uses ES2015 'modules'

 * This is a newer, standardized version of Node's require()

 * You use this to export/import classes/data/functions between JS files

### Export Default

 * Export Default will only export one function, so in the example only helpful() is exported

 * Instead could export {helpful, sort, sing} but in doing so will have to change the import statement, can no longer just be h or help, also has to be {helpful, sort, sing} and in this import the names must match, because we are looking for a specific thing

 * In the second case order does not matter because we are going based on the name

 * You can have a default export and additional exports just the import changes...
import helpful, {sort, sing} from './filename';

### To Default or Not?

 * Conventionally, default exports are used when there's a 'most-likely' thing to export.

 * For example, in a React component file, it's common to have the component be the default export.

 * You never need to make a default export, but it can be helpful to indicate the most important thing in a file.

## Lesson 31: Create React App Conventions

### CRA and Components

 * Each React component goes in separate files
     * src/Car.js for Car component
     * src/House.js for House component
 * Components extends Component(imported from React)
     * Export the components as the default object
 * Skeleton assumes top object is App in App.js
     * Best to keep this

## Lesson 32: CSS and Assets in Create React App

### Assets and CRA

 * To include images and CSS, you can import them in JS files

### CSS

 * Make a CSS file for each React component
     * House.css for House component
 * Import it at the top of House.js
     * Create-React-App will automatically load that CSS
 * Convention to add className="House" onto House div
     * And use that as a prefix for sub-items to style:
    ```
        <div className="House">
            <p className="House-title"></p>
            <p className="House-address"></p>
        </div>
    ```

 * Styles used in any css file will be used if they are imported. So even if you make a div specific style in Dog.css when dog.css is imported than the div styling will be applied to all other divs within the application, essentially just like css works by default

### Images

 * Store images in src/folder with the components
 * Load them where needed, and use imported name where path should go

# Section 5: Pokedex Project

 * This was an exercise section, see source code to see what was done.

# Section 6: Introducing State

## Lesson 40: State Goals

### Goals

 * Understand the concept of state in web applications
 * Learn how to model state in React
 * Use events to trigger state changes

## Lesson 41: Quick Detour: React Dev Tools

 * Use the react dev tools

## Lesson 42: State in General

### What is State?

 * In any sufficeintly advanced web application, the user interface has to be stateful.

 * Examples:
     * Logged-In Users see a different screen than logged-out users

     * clicking 'edit profile' opens up a modal (pop-up) window

     * sections of a website can expand or collapse, for instance clicking 'read more'

 * The state of the client interface (frontend) is not always directly tied to state on the server.

### State Changes

 * State is designed to constantly change in response to events.

 * Example:
     * A great way to think about state is to think of games, for instance chess. At any point in time, the board is in a complex state.

         * Every new move represents a single discrete state change.

### What Does State Track?

 * There are two types of things state on the client/frontedn keeps track of:

     * **UI logic** - the changing state of the interface e.g., there is a modal open right now because I'm editing my profile

     * **business logic** - the changing state of data e.g., in my inbox, messages are either read or unread, and this in turn affects how they display.

### Vanilla / jQuery State

* The way we kept track of state with jQuery was by selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes.

* In other words, we were inferring the state of the application from the DOM itself.

* React is going to do the opposite!

## Lesson 43: Initializing State

### Core React Concept Review

 * component

     * building block of React

     * combines logic (JS) and presentation (JSX)

  * prop

     * data passed to a component (or found via defaults)

     * immutable; component cannot change its own props

  * state

     * internal data specific to a component

     * data that changes over time!

### What is a React State?

 * In React, state is an instance attribute on a component.

 * It's always an object (POJO), since you'll want to keep track of several keys/values.

     * POJO = Plain Old JavaScript Object
    
### Initial State

 * State should be initialized as soon as the component is created.

 * So we set it in the constructor function:
    ```
    class ClickCount extends Component {
        constructor(props) {
            super(props);
            this.state = {
                numClicks: 0 // start at zero clicks
            };
        }
    }
    ```
    
### React Constructor Function

 * If your component is stateless, you can omit the constructor function.

 * If you are building a component with state, you need a standard React constructor.

 * **constructor** takes one argument, **props**

 * You must call `super(props)` at start of constructor, which 'registers' your class as a React **Component**

 * Inside the instance methods, you can refer to `this.state` just like you did `this.props`

 ## Lesson 44: IMPORTANT! Alternate Syntax

 * The alternate syntax uses something called the class properties proposal

 * Instead of using:

    ```
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        };
    }
    ```

 * We instead uses this:
    
    ```
    state = {
        score: 99,
        gameOver: false
    };
    ```

 ### So what is happening?

 * Babel is taking the non JS code, (the second example) and turning it into JS code.

 * Babel goes and set the constructor on each instance of the class, setting the state to the one we created.

 * Colt does not lead with the second option, because he does not want to confuse people, and you need to have babel in order to use it. Using this syntax outside of Create-React-App would require you to configure Babel so that you could use the second option without running into syntax errors

 * So the second option is simply a shorcut, where Babel does the work behind the scenes

 * Colt does not use it as he feels it is decieving to the student, many students new to JS thought the second option was valid JS, and attempted to use it outside of React, where it fails because it is not valid JS. So instead, Colt teaches students the original way of writing the syntax, taking Babel somewhat out of the equation.

 * Also it teaches you the fundamentals and its much clearer as to what is happening

## Lesson 45: WTF is super() vs super(props)

 * It is always safe to use `super(props)`

### JS Classes and Constructors

```
class Component {
    constructor(){
        console.log('Inside Component Constructor');
    }
}

class Game extends Component {
    constructor(){
        super();
        console.log('Inside Game Constructor');
    }
}
```

 * If you do not have the `super()` you will get an error and nothing works.

 * That is because we are making a new constructor inside of the Game, which is extending from the Component. When we do this we need Game to take on the properties that are set up by the parent constructor, in this case the Component class.

 * If we go back to the JS Bootcamp and extending classes we made the following 3:

 ```
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Meow!';
    }
    eat(){
        return `${this.name} scarfs her food`;
    }
}

class Dog extends Pet{
    bark(){
        return 'Bark!';
    }
}
 ```

 * In the case of the dog, it does not need `super()` because it is not defining it's own constructor

 * But in the case of the cat, we are defining our own constructor, and we are adding a new property to the constructor

     * So inside of the cat constructor, we call `super(name, age)` where we can use the name and age construction from the Pet class which cat is extending. Then we add the livesLeft property to the class within the Cat constructor.

### Why props in `super(props)`

 * Props are just an object that are being passed in

 * When making the `<Demo animal='Tiger' food='Pizza' />` it is essentially making `new Demo({animal: 'Bobcat', food='pizza'})`

 * The following code will lead to an undefined in the console, because if we want access to the props in the constructor we need to pass them through via the `super()`

    ```
    constructor(props){
        super();
        console.log(this.props);
    }
    ```
 * Must have `super()` at the very least but `super(props)` is better so that you can have access to the props within the constructor.

## Lesson 46: Setting State Correctly

### Chaning State

 * Never change state directly. It is possible but not recommended.

 * **`this.setState()`** is the built-in React method of changing a component's state.

 * There are multiple ways to set state but we will first learn to do it by passing in an object

    ```
    this.setState({ playerName: "Matt", score: 0 })
    ```

 * Can call in any instance method  except the constructor

 * It is also not recommended to set the state from within the render method

 * Takes an object describing the state changes

 * Patches state object - keys that you didn't specify don't change

 * Asynchronous!

     * The component state will eventually update.
    
     * React controls when the state will actually change, for performance reasons.

 * Components re-render when their state changes

 * Think of `setState()` as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

 * This is why you don't set state directly, React is in charge of when the state will re-render not us

## Lesson 47: Crash Course: Click Events in React

### React Events

* State most commonly changes in direct response to some event.

* In React, every JSX element has built-in attributes representing every kind of browser event.

* They are camel-cased, like **onClick** and take callback functions as event listeners.

    ```
    <button onClick={function(e) {alert('You clicked me'); } }>
        Click me!
    </button>
    ```
### Broken Click

* If we're updating state in response to an event, we'll have to call a method with `this.setState()`

### `this` is back

* But this is undefined!

* Who is calling handleClick for us?

* What is it calling it on?

    * It doesn't remember to call it on our instance

    * The method was called 'out of context'

* What do we do?

    * `.bind()` it!

        * Within the constructor do the following: 

        ```
        this.handleClick = this.handleClick.bind(this);
        ```

        * The line above is setting the context of `handleClick` to `this`

        * The value of this inside of the constructor is the value of the individual component

## Lesson 48: Alternate Syntax Pt 2

* Can use babel proposed properties syntax

* Not taught as the primary way because it may lead to mis-understandings

* Also other way is clearier for beginners

## Lesson 51: The 'State As Props' Desgin Pattern

### State vs Props

* **State** and **Props** are the most important concepts in React (after knowing what a 'component' is).

    |term    |structure     |mutable     |purpose                       |
    |--------|--------------|------------|------------------------------|
    |state   |POJO `{}`     |yes         |stores changing component data|
    |props   |POJO `{}`     |no          |stores component configuration|

### State as Props

* A common pattern we will see over and over again is a stateful ('smart') parent component passing down its state values as props to stateless ('dumb') child components.

    ```
    class CounterPartent extends Component {
        constructor(props){
            super(props);
            this.state = {count: 5};
        }
        render(){
            // passing down parent state as a prop to the child
            return(
                <div>
                    <CounterChild count={this.state.count} />
                    // count is a prop in the counterchild component
                </div>
            )
        }
    }
    ```

* This idea is generalized in React as **'downward data flow'**. It means that components get simpler as you go down the component hierarchy, and parents tend to be more stateful than their children.

# Section 7: React State Dice Exercise
