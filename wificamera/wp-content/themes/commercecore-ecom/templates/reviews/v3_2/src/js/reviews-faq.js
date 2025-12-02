document.addEventListener("DOMContentLoaded", () => {
    const FAQList = document.querySelector("#faq_container");

    if (!FAQList) return; // Only run if FAQList !== null, to prevent consolse errors

    function faqCollapseHandler() {
        FAQList.addEventListener("click", (ev) => {
            const card = ev.target.closest(".questions__card");
            if (!card) return;

            const innerList = card.querySelector(".questions__cardList");
            const listWrap = card.querySelector(".questions__listWrap");
            const indicator = card.querySelector(".questions__button");
            if (!innerList || !listWrap || !indicator) return;

            const height = innerList.clientHeight;
            const state = card.getAttribute("data-expanded");

            if (state === "false") {
                const allCards = FAQList.querySelectorAll(".questions__listWrap");
                const cardsIndicator = FAQList.querySelectorAll(".questions__button");
                const cards = FAQList.querySelectorAll(".questions__card");

                allCards.forEach((item) => (item.style.height = "0px"));
                cardsIndicator.forEach((item) => item.setAttribute("data-expanded", "false"));
                cards.forEach((item) => {
                    item.setAttribute("data-expanded", "false");
                    item.classList.add("questions__card-hover");
                });

                card.setAttribute("data-expanded", "true");
                indicator.setAttribute("data-expanded", "true");
                card.classList.remove("questions__card-hover");
                listWrap.style.height = `${height}px`;

                if (window.innerWidth < 768) {
                    setTimeout(() => {
                        card.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }, 300);
                }
            } else {
                card.setAttribute("data-expanded", "false");
                indicator.setAttribute("data-expanded", "false");
                card.classList.add("questions__card-hover");
                listWrap.style.height = `0px`;
            }
        });
    }

    // Add screen reader friendly <a> tag descriptions
    const tags = FAQList.querySelectorAll("a");
    tags.forEach((tag) => {
        const span = document.createElement("span");
        span.classList.add("screen-reader-text");
        span.innerText = "customers support";
        tag.appendChild(span);
    });

    faqCollapseHandler();
});