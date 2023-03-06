import { useEffect, useState } from "react"
import { getUser } from "../utils/api-requests"

export const UserIcon = ({user}) => {
    const [userIconDetails, setUserIconDetails] = useState({})

    useEffect(()=>{
        getUser(user).then((userFromApi)=>{
            setUserIconDetails(userFromApi)
        })
    }, [user])

    const {username, avatar_url} = userIconDetails
    
    return (<img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>)
}