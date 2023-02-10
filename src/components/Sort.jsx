import ascending from '../svg/ascending.svg'
import descending from '../svg/descending.svg'
import { Link } from 'react-router-dom'

export const Sort = ({setSearchParams,category}) => {
    const setSortOrder = (direction) => {
        setSearchParams((currSearchParams)=>{
            const newParams = new URLSearchParams(currSearchParams)
            newParams.set("order", direction)
            return newParams
        })
      }

    return (
    <div className="sort">
        <Link to={`?sort_by=title`}>Title</Link>
        <Link to={`?sort_by=designer`}>Designer</Link>
        <Link to={`?sort_by=owner`}>Owner</Link>
        {!category?<Link to={`?sort_by=category`}>Category</Link>:null}
        <Link to={`?sort_by=votes`}>Votes</Link>
        <Link to={`?sort_by=created_at`}>Date</Link>
        <Link to={`?sort_by=comment_count`}>Comments</Link>
<input type="image" src={ascending} alt="ascending" onClick={()=> setSortOrder('asc')}/>
<input type="image" src={descending} alt="descending" onClick={()=> setSortOrder('desc')}/>
    </div>
    )
}