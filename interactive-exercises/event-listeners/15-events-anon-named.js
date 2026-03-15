
// Refs

const box = document.querySelector("#infoBox");
const newText = document.querySelector('p');

// Named function

function changeText(){
    newText.textContent = "The text has been changed!";
}

box.addEventListener("click",changeText);

// Anon function

box.addEventListener("dblclick", ()=>{
    box.style.backgroundColor = "lightblue";
})