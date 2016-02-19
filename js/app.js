$('#submit').on('click', function() { var task = $('#text').val();
  $('ul').append('<li>' + task + '</li>')
})

var ToDoList = function (ln) {
  this.id = 0;
  this.listName = ln;
  this.tasks = [];
}

