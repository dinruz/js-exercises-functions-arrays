// 1. Get the `<div>` with the id "container"

const container = document.querySelector("#container");

// 2. Create a new `<p>` element with the text "This text is light green.", color 'lightgreen'

const lightGreenP = document.createElement("p");
lightGreenP.style.color = "lightgreen";
lightGreenP.textContent = "This text is light green.";

// 3. Create a new `<h2>` element with the text "This is an orange heading.", color 'orange'

const orangeH2 = document.createElement("h2");
orangeH2.style.color =  "orange";
orangeH2.textContent = "This is an orange heading.";

// 4. Create a new `<div>` element with '2px solid black' border and a 'lightblue' background color

const ligtblueDiv = document.createElement("div");
ligtblueDiv.style.cssText ="border: 2px solid black; backgroundColor: lightblue;";

/* 5. Inside this new `<div>` create:
  - a new `<h4>` element with the text "I'm the first element in the new div."
  - a new `<p>` element with the text "And I'm the second!" */

const firstEl = document.createElement("h4");
firstEl.textContent = "I'm the first element in the new div.";
const secondEl = document.createElement("p");
secondEl.textContent = "And I'm the second!";

// 6. Append all  elements to the "container" div in the correct order

container.appendChild(lightGreenP);
container.appendChild(orangeH2);
container.appendChild(lightblueDiv);
ligtblueDiv.appendChild(firstEl);
ligtblueDiv.appendChild(secondEl);