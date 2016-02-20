$(document).on("ready", function(){
	console.log("thundercats go!");
});

// appending new task to DOM
$("form").on("submit", function(event){
		event.preventDefault();

		var task = new todo({
			id: "task",
			task: $("#task").val(),
			completed: false
		});
		myTodos.addTask(task);

		$("ul").append("<li id="+task.id+">"+ task.task +"</li>");
		// clears input field
		$("#task").val("");
	});


// complete task
$("ul").on("click", "li", function(){
		var task = $(this).val();
		$(this).toggleClass("completed");

		myTodos.completeTask(task);
	});
