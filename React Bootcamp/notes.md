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

* This section was an exercise, everything was done in `code`.

# Section 8: React State Patterns

## Lesson 57: Updating Existing State

### React State Patterns

### Goals

* Learn how to update state based off of existing state.

* Properly manage state updates for mutable data structures.

* Discuss best practices for modeling state and designing components.

### Setting State Using State

* One way to setState of an already existing state object is the following:

    ```
    singleKill(){
            this.setState({ score: this.state.score + 1 });
        }
    ```
* But it is not the best idea and presents some issues

* The main reason you do not want to do it this way, is because it depends on the previous state which could lead to issues.

* If we set up another example:

    ```
    tripleKill(){
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
    }
    ```

* Interestingly when calling this function from a button click the score of kill is not 3, as one might expect. Instead, the score is 1. And that has to do with the was setState works

* We've established that `**setState()**` is asynchronous...

* So: it's risky to assume previous call has finished when you call it. Also, React will sometimes batch (squash together) calls to `**setState**` together into one for performance reasons.

* React will essentially do the last call when it sees a similar call, so it will only call the last `setState` for `tripleKill`. So if we changed the last `setState` to add 4. Then the application will add 4 when we click the `tripleKill` button.

* You can think of React as only wanting to execute the latest version of a specific call.

* If a call to `**setState()**` depends on current state, the safest thing is to use the alternate 'callback form'.

### `setState` Callback Form

* `this.setState(callback)`

* Instead of passing an object, pass it a callback with the current state as a parameter.

* The callback should return an object representing the new state.

    ```
    this.setState(curState => ({ count: curState.count + 1 }));
    ```

* Example:

    ```
    tripleKill(){
        //st references the current state
        this.setState(st => { 
            return {score: st.score + 1 }; 
        });
        this.setState(st => { 
            return {score: st.score + 1 }; 
        });
        this.setState(st => { 
            return {score: st.score + 1 }; 
        });
    }
    ```

### Abstracting State Updates

* The fact that you can pass a function to `this.setState` lends itself nicely to a more advanced pattern called **functional setState**.

* Basically you can describe your state updates abstractly as separate function. But why would you do this?

    ```
    //elsewhere in the code
    function incrementCounter(prevState){
        return { count: prevState.count + 1 };
    }
    //somewhere in the component
    this.setState(incrementCounter);
    ```

* Because testing your state changes is as simple as testing a plain function:
    ```
    expect(incrementCounter({ count: 0 })).toEqual({ count: 1 });
    ```

* This pattern also comes up all the time in Redux!

* Why don't we have to bind the incrementScore function?

    * Answer from Colt in the Q&A:
    
        * We only need to bind methods when they are being called outside the context of the component, like when we pass them to an onClick or other event handler prop.  When we do something like onClick={this.tripleKill} we are not actually calling that function, we are just passing a reference to onClick which will eventually be called once a user clicks.  We need to bind tripleKill (and singleKill) so that the value of this is preserved in the function.  If we are simply calling a method inside of another method in the same React component, like we are with incrementScore, we don't need to bind.


## Lesson 58: Mutating State the Safe Way

### Mutable Data Structures

* Until now, we've been setting state to primitives: mainly numbers and strings.

* But component state also commonly includes objects, arrays, and arrays of objects.

    ```
    this.state = {
        //store an array of todo objects
        todos: [
            { task: 'do the dishes', done: false, id: 1 },
            { task: 'vaccum the floor', done: true, id: 2 }
        ]
    };
    ```

* You have to be extra careful modifying your array of objects!

    ```
    completeTodo(id) {
        const theTodo = this.state.todos.find(t => t.id === id);
        theTodo.done = true; //NOOOOOO

        this.setState({
            todos: this.state.todos //bad
        });
    }
    ```

* Why? It's a long story...

