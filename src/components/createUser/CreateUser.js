import {useForm} from "react-hook-form";

import {createUser} from "../../services/users.api.services";

export default function CreateUser() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email'
        }
    })

    const submit = (obj) => {
        console.log(obj)
        createUser(obj).then(result => console.log(result))
    }

    return (
        <div>

            <h2> Create user </h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('name', {required: true})}/>
                {errors.name && <span>field is required</span>}
                <input type={'text'} {...register('username')}/>
                <input type={'text'} {...register('email')}/>
                <button type={'submit'}>Create</button>
            </form>

        </div>
    )
}