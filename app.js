var ulist = document.querySelector("ul");

var input = document.querySelector("input");

input.addEventListener("keypress", function(event){
	var key = event.which;
	if(key === 13) {
		event.preventDefault();
		addItem();
	}
});

var button = document.querySelector("button");

button.addEventListener("click", function(event){
		event.preventDefault();
		addItem();
});

//per colts instructions this morning
ulist.addEventListener("click", function(event) {


	if(event.srcElement.nodeName == "LI") {
		if(event.srcElement.className) {
		
			event.srcElement.className = "";
		} else {
			//per colt this morning, no need since its only lists
			event.srcElement.className = "completed";
		}
	}

	if(event.srcElement.nodeName == "SPAN") {

		event.srcElement.parentNode.remove();
	}
});

ulist.addEventListener("mouseover", function(event) {
	event.preventDefault();


	if(event.srcElement.nodeName == "SPAN") {
		event.srcElement.style.color = "#000";
	}
});

ulist.addEventListener("mouseout", function(event) {
	event.preventDefault();
//not sure why we are preventing the default, when i get my head above water I"ll inestigate
	if(event.srcElement.nodeName == "SPAN") {
		event.srcElement.style.color = "#000000";
	}
});

function addItem() {
	if(input.value != ""){
		var listitem = document.createElement("LI");
		listitem.innerHTML = input.value;
		ulist.appendChild(listitem);
		var span = document.createElement("SPAN");
		span.innerHTML = "Delete";
		span.style.float = "right";
		span.style.color = "#000000";
		listitem.appendChild(span);
		input.value = "";
		input.setAttribute('placeholder', "What's the plan sam?");
	}
}
