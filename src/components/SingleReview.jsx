import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import like from "../svg/like.svg";
import comment from "../svg/comment.svg";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";
import {Loading} from './Loading'
import {Comments} from './Comments'

export const SingleReview = () => {

  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setIsLoading(false)
    });
  }, [review_id]);

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
  return (
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
            {votes}
            <img alt="votes" src={like} /> , {comment_count}
            <img alt="comments" src={comment} />{" "}
          </p>
      <Comments/>
        </div>

    </main>
  );
};
