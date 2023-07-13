import { useState,useEffect } from "react"
import { getUser } from "../utils/api-requests"

export const AuthorBanner = ({author}) => {
    const [authorDetails, setAuthorDetails] = useState({})

    useEffect(()=>{
        getUser(author).then((userFromApi)=>{
            setAuthorDetails(userFromApi)
        })
    }, [author])

    const {avatar_url, username} = authorDetails

    return (
    <div className="comment-avatar-container">
        <img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>
    </div>)
}