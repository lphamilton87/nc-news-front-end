import { useState } from "react";
import { patchArticleVotesById } from "../utils/api";

const Votes = ({ article_id, votes }) => {
  const [votesChange, setVotesChangeBy] = useState(0);

  const increaseVotes = () => {
    setVotesChangeBy((currChange) => currChange + 1);
    patchArticleVotesById(article_id, 1);
  };

  const dereaseVotes = () => {
    setVotesChangeBy((currChange) => currChange - 1);
    patchArticleVotesById(article_id, -1);
  };

  return (
    <>
      <h6>{votes + votesChange} Votes</h6>
      <button disabled={votesChange === -1} onClick={() => dereaseVotes()}>
        -1
      </button>
      <button disabled={votesChange === +1} onClick={() => increaseVotes()}>
        +1
      </button>
    </>
  );
};

export default Votes;
