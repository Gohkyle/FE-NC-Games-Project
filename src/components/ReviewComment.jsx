import comment from "../svg/comment.svg";

export const ReviewComment = ({handleCommentClick, comment_count}) => {
  return (
    <span>
      {comment_count}
      <input
        alt="comments"
        onClick={handleCommentClick}
        type="image"
        src={comment}
      />
    </span>
  );
};
