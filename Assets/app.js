document.querySelectorAll('.slider-container').forEach((slider) => {
    const productContainer = slider.querySelector('.product-umroh');
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');

    let currentIndex = 0;
    const itemWidth = slider.querySelector('.product-item').offsetWidth + 20; 
    const totalItems = slider.querySelectorAll('.product-item').length;

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            productContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            productContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });
});
