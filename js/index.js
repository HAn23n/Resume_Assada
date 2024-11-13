let slideIndex = 0;

function moveSlide(direction) {
    const gallery = document.querySelector('.image-gallery');
    const imageBoxWidth = gallery.querySelector('.image-box').offsetWidth + 10; 
    const visibleWidth = gallery.parentElement.offsetWidth; 

    slideIndex += direction;


    const maxIndex = Math.ceil(gallery.children.length - visibleWidth / imageBoxWidth);

    if (slideIndex < 0) slideIndex = maxIndex - 1;
    if (slideIndex >= maxIndex) slideIndex = 0;

    
    gallery.style.transform = `translateX(-${slideIndex * imageBoxWidth}px)`;
}
document.querySelectorAll('.gallery-image').forEach(image => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = image.getAttribute('data-title');
    image.parentElement.appendChild(tooltip);
});