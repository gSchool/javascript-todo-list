var input = document.getElementById('input');
var button = document.getElementById('add_todo');
var list = document.getElementsByTagName('li')[1];

button.addEventListener('click', function(e) {
  e.preventDefault();
  createItem(input.value);
});

var createItem = function (inputValue) {
var newLi = document.createElement('li');
var newTextLast = document.createTextNode(input.value);
newLi.appendChild(newTextLast);
list.appendChild(newTextLast);
};
