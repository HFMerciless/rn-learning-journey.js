import {useMutation} from "@tanstack/react-query";
import type {Todo} from "../types/todo.ts";
import {createTodo} from "./api.ts";

export function useCreateTodo() {
    return useMutation({
        mutationFn: (data: Todo) => createTodo(data),
        onMutate: () => {
            console.log("Mutated")
        },

        onError: () => {
            console.log("Error")
        },
        onSuccess: () => {
            console.log("Success")
        },
        onSettled: (data, error) => {
            console.log("Settled")
        }
    })
}
