import {useTodos, useTodosIds} from "../services/queries.ts";

export default function Todo() {
    const todosIdsQuery = useTodosIds();
    const todosQueries = useTodos(todosIdsQuery.data);

    return <>
        {todosIdsQuery.data?.map((id) => (
            <p key={id}>Id: {id}</p>
        ))}

        <ul>
            {todosQueries.map(({data}) => (
                    <li key={data.id}>
                        <div>Id: {data?.id}</div>
                        <span>
                            <strong>Title: </strong> {data?.title},{" "}
                            <strong>Description: </strong> {data?.description}
                        </span>
                    </li>
                ))}
        </ul>
    </>
}