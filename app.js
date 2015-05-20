var button = document.getElementById('add_todo');
var input = document.getElementById('newEvent');
var output = document.getElementById('todoEvents');
var completed = document.getElementsByClassName('completed');

button.addEventListener('click', function(){
  var addEvent = input.value;
    output.innerHTML = todoEvents.innerHTML + '<li>' + addEvent;
  	input.value = '';
});

output.addEventListener('click', function(){
  var markComplete = output.value;
  //need to change the class of <li> to completed//

});
