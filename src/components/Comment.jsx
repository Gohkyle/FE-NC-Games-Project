import { formatDateTime } from "../utils/utils";
import upVote from "../svg/up-vote.svg";
import { useContext, useState} from "react";
import {UserContext} from '../contexts/User'
import { DeleteComment } from "./DeleteComment";
import {Loading} from './Loading'
import { Error } from "./Error";

export const Comment = ({ comment, setLocalCommentCount, setIsDeleted}) => {
  const { comment_id, body, votes, created_at, author } = comment;
  const {loggedInUser: {username, avatar_url}} = useContext(UserContext)
  const [isDeleting, setIsDeleting] = useState(false);
  const [err, setErr] =useState(null);
  

  return (
    <li className="comment-card">
      {username === author ? <DeleteComment setIsDeleted ={setIsDeleted}setErr={setErr} isDeleting= {isDeleting} setLocalCommentCount = {setLocalCommentCount} setIsDeleting = {setIsDeleting} comment_id={comment_id}/> : null}
      <div className="comment-avatar-container">
        <img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>
      </div>
      <div className="comment-card-details">
        <h5>{author}</h5>
        <p>{body}</p>
      { err ? <Error err={err}/> : isDeleting? <Loading/> :null}
      </div>
      <p className="comment-card-footer">
        {formatDateTime(created_at)} {votes} <img alt="votes" src={upVote} />
      </p>
    </li>
  );
};
