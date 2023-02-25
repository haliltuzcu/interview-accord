const questions = [
  {
    id: 1,
    question: 'What is the virtual DOM?',
    answer:
      'React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.',
  },
  {
    id: 2,
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
  },
  {
    id: 3,
    question: 'Why can’t browsers read JSX?',
    answer:
      'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.',
  },
  {
    id: 4,
    question: 'What are synthetic events in React?',
    answer:
      'Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.',
  },
  {
    id: 5,
    question: 'What are Higher Order Components(HOC)?',
    answer:
      'Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.',
  },
  {
    id: 6,
    question: 'What are Pure Components?',
    answer:
      'Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.',
  },
  {
    id: 7,
    question: 'What is React Router?',
    answer:
      'React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.',
  },
  {
    id: 8,
    question: 'What are the major features of React?',
    answer:
    `The major features of React are:
    Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code,
    It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive,
    Supports server-side rendering,
    Follows Unidirectional data flow or data binding,
    Uses reusable/composable UI components to develop the view.`,
  },
  {
    id: 9,
    question: 'What is the difference between Element and Component?',
    answer:
      'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated. Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.',
  },
  {
    id: 10,
    question: 'How to create components in React?',
    answer:
      'There are two possible ways to create a component: 1. Function Components, 2. Class Components',
  },
  {
    id: 11,
    question: 'When to use a Class Component over a Function Component?',
    answer:
      'If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state, lifecycle methods and other features that were only available in class component right in your function component. So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.',
  },
  {
    id: 12,
    question: 'What is state in React?',
    answer:
      'State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.',
  },
  {
    id: 13,
    question: 'What are props in React?',
    answer:
      'Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.',
  },
  {
    id: 14,
    question: 'What is the difference between state and props?',
    answer:
      'Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.',
  },
  {
    id: 15,
    question: 'What is "key" prop and what is the benefit of using it in arrays of elements?',
    answer:
      'A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed. Keys should be unique among its siblings.',
  },
  {
    id: 16,
    question: 'What is the difference between Shadow DOM and Virtual DOM?',
    answer:
      'The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.',
  },
  {
    id: 17,
    question: 'What is React Fiber?',
    answer:
      'Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.',
  },
  {
    id: 18,
    question: 'What are controlled components?',
    answer:
      'A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.',
  },
  {
    id: 19,
    question: 'What are uncontrolled components?',
    answer:
      'The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.',
  },
  {
    id: 20,
    question: 'What is the difference between createElement and cloneElement?',
    answer:
      'JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.',
  },
  {
    id: 21,
    question: 'What is Lifting State Up in React?',
    answer:
      'When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.',
  },
  {
    id: 22,
    question: 'What is context?',
    answer:
      'Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.',
  },
  {
    id: 23,
    question: 'What is reconciliation?',
    answer:
      'When a component\'s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.',
  },
  {
    id: 24,
    question: 'Why React uses className over class attribute?',
    answer:
      'class is a keyword in JavaScript, and JSX is an extension of JavaScript. That\'s the principal reason why React uses className instead of class. Pass a string as the className prop.',
  },
  {
    id: 25,
    question: 'What are fragments?',
    answer:
      'It is a common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.',
  },
  {
    id: 26,
    question: 'What are stateless components?',
    answer:
      'If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.',
  },
  {
    id: 27,
    question: 'What are stateful components?',
    answer:
      'If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.',
  },
  {
    id: 28,
    question: 'Can you force a component to re-render without calling setState?',
    answer:
      'By default, when your component\'s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate(). It is recommended to avoid all uses of forceUpdate() and only read from this.props and this.state in render().',
  },
  {
    id: 29,
    question: 'What is the difference between React and ReactDOM?',
    answer:
      'The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().',
  },
  {
    id: 30,
    question: 'Why you can\'t update props in React?',
    answer:
      'The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can\'t modify received props.',
  },
]
export default questions