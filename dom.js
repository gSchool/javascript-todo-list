$(document).on("ready", function(){
	console.log("thundercats go!");
});

// appending new task to DOM
$("form").on("submit", function(event){
		event.preventDefault();

		console.log("submitted");
	console.log( $("#task").val() );

		var task = new todo({
			id: "task",
			task: $("#task").val(),
			completed: false
		});
		myTodos.addTask(task);
console.log("added", myTodos);
		$("ul").append("<li id="+task.id+">"+ task.task +"</li>");
		console.log(task);
		// clears input field
		$("#task").val("");
	});


// complete task
$("ul").on("click", "li", function(){
		var task = $(this).val();
		$(this).toggleClass("completed");

		myTodos.completeTask(task);
		console.log("completed", myTodos);
	});
