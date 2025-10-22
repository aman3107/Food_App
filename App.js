import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// const heading = React.createElement("h1", {}, "Hello Sir!");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Element
const jsxHeading = <h1 id="heading">Hello Sir! Aman</h1>;
const jsxHeadingMulti = (
  <>
    <h1>Hello World</h1>
    <h2>Hello India</h2>
  </>
);
// console.log(jsxHeading);
root.render(jsxHeading);

// React Functional Component

const Title = () => <h1>Food App</h1>;

const Heading = () => (
  <div>
    {jsxHeading}
    <Title />
    <h1 id="heading">Hello World</h1>
  </div>
);

root.render(
  <StrictMode>
    <Heading />
  </StrictMode>
);
