import { useState } from "react"
import { getUser } from "../utils/api-requests"

export const LoginForm = ({setLoggedInUser}) => {
    const [inputUser, setInputUser] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        getUser(inputUser)
        .then((userFromApi)=>{
            setLoggedInUser(userFromApi)
        })
        .catch(({response:{data:{msg}}})=>{
            setErrMsg(msg)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <p>{errMsg}</p>
                <input value={inputUser} onChange={(event)=>{setInputUser(event.target.value)}} type="text"></input>
                <button>Login</button>
        </form>
    )
}