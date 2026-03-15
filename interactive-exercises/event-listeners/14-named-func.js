// Refs
const text1 = document.querySelector("#message1");
const text2 = document.querySelector("#message2");
const text3 = document.querySelector("#message3");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// 1st method
function handleMethod1() {
    text1.textContent = "Hey, I'm changed!"; 
}

//2nd method
function handleMethod2(){
    text2.textContent ="Me too!";
};
btn2.onclick = handleMethod2;   // without () - reference to function - waits for click
                               // with () -  call - immediate run

//3rd method
function handleMethod3(){
    text3.textContent = "I'm also changed, but with Event Listeners!";
}
btn3.addEventListener("click",handleMethod3);