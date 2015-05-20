
var input = document.getElementsByTagName('input')[0];
var list = document.getElementsByTagName('ul')[0];

var listItem = function(item){
  if(item === ""){
    return "";
  }
  else {
  return "<li>" +
           item
         "</li>";
  }
};

document.getElementById('add_todo')
    .addEventListener('click',function(e){
  list.innerHTML += listItem(input.value);
  input.value="";
});
