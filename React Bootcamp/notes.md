# Section 1: A Taste of React

## Lesson 4: Introducting Components

The building blocks of react

Pieces of UI & view logic

Classes that know how to render themselves into HTML

There are also function components

## Lesson 7: Writing our First Components

### Class Components

    The Traditional React Component
    Write Logic in a JS Class
    Must include a render method

Babel takes jsx and turns it into js

Inside of the render return you can only return one thing, one element

## Lesson 8: Function vs Class Components

### Function Components

    Historically used for simpler "dumb" components
    Write logic in a JS function
    No render method needed, just return content

### What's the difference?

    Both can accept props and render content

    Historically, function components couldn't use important features like:
        State

        Lifecycle methods

    With the introduction of Hooks, we can now write full-featured function components

    This course covers hooks!

### Our Approach

    We'll begin working with mainly class components

    That way you only have to worry about one syntax at first

    Later in the course we learn Hooks and mainly write function components

# Section 2: Introducing JSX

## Lesson 10: Basic Rules of JSX

JSX = JavaScript Syntax Extension or JavaScript plus XML

Combine UI and JS

You can write React without JSX but it is not recommended.

### Using JSX

    JSX isn't legal JavaScript
        It has to be 'transpiled' to JavaScript
    You can do this with Babel

### JSX Rules

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

### App

    It's conventional for the top-level component to be named App.
    This renders the other components.

    This way readers of code knwo where to start
    This is usually the only thing rendered in index.js

Order of Script Tags is important.

Used script tags have to be known before they can be used.

So if index.js has a hello component then when loading scritps it should be ...

Hello.js
index.js

# Section 3: Props and More

## Lesson 15: Intro to React Props

### Properties

    aka. Props

    A useful component is a reusable one.

    This often means making it configurable or customizable.

## Lesson 16: Props are Immutable?

### Properties Requirements

    Properties are for confiuring your component

    Properties are immutable
        they don't change, they cannot change
        props are read only!
        cannot add props either

## Lesson 17: Other types of props

### Properties Requirements

    Properties can be strings

    For other types, embed JS expression using the curly braces
        this is how you pass in numbers, arrays and other JS data types

## Lesson 21: looping in JSX

Looping in JSX

It's common to use array.map(fn) to output loops in JSX

## Lesson 22: Adding Default Props

### Default Props

    Components can specify default values for missing props

    Simply define an object called default props

```
class Hello extends React.Component {
    static defaultProps = {
        from: "Joel",
    };
}
```

    YES ... the object must be called defaultProps !

## Lesson 23: Styling React

### Styling React

    Like normal with a few react specific tweaks

    Inline Styles

        You can inline CSS styles, but now style takes a JS object

# Section 4: Introducing Create React App

## Lesson 24: Intro to Create React App

    React is a front-end library ... you don't need server-side stuff

    You can get react.js and react-dom.js from a CDN

    You can transpile JSX in the browser at runtime.

    But there is a better way

### Create React App

    Create React App is a utility script that:

        Creates a skeleton react project

        Sets it up so that JS files are run through Babel automatically

        Lets us use super-modern JavaScript features/idioms

        Makes testing & deloyment much easier

## Lesson 27: Starting Up the Server

### Webpack

    CRA is built on top of 'Webpack', a JS utility that:
        Enables module importing/explorting
            Packages up all CSS/images/JS into a single file for browser
            Dramatically reduces # of HTTP requests for performance
        Hot reloading: when you change a source file, automatically reloads
            Is very clever and tries to only reload relevant files
        Enables easy testing and deployment


## Lesson 28: Modules: Import & Export Crash Course

### Modules

    CRA uses ES2015 'modules'
    
    This is a newer, standardized version of Node's require()

    You use this to export/import classes/data/functions between JS files

### Export Default

    Export Default will only export one function, so in the example only helpful() is exported

    Instead could export {helpful, sort, sing} but in doing so will have to change the import statement, can no longer just be h or help, also has to be {helpful, sort, sing} and in this import the names must match, because we are looking for a specific thing
    
    In the second case order does not matter because we are going based on the name

    You can have a default export and additional exports just the import changes...
    import helpful, {sort, sing} from './filename';

### To Default or Not?

    Conventionally, default exports are used when there's a 'most-likely' thing to export.

    For example, in a React component file, it's common to have the component be the default export.

    You never need to make a default export, but it can be helpful to indicate the most important thing in a file.

## Lesson 31: Create React App Conventions

### CRA and Components

    Each React component goes in separate files
        src/Car.js for Car component
        src/House.js for House component
    Components extends Component(imported from React)
        Export the components as the default object
    Skeleton assumes top object is App in App.js
        Best to keep this

## Lesson 32: CSS and Assets in Create React App

### Assets and CRA

    To include images and CSS, you can import them in JS files

### CSS

    Make a CSS file for each React component
        House.css for House component
    Import it at the top of House.js
        Create-React-App will automatically load that CSS
    Convention to add className="House" onto House div
        And use that as a prefix for sub-items to style:
            <div className="House">
                <p className="House-title"></p>
                <p className="House-address"></p>
            </div>
    
    Styles used in any css file will be used if they are imported. So even if you make a div specific style in Dog.css when dog.css is imported than the div styling will be applied to all other divs within the application, essentially just like css works by default

### Images

    Store images in src/folder with the components
    Load them where needed, and use imported name where path should go

# Section 5: Pokedex Project


    
