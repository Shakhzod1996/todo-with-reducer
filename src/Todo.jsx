import React from "react";
import { ACTION } from "./App";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.complete ? "line-through" : "none", color: todo.complete? "green" : "black" }}>
        {todo.name}
      </span>
      <div className="div-btn">
        <button onClick={() => dispatch({type: ACTION.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        <button onClick={() => dispatch({type: ACTION.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
      </div>
    </div>
  );
}
