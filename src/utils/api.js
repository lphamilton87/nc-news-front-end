import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://lees-nc-news.onrender.com/api/",
});

export const getArticles = () => {
  return ncNewsApi.get(`/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticlesByID = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article[0];
  });
};

export const getCommentsById = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotesById = (articleId, votesNum) => {
  return ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: votesNum });
};

export const postComment = (articleId, username, comment) => {
  return ncNewsApi
    .post(`/articles/${articleId}/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
