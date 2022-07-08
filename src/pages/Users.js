import {useEffect, useState} from "react";
import ApiServices, {getUsers} from "../services/api.services";
import {User} from "../components/User";


export function Users() {
    const [users, setUsers] = useState([])
    const api = new ApiServices('users')

    useEffect(() => {
        api.getAllData().then(vallue => setUsers(vallue))
    }, [])

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    )
}