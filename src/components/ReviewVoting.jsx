import upVote from "../svg/up-vote.svg";
import downVote from '../svg/down-vote.svg'

export const ReviewVoting = ({handleVoteClick, localVotes}) => {

return (
<span>
    <input
      alt="up-vote"
      onClick={handleVoteClick}
      type="image"
      value="1"
      src={upVote}
      />
      {localVotes}
    <input
      alt="down-votes"
      onClick={handleVoteClick}
      type="image"
      value="-1"
      src={downVote}
    />
  </span>)
}