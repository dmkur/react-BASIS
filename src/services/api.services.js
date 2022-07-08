export default function ApiServices(endpoint) {
    const baseURL = 'https://jsonplaceholder.typicode.com/';
    this.getAllData = () => fetch(baseURL + endpoint)
        .then(value => value.json());
    this.getSingleData = (id) => fetch(baseURL + endpoint+ `/${id}`)
        .then(value => value.json());
};