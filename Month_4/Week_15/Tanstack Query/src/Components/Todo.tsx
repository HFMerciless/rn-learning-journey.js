import {useTodosIds} from "../Services/queries";

export default function Todo() {
    const todosIdsQuery = useTodosIds();

    if (todosIdsQuery.isPending) {
        return <span>Loading...</span>;
    }
    if (todosIdsQuery.isError) {
        return <span>Error</span>;
    }
    return <>{todosIdsQuery.data.map((id) => (
        <div key={id}>{id}</div>
    ))}</>;
}