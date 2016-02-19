//////////////////////
var listsCounter = 0;
var tasksCounter = 0;

var todoLists = [];

// List Constructor
var TodoList = function (name) {
  this.listID = 'list-' + listsCounter,
  this.listName = name,
  this.tasks = [];
};

// Create the inital list
todoLists.push(new TodoList('todo'));
listsCounter += 1;

// Task Constructor
var Task = function (todo) {
  this.taskID = 'task-' + tasksCounter,
  this.task = todo,
  this.completed = 'false';
};

var addTask = function(listIndex, newTodo) {
    var task = new Task(newTodo);
    todoLists[listIndex].tasks.push(task);
    tasksCounter += 1;
};


// todoLists.push(new TodoList('list0'));
// listsCounter += 1;
// todoLists.push(new TodoList('list1'));

// var newTodo = new Task('what am I doing?');
// console.log(newTodo);
// todoLists[0].tasks.push(newTodo); 
// 
// tasksCounter += 1;
// 
// var newTodo = new Task('How am I doing?');
// console.log(newTodo);
// todoLists[0].tasks.push(newTodo);
// 
// console.log(todoLists);
// console.log(todoLists[0].tasks[0]);