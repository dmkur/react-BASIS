import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

const createComment = (obj) => axiosInstance.post('/comments', obj)

export {createComment}