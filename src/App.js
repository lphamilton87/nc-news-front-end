import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleArticle from "./components/SingleArticle";
import Articles from "./components/ArticleList";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/:topic" element={<Articles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
