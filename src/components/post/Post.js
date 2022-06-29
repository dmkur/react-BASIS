export default function Post({item, getPostId}) {
    return (
        <div>
            <div>ID post - {item.id}</div>
            <div>Title - {item.title}</div>
            <button onClick={() => getPostId(item.id) }>Comments</button>
        </div>
    )
}