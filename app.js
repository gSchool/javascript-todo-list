var input = document.getElementById('input');
var list= document.getElementById('todoList');
var button = document.getElementById('add_todo');
var listItem = document.getElementsByTagName('li');

console.dir(listItem);

var handleEvent = function(event){
  if(event.keyCode === 13 || event.type === 'click'){
    list.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
  }
};

button.addEventListener('click', handleEvent);
input.addEventListener('keydown', handleEvent);

listItem.addEventListener('click', function(event){
  console.log(event.target);
  event.target.className = 'completed';
});
