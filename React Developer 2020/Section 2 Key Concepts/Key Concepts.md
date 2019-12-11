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

Data overflow --> hard to debug

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