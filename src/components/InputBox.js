import React, { useEffect, useState } from 'react';
import { Button, TextField, stepContentClasses } from '@mui/material';
import '../App.css';

const InputBox = ({ onAddTodo, editModeOn, editTodoData, onEditTodo }) => {
  const [textInput, setTextInput] = useState('');
  useEffect(() => {
    if (editModeOn) setTextInput(editTodoData.todo);
  }, [editModeOn, editTodoData]);

  const inputChangeHandler = (e) => {
    setTextInput(e.target.value);
  };

  const addButtonHandler = () => {
    if (editModeOn) {
      onEditTodo({
        id: editTodoData.id,
        todo: textInput,
        completed: editTodoData.completed,
      });
      setTextInput('');
      return;
    }
    onAddTodo({ id: Date.now(), todo: textInput, completed: false });
    setTextInput('');
  };

  return (
    <div className="input-container">
      <TextField
        hiddenLabel
        id="outlined-basic"
        // label="Add task"
        placeholder="Add task"
        variant="outlined"
        size="small"
        fullWidth
        onChange={inputChangeHandler}
        value={textInput}
        sx={{
          backgroundColor: '#FCF6F5FF',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
      />
      <Button
        variant="contained"
        onClick={addButtonHandler}
        disabled={textInput.trim().length === 0}
        sx={{ width: '150px', textTransform: 'none', fontSize: '1rem' }}
      >
        {editModeOn ? 'Update' : 'Add task'}
      </Button>
    </div>
  );
};

export default InputBox;
