var addTodo = document.getElementById('add_todo');
var input = document.getElementsByTagName('input');
var li = document.getElementsByTagName('li');

addTodo.addEventListener('click', function(e) {
  e.preventDefault();
  createTodoItem(input);
});

input[0].addEventListener('focus', function() {
  this.value = '';
});


var createTodoItem = function(item) {
  var newLi = document.createElement('li');
  var toDo = document.createTextNode(input[0].value);
  document.getElementById('list').appendChild(newLi);
  newLi.appendChild(toDo);
  newLi.setAttribute('onclick', completeTodo());
}

var completeTodo = function() {
  for(var i = 0; i <= li.length-1; i++) {
    li[i].addEventListener('click', function() {
      this.classList.add('completed');
    });
  };
};
