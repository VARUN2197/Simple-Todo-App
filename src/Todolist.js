import React, { Component } from 'react';
import './component.css';

const Todolist = ({items, deletetodo}) => {
  
  const todos = items.length ? (
    items.map(todo => {
      return (
        <div id={todo.key} className="todolistitem">
        <span onClick={() => deletetodo(todo.key)} > {todo.content} </span>
        <hr/>
        </div>
      )
    })
  ) : (
    <p align="center">you got no task</p> 
  )
  
  return (
    <div className="todolist center">
      {todos}
    </div>
  );
}

export default Todolist;
