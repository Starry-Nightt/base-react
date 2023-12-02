import React from "react";
import styles from "./todo.module.scss";
import TodoInput from "../../components/todo-input";
import TodoList from "../../components/todo-list";
import useFetch from "../../hooks/useFetch";
import { API } from "../../shared/api";

function Todo() {
  const {data, loading, setData, refetch} = useFetch(API.TODO)

  const handleAdd = (todo) => {
    setData(prev => [todo, ...data])
  }

  return (
    <div>
      <h2 className={styles.title}>Todo App</h2>
      <TodoInput handleAdd={handleAdd} />
      <button onClick={refetch}>Refresh</button>
      <TodoList data={data} loading={loading} />
    </div>
  );
}

export default Todo;
