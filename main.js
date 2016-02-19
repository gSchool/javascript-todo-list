// when completed, add class("completed")

$(document).ready(function(){
	console.log("thundercats go");
});

$("form").on("submit", function(event){
	event.preventDefault();

	var task = $("#task").val();
	console.log(task);
	$("ul").append("<li>"+ task +"</li>");
	$("#task").val("");
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});