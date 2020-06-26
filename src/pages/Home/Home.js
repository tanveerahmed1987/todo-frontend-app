import React, { useState, useEffect } from "react";
import { TodoAdd } from "../../components/TodoAdd";
import { TodoList } from "../../components/TodoList";
import axios from "axios";

function Home() {
  const [state, setState] = useState({ todos: [] });

  useEffect(() => {
    console.log("useEffect is running....");
    getTodos();
  }, []);

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
    const removedTodos = state.todos.splice(index, 1);
    console.log(removedTodos);
    removeTodo(removedTodos[0].id);
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
      state.todos.push(todo);
      setState({ todos: [...state.todos] });
    } catch (err) {
      console.log("Error occurred while calling save todo : ", err);
    }
  };

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      console.log("response : ", response);
      // state.todos.unshift(todo);
      setState({ todos: [...response.data] });
    } catch (err) {
      console.log("Error occurred while calling gettodos : ", err);
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await axios.delete("http://localhost:8080/todos/" + id);
      console.log(response);
    } catch (err) {
      console.log("Error occurred while calling deleteTodo", err);
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
