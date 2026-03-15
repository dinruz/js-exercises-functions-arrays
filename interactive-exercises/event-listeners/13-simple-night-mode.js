
// Refs
const modeBtn = document.querySelector("#modeBtn");

//Toggle
modeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle('night-mode');
    //3rd step
    if (document.body.classList.contains('night-mode')) {
        modeBtn.textContent = "Night Mode: TURN OFF 🌞";
    } else {
        modeBtn.textContent = "Night Mode: TURN ON 🌙";
    }
 });


   