import {useEffect, useState} from "react";
import {getPosts, getPost} from "../../services";
import Post from "../post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    )
}