import { useContext} from "react"
import {UserContext} from '../contexts/User'
import { LoginForm } from "./LoginForm"
import { UserIcon } from "./UserIcon"



export const Login = () => {
    const {loggedInUser:{username, name}, setLoggedInUser} = useContext(UserContext)

    return(
        <section>
            <p>Welcome back {name}!</p>
            {username ?  <UserIcon user={username}/>: <LoginForm setLoggedInUser = {setLoggedInUser} /> }
        </section>
    )
}