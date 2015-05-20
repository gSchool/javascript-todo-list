

// Borrowed this function from SO. Thanks stack overflow....
var capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


var button = document.getElementById('add_todo'),
 input = document.getElementsByTagName('input')[0],
 output=document.getElementsByTagName('ul')[0];

button.addEventListener('click', function(){

  var todoItem = "<li>" + input.value + "</li>";
  output.innerHTML += todoItem;

});
