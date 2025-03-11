let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlides();
});

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlides();
});

// Iniciar el slider
showSlides();
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});