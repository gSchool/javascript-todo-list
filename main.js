$(document).on('ready', function() {
  addOnKeypress();
  selectTodo();
  addOnBtnClick();
  appendBtns();
  taskCompleted();
  notCompleted();
});

var userInput;
var taskId = 0;

// Function that appends the user input to the dom, just below the input box.
function appendToDo () {
  userInput = $('#userInput').val();
  if (userInput) {
    taskId += 1;
    $('#todoList').append("<li class='task' id=" + taskId + ">" + userInput + "</li>");
    $('#userInput').val('');
    }
  else {
    console.log("ERROR - NO INPUT");
  }
}

// Function to allow the user to append to the dom by pressing the return or enter key
function addOnKeypress () {
  $('#userInput').keypress(function(event) {
    if(event.which === 13) {
      event.preventDefault();
      appendToDo();
    }
  });
}

// Function to run appendTodo() when the 'Add Todo' button is clicked
function addOnBtnClick () {
  $('#add_todo').on('click', function(event) {
      appendToDo();
    });
}

// Function to set a variable value equal to the currently selected task id and class name
var selectedTaskId = 0;
var selectedTaskClass;
function selectTodo () {
  $(document).on('click', '.task', function() {
    selectedTaskId = $(this).attr('id');
    selectedTaskClass = $(this).attr('class');
    $('.task').css('border', 'none');
    $(this).css('border', '1px solid black');
    console.log('SelectedTask (id):',selectedTaskId);
    console.log('SelectedTaskClass (class):', selectedTaskClass);
    return selectedTaskId;
  });
}

// Function that asks the user if the task selected has been completed, and adds clickable 'Yes' or 'Nope' buttons.
function appendBtns () {
  $(document).on('click', '.task', function() {
    $('.question').empty();
    $('body').append('<div class="question">' + askIfComplete + confirmBtn + rejectBtn + '</div>');
  }
);}

// This function will add a classname of 'completed' to the list item (li) selected if the
// 'Yes' button is clicked.
function taskCompleted () {
  $(document).on('click', '#confirm', function() {
    var list = $('ul');
    for(var i=0; i<list[0].children.length; i++) {
      if (selectedTaskId === list[0].children[i].id) {
        $('#' + selectedTaskId + '').addClass('completed');
      }
    }
  });
}

// This function will remove a classname of 'completed' from the list item (li)
// selected if the 'Nope' button is clicked.
function notCompleted () {
  $(document).on('click', '#reject', function() {
    var list = $('ul');
    for(var i=0; i<list[0].children.length; i++) {
      console.log('loop class:',list[0].children[i].className);
      if (selectedTaskClass === list[0].children[i].className) {
        $('#' + selectedTaskId + '').removeClass('completed');
      }
    }
  });
}