$(document).ready(function(){
  var myList = new ToDoList('work');

  $('#add_todo').on('click', function(){
    var task = $('input').val();
    var todo = new ToDo(task);
    myList.addToDo(todo);
    myList.displayList();
    $('input').val('');
  })
})
