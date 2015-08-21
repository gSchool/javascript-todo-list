//Still need to add the ability 
//to click on a todo item 
//to toggle it completed. 
//Can you make use of event bubbling?
document.addEventListener("DOMContentLoaded",function(){

body = document.querySelector('body');
input = document.createElement('input');
button = document.createElement('button');
div = document.createElement('div');
ul = document.createElement('ul');

input.placeholder  = "type your to-do task here";


div.innerHTML = 'test';
button.name = "submit";
button.id = "add_todo";
button.innerHTML = "click to submit";

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);

button.addEventListener('mousedown',function(e) {
console.log(e);

li = document.createElement('li');
li.innerHTML = input.value;

	ul.appendChild(li);

	});

input.addEventListener('keypress',function(e) {
console.log(e);

if(e.which === 13)
{
	li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = "";

}

var x = this.value;
console.log(x);
	});

ul.addEventListener("click", function(e){
	if(e.srcElement.className){
		e.srcElement.className = "";
	}
	else {
		e.srcElement.className = "completed";
	}
});
});