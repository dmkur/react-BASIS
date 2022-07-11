import {Outlet} from "react-router-dom"
import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import {Comment} from "./Comment";

export function Comments() {
    const api = new ApiServices()

    const [comments, setComments] = useState([])

    useEffect(() => {
        api.getAllData('/comments').then(data => setComments(data))
    }, [])

    return (
        <div>
            <Outlet/>
            {
                comments.map(album => <Comment item={album} key={album.id}/>)
            }
        </div>
    )
}