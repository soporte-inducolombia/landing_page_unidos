// JavaScript para la página de Contáctanos

// Función para toggle de FAQs
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-item__answer');
    const isActive = button.classList.contains('active');
    
    // Cerrar todos los FAQs abiertos
    document.querySelectorAll('.faq-item__question').forEach(q => {
        q.classList.remove('active');
    });
    document.querySelectorAll('.faq-item__answer').forEach(a => {
        a.classList.remove('active');
    });
    
    // Si no estaba activo, abrirlo
    if (!isActive) {
        button.classList.add('active');
        answer.classList.add('active');
    }
}

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        console.log('✅ Formulario listo - Envío AJAX a Formspree');
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevenir redirección
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Deshabilitar botón y mostrar estado de carga
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            try {
                // Obtener datos del formulario
                const formData = new FormData(contactForm);
                
                // Enviar a Formspree mediante AJAX
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Éxito - Mostrar mensaje y limpiar formulario
                    showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
                    contactForm.reset();
                } else {
                    // Error del servidor
                    const data = await response.json();
                    if (data.errors) {
                        showNotification(data.errors.map(error => error.message).join(', '), 'error');
                    } else {
                        showNotification('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
                    }
                }
            } catch (error) {
                // Error de red o conexión
                console.error('Error:', error);
                showNotification('Error de conexión. Por favor, verifica tu internet e intenta de nuevo.', 'error');
            } finally {
                // Restaurar botón
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }
});

// Validación del formulario (ya no se usa, pero se mantiene por si se necesita en el futuro)
function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (data.name.length < 3) {
        showNotification('Por favor, ingresa un nombre válido (mínimo 3 caracteres).', 'error');
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, ingresa un correo electrónico válido.', 'error');
        return false;
    }
    
    if (data.message.length < 10) {
        showNotification('El mensaje debe tener al menos 10 caracteres.', 'error');
        return false;
    }
    
    return true;
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Remover notificaciones anteriores
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Estilos inline
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: colors[type] || colors.info,
        color: 'white',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '350px',
        fontWeight: '500',
        fontSize: '0.95rem',
        lineHeight: '1.5'
    });
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);
