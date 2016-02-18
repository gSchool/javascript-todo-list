
document.getElementById('add_todo').addEventListener('click', addTodo);

function addTodo(){
  var todo = document.getElementById('input_todo').value;
  var list = document.getElementById('todo_list');
  var listItem = document.createElement("li");
  var node = document.createTextNode(todo);
  listItem.appendChild(node);
  list.appendChild(listItem);
  addListeners();
  document.getElementById('input_todo').value = "";
}


function addListeners(){
  var todos = document.getElementsByTagName('li')
  console.log(typeof(todos));
  for (var i = 0; i < todos.length; i++){
    todos[i].addEventListener('click', completeTodo);
  }
}

function completeTodo(){
  this.className = "completed";
}