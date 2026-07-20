import {useState} from "react";
import {useProjects} from "../services/queries.ts";

export default function Projects() {

    const [page, setPage] = useState(1)
    const {data, isPending, error, isError, isPlaceholderData, isFetching} =
        useProjects(page)

    return <div>
        <div>
            {isPending && <p>Loading...</p>}
            {isError && <p>Error: {error.message}</p>}
        </div>
        <div>
            {data?.map((project) => (<p key={project.id}>{project.name}</p>))}
            <span>Current page: {page}</span>
            <button onClick={() => setPage((old)=> Math.max(old-1,0))}>Previous page</button>{" "}
            <button onClick={()=> {
                if (!isPlaceholderData) {
                    setPage((old) => old + 1)
                }
            }}
                    disabled={isPlaceholderData}
            >Next Page</button>{" "}
            {isFetching ? <span>Loading...</span> : null}{" "}
        </div>
    </div>
}