function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const backToTopButton = document.querySelector(".back-to-top");
if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
}