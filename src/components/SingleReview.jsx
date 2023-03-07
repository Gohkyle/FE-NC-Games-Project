import { useEffect, useState } from "react";
import { getReview } from "../utils/api-requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { UserIcon } from "./UserIcon";
import { Loading } from "./Loading";
import { Comments } from "./Comments";
import { Error } from "./Error";
import { ReviewVoting } from "./ReviewVoting";
import { ReviewComment } from "./ReviewComment";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [localCommentCount, setLocalCommentCount] = useState(0);

  const [err, setErr] = useState(null);
  const [pageErr, setPageErr] = useState(null);
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
    getReview(review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
        setLocalCommentCount(comment_count);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
          },
        }) => {
          setPageErr(msg);
        }
      );
  }, [review_id, comment_count]);

  if (pageErr) {
    return <h2>{pageErr}</h2>;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <main className="single-review-container">
      <div className="single-review-header">
        <h4>{title}</h4>
        <img
          src={review_img_url}
          alt={`BoardGame: ${title}`}
          className="single-review-img"
        />
      </div>
      <div className="single-review-details-container">
        <div className= "single-review-details-header">
          <div className="single-review-user-icon">
            <UserIcon user={owner} />
          </div>
          <div className="single-review-details">
            <h2>{owner}</h2>
            <p>{designer}</p>
            <p>{formatDate(created_at)}</p>ß{" "}
          </div>
        </div>
        <p>{review_body}</p>
        {err ? <Error err={err} /> : null}
        <span>
          <ReviewVoting
            err={err}
            review_id={review_id}
            setErr={setErr}
            votes={votes}
          />
          <ReviewComment
            setIsHidden={setIsHidden}
            comment_count={localCommentCount}
          />
        </span>
        {isHidden ? null : (
          <Comments
            setIsHidden={setIsHidden}
            setLocalCommentCount={setLocalCommentCount}
          />
        )}
      </div>
    </main>
  );
};
