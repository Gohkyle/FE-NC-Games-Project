import { formatDateTime } from "../utils/utils";
import upVote from "../svg/up-vote.svg";
import avatar from "../svg/avatar.svg";

export const Comment = ({ comment }) => {
  const { body, votes, created_at, author } = comment;

  return (
    <li className="comment-card">
      <div className="comment-avatar-container">
        <img
          src={avatar}
          alt={`${author}'s avatar`}
          className="comment-avatar"
        />
      </div>
      <div className="comment-card-details">
        <h5>{author}</h5>
        <p>{body}</p>
      </div>
      <p className="comment-card-footer">
        {formatDateTime(created_at)} {votes} <img alt="votes" src={upVote} />
      </p>
    </li>
  );
};
