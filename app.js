var form = document.getElementById('todo')
var input = document.getElementById('input');
var ul = document.getElementsByTagName('ul')[0];



form.addEventListener("submit", function(event) {
	event.preventDefault();
	addTodo(input);
});

var addTodo = function (input) {
	ul.innerHTML = ul.innerHTML + '<li>' + input.value + '</li>';
};
