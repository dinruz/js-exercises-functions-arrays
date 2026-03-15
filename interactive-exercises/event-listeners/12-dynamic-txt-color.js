const btn = document.getElementById("changeBtn");
const par = document.getElementById("displayText");

btn.addEventListener("click", () => {
par.textContent = "You clicked the button!";
par.style.color = "red";
});