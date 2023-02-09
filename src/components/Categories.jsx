import { useEffect, useState } from "react"
import { getCategories } from "../utils/api-requests"
import {Category} from './Category'
import { Link } from "react-router-dom"

export const Categories = () => {
const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            setCategories(categoriesFromApi)
        })
    }, [])

    return (
    <section>
        <ul className= "category-card-container">
            <li className= "category-card">
                <Link to="/reviews">
                <h2>ALL GAMES</h2>
                </Link>
            </li>
            {categories.map((category)=>{
                return <Category category={category}/>
        })}
        </ul>
    </section>
    )
}