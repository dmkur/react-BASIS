const createUser = (obj) => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-Type": "application/json"}
    })
        .then(response => response.json())
}

export {createUser}