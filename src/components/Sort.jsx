import ascending from "../svg/ascending.svg";
import descending from "../svg/descending.svg";
import { Link } from "react-router-dom";
import hide from "../svg/hide.svg";
import show from "../svg/show.svg";
import { useState } from "react";


export const Sort = ({ setSearchParams, category }) => {
  const setSortOrder = (direction) => {
    setSearchParams((currSearchParams) => {
      const newParams = new URLSearchParams(currSearchParams);
      newParams.set("order", direction);
      return newParams;
    });
  };

  const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="sort-container">
        <p>FILTERS</p>
        {isHidden ?
      <input onClick = {()=>{setIsHidden(false)}} type="image" src={show} alt="show sort bys" className="toggle-hide" /> :
      <div>
      <div className="sort-options">
        <Link to={`?sort_by=title`}>Title</Link>
        <Link to={`?sort_by=votes`}>Votes</Link>
        <Link to={`?sort_by=created_at`}>Date</Link>
        <Link to={`?sort_by=comment_count`}>Comments</Link>
      </div>
      <div>

      <input
        type="image"
        src={ascending}
        alt="ascending"
        onClick={() => setSortOrder("asc")}
        />
      <input
        type="image"
        src={descending}
        alt="descending"
        onClick={() => setSortOrder("desc")}
        />
        </div>

      <input onClick = {()=>{setIsHidden(true)}}type="image" src={hide} alt="hide sort bys" className="toggle-hide" />
        </div>}
    </div>
  );
};
