var add = document.getElementById('add_todo');
var todo = document.getElementById('input');
var ul = document.getElementsByTagName('ul');

add.addEventListener('click', function() {
  post(todo);
});

todo.addEventListener('keypress', function(event) {
  if (event.keyCode == '13') {
    add.click();
  };
});

function post(todo) {
  ul[0].innerHTML = ul[0].innerHTML + '<li>' + todo.value + '</li>';
}
