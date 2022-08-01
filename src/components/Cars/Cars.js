import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carSliceActions} from "../../redux";
import {Car} from "../Car/Car";


const Cars = () => {
    const {cars} = useSelector(state => state.carReducer)
    console.log(cars, 'cars from carReducer')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carSliceActions.getAllCars())
    }, [])

    return (
        <div>
            <h3>Cars</h3>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    )
};

export {Cars}