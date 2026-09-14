# Dev Stack

A curated, interactive UI to explore frontend, backend, database, and tooling options and build your ideal development stack.

## Technologies used
- React (with TypeScript)
- Vite
- Tailwind CSS + DaisyUI
- React Icons
- React Toastify

## Features
1. Browse categorized technology cards with ratings and badges.
2. Add technologies to a personal "Your Stack" sidebar and remove items.
3. Persistent, styled toasts for user actions (add/remove) and responsive layout.

---

## React Questions (short answers)

1. What is JSX, and why is it used in React?

JSX is a syntax extension that looks like HTML inside JavaScript. It makes describing UI structure easier and maps directly to React elements.

2. What is the difference between props and state?

Props are read-only inputs passed from parent to child components. State is internal data a component manages and can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState creates a state variable and a setter function inside a functional component. In this project it's used in `Technologies` to manage the array of selected technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs side effects (like fetching data) after render. It's useful for loading JSON so it runs once on component mount. (This project uses a Suspense + async fetch approach, but useEffect is commonly used for similar data loading.)

5. Why does every item in a .map() list need a unique key prop?

Keys help React identify items between renders so it can efficiently update, insert, or remove elements without re-rendering the whole list.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering displays different UI based on state. Example: the `SelectedTechnology` component shows either the list of selected items or a "Your Stack is empty" message depending on whether any technologies are selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

You pass data down via props. A child sends information back by calling a function prop provided by the parent (for example a setter from `useState`).

---

Enjoy exploring and customizing your stack! Feel free to open an issue or make improvements.
