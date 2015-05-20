var ul=document.querySelector("ul");
var input=document.getElementById("input");
var button=document.getElementById("add_todo");
var newField="";


body.addEventListener("click", function(event) {
 if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("completed");
 }
 })
