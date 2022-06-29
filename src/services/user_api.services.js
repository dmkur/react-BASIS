import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users').then(value => value)
const getUserPosts = (id) => axiosInstance.get('/users/'+ id + '/posts')

export {getUsers, getUserPosts}