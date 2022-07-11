import {useEffect, useState} from "react";
import ApiServices from "../services/api.services";
import {Todo} from "./Todo";


export function Todos() {
    const apiServices = new ApiServices()
    const [todos, setTodos] = useState([])

    useEffect(() => {
        apiServices.getAllData('/todos').then(value => setTodos([...value]))
    }, [])

    return (
        <div>
            {
                todos.map(todo => <Todo item={todo} key={todo.id}/>)
            }
        </div>
    )
}