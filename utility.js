var Task = function (task) {
    this.id = (Math.round(Math.random()*10000)+ 100);
    this.task = task;
    this.completed = false;
}


var TaskList = function (listName) {
    this.id = (Math.round(Math.random()*100)+ 1);
    this.listName = listName;
    this.tasks = [];
    this.addTask = function (task) {
        this.tasks.push(task);
    }
}



