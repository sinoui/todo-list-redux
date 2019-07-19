import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import AddTodo from './AddTodo';

function TodoPageHeader() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h1>待办列表</h1>
      <h2>您有{todos.length}条待办</h2>
      <AddTodo />
    </div>
  );
}

export default TodoPageHeader;
