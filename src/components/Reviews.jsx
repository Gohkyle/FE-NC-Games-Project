import { getReviews } from "../utils/api-requests";
import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";
import {useParams} from 'react-router-dom'

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading]= useState(true)
const{category} = useParams()

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
