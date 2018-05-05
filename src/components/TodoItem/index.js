import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TodoType } from '../../js/Todo'; 

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.todo.content,
      status: props.todo.status,
      date: props.todo.date,
    };
  }


  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" defaultChecked={this.state.status === 'done'} />
        <span className="todo-content">{this.state.content}</span>
        <button className="todo-remove">Remove</button>
        <span className="todo-date">{this.state.date.toString()}</span>
      </div>
    );
  }
}


TodoItem.propTypes = {
  todo: TodoType.isRequired,
};


export default TodoItem;
