import { Link } from "react-router-dom"
import {NavBar} from './NavBar'
export const Header = () => {
    return (
    <h1 id="header">
        <Link to="/">
        Super Amazing Games Review
        </Link>
        <NavBar/>
    </h1>)

}