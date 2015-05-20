var button=document.getElementById("addtodo");
var input=document.getElementById("input");
var output=document.getElementById("output");


button.addEventListener = ('click', function(){
  var a = input.value;
  output.innerHTML= output.innerHTML + a;
  inner.HTML=" ";
});
