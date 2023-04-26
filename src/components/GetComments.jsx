import { useEffect, useState } from "react";
import { getCommentsById, deleteComment } from "../utils/api";
import { Card, Button } from "react-bootstrap";
import AddComment from "./AddComments";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const userValue = useContext(UserContext);
  const username = userValue.loggedInUser.username;
  const [isLoading, setIsLoading] = useState(true);
  const [deletedComm, setDeletedComm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [article_id, deletedComm]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const deleteFunction = (comment) => {
    if (comment.author !== username) {
      alert("You are not authorised to delete this comment!");
      return;
    }

    setDeletedComm(false);
    setComments(comments.filter((event) => event.id === comment.id));
    deleteComment(comment.comment_id).then(() => {
      setDeletedComm(true);
    });
  };

  return (
    <div>
      <div>
        <AddComment comments={comments} setComments={setComments} />
      </div>

      {comments.map((comment) => {
        return (
          <Card
            border="secondary"
            className="single-card-style"
            key={comment.comment_id}
          >
            <Card.Text>{comment.body}</Card.Text>
            <Card.Text>
              <label className="card-label">Posted by: </label> {comment.author}{" "}
              - {comment.created_at.slice(8, 10)}-
              {comment.created_at.slice(5, 7)}-{comment.created_at.slice(0, 4)}{" "}
              @ {comment.created_at.slice(11, 19)}
            </Card.Text>
            <Card.Text>
              <label className="card-label">Votes: </label> {comment.votes}
            </Card.Text>
            <Button onClick={() => deleteFunction(comment)}>
              Delete comment
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
