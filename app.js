
var button = document.getElementById('add_todo'),
 input = document.getElementsByTagName('input')[0],
 output=document.getElementsByTagName('ul')[0];

button.addEventListener('click', function(){

  var todoItem = "<li>" + input.value + "</li>";
  output.innerHTML += todoItem;
  input.value = "";

});
