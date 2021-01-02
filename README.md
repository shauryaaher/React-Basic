# React JS starter project
## Here are some instructions on how to get started with React JS.
If you're a React JS Starter, then here are some instructions to get started for **Windows**.

React JS has been designed and maintained by Facebook Inc. It is a very good tool for web development. Here's an example of React JS syntax.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!--Metadata goes here-->
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom;

const element = <h1>Hello World!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
**_You will need to be familiar with HTML, CSS and JavaScript along with some command-line tools to use React JS._**

What you might have noticed is that HTML code was assigned to `const element` in JavaScript.
This type of syntax is called **_JSX_** which stands for JavaScript XML. It replaces the `React.createElement` method in React JS. JSX is preferred over the `React.createElement` method as it protects your app from XSS and other type of attacks and is eaisier to use.

We're gonna be using the `create-react-app` CLI to create and use React JS apps.
To install this CLI with `npm`, type the following command in your terminal.
```Terminal
npm install -g create-react-app
```
After that's done, create a folder and name it with whatever project name you like. In this example, it's name will be 'ReactJS starter'.
Then, open a terminal window in the same foler and type the following.

```Terminal
create-react-app reactjs-starter
```

Instead of putting `reactjs-starter`, you can put whatever name you want.
