var showToDo = function(string){
  var userInput = document.getElementById('input').value;
 return input.value;
};

var input = document.getElementById('input'),
   button = document.getElementById('add_todo'),
   output = document.getElementById('output');

   add_todo.addEventListener('click', function(){
   var comment = showToDo(input.value);
   output.innerHTML += comment + '<br>' ;
   });
