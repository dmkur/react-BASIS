import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiServices from "../services/api.services";
import {Post} from "../components/Post";

export function Posts() {
    const [posts, setPosts] = useState([])
    const api = new ApiServices('posts')

    useEffect(() => {
        api.getAllData().then(post => setPosts([...post]))
    }, [])
    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <h3>Posts</h3>
            {posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    )
}