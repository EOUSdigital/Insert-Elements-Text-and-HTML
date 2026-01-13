"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 11. Insert Elements, Text and HTML

//? Exercise A — Build one “insert” function that handles all 4 positions


function insertNotice(targetEl, position, message) {
    const list = document.querySelector("#section3 .tasks");

    list.insertAdjacentElementText("beforebegin", "Start");
    
    list.insertAdjacentElementHTML("afterbegin", "<li>Task 0</li>");

    list.insertAdjacentElementHTML("beforeend", "<li>Task 5</li>")
    
    list.insertAdjacentElementText("afterend", "Finish")
}