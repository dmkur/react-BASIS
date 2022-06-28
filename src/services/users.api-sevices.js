let baseURL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(baseURL).then(value => value.json());

const getUser = (id) => fetch(baseURL + "/" + id).then(value => value.json());

const getUserComments = (id) => fetch(baseURL + "/" + id + '/posts').then(value => value.json());

export {
    getUser, getUserComments, getUsers
}