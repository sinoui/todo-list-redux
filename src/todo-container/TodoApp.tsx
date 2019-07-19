import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoList from './TodoList';
import TodoHeaderPage from './TodoHeaderPage';
import { Counter } from './Counter';

export default function TodoApp() {
  // function reducer(state: any, action: any) {
  //   switch (action.type) {
  //     case 'ADD_TODO':
  //       return [...state, action.payload];
  //     case 'REMOVE_TODO':
  //       return state.filter((todo: any) => todo.id !== action.payload);
  //     default:
  //       return state;
  //   }
  // }

  // const [todos, dispatch] = useReducer(reducer, []);

  return (
    <Counter.Provider>
      <TodoHeaderPage />
      <TodoList />
    </Counter.Provider>
  );
}
