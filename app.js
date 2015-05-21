var input = document.getElementById('input');
var button = document.getElementById('add_todo');
var ul = document.getElementById('list');

var newListItem = function () {
  var li = document.createElement('li');
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = '';
};

button.addEventListener('click', function() {
  newListItem();
});

input.onkeydown = function (){
  if (event.keyCode===13) {
    button.click();
  }
};
