import React, { useState } from "react";

import CommentsListItem from "../Item";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.map((comment, i) => (
        <CommentsListItem comment={comment} key={i} />
      ))}
    </div>
  );
};
export default CommentsList;
