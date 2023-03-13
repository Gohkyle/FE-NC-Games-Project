import comment from "../svg/comment.svg";


export const ReviewComment = ({comment_count, setIsHidden}) => {
  const handleCommentClick = () => {
    setIsHidden(false);
  };

  return (
    <div className="single-review-comment">
      <p>{comment_count}</p>

      <input
        alt="comments"
        onClick={handleCommentClick}
        type="image"
        src={comment}
      />
    </div>
  );
};
