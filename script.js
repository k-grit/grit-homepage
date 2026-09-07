const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('#navMenu');
if (btn && nav) {
	btn.addEventListener('click', () => nav.classList.toggle('open'));
	nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList
		.remove('open')))
}


/* ===== 3Dメリーゴーランド（電気工事・付帯工事） ===== */
document.querySelectorAll('.photo-carousel-3d').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('.carousel-slide-3d')];
    const dots = [...carousel.parentElement.querySelectorAll('.carousel-controls-3d .dot')];
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    let current = 0;
    let timer;

    if (!slides.length) return;

    function showSlide(index) {
        current = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.remove('is-active', 'is-prev', 'is-next');
            if (i === current) {
                slide.classList.add('is-active');
            } else if (i === (current - 1 + slides.length) % slides.length) {
                slide.classList.add('is-prev');
            } else if (i === (current + 1) % slides.length) {
                slide.classList.add('is-next');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === current);
        });
    }

    function restart() {
        clearInterval(timer);
        timer = setInterval(() => showSlide(current + 1), 4500);
    }

    prev.addEventListener('click', () => {
        showSlide(current - 1);
        restart();
    });
    next.addEventListener('click', () => {
        showSlide(current + 1);
        restart();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            restart();
        });
    });

    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', restart);
    carousel.addEventListener('focusin', () => clearInterval(timer));
    carousel.addEventListener('focusout', restart);

    showSlide(0);
    restart();
});


/* ===== 太陽光発電設備 既存カルーセル ===== */
const solarCarousel = document.querySelector('.photo-carousel');
if (solarCarousel) {
    const slides = [...solarCarousel.querySelectorAll('.carousel-slide')];
    const dots = [...document.querySelectorAll('.carousel-controls .dot')].slice(0, slides.length);
    const prev = solarCarousel.querySelector('.carousel-btn.prev');
    const next = solarCarousel.querySelector('.carousel-btn.next');
    let current = 0;
    let timer;

    function showSolarSlide(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.remove('is-active', 'is-prev', 'is-next');
            if (i === current) slide.classList.add('is-active');
            else if (i === (current - 1 + slides.length) % slides.length) slide.classList.add('is-prev');
            else if (i === (current + 1) % slides.length) slide.classList.add('is-next');
        });
        dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    }

    function restartSolar() {
        clearInterval(timer);
        timer = setInterval(() => showSolarSlide(current + 1), 4500);
    }

    prev.addEventListener('click', () => { showSolarSlide(current - 1); restartSolar(); });
    next.addEventListener('click', () => { showSolarSlide(current + 1); restartSolar(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
        showSolarSlide(i);
        restartSolar();
    }));

    solarCarousel.addEventListener('mouseenter', () => clearInterval(timer));
    solarCarousel.addEventListener('mouseleave', restartSolar);
    solarCarousel.addEventListener('focusin', () => clearInterval(timer));
    solarCarousel.addEventListener('focusout', restartSolar);

    showSolarSlide(0);
    restartSolar();
}
