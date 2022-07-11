async function FetchRequest(url) {
    return await fetch(url).then(value => value.json())
}

export default function ApiServices() {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    this.getAllData = async (endpoint) => {
        return FetchRequest(baseURL + endpoint)
    }
}

