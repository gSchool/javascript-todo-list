$(document).ready(function() {
  console.log('working it');
});

$('#add_todo').on('click', function(event) {
 event.preventDefault;
 var $todo = $('input').val();
 console.log($todo);
 $('ul').append('<li>'+$todo+'</li>');
});

$(document).on('click', 'li', function () {
  $(this).addClass('completed');
});