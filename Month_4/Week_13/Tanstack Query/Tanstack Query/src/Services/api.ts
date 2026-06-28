const BASE_URL = "https://jsonplaceholder.typicode.com"

const getTodos = async () => {
    return(
        await fetch(`${BASE_URL}/todos`)
    )
}