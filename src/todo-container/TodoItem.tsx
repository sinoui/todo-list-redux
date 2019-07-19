import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import { Counter } from './Counter';

export default function TodoItem(props: any) {
  const { dispatch } = Counter.useContainer();

  const onClick = () => {
    dispatch({ type: 'REMOVE_TODO', payload: props.todo.id });
  };

  return (
    <li>
      {props.todo.title}
      <span onClick={onClick} style={{ marginLeft: '20px' }}>
        删除
      </span>
    </li>
  );
}
