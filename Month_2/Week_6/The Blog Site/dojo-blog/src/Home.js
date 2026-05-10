/*
import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw new Error("Could not fetch the data for the resource.")
                    }
                    return res.json()
                })
                .then((data) => {
                    setIsPending(false)
                    setBlogs(data)
                })
                .catch((error) => {
                    setIsPending(false)
                    setError(error.message)
                })
        }, 1000)
    }, [])
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home;*/
