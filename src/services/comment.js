import { APIClient } from ".";

export const fetchComments = async () => {
  const response = await APIClient.get("comments");

  return (response && response.data) || [];
};

export const addComment = (data) => {
  return APIClient.post("comments", data);
};
