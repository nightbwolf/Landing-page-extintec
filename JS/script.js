const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i){
    slides.forEach(sl => sl.classList.remove('active'));
    slides[i].classList.add('active');
};

document.querySelector('.next').onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index)
};