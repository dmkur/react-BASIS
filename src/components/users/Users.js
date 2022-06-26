import {useEffect, useState} from "react";
import {User} from "../user/User";
import {SingleUser} from "../singleUser/SingleUser";


export function Users() {
    const [users, setUsers] = useState([])
    const [userInfo, setUserInfo] = useState({})

    const usersFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => users.json())
            .then(users => setUsers(users))
    }

    useEffect(() => {
        usersFetch()
    }, [])

    const chosenUser = (items) => {
        setUserInfo(items)
        console.log(items)
    }

    return (
        <div>
            <div>
                {userInfo.id && <SingleUser data={userInfo}/>}
            </div>
            <div>
                <h3>Users Page</h3>
                {users.map(user =>
                    <User
                        key={user.id}
                        items={user}
                        chosenUser={chosenUser}/>)}
            </div>
        </div>
    )
}