var text = document.getElementsByTagName('input')[0];
var add = document.getElementById('add_todo');
var list = document.getElementsByTagName('ul')[0];
var todoQuant = 0;


//create TodoList prototype
var TodoList = function(listID, name, taskList) {
  this.id = listID;
  this.listName = name;
  this.tasks = [];
  this.createTask = function (taskID, task, completed) {
    var created = {
      id: taskID,
      task: task,
      completed: false
    };
    return created;
  };
};


//create new todo list
var myTodos = new TodoList(1, 'My Todos');


//add Todos to list
add.addEventListener('click', function() {
  //increase number for id use
  todoQuant ++;

  //create uniqe new element
  var todoWrapper = document.createElement('li');

  //append todo to dom
  var todoText = text.value;
  list.appendChild(todoWrapper);
  var thisTodo = list.lastChild;
  thisTodo.innerText = todoText;
  thisTodo.id = todoQuant;

  //create todo in myTodos task list
  var newTask = myTodos.createTask(todoQuant, todoText, false);
  myTodos.tasks.push(newTask);
  console.log(myTodos);

  //clear text input
  text.value = '';
});

// mark todos as completed
$(document).on('click', 'li', function() {
  $(this).addClass('completed');
  var allTasks = myTodos.tasks;
  console.log(allTasks);
  for (i = 0; i < allTasks.length; i++) {
    console.log('in the loop');
    if (allTasks[i].id === (Number($(this).attr('id')))) {
      allTasks[i].completed = true;
    } else {
      console.log('Not a match!');
    }
  }
  console.log(myTodos);
});
