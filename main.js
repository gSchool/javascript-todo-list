//Create the todoList object
var todoList = {
  id: "theList",
  listName: "myList",
  tasks: []//Stores Todos
};

//The Todo task constructor
function Todo(id, task) {
  this.id = id;
  this.task = task;
  this.completed = false;
}

//If button clicked
$('#add_todo').on('click', function () {
  append_todo();

});

//If enter key pressed
$('input').keypress(function (e) {
  if (e.which == 13) {
    append_todo();
    return false;
  }
});

//If list item clicked
$('#theList').on('click','li',function(){
  crossOut(this);
});

//Appends a todo list item to the DOM
function append_todo () {
  var $input = $('input');

  if ($input.val()) {
    //Grab the todo's value from the input box
    var val = $input.val();
    //Create an id for the todo based on array position
    var id = "Task" + (todoList.tasks.length + 1);
    //Create the todo with the Todo constructor
    var todo = new Todo (id, val);
    //Add the todo to the todoList array
    todoList.tasks.push(todo);
    //Create a jQuery list item
    var listItem = $('<li>' + val + '</li>');
    //Give the listItem the todo's id
    listItem.attr('id', id);
    //Append to the ul
    $('#theList').append(listItem);
    //Clear the input box
    $input.val("");
  }
}

//Adds the completed class to the given li so it appears crossed out
function crossOut(li) {
  $(li).addClass('completed');

  //Mark the todo object completed in the todoList tasks array
  for (var i = 0; i < todoList.tasks.length; i++) {
    if (li.id === todoList.tasks[i].id)
      todoList.tasks[i].completed = true;
  }



}

