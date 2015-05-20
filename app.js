var input = document.getElementById('input');
var list= document.getElementsByTagName('ul');
var button = document.getElementById('add_todo');

button.addEventListener('click', function(){
console.log(input.value);
console.log(list);
    list.innerHTML = "<li>" + input.value + "<li>";
});
