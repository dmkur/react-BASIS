import css from "./car.module.css"
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, year, price} = car;
    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car)) } >Update Car</button>
        </div>
    )
}


export {Car}