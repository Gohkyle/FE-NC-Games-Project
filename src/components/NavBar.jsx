import{Link} from 'react-router-dom'
import { UserContext } from '../contexts/User'
import { useContext } from 'react'
import {UserIcon} from './UserIcon'


export const NavBar=() =>{
    const {loggedInUser:{username}} = useContext(UserContext)

    return (
    <nav>
        <Link to="/" className="nav-item">
            {username? <div className="nav-login-container"><p>{username}</p><UserIcon user={username}/></div> : "Login"}
        </Link>
        <Link to="/home" className ="nav-item">Home</Link>
        <Link to="/reviews/add" className="nav-item">Write a Review</Link>
    </nav>)
}