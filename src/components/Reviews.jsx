import { getReviews } from "../utils/api-requests";
import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";
import { useParams } from 'react-router-dom'
import { formatCategoryName } from "../utils/utils";
import { Error } from "./Error";
import { useSearchParams, useLocation } from "react-router-dom";
import {Sort} from './Sort'

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading]= useState(true)
  const {category} = useParams()
  const [err, setErr] = useState(null)

  const {state} = useLocation()
  let [searchParams, setSearchParams] = useSearchParams()
  const sortByQuery = searchParams.get("sort_by")
  const orderQuery = searchParams.get('order');

  useEffect(() => {
    getReviews(category, sortByQuery, orderQuery).then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false)
        category ? setTitle(category) : setTitle('all games')
      })
      .catch(({response})=>{
        response ? setErr(response.data.msg) : setErr("Something went wrong, please try again.")
      })
    }
  , [category, sortByQuery, orderQuery]);

  return (
    <main>
      <div className="banner">
        <h2>{formatCategoryName(title)}</h2>
        {state ? <p>{state.description}</p> : null}
      </div>
      <Sort category= {category} setSearchParams={setSearchParams}/>
        {err ? <Error err={err}/> : isLoading? <Loading/>:
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
