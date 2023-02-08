import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";
import { Loading } from "./Loading";
import { Comments } from "./Comments";
import { patchReview } from "../utils/api-requests";
import { Error } from "./Error";
import {ReviewVoting} from "./ReviewVoting"
import {ReviewComment} from './ReviewComment'

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [localVotes, setLocalVotes] = useState("");
  const [err, setErr] = useState(null);

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
      setIsLoading(false);
      setLocalVotes(votes);
    });
  }, [review_id, votes, isHidden]);

  const handleVoteClick = (event) => {
    event.preventDefault();
    setErr(null);
    setLocalVotes(localVotes + Number(event.target.value));
    patchReview(review_id, event.target.value)
      .catch((err) => {
        setLocalVotes(localVotes - Number(event.target.value));
        setErr("Something went wrong, please try again.");
      });
  };

  const handleCommentClick = () => {
    setIsHidden(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main className="single-review-container">
      {err ? <Error err={err}/> : null}
      <h4 className="single-review-header">{title}</h4>
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
        <span>
          <ReviewVoting handleVoteClick={handleVoteClick} localVotes={localVotes}/> 
          <ReviewComment handleCommentClick={handleCommentClick} comment_count = {comment_count}/>

        </span>
        {isHidden ? null : <Comments setIsHidden={setIsHidden} />}
      </div>
    </main>
  );
};
