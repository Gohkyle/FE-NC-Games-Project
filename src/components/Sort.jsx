import ascending from '../svg/ascending.svg'
import descending from '../svg/descending.svg'
import { Link } from 'react-router-dom'

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
        {/* <Link to="" relative="path">Title</Link><button>Title</button>
        <Link>Designer</Link><button>Designer</button>
        <Link>Owner</Link><button>Owner</button>
        <Link>Category</Link><button>Category</button>
        <Link>Votes</Link><button>Votes</button>
        <Link>Date</Link><button>Date</button> */}

<input type="image" src={ascending} alt="ascending" onClick={()=> setSortOrder('asc')}/>
<input type="image" src={descending} alt="descending" onClick={()=> setSortOrder('desc')}/>
    </div>
    )
}