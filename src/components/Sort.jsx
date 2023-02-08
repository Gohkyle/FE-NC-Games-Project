export const Sort = ({setSearchParams}) => {
    const setSortOrder = (direction) => {
        setSearchParams((currSearchParams)=>{
            const newParams = new URLSearchParams(currSearchParams)
            newParams.set("order", direction)
            return newParams
        })
      }

    return (
    <div className="sort">
<button onClick={()=> setSortOrder('asc')}>Ascending</button>
<button onClick={()=> setSortOrder('desc')}>Descending</button>
    </div>
    )
}