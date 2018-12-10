import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todolist/todo-list.jsx';

export default class App extends Component {
  render(){
    return(
      <TodoList />
    )
  }
}
