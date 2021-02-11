export const REQUEST_API_COMMENTS = "REQUEST_API_COMMENTS";
export const RECEIVE_API_COMMENTS = "RECEIVE_API_COMMENTS";

export const requestAPIComments = () => ({ type: REQUEST_API_COMMENTS });
export const receiveAPIComments = (comments) => ({
  type: RECEIVE_API_COMMENTS,
  comments,
});
