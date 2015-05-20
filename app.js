var button=document.getElementById("submit");
var input=document.getElementById('input');
var output=document.getElementById('output');


button.addEventListener('click', function(){
  var list = item(input.value);
  output.innerHTML += list;
  input.value = " ";

});

var item = function(string){
  result = string + (input.value);
  return result;
};
