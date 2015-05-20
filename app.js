

var input = document.getElementById("input"),
    button = document.getElementById("add_todo"),
    output = document.getElementById("output"),
    result = document.getElementById("list");


var showMsg = function(task){
    var userInput = document.getElementById('input').value;
    return input.value;
    };

    add_todo.addEventListener('click', function(){
      var task = showMsg(input.value);
      output.innerHTML = output.innerHTML + '<br>' + task;
    });
