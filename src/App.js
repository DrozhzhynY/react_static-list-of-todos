import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';

function App() {
  const preparedTodos = todos.map(todo => (
    {
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }
  ));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
