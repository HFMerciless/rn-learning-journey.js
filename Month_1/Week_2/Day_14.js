/*
//FETCH

fetch("https://pokeapi.co/api/v2/pokemon/sponge")
    .then(response => {
        if (!response.ok) {
            throw new Error ("Network response was not ok.")
        }
        return response.json()
    })
    .then(data => console.log(data.id))
    .catch(error => console.log(error))


async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")
        if (!response.ok) {
             console.error("Network response was not ok.")
        }
        else {
            const data = await response.json()
            console.log(data)
        }
    }
    catch (error) {
        console.error(error)
    }
}
fetchData()*/
