# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.







# Dev Stack Builder

Dev Stack Builder is a React-based website that helps developers explore different technologies and build their own technology stack. Users can view technology details, add technologies to their stack, remove them, and manage the selected stack easily.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## 3 Key Features

1. Explore different technologies with category, difficulty level, description, and rating.
2. Add technologies to a personal stack with duplicate prevention.
3. Remove individual technologies or clear the entire stack with toast notifications.

## Questions & Answers

### 1. What is JSX, and why do we use it?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and helps us describe how the UI should look.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What is useState, and where did you use it?

useState is a React Hook used to create and manage state in a component. In this project, it is used to manage the technology list, loading state, and selected technology stack.

### 4. What is useEffect, and why is it useful for loading JSON data?

useEffect is a React Hook used for side effects such as data loading. It is useful for loading JSON data when the component is rendered.

### 5. Why is a unique key required when rendering a list?

React needs a unique key for each list item so that it can identify which items have changed, been added, or been removed. This helps React update the UI efficiently.

### 6. What is conditional rendering? Give an example from your project.

Conditional rendering means showing different UI depending on a condition. For example, when the stack is empty, the project shows an empty-state message. When technologies are added, the selected technologies are displayed instead.

### 7. How do you pass data from a parent component to a child component? How do you communicate from child to parent?

A parent passes data to a child through props. To communicate from child to parent, the parent can pass a function as a prop, and the child can call that function to send information back to the parent.