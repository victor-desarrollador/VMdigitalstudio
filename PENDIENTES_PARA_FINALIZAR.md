# 📋 Estado del Proyecto: Tareas Pendientes para el 100%

Este documento detalla los elementos necesarios para llevar el proyecto de "VM Digital Studio" a un estado de **producción final (100% funcional)**.

---

## 🔴 1. Funcionalidad Crítica (Backend & Integraciones)

Actualmente, los formularios y botones de contacto son visuales o simulados. Se requiere integración real.

- [ ] **Formulario de Contacto:**
    - Integrar servicio de envío de emails (ej: **EmailJS**, **Formspree** o backend propio).
    - Configurar plantillas de correo para:
        - Aviso al administrador (Nuevo lead).
        - Confirmación automática al usuario ("Gracias por contactarnos").
- [ ] **WhatsApp:**
    - Reemplazar el número simulado (`5493815000000`) por el número real de atención al cliente en todos los enlaces (`Navbar`, `Footer`, `HomePage`, `PricingPage`, `ContactPage`).
    - Configurar mensajes predefinidos en los links (ej: `?text=Hola,%20quisiera%20más%20información...`).

## 🟠 2. Páginas Faltantes (Legal & Error)

Para cumplir con normativas y mejorar la UX, faltan páginas estándar.

- [ ] **Página de Error 404:**
    - Crear `NotFoundPage.jsx` con diseño coherente para rutas inexistentes, con botón para volver al inicio.
- [ ] **Páginas Legales:**
    - Crear `PrivacyPolicy.jsx` (Política de Privacidad).
    - Crear `TermsOfService.jsx` (Términos de Servicio).
    - Enlazar correctamente en el `Footer`.

## 🟡 3. SEO y Metadatos

El sitio necesita ser visible y atractivo para Google y redes sociales.

- [ ] **Metadatos Dinámicos:**
    - Implementar `react-helmet-async` para cambiar el `<title>` y `<meta description>` en cada página.
    - Ej: "Inicio - VM Digital Studio", "Precios y Planes - VM Digital Studio".
- [ ] **Open Graph (Redes Sociales):**
    - Configurar imágenes y títulos para cuando se comparte el link en WhatsApp/Facebook/LinkedIn.
- [ ] **Favicon:**
    - Reemplazar el logo de Vite por el favicon real de VM Digital Studio.
- [ ] **Sitemap & Robots.txt:**
    - Generar archivos para indexación en Google Search Console.

## 🔵 4. Contenido Real

Reemplazar cualquier contenido "placeholder" restante.

- [ ] **Redes Sociales:**
    - Actualizar links de LinkedIn, Instagram, GitHub en el `Footer` con las URLs reales de la agencia.
- [ ] **Ubicación:**
    - Si aplica, enlazar "Argentina" en el footer a Google Maps o dejar solo texto.
- [ ] **Imágenes de Portfolio:**
    - (Opcional) Reemplazar los gráficos SVG/CSS por capturas reales de proyectos si se cuenta con ellas.

## 🟣 5. Analytics & Scripts

Para medir el rendimiento del sitio.

- [ ] **Google Analytics 4 / Google Tag Manager:**
    - Insertar el script de seguimiento en `index.html` o mediante un componente.
- [ ] **Pixel de Meta (Opcional):**
    - Si se planea hacer publicidad en Facebook/Instagram.

## 🚀 6. Despliegue (Deployment)

Pasos finales para salir en vivo.

- [ ] **Hosting:**
    - Subir el proyecto a Vercel o Netlify (Recomendado para React/Vite).
- [ ] **Dominio:**
    - Configurar dominio personalizado (ej: `www.vmdigitalstudio.com`).
- [ ] **Certificado SSL:**
    - Verificar activación (automático en Vercel/Netlify).

---

### 📅 Resumen de Prioridades

1.  **Alta:** Integración de Formulario y WhatsApp (Sin esto, no hay leads).
2.  **Media:** Página 404, SEO básico y Links reales.
3.  **Baja:** Analytics y Páginas legales (dependiendo de la urgencia legal).
