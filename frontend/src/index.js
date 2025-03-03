import React from "react";
import ReactDOM from "react-dom/client"; // React 18 için gerekli
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
