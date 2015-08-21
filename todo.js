
//window.onload = function() {

document.addEventListener("DOMContentLoaded",function(){

	var form = document.querySelector("form");
	form.addEventListener("submit", function(event){
		event.preventDefault();
		var value = document.querySelector("input").value;
		var newLi = document.createElement("li");
		newLi.innerText = value;
		document.querySelector("ul").appendChild(newLi);
	});

	
});



//capture the value of the imput

//create new list item

//set the innerText of that list item to be the value

//append the list item to the UL



// var btn = document.querySelector("button");
// var ul = document.querySelector("ul");

// btn.addEventListener("click", function(){
//   var text = input.value;
//   var li = document.createElement("li");
//   li.innerHTML = text;
//   ul.appendChild(li);
//   input.value = "";
//})