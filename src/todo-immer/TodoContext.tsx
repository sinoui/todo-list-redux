import React from 'react';

interface Todo {
  id: string;
  title: string;
}

interface TododContextInterface {
  todos: Todo[];
  dispatch: any;
}

export interface Action {
  type: string;
  payload?: any;
}

const TodoContext = React.createContext<TododContextInterface>({
  todos: [],
  dispatch: () => undefined,
});

export default TodoContext;
