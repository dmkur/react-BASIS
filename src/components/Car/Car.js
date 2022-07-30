import css from "./car.module.css"

const Car = ({car}) => {
    const {id, model, year, price} = car;
    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
        </div>
    )
}


export {Car}