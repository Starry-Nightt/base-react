import React, { useRef } from "react";
import styles from '../pages/todo/todo.module.scss';

function TodoInput({ handleAdd }) {
  const inputRef = useRef();

  const onAdd = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: inputRef.current.value,
    };
    handleAdd(newTodo);
    inputRef.current.value = "";
  };

  return (
    <div className={styles.todoInput}>
      <input ref={inputRef} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
