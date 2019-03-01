import React, { Component } from 'react';
import './component.css';

const TodoForm = ({addTodo}) => {
  let input;
  return (
    <div className="todoform" center>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;