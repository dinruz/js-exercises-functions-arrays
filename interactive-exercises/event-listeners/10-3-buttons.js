const msg = document.querySelector("#message-display");

// btn2

btn2.onclick =() => msg.textContent ="You clicked Button 2 using a traditional handler!";

// btn2

const btn3 = document.getElementById('btn3');
btn3.addEventListener("click", () => {
     msg.textContent="You clicked Button 3 using a modern event listener!";
    });