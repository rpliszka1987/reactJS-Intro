# React JS Intro Code Academy

## Table of Content

- [Description](#description)
- [ReactJS](#reactjs)
- [JSX](#jsx)

## Description

This is a repository used to learn ReactJS from Code Academy.

## ReactJS

**ReactJS** is a JavaScript library which was developed by facebook.
Reasons to use React

- Fast performance. Apps made in React can handle complex updates and still feel quick and responsive.
- Modular - Instead of writting large files of code, you can write many smaller, reusable files.
- Scalable - Large programs that display a lot of changing data are where React performs the best.
- Flexible - You can use React for interesting projects that have nothing to do with making a web app.
- Popular - React has grown in popularity and is a good tool to use.

## JSX

JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML. The way it works is when we compile the code JSX will translate the code in JavaScript.

**JSX Elements**

- JSX elements are treated as JavaScript expressions. Can go anywhere JavaScript expression can go.
- They can be saved into a variable, passed to a function, stored in object or array.

Example:

`const naBar = <nav>I am a nav bar</nav>;`

**JSX Attributes**

- JSX elements can have attributes just like in HTML.
- They can have as many attributes as you want

Example:

`const title = <h1 id="title">Title</title>`

**Nested JSX**

- You can nest JSX elements inside of other JSX elements. This works just like in HTML.
- If the JSX expression takes more then 1 line you must wrap it with a parenthesis ().
- JSX must have exactly one outermost element. Meaning first opening tag and last must belong to the same JSX element.

**Rendering JSX**

Rendering JSX is done usung the following line of code:

`ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app))`

- ReactDOM - is a name of JavaScript library.
- ReactDOM.render() - render() is a method from the ReactDOM which renders the JSX to the screen.
- ReactDOM.render() - takes in 2 arguments:
  - 1st the elements you liek to display
