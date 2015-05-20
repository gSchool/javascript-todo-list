var addTodo = document.getElementById("add_todo");
var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementsByTagName("input")[0];

input.addEventListener('keypress', function() {
    if (event.keyCode == 13) {
        ul.innerHTML += "<li>" + input.value + "</li>";
        input.value = "";
    }
});

addTodo.addEventListener('click', function() {
    ul.innerHTML += "<li>" + input.value + "</li>";
});
