import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {carForUpdate} = useSelector((state) => state.cars);

    useEffect(() => {
        if(carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    },[carForUpdate])

    const submit = () => {

    };

    return (
        <div>
            CarForm component
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'model'} {...register('model')}/>
                <input type={'text'} placeholder={'price'} {...register('price')}/>
                <input type={'text'} placeholder={'year'} {...register('year')}/>
                <button>Update</button>
            </form>
        </div>
    )
}

export {
    CarForm
}