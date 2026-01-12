"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 11. Insert Elements, Text and HTML

//  This lesson follows directly after “Refactor To Multiple Functions” and focuses on inserting existing elements, plain text, and HTML strings into precise positions in the DOM.

//* What you are learning
//  By the end, you should be able to:
//  • Insert content before/after an element, and at the start/end of an element.
//  • Choose the right API for the job:
//      • Elements → before(), after(), prepend(), append(), insertAdjacentElement()
//      • Text → textContent, insertAdjacentText()
//      • HTML → insertAdjacentHTML() (careful: security)
//  • Explain when to use textContent instead of innerHTML (most of the time).


//TODO  Concept explanation (the “where” and the “what”)

//? 1) The 4 insertion positions (mental model)
//  Most DOM insertion needs fall into these positions relative to a target element:
//  • beforebegin → before the element itself
//  • afterbegin → inside the element, at the start
//  • beforeend → inside the element, at the end
//  • afterend → after the element itself
//  These positions map cleanly to insertAdjacent* methods.

//? 2) The safest default: treat user content as text
//  • Use "textContent" when you want to display a string as-is (safe; no HTML parsing).
//  • Use "insertAdjacentHTML" only for trusted HTML strings you control.

//* Minimal example (reference only)

const list = document.querySelector("#myList");

//  insert HTML at the end (inside list)
list.insertAdjacentElement("beforeend", "<li>New item</li>");

//  insert text at the start (inside list)
list.insertAdjacentElement("afterbegin", "Tasks: ");


//TODO  Guided practice (you write it; I review it)

//? Exercise A — Build one “insert” function that handles all 4 positions

//  Your task: create a function that inserts a small notice message in different places.

//* Requirements
//  1. Function name: insertNotice(targetEl, position, message)
//  2. position must support: "beforebegin" | "afterbegin" | "beforeend" | "afterend"
//  3. The notice must be inserted as an element (not just HTML string).
//  4. The notice must include:
//      • a class (e.g. "notice")
//      • its message as text (use textContent)

//* Hints (not the full solution)
//  • Use document.createElement("div")
//  • Set notice.textContent = message
//  • Use one of:
//      • targetEl.insertAdjacentElement(position, notice)
//      • or map position to before/prepend/append/after

//* Self-check
//  When you call it four times with four positions, you should visibly see the notice move around the target element.


//! Solution























































