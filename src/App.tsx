import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './todo-app';
import todoApp from './reducers';
import './primitive.css';

const store = createStore(todoApp);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
