import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

/**
 * 添加待办事项组件
 */
function AddTodo() {
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
    <div style={{ display: 'flex' }}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        style={{ width: 'auto', flex: 1 }}
      />
      <button type="button" onClick={handleSubmit}>
        添加
      </button>
    </div>
  );
}

export default React.memo(AddTodo);
