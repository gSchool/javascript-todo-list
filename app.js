var form = document.getElementById('todo')
var input = document.getElementById('input');
var ul = document.getElementsByTagName('ul')[0];



form.addEventListener("submit", function(event) {
	event.preventDefault();
	addTodo(input);
});

var addTodo = function (input) {
	ul.innerHTML = ul.innerHTML + '<li>' + input.value + " " + getDate() +'</li>';
};

document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    markCompleted(event.target);
  }
});

var markCompleted = function(li){
	if (li.classList[0] ==='completed') {
		li.classList.remove('completed');
	} else {
		li.classList.add('completed');
	}
	
};

var getDate = function() {
	var date = new Date();

	return date.toLocaleString();
}