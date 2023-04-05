import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/User'
import { useContext } from 'react'

export const NavBar=() =>{
    const {loggedInUser:{username,avatar_url}} = useContext(UserContext)

    return (
    <nav>
        <Link to="/" className="nav-item">
            {username
                ? 
                <div className="nav-login-container">
                    <img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>
                    <p>{username}</p>
                </div> 
                : "Login"
            }
        </Link>
        <Link to="/home" className ="nav-item">Home</Link>
        <Link to="/reviews/add" className="nav-item">Write a Review</Link>
    </nav>)
}