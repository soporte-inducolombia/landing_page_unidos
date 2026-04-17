# Landing Page - Unidos

Sitio web oficial de Unidos, construido con HTML, CSS y JavaScript vanilla siguiendo las mejores prácticas de desarrollo web. Una landing page moderna, responsive y optimizada para ofrecer la mejor experiencia de usuario.

## 🚀 Características

- ✅ Diseño moderno y atractivo con identidad corporativa
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y profesionales
- ✅ Navegación móvil con hamburger menu
- ✅ Múltiples páginas interconectadas
- ✅ Formulario de contacto con validación
- ✅ **Feed de Instagram integrado y responsive**
- ✅ Animación interactiva de la mascota Jasinta con confetti
- ✅ Sistema de navegación consistente entre páginas
- ✅ Código limpio y bien organizado
- ✅ Variables CSS para fácil personalización
- ✅ Optimizado para rendimiento
- ✅ SEO friendly

## 📁 Estructura del Proyecto

```
landing_page_unidos/
├── index.html                  # Página principal
├── supermercados.html          # Página de supermercados
├── nosotros.html              # Página sobre la empresa
├── blog.html                  # Página de blog/noticias
├── contactanos.html           # Página de contacto
├── send_email.php             # Script para envío de emails
├── assets/
│   ├── css/
│   │   ├── normalize.css      # Reset CSS
│   │   ├── variables.css      # Variables CSS globales
│   │   ├── styles.css         # Estilos principales
│   │   ├── responsive.css     # Media queries responsive
│   │   ├── supermercados.css  # Estilos página supermercados
│   │   └── contactanos.css    # Estilos página contacto
│   ├── js/
│   │   ├── main.js           # JavaScript principal
│   │   ├── supermercados.js  # JS página supermercados
│   │   └── contactanos.js    # JS página contacto
│   ├── images/               # Imágenes del sitio
│   │   ├── logo_unidos.png
│   │   ├── jasinta_sin_fondo.png
│   │   ├── jasinta_canasta_sin_fondo.png
│   │   ├── cauca.jpg
│   │   ├── caldas.jpg
│   │   ├── quindio.jpeg
│   │   ├── risaralda.jpg
│   │   └── tolima.jpg
│   └── videos/
│       ├── unidos_index.mp4   # Video página principal
│       └── unidos_historia.mp4 # Video página nosotros
└── README.md                  # Este archivo
```

## 🎨 Páginas del Sitio

### 1. **Página Principal (index.html)**
   - Hero section con video de fondo
   - Sección de características
   - Feed de Instagram responsive
   - Animación de Jacinta con confetti
   - Footer informativo

### 2. **Supermercados (supermercados.html)**
   - Mapa interactivo de ubicaciones
   - Grid de supermercados por departamento
   - Información de cada sede
   - Imágenes representativas de cada región

### 3. **Nosotros (nosotros.html)**
   - Historia de la empresa
   - Video institucional
   - Valores corporativos
   - Misión y visión

### 4. **Blog (blog.html)**
   - Grid de artículos y noticias
   - Sistema de categorías
   - Diseño de tarjetas responsive
   - Enlaces a contenido completo

### 5. **Contáctanos (contactanos.html)**
   - Formulario de contacto funcional
   - Validación de campos en tiempo real
   - Feedback visual para el usuario
   - Información de contacto

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades interactivas
- **CSS Variables**: Sistema de diseño consistente
- **Intersection Observer API**: Animaciones on scroll
- **PHP**: Backend para formulario de contacto
- **Instagram Basic Display API**: Integración con redes sociales

## 📱 Responsive Design

El sitio está completamente optimizado para todos los dispositivos:

- **Móviles pequeños**: hasta 480px
- **Móviles grandes**: 481px - 768px
- **Tablets**: 769px - 1024px
- **Desktop**: 1025px - 1536px
- **Desktop grande**: 1537px+

