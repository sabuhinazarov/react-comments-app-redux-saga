import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CommentsListItem from "../Item";
import { requestAPIComments } from "../../../store/actions";

const CommentsList = ({ requestAPIComments, comments }) => {
  useEffect(() => {
    requestAPIComments();
  }, []);

  return (
    <div className="comments-list">
      {comments.length ? (
        comments.map((comment, i) => (
          <CommentsListItem comment={comment} key={i} />
        ))
      ) : (
        <div>No comments found</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ comments: state.comments });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAPIComments }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
