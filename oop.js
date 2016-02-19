var List = function(options) {
    this.id = Math.floor((Math.random()*1000)+1),
    this.listName = options.listName,
    this.tasks = options.tasks,
    this.addTask = function(taskObj) {
        this.tasks.push(taskObj);
    };
};


var Task = function(name) {
    this.id = Math.floor((Math.random()*2000)+1000),
    this.name = name,
    this.completed = false
    // this.done = function() {
    //     this.completed = true;
    // };
};

//tests
// var newList = new List ({
//     listName: "todo",
//     tasks: []
// });
// var newTask = new Task("walk the pups");
// var newTask2 = new Task("get milk");


// newList.addTask(newTask);
// newList.addTask(newTask2);

// console.log("updated list", newList);