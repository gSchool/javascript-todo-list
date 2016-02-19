document.getElementById('todo').addEventListener('click', addTodo);
document.getElementById('todont').addEventListener('click', addTodo);

var idCounter = 0;


//////////////DATA SETUP///////////////////
var lists = [];
function List(id, name){
  this.id = id;
  this.listName = name;
  this.tasks = [];
}

var todos = [];
function Todo(id, task){
  this.id = id;
  this.task = task;
  this.completed = false;
}

var todoList = new List(1, 'todo');
var todontList = new List(2, 'todont');

lists.push(todoList, todontList);


//////////////APPLICATION LOGIC///////////////////

function addTodo(){
  //get id from button pushed for comparison
  var whichList = this.id
  var todo = document.getElementById('input_todo').value;

  //if there's something in da box, determine which list it belongs to
  if (todo.trim()){
    lists.forEach(function(list){
      if (list.listName === whichList) list.tasks.push(idCounter);
    });

    //create the new todo
    var todoObj = new Todo(idCounter, todo);
    todos.push(todoObj);

    //create the list item to pass to appendTodo funk
    var listItem = document.createElement('li');
    var node = document.createTextNode(todo);
    listItem.appendChild(node);
    listItem.className = whichList;
    listItem.setAttribute('id', idCounter);

    appendTodo(listItem);
    idCounter++;
  }
}


//appends to the ul on the page
function appendTodo(listItem){
    var list = document.getElementById('todo_list');
    list.appendChild(listItem);
    addListeners();
    document.getElementById('input_todo').value = '';
}


//runs through each li to add listener
function addListeners(){
  var todos = document.getElementsByTagName('li')
  console.log(typeof(todos));
  for (var i = 0; i < todos.length; i++){
    todos[i].addEventListener('click', completeTodo);
  }
}

//sets object to complete & adds class to the DOM
function completeTodo(){
  var id = parseInt(this.id);
  todos[id].completed = true;
  this.className = "completed";
}