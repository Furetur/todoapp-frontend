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
    // update DOM
    const todo = new Todo(makeOfflineId(), content, 'undone', date);
    // save the change
    const change = Change.add(todo);
    // save the change
    this.localMemory.applyChange(change);
    // show the change to the user
    this.todoListNode.applyChange(change);
  }


  render() {
    return (
      <div>
        <Header>Todo app</Header>
        <main>
          <TodoList todosPromise={this.localMemory.getAll()} ref={node => this.todoListNode = node}/>
        </main>
        <InputSection addTodo={this.addTodo} />
      </div>
    );
  }
}


export default App;
