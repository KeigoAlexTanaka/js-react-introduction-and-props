## ![ga-logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to React.js


![react-logo](./images/react-white-logo.png)

## Learning Objectives

* Explain what a frontend framework is and why they can be helpful in writing more complex applications.
* Explain what ReactJS is and where it fits in our applications' stack.
* Explain the component model of web development.
* Create and render React components in the browser.

## Framing

### What is a Frontend Framework?

- A framework is software providing generic functionality and structure that serves as foundation to build and deploy applications.
- Frameworks can help standardize code, give you additional functionality and performance, and can help get your code off the ground faster.  
- There are [many](https://stateofjs.com/2017/front-end/) front end frameworks and each goes about solving problems of how state is managed, updated, and represented by a view but there are many commonalities.
- There is a lot of debate over whether frontend frameworks count as frameworks at all -- some people say that they are just libraries and should be referred to as such.

### What is ReactJS?

First, let's think about where you might see a React.js app. Here are two quick and easy examples:

*   Facebook

    *   Facebook actually built React! It needed web pages that could change quickly based on a user's interaction — your Facebook feed, for example.

*   Instagram
    *   Instagram's public feed and internal system are entirely built on React.

For an intro to React, watch [this video](https://generalassembly.wistia.com/medias/lr8idjxtx8).

React is a JavaScript framework used to craft modern day UI and views for the front-end in web applications.

> **Selling Point:** By modeling small compatible components that focus on just rendering a view, we can move business logic out of the DOM, and therefore improve our app's performance, maintainability, modularity and readability.

React is "agnostic" to other tools in your front end. This means that React can 
co-exist with other Javascript frameworks, letting the other frameworks handle 
the models and controllers while having React handle the views.

### Some History

The first thing most people hear about React is "Facebook uses it."

*   First used by Facebook in 2011.
*   Adopted by Instagram in 2012.
*   Made open source in May 2013.

React was born out of Facebook's frustration with the traditional MVC model and:

  * how re-rendering something meant re-rendering **everything** (or just a lot).
  * how it had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

_If you want to get an in-depth taste of what React is all about, [here's an introduction from React.js Conf 2015](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510). We'd recommend starting around the 8:35 mark and watching until 16:30._


### React in MVC

React can be thought of as the "Views" layer.

> **Sidenote:**
> 
> In an MVC architecture, M stands for Model, V stands for Views and C stands for Controller. The model refers to the database, the View is the presentation layer, it’s what the user sees and interacts with in the browser. The Controller makes the decisions based on requests and then controls what happens in response, like clicking on links and submitting forms. It controls the interaction with the Models and Views (passing data from one to the other).

React will work with any back-end language. In Unit 3 we will be using Express and Sequelize for the models and controllers; while in Unit 4 we will be using Rails which handles both models and controllers.

<details>
  <summary>What is the role of a <strong>view</strong> in a front-end Javascript application? Click arrow for answer:</summary>
  The visual template the user sees, often populated with data from our models.
</details>

## Components and JSX

#### Learning Objectives

*   Identify and define React components
*   Describe why we use components in React
*   Build a React component
*   Describe what JSX is transpiled into

#### Preparation

*   Have `create-react-app` installed

## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse throughout.

For an intro to components, watch [this video](https://generalassembly.wistia.com/medias/h64z7lp1ir) (Note: right click to open in a new tab).

If you're used to writing out all of a page's view in a single HTML file, using components is a very different way of approaching web development.

![Templates Page](images/templates-page.png)
![Components Page](images/components-page.png)
> Source: [WanderOak - Fixed Templates vs. Components](https://wanderoak.co/fixed-templates-vs-components/)

With components, there is more integration and less separation of code based purely on file type (HTML, CSS, and JavaScript), and more towards a **component-based** separation of concerns.

*   Instead of creating a few large files, you will organize your web app into small, reusable components that encompass their own content, presentation, and behavior.

When using React, building components will be your main front-end task.

*   Because they're so encapsulated, components make it easy to reuse your code, test, and separate concerns.

##### Let's look at the component structure of the Transport for London Tube Tracker

![Wireframe](images/train-wireframe.png)
![Wireframe with components](images/wireframe_deconstructed.png)
> [MakeTea - Building Robust Apps with React](http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html)

Notice the structure of how the various components are nested:
	
```
- TubeTracker
    - Network
        - Line
    - Predictions
        - DepartureBoard
            - Trains
```

- `TubeTracker` contains the application
- `Network` displays each line on the network
- `Line` displays the stations on a line
- `Predictions` controls the state of the departure board
- `DepartureBoard` displays the current station and platforms
- `Trains` displays the trains due to arrive at a platform

### We Do: Identifying Components

Take a look at [CraigsList](https://boston.craigslist.org/search/aap) (Note: right click to open in a new tab).

![Components](images/craigslist.png)

<details>
  <summary>Each listing is a component. How can you identify this?</summary>

*   Listings look identical in structure, but have different information populating them
*   Listings are dynamically generated based on the user's search
</details>

---

### [F.I.R.S.T. Components](https://addyosmani.com/first/)

A React component is built to expect an input and render a UI with it. More importantly, a well-structured component only receives data specific to its purpose.

This is because React follows a more **functional** approach to programming. For React components under this approach, **the same input will always produce the same output**.

Best practice is that React components follow the **F.I.R.S.T.** guidelines:

#### Focused

Components should do one thing and do it well.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another.

#### Reusable

Components should be written in a way that reduces the duplication of code.

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

### You Do: Identifying Components 

> 10 minutes exercise. 5 minutes review.

* Break into groups of three
* Each group will look at one of the following websites: AirBnB, BBC, Bleacher Report, Flipboard, Imgur, Instagram, Khan Academy, Netflix, Postmates, and Reddit
* Identify the visual "components" the website is comprised of. Use markers to draw these out on the wall or your desk.

As you're drawing this out, think about the following questions:

* Where do you see `nested components`? Where do you not?
* Are there any components that share the same structure?
* Of these similar components, what is different about them?

---

## Initial Setup

In order to create a new project and to get our development environment setup, we are going to use the Terminal command [`create-react-app`](https://github.com/facebook/create-react-app). `create-react-app` is an npm package built by Facebook that writes our build dependencies for us so that we can do less configuration.

First, let's use `npm` to install `create-react-app` globally so we'll always have it available in our Terminal:

```bash
npm install -g create-react-app
```

Once it's installed, create a new directory to store the app you're about to write and `cd` into the folder. Then, use the tool to create a new React app. 
You'll have to give your new app a name; we're calling the example app `hello-world`, since that'll be our first project.

```sh
npm init react-app hello-world
```

The tool creates a new directory called `hello-world` inside the current folder. Once the installation is done, you can open your project folder in your text editor:

```sh
cd hello-world
subl .
```

Use `npm start` to start a server that will serve your new React application:

```bash
npm run start
```

After running `$ npm run start`, we can view the app at `http://localhost:3000`

> You have now set up a Hello World app!

> Note: If you ever need to stop the server, you can hit `ctrl-c` in the terminal window.

You'll notice the web page automatically refreshes every time we save a file in the directory. This is an awesome feature called live reloading that `create-react-app` comes with.

Look in the directory and see the initial project structure that `create-react-app` provides and all its dependencies:

```sh
hello_world
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── logo.svg
```

Most of the important files, which are primarily the ones where we will be working with today, are in the `src` directory.

---

### Stop / Catch Up / Investigate

Take some time and look at what's been generated. Specifically pay attention to `src/App.js` and `src/index.js`

Make small changes to the code in `src/App.js`, `src/index.js`, and `public/index.html` just to see what happens.

Your basic React app is up and running. Now you're ready to add complexity.

### We Do: Hello World - A Very Basic Component

To start, in our `/src/App.js` file, let's remove the contents and in its place add this simple, functional component.


```js
// bring in React from react
import React from 'react'

// define our Hello component
function Hello() {

    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    );
}

export default Hello
```

<details>
  <summary>Here’s the same component, but written in ES6:</summary>

```
import React from 'react'

const Hello = () => (
	<div>Hello World</div>
)

export default Hello
```
</details>

Let's break down the things we see here:

`import React from 'react'`

This imports React methods from the React library.

`function Hello()`

This is the component we're creating. In this example, we are creating a functional component and calling it "Hello."

`return()`

Every functional component must return _**one**_ jsx tag. This is what renders the component to the screen, (i.e., it controls what is displayed for this component). From this function, we return what we want to display.

- In our case, we are rendering a "Hello World!" heading: `<h1>Hello World!</h1>`.

> Note!
>
> That heading tag above looks like it's straight out of HTML, but it's actually a special language called JSX, which you'll see in the next section. For now, know that JSX will act like HTML when it's rendered to the screen.

`export default Hello`

This exposes the `Hello` component to other files. This means that other files can `import` from the `App.js` file in order to use the `Hello` component. In our case, we'll be importing it into `index.js` by calling an `import` to `App.js`.

When we try to import something from `App.js`, JavaScript will attempt to match a named export.

*   Our only named export in `App.js` is `Hello`.

The `default` keyword means that if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing `Hello` instead.

*   Only one default export is allowed per file.

### Check it out!

If you switch to your browser and navigate to [`http://localhost:3000`](http://localhost:3000), you can see your "Hello World" heading. This app dynamically reloads each time you save, so you can check your changes at any point.


## JSX

> Hey you got your HTML in my JavaScript!
>
> You got your JavaScript in my HTML!
>
> Hey You Got Peanut Butter in My Chocolate, [Reese's Peanut Butter Cups](https://youtu.be/O7oD_oX-Gio?t=5s)

Let's talk about the value that the render method returns. It looks an awful lot like an HTML heading, but it's not. We often write out React components in JSX.

JSX is [a language that compiles to Javascipt](http://blog.yld.io/2015/06/10/getting-started-with-react-and-node-js/#.V8eDk5MrJPN) and allows us to write code that strongly resembles HTML. It is eventually compiled to lightweight JavaScript objects.

Your Hello component's render method:

* Currently returns JSX, not HTML.
The JSX creates a heading with 'Hello World!'.
* Your component reads this and renders a "Hello World!" heading.

> React can be written without JSX. If you want to learn more, [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).  


## The Virtual DOM

### Learning Objectives

* Describe the Virtual DOM versus the standard DOM
* Diagram how components are called, assembled and placed on the real DOM
* Use `.jsx` file extentions for files containing JSX

## Virtual DOM Intro

You may have noticed that our `src/index.js` code mentions ReactDOM. ReactDOM doesn't refer to the same DOM we know. Instead, it refers to a Virtual DOM. The Virtual DOM is a key piece of how React works.

So, how is this different? Watch [this video](https://generalassembly.wistia.com/medias/v5qyqsir0s) to find out.

The Virtual DOM is a Javascript representation of the actual DOM. The virtual DOM is a staging area for changes that will eventually be implemented.

- Because of that, React can keep track of changes in the actual DOM by comparing different instances of the Virtual DOM.
- React then isolates the changes between old and new instances of the Virtual DOM and then only updates the actual DOM with the necessary changes.
- By only making the "necessary changes," as opposed to re-rendering an entire view altogether, we save up on processing power.
- This is not unlike Git, with which you compare the difference -- or diff -- between two commits.

![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

The JSX

```js
<h1>Hello World!</h1>
```

translates into

```js
React.createElement('h1', {}, 'Hello World!');
```

and React's virtual DOM representation of this is

```js
{
  type: 'h1',
  props: {
    children: 'Hello World!'
  }
}
```

Since React keeps this representation of what is on the page, it can be very
smart when it updates the page only to change the DOM that needs to be changed. More on this later.

> If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

So we've created the template for our component. Now, let's use `/src/index.js` to load in our new component and render it on the DOM.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

`ReactDOM.render` takes the Virtual DOM node and adds it to the actual DOM. It takes two arguments.

  1. The component.
  2. The DOM element we want to append it to.

> **NOTE:** Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/` like `<Hello />` in the above example.

## Props

### Learning Objectives

* Describe the role props plays in our applications
* Create a component that renders props

### What are Props?

Properties! Every component has `.props`

* Properties are immutable. That is, they cannot be changed while your program is running.
* We define properties in development and pass them in as attributes to the JSX element in our `.render` method.

First we can pass multiple properties to our component when its rendered in `src/index.js`.

```js
ReactDOM.render(
  <Hello name={"Tamara"} city={Brooklyn} />,
  document.getElementById('root')
)
```

Then in our component definition we have access to both values...

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You currently live in {this.props.city}.</p>
      </div>
    )
  }
}

```

### Component Data with Props

The React framework was built to handle data that changes over time.

So far, we have defined a `Hello` component. The component returns a `div` with a few elements, written in JSX.

In `App.js`, we are importing this component.

This is great, but it doesn't involve any data yet, let alone data that changes over time!

Let's make it more interesting.

Rather than displaying the hardcoded data, let's change the hello data dynamically.

The question is, how do we add a name to our `Hello` component without hardcoding it?

Find out! Try it yourself alongside [this video](https://generalassembly.wistia.com/medias/gchiu63slo) in [this codepen](https://codepen.io/celestelayne/pen/axBvyw?editors=0010) _(note: right click both for new tab!)_

### You Do - Hello World Exercise

### Code along: Adding props to our component

Let's use **props** to make our "Hello World" app more flexible.

##### First, a single prop

We want to make a greeting that's reusable for many different users, so we'll have a `name` prop for the name of the user.

In your `src/App.js`, we'll change the line that renders the `Event` component to include this `title` prop. The new line will be:

`<Hello name="Jennifer" />`

> We pass in data wherever we are rendering our component, in this case in `src/index.js`. In rendering the `Hello` component above, we pass in a prop called "name" with a value of "Jennifer".

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

ReactDOM.render(
  <Hello name={"Tamara"} />,
  document.getElementById('root')
)
```

Now, every time we render our component, we will pass in data.

If you check your application now, nothing has changed. We're passing the `name` prop into the component, but the component isn't _using_ it yet.

In our component definition we can use the `this.props.name` variable to access the value passed into the component.

```js
class Hello extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>New York City</p>
      </div>
    );
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

> The `{}` syntax in JSX renders the result of any JavaScript expression inside it. It works even without props. If you wrote `{2+2}` in your JSX, `4` would be rendered.

> Check it out! You should be able to browse to http://localhost:3000 to view this change!

## Multiple Props

### Learning Objectives

* Pass multiple individual props to a component
* Pass multiple props as an object to a component

### Intro to multiple props?

Of course, we often want components to display more complex information. To do so, we can pass multiple properties to our component! We'll use the same two steps we took to add the first prop.

First, add another prop to the component call: `<Hello name="Jennifer" />,` changes to `<Hello name="Tamara" city="Brooklyn" />`.

Update your `index.js` file to reflect this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';

ReactDOM.render(
  <Hello name={"Tamara"} city={"Brooklyn"} />,
  document.getElementById('root')
)
```

Now, in our component definition we have access to both values. Try updating the `Hello` component using `props.city` in the place we hardcoded the value previously.

```js
export default function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>You currently live in {props.city}.</p>
    </div>
  );
};
```

> Check it out! You should be able to browse to http://localhost:3000 to view this change!

### Multiple props passed from an object

If we have many props, it might get difficult to keep track when we're passing everything in to render a component. A better practice is to organize values in some kind of object and then pass props to the component from that object. Let's see this strategy.

Currently, in `index.js`, we put Tamara's name and city directly into the ReactDOM.render call. Instead, we'll create an object that holds Tamara's name and city, making it clearer for other developers and easier to change in the future. In your `index.js` file, below the import statements, add this object definition:

```
var person = {
  personName: "Tamara",
  personAge: "Brooklyn"
}
```
Next, we'll update what's passed into the component. Near the bottom of your `index.js`, modify the `ReactDOM.render()` call:

```js
ReactDOM.render(
  <Hello
    name={person.personName}
    city={person.personCity}
  />,
  document.getElementById('root')
)
```

We don't have to change anything in `App.jsx`, because it's still receiving exactly the same values for exactly the same two props - name and city. We're just sending it those values in a slightly different way.

### Multiple props from a more complex object

Since we're just pulling props out of an object, we can use any object we want. For example, we can nest an array inside it.

Let's say our user has some favorite animals. Update your object to include an array:

```js
const person = {
  personName: "Tamara",
  personCity: "Brooklyn",
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs"
  ],
};
```
Now we can use this new information as a prop, just like normal. You could choose to pass a single element (favorites[0]) or the entire array. We'll use the entire array so that the component can display all a person's favorite animals. First, update your `ReactDOM.render()` call in `index.js`:

```js
ReactDOM.render(
  <Hello
    name={person.personName}
    city={person.personCity}
    animals={person.favorites}
  />,
  document.getElementById('root')
)
```

If you check your application now, nothing has changed. Remember, a component class will just ignore any props it receives that it doesn't use. But, we want to use the favorite animals! So, second, update your Hello class render method in `App.jsx`:

```js
<div>
  <h1>Hello {props.name}!</h1>
  <p>You live in {props.city}.</p>
  <p>You love: {props.animals}</p>
</div>
```

If you check the page now, you'll see React prints the entire array, as that's what was passed in. If we wanted to include all the animals clearly, we could fix the spacing. Instead, to review some syntax, let's just modify the code to render the first value.

```js
<div>
  <h1>Hello {props.name}!</h1>
  <p>You live in {props.city}.</p>
  <p>You love: {props.animals[0]}</p>
</div>
```

Check it out!

_[Read more about using props in JSX, if you'd like!](https://facebook.github.io/react/docs/jsx-in-depth.html) This link is also in the Further Reading page at the end of the React module, under the Facebook documentation._
