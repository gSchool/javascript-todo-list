$(document).ready(function(){
  console.log('Hello!');
  
  // Add new todos to the DOM if the 'add todo' button is clicked
  $('#add_todo').on('click', function(e){
    e.preventDefault();
    appendTodo();
  });
  
  // Add new todos to the DOM if the return key is used in the input field
  $('#input').keypress(function(e) {
    if(e.which === 13) {
      e.preventDefault();
      appendTodo();  
    }
  });
  
});

appendTodo = function () {
  // Create a variable continaing the new todo
  var newTodo = $('#input').val();

  // Append the new todo to the list of todos and clear out the input form
  $('#todo').append('<li>' + newTodo + '</li>');
  $('#input').val('');
}