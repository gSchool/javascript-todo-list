$(document).ready( function() {
  console.log('sanity check');
});

/*helper functions*/

// grab user input and check to see if valid input
function getUserInput() {
  if ($('#usrTodo').val() === '') {
    console.log('put somethin in');
    return -1;
  } else {
      return $('#usrTodo').val();
  }
}

// append user input to the DOM in a list element
function addToDom() {
  if ((getUserInput() !== -1)) {
    $('ul').append('<li>'+getUserInput()+'</li>');
  } else {
    return alert('Please add a to do!');
  }
}


/* Method for appending ToDo items set by user */

$('form').on('submit', function(e) {
  e.preventDefault();

  addToDom();

  //clear input field on submit
  $('#usrTodo').val('');
});
