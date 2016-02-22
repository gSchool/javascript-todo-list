var newList = function(listName) {
  this.id = "id-" + listName;
  this.task = listName;
  this.tasks = [];
}

var newItem = function(id){
  this.id = "id-" +id;
  this.task = id;
  this.completed = false;
}

function addOnClick(event) {
  event.preventDefault();
  $('form').on('submit', function() {
    var thing = $('input').val();
    if($('input').val()) {
      appendAndClear();
    }
  });
}

function appendAndClear() {
  $('ul').append("<li>" + $('input').val() + "</li>");
  $('input').val("");
}