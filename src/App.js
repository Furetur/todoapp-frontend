import React from 'react';

import Todo from './js/Todo';
import Change from './js/Change';
import LocalMemory from './js/data/LocalMemory';

import './App.css';

import Header from './components/Header';
import InputSection from './components/InputSection';
import TodoList from './components/TodoList';

import makeOfflineId from './js/lib/make-offline-id';


class App extends React.Component {
  constructor(args) {
    super(args);
    this.localMemory = new LocalMemory();
  }


  addTodo = (content, date) => {
    // create a todo
    const todo = new Todo(makeOfflineId(), content, 'undone', date);
    // construct a change
    const change = Change.add(todo);
    // show the change to the user
    this.todoListNode.applyChange(change);
    // save the change
    this.localMemory.applyChange(change);
  }


  removeTodo = (todo) => {
    // construct a change
    const change = Change.remove(todo);
    // show the change to the user
    this.todoListNode.applyChange(change);
    // save the change
    this.localMemory.applyChange(change);
  }


  updateTodo = (todo, props) => {
    //construct a change
    const change = Change.update(todo, props);
    // show the change
    this.todoListNode.applyChange(change);
    // save the change
    this.localMemory.applyChange(change);
  }


  render() {
    return (
      <div>
        <Header>Todo app</Header>
        <main>
          <TodoList todosPromise={this.localMemory.getAll()} ref={node => this.todoListNode = node} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
        </main>
        <div className="todo-input">
          <InputSection addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}


export default App;
