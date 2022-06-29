export function User({item, getIdUser}) {
    return (
        <div>
            {item.id} - {item.name}<br/>
            <button onClick={() => getIdUser(item.id)}>Comments</button>
        </div>
    )
}