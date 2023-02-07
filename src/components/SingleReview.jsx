import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import like from "../svg/like.svg";
import comment from "../svg/comment.svg";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";
import {Loading} from './Loading'
import {Comments} from './Comments'
import {patchReview} from '../utils/api-requests'

export const SingleReview = () => {

  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(true);
  const [localVotes, setLocalVotes] = useState('')
  const [err, setErr] = useState(null)

  const { review_id } = useParams();

  const {
    title,
    designer,
    created_at,
    votes,
    comment_count,
    review_img_url,
    owner,
    review_body,
  } = review;

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setIsLoading(false)
      setLocalVotes(votes)
    });
  }, [review_id,votes, isHidden]);

  const handleVoteClick = (event) => {
    event.preventDefault()
    setErr(null)
    setLocalVotes(localVotes + Number(event.target.value))
    patchReview(review_id, event.target.value).then(()=>{
    })
    .catch((err)=>{
        setLocalVotes(localVotes - Number(event.target.value))
        setErr('Something went wrong, please try again.')
    })
  }

const handleCommentClick = () => {
    setIsHidden(false);
}

  return (
    err ? <p>{err}</p> :
    isLoading ? <Loading/> : 
    <main className="single-review-container">
          <h4 className= "single-review-header">{title}</h4>
        <img
          src={review_img_url}
          alt={`BoardGame: ${title}`}
          className="single-review-img"
        />
        <div className="single-review-details">
      <UserIcon owner={owner} />
          <p>{designer}</p>
          <p>{formatDate(created_at)}</p>
        <p>{review_body}</p>
          <p>
            {localVotes}
            <input alt="votes" onClick= {handleVoteClick} type="image" value="1" src={like} /> 
            {comment_count}
            <input alt="comments" onClick ={handleCommentClick} type="image" src={comment} />
          </p>
      {isHidden ? null : <Comments/>}
        </div>
    </main>
  );
};
