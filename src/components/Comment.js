import {Link} from "react-router-dom";

export function Comment({item}) {
    return (
        <div>
            <div>ID - {item.id}</div>
            <div>Name - {item.name}</div>
            <Link to={item.postId.toString()}>post</Link>
            <hr/>
        </div>
    )
}