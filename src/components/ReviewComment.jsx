import comment from "../svg/comment.svg";


export const ReviewComment = ({comment_count, setIsHidden}) => {
  const handleCommentClick = () => {
    setIsHidden(false);
  };

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
