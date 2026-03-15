// 1. Adding a <p> with red text that says “Hey I’m red!” 

const container = document.querySelector("#container");
const paragraph  = document.createElement("p");
paragraph.textContent="Hey I'm red!";
paragraph.style.color="red";
container.appendChild(paragraph);

//2. an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color="blue";
container.appendChild(blueH3);

//*3. styled <div> with <h1> and <p> inside

 const newDiv = document.createElement("div");
 newDiv.style.cssText ="border:1px solid black; background: pink";

 const h= document.createElement("h1");
 h.textContent="I'm in a div";
 newDiv.appendChild(h);

 const newParagraph = document.createElement("p");
 newParagraph.textContent="ME TOO!";
 newDiv.appendChild(newParagraph);

 container.appendChild(newDiv);