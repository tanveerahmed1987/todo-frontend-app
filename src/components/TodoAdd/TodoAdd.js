import React, { useState } from "react";
import styles from "./TodoAdd.module.css";

function TodoAdd({ addTodo }) {
  const [todo, setTodo] = useState("");

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
    <div className={styles.header}>
      <h2>My To Do List</h2>
      <div className={styles.inputControl}>
        <input
          type="text"
          placeholder="Title..."
          value={todo}
          onChange={updateTodo}
        />
        <button type="submit" className={styles.addBtn} onClick={todoAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
