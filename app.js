var text = document.getElementById("textbox");
var listarea = document.getElementById("lister");
var button = document.getElementById("add_todo");

var addToDo = function(t){
  return "<li>" + t + "</li>";
}

button.addEventListener('click', function(){
  listarea.innerHTML += addToDo(text.value);
  text.value = "";
})
