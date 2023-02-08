import { Link } from "react-router-dom"

export const Category = ({category}) => {
    const {slug,description}= category
    return (
    <li>
        <Link to={`/category/${slug}`}>
        {slug}
        </Link>
    </li>
    )
}