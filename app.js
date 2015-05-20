var addToDo = document.getElementById("add_todo");
var input = document.getElementById("input");
var output = document.getElementById("output");
var song = document.getElementsByClassName("easter_egg");



addToDo.addEventListener("click", function() {
  var text = input.value;
  if (text.trim().length < 1) {
    alert("please enter text in field");
    song[0].play();
  }
  else {
  var append = document.createElement("li");
  console.log(output.nodeName);
  output.appendChild(append)
  output.lastChild.innerHTML = input.value;
  }
});
