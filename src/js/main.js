$(document).on('click', '#add_todo', function(){
  console.log("cool");
  var todo = $('input[name="task"]').val()
  $('ul').append("<li>"+todo+"</li>");
});
