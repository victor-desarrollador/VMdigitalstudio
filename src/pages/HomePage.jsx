import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Zap,
    Globe,
    ShoppingCart,
    Target,
    TrendingUp,
    Code,
    Headphones,
    Search,
    Palette,
    Rocket,
    CheckCircle,
    Star,
    MessageCircle,
    Calendar,
    ChevronDown,
    ArrowRight
} from 'lucide-react';

// ═══════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════

const services = [
    {
        id: 'landing',
        icon: Zap,
        title: 'Landing Pages',
        description: 'Presencia online rápida, profesional y optimizada para conversión.',
        color: 'from-[#B11226] to-[#8F0E1E]'
    },
    {
        id: 'websites',
        icon: Globe,
        title: 'Sitios Web Profesionales',
        description: 'Webs corporativas sólidas para empresas y marcas en crecimiento.',
        color: 'from-[#1E1E1E] to-[#2D2D2D]'
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'Ecommerce',
        description: 'Tiendas online completas con pagos, envíos y automatización.',
        color: 'from-[#10B981] to-[#059669]'
    }
];

const whyChooseUs = [
    {
        icon: Target,
        title: 'Diseño Estratégico',
        description: 'Cada elemento tiene un propósito. Diseñamos pensando en tus objetivos de negocio, no solo en estética.'
    },
    {
        icon: TrendingUp,
        title: 'Enfoque en Conversión',
        description: 'Optimizamos cada sección para convertir visitantes en clientes. UX pensado para resultados medibles.'
    },
    {
        icon: Code,
        title: 'Tecnología Moderna',
        description: 'React, Node.js, y las mejores prácticas de desarrollo. Performance, seguridad y escalabilidad garantizada.'
    },
    {
        icon: Headphones,
        title: 'Soporte Personalizado',
        description: 'Comunicación directa y fluida. Te acompañamos en cada etapa del proyecto y post-lanzamiento.'
    }
];

const processSteps = [
    {
        number: '01',
        title: 'Estrategia',
        description: 'Entendemos tu negocio, objetivos y audiencia para diseñar la estrategia ideal.',
        icon: Search
    },
    {
        number: '02',
        title: 'Diseño',
        description: 'Creamos wireframes y diseños profesionales alineados con tu marca.',
        icon: Palette
    },
    {
        number: '03',
        title: 'Desarrollo',
        description: 'Implementamos con código limpio, optimizado y siguiendo las mejores prácticas.',
        icon: Code
    },
    {
        number: '04',
        title: 'Lanzamiento',
        description: 'Deployment, testing final y entrega con documentación completa.',
        icon: Rocket
    }
];

const testimonials = [
    {
        name: 'María González',
        role: 'Fundadora - Estudio Jurídico',
        rating: 5,
        text: 'Increíble trabajo. Mi web no solo se ve profesional, sino que genera consultas reales cada semana. La inversión se pagó sola.',
        avatar: 'MG'
    },
    {
        name: 'Carlos Ramírez',
        role: 'CEO - TechSolutions',
        rating: 5,
        text: 'Profesionalismo de primer nivel. Cumplieron tiempos, escucharon nuestras necesidades y entregaron exactamente lo que pedimos.',
        avatar: 'CR'
    },
    {
        name: 'Laura Martínez',
        role: 'Dueña - Tienda Online',
        rating: 5,
        text: 'Mi ecommerce está funcionando perfecto. El panel es súper fácil de usar y mis ventas crecieron un 40% en dos meses.',
        avatar: 'LM'
    }
];

// ═══════════════════════════════════════════
// REUSABLE COMPONENTS
// ═══════════════════════════════════════════

