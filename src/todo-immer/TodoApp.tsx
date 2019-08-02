import React, { useContext, useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import produce from 'immer';

/**
 * 普通方法
 */

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo: any, index: any) => index !== action.index);
    default:
      return state;
  }
}

/**
 * immer方法
 */

// const reducer = produce((draft, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [action.payload, ...draft];
//     case 'REMOVE_TODO':
//       return draft.filter((todo: any, index: any) => index !== action.index);
//     default:
//       return draft;
//   }
// });

// const reducer = produce((draft, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       draft.push(action.payload);
//       return;
//     case 'REMOVE_TODO':
//       draft.splice(draft.findIndex((todo: any) => todo.id === action.index), 1);
//       return;
//     default:
//       return;
//   }
// });

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
