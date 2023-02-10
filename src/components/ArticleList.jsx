import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <h2>Articles</h2>
        {articles.map((article) => {
          return (
            <Card
              border="secondary"
              className="card-style"
              key={article.article_id}
            >
              <Card.Title>{article.title}</Card.Title>
              <Card.Img
                src={article.article_img_url}
                alt={article.title}
              ></Card.Img>
              <Link className="Nav_link" to={`/articles/${article.article_id}`}>
                Read more here...
              </Link>
            </Card>
          );
        })}
      </>
    );
  }
};

export default Articles;
