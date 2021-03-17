"use strict";

window.onload = function() {
  var inputField = document.getElementById("listInput");
  var addBtn = document.getElementById("add_todo");
  var toDoList = document.getElementById("toDoList");
  var counter = 0;

  addBtn.addEventListener("click", function() {
    var itemToAdd = inputField.value;
    if (inputField.value) {

      var newListItem = document.createElement("li");
      toDoList.append(newListItem);

      newListItem.innerHTML = "<span>" + inputField.value + "</span>";
      newListItem.innerHTML += "<span class='buttonLike markCompleted'>X</span>";
      newListItem.innerHTML += "<span class='buttonLike edit'>Edit</span>";
      inputField.value = null;

      var exes = document.getElementsByClassName("markCompleted");
      var editors = document.getElementsByClassName("edit");

      for (let i = 0; i < exes.length; i++) {
        exes[i].addEventListener("click", function(ev) {
          toDoList.children[i].setAttribute("class", "completed");
        });
      }

      for (let j = 0; j < editors.length; j++) {
        editors[j].addEventListener("click", function(ev) {
          var changes = prompt("Type your changes:");
          if (changes) {
            ev.target.previousSibling.previousSibling.innerHTML = changes;
          }
        });
      }
    }
  });

  inputField.addEventListener("keydown", function(ev) {
    var itemToAdd = inputField.value;
    if (inputField.value && ev.which === 13) {

      var newListItem = document.createElement("li");
      toDoList.append(newListItem);

      newListItem.innerHTML = "<span>" + inputField.value + "</span>";
      newListItem.innerHTML += "<span class='buttonLike markCompleted'>X</span>";
      newListItem.innerHTML += "<span class='buttonLike edit'>Edit</span>";
      inputField.value = null;

      var exes = document.getElementsByClassName("markCompleted");
      var editors = document.getElementsByClassName("edit");

      for (let i = 0; i < exes.length; i++) {
        exes[i].addEventListener("click", function(ev) {
          toDoList.children[i].setAttribute("class", "completed");
        });
      }

      for (let j = 0; j < editors.length; j++) {
        editors[j].addEventListener("click", function(ev) {
          var changes = prompt("Type your changes:");
          if (changes) {
            ev.target.previousSibling.previousSibling.innerHTML = changes;
          }
        });
      }
    }
  });
  
};
