"use strict";

window.onload = () => {


    let addButton = document.getElementById("add_todo");
    let todo = document.getElementById("input");

    addButton.addEventListener("click", (ev) => {
        if (todo.value !== "") {
            let list = document.getElementById("list");
            let listItem = document.createElement("li");
            listItem.innerText = todo.value;
            list.append(listItem);
            // let editButton = document.createElement("button");
            // editButton.innerText = "Edit";
            // editButton.style
            // listItem.append(editButton);
            todo.value = '';
        }
    });

    document.addEventListener('keypress', function(ev) {
        var key = ev.keyCode;
        if (todo.value !== "" && key === 13) {
            let todo = document.getElementById("input");
            let list = document.getElementById("list");
            let listItem = document.createElement("li");
            listItem.innerText = todo.value;
            list.append(listItem);
            todo.value = '';
        }
        // console.log(ev.keyCode);
    });



};
