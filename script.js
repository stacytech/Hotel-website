const hamburger = document.getElementById("hamburger");
const navContainer = document.getElementById("desktop-nav");

hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("open"); // toggle mobile menu + hamburger X
});
