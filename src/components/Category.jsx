import { Link } from "react-router-dom"
import { formatCategoryName } from "../utils/utils"
export const Category = ({category}) => {
    const {slug,description}= category
    return (
    <li className="category-card">
        <Link to={`/category/${slug}`}>
        <h2>{formatCategoryName(slug)}</h2>
        </Link>
        <p>{description}</p>
    </li>
    )
}