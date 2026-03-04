# Instrucciones de Configuración - VM Digital Studio

## 🚦 Para Enrique

Ejecutá estos comandos para poner el proyecto en marcha:

### 1️⃣ Habilitar Scripts en PowerShell (una sola vez)

Abrí PowerShell como **Administrador** y ejecutá:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Confirmá con `S` (Sí).

### 2️⃣ Instalar Dependencias

Desde la carpeta del proyecto:

```bash
npm install
```

### 3️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio se abrirá automáticamente en `http://localhost:3000`

---

## ✅ Lo que está listo

- ✅ React 19 + Vite configurado
- ✅ Tailwind CSS 4.0 configurado
- ✅ React Router DOM funcionando
- ✅ 3 páginas completas (Home, Portfolio, Pricing)
- ✅ Navbar responsive con navegación
- ✅ Footer completo
- ✅ Scroll automático entre páginas
- ✅ Design system consistente

## 🎨 Páginas Disponibles

- `/` → Home Page
- `/portfolio` → Portfolio con filtros
- `/planes` → Pricing Page

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview
```

## 📝 Próximos Pasos Opcionales

1. **Links funcionales WhatsApp**: Actualizar href en botones CTAcon número real
2. **Formularios**: Agregar contact form con envío de emails
3. **Analytics**: Google Analytics / Meta Pixel
4. **Deploy**: Vercel o Netlify (un click)

---

Si hay algún error, avisame y lo resolvemos juntos.
