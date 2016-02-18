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
  
  // Any todo items that are clicked get the completed class
  $('#todo').on('click', 'li', function() {
    $(this).addClass('completed');
  })
  
  // Any todo items that are completed and get clicked again nolonger appear completed
  $('#todo').on('click', '.completed', function() {
  $(this).removeClass('completed');
  })
  
});

appendTodo = function () {
  // Create a variable continaing the new todo
  var newTodo = $('#input').val();

  // Append the new todo to the list of todos and clear out the input form
  $('#todo').append('<li>' + newTodo + '</li>');
  $('#input').val('');
}