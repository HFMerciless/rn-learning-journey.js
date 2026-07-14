import {useTodosIds} from "../services/queries.ts";

export default function Todo() {
    const todosIdsQuery = useTodosIds();

    if (todosIdsQuery.isPending) {
        return <span>Loading...</span>;
    }
    if (todosIdsQuery.isError) {
        return <span>Error</span>;
    }
    return <>
        {todosIdsQuery.data.map((id) => (
            <p key={id}>{id}</p>
        ))}
    </>
}