import { useEffect, useState } from "react"
import { getCategories } from "../utils/api-requests"
import {Category} from './Category'

export const Categories = () => {
const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            console.log(categoriesFromApi)
            setCategories(categoriesFromApi)
        })
    }, [])

    return (
    <section>
        <ul>

        {categories.map((category)=>{
            return <Category category={category}/>
        })}
        </ul>
    </section>
    )
}