//1

const container = document.querySelector("#container");
const intro = document.querySelector(".intro");

//2

const highlighted = document.createElement("span");
highlighted.classList.add ("highlight");
highlighted.textContent ="IMPORTANT: ";
container.insertBefore(highlighted,intro);

// 3

const infoBox = document.createElement("div");
infoBox.style.border = "1px solid red";
infoBox.setAttribute("id","info-box");

// 4

const title = document.createElement("h2");
title.classList.add("section-title");
title.textContent = "New Section";
infoBox.appendChild(title);

// 5

const list = document.createElement("ul");

const firstLi = document.createElement("li");
firstLi.textContent = "First item";
const secondLi = document.createElement("li");
secondLi.textContent = "Second item";

list.appendChild(firstLi);
list.appendChild(secondLi);
infoBox.appendChild(list);

//6

intro.after(infoBox);

// 7

const final = document.createElement("p");
final.setAttribute("id", "final-paragraph");
final.innerText = "This is the final paragraph.";

// 8

document.body.appendChild(final);