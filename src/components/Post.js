import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiServices from "../services/api.services";

export function Post() {
    const api = new ApiServices()
    const {postId:id} = useParams()

    const [post, setPost] = useState([])

    useEffect(() => {
        api.getAllData(`/posts/${id}`).then(value => setPost({...value}))
    }, [id])

    return (
        <div>
            <hr/>
            <h4>Post component</h4>
            {JSON.stringify(post)}
            <hr/>
        </div>
    )
}