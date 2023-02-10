import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { Form, Button } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit} className="add=comment-form">
        <Form.Control
          type="text"
          value={newComment}
          placeholder="Type comment here..."
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></Form.Control>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddComment;
