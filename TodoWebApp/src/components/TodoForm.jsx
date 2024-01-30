import React, { useState } from "react";
import { UseTodo } from "../contexts/context";

function TodoForm() {
  const { addTodo } = UseTodo();
  const [todo, setTodo] = useState("");
  const addTodos = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, status: false });
    setTodo("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 mt-5 m-auto">
          <div className="input-group">
            <input
              value={todo}
              type="text"
              className="form-control"
              placeholder="Write todo..."
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={addTodos}>
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
