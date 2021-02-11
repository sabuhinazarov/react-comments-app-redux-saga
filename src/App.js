import React, { useState } from "react";
import { Provider } from "react-redux";

import logo from "./logo.svg";
import CommentsList from "./components/Comment/List";

import "./App.css";
import AddComment from "./components/Comment/Add";

const mockData = [
  {
    author: "Buddha",
    text:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    createdDate: "631231860000",
  },
  {
    author: "Albert Einstein",
    text: "Imagination is more important than knowledge.",
    createdDate: "-980941020000",
  },
  {
    author: "Stephen Hawking",
    text: "Intelligence is the ability to adapt to change.",
    createdDate: "664236660000",
  },
];

function App() {
  const [comments, setComments] = useState(mockData);

  const handleSubmit = (value) => {
    console.log("FINAL COMMENT VALUE", value);
  };

  return (
    <Provider>
      <div className="App">
        <CommentsList comments={comments} />
        <AddComment onSubmit={handleSubmit} />
      </div>
    </Provider>
  );
}

export default App;
