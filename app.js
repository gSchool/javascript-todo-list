var input = document.getElementsByTagName('input');
var list = document.getElementsByTagName('ul')
var button = document.getElementById('add_todo');

var makeList = function(){
  var listItem = "<li>" + input[0].value + "</li>"
  list[0].innerHTML = list[0].innerHTML + listItem;
  input[0].value = '';
}

button.addEventListener('click', makeList);

input[0].addEventListener('keydown', function(event){

  if (event.keyCode === 13){
    makeList();
  }

});
