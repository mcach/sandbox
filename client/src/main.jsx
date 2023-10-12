import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
