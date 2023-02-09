import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/api";
import { Card } from "react-bootstrap";
import AddComment from "./AddComments";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div>
        <AddComment comments={comments} setComments={setComments} />
      </div>
      <h2>Comments</h2>
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
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
