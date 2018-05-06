import LocalForage from 'localforage';

class LocalMemory {
  constructor() {
    this.mainStore = LocalForage.createInstance({
      name: 'main-store',
    });
    this.changesStore = LocalForage.createInstance({
      name: 'changes-store',
    });
  }

  /**
   * Changes the todo and saves the change
   * @param {Change} change the change to apply
   */
  async applyChange(change) {
    this.changesStore.setItem(await this.changesStore.length(), change);
    if (!change.newTodo) {
      this.mainStore.removeItem(change.todoId);
      return;
    }
    this.mainStore.setItem(change.todoId, change.newTodo);
  }

  /**
   * returns all todos
   */
  async getAll() {
    const keys = await this.mainStore.keys();
    const promises = keys.map(key => this.mainStore.getItem(key));
    return Promise.all(promises);
  }
}

export default LocalMemory;
