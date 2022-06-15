import { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo";

export const ACTION = {
  ADD_TODO: "add-todos",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [newTodo(action.payload.name), ...state];

    case ACTION.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })

      case ACTION.DELETE_TODO:
        return state.filter((todo) => {
          if (todo.id !== action.payload.id) {
            return state
          }
        })
    default:
      return state;
  }
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  console.log(todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <div className="div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <div className="div-todo">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
    </div>
  );
}

export default App;
