import {Users} from "./components/users/Users";
import {getUserPosts} from "./services";

import {useState} from "react";

function App() {
    const [posts, setPosts] = useState([])
    const getIdUser = (id) => {
        getUserPosts(id).then(({data}) => {
            setPosts(data)
        })
    }

    return (
        <div>
            <div>
                {
                  posts.map(value => <div>{value.title}</div>)
                }
            </div>
            <div><Users getIdUser={getIdUser}/></div>
        </div>
    );
}

export default App;
