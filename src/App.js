import React, { useState } from "react";
import { Provider } from "react-redux";

import store from "./store";
import CommentsList from "./components/Comment/List";
import AddComment from "./components/Comment/Add";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentsList />
        <AddComment />
      </div>
    </Provider>
  );
}

export default App;
