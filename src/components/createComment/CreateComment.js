import {useForm} from "react-hook-form";
import {createComment} from "../../services/comments.api.sercives";

export default function CreateComment() {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            title:'title',
            body:'body'
        }})

    function submit(obj) {
        console.log(obj)
        createComment(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <h2>Create comment</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('title')}/>
                <input type={'text'} {...register('body')}/>
                <button>Create</button>
            </form>
        </div>
    )
}