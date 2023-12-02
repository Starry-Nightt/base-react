import React from "react";

function TodoList({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data && data.slice(0,10).map((it) => (
        <li>{it.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
