function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
}

function setStickyAside() {
    const aside = document.querySelector(".sidebar");
    const container = document.getElementById("author");
    const references = document.getElementById("footer");
    let containerTop;
    if (container) {
        containerTop = container.getBoundingClientRect().top;
    }
    if (references) {
        containerTop = references.getBoundingClientRect().top;
    }

    const positionThreshold = 200;
    const stickyPosition = containerTop + positionThreshold;

    if (aside) {
        // if (window.pageYOffset >= stickyPosition) {
        aside.style.position = "sticky";
        aside.style.top = "20px";
    } else {
        return;
    }
}

window.addEventListener("scroll", setStickyAside);