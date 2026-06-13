import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const RQSuperHeroesPage = () => {
    const {isLoading, Data} = useQuery('super-heroes', ()=>{
        return axios.get('https://superheroapi.com/api.php/11222222222222222222222222222222/search/superheroes')
    })
    if(isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {Data?.data.results.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}
