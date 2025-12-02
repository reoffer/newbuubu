const list = document.querySelectorAll('.observer');

function observeBestSeller() {
    const stickyBar = function(entries) {
        const floatingBar = document.querySelector('.floating-cta');
        const footer = document.querySelector('.footer');
        const [entry] = entries;
        if (!entry.isIntersecting) {
            floatingBar.style.maxHeight = '200px';
            floatingBar.style.bottom = '0px';
            /*footer.classList.add('floaterActive');*/
        } else {
            floatingBar.style.maxHeight = '0px';
            floatingBar.style.bottom = '-16px';
            /*footer.classList.remove('floaterActive');*/
        }
    };

    const observer = new IntersectionObserver(stickyBar, {
        root: null,
        threshold: 0,
    });

    const elementsToObserve = Array.from(list);
    elementsToObserve.forEach((element) => {
        observer.observe(element);
    });
}

floater_data.floater_options == 'hero' && observeBestSeller();