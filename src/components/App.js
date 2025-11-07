import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Header from "./Header";
import Body from "./Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
