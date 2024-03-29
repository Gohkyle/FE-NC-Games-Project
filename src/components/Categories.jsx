import { useEffect, useState } from "react";
import { getCategories } from "../utils/api-requests";
import { Category } from "./Category";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null)

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setIsLoading(false);
      setCategories(categoriesFromApi);
    })
    .catch((err)=>{
      setErr("Something went wrong, please try again.")
    })
  }, []);

  return err? <p>{err}</p> : isLoading ? (
    <Loading />
  ) : (
    <section>
      <ul className="category-card-container">
        <li className="category-card">
          <Link to="/reviews">
            <h2>ALL GAMES</h2>
          </Link>
        </li>
        {categories.map((category) => {
          return <Category key={category.slug} category={category} />;
        })}
      </ul>
    </section>
  );
};
