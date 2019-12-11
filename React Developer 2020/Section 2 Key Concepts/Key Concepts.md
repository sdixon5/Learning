# Section 2: React Key Concepts

## Lesson 5: The Birth of React.js

JavaScript and various browser implementations was a major issue.

DOM = tree for page

JavaScript modifies the DOM

jQuery had an API to deal with complexity of different browser JavaScript implementation

jQuery lead to building bigger website --> applications on the web

### *The Birth of SPA*

Introduction of ajax

2010 Angular JS introduced by Google

Use containers

MVC pattern

Data overflow --> hard to debug (remember the image with the arrows going in all directions)

**2013 React Open Source**

2014 AngularJS 2

## Lesson 6: Declarative vs Imperative

1. Don't touch the DOM. I'll do it.

    - Imperative - directly change individual parts --> basic JavaScript

    - Declarative approach - react - dom manipulation is performance bottleneck

    - reflow - recalcuate page layout

    - react just wants to know what the page should look like - a javascript object

    - don't have to do things one by one

    - state = data of application at a given time

## Lesson 7: Component Architecture

2. Build websites like lego blocks

    - built around the idea of reusable components

    - small components put together build a bigger component

    - able to share components

    - are just javascript functions

    - componets = javascript functions which receive input/attributes called props and returns html inside of javascirpt
    
        can be a component or a class

    - able to reuse and share components

## Lesson 8: One Way Data Flow

3. Unidirectional data flow

    - react is a javascript library for interactivity

    - react has state - a javascript object, contians application data

    - jsx = javascript with html inside

    - virtual dom, javascript version of the dom

        gives react a blueprint of how it should update
    
    - state has to change to change the actual webpage

    - think of it as a tree, data can not flow up, data flows down, state moves to the version of the app that fits the current state

## Lesson 9: UI Library

4. UI, The rest is up to you

    - angular is a framework, like a full kitchen

    - react is a library, like a stove

    - the blueprint is the react library

## Lesson 10: React Developer

**React keywords**

- Declarative
- JSX
- Components
- State
- Props
- VirtualDom

How to be a great react developer
1. Decide on components
2. Decide the state and where it lives
3. What changes when the state changes

