import upVote from "../svg/up-vote.svg";
import downVote from '../svg/down-vote.svg'
import { patchReview } from "../utils/api-requests";
import { useState } from "react";


export const ReviewVoting = ({review_id, votes, setErr}) => {
const [localVotes, setLocalVotes] = useState(votes)
const [upBeenPressed, setUpBeenPressed] = useState(false)
const [downBeenPressed, setDownBeenPressed] = useState(false)

  const handleVoteClick = (event) => {
    event.preventDefault();
    setErr(null);
    setLocalVotes(localVotes + Number(event.target.value));
    (event.target.value > 0) ? setUpBeenPressed(true) : setDownBeenPressed(true);
    patchReview(review_id, event.target.value)
      .catch((err) => {
        setLocalVotes(localVotes - Number(event.target.value));
        setErr("Something went wrong, please try again.");
      });
  };

return (
<span>
    <input
      alt="up-vote"
      onClick={handleVoteClick}
      type="image"
      value="1"
      src={upVote}
      disabled={upBeenPressed}
      />
      {localVotes}
    <input
      alt="down-votes"
      onClick={handleVoteClick}
      type="image"
      value="-1"
      src={downVote}
disabled={downBeenPressed}
    />
  </span>)
}