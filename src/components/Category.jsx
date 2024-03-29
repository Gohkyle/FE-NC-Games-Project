import { Link } from "react-router-dom"
import { formatCategoryName } from "../utils/utils"

export const Category = ({category: {slug, description}}) => {

    return (
    <li className="category-card">
        <Link to={`/category/${slug}`} state={{description}}>
                <h2>{formatCategoryName(slug)}</h2>
        </Link>
    </li>
    )
}