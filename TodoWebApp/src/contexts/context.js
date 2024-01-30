import { createContext, useContext } from "react";
const TodoContext = createContext({
    todos: [],

    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateStatus: (id) => {}
})

export const TodoProvider = TodoContext.Provider
export const UseTodo = () => {
    return useContext(TodoContext);
}