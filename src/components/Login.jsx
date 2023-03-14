import { useState } from "react";
import { getUser } from "../utils/api-requests";

export const Login = ({ setLoggedInUser, setIsLoading, setErr }) => {
  const [inputUser, setInputUser] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(null)
    setIsLoading(true)
    getUser(inputUser)
      .then((userFromApi) => {
        setLoggedInUser(userFromApi);
        setIsLoading(false)
      })
      .catch(
        ({response}) => {
            setIsLoading(false);
             response ? setErr(response.data.msg) : setErr("Something went wrong, please try again")
        }
      );
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        aria-label="username"
        placeholder="Username"
        className="login-form-item"
        required
        value={inputUser}
        onChange={(event) => {
          setInputUser(event.target.value);
        }}
        type="text"
      ></input>
      <button className="login-form-item">Login</button>
    </form>
  );
};
