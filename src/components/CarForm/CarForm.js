import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carSliceActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data)
        dispatch(carSliceActions.createCar(data))
        reset()
    };

    return (
        <div>
            <h3>CarForm</h3>
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