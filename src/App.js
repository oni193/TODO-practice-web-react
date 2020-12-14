import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form = {<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;