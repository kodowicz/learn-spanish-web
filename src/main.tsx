import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./style.css";

const rootNode = document.getElementById("root") as Element;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
