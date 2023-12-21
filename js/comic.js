let currentIndex = 0;
const slides = document.querySelectorAll('.comic_pages img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function goToFirst() {
    currentIndex = 0;
    showSlide(currentIndex);
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}

function goNext() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function goToLast() {
    currentIndex = slides.length - 1;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentIndex);
});
