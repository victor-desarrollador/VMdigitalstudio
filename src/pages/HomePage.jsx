import React from 'react';
import { Link } from 'react-router-dom';
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
        title: 'Análisis',
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
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#E5E7EB]">
            {/* Icon with gradient background */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#6B7280] leading-relaxed mb-6">
                {service.description}
            </p>

            {/* CTA Link */}
            <Link to="/planes" className="text-[#B11226] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                Ver planes
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
};

const ValueCard = ({ item }) => {
    const IconComponent = item.icon;

    return (
        <div className="text-center md:text-left">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#B11226] to-[#8F0E1E] mb-4">
                <IconComponent className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#6B7280] leading-relaxed">
                {item.description}
            </p>
        </div>
    );
};

const ProcessStep = ({ step, index, isLast }) => {
    const IconComponent = step.icon;

    return (
        <div className="relative flex flex-col items-center text-center">
            {/* Connector line (desktop only) */}
            {!isLast && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#B11226] to-transparent z-0" />
            )}

            {/* Icon Circle */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#B11226] to-[#8F0E1E] flex items-center justify-center mb-4 shadow-lg">
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
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-shadow duration-300">
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
        </div>
    );
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] tracking-tight leading-tight">
                                    Impulsamos negocios al{' '}
                                    <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                        mundo digital
                                    </span>
                                </h1>

                                <p className="text-xl text-[#6B7280] leading-relaxed max-w-xl">
                                    Diseñamos sitios web estratégicos que convierten visitantes en clientes.
                                </p>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/planes" className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                                    Ver Planes
                                </Link>

                                <Link to="/contacto" className="border-2 border-[#B11226] text-[#B11226] px-8 py-4 rounded-xl font-semibold hover:bg-[#B11226] hover:text-white transition-all duration-300 text-center">
                                    Solicitar Consulta
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#E5E7EB]">
                                <div className="flex items-center gap-2 text-[#6B7280]">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Hosting incluido</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#6B7280]">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Entrega garantizada</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#6B7280]">
                                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    <span>Soporte 30 días</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual */}
                        <div className="relative">
                            {/* Geometric background */}
                            <div className="relative aspect-square max-w-lg mx-auto">
                                {/* Abstract shapes */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#B11226]/10 to-[#8F0E1E]/10 rounded-3xl rotate-6 blur-2xl" />
                                <div className="absolute inset-0 bg-gradient-to-tl from-[#10B981]/10 to-transparent rounded-3xl -rotate-6 blur-2xl" />

                                {/* Center element */}
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#E5E7EB] flex items-center justify-center">
                                        <Globe className="w-32 h-32 text-[#B11226] opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center mt-16">
                        <ChevronDown className="w-8 h-8 text-[#B11226] animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] tracking-tight mb-4">
                            Soluciones Digitales{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                Completas
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                            Todo lo que necesitás para tener presencia profesional en internet
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          WHY CHOOSE US SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] tracking-tight mb-4">
                            ¿Por qué elegir{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                VM Digital Studio?
                            </span>
                        </h2>
                    </div>

                    {/* Value Props Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {whyChooseUs.map((item, index) => (
                            <ValueCard key={index} item={item} />
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          PROCESS SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] tracking-tight mb-4">
                            Nuestro{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                Proceso
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                            Metodología probada de 4 etapas para entregarte resultados
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-4 gap-12 md:gap-8">
                        {processSteps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                step={step}
                                index={index}
                                isLast={index === processSteps.length - 1}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SOCIAL PROOF SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] tracking-tight mb-4">
                            Proyectos que generan{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                resultados
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                            Lo que dicen nuestros clientes
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Tu negocio merece una presencia{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            digital profesional
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10">
                        Empecemos hoy mismo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Primary CTA */}
                        <Link to="/contacto" className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Solicitar Consulta Gratuita
                        </Link>

                        {/* WhatsApp CTA */}
                        <a href="https://wa.me/5493815000000" target="_blank" rel="noopener noreferrer" className="bg-[#10B981] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HomePage;
