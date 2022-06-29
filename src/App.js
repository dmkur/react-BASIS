import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {useEffect, useState} from "react";
import {getPostComments} from "./services";

function App() {
    const [comments, setComments] = useState([])

    const getPostId = (id) => {
        getPostComments(id).then(({data}) => setComments(data))
    }

    return (
        <div>
            <div>
                <h4>Posts Comments </h4>
                {
                    comments.map(value => <div key={value.id}>{value.id}-{value.body}</div>)
                }

                <hr/>
            </div>
            <div>
                <h4>Posts</h4>
                <Posts getPostId={getPostId}/>
            </div>
            {/*<Users/>*/}
        </div>
    );
}

export default App;
