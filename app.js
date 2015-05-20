var add_todo=document.getElementById('add_todo');
var input=document.getElementById('input');
var output=document.getElementById('output');

add_todo.addEventListener('click', function(){
  output.innerHTML = '<li>' + output.innerHTML + (input.value) + '</li'>;
  input.value = ' ';
});
