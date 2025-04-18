import {Navigate} from "react-router-dom";

export const StatsPage = ({user}) => {
    if(!user){
        return(<Navigate to={'/login'} replace/>)
    }
    return (
        <div>
            <h1>Stats</h1>
            <p>Private Page</p>
        </div>
    )
}