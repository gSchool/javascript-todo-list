$(document).ready(function () {
    console.log('sanity check');
});

$('form').on('submit', function (event) {
    event.preventDefault();
    var todo = $('#inputField').val();
    $('#results').append('<li class="todo-data">'+todo+'</li>');
    $('#inputField').val('');
});

$(document).on('click', '.todo-data', function () {
    $(this).toggleClass('completed');
});