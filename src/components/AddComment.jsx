import {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { postComment } from '../utils/api-requests'
import {UserContext} from '../contexts/User'

export const AddComment= ({setComments}) =>{

const[commentToAdd, setCommentToAdd] = useState('')
const {review_id} = useParams()
const{user } = useContext(UserContext)

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
    postComment(review_id, user, commentToAdd).then (()=>{

    })

}

    return(
    <form className="add-comment" onSubmit={handleSubmit}>
        <textarea placeholder = "Share your thoughts here" value ={commentToAdd} onChange={handleChange} arialabel="leave comment on review" required
        rows = "5" cols = "35" name = "description">
         </textarea>
         <input type = "submit" value = "submit" />
    </form>
    )
}