export function Post({item, choosePost}) {
    return (
        <div>
            <div style={{color: "green", marginBottom: '3px'}}>
                id - {item.id}
                <button onClick={() => choosePost(item)}>more info</button>
            </div>
            <div>
                title - {item.title}
            </div>
        </div>
    )
}