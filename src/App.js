import React, { useEffect, useState } from 'react';

import InputBox from './components/InputBox';
import TodosList from './components/TodosList';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editModeOn, setEditModeOn] = useState(false);
  const [editTodoData, setEditTodoData] = useState({});

  const addTodo = (todo) => {
    setTodos((curTodos) => [...curTodos, todo]);
  };

  const deleteTodo = (todoId) => {
    setTodos((curTodos) => curTodos.filter((todo) => todo.id !== todoId));
  };

  const completeTodo = (todoId) => {
    setTodos((curTodos) =>
      curTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const stertEditTodo = (todoId) => {
    setEditModeOn(true);
    setEditTodoData(todos.find((todo) => todo.id === todoId));
  };

  const editTodo = (updatedTodo) => {
    setTodos((curTodos) =>
      curTodos.map((t) =>
        t.id === updatedTodo.id ? { ...t, todo: updatedTodo.todo } : t
      )
    );
    setEditModeOn(false);
    setEditTodoData({});
  };

  return (
    <div className="outer-main">
      <div className="main-container">
        <h1 className="heading">TODO LIST</h1>
        <InputBox
          onAddTodo={addTodo}
          editModeOn={editModeOn}
          editTodoData={editTodoData}
          onEditTodo={editTodo}
        />
        <TodosList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onCompleteTodo={completeTodo}
          // setEditModeOn={setEditModeOn}
          onStartEditTodo={stertEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
