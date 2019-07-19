import React, { useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoItem(props: any) {
  const { dispatch } = useContext(TodoContext);

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TODO', index: props.todo.id });
  };

  return (
    <div>
      {props.todo.title}
      <button onClick={handleRemove}>删除</button>
    </div>
  );
}
