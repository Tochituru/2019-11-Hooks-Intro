import React, { useState } from 'react';

import { CssBaseline, Container, Button, TextField, Modal } from '@material-ui/core';


const App = () => {
  const [taskValue, setTaskValue] = useState()
  return (
    <Container>
      <h1>To Do List </h1>
      <CssBaseline />
      <TextField
        value={taskValue}
        label={'Ingresa tarea'}
        name={'task'}
        onChange={(e) => setTaskValue(e.target.value)}
        variant='outlined'
      />
    </Container>
  );
}

export default App;
