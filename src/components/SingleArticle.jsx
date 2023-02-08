import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { getArticlesByID } from "../utils/api";
import { Card } from "react-bootstrap";
import Comments from "./GetComments"

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
      getArticlesByID(article_id)
     .then((articleFromApi) => {
      setArticle(articleFromApi);
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
         {article.title}
        </Card.Title>
        <Card.Img src={article.article_img_url} alt={article.title}></Card.Img>
        <Card.Body>
          <Card.Text><label className= "card-label" >Topic: </label> {article.topic}</Card.Text>
          <Card.Text>{article.body}</Card.Text>
          <Card.Text><label className= "card-label" >Author: </label> {article.author}</Card.Text>
          <Card.Text><label className= "card-label" >Votes: </label> {article.votes}</Card.Text>
          <Card.Text><label className= "card-label" >Comments: </label> {article.comment_count}</Card.Text>
          <Card.Text><label className= "card-label" >Date posted: </label> {article.created_at.slice(8, 10)}-{article.created_at.slice(5, 7)}-{article.created_at.slice(0, 4)} @ {article.created_at.slice(11, 19)}</Card.Text>
        </Card.Body>
      </Card>
      <Comments article_id={article.article_id}/>
    </section>
  );
};

export default SingleArticle;
