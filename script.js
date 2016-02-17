var addTodo = document.getElementById('add_todo');
var input = document.getElementById('newTodo');
addTodo.addEventListener('click', addATodo);
input.addEventListener('keydown', addATodo);
function addATodo(e) {
  if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
    var listOfTodos = document.getElementById('listOfTodos');
    var newTodoText = input.value;
    input.value = '';
    var newTodo = document.createElement('li');
    newTodo.innerHTML = newTodoText;
    newTodo.addEventListener('click', finish);
    listOfTodos.appendChild(newTodo);
  }
}
function finish(e) {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.className = 'completed';
  }
}
