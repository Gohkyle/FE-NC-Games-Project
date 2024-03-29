import { useEffect, useState, useContext } from "react";
import { getReview, getUser} from "../utils/api-requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { Loading } from "./Loading";
import { Comments } from "./Comments";
import { Error } from "./Error";
import { ReviewVoting } from "./ReviewVoting";
import { ReviewComment } from "./ReviewComment";
import { UserContext } from "../contexts/User";

export const SingleReview = () => {
  const {loggedInUser: { username}} = useContext(UserContext);

  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [localCommentCount, setLocalCommentCount] = useState(0);
  const [userIconUrl, setUserIconUrl] = useState(null)

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
        return getUser(reviewFromApi.owner)
      })
      .then(({avatar_url})=>{
        setUserIconUrl(avatar_url)
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
        <img
          src={review_img_url}
          alt={`BoardGame: ${title}`}
          className="single-review-img"
        />
      </div>
      <div className="single-review-details-container">
        <h3>{title}</h3>
        <div className="single-review-details-header">
          <div className="single-review-user-icon">
          <img src={userIconUrl} alt={`${owner}'s avatar`} className="user-icon-img"/>
          </div>
          <div className="single-review-details">
            <h4>{owner}</h4>
            <p>{designer}</p>
            <p>{formatDate(created_at)}</p>
          </div>
        </div>
        <p>{review_body}</p>
        {err ? <Error err={err} /> : null}

        {!username ? (
          <p> Please Login to Like/Comment</p>
        ) : (
          <div className="single-review-comment-bar">
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
          </div>
        )}
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
