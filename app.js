"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 11. Insert Elements, Text and HTML

//? Exercise A — Build one “insert” function that handles all 4 positions


function insertNotice(targetEl, position, message) {
    if (!(targetEl instanceof Element)) {
        throw new TypeError("insertNotice: targetEl must be a DOM Element.");
    }

    const allowed = ["beforebegin", "afterbegin", "beforeend", "afterend"];
    if (!allowed.includes(position)) {
        throw new Error(`insertNotice: position must be one of ${allowed.join(", ")}`);
    }

    //  Inside a <ul> -> <li>. Outside -> use a block element.
    const isInside = position === "afterbegin" || position === "beforeend";
    const tag = isInside ? "li" : "div";

    const notice = document.createElement(tag);
    notice.className = "notice";
    notice.textContent = message;

    targetEl.insertAdjacentElement(position, notice);
}

const list = document.querySelector("#section3 .tasks");

insertNotice(list, "beforebegin", "Start");
insertNotice(list, "afterbegin", "Task 0");
insertNotice(list, "beforeend", "Task 5");
insertNotice(list, "afterend", "Complete");


