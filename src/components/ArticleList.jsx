import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Card, Button } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Articles</h2>

      {articles.map((article) => {
        return (
          <Card
            border="secondary"
            className="card-style"
            key={article.article_id}
          >
            <Card.Title>
              {article.article_id}: {article.title}
            </Card.Title>
            <Card.Img
              src={article.article_img_url}
              alt={article.title}
            ></Card.Img>
            <Button type="submit">Read more...</Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Articles;
