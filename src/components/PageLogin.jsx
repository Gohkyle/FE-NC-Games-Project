import { Header } from "./Header"
import { Login } from './Login'
import { Logout } from './Logout'
import { useContext, useState } from "react"
import { UserContext } from '../contexts/User'
import { Loading } from './Loading'

export const PageLogin = () => {
    const {loggedInUser:{username, name, avatar_url}, setLoggedInUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null);

    return (
        <main>
            <Header/>
            {err? <p>{err}</p> : isLoading? <Loading/>: null}
            {username ? <Logout avatar_url={avatar_url} name={name} username={username} setLoggedInUser={setLoggedInUser}/> : <Login setErr={setErr} setIsLoading = {setIsLoading} setLoggedInUser={setLoggedInUser}/>}
        </main>
    )
}