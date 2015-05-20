var input = document.getElementById('input');
var output = document.getElementById('output');
var button = document.getElementById('add_todo');

button.addEventListener('click', function(){
  var post = input.value;
  output.innerHTML = output.innerHTML + '<li>' + post + '</li>'
  input.value = ""
})
