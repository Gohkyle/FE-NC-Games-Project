import{Link} from 'react-router-dom'
import { UserContext } from '../contexts/User'
import { useContext } from 'react'
import {UserIcon} from './UserIcon'


export const NavBar=() =>{
    const {loggedInUser:{username}} = useContext(UserContext)

    return (<nav>
        <Link to="/" className="Nav-item">{username? <div><p>{username}</p><UserIcon user={username}/></div> : "Login"}</Link>
        <Link to="/home" className ="Nav-item">Home</Link>
        <Link to="/reviews/add" className="Nav-item">Write a Review</Link>
    </nav>)
}