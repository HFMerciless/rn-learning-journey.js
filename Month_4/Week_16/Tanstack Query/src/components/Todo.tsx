import {useTodos, useTodosIds} from "../services/queries.ts";
import {useCreateTodo, useDeleteTodo, useUpdateTodo} from "../services/mutations.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {Todo} from "../types/todo.ts";

export default function Todos() {
    const todosIdsQuery = useTodosIds();
    const createTodoMutation = useCreateTodo()
    const updateTodoMutation = useUpdateTodo()
    const deleteTodoMutation = useDeleteTodo()

    const todosQueries = useTodos(todosIdsQuery.data);

    const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
        createTodoMutation.mutate(data)
    }
    const handleMarkAsDoneSubmit = (data:Todo | undefined) => {
        if (data) {
            updateTodoMutation.mutate({...data, checked: true})
        }
    }
    const handleDeleteSubmit =async (id:number)=> {
        await deleteTodoMutation.mutateAsync(id)
    }
    const {register, handleSubmit} =useForm<Todo>()

    return (
        <>
            <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
                <h4>New todo</h4>
                <input placeholder="title" {...register("title")}/>
                <br/>
                <input placeholder="description" {...register("description")}/>
                <br/>
                <input
                    type="submit" disabled={createTodoMutation.isPending}
                    value={createTodoMutation.isPending ? "Creating..." : "Create"}
                />

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
                            <div>
                                <button onClick= {() => handleMarkAsDoneSubmit(data)}
                                disabled={data?.checked}
                                >
                                    {data?.checked ? "Done" : "Mark as done"}
                                </button>
                                <button
                                    style={{ marginLeft: 10 }}
                                    onClick={() => handleDeleteSubmit(data.id!)}
                                    >
                                    Delete
                            </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}