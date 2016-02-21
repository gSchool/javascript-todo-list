var alreadyThere = ['Thing 1', 'Thing 2', 'Thing 3']

$(document).on('ready', function() {

seedDataToLocalStorage();
var allYourTodos = getDataFromLocalStorage();
appendToDom(allYourTodos);


 
  $('form').on('submit', function(event){
      event.preventDefault();
      var todo = $('input').val();
      $('#add-todo').append('<li>'+todo+'</li>');
      seedDataToLocalStorage(todo);
      $('input').val('');
  });
   

  $('li').on('click', function(){
      var removeThis = ($(this).text());
      $(this).addClass('completed');
      removeDataFromLocalStorage(removeThis);
     
  });

});


function seedDataToLocalStorage(todo){
  if (todo) {
    var currentdata = getDataFromLocalStorage();
    currentdata.push(todo);  
    localStorage.setItem('todos', JSON.stringify(currentdata));
  }
   if (!getDataFromLocalStorage()){ 
    localStorage.setItem('todos', JSON.stringify(alreadyThere));
  }
}

function getDataFromLocalStorage(){
  return JSON.parse(localStorage.getItem('todos'));
}


function removeDataFromLocalStorage(removeThis){

  var itemToRemove2 = getDataFromLocalStorage();
  localStorage.clear();
  
  for (var i = 0; i < itemToRemove2.length; i++) {
    if(removeThis === itemToRemove2[i]){
       var removeThis = itemToRemove2[i];
       var pleaseWork = itemToRemove2.splice($.inArray(removeThis, itemToRemove2),1);
    
    };
  }
  localStorage.setItem('todos', JSON.stringify(itemToRemove2));


}

function appendToDom(arr){
  arr.forEach(function (todo){
    $('#add-todo').append('<li>'+todo+'</li>');
  });
}
