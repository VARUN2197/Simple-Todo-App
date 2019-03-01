import React, { Component } from 'react';
import Todolist from './Todolist';
import TodoForm from './TodoForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items : [
        {key: '1', content: 'eat breakfast'},
        {key: '2', content: 'study react'}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.deletetodo = this.deletetodo.bind(this);
  }
  
  addTodo(input) { 
    var task = { key : Math.random() , content: input};
    var tasks = [...this.state.items, task];
    this.setState({
      items :tasks
    });
  }
  
  deletetodo(id) {
    var tasks = this.state.items.filter( todo => {
      return todo.key !== id
    })
    this.setState({
      items : tasks
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Todo List </h1>
        <TodoForm addTodo={this.addTodo}/>
        <Todolist items={this.state.items} deletetodo={this.deletetodo}/>
      </div>
    );
  }
}

export default App;
