import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { getArticlesByID, getCommentsById } from "../utils/api";
import { Card } from "react-bootstrap";
// import { Comments } from "./Comments"

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getArticlesByID(article_id),
      getCommentsById(article_id),
    ]).then(([articleFromApi, commentsFromApi]) => {
      setArticle(articleFromApi);
      setComments(commentsFromApi);
      console.log(comments)
      setIsLoading(false);
    });
  }, [article_id]);


  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <section>
      <Card
        border="secondary"
        className="single-card-style"
        key={article.article_id}
      >
        <Card.Title>
          {article.article_id}: {article.title}
        </Card.Title>
        <Card.Img src={article.article_img_url} alt={article.title}></Card.Img>
        <Card.Body>
          <Card.Text>Topic: {article.topic}</Card.Text>
          <Card.Text>{article.body}</Card.Text>
          <Card.Text>Author: {article.author}</Card.Text>
          <Card.Text>Votes: {article.votes}</Card.Text>
          <Card.Text>Comments: {article.comment_count}</Card.Text>
          <Card.Text>Date posted: {article.created_at.slice(0, 10)} @ {article.created_at.slice(11, 19)}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default SingleArticle;
