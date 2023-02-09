import upVote from "../svg/up-vote.svg";
import downVote from '../svg/down-vote.svg'
import { patchReview } from "../utils/api-requests";
import { useState } from "react";


export const ReviewVoting = ({review_id, votes, err, setErr}) => {
const [voteChange, setVoteChange] = useState(0)

  const handleVoteClick = (event) => {
    event.preventDefault();
    setErr(null);
    setVoteChange((currentVoteChange)=>{
      return currentVoteChange + Number(event.target.value)})
    patchReview(review_id, event.target.value)
      .catch((err) => {
        setVoteChange(0)
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
      disabled= {voteChange>0 || err}
    />
{votes + voteChange}
    <input
      alt="down-votes"
      onClick={handleVoteClick}
      type="image"
      value="-1"
      src={downVote}
      disabled={voteChange<0 || err}
    />
  </span>)
}