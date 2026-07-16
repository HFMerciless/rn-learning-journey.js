import {useQueries, useQuery} from "@tanstack/react-query";
import {getTodosIds} from "./api";
import {getTodo} from "./api";

export function useTodosIds() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds
    })
}

export function useTodos(ids: (number | undefined)[] | undefined) {
    return useQueries({
        queries: (ids ?? []).map((id:any) => {
            return{
                queryKey:["todo", id],
                queryFn: () => getTodo(id)
            }
        })
    })
}