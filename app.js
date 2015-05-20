var input = document.getElementById("input");
var add_todo = document.getElementById("add_todo");
var li = document.getElementById("output");

add_todo.addEventListener("click", function() {
  output.innerHTML += '<li>' + input.value + '</li>';
});

input.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    output.innerHTML += '<li>' + input.value + '</li>';
  }
});
