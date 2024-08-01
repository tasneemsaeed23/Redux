import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { storeCounter } from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

//3-wrap all app with redux provider
root.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>
);
