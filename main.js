var ToDoList = function (listName, tasks) {
  this.id = Math.floor(Math.random()*1000);
  this.listName = listName;
  this.tasks = [];
}

var ToDo = function (task) {
  this.id = Math.floor(Math.random()*1000);
  this.task = task;
  this.completed = false;
}

ToDoList.prototype.addToDo = function(task) {
  this.tasks.push(task);
  console.log(task);
}

ToDo.prototype.complete = function() {
  this.completed = true;
}

ToDoList.prototype.displayList = function () {
  $("#items").html('');
  for(var i = 0; i < this.tasks.length; i++) {
    $("#items").append("<li>"+this.tasks[i].task+"</li>");
  }
}
