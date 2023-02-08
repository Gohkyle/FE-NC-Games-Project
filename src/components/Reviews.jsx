import { getReviews } from "../utils/api-requests";
import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";
import {useParams} from 'react-router-dom'
import { formatCategoryName } from "../utils/utils";
import { Error } from "./Error";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading]= useState(true)
  const {category} = useParams()
  const [err, setErr] = useState(null)

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false)
        category ? setTitle(category) : setTitle('all games')
      })
      .catch((err)=>{
        setErr("Category not found")
      })
    }
  , [category]);

  return (
    <main>
      <div className="banner">
        <h2>{formatCategoryName(title)}</h2>
      </div>
        {isLoading ? err ? <Error err={err}/> : <Loading/>:
      <ul className="reviews-flex-container">
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
