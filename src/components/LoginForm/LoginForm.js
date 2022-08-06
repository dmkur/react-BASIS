import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";
import {authService} from "../../services";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(authActions.login({user:data}))
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'text'} placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    )
};

export {LoginForm}