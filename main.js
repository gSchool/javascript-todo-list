$(document).on('ready', function() {
  addToDo();
  pressEnter();
});

var userInput;

function addToDo (event) {
  $('#add_todo').on('click', function() {
    userInput = $('#userInput').val();
    $('#todoList').append("<li>" + userInput + "</li>");
  });
}

function pressEnter () {
  $('#userInput').keypress(function(event) {
    if(event.which === 13) {
      event.preventDefault();
      userInput = $('#userInput').val();
      $('#todoList').append("<li>" + userInput + "</li>");
    }
  });
}

