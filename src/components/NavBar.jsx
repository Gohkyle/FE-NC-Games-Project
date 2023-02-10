import{Link} from 'react-router-dom'
export const NavBar=() =>{
    return (<nav>
        <Link to="/" className="Nav-item"><div>Login</div></Link>
        <Link to="/" className ="Nav-item">Home</Link>
        <Link to="/" className="Nav-item">Write a Review</Link>
    </nav>)
}