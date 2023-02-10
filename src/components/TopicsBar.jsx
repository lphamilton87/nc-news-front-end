import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const TopicsBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <div className="flex-centered">
      {topics.map(({ slug }) => {
        return (
          <span key={slug}>
            <Link to={`/${slug}`}>
              {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default TopicsBar;
