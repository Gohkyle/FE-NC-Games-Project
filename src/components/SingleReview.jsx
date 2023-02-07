import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import like from "../svg/like.svg";
import comment from "../svg/comment.svg";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
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
          <p>
            {votes}
            <img alt="votes" src={like} /> , {comment_count}
            <img alt="comments" src={comment} />{" "}
          </p>
        </div>
      <section className="single-review-body">
        <p>{review_body}</p>
      </section>
    </main>
  );
};
