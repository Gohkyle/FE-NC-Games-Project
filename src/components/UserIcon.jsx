import { useEffect, useState } from "react"
import { getUser } from "../utils/api-requests"
import {Loading} from '../components/Loading'

export const UserIcon = ({user}) => {
    const [userIconDetails, setUserIconDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getUser(user).then((userFromApi)=>{
            setUserIconDetails(userFromApi)
            setIsLoading(false)
        })
    }, [user])

    const {username, avatar_url} = userIconDetails
    
    return (isLoading? <Loading/> : <img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>)
}