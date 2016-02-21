function addOnClick(event) {
  event.preventDefault();
  $('form').on('submit', function() {
    console.log($('input').val());
    if($('input').val()) {
      appendAndClear();
    }
  });
}

function appendAndClear() {
  $('ul').append("<li>" + $('input').val() + "</li>");
  $('input').val("");
}