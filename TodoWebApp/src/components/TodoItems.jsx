import React from "react";
import { UseTodo } from "../contexts/context";
import { useDate } from "../useDate";

function TodoItems({ todos }) {
  const { deleteTodo, updateStatus } = UseTodo();
  const {date, wish} = useDate()

  return (
    <div className="bg-dark text-light rounded mt-5 p-3">
      <div className="d-flex flex-column gap-2">
        <span className="ps-3">
        <li className="p-0 fw-bold border-0">{todos.todo}</li>
        </span>
        <p className="fw-medium">
          Status: {todos.status ? <span className="text-success">Completed</span> : <span className="text-danger">Pending</span>}
        </p>
        <span>
          {wish} <br />
          {date}
        </span>
      </div>
      <div className="d-flex flex-column">
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={() => updateStatus(todos.id)}
        >
          Update Status
        </button>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={() => deleteTodo(todos.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
