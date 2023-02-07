import like from "../svg/like.svg";
import comment from "../svg/comment.svg";

export const ReviewCard = ({
  review: { title, designer, created_at, votes, comment_count, review_img_url },
}) => {
  const dateFormat = new Date(created_at);

  return (
    <li className="review-card">
      <img
        src={review_img_url}
        alt={`BoardGame: ${title}`}
        className="review-card-img"
      />
      <div className="review-card-details">
        <h3>{title}</h3>
        <p>{designer}</p>
    <p>{dateFormat.toDateString().slice(4)}</p>
        <p>
          {votes}
          <img alt="votes" src={like} /> , {comment_count}
          <img alt="comments" src={comment} />{" "}
        </p>
      </div>
    </li>
  );
};
