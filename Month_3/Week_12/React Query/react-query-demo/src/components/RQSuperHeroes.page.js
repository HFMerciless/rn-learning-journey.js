import { useQuery } from 'react-query'
import mockData from '../db.json'

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['super-heroes'],
        queryFn: () => {
            return Promise.resolve(mockData.superheroes)
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message || 'Something went wrong'}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {data?.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}