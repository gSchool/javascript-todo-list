document.addEventListener("DOMContentLoaded",function(){

	var form = document.querySelector("form");
	var imput = document.querySelector("input");
	var status;

	form.addEventListener("submit",function(event){
		event.preventDefault();
		addItem();
		clicklistener();
	});

	function addItem(){
		var enter = imput.value;
		var newLi = document.createElement("li");
		newLi.innerText = enter;
		document.querySelector("ul").appendChild(newLi);
		imput.value="";
	}

	var ok = document.getElementsByTagName("li"); //Take all the li elements in an array

	function clicklistener(){		
		for (var i = 0; i < ok.length; i++){
				ok[i].addEventListener("click",clicked);	
		}
	}

	function clicked(){			
		if (this.classList == "completed") {
			this.classList.remove("completed");
		}
		else{
			this.classList.add("completed");
		}
	}


});

