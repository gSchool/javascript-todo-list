var ul=document.querySelector("ul");
var input=document.getElementById("input");
var button=document.getElementById("add_todo");
var newField="";
button.addEventListener("click", function(e){
  newField = "<li>" + input.value + "</li>";
  ul.innerHTML += newField;
  input.value="";
});

input.addEventListener("keydown", function(e){
  if (e.keyCode===13){
    newField = "<li>" + input.value + "</li>";
    ul.innerHTML += newField;
    input.value="";
  }
})
