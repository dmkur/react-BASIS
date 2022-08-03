import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carSliceActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {error, carForUpdate} = useSelector(state => state.carReducer)
    const dispatch = useDispatch();
    console.log(carForUpdate, 'up')

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate, setValue])

    const submit = (car) => {
            if(carForUpdate){
                dispatch(carSliceActions.updateCarById({id:carForUpdate.id, car}))
            } else {
            dispatch(carSliceActions.createCar({car: car}))
            //console.log(data)
            }
        reset()
    };

    return (
        <div>
            <h3>CarForm</h3>
            {error && <span>{JSON.stringify(error)}</span>}
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'model'} {...register('model')}/>
                <input type={'text'} placeholder={'year'} {...register('year')}/>
                <input type={'text'} placeholder={'price'} {...register('price')}/>
                <button>{carForUpdate?'Update':'Create'}</button>
            </form>
        </div>
    )
};

export {CarForm}