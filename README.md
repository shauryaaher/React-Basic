# React JS starter project
## Here are some instructions on how to get started with React JS.
If you're a React JS Starter, then here are some instructions to get started for **Windows**.

React JS has been designed and maintained by Facebook Inc. It is a very good tool for web development. It can be used to build user interfaces effortlessly and you can easily debug its code. It helps you build dynamic web apps.
Here's an example of React JS syntax.

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

```JSX
import React from 'react';
import ReactDOM from 'react-dom';

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
After the app has been created, use the `cd` command and change the directory to your app's main directory. In this case, we'll do the following.

```Terminal
cd reactjs-starter
```
Then, type `npm start` to start the local development server.
The CLI will open http://localhost:3000.
This has hot reloading enabled

You'll then get a page with a React spinning logo and some text.

Now, open a code editor or an IDE with the folder containing you app's code.

Here's a list of the folders the you'll see.

1. `node_modules`
2. `public`
3. `src`

**Note:** If you check the `index.html` file, there won't be any script tags which connect you JSX files. That's because when the page has loaded, a script tag get's embedded with webpack. **Do not add any script files in the `index.html` file.**

There might be some files outside these folders, **do not modify them**. Also, **Don't modify the node modules folder**. It contains certain packages which are necessary for your app to run.

You'll need to **delete the following files**.

In the `src` folder, delete -
1. App.js
2. logo.svg

Then, rename `index.js` in the `src` folder to `index.jsx`.

In your `index.html` file, add the following code in the `<body> and </body>` tags.

```HTML
<body>
  <div> id="root"</div>
</body>
```

Now clear all code in the `index.jsx` file and write the following code

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const element = <h1>Hi there!</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

```

And that's it! You've now created your first React JS app.
