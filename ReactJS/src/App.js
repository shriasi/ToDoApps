import React, { useState } from 'react';
import './App.css';

import { Container, Button, Form, FormInput } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


function App() {
  //setup to do list 
  const [toDoList, setToDoList] = useState([
    {text: 'Study MAD lectures'},
    {text: 'Write the diary'},
    {text: 'Take out the trash'}
  ]);
  //setup input value
  const [value, setValue] = useState('');
  
  //Delete to do
  const handleDelete = (todo) => {
    const filteredToDoList = toDoList.filter(currentToDoListValue => (
      currentToDoListValue !== todo));
      setToDoList(filteredToDoList);
  };

  //handle the submission
  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addToDo(value);
    setValue('');
  };
  
  //add to do
  const addToDo = (text) => {
     const updatedToDoList = [...toDoList, { text }];
     setToDoList(updatedToDoList);
  };

  return (
  <Container>
   <h1>ShriAsi To Do list</h1>
   <Container className="toDoList">
     {
       toDoList.map((todo, index) => (
        <div key={index}>
          <span>{todo.text}</span>
          <Button onClick={() => handleDelete(todo)}>Delete</Button>
        </div>
       ))
     }
   </Container>
   <Container className="todoInput">
     <Form onSubmit={handleSubmit}>
       <FormInput 
          placeholder='Type To-Do Here'
          value={value}
          onChange={keyboardStroke => setValue(keyboardStroke.target.value)}
       />
       <Button type='submit'>Add To Do Item</Button>
     </Form>
   </Container>
  </Container>
  );
}

export default App;
