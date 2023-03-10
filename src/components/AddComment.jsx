import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api-requests";
import { UserContext } from "../contexts/User";
import { Error } from "./Error";
import sendComment from "../svg/send-comment.svg";
import {Loading} from './Loading'

export const AddComment = ({ setComments ,setLocalCommentCount}) => {
  const [commentToAdd, setCommentToAdd] = useState();
  const [err, setErr] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const { review_id } = useParams();
  const { loggedInUser:{username} } = useContext(UserContext);

  const handleChange = (event) => {
    setCommentToAdd(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postComment(review_id, username, commentToAdd)
      .then(() => {
        setCommentToAdd("");
        setIsPosting(false);
        setComments((currentComments) => {
          return [
            ...currentComments,
            {
              comment_id: currentComments.length + 1,
              body: commentToAdd,
              votes: 0,
              author: username,
              review_id: review_id,
              created_at: Date.now(),
            },
          ];
        });
        setLocalCommentCount((currentCommentCount)=>{return (currentCommentCount + 1)})
      })
      .catch((err) => {
        setComments((currentComments) => {
          return currentComments.slice(0, currentComments.length - 1);
        });
        setErr("Something went wrong, please try again");
      });
  };

  return (
      <div className="add-comment-container">
        {err? <Error err={err}/> : isPosting? <Loading/> :null}
      <form className="add-comment" onSubmit={handleSubmit}>
        <textarea
          placeholder="Share your thoughts here"
          value={commentToAdd}
          onChange={handleChange}
          arialabel="leave comment on review"
          required
          rows="3"
          className="comment-textarea"
          name="add a comment"
        >
        </textarea>
        <input
          alt="submit"
          className="add-comment-button"
          type="image"
          src={sendComment}
          disabled= {isPosting}
        />
      </form>
    </div>
  );
};
