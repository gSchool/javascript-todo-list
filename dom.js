$(document).ready(function() {
  console.log("To Do List is Ready");
});

$('form').on('submit', function(event){
  event.preventDefault();
  var newItem = new Item({
    title: $('#item').val(),
  });
  myList.addItem(newItem);
  $('ul').empty();
  myList.renderToDom();
  $('input').val($(this).attr('placeholder'));
  });


