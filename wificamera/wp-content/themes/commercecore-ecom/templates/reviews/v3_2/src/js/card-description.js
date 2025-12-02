let revealButtons = document.querySelectorAll('.toggle-indicator');
/*const articleLink = scroll_to_link.article_link;*/
const articleLink = '#article';
const cleanLink = articleLink.substring(1);
let hiddenContents = document.querySelectorAll('.hidden-content');
let visibleIndex = null;

Array.prototype.forEach.call(revealButtons, function(button, index) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        Array.from(hiddenContents).forEach((item, i) => {
            if (i === index) {
                item.classList.toggle('opened');
                const hiddenContentInnerContainer = item.querySelector('.cardBody--assessment__wrapper');

                if (item.classList.contains('opened')) {
                    item.style.maxHeight = `${hiddenContentInnerContainer.clientHeight}px`;
                    item.style.height = '100%';

                    button.classList.add('open');
                    visibleIndex = index;

                    setTimeout(function() {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                } else {
                    visibleIndex = null;
                    item.style.maxHeight = '0px';
                    button.classList.remove('open');
                }
            } else {
                revealButtons[i].classList.remove('open');
                item.classList.remove('opened');
                item.style.maxHeight = '0px';
            }
        });
    });
});
const hashLinks = document.querySelectorAll(`a[href^="${articleLink}"]`);
const productsList = document.getElementById(cleanLink);

Array.from(hashLinks).forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        productsList.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    });
});