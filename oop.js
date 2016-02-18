module.exports = {
    List: List,
    Task: Task
};

var List = function(options) {
    this.id = Math.floor((Math.random()*100)+1),
    this.listName = options.listName,
    this.tasks = options.tasks
};

List.prototype.addTask = function(taskObj) {
    this.tasks.push(taskObj);
};

// var newList = new List ({
//     listName: "todo",
//     tasks: []
// });



var Task = function(name) {
    this.id = Math.floor((Math.random()*200)+100),
    this.name = name,
    this.completed = false
};

// var newTask = new Task("walk the pups");
// var newTask2 = new Task("get milk");


// newList.addTask(newTask);
// newList.addTask(newTask2);

// console.log("updated list", newList);