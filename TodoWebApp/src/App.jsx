import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./contexts/context";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"))
    if(todo && todo.length > 0){
      setTodos(todo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todos) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todos}]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateStatus = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, status: !prevTodo.status} : prevTodo)));
  };

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateStatus }}>
      <TodoForm />
      <div className="container">
        <div className="row">
          <ol className="row m-0 p-0">
          {todos &&
            todos.map((todo) => (
              <div key={todo.id} className="col-sm-6 col-md-4 col-lg-3">
                <TodoItems todos={todo}/>
              </div>
            ))}
            </ol>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
