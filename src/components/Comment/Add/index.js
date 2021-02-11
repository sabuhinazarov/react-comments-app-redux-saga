import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addComment } from "../../../services/comment";
import { requestAPIComments } from "../../../store/actions";

import "./index.css";

const AddComment = ({ requestAPIComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (value) => {
    console.log("FINAL COMMENT VALUE", value);
    addComment({
      text: value,
      author: "Sabuhi Nazarov",
      createdDate: new Date(),
    })
      .then(() => {
        setComment("");
        requestAPIComments();
      })
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAPIComments }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
