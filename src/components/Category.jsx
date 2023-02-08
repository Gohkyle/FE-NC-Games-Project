import { Link } from "react-router-dom"

export const Category = ({category}) => {
    const {slug,description}= category
    return (
    <li className="category-card">
        <Link to={`/category/${slug}`}>
        <h2>{slug}</h2>
        </Link>
        <p>{description}</p>
    </li>
    )
}