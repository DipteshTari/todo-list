import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.css"; // Add this line
import TodoApp from "./components/TodoApp";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
