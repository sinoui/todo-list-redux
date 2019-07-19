import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from './TodoContext';
import { Counter } from './Counter';

export default function TodoList() {
  const { todos } = Counter.useContainer();
  return (
    <ul>
      {todos.map((todo: any, index: any) => (
        <TodoItem todoIndex={todo.index} todo={todo} key={index} />
      ))}
    </ul>
  );
}
