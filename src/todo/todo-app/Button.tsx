import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompleted } from '../actions';

export default function Button(props: any) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCompleted(props.filter));
  };

  return <button onClick={handleDelete}>{props.title}</button>;
}
