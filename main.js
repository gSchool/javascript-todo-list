$(document).ready(function(){
  console.log('Hello!');
  
  $('#add_todo').on('click', function(e){
    e.preventDefault();
    console.log('test');
    appendTodo();
  });
  
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