const letters = document.querySelectorAll('.letter');

letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 100}ms`;
});
