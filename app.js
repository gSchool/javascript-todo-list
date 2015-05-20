var add = document.getElementById('add_todo');
var todo = document.getElementById('input');
var ul = document.getElementsByTagName('ul');
var li = document.getElementsByTagName('li');

add.addEventListener('click', function() {
  post(todo);
});

todo.addEventListener('keypress', function(event) {
  if (event.keyCode == '13') {
    add.click();
  };
});

li.addEventListener('click', function() {
  this.li.className ='completed';
});

function post(todo) {
  ul[0].innerHTML = ul[0].innerHTML + '<li>' + todo.value + '<br/>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</li>';
}
