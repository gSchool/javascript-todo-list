var text = document.getElementById("textbox");
var listarea = document.getElementById("lister");
var button = document.getElementById("add_todo");
var tasks = document.getElementsByTagName("li");

var addToDo = function(t){
  return "<li>" + t + "</li>";
}

button.addEventListener('click', function(){
  listarea.innerHTML += addToDo(text.value);
  text.value = "";
  initTaskListener();
})

var initTaskListener = function(){
  for(var i = 0; i < tasks.length; i++){
    tasks[i].addEventListener('click',function(e){
      var task = e.target;
      task.className = "completed";
    })
  }
}
