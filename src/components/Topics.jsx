import { getTopics } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getTopics().then((response) => {
      console.log(response);
    });
  });
};

export default Topics;
