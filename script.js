var thisList = new ToDoList();
var addTodo = document.getElementById('add_todo');
var input = document.getElementById('newTodo');
addTodo.addEventListener('click', addATodo);
input.addEventListener('keydown', addATodo);
function addATodo(e) {
  if (input.value !== '') {
    if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
      thisList.addTodo(input.value);
      input.value = '';
    }
  }
}
