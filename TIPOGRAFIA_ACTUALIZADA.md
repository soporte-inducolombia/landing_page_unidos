# Actualización de Tipografía - Proyecto Unidos

## 📝 Resumen de Cambios

Se ha implementado el nuevo sistema de tipografía en todo el proyecto, utilizando:

### Fuentes Principales

1. **FOCO BOLD**
   - Uso: Encabezados y títulos de productos
   - Variable CSS: `--font-family-heading`
   - Aplicado en: Títulos principales, navbar, botones, títulos de secciones

2. **Century Gothic Regular**
   - Uso: Textos largos e información complementaria
   - Variable CSS: `--font-family-body`
   - Aplicado en: Párrafos, descripciones, subtítulos, formularios

## 🎨 Variables CSS Actualizadas

```css
/* Fuentes */
--font-family-heading: 'Foco', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-body: 'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif;
--font-family-primary: 'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif;
--font-family-secondary: 'Foco', -apple-system, BlinkMacSystemFont, sans-serif;
```

## 📂 Archivos Modificados

### 1. **variables.css**
- ✅ Importación de fuente FOCO desde CDN
- ✅ Definición de variables de tipografía
- ✅ Fallbacks para compatibilidad

### 2. **styles.css**
- ✅ `body` → Century Gothic
- ✅ `.section__title` → FOCO BOLD
- ✅ `.section__subtitle` → Century Gothic
- ✅ `.hero__title` → FOCO BOLD
- ✅ `.hero__subtitle` → FOCO BOLD
- ✅ `.hero__description` → Century Gothic
- ✅ `.navbar__link` → FOCO BOLD
- ✅ `.btn` → FOCO BOLD
- ✅ `.feature-card__title` → FOCO BOLD
- ✅ `.feature-card__description` → Century Gothic
- ✅ `.about__text` → Century Gothic

### 3. **historia.css**
- ✅ `.historia-hero__title` → FOCO BOLD
- ✅ `.historia-hero__subtitle` → Century Gothic
- ✅ `.valor-card h3` → FOCO BOLD
- ✅ `.valor-card p` → Century Gothic
- ✅ `.cta-title` → FOCO BOLD
- ✅ `.cta-description` → Century Gothic

### 4. **contactanos.css**
- ✅ `.page-hero__title` → FOCO BOLD
- ✅ `.page-hero__subtitle` → Century Gothic
- ✅ `.faq-section__title` → FOCO BOLD
- ✅ `.form-section__title` → FOCO BOLD
- ✅ `.form-section__subtitle` → Century Gothic
- ✅ `.form__input, .form__textarea` → Century Gothic

### 5. **supermercados.css**
- ✅ `.page-hero__title` → FOCO BOLD
- ✅ `.page-hero__subtitle` → Century Gothic
- ✅ `.departamento-card__title` → FOCO BOLD
- ✅ `.departamento-card__subtitle` → Century Gothic
- ✅ `.modal__title` → FOCO BOLD

## 🎯 Aplicación por Tipo de Elemento

### FOCO BOLD (Encabezados)
- Todos los `h1, h2, h3, h4, h5, h6`
- Títulos de sección (`.section__title`)
- Títulos de hero (`.hero__title`)
- Títulos de productos/tarjetas
- Enlaces del navbar
- Botones (`.btn`)
- Títulos de modales
- CTA (Call to Action) títulos

### Century Gothic Regular (Textos)
- Texto del body
- Párrafos y descripciones
- Subtítulos
- Textos de formularios (inputs, textareas)
- Información complementaria
- Descripciones de tarjetas

## ✨ Beneficios

1. **Jerarquía Visual Clara**: FOCO BOLD destaca los elementos importantes
2. **Legibilidad Mejorada**: Century Gothic facilita la lectura de textos largos
3. **Consistencia**: Sistema uniforme en todas las páginas
4. **Profesionalismo**: Tipografía moderna y limpia
5. **Branding**: Coherencia con la identidad visual de Unidos

## 📱 Compatibilidad

- ✅ Fallbacks incluidos para navegadores antiguos
- ✅ Fuentes del sistema como alternativas
- ✅ Responsive en todos los dispositivos
- ✅ Optimizado para rendimiento

## 🔄 Próximos Pasos

Si necesitas ajustar algún elemento específico o añadir más variantes de peso de fuente, las variables CSS facilitan cambios globales rápidos.

---

**Fecha de implementación**: 23 de octubre de 2025
**Versión**: 2.0
