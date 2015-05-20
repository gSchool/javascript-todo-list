var ul=document.querySelector("ul");
var input=document.getElementById("input");
var button=document.getElementById("add_todo");
var body=document.querySelector("body")
// var li=document.getElementsByTagName("li");

function newList(){
  if (input.value.trim().length > 0){
    // var now = moment();
  var newField = "<li>" + input.value + now +"</li>";
  ul.innerHTML += newField;
  input.value="";
}}


button.addEventListener("click", function(e){
   newList(e);
});

input.addEventListener("keydown", function(e){
  if (e.keyCode===13){
    newList();
  }
})

body.addEventListener("click", function(event) {
 if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("completed");
 }
 })
