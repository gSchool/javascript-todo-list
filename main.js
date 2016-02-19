var newTaskList = new TaskList('one');

$(document).ready(function () {

});

$('form').on('submit', function (event) {
    event.preventDefault();
    var todo = $('#inputField').val();
    var newTask = new Task(todo);
    $('#results').text('');
    newTaskList.addTask(newTask);
    newTaskList.tasks.forEach(function (task) {
        if (task.completed === false) {
            $('#results').append('<li class="task-data" id="'+task.id+'">'+task.task+'</li>');
        } else {
            $('#results').append('<li class="task-data completed" id="'+task.id+'">'+task.task+'</li>');
        }

    })

    $('#inputField').val('');
});

$(document).on('click', '.task-data', function () {
    var number = $(this).attr('id');
    var thisTask = newTaskList.tasks.filter(function (task) {
        return task.id === +number;
    });
    thisTask[0].completed = true;
    $(this).addClass('completed');
});