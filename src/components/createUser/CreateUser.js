import {useForm} from "react-hook-form";

export default function CreateUser() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email'
        }
    })

    // if(errors.email){
    //     return <span>field is required</span>
    // }

    function submit(obj) {
        console.log(obj)
    }

    return (
        <div>

            <h2> Create user </h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('name')}/>
                <input type={'text'} {...register('username')}/>
                <input type={'text'} {...register('email')}/>
                <button>Create</button>
            </form>

        </div>
    )
}