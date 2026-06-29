import axios from "axios";
import {Todo} from "../Types/todo";

const BASE_URL = "https://localhost:8080"
const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export const getTodos = async () => {
    return(await axiosInstance.get<Todo[]>("/todos")).data.map((todo) => todo.id)
}