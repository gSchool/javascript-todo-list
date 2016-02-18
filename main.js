$(document).ready(function(){
  console.log('Hello!');
  
  $('#add_todo').on('click', function(){
    var todo = $(this).val();
    $('.todo').append('<li>' + todo + '</li>')
  });
  
});