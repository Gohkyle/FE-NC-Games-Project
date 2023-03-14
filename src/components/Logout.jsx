export const Logout = ({name, username, avatar_url, setLoggedInUser}) => {
    return (
        <section className="login-form">
            <p>Welcome back {name}!</p>
            <img src={avatar_url} alt={`${username}'s avatar`} className="user-icon-img"/>
            <button className="login-form-item" onClick={()=>{ setLoggedInUser({})}}>Logout</button>
        </section>
    )
}