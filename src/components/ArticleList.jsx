import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sort_by, order]);

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <section>
        <h2>Articles</h2>
        <p>Sort by:</p>
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option defaultValue value="created_at">
            Date
          </option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
        </select>
        <select
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option defaultValue value="asc">
            Ascending
          </option>
          <option value="desc">Descending</option>
        </select>
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
      </section>
    );
  }
};

export default Articles;
