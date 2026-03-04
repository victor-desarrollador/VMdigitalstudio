# VM Digital Studio

Sitio web profesional para agencia de desarrollo y diseño web.

## 🚀 Stack Tecnológico

- **React 19** - Framework UI moderno
- **Vite** - Build tool ultra-rápido
- **React Router DOM** - Navegación SPA
- **Tailwind CSS 4.0** - Utility-first CSS
- **Lucide React** - Iconografía moderna

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Páginas principales
│   │   ├── HomePage.jsx
│   │   ├── PortfolioPage.jsx
│   │   └── PricingPage.jsx
│   ├── App.jsx          # Componente raíz con routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globales
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design System

- **Primary Dark:** #1E1E1E
- **Accent Red:** #B11226
- **Accent Red Hover:** #8F0E1E
- **Success Green:** #10B981
- **Background:** #FFFFFF
- **Section Background:** #F8F9FA

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## 📄 Páginas

- **Home** (`/`) - Página principal con hero, servicios, proceso, testimonials
- **Portfolio** (`/portfolio`) - Showcaseportfolio interactivo con filtros
- **Planes** (`/planes`) - Pricing con 3 planes detallados

## 🌐 Navegación

El proyecto usa React Router con:
- Navegación suave entre páginas
- Scroll to top automático
- Active states en navbar
- Mobile menu responsive

## 🎯 Features

- ✅ Mobile-first responsive design
- ✅ SEO optimizado
- ✅ Performance (Core Web Vitals)
- ✅ Accesibilidad WCAG AA
- ✅ Animaciones sutiles
- ✅ Loading states
- ✅ Navegación fluida

## 📝 Notas

- Las páginas son completamente funcionales y listas para producción
- Los botones de CTA están listos para conectar con WhatsApp/formularios
- El design system es consistente en todo el proyecto
- Código limpio, modular y escalable

## 🚀 Deployment

Recomendado para deploy:
- **Vercel** (recomendado para Vite + React)
- **Netlify**
- **GitHub Pages**

```bash
# Build
npm run build

# La carpeta dist/ está lista para deployment
```

---

Desarrollado con ❤️ por VM Digital Studio
