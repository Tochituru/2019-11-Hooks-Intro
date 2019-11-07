import React, { useState } from 'react';

import { CssBaseline, Container, Button, TextField, Modal } from '@material-ui/core';
import TaskList from './components/TaskList';
import findIndex from './helpers/findIndex';
import idGen from './helpers/idGen';

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
  
  const deleteTask = (id) => {
    let newList = [...todoList];
    newList.splice(findIndex(newList, id), 1);
  }

  const completed = todoList.filter(e =>e.status === 'completed');
  const pending = todoList.filter(e =>e.status === 'pending');

  const changeStatus = (id) => {
    let newList = [...todoList];
    let task = newList.find(element => element.id === id)
    task.status = task.status === 'pending' ? 'completed' : 'pending';
    setTodoList(newList);
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
      title={'pending'}
      tag={'()'}
      data={pending}
      deleteTask={deleteTask}
      // editTask={this.openEdition}
      changeStatus={changeStatus}
      />
      <TaskList 
      title={'completadas'}
      tag={'()'}
      data={completed}
      deleteTask={deleteTask}
      // editTask={this.openEdition}
      changeStatus={changeStatus}
      />
    </Container>
  );
}

export default App;
