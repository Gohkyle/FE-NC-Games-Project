import like from "../svg/like.svg";
import comment from "../svg/comment.svg";
import {Link} from "react-router-dom";
import { formatDate } from "../utils/utils";

export const ReviewCard = ({
  review: { review_id, title, designer, created_at, votes, comment_count, review_img_url },
}) => {
  return (
    <li className="review-card">
      <Link to={`/reviews/${review_id}`}>
        <img
          src={review_img_url}
          alt={`BoardGame: ${title}`}
          className="review-card-img"
        />
      </Link>
        <div className="review-card-details">
          <h3>{title}</h3>
          <p>{designer}</p>
          <p>{formatDate(created_at)}</p>
          <p>
            {votes}
            <img alt="votes" src={like} /> , {comment_count}
            <img alt="comments" src={comment} />{" "}
          </p>
        </div>
    </li>
  );
};
