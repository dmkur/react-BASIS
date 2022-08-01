import css from "./car.module.css"

const Car = ({car}) => {
    const {model, year, price, id} = car
    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    )
};

export {Car}