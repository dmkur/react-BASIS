import css from "./car.module.css"
import {useDispatch} from "react-redux";
import {carSliceActions} from "../../redux";

const Car = ({car}) => {
    const {model, year, price, id} = car
    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carSliceActions.deleteCarByID({id}))}
                >Delete</button>
            <button onClick={() => dispatch(carSliceActions.setCarForUpdate(car))}>Update</button>
        </div>
    )
};

export {Car}