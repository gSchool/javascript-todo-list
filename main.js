$(document).on('ready', function() {
  addOnKeypress();
  selectTodo();
  addOnBtnClick();
  appendBtns();
});

var userInput;
var taskId = 0;


function appendToDo () {
  userInput = $('#userInput').val();
  taskId += 1;
  $('#todoList').append("<li class='task' id=" + taskId + ">" + userInput + "</li>");
  $('#userInput').val('');
}

function addOnKeypress () {
  $('#userInput').keypress(function(event) {
    if(event.which === 13) {
      event.preventDefault();
      appendToDo();
    }
  });
}

function addOnBtnClick () {
  $('#add_todo').on('click', function(event) {
      appendToDo();
    });
}

var selectedTask;
function selectTodo () {
  $(document).on('click', '.task', function() {
    selectedTask = $(this).attr('id');
    $('.task').css('background-color', '#ccc');
    $(this).css('background-color', 'rgba(63,238,235,.7)');
    console.log(selectedTask);
  });
}

function appendBtns () {
  $(document).on('click', '.task', function() {
    $('.question').empty();
    $('body').append('<div class="question">' + askIfComplete + confirmBtn + rejectBtn + '</div>');
    // $('.question').append(rejectBtn);
  }
);}