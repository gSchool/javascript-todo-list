//If button clicked
$('#add_todo').on('click', function () {
  append_todo();

});

//If enter key pressed
$('input').keypress(function (e) {
  if (e.which == 13) {
    append_todo();
    return false;
  }
});

//If list item clicked
$('ul').on('click','li',function(){
  crossOut(this);
});

//Appends a todo list item to the DOM
function append_todo () {
  var $input = $('input');

  if ($input.val()) {
    var val = $input.val();
    $('ul').append('<li>' + val + '</li>');
    $input.val("");//Clears input box
  }
}

//Adds the completed class to the given li so it appears crossed out
function crossOut(li) {
  $(li).addClass('completed');
}

