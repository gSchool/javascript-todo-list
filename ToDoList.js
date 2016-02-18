function ToDoList(id, name) {
  var currentID = 0;
  this.id = id;
  this.name = name;
  var tasks = [];
  this.ul = document.getElementById('listOfTodos');
  this.addTodo = function (task) {
    var todo = new ToDo(currentID, task);
    currentID++;
    tasks.push(todo);
    this.ul.appendChild(todo.getElement());
  };
}
