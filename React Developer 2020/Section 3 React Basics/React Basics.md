# Section 3: React Basics

## Lesson 14: NPM vs YARN

Install dependencies from package.json:
```
npm install == yarn
```


Install a package and add to package.json:
```
npm install package --save == yarn add package
```


Install a devDependency to package.json:
```
npm install package --save-dev == yarn add package --dev
```


Remove a dependency from package.json:
```
npm uninstall package --save == yarn remove package
```


Upgrade a package to its latest version:
```
npm update --save == yarn upgrade
```


Install a package globally:

```
npm install package -g == yarn global add package
```

## Lesson 18: React Project Setup

Create react app gets rid of the need for babel and webpack

babel will take js files with react and verify that they can run on all browsers

webpack is a module bundler

webpack bundles and optimizes code for production

create react app is a cli

the src folder is our playground/workspace

package.json allows for us to have the react components

the react app just replaced the `<div id="root"></div>` on the public html file

react lets us write html syntax inside of our js file

react dom --> the robot that replaces the dom pieces with our virtual dom changes

## Lesson 19: Don't eject

what eject does is create a config folder and a scripts folder

## Lesson 20: Class Components

By using a class component instead of a function, we now have access to something called the state, ie the state of the application.

State is some js object with properties that we can access at any point within our class

`Super()` calls the constructor method on the component  --> gives us access to the this.state property

`this.setState` can be called to change the state, must specifiy which property of the state we want to change

## Lesson 21: Thinking in JSX

why a class and not a function

class vs function is a big part of react hooks

className is a JSX attribute, because in js class means somethinig else

`{}` is a js expression

as soon as state changes via setstate we re-render the page because render is called again

onClick is upper c due to camal case in JS

## Lesson 23: Optional: map`()` + key attribute

`A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

If you are new to the concept of using the map() function we saw in the previous video and you would like to learn more, we created a bonus video to explain the function in more detail. Simply go to Appendix 1: Key Developer Concepts at the bottom of the course video player, and watch the video on the map() function.`

## Lesson 24: Single Page Application

Life Cycle Methods and APIs in next lesson

in the import field, the React {Component} --> the curly braces plus element = destructering

the birth of spa --> instead of requesting for a page, we request data, ie calling an api

## Lesson 25: Fetching Content

