import { useState, useEffect } from 'react'
// We import your JSON array directly from the folder above src/
import mockData from '../db.json'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        // We simulate a tiny network delay so you can still see the loading state!
        const timer = setTimeout(() => {
            setData(mockData.superheroes)
            setIsLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}