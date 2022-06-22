export function Charakter({name, desc, img}) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>{desc}</div>
                <div>
                    <img src={img} alt="logo"/>
                </div>
            </div>
        </div>
)
}