$('#submit').on('click', function() { var task = $('#text').val();
  $('ul').append('<li>' + task + '</li>')
})

var ToDo = function (task){
  this.id = 0;
  this.task = task;
  this.completed = false;
}

var ToDoList = function (ln) {
  this.id = 0;
  this.listName = ln;
  this.tasks = [];
}

