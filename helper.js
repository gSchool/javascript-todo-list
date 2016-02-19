var listsCounter = 0;
var tasksCounter = 0;


var Tasks = function() [];

Tasks.prototype.newTodo = {
  this.id = tasksCounter,
  this.task = $('#input').val(),
  this.completed = no,
};

//////////////////////
var listsCounter = 0;
var tasksCounter = 0;

var todoLists = [];

var TodoList = function (name) {
  this.listID = listsCounter,
  this.listName = name,
  this.tasks = [];
};

var Task = function (todo) {
  this.taskID = tasksCounter,
  this.task = todo,
  this.completed = 'false';
};

todoLists.push(new TodoList('list0'));
listsCounter += 1;
todoLists.push(new TodoList('list1'));

var newTodo = new Task('what am I doing?');
console.log(newTodo);
todoLists[0].tasks.push(newTodo); 

tasksCounter += 1;

var newTodo = new Task('How am I doing?');
console.log(newTodo);
todoLists[0].tasks.push(newTodo);

console.log(todoLists);
console.log(todoLists[0].tasks[0]);