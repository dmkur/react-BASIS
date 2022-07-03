import {useForm} from "react-hook-form";

function App() {
    // useForm
    // register - register name and follow to input
    // handleSubmit - back obj of inputs with register
    // formState - can catch errors in options
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            title: 'title',
            body: 'body'
        }
    })

    function submit(obj) {
        console.log(obj)

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {"Content-Type":"application/json"}
        })
            .then(response => response.json())
            .then(result => console.log(result))

    }

    let usersIds = [
        {id: 1, name: 'loal'},
        {id: 2, name: 'loal'},
        {id: 3, name: 'loal'},
        {id: 4, name: 'loal'},
        {id: 5, name: 'lo1212'},
        {id: 6, name: 'loa1l'},
        {id: 7, name: 'loal'},
        {id: 8, name: 'loaasl'},
    ]

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('title', {required: true})}/>
                {errors.title && <span>field is required</span>}
                <input type={'text'} {...register("body")}/>
                <button>Save</button>

                <select {...register('userId')}>
                    {/*<option value={'1'}>1</option>*/}
                    {/*<option value={'2'}>2</option>*/}
                    {/*<option value={'3'}>3</option>*/}
                    {/*<option value={'4'}>5</option>*/}
                    {/*<option value={'6'}>6</option>*/}
                    {/*<option value={'7'}>7</option>*/}
                    {/*<option value={'8'}>8</option>*/}
                    {/*<option value={'9'}>9</option>*/}
                    {/*<option value={'10'}>10</option>*/}

                    {usersIds.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
                </select>
            </form>

        </div>
    );
}

export default App;
