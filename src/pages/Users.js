import {useEffect, useState} from "react";
import ApiServices from "../services/api.services";
import {User} from "../components/User";
import {Outlet} from "react-router-dom";


export function Users() {
    const [users, setUsers] = useState([])
    const api = new ApiServices('users')

    useEffect(() => {
        api.getAllData().then(vallue => setUsers(vallue))
    }, [])

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    )
}