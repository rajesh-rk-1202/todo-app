import { List } from '@mui/material';
import React from 'react';
import ListItem from './ListItem';

const TodosList = ({
  todos,
  onDeleteTodo,
  onCompleteTodo,
  onStartEditTodo,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onCompleteTodo={onCompleteTodo}
          onStartEditTodo={onStartEditTodo}
        />
      ))}
    </List>
  );
};

export default TodosList;
