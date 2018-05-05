import React from 'react';
import PropTypes from 'prop-types';

import { TodoType } from '../../js/Todo';

import Card from '../Card';
import TodoItem from '../TodoItem';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
    };
  }

  applyChange(change) {
    if (change.type === 'add') {
      this.setState({
        todos: [...this.state.todos, change.newTodo]
      });
    }
  }

  addTodo(newTodo) {
    this.state.todos.push(newTodo);
  }


  render() {
    return (
      <Card>
        <ul>
          {
            this.state.todos.map(todo => (
              <li key={todo._id}>
                <TodoItem todo={todo} />
              </li>
            ))
          }
        </ul>
      </Card>
    );
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
};


export default TodoList;
