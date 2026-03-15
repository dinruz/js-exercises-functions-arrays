// 1
const body = document.querySelector("body")

// 2
const card = document.createElement("div");
card.setAttribute("id","profile-card");
body.appendChild(card);

// 3
const avatar = document.createElement("img");
avatar.setAttribute("src","./06-profile-card-avatar.png"); // avatar.src = "..."
avatar.setAttribute("alt","Profile Picture");  
avatar.setAttribute("id","profile-pic");       
card.appendChild(avatar);

// 4
const prName = document.createElement("h2");
prName.textContent ="John Doe";
prName.setAttribute("id","profile-name");
card.appendChild(prName);
const prStatus = document.createElement("p");
prStatus.textContent = "Online";
prStatus.setAttribute("id","profile-status");
card.appendChild(prStatus);

// 5
prStatus.classList.add("online-status");
prStatus.style.backgroundColor = "lightgreen";

//6
const btn = document.createElement("button");
btn.textContent = "Send Message";
btn.setAttribute("id","message-button");
card.appendChild(btn);
