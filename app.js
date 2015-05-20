var input = document.getElementById("input");
var container = document.getElementById("container");
var button = document.getElementById("add_todo");
var list = document.getElementById("list");

var addItem = function(){
  var text = input.value;
  container.innerHTML = container.innerHTML + "<li>" + text + "</li>";
}
