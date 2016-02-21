"use strict";

var Item = function(attribute) {
  this.title = attribute.title;
  this.complete = false;
};

var ToDoList = function() {
  this.itemArr = [];
};

var myList = new ToDoList();


ToDoList.prototype.addItem = function(item) {
  this.itemArr.push(item);
};

Item.prototype.completeItem = function() {
  this.complete = true;
  $('ul').empty();
  myList.renderToDom();
};


ToDoList.prototype.renderToDom = function() {
  for (let i = 0; i < this.itemArr.length; i++) {
    let currentItem = this.itemArr[i];
    let li = $('<li/>');
    if(this.itemArr[i].complete === true) {
      $(li).addClass('completed');
    }
    $(li).text(this.itemArr[i].title);
    $(li).click(function(e) {
      currentItem.completeItem();
    });
    $('ul').append(li);
  }
};





