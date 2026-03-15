// 1

const list = document.querySelector("#item-list");
const highlight = document.querySelector(".highlight");

// 2

const cheese = document.createElement("li");
cheese.innerHTML = "Cheese";
cheese.classList.add('new-item');
list.appendChild(cheese);

// 3

const apples = document.createElement("li");
apples.innerText = "Apples";
list.prepend(apples);

// 4

const note = document.createElement("h3");
note.innerText = "Don't Forget!";
const container = document.querySelector("#shopping-list-container");
document.body.insertBefore(note,container);

// 5

highlight.classList.remove('highlight');
highlight.style.backgroundColor = "pink";
