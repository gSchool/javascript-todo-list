$('#add_todo').on('click', function() {
    var userInput = $('input').val();
    $('ul').append('<li>'+userInput+'</li>');
    $('input').val('').focus();

});


$('section').on('click', 'li', function() {
    var complete = 'completed';
    $(this).addClass(complete);
});