import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Fade,
  IconButton,
  Tooltip,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CustomTooltip from './common/CustomTooltip';

const ListItem = ({ todo, onDeleteTodo, onCompleteTodo, onStartEditTodo }) => {
  const deleteHandler = () => {
    onDeleteTodo(todo.id);
  };

  const completeHandler = () => {
    onCompleteTodo(todo.id);
  };

  const startEditTodo = () => {
    onStartEditTodo(todo.id);
  };

  return (
    <Card sx={{ display: 'flex', marginBottom: '10px' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{}}>
          <p
            style={{
              fontFamily: 'sans-serif',
              fontSize: '1.15rem',
              textDecoration: todo.completed ? 'line-through' : '',
            }}
          >
            {todo.todo}
          </p>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          <CustomTooltip
            title={`Mark as ${todo.completed ? 'not' : ''} completed`}
          >
            <IconButton aria-label="done" onClick={completeHandler}>
              {todo.completed ? <CloseIcon /> : <DoneIcon />}
            </IconButton>{' '}
          </CustomTooltip>
          <CustomTooltip title={'Edit todo'}>
            <IconButton aria-label="edit" onClick={startEditTodo}>
              <EditIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title={'Delete todo'}>
            <IconButton aria-label="delete" onClick={deleteHandler}>
              <DeleteIcon />
            </IconButton>
          </CustomTooltip>
        </Box>
      </Box>
    </Card>
  );
};

export default ListItem;
