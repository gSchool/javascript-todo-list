var todo = function(attributes){
	this.id = attributes.id;
	this.task= attributes.task,
	this.completed= false
}

// todoList
var todoList = function(){
 this.todoArray = []
}

todoList.prototype.addTask= function(todo){
	this.todoArray.push(todo);
}

todoList.prototype.completeTask = function(todo){
	this.todoArray.pop(todo);
	todo.completed = true;
	// $(this).toggleClass("completed");
}



var myTodos = new todoList();
