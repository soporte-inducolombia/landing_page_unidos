// Main JavaScript File

// ============================================
// Variables Globales
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.navbar__link');
const contactForm = document.getElementById('contactForm');

// ============================================
// Navegación Móvil
// ============================================
function initMobileNav() {
    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevenir scroll cuando el menú está abierto
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Smooth Scroll para los enlaces de navegación
// ============================================
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Solo hacer smooth scroll si el enlace es un ancla (#)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 70;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // Si no es un ancla, dejar que el navegador maneje la navegación normal
        });
    });
}

// ============================================
// Header con efecto al hacer scroll
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Agregar clase scrolled cuando se baja
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// Animaciones al hacer scroll (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con animación
    const animatedElements = document.querySelectorAll('.feature-card, .about__content, .contact__form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// Validación y envío del formulario
// ============================================
function initContactForm() {
    if (contactForm) {
        // Si estamos en la página de contacto (contactanos.html), 
        // NO interceptar el formulario - dejar que Formspree lo maneje
        const isContactPage = window.location.pathname.includes('contactanos.html');
        
        if (isContactPage) {
            // En la página de contacto, Formspree maneja todo
            console.log('✅ Formulario de contacto: Gestionado por Formspree');
            return;
        }
        
        // Para otras páginas (si existe el formulario), usar validación personalizada
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Obtener valores del formulario
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validación básica
            if (!validateForm(formData)) {
                return;
            }
            
            // Deshabilitar botón durante el envío
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            try {
                // Simulación de envío (reemplazar con tu lógica de backend)
                await simulateFormSubmit(formData);
                
                // Mostrar mensaje de éxito
                showMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
                
                // Limpiar formulario
                contactForm.reset();
            } catch (error) {
                // Mostrar mensaje de error
                showMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
            } finally {
                // Restaurar botón
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }
}

// ============================================
// Funciones auxiliares
// ============================================

// Validar formulario
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (data.name.length < 2) {
        showMessage('Por favor, ingresa un nombre válido.', 'error');
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        showMessage('Por favor, ingresa un email válido.', 'error');
        return false;
    }
    
    if (data.message.length < 10) {
        showMessage('El mensaje debe tener al menos 10 caracteres.', 'error');
        return false;
    }
    
    return true;
}

// Simular envío de formulario
function simulateFormSubmit(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulación: 90% de éxito
            if (Math.random() > 0.1) {
                console.log('Datos del formulario:', data);
                resolve();
            } else {
                reject(new Error('Error de simulación'));
            }
        }, 1500);
    });
}

// Mostrar mensajes de notificación
function showMessage(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: type === 'success' ? 'var(--color-success)' : 'var(--color-error)',
        color: 'white',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '9999',
        animation: 'fadeInRight 0.3s ease-out',
        maxWidth: '300px',
        fontWeight: '500'
    });
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.style.animation = 'fadeOutRight 0.3s ease-out';
            setTimeout(() => {
                // Verificar nuevamente antes de remover
                if (notification && notification.parentNode) {
                    try {
                        notification.parentNode.removeChild(notification);
                    } catch (e) {
                        console.warn('Error al remover notificación:', e);
                    }
                }
            }, 300);
        }
    }, 4000);
}

// Detectar si el usuario prefiere modo oscuro
function detectColorScheme() {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (darkModeQuery.matches) {
        console.log('Modo oscuro detectado. Puedes implementar estilos dark mode aquí.');
    }
    
    // Escuchar cambios
    darkModeQuery.addEventListener('change', (e) => {
        if (e.matches) {
            console.log('Usuario cambió a modo oscuro');
        } else {
            console.log('Usuario cambió a modo claro');
        }
    });
}

