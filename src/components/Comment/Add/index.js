import React, { useState } from "react";

import { addComment } from "../../../services/comment";

import "./index.css";

const AddComment = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (value) => {
    console.log("FINAL COMMENT VALUE", value);
    addComment({
      text: value,
      author: "Sabuhi Nazarov",
      createdDate: new Date(),
    })
      .then(() => setComment(""))
      .catch((err) => alert(err.message));
  };

  const handleKeyUp = (e) => {
    if (e) {
      switch (e.keyCode) {
        case 13:
          if (comment) {
            handleSubmit(comment);
          } else alert("You need to write some comment");
          break;

        case 27:
          if (comment) setComment("");
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className="add-comment">
      <input
        placeholder="Type your comment..."
        onKeyUp={handleKeyUp}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
    </div>
  );
};

export default AddComment;
