var ul=document.querySelector("ul");
var input=document.getElementById("input");
var button=document.getElementById("add_todo");
var body=document.querySelector("body");
var newField="";

function newList(){
  if (input.value.trim().length > 0){
    // var now = moment();
  newField = "<li>" + input.value +"</li>";
  ul.innerHTML += newField;
  input.value="";
}}

button.addEventListener("click", function(e){
   newList(e);
});

input.addEventListener("keydown", function(e){
  if (e.keyCode===13){
    newList(e);
  }
});


body.addEventListener("click", function(event) {
 if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("completed");
 }
 })
