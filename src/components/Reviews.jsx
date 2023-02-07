import { getReviews } from "../utils/api-requests";
import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false)
      });
    }
  , []);

  return (
    <main>
        <h2>TITLE</h2>
        {isLoading ? <Loading/>:
      <ul>
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.review_id}
              review={review}
            />
          );
        })}
      </ul>}
    </main>
  );
};