// ============================================
// Animación de Jasinta con cambio de imagen
// ============================================
function initJasintaAnimation() {
    // Seleccionar todas las imágenes de Jasinta animadas (navbar y footer)
    const jasintaImages = document.querySelectorAll('.navbar__jacinta--animated, .footer__jacinta--animated');
    
    if (!jasintaImages.length) return;
    
    jasintaImages.forEach(jasintaImg => {
        const originalSrc = jasintaImg.dataset.originalSrc;
        const hoverSrc = jasintaImg.dataset.hoverSrc;
        let isAnimating = false;
        
        // Precargar la imagen hover para transición suave
        const preloadImage = new Image();
        preloadImage.src = hoverSrc;
        
        jasintaImg.addEventListener('mouseenter', () => {
            if (isAnimating) return;
            
            isAnimating = true;
            jasintaImg.classList.add('switching');
            
            // Cambiar imagen a mitad de la animación para efecto sorpresa
            setTimeout(() => {
                jasintaImg.src = hoverSrc;
            }, 300);
            
            // Quitar clase de animación después de completarse
            setTimeout(() => {
                jasintaImg.classList.remove('switching');
                isAnimating = false;
            }, 600);
        });
        
        jasintaImg.addEventListener('mouseleave', () => {
            if (isAnimating) return;
            
            isAnimating = true;
            jasintaImg.classList.add('switching');
            
            // Volver a la imagen original con animación
            setTimeout(() => {
                jasintaImg.src = originalSrc;
            }, 300);
            
            setTimeout(() => {
                jasintaImg.classList.remove('switching');
                isAnimating = false;
            }, 600);
        });
        
        // Efecto adicional: pequeña celebración con confetti virtual (efecto visual)
        jasintaImg.addEventListener('click', () => {
            createConfetti(jasintaImg);
        });
    });
}

