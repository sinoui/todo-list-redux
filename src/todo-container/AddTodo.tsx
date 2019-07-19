import React, { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import { Counter } from './Counter';

let id = 0;

export default function AddTodo() {
  const [todoText, setTodoText] = useState('');

  const onChange = (event: any) => {
    setTodoText(event.target.value);
  };

  const { dispatch } = Counter.useContainer();

  const onClick = () => {
    dispatch({ type: 'ADD_TODO', payload: { id: id++, title: todoText } });
    setTodoText('');
  };

  return (
    <div>
      <input type="text" value={todoText} onChange={onChange} />
      <button onClick={onClick}>添加</button>
    </div>
  );
}
