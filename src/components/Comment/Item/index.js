import React from "react";

import "./index.css";

const CommentsListItem = ({ comment }) => {
  const { author, text, createdDate } = comment;

  const converDate = (date) => {
    const newDate = new Date(parseInt(date));
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    if (day < 9) day = `0${day}`;
    if (month < 9) month = `0${month}`;

    return `${day}.${month} ${year}`;
  };

  return (
    <div className="comment-item">
      <div className="content">{text}</div>
      <div className="meta">
        <div className="date">{converDate(createdDate)}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
};

export default CommentsListItem;
