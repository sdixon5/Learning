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

