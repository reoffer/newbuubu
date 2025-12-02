document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".product-list-card .toggle-indicator");
    let hiddenText = document.getElementsByClassName("hidden-content");

    function openFirstCardOnLoad() {
        const firstElement = Array.from(hiddenText).filter((item) => {
            return item.getAttribute("expanded");
        });

        if (firstElement.length > 0) {
            // Check if there are any elements in the array, then run the script.
            setTimeout(() => {
                const firstComponentInnerContainer = firstElement[0].querySelector(".cardBody--assessment__wrapper");

                if (firstComponentInnerContainer) {
                    const height = firstComponentInnerContainer.clientHeight;
                    if (buttons[0]) {
                        buttons[0].classList.add("open");
                    }
                    firstElement[0].classList.add("opened");
                    firstElement[0].style.maxHeight = `${height}px`;
                    firstElement[0].style.height = "100%";
                }
            }, 1200);
        }
    }

    openFirstCardOnLoad();
});