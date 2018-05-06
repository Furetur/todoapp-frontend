import React from 'react';

// components imports
import Card from '../Card';

// css imports
import './index.css';


class InputSection extends React.Component {
  onEnter = (event) => {
    if (event.key === 'Enter') {
      console.log('enter key pressed');
      // add a todo
      const { value } = event.target;
      this.props.addTodo(value);
    }
  }
  render() {
    return (
      <input type="text" className="add-todo-field" placeholder="Type here.." onKeyPress={this.onEnter} />
    );
  }
}


export default InputSection;
