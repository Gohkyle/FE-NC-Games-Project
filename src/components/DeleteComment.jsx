import remove from "../svg/remove.svg";
import { deleteComment } from "../utils/api-requests";

export const DeleteComment = ({ comment_id, isDeleting, setIsDeleting, setLocalCommentCount, setErr, setIsDeleted}) => {  
  const handleClick = () => {
    setIsDeleting(true);
    deleteComment(comment_id).then(()=>{
        setLocalCommentCount((currCount)=>currCount-1)
        setIsDeleting(false);
        setIsDeleted(true);
    })
    .catch((err)=>{
        setLocalCommentCount((currCount)=>currCount-1)
        setErr("Something went wrong, please try again")
    })
  };

  return (
    <input
      type="image"
      onClick={handleClick}
      src={remove}
      alt="delete comment"
      className="delete-button"
      disabled={isDeleting}
    />
  );
};
