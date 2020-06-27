import React, { useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./TodoAdd.scss";

function TodoAdd({ addTodo }) {
  const [todo, setTodo] = useState("");
  const theme = useContext(ThemeContext);
  console.log("Theme", theme);

  const updateTodo = (e) => {
    setTodo(e.target.value);
  };

  const todoAdd = () => {
    // Add items when something is typed
    if (todo && todo.length > 0) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="todoAddContainer">
      <h2 className={theme === "primary" ? "primaryColor" : "secondaryColor"}>
        My To Do List
      </h2>
      <div>
        <input
          type="text"
          placeholder="Title..."
          value={todo}
          onChange={updateTodo}
        />
        <button
          type="submit"
          onClick={todoAdd}
          className={theme === "primary" ? "primaryColor" : "secondaryColor"}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
