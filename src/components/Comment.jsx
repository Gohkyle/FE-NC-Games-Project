import { formatDateTime } from "../utils/utils";
import upVote from "../svg/up-vote.svg";
import avatar from "../svg/avatar.svg";

import { useContext, useState} from "react";
import {UserContext} from '../contexts/User'
import { DeleteComment } from "./DeleteComment";
import {Loading} from './Loading'

export const Comment = ({ comment, setLocalCommentCount }) => {
  const { comment_id, body, votes, created_at, author } = comment;
  const {user} = useContext(UserContext)
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <li className="comment-card">
      {user===author ? <DeleteComment isDeleting= {isDeleting} setLocalCommentCount = {setLocalCommentCount} setIsDeleting = {setIsDeleting} comment_id={comment_id}/> : null}
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
      {isDeleting? <Loading/> :null}
      </div>
      <p className="comment-card-footer">
        {formatDateTime(created_at)} {votes} <img alt="votes" src={upVote} />
      </p>
    </li>
  );
};
