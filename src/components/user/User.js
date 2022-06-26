export function User({items, chosenUser}) {
    return (
        <div style={{margin: '10px'}}>
            <div>ID - {items.id}</div>
            <div>Name - {items.name}</div>
            <button onClick={() => chosenUser(items)}>Details</button>
            <hr/>
        </div>
    )
}
