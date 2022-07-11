import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import {Album} from "./Album";

export function Albums() {
    const api = new ApiServices()

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        api.getAllData('/albums').then(data => setAlbums(data))
    }, [])

    return (
        <div>
            {
                albums.map(album => <Album item={album} key={album.id}/>)
            }
        </div>
    )
}