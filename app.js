var input = document.getElementById('input');
var list= document.getElementById('todoList');
var button = document.getElementById('add_todo');

button.addEventListener('click', function(){
console.log(list.innerText);
console.dir(list);
    list.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
});

//input.addEventListener('keyup', function(){
//console.log(list.innerText);
//console.dir(list);
//    list.innerHTML += "<li>" + input.value + "</li>";
//    input.value = "";
//});