Características responsive:
- Menú hamburguesa en móviles
- Grid adaptativo de contenido
- Imágenes optimizadas por dispositivo
- Videos responsivos
- Formularios adaptados
- Feed de Instagram con columnas dinámicas

## 🎯 Características de JavaScript

- **Navegación**: 
  - Menú móvil con toggle
  - Smooth scroll entre secciones
  - Cierre automático del menú
  - Navegación consistente entre páginas

- **Animaciones**:
  - Intersection Observer para efectos on scroll
  - Sistema de confetti para Jasinta
  - Transiciones suaves entre estados

- **Formularios**:
  - Validación en tiempo real
  - Feedback visual de errores
  - Mensajes de confirmación

- **Instagram**:
  - Fallback con animación de carga
  - Sistema de caché

- **Performance**:
  - Lazy loading de imágenes
  - Optimización de eventos
  - Debouncing en scroll

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/soporte-tesltda/landing_page_unidos.git
   cd landing_page_unidos
   ```

2. **Configurar servidor local**
   
   Opción 1 - Python:
   ```bash
   python -m http.server 8000
   ```
   
   Opción 2 - PHP:
   ```bash
   php -S localhost:8000
   ```
   
   Opción 3 - Node.js:
   ```bash
   npx http-server
   ```

3. **Acceder al sitio**
   ```
   http://localhost:8000
   ```

## 🎨 Personalización

### Colores Corporativos

Edita `assets/css/variables.css`:

```css
:root {
    --color-primary: #E31E24;      /* Rojo Unidos */
    --color-secondary: #FFD700;     /* Amarillo Unidos */
    --color-accent: #00A651;        /* Verde Unidos */
    --color-dark: #1a1a1a;         /* Negro corporativo */
}
```

### Fuentes

```css
:root {
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
}
```

### Espaciados

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
}
```

## 📝 Mejores Prácticas Implementadas

1. ✅ **HTML Semántico**: Uso de etiquetas apropiadas
2. ✅ **CSS Modular**: Archivos separados por función
3. ✅ **BEM Methodology**: Nomenclatura consistente
4. ✅ **Mobile First**: Diseño desde móviles
5. ✅ **Accesibilidad**: ARIA labels, alt text, contraste
6. ✅ **Performance**: Imágenes optimizadas, código minificado
7. ✅ **SEO**: Meta tags, estructura semántica, URLs limpias
8. ✅ **Clean Code**: Código documentado y mantenible
9. ✅ **Git Flow**: Control de versiones profesional
10. ✅ **Responsive**: Adaptable a todos los dispositivos

## 🔧 Funcionalidades Implementadas

- [x] Página principal responsive
- [x] Sistema de navegación multi-página
- [x] Página de supermercados con mapa
- [x] Página institucional (Nosotros)
- [x] Blog/Noticias
- [x] Formulario de contacto funcional
- [x] Integración con Instagram
- [x] Animaciones interactivas (Jasinta + confetti)
- [x] Videos institucionales
- [x] Footer informativo
- [x] Optimización responsive completa

## 🔮 Mejoras Futuras

- [ ] Modo oscuro (dark mode)
- [ ] Sistema de búsqueda interno
- [ ] Carrito de compras online
- [ ] Panel de administración
- [ ] PWA (Progressive Web App)
- [ ] Múltiples idiomas (i18n)
- [ ] Chat en vivo
- [ ] Sistema de ofertas destacadas


## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature:
   ```bash
   git checkout -b feature/NuevaCaracteristica
   ```
3. Commit tus cambios:
   ```bash
   git commit -m 'Agrega nueva característica'
   ```
4. Push a la rama:
   ```bash
   git push origin feature/NuevaCaracteristica
   ```
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de Unidos. Todos los derechos reservados.

## ⭐ Soporte

Si tienes preguntas o necesitas soporte, por favor contacta al equipo de desarrollo.

---

**Desarrollado por TES LTDA Team (D&N)**
