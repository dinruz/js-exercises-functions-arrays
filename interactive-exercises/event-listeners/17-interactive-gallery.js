
const cards = document.querySelectorAll(".topic-card");

cards.forEach ((card) => {
card.addEventListener("click", () => {
    card.classList.toggle('active');
})
});

