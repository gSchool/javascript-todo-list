
var input = document.getElementsByTagName('input')[0];
var list = document.getElementsByTagName('ul')[0];

var listHTML = function(item){
  if(item === ""){
    return "";
  }
  else {
  return "<li>" + item + "</li>";
  }
};

var setListListeners = function() {
  var liList = document.getElementsByTagName('li');
  for(var i = 0; i < liList.length; ++i){
    liList[i].addEventListener('click',function(e){
      this.classList.toggle('completed');
    });
  }
};

document.getElementById('add_todo').addEventListener('click',function(e){
  list.innerHTML += listHTML(input.value);
  input.value="";
  setListListeners();
});
