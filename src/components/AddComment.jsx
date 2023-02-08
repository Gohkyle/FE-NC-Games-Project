import {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { postComment } from '../utils/api-requests'
import {UserContext} from '../contexts/User'
import { Error } from './Error'

export const AddComment= ({setComments}) =>{

const[commentToAdd, setCommentToAdd] = useState({})
const [err, setErr] = useState(null)
const {review_id} = useParams()
const {user} = useContext(UserContext)

const handleChange = (event)=>{
    setCommentToAdd(event.target.value)
}
const handleSubmit=(event)=>{
    event.preventDefault();
    setComments((currentComments)=>{
       return  [...currentComments, {comment_id: currentComments.length +1,body: commentToAdd, votes: 0, author: user, review_id:review_id, created_at: Date.now()
        }]
    })
    console.log(user, commentToAdd);
    postComment(review_id, user, commentToAdd)
        .then (()=>{

    })
    .catch((err)=>{
        setComments((currentComments)=>{
            return  currentComments.slice(0, currentComments.length -1)
        })
        setErr("Something went wrong, please try again")

    })
}

    return(
    <form className="add-comment" onSubmit={handleSubmit}>
        {err ? <Error/>: null}
        <textarea placeholder = "Share your thoughts here" value ={commentToAdd} onChange={handleChange} arialabel="leave comment on review" required
        rows = "5" cols = "35" name = "description">
         </textarea>
         <input type = "submit" value = "submit" />
    </form>
    )
}