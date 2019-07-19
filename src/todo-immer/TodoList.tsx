import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todoIndex={index} todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
