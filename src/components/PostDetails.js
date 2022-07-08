import {useEffect, useState} from "react";
import ApiServices from "../services/api.services";
import {useParams} from "react-router-dom";

export function PostDetails() {
    const [postDetails, setPostDetails] = useState([])
    const apiServices = new ApiServices('posts')
    const {id} = useParams()

    useEffect(() => {
        apiServices.getSingleData(id).then(value => {
            console.log(value)
            setPostDetails({...value})
        })
    }, [id])

    return (
        <div>
            <hr/>
            <h3>Post Details</h3>
            {JSON.stringify(postDetails)}
            <hr/>
        </div>
    )
}