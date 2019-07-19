import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={handleSubmit}>添加</button>
    </div>
  );
}
