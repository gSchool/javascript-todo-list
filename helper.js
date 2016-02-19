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


todoLists.push(new TodoList('test0'));
listsCounter += 1;
todoLists.push(new TodoList('test1'));

todoLists[0].tasks = new Task('what am I doing?');
console.log(todoLists);