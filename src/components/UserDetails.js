import {useLocation} from "react-router-dom";

export function UserDetails() {
    const {state: userDetails} = useLocation()
    // console.log(location)
    return (
        <div>
            <h4>Details about User - {userDetails.name}</h4>
            {JSON.stringify(userDetails)}
            <hr/>
        </div>
    )
}