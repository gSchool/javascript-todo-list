var submit = document.getElementById("add_todo");
var list = document.getElementsByTagName('ul');


var addToDo = function(){
  if(input.className === "to add"){
  submit.addEventListener('click', function(){
  input.className = "added";
  })
  }
};

var toDoList = function(){
  if(input.className === "added"){
  ul.innerHTML = list + '<li class="incomplete">' + input.value + '</li>'
  }
};
