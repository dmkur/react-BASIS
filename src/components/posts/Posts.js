import {useEffect, useState} from "react";
import {Post} from "../post/Post";



export function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                //console.log(value)
                setPosts([...value])
            })
    },[])

    const choosePost = (item) => {
        setPost(item)
    }


    return (
        <div>
            <div>
                {post.id && post.body}
            </div>
            <div>
            <h2>Posts component </h2>
                {
                    posts.map(post => <Post key={post.id} item={post} choosePost={choosePost}/>)
                }
            </div>
        </div>
    )
}