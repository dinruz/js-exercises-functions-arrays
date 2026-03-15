
const cards = document.querySelectorAll(".topic-card");

cards.forEach((card) => {

  card.addEventListener("click", () => {    
    cards.forEach((otherCard) => {           // reset all cards      
      otherCard.classList.remove('active');
    });
    card.classList.add('active');    // 'active' to clicked card
  });

});