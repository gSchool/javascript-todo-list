var input = document.getElementById('input');
var button = document.getElementById('add_todo');

button.addEventListener('click', function(e) {
  e.preventDefault();
  createItem(input.value);
});

var list = document.getElementsByTagName('li')[1];

//I have not yet figured out how to
//append each list item to the end of my array. I think I need to
//write code like the sample below, but I'm not sure.
//If I am not able to figure it out with a peer after the assessment,
//I wouldl like to go over this with an instructor. :)

// var list = document.getElementsByTagName('list')
//   if (list.length >= 1) {
//     var newTextLast = list[1];
//   };


var createItem = function (inputValue) {
var newLi = document.createElement('li');
var newTextLast = document.createTextNode(input.value);
newLi.appendChild(newTextLast);
list.appendChild(newTextLast);
};
