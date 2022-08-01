import {useEffect} from "react";
import {useSelector} from "react-redux";

const Cars = () => {
    const {cars} = useSelector(state => state.carReducer)
    console.log(cars, 'cars from carReducer')

    useEffect( () => {

    }, [])

    return (
        <div>
            Cars component
        </div>
    )
};

export {Cars}