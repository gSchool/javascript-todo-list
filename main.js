$(document).ready(function(){
  console.log('Hello!');
  
  // Add new todos to the DOM if the 'add todo' button is clicked
  $('#add_todo').on('click', function(e){
    e.preventDefault();
    
    // Create a variable continaing the new todo
    var newTodo = $('#input').val();
    
    // Update objects
    var update = addTask(0, newTodo)
    appendTodo(newTodo);
  });
  
  // Add new todos to the DOM if the return key is used in the input field
  $('#input').keypress(function(e) {
    var newTodo = $('#input').val();
    
    if(e.which === 13) {
      e.preventDefault();
      // Update objects
      var update = addTask(0, newTodo)
      appendTodo(newTodo);  
    }
  });
  
  // Any todo items that are clicked get the completed class
  $('#todo-01').on('click', 'li', function() {
    $(this).addClass('completed');
    
  })
  
  // Any todo items that are completed and get clicked again nolonger appear completed
  $('#todo-01').on('click', '.completed', function() {
    $(this).removeClass('completed');
  })
  
});

var appendTodo = function (newTodo) {
  // Append the new todo to the list of todos and clear out the input form
  $('#todo-01').append('<li>' + newTodo + '</li>');
  $('#input').val('');
}