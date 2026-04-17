// Timeline: desplazamiento continuo, suave, tipo "video"
(function () {
    const carousel = document.querySelector('.timeline-carousel');
    const track = document.querySelector('.timeline-track');
    const prevButton = document.querySelector('.timeline-nav--prev');
    const nextButton = document.querySelector('.timeline-nav--next');
    const dotsContainer = document.querySelector('.timeline-dots');

    if (!carousel || !track) return;

    // Reset posibles restos de lógica anterior
    if (dotsContainer) dotsContainer.innerHTML = '';
    track.style.transition = 'none';
    track.style.willChange = 'transform';

    let isPaused = false;
    let rafId = null;
    let lastTs = 0;
    let offsetX = 0; // px
    let halfWidth = 0; // ancho de la pista original (después de duplicar, será scrollWidth/2)

    // Clonar el contenido para looping infinito suave
    function duplicateContent() {
        const children = Array.from(track.children);
        if (children.length === 0) return;
        const fragment = document.createDocumentFragment();
        children.forEach((child) => fragment.appendChild(child.cloneNode(true)));
        track.appendChild(fragment);
    }

    function getSpeedPxPerSec() {
        const w = window.innerWidth;
        if (w <= 480) return 18; // móvil
        if (w <= 768) return 24; // tablet
        return 36; // desktop
    }

    let SPEED = getSpeedPxPerSec();

    function measure() {
        // Al tener duplicado el contenido, la mitad del scrollWidth equivale al ancho del set original
        halfWidth = track.scrollWidth / 2;
    }

    function step(ts) {
        if (!lastTs) lastTs = ts;
        const dt = ts - lastTs; // ms
        lastTs = ts;

        if (!isPaused && halfWidth > 0) {
            offsetX -= (SPEED * dt) / 1000; // mover a la izquierda
            if (-offsetX >= halfWidth) {
                // Reiniciar sin salto visual (gracias al duplicado)
                offsetX = 0;
            }
            track.style.transform = `translateX(${offsetX}px)`;
        }

        rafId = requestAnimationFrame(step);
    }

    function start() {
        cancel();
        lastTs = 0;
        rafId = requestAnimationFrame(step);
    }

    function cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
    }

    function pause() {
        isPaused = true;
    }

    function resume() {
        isPaused = false;
    }

    // Navegación manual: salto suave a la siguiente/anterior diapositiva y retomar flujo
    function getSlideWidth() {
        // 1 slide ocupa el ancho visible del carrusel
        return carousel.clientWidth;
    }

    function jumpBy(deltaSlides) {
        // Pausa, hace una transición breve para "nudge", y retoma continuo
        pause();
        const slideW = getSlideWidth();
        let target = offsetX - deltaSlides * slideW;
        
        // Si se va hacia atrás (positivo) desde el inicio, wraparound
        if (target > 0) {
            target = -halfWidth + (target % halfWidth);
        }
        
        // Si se pasa del final, wraparound
        if (-target >= halfWidth) {
            target = target % halfWidth;
        }
        
        track.style.transition = 'transform 0.6s ease-in-out';
        track.style.transform = `translateX(${target}px)`;
        offsetX = target;

        setTimeout(() => {
            track.style.transition = 'none';
            resume();
        }, 650);
    }

    // Eventos de interacción
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    // Botones prev/next (opcional)
    if (prevButton) prevButton.addEventListener('click', () => jumpBy(-1));
    if (nextButton) nextButton.addEventListener('click', () => jumpBy(1));

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') jumpBy(-1);
        if (e.key === 'ArrowRight') jumpBy(1);
    });

    // Táctil simple: swipe izquierda/derecha
    let touchStartX = 0;
    let touchEndX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pause();
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const threshold = 40;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) jumpBy(1); else jumpBy(-1);
        } else {
            resume();
        }
    });

    // Visibilidad de pestaña
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) pause(); else resume();
    });

    // Resize: recalcular velocidad/ancho
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            SPEED = getSpeedPxPerSec();
            measure();
        }, 150);
    });

    // Carga inicial
    duplicateContent();
    // Esperar a que imágenes se dimensionen para medir correctamente
    window.addEventListener('load', () => {
        measure();
        start();
    });
})();
