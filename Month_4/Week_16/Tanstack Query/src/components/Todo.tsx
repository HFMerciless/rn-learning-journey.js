import {useTodos, useTodosIds} from "../services/queries.ts";
import {useCreateTodo} from "../services/mutations.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {Todo} from "../types/todo.ts";

export default function Todos() {
    const todosIdsQuery = useTodosIds();
    const todosQueries = useTodos(todosIdsQuery.data);
    const createTodoMutation = useCreateTodo()
    const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
        createTodoMutation.mutate(data)
    }
    const {register, handleSubmit} =useForm<Todo>()

    return (
        <>
            <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
                <h4>New todo</h4>
                <input placeholder="title" {...register("title")}/>
                <br/>
                <input placeholder="description" {...register("description")}/>
            </form>
            <ul>
                {todosQueries.map(({ data, isLoading }, index) => {
                    if (isLoading || !data) {
                        return <li key={`loading-${index}`}>Loading...</li>;
                    }
                    return (
                        <li key={data.id}>
                            <br />
                            <div>Id: {data.id}</div>
                            <span>
                                <strong>Title: </strong> {data.title},
                                <strong style={{marginLeft:10}}>Description: </strong> {data.description || "No description"}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}