import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

function Todo({ item, index, completeTodo, deleteTodo }) {
  return (
    <li
      className={item.isCompleted ? styles.checked : ""}
      key={item.id}
      onClick={() => {
        completeTodo(item.id);
      }}
    >
      {index + 1} . {item.todo}{" "}
      <span
        className={styles.close}
        onClick={() => {
          deleteTodo(index);
        }}
      >
        {"\u00D7"}
      </span>
    </li>
  );
}

function TodoList(props) {
  console.log("TodoList Rendering...", styles);
  return (
    <ul className={styles.todos}>
      {props.todos && props.todos.length > 0 ? (
        props.todos.map((item, index) => {
          return <Todo key={item.id} item={item} index={index} {...props} />;
        })
      ) : (
        <li className={styles.empty}> Todos will appear here after adding. </li>
      )}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
  completeTodo: () => {
    console.log("completeTodo is not defined");
  },
};

export default TodoList;
