import { useEffect, useState } from "react";
import { getCommentsByReview } from "../utils/api-requests";
import { Loading } from "./Loading";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";
import { AddComment } from "./AddComment";
import { CloseButton } from "./CloseButton";

export const Comments = ({ setIsHidden, setLocalCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    getCommentsByReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id, comments]);

  return (
    <section className="comments-modal">
      <div className="comments-modal-content">
        <div className="comments-header">
  
        </div>
        <CloseButton setIsHidden={setIsHidden } />
        <p>Comments</p>
        {isDeleted ? <p>comment successfully deleted</p> : null}
        <AddComment
          setComments={setComments}
          setLocalCommentCount={setLocalCommentCount}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="comments-list">
            {comments.map((comment) => {
              return (
                <Comment
                  setIsDeleted={setIsDeleted}
                  key={comment.comment_id}
                  comment={comment}
                  setLocalCommentCount={setLocalCommentCount}
                />
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};
