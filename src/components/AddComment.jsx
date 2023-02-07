import {useState} from 'react'

export const AddComment= () =>{
const[commentToAdd, setCommentToAdd] = useState('')
const handleChange = (event)=>{
    setCommentToAdd(event.target.value)
}

    return(
    <form>
        <input value ={commentToAdd} onChange={handleChange} arialabel="leavecomment for " type="text"/>
    </form>
    )
}