const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden"
        >
            {/* Glow / blur de fondo */}
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-[#B11226]/6 via-transparent to-[#8F0E1E]/8 opacity-0 blur-[100px] group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-[#000]/20 group-hover:shadow-[#B11226]/40 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <IconComponent className="relative w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#020617] mb-3 tracking-tight">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* CTA Link */}
                <Link
                    to="/planes"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#B11226] group-hover:text-[#8F0E1E] transition-all duration-300"
                >
                    <span className="relative">
                        <span className="relative z-10">Ver planes</span>
                        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#B11226] to-[#8F0E1E] opacity-60 group-hover:opacity-100" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const ValueCard = ({ item }) => {
    const IconComponent = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="group relative text-center md:text-left rounded-2xl overflow-hidden"
        >
            {/* Glow de fondo */}
            <div className="pointer-events-none absolute -inset-5 bg-gradient-to-br from-[#B11226]/8 via-transparent to-[#8F0E1E]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-7 shadow-xl border border-gray-200 group-hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#B11226] to-[#8F0E1E] mb-4 shadow-lg shadow-[#B11226]/25 group-hover:shadow-[#B11226]/40 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#020617] mb-3">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

const ProcessStep = ({ step, index, isLast }) => {
    const IconComponent = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center text-center group"
        >
            {/* Connector line (desktop only) */}
            {!isLast && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#B11226] to-transparent z-0 opacity-60" />
            )}

            {/* Icon Circle */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#B11226] to-[#8F0E1E] flex items-center justify-center mb-4 shadow-xl shadow-[#B11226]/30">
                <IconComponent className="w-8 h-8 text-white" />
            </div>

            {/* Step Number */}
            <div className="text-sm font-bold text-[#B11226] mb-2">
                {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
                {step.description}
            </p>
        </motion.div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#B11226]/10 to-[#8F0E1E]/20 blur-3xl" />
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B11226] text-[#B11226]" />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-[#1E1E1E] leading-relaxed mb-6 italic">
                "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B11226] to-[#8F0E1E] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                </div>

                {/* Name and Role */}
                <div>
                    <div className="font-bold text-[#1E1E1E]">
                        {testimonial.name}
                    </div>
                    <div className="text-sm text-[#6B7280]">
                        {testimonial.role}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const HomePage = () => {
    // Framer Motion variants para stagger en el hero
    const heroContainer = {
        hidden: { opacity: 0, y: 32 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                staggerChildren: 0.12
            }
        }
    };

    const heroItem = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Gradient mesh + grid background */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FAFAFA] overflow-hidden">
                    <div className="absolute top-0 md:-top-40 left-0 md:-left-32 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-[140px] mix-blend-multiply" />
                    <div className="absolute bottom-0 md:-bottom-32 right-0 md:-right-10 w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-[140px] mix-blend-multiply" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[140px] mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb44_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb44_1px,transparent_1px)] bg-[size:72px_72px] mix-blend-soft-light opacity-60" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* Left Column - Content */}
                        <motion.div
                            variants={heroContainer}
                            initial="hidden"
                            animate="visible"
                            className="space-y-10"
                        >
                            <motion.div
                                variants={heroItem}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#E5E7EB]/80 shadow-sm"
                            >
                                <span className="inline-flex h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#6B7280]">
                                    Presencia digital estratégica
                                </span>
                            </motion.div>

                            <motion.div variants={heroItem} className="space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-[#020617]">
                                    Llevá tu negocio al{' '}
                                    <span className="bg-gradient-to-r from-[#B11226] via-[#F97316] to-[#8F0E1E] bg-clip-text text-transparent">
                                        mundo digital
                                    </span>{' '}
                                    de forma profesional
                                </h1>
                            </motion.div>

                            {/* Trust Metrics / Social Proof Badges */}
                            <motion.div 
                                variants={heroItem}
                                className="flex flex-wrap items-center gap-4 py-2"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm">
                                    <TrendingUp className="w-4 h-4 text-red-600" />
                                    <span className="text-sm font-semibold text-gray-800">+20 proyectos realizados</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm">
                                    <Globe className="w-4 h-4 text-red-600" />
                                    <span className="text-sm font-semibold text-gray-800">Clientes en 3 países</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-semibold text-gray-800">98% satisfacción</span>
                                </div>
                            </motion.div>

                            <motion.p
                                variants={heroItem}
                                className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-xl"
                            >
                                Desarrollo páginas web modernas y a medida para negocios y emprendedores que quieren empezar su presencia online y crecer sin limitaciones técnicas.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                variants={heroItem}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="sm:w-auto w-full"
                                >
                                    <Link
                                        to="/contacto"
                                        className="group w-full inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(185,28,28,0.35)] hover:scale-105 transition-all duration-300"
                                    >
                                        <span className="mr-2">Hablemos de tu proyecto</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="sm:w-auto w-full"
                                >
                                    <Link
                                        to="/planes"
                                        className="w-full inline-flex items-center justify-center rounded-2xl border border-[#B11226]/60 text-[#B11226] px-8 py-4 font-semibold bg-white/80 hover:bg-[#B11226] hover:text-white shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        Ver planes y servicios
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                variants={heroItem}
                                className="flex flex-wrap gap-6 pt-8 border-t border-[#E5E7EB]/80"
                            >
                                <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Acompañamiento personalizado</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Desarrollo a medida</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Web preparada para crecer</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
                            className="relative"
                        >
                            {/* Glow detrás del mockup */}
                            <div className="pointer-events-none absolute -top-10 right-0 w-56 h-56 bg-gradient-to-br from-[#F97316]/25 via-[#B11226]/25 to-[#4B5563]/20 blur-3xl" />

                            {/* Floating mockup card stack */}
                            <div className="relative max-w-lg mx-auto">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl border border-[#E5E7EB]/80 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#F3F4F6]" />
                                    <div className="relative p-6 sm:p-8 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#B11226]" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                                            </div>
                                            <div className="h-6 px-3 rounded-full bg-[#F3F4F6] text-[11px] font-medium text-[#6B7280] flex items-center">
                                                Proyecto en producción
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="h-6 w-32 rounded-full bg-gradient-to-r from-[#B11226] to-[#8F0E1E] opacity-80" />
                                            <div className="space-y-2">
                                                <div className="h-2.5 rounded-full bg-[#E5E7EB]" />
                                                <div className="h-2.5 rounded-full bg-[#E5E7EB]/90 w-5/6" />
                                                <div className="h-2.5 rounded-full bg-[#E5E7EB]/70 w-2/3" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 pt-2">
                                            <div className="rounded-2xl border border-[#E5E7EB] bg-white/80 p-3 shadow-sm">
                                                <p className="text-[11px] text-[#6B7280] mb-1">Tiempo de carga</p>
                                                <p className="text-lg font-semibold text-[#16A34A]">0.9s</p>
                                            </div>
                                            <div className="rounded-2xl border border-[#E5E7EB] bg-white/80 p-3 shadow-sm">
                                                <p className="text-[11px] text-[#6B7280] mb-1">Conversiones</p>
                                                <p className="text-lg font-semibold text-[#B11226]">+38%</p>
                                            </div>
                                            <div className="rounded-2xl border border-[#E5E7EB] bg-white/80 p-3 shadow-sm">
                                                <p className="text-[11px] text-[#6B7280] mb-1">Páginas</p>
                                                <p className="text-lg font-semibold text-[#111827]">5</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Layer inferior glass para profundidad */}
                                <motion.div
                                    animate={{ y: [6, -4, 6] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute -bottom-10 -left-6 right-8 h-32 rounded-3xl bg-white/50 backdrop-blur-xl border border-[#E5E7EB]/70 shadow-xl -z-10"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center mt-16">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex flex-col items-center gap-3 text-[#9CA3AF]"
                        >
                            <span className="text-xs tracking-[0.28em] uppercase font-medium">
                                Scroll
                            </span>
                            <ChevronDown className="w-6 h-6 text-[#B11226]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
                            Soluciones Digitales{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                Completas
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                            Todo lo que necesitás para tener presencia profesional en internet
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.08, duration: 0.5 }
                            }
                        }}
                        className="grid md:grid-cols-3 gap-8 lg:gap-10"
                    >
                        {services.map((service) => (
                            <motion.div key={service.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <ServiceCard service={service} />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          WHY CHOOSE US SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -bottom-24 left-10 w-72 h-72 bg-[#B11226]/6 rounded-full blur-3xl" />
                    <div className="absolute -top-20 right-10 w-64 h-64 bg-[#0EA5E9]/6 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
                            ¿Por qué trabajar{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                conmigo?
                            </span>
                        </h2>
                    </motion.div>

                    {/* Value Props Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.08, duration: 0.5 }
                            }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
                    >
                        {whyChooseUs.map((item, index) => (
                            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <ValueCard item={item} />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          PROCESS SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
                            Nuestro{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                Proceso
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                            Metodología probada de 4 etapas para entregarte resultados
                        </p>
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.08, duration: 0.5 }
                            }
                        }}
                        className="grid md:grid-cols-4 gap-10 md:gap-8"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <ProcessStep
                                    step={step}
                                    index={index}
                                    isLast={index === processSteps.length - 1}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SOCIAL PROOF SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-x-10 -top-32 h-64 bg-gradient-to-b from-white via-transparent to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
                            Proyectos que generan{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                resultados
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                            Lo que dicen nuestros clientes
                        </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.08, duration: 0.5 }
                            }
                        }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <TestimonialCard testimonial={testimonial} />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#111827] text-white relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-24 right-10 w-80 h-80 bg-[#B11226]/25 blur-3xl" />
                    <div className="absolute -bottom-24 left-0 w-72 h-72 bg-[#0EA5E9]/25 blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
                    >
                        ¿Listo para tener una web que{' '}
                        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                            realmente genere clientes?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
                    >
                        Transformá tus visitantes en clientes con un diseño enfocado en la conversión.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        {/* Primary CTA */}
                        <motion.div className="w-full sm:w-auto">
                            <Link
                                to="/contacto"
                                className="w-full inline-flex justify-center items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(185,28,28,0.35)] hover:scale-105 transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5 mr-3" />
                                Solicitar mi página web profesional
                            </Link>
                        </motion.div>

                        {/* WhatsApp CTA */}
                        <motion.div className="w-full sm:w-auto">
                            <a
                                href="https://wa.me/5493815000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex justify-center items-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(5,150,105,0.3)] hover:scale-105 transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 mr-3" />
                                Contactar por WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default HomePage;
