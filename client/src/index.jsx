import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserStore from "./store/UserStore.js";
import GoalStore from "./store/GoalStore.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      goals: new GoalStore(),
    }}
  >
    <App />
  </Context.Provider>
);
