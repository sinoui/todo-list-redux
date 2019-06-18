import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

/**
 * 获取可见的待办事项
 *
 * @param todos 待办事项列表
 * @param filter 过滤条件
 */
const getVisibleTodos = (todos: Todo[], filter: VISIBILITY_FILTER) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

/**
 * 待办事项列表
 */
function TodoList() {
  const todos = useSelector((state: State) =>
    getVisibleTodos(state.todos, state.visibilityFilter),
  );

  return (
    <>
      <h2>待办事项清单</h2>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default React.memo(TodoList);
