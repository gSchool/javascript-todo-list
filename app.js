var addTodo = document.getElementById("add_todo");
var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementsByTagName("input")[0];

input.addEventListener('keypress', function() {
    if (event.keyCode == 13) {
        ul.innerHTML += "<li class='not_completed'>" + input.value + "</li>";
        input.value = "";
    }
});

addTodo.addEventListener('click', function() {
    ul.innerHTML += "<li class='not_completed'>" + input.value + "</li>";
    input.value = "";
});

document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.className === "not_completed") {
    target.className = "completed"; 
  } else if (target.className === "completed") {
    target.className = "not_completed";
  }
}, false);
