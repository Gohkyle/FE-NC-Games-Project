import { useEffect, useState } from "react";
import { getCommentsByReview } from "../utils/api-requests";
import {Loading} from "./Loading";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";
import {AddComment} from './AddComment';
import close from '../svg/close.svg'

export const Comments = ({setIsHidden}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id, comments]);

  const handleCloseClick = () => {
    setIsHidden(true);
  }

  return (
    <section className="comment-modal">
      <div className="comment-modal-content">

      <p>Comments</p>
      <input type='image' onClick={handleCloseClick}src={close} alt="close modal" className="close-button"/>

      <AddComment setComments= {setComments}/>
      {isLoading ? (<Loading />) : (
        <ul className="comment-list">
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      )}
      </div>
    </section>
  );
};
