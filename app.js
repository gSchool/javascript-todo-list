var button = document.getElementById('add_todo'),
    input = document.getElementById('input'),
    output = document.getElementById('output');

  button.addEventListener('click', function(){
    var post = input.value;
    output.innerHTML = output.innerHTML + '<li>' + post + '</li>'
    input.value = ""
    })
