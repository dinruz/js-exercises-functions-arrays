
//Refs
const box = document.querySelector('#color-box');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Button 2
btn2.onclick = () => box.style.backgroundColor = "blue"; 

// Button 3
btn3.addEventListener("click", ()=>{
    box.style.backgroundColor = "green";
});