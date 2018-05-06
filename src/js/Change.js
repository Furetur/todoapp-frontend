class Change {
  /**
   * Constructs a change
   * @param {String} type Change type
   * @param {Todo} oldTodo old todo
   * @param {Todo} newTodo new todo
   */
  constructor(type, oldTodo, newTodo) {
    this.type = type;
    // eslint-disable-next-line
    this.todoId = newTodo? newTodo._id : oldTodo._id; //because todos are returned from MongoDB; and MongoDB IDs are with an underscore
    this.oldTodo = oldTodo;
    this.newTodo = newTodo;
    this.date = new Date();
  }


  /**
   * Constructs aa `todo added` change
   * @param {String} todo added todo
   */
  static add(todo) {
    return new Change('add', null, todo);
  }

  /**
   * Constructs a `todo removed` change
   * @param {Todo} todo the todo to remove
   */
  static remove(todo) {
    return new Change('remove', todo, null);
  }

  /**
   * Constructs a `todo updated` change
   * @param {*} oldTodo old todo
   * @param {*} overriddenProperties properties that get overridden
   */
  static update(oldTodo, { content, status, date }) {
    const newTodo = Object.assign({}, oldTodo);
    if (content) newTodo.content = content;
    if (status) newTodo.status = status;
    if (date) newTodo.date = date;

    return new Change('update', oldTodo, newTodo);
  }
}

export default Change;
