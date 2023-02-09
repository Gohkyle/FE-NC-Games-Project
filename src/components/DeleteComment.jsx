import remove from "../svg/remove.svg";
import { deleteComment } from "../utils/api-requests";

export const DeleteComment = ({ comment_id, setIsLoading,setLocalCommentCount}) => {
  const handleClick = () => {
    setIsLoading(true);
    deleteComment(comment_id).then(()=>{
        setLocalCommentCount((currCount)=>currCount-1)
    });
    setIsLoading(false);
  };

  return (
    <input
      type="image"
      onClick={handleClick}
      src={remove}
      alt="delete comment"
      className="delete-button"
    />
  );
};
