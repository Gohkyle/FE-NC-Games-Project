import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";
import { Loading } from "./Loading";
import { Comments } from "./Comments";
import { Error } from "./Error";
import {ReviewVoting} from "./ReviewVoting"
import {ReviewComment} from './ReviewComment'

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

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
    });
  }, [review_id]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="single-review-container">
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
        {err ? <Error err={err}/> : null}
        <span>
          <ReviewVoting review_id= {review_id} setErr= {setErr} votes={votes}/> 
          <ReviewComment setIsHidden = {setIsHidden} comment_count = {comment_count}/>

        </span>
        {isHidden ? null : <Comments setIsHidden={setIsHidden} />}
      </div>
    </main>
  );
};
