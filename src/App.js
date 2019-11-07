import React, { useState } from 'react';

import { CssBaseline, Container, Button, TextField, Modal } from '@material-ui/core';
import TaskList from './components/TaskList'
import idGen from './helpers/idGen'

const App = () => {
  const [taskValue, setTaskValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const saveTask = (e) => {
    if (e.key === 'Enter' && taskValue) {
      let newTask = {id: idGen('task-'), text: taskValue, status: 'pending',}
      setTodoList([newTask, ...todoList]);
      setTaskValue('')
    }
  }
  return (
    <Container>
      <h1>To Do List </h1>
      <CssBaseline />
      <TextField
        value={taskValue}
        label={'Ingresa tarea'}
        name={'task'}
        onChange={(e) => setTaskValue(e.target.value)}
        onKeyPress={(e) => saveTask(e)}
        variant='outlined'
      />
      <TaskList 
      title={'completadas'}
      tag={'()'}
      data={todoList}
      />
    </Container>
  );
}

export default App;
