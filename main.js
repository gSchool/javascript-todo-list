$(document).ready(function(){
	console.log('winner')
})

$('#add_todo').on('click', function(){
	var input= $('#input').val()
	console.log(input)
	$('ul').append('<li>' + input + '</li>')
})