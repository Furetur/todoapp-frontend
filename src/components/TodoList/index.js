import React from 'react';
import PropTypes from 'prop-types';

import { TodoType } from '../../js/Todo';

import './index.css';

import Card from '../Card';
import TodoItem from '../TodoItem';


class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    }

    props.todosPromise.then(todos => {
      this.setState({
        todos: [...todos, ...this.state.todos],
      });
    });
  }

  applyChange(change) {
    if (change.type === 'add') {
      this.setState({
        todos: [...this.state.todos, change.newTodo],
      });
      return;
    }
    if (change.type === 'remove') {
      this.setState({
        todos: this.state.todos.filter(todo => todo._id !== change.todoId),
      });
      return;
    }
    if (change.type === 'update') {
      this.setState({
        todos: this.state.todos.map(todo => (todo._id === change.todoId)? change.newTodo : todo),
      });
    }
  }


  getTodoRemovingFunction(todo) {
    return () => {this.props.removeTodo(todo)};
  }


  getTodoUpdatingFunction(todo) {
    return (props) => {this.props.updateTodo(todo, props)};
  }


  render() {
    return (
      <Card>
        <ul className="todo-list">
          {
            this.state.todos.map(todo => (
              <li key={todo._id}>
                <TodoItem todo={todo} removeTodo={this.getTodoRemovingFunction(todo)} updateTodo={this.getTodoUpdatingFunction(todo)} />
              </li>
            ))
          }
        </ul>
      </Card>
    );
  }
}


TodoList.propTypes = {
  todosPromise: PropTypes.instanceOf(Promise).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};


export default TodoList;
