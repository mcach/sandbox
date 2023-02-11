// Import libraries.
import React from "react";
import ReactDOM from "react-dom/client";

// Import components.
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
