import { useState } from "react"
import { getUser } from "../utils/api-requests"

export const LoginForm = ({setLoggedInUser}) => {
    const [inputUser, setInputUser] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        getUser(inputUser).then((userFromApi)=>{
            setLoggedInUser(userFromApi)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
                <input value={inputUser} onChange={(event)=>{setInputUser(event.target.value)}} type="text"></input>
                <button>Login</button>
        </form>
    )
}