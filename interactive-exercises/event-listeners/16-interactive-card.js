// setup

const info = document.querySelector("#infoCard");
const paragraph = info.querySelector('p');

// mouseenter

function showInfo(){
  paragraph.style.opacity = '1';
  info.style.border = '2px solid #007bff';
};
info.addEventListener ("mouseenter", showInfo);

//mouseleave

info.addEventListener ("mouseleave", () => {
  paragraph.style.opacity = '0';
  info.style.border ='2px solid transparent';
});


