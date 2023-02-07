import { useEffect, useState } from "react";
import { getCommentsByReview } from "../utils/api-requests";
import {Loading} from "./Loading";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <section>
      <p>Comments</p>
      {isLoading ? (<Loading />) : (
        <ul className="comment-list">
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      )}
    </section>
  );
};
