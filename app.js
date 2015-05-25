var button = document.getElementById('add_todo');
var input = document.getElementById('input');
var ul = document.getElementsByTagName('ul')[0];
var body = document.querySelector('body');
var date = new Date();
date = moment(date).format('MMMM Do YYYY, h:mm:ss a');

var addTodo = function(e) {
  if (e.keyCode === 13 || e.type === "click") {
    ul.innerHTML += '<li>' + input.value + '<br>' + date + '</li>';
    isComplete = false;

    input.value = ' ';
  }
};

button.addEventListener('click', addTodo),
input.addEventListener('keydown', addTodo);


body.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "li") {
     event.target.classList.toggle("completed");
   }
});
