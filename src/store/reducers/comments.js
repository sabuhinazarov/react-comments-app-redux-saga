import { RECEIVE_API_COMMENTS } from "../actions";

export default (state = [], { type, comments }) => {
  switch (type) {
    case RECEIVE_API_COMMENTS:
      return comments;
    default:
      return state;
  }
};
