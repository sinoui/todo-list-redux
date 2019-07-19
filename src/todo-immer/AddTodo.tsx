import React, { useContext, useState } from 'react';
import TodoContext from './TodoContext';

let id = 100;

function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  function handleTextChange(event: any) {
    setTodoText(event.target.value);
  }

  function handleAdd() {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: id++,
        title: todoText,
      },
    });
    setTodoText('');
  }

  return (
    <div>
      <input type="text" value={todoText} onChange={handleTextChange} />
      <button onClick={handleAdd}>新增</button>
    </div>
  );
}

export default AddTodo;
