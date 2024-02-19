/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = []
  }
  add(todo) {
    this.list.push(todo)
  }
  remove(indexOfTodo) {
    try {
      this.list.splice(indexOfTodo, 1)
    } catch (e) {
      throw new Error('Invalid index')
    }
  }
  update(index, updatedTodo){
    try {
      if (this.list.length > index) {this.list.splice(index, 1, updatedTodo)}
    } catch (e) {
      throw new Error('Invalid index')
    }
  }
  getAll(){
    return this.list
  }
  get (indexOfTodo) {
    try {
      if (this.list.length > indexOfTodo) {return this.list[indexOfTodo]}
      return null
    } catch (e) {
      throw new Error('Invalid index')
    }
  }
  clear () {
    this.list = []
  }
}

module.exports = Todo;
