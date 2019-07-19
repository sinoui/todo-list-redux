import React from 'react';

interface type {
  todos: [];
  dispatch: any;
}

const TodoContext = React.createContext<type>({
  todos: [],
  dispatch: () => undefined,
});

export default TodoContext;
