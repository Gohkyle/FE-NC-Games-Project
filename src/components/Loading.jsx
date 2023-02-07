import loading from '../svg/loading.svg'

export const Loading = () =>{
    return(
        <div>
            <img src={loading} alt="loading" className="loading-logo"/>
            <p>loading...</p>
        </div>
    )
}