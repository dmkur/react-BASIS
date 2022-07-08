import {Link} from "react-router-dom";

export function User({user}) {
    const {name, id} = user
    return (
        <div>
            {id} - {name} <Link to={id.toString()} state={{...user}} >details</Link>
        </div>
    )
}