import React from "react";

import { addComment } from "../../../services/comment";

import "./index.css";

const AddComment = () => {
  const handleSubmit = (value) => {
    console.log("FINAL COMMENT VALUE", value);
    addComment({
      text: value,
      author: "Sabuhi Nazarov",
      createdDate: new Date(),
    });
  };

  const handleKeyUp = (e) => {
    if (e) {
      switch (e.keyCode) {
        case 13:
          if (e.target && e.target.value) {
            handleSubmit(e.target.value);
          } else alert("You need to write some comment");
          break;

        case 27:
          if (e.target && e.target.value) e.target.value = "";
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className="add-comment">
      <input placeholder="Type your comment..." onKeyUp={handleKeyUp} />
    </div>
  );
};

export default AddComment;
