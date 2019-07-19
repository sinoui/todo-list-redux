import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, updateTitle } from '../actions';

interface Props {
  /**
   * 待办事项
   */
  todo: Todo;
}

/**
 * 待办事项
 */
function Todo(props: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  const [revise, setRevise] = useState(false);

  const UpdateClick = () => {
    setRevise(true);
  };

  const [title, setTitle] = useState(props.todo.text);

  const onChange = (event: any) => {
    setTitle(event.target.value);
  };

  const onBlur = () => {
    setRevise(false);
    dispatch(updateTitle(props.todo.id, title));
  };

  return revise ? (
    <input name="type" value={title} onChange={onChange} onBlur={onBlur} />
  ) : (
    <li>
      <span
        onClick={handleClick}
        style={{
          textDecoration: props.todo.completed ? 'line-through' : 'none',
        }}
      >
        {props.todo.text}
      </span>
      <span
        onClick={UpdateClick}
        style={{ marginLeft: '20px', cursor: 'pointer' }}
      >
        修改
      </span>
    </li>
  );
}

export default React.memo(Todo);
