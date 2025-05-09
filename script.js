// Параллакс-эффект
document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('animate__animated', 'animate__fadeInUp');
        }, 100);
    });
};

window.addEventListener('load', animateOnScroll);
