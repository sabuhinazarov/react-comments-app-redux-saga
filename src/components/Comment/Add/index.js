import React from "react";

import "./index.css";

const AddComment = ({ onSubmit }) => {
  const handleKeyUp = (e) => {
    console.log("EVENT", e, e.keyCode, e.target.value);

    if (e && e.keyCode === 13) {
      if (e.target && e.target.value) {
        onSubmit(e.target.value);
      } else alert("You need to write some comment");
    }
  };

  return (
    <div className="add-comment">
      <input placeholder="Type your comment..." onKeyUp={handleKeyUp} />
    </div>
  );
};

export default AddComment;
