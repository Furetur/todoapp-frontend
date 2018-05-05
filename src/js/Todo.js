import PropTypes from 'prop-types';


class Todo {
  /**
   * Create a todo
   * @param {String} id id of the todo
   * @param {String} content Content of the todo
   * @param {String} status status like `done`/`undone`
   * @param {Date} date when the todo is scheduled for
   */
  constructor(id, content, status, date = new Date()) {
    // eslint-disable-next-line
    this._id = id;
    this.content = content;
    this.status = status;
    this.date = date;
  }
}


export const TodoType = PropTypes.shape({
  action: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
});


export default Todo;
