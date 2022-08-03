import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carSliceActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {error} = useSelector(state => state.carReducer)
    const dispatch = useDispatch();

    const submit = (car) => {
        //console.log(data)
        dispatch(carSliceActions.createCar({car:car}))
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
                <button>Create</button>
            </form>
        </div>
    )
};

export {CarForm}