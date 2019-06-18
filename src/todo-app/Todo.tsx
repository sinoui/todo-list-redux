import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';

interface Props {
  todo: Todo;
}

/**
 * 待办事项
 *
 * @param {Props} props
 */
function Todo(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: props.todo.completed ? 'line-through' : 'none',
      }}
    >
      {props.todo.text}
    </li>
  );
}

export default React.memo(Todo);
