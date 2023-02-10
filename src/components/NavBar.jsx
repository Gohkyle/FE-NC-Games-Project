import{Link} from 'react-router-dom'

export const NavBar=() =>{
    return (<nav>
        <Link to="/login" className="Nav-item"><div>Login</div></Link>
        <Link to="/" className ="Nav-item">Home</Link>
        <Link to="/reviews/add" className="Nav-item">Write a Review</Link>
    </nav>)
}