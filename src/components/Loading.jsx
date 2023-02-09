import loading from '../svg/loading.svg'

export const Loading = () =>{
    return(
        <div className="loading-container">
            <img src={loading} alt="loading: penguin waiting" className="loading-logo"/>
            <p>loading...</p>
        </div>
    )
}