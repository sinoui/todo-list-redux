import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import ServerData from './ServerData';

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
      <ServerData />
    </div>
  );
}
