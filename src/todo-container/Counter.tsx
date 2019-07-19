import React, { useReducer } from 'react';
import { createContainer } from 'unstated-next';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo: any) => todo.id !== action.payload);
    default:
      return state;
  }
}

function useCounter() {
  const [todos, dispatch] = useReducer(reducer, []);
  return { todos, dispatch };
}

let Counter = createContainer(useCounter);

export { Counter };