* Mutating nested data structures in your state can cause problems w/React. (A lot of the time it'll be fine, but that doesn't matter. Just don't do it!)

### Immutable State Updates

* A much better way is to make a new copy of the data structure in question. We can use any **pure function** to do this...

    ```
    completeTodo(id) {
        //Array.prototype.map returns a new array
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                //make a copy of the todo object with done -> true
                return { ...todo, done: true }; //... is use of the spread operator, kinda confusing
            }
            return todo; //old todos can pass through
        });

        this.setState({
            todos: newTodos //setState to the new array
        });
    }
    ```

* Pure functions such as **.map**, **.filter**, and **.reduce** are your friends. So is the **...spread operator**.

* The `...` operator in the following code is making a new array, think of it as `let newArray = [ where we pass in the current state array, and add on the new items to the array. ]`

    ```
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]}); //the spread operator makes a new array
    }
    ```

* There is a slight efficiency cost due to the O(n) space/time requried to make a copy, but it's almost always worth it to ensure that your app doesn't have extremely difficult to detect bugs due to mischevious side effects.

* While it sounds like an oxymoron, immutable state just means that there is an old state object and a new state object that are both snapshots in time.

* The safest way to update state is to make a copy of it, and then call `**this.setState**` with the new copy.

* This pattern is a *good habit* to get into for React apps and *required* for using Redux.

## Lesson 59: Desiging State: Minimizing State

### Designing State

* Desiging the state of a React application (or any modern web app) is a challening skill! It takes practice and time!

* However, there are some easy best-practices that we can talk about in this setion to give you a jump-start.

### Minimize Your State

* In React, you want to try to put as little data in state as possible.

* Litmus test

    * does *x* change? If not, *x* should not be part of state. It should be a prop.

    * is *x* already captured by some other value y in state or props? Derive it from there instead.

### Bad Example of State Design

* Let's pretend we're modelling a Person...

    ```
    this.state = {
        firstName: 'Matt',
        lastName: 'Lane',
        birthday: '1955-01-08T07:37:59.711Z',
        age: 64,
        mood: 'irate'
    };
    ```

* Does Matt's first name or last name ever change? not often I hope...

* Does Matt's birthday ever change? How is that even possible!

* Matt's **age** does change, however if we had `this.props.birthday` we could easily derive it from that.

* Therefore, the only property here that is truly stateful is arguably **mood** (although Matt might dispute this 😉).

### Fixed Example of State Design

    ```
    console.log(this.props);
    {
        firstName: 'Matt',
        lastName: 'Lane',
        birthday: '1955-01-08T07:37:59.711Z',
        age: 64,
    }

    console.log(this.state);
    {
        modd: 'insane'
    }
    ```

## Lesson 60: Desiging State: Downward Data Flow

### State Should Live On the Parent

* As previously mentioned, we want to support the "downward data flow" philosophy of React.

* In general, it makes more sense for a parent component to manage state and have a bunch of "dumb" stateless child disply components.

* This makes debugging easier, because the state is centralized. It's easier to predict where to find state:

    * *Is the current component stateless? Find out what is rendering it. There's the state.*

### State Should Live On the Parent

* Todo Example: 

    ```
    class TodoList extends Component {
        constructor(props){
            super(props);
            this.state = {
                todos: [
                    { task: 'do the dishes', done: false, id: 1 },
                    { task: 'vacumm the floor', done: true, id: 2 }
                ]
            };
        }
        /* ... lots of other methods ... */
        render(){
            return(
                <ul>
                    {this.state.todos.map(t => <Todo { ...t } />)}
                </ul>
            );
        }
    }
    ```
* **TodoList** is a smart parent with lots of methods, while the individual **Todo** items are just `<li>` tags with some text and styling.

## Lesson 61: State Design Example: Lottery

### Example Design: Lottery

### Let's Design an App!

(Image) - 6 lotto balls, with a generate button to pick new numbers

`<Lottery />`

* Should show 6 balls

* Value 1-40 generated when button clicked

### Should Be Reusable, Flexible

(Image) - Original

(Image) - Only 4 balls, numbers between 1-10

```
<div>
    <Lottery />
    <Lottery title='Mini Daily' numBalls={4}, maxNum={10} />
</div>
```

* Should be able to control title, num balls to show, and max value

### Design

* What components will we need?

* What props will they need?

* What state will we need?

### Lottery Component

* Props

    * **title**: title of the lottery
    * **numBalls**: num of balls to display
    * **maxNum**: max value of ball

* State

    * **nums**: array of `[num, num, num, ...]` for balls

* Events

    * **onClick**: regenerate nums in state

### LotteryBall Component

* Props

    * **num**: value on this ball

* State

    * none!

* Events

    * none!

## Lesson 62: State Design Example: LottoBall Component

* See Code!

## Lesson 63: State Design Example: Lottery Component

* See Code!

# Section 9: State Exercises!

## Lesson 64: State Exercise 1: Coin Flipper

### Part 1: Coin Flip
* For this part, create a coin flipping counter.

* The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

* Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

* Here’s some inspiration:

    * (gif)

* If you’d like, get creative and come up with your own coin faces! If you want to use the same coin as I did, you can find the images here:

* Heads:”https://tinyurl.com/react-coin-heads-jpg” Tails: “https://tinyurl.com/react-coin-tails-jpg”

* I did it! See `myCoinFlipper` for my solution.

## Lesson 65: State Exercise 1: Coin Flipper Solution

* See my code, or colts for solution

## Lesson 66: State Exercise 2: Color Boxes

### Part 2: Color Boxes
* For this part, you should show a series of 16 boxes (a box is just square div with a background color).

* Initially, each box should have a background color chosen from a random list of colors.

* When you click any box:

* it should change its color to a different random color.
Here’s some inspiration:

(image)

### Note: Downward Data Flow?

* For this exercise, you might need to violate the “children are dumber than their parents” rule of thumb, since each box will probably need to have its own color state, while the parent container doesn’t really need to be smart.

* One of the further study points is to see if you can design the app to make the container smarter than the child boxes. This is quite advanced though, so be careful if you go down this path!

### Further Study
* **Default Properties**
* For both parts, there are opportunities to move some things into default properties:

    * the list of possible colors for boxes
    * the number of boxes (so it doesn’t always have to be 16!)
    * the sides and images for the coin being flipped
* **Color Boxes Data Flow**
* Try to make the parent container of color boxes hold all the state. It’s a little tricky with what we know now. We’ll cover it soon, once we talk about react events in detail. Don’t sweat it if you get stuck!

## Lesson 67: State Exercise 2: Color Boxes Solution

* The solution provided works, but it lacks the ability for the parent to hold all of the state, and the reason is how does the parent know which box was clicked on, so it can re-render that box alone?

* We will learn in the next section.

# Section 10: The World of React Events

## Lesson 68: Commonly Used React Events

### React Events

### Goals

* Attach event handlers to components in React

* Use method binding to preserver the **this** context with event handlers

* Pass event handlers down as props to child components

* Understand the **key** prop that React asks for when mapping over data

### React Events Review

### React Events

* You can attach event handlers to HTML elements in React via special reserved attributes.

* ( You can do this in vanilla JS too, though the syntax is a bit different. )

### Event Attributes

* Any event you can listen for in JS, you can listen for in React.

* Examples:

    * Mouse events: `onClick`, `onMouseOver`, etc
    * Form events: `onSubmit`, etc
    * Keyboard events: `onKeyDown`, `onKeyUp`, `onKeyPress`
    * [Full List](https://reactjs.org/docs/events.html "React Events")

    ```
    class WiseSquare extends Component {
        dispenseWisdom(){
            let messages = [ /*wise message go here*/];
            let rIndex = Math.floor(Math.random() * messages.length);
        }

        render(){
            return (
                <div onMouseEnter={this.dispenseWisdom}>
                    
                </div>
            );
        }
    }
    ```

## Lesson 69: The Joys of Method Binding :(

### Method Binding

### The keyword *`this`*

* When your event handlers reference the keyword **this**, watch out!

* You will lose the **this** context when you pass a function as a handler.

* Let's see what happens when we try to move our quotes into **defaultProps**

### Fixing our binding

* There are three ways to fix this:

    1. Use **bind** inline
    2. Use an arrow function
    3. Method bind in the constructor

    * Inline
    ```
    <div className='WiseSquare' onMouseEnter={ this.dispsenseWisdom.bind(this) }>
        {/* */}
    </div>
    ```

    * Pros
    
        * Very Explicit
    
    * Cons

        * What if you need to pass `this.dispenseWisdom` to multiple components?

        * new function created on every render

## Lesson 70: Alternative Binding with Class Properties

## Lesson 71: Binding with Arguments

## Lesson 72: Passing Methods to Child Components

## Lesson 73: Parent-Child Method Naming

## Lesson 74: Quick Detour: React Keys

# Section 11: Hangman Exercise

# Section 12: Lights Out Game

# Section 13: Forms in React

# Section 14: Forms Exercise

# Section 15: Todo List Project

# Section 16: Building Yahtzee

# Section 17: React Lifecycle Methods

# Section 18: LifeCycle Methods & API Exercise

# Section 19: Building the Dad Jokes App

# Section 20: React Router:

# Section 21: Vending Machine Exercise

# Section 22: React Router Patterns

# Section 23: Router Exercises Part 2

# Section 24: The Massive Color Project Pt 1

# Section 25: The Massive Color Project Pt 2

# Section 26: JSS & withStyles (Color App)

# Section 27: The Massive Color Project Pt 3

# Section 28: The Massive Color Project Pt 4

# Section 29: The Massive Color Project Pt 5

# Section 30: The Massive Color Project Pt 6

# Section 31: The Massive Color Project Pt 7

# Section 32: Introducing React Hooks

# Section 33: React Hooks Project

# Section 34: Introducing The Context API!

# Section 35: Using Context with Hooks

# Section 36: State Management w/ useReducer & useContext

# Section 37: Next JS

# Section 38: Next: Fetching & Server API

# Section 39: Bonus: Webpack Mini Course - Your Own Simple Version of Create React App
