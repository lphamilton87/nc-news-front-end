import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const username = "jessjelly";

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, newComment).then((commentFromApi) => {
      setComments((currComments) => {
        return [commentFromApi, ...currComments];
      });
      setNewComment("");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add=comment-form">
        <input
          type="text"
          value={newComment}
          placeholder="Type comment here..."
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
