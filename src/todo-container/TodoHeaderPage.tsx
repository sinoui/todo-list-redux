import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import AddTodo from './AddTodo';
import { Counter } from './Counter';

export default function TodoHeaderPage() {
  const { todos } = Counter.useContainer();

  return (
    <div>
      待办事项：{todos.length}
      <AddTodo />
    </div>
  );
}