// ============================================
// Efecto confetti al hacer click en Jasinta
// ============================================
function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: 8px;
            height: 8px;
            background: ${['#009490', '#FFDA00', '#244B5A'][Math.floor(Math.random() * 3)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${0.5 + Math.random() * 0.5}s ease-out forwards;
        `;
        
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;
        
        confetti.style.setProperty('--tx', `${tx}px`);
        confetti.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti && confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 1000);
    }
}

// Agregar keyframes para confetti dinámicamente
if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Animación de contadores estadísticos
// ============================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-card__number');
    if (!statNumbers.length) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; // Dividir en 100 pasos
    const duration = 2000; // 2 segundos
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// Instagram Feed (sin API): perfil embebido
// ============================================
function initInstagramFeed() {
    const iframe = document.querySelector('.instagram-row__iframe');
    const loader = document.getElementById('instagramLoader');
    if (!iframe || !loader) return;

    // Mostrar loader inicialmente hasta que el embed cargue
    loader.style.visibility = 'visible';
    loader.style.opacity = '1';

    // Si el widget carga correctamente, ocultamos el loader
    iframe.addEventListener('load', () => {
        // Dar un pequeño tiempo para que el widget calcule su altura
        setTimeout(() => {
            loader.style.transition = 'opacity 300ms ease';
            loader.style.opacity = '0';
            // Mantener en el DOM por accesibilidad pero invisible
            setTimeout(() => { loader.style.visibility = 'hidden'; }, 300);
        }, 200);
    });

    // Si en 4s no cargó, dejamos el loader (sin fondo) visible
    setTimeout(() => {
        // Nada: el loader seguirá visible
    }, 4000);
}

// ============================================
// Inicialización
// ============================================
function init() {
    console.log('🚀 Aplicación inicializada');
    
    // Inicializar todas las funcionalidades
    initMobileNav();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initContactForm();
    detectColorScheme();
    initFooterLogo();
    initFooterJacinta();
    initJasintaAnimation();
    initInstagramFeed();
    initBlogModals();
    initStatsCounter();
    initCategoriesModal();
    
    // Log para desarrollo
    console.log('✅ Todas las funcionalidades cargadas correctamente');
}
// ============================================
// Inserta el logo de Unidos en el lado izquierdo
// a la misma altura/posición que Jacinta (espejo)
// ============================================
function initFooterLogo() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    if (footer.querySelector('.footer__logo-img')) return;

    const logo = document.createElement('img');
    logo.className = 'footer__logo-img';
    logo.src = 'assets/images/logo_unidos.png';
    logo.alt = 'Unidos';
    logo.style.cursor = 'pointer';

    // Asegurar posicionamiento relativo del footer si fuera necesario
    const style = window.getComputedStyle(footer);
    if (style.position === 'static') {
        footer.style.position = 'relative';
    }

    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    footer.appendChild(logo);
}


// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Optimización: recargar al cambiar tamaño de ventana (con debounce)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Cerrar menú móvil si se agranda la ventana
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ============================================
// Inserta la imagen de Jasinta en el footer para
// habilitar la misma animación y confetti que en el navbar
// ============================================
function initFooterJacinta() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    // si ya existe, no duplicar
    if (footer.querySelector('.footer__jacinta-img')) return;

    const img = document.createElement('img');
    img.className = 'footer__jacinta-img footer__jacinta--animated';
    img.src = 'assets/images/jasinta_sin_fondo.png';
    img.alt = 'Jacinta';
    img.setAttribute('data-original-src', 'assets/images/jasinta_sin_fondo.png');
    img.setAttribute('data-hover-src', 'assets/images/jasinta_canasta_sin_fondo.png');

    // Asegurar que el footer sea posicionable
    const style = window.getComputedStyle(footer);
    if (style.position === 'static') {
        footer.style.position = 'relative';
    }

    footer.appendChild(img);
}

// ============================================
// Blog: Modal con todas las noticias en scroll
// ============================================
function initBlogModals() {
    const blogBtn = document.getElementById('blogCard');
    const modal = document.getElementById('blogModal');
    if (!blogBtn || !modal) return;

    const news = [
        {
            id: 1,
            titulo: '',
            descripcion: `Entre el aroma a maíz recién asado y el calor de un fogón encendido, nace una historia que nos inspira. Ella es Doña Olga, una mujer soñadora, cabeza de hogar, que con esfuerzo y amor convirtió la venta de arepas en el motor que impulsó a su familia hacia adelante. 🌽💛
                        <br><br>En Unidos, se nos estalla el corazón de alegría al saber que hemos sido parte de historias como la suya… de sueños que se amasan con trabajo, constancia y esperanza. Porque Unidos somos más fuertes, y Unidos ganamos todos. 🤝
                        <br><br>📍Puedes encontrar a Doña Olga en el barrio Luis Carlos Galán en Cartago, Valle del Cauca y hacer tus pedidos para Caratago y  Pereira al número 311 613 2628`,
            video: 'assets/videos/blog_1.mp4'
        },
        {
            id: 2,
            titulo: '',
            descripcion: `En cada receta de Doña Zuly hay mucho más que ingredientes…<br>Hay amor, tradición y un corazón gigante que late por su gente. 💛
                        <br><br>Desde Pereira, esta emprendedora incansable ha convertido su cocina en un lugar sagrado, donde se prepara comida con alma, con sabor a hogar y con sueños que se sirven en cada plato.
                        <br><br>En Unidos, celebramos historias como la suya, porque sabemos que detrás de cada emprendimiento hay mujeres valientes que cocinan esperanza y comparten alegría.<br>Porque Unidos somos más fuertes y Unidos ganamos todos. 🤝
                        <br><br>✨ Apoya su emprendimiento: Delicias La Bonita<br>📍 Pereira, Risaralda<br>📲 Encargos al 313 654 6390<br>📸 Instagram: @delicias_la_bonita`,
            video: 'assets/videos/blog_2.mp4'
        },
        {
            id: 3,
            titulo: '',
            descripcion: `Detrás de cada sabor hay una historia hermosa… 🍦💛
                        <br><br>Ella es Doña Rubiela, una mujer de 70 años que, con amor, esfuerzo y una sonrisa que nunca falta, convirtió su casa en el corazón más dulce del barrio El Vergel, en Santa Rosa de Cabal.
                        <br><br>Su historia nos recuerda que los sueños no tienen edad, y que cuando se hacen las cosas con amor, el resultado siempre sabe mejor. 💛
                        <br><br>En Unidos, nos llena de orgullo acompañar historias como la suya, que endulzan la vida de toda una comunidad.<br>Porque Unidos somos más fuertes, y Unidos ganamos todos. 🤝
                        <br><br>📍 Encuéntrala al fondo de la calle 45B, barrio El Vergel, en Santa Rosa de Cabal, Risaralda<br>📲 Encargos para tus días especiales al whatsapp 321 591 962`,
            video: 'assets/videos/blog_3.mp4'
        },
        {
            id: 4,
            titulo: '',
            descripcion: `En cada grano de maíz hay una historia que se transmite de generación en generación.🌽💛
                        <br><br>Él es Esteban, la segunda generación de mazamorreros, un joven que con orgullo mantiene viva una de las tradiciones más queridas de nuestra tierra. Porque la mazamorra es mucho más que un antojo… es sabor, es historia, es identidad.
                        <br><br>En Unidos, nos llena de alegría seguir prolongando tradiciones tan colombianas como esta, que nos recuerdan quiénes somos y de dónde venimos.<br>Apoyar lo local es saborear nuestras raíces.✨
                        <br><br>¡Di sí a lo nuestro, di sí a la mazamorra!<br>📍 Domicilios en Pereira<br>📲 321 716 9008`,
            video: 'assets/videos/blog_4.mp4'
        }
    ];

    const allNewsContainer = document.getElementById('blogAllNews');

    // Renderizar todas las noticias completas
    function renderAllNews() {
        allNewsContainer.innerHTML = '';
        news.forEach((n, index) => {
            const article = document.createElement('article');
            article.className = 'blog-article';
            article.innerHTML = `
                <div class="blog-article__content">
                    <div class="blog-article__text">
                        <h3 class="blog-article__title">${n.titulo}</h3>
                        <p class="blog-article__desc">${n.descripcion}</p>
                    </div>
                    <div class="blog-article__video">
                        <video class="blog-video" controls preload="metadata">
                            <source src="${n.video}" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
                ${index < news.length - 1 ? '<hr class="blog-article__divider">' : ''}
            `;
            allNewsContainer.appendChild(article);
        });
    }

    function showModal(m) {
        // Asegurar fondo desde la apertura (incluida la primera noticia)
        const modalContent = m.querySelector('.modal__content');
        const modalBody = m.querySelector('.modal__body');
        if (modalContent) {
            modalContent.style.backgroundImage = "url('assets/images/fondo.jpg')";
            modalContent.style.backgroundSize = 'cover';
            modalContent.style.backgroundPosition = 'center';
        }
        if (modalBody) {
            modalBody.style.backgroundImage = "url('assets/images/fondo.jpg')";
            modalBody.style.backgroundSize = 'cover';
            modalBody.style.backgroundPosition = 'center';
            modalBody.style.backgroundAttachment = 'local';
        }

        m.classList.add('show');
        m.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Reproducir video de fondo
        const backgroundVideo = m.querySelector('.modal__background-video');
        if (backgroundVideo) {
            backgroundVideo.play().catch(err => console.log('Error reproduciendo video de fondo:', err));
        }
    }

    function hideModal(m) {
        if (!m) return;
        m.classList.remove('show');
        m.setAttribute('aria-hidden', 'true');
        
        // Pausar solo los videos de las noticias (no el de fondo)
        const newsVideos = m.querySelectorAll('.blog-video');
        newsVideos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        
        document.body.style.overflow = '';
    }

    // Botones de cierre
    document.querySelectorAll('.modal__close').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-close');
            if (target) hideModal(document.getElementById(target));
        });
    });

    // Cerrar al hacer click fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal(modal);
    });

    // Esc para cerrar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal(modal);
        }
    });

    // Abrir modal desde la carta de Blog
    blogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderAllNews();
        showModal(modal);
    });
}

// ============================================
// Modal de Categorías de Productos
// ============================================
function initCategoriesModal() {
    const categoriesBtn = document.getElementById('categoriesCard');
    const modal = document.getElementById('categoriesModal');
    
    if (!categoriesBtn || !modal) return;

    function showModal(m) {
        m.classList.add('show');
        m.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function hideModal(m) {
        if (!m) return;
        m.classList.remove('show');
        m.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Botón de cierre
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            hideModal(modal);
        });
    }

    // Cerrar al hacer click fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal(modal);
    });

    // Esc para cerrar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal(modal);
        }
    });

    // Abrir modal desde la carta de Categorías
    categoriesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(modal);
    });
}
