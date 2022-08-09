import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carSliceActions} from "../../redux";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";


const Cars = () => {
    const {cars, carForUpdate, prev, next} = useSelector(state => state.carReducer)
    console.log(cars, 'cars from carReducer')
    const dispatch = useDispatch();

    // в query буть зберігатися усі пареметри йгукн URL
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        // передаємо obj page який дорівнює нашому query
        // а він в свою чергу наповнюється від кнопок prevPage, nextPage
        dispatch(carSliceActions.getAllCars({page:query.get('page')}))
    }, [query])

    const prevPage = () => {
        // через + конвертуємо в число
        const prev = Number(query.get('page'))-1;
        // але передаємо як стрічку
        setQuery({page:`${prev}`})
    };

    const nextPage = () => {
        const next = Number(query.get('page'))+1;
        setQuery({page:`${next}`})
    };

    return (
        <div>
            <h3>Cars</h3>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    )
};

export {Cars}