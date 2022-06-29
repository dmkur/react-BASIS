import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import {User} from "../user/User";

export function Users({getIdUser}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div>
            <h3>Users</h3>
            {
                users.map(value => <User item={value} key={value.id} getIdUser={getIdUser}/>)
            }
        </div>
    )
}