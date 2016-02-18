$(document).on('ready', function() {
  addOnClick();
  addOnEnter();
});

function addOnClick() {
  $('button').on('click', function() {
    if($('input').val()) {
      appendAndClear();
    }
  });
}

function addOnEnter() {
  $(document).keypress(function(e) {
    if($('input').val() && e.which === 13) {
      appendAndClear();
    }
  });
}

function appendAndClear() {
  $('ul').append("<li>" + $('input').val() + "</li>");
  $('input').val("");
}