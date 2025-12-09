document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("sidebar-message");
    const first = this.getElementById("last-review");

    function handleScroll() {
        first.style.display = "none";

        setTimeout(() => {
            message.style.display = "block";
        }, 1000);

        setTimeout(() => {
            message.style.display = "none";
            first.style.display = "flex";
            first.classList.add("animate");
        }, 8500);

        // Remove event listener after triggering once
        window.removeEventListener("scroll", handleScroll);
    }

    if (!localStorage.getItem("hasVisited")) {
        window.addEventListener("scroll", handleScroll);
        localStorage.setItem("hasVisited", "true");
    } else {
        // Subsequent visits: show the dynamic content immediately without the animation
        message.style.display = "none";
        if (first) {
            first.style.display = "flex";
        }
    }

    // Carousel Code

    const carouselInner = document.querySelector(".carouselv2-inner");

    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dots span");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateCarousel(index) {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex =
            (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel(currentIndex);
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.getAttribute("data-index"));
            updateCarousel(currentIndex);
        });
    });

    // Ensure focus on initial state
    updateCarousel(currentIndex);
});