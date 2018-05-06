import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TodoType } from '../../js/Todo'; 

import './index.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.todo.content,
      status: props.todo.status,
      date: props.todo.date,
    };
  }

  onCheckboxChange = (event) => {
    this.props.updateTodo({
      status: event.target.checked? 'done' : 'undone',
    });
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" defaultChecked={this.state.status === 'done'} onChange={this.onCheckboxChange} />
        <span className="todo-content">{this.state.content}</span>
        <span className="todo-date">{this.state.date.toString().slice(0, 3)}</span>
        <button className="todo-remove" onClick={this.props.removeTodo}>Remove</button>
      </div>
    );
  }
}


TodoItem.propTypes = {
  todo: TodoType.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};


export default TodoItem;
