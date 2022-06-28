import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getPosts = () => axiosInstance.get('/posts').then(value => value);
const getPost = (id) => axiosInstance.get('/posts/'+ id).then(value => value);

export {getPosts, getPost}
