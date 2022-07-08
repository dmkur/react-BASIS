import {useNavigate} from "react-router-dom";

export function Post({post}) {
    const navigate = useNavigate()
    
    return (
        <div>
            {post.id} - {post.title}
            <button
                onClick={() => navigate(post.id.toString())}>
                details
            </button>
        </div>
    )
}