import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {useEffect} from "react";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    console.log(cars, 'car-state')

    useEffect(() => {
        dispatch(carActions.getAllCars())
    }, [])

    return (
        <div>
            <h3>Cars</h3>
            {
                cars.map(car=><Car car={car} key={car.id}/>)
            }
        </div>
    )
}

export {Cars}