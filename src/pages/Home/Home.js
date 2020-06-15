import React, { useState } from "react";
import { TodoAdd } from "../../components/TodoAdd";
import { TodoList } from "../../components/TodoList";
import axios from "axios";

function Home() {
  const [state, setState] = useState({ todos: [] });

  const toggleTodoState = (id) => {
    console.log("toggleTodoState", id);
    state.todos.forEach(function (todo) {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setState({ todos: [...state.todos] });
  };

  const deleteTodo = (index) => {
    console.log("deleteTodo", index);
    state.todos.splice(index, 1);
    setState({ todos: [...state.todos] });
  };

  const addTodo = (todo) => {
    console.log("addTodo", todo);
    let tempTodo = {
      id: state.todos.length + 1,
      todo: todo,
      isCompleted: false,
    };
    saveTodo(tempTodo);
  };

  const saveTodo = async (todo) => {
    try {
      const response = await axios.post("http://localhost:8080/todos", todo);
      console.log("message : ", response.data);
      state.todos.unshift(todo);
      setState({ todos: [...state.todos] });
    } catch (err) {
      console.log("Error occurred while calling save todo : ", err);
    }
  };

  return (
    <>
      <TodoAdd addTodo={addTodo} />
      <TodoList
        todos={state.todos}
        completeTodo={toggleTodoState}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default Home;
