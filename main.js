$(document).ready(function() {

    var list1 = new List ({
        listName: "Today's todo",
        tasks: [ {id: 2001, name: "Walk the pups", completed: false}]
    });

    $('#add_todo').on('click', function() {
        var userInput = $('input').val();
        $('ul').append('<li>'+userInput+'</li>');
        $('input').val('').focus();

        var task = new Task(userInput);
        list1.addTask(task);
        console.log(list1);
    });


    $('section').on('click', 'li', function() {
        var complete = 'completed';
        $(this).addClass(complete);

        var name = $(this).text();
        var taskList = list1.tasks;

        for (var i=0; i < taskList.length; i++) {
            if (taskList[i].name === name) {
                taskList[i].completed = true;
            }
        }
    });


});

