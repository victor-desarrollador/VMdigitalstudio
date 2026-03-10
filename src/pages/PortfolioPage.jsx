import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Monitor,
    TrendingUp,
    Clock,
    Users,
    ShoppingBag,
    Zap,
    BarChart3,
    CheckCircle,
    X,
    MessageCircle,
    Calendar,
    ArrowRight,
    Globe,
    ShoppingCart
} from 'lucide-react';
import { PageContainer, GlassCard } from '../components/ui/Layout';

// ═══════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════

const projects = [
    {
        id: 1,
        category: 'Landing Page',
        client: 'Marca de indumentaria femenina (San Miguel de Tucumán)',
        title: 'Tienda Moda Urbana',
        description: 'Landing optimizada para captar consultas vía WhatsApp y aumentar ventas locales.',
        metrics: [
            { icon: TrendingUp, label: '+38% incremento en consultas', value: '38%' },
            { icon: BarChart3, label: '+24% aumento en conversiones', value: '24%' },
            { icon: Clock, label: 'Tiempo de carga optimizado', value: '<2.5s' }
        ],
        image: 'landing-moda',
        color: 'from-[#B11226] to-[#8F0E1E]',
        // Detailed case study
        problem: 'La marca tenía baja visibilidad online y dependía completamente de redes sociales. No podían capturar leads ni medir resultados de manera efectiva.',
        solution: 'Diseñamos una landing page estratégica con formularios optimizados, integración directa con WhatsApp, y un diseño visual coherente con su identidad de marca. Implementamos SEO local y tiempos de carga ultra-rápidos.',
        results: [
            'Incremento del 38% en consultas mensuales',
            'Reducción del 60% en tasa de rebote',
            'Page Speed score de 95/100 en móvil',
            'Posicionamiento #1 en Google para keywords locales'
        ],
        technologies: ['React', 'Tailwind CSS', 'Vercel', 'WhatsApp API', 'Google Analytics']
    },
    {
        id: 2,
        category: 'Sitio Profesional',
        client: 'Empresa de servicios técnicos',
        title: 'Servicios Integrales Norte',
        description: 'Sitio corporativo multipágina con enfoque en credibilidad y captación de leads.',
        metrics: [
            { icon: Users, label: '+42% aumento en formularios enviados', value: '42%' },
            { icon: Clock, label: '+30% mejora en tiempo de permanencia', value: '30%' },
            { icon: CheckCircle, label: 'SEO básico implementado', value: 'SEO On-page' }
        ],
        image: 'website-servicios',
        color: 'from-[#1E1E1E] to-[#2D2D2D]',
        problem: 'La empresa no tenía presencia web profesional. Perdían credibilidad frente a competidores y no podían mostrar su experiencia de 15 años en el rubro.',
        solution: 'Creamos un sitio corporativo multipágina con secciones dedicadas a servicios, portfolio de trabajos, certificaciones, y formulario de contacto avanzado. Arquitectura de información clara y diseño que transmite profesionalismo.',
        results: [
            'Aumento del 42% en leads calificados',
            'Mejora del 30% en tiempo de sesión',
            'Reducción del 45% en consultas básicas (FAQ implementado)',
            'Incremento del 25% en contrataciones directas'
        ],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'EmailJS', 'Google Maps API']
    },
    {
        id: 3,
        category: 'Ecommerce',
        client: 'Tienda de cosmética y accesorios',
        title: 'Beauty Store Online',
        description: 'Tienda online con panel autogestionable, Mercado Pago y gestión de envíos.',
        metrics: [
            { icon: ShoppingBag, label: '+55% incremento en ventas online', value: '55%' },
            { icon: Zap, label: 'Carrito optimizado', value: 'UX Premium' },
            { icon: Monitor, label: 'Panel administrativo personalizado', value: 'Autogestionable' }
        ],
        image: 'ecommerce-beauty',
        color: 'from-[#10B981] to-[#059669]',
        problem: 'La tienda solo vendía físicamente. Querían escalar sin abrir nuevos locales, pero no tenían experiencia en ecommerce ni recursos técnicos internos.',
        solution: 'Desarrollamos una tienda online completa con panel administrativo intuitivo que permite gestionar productos, stock, pedidos y promociones sin conocimientos técnicos. Integración con Mercado Pago, sistema de envíos automatizado y diseño mobile-first.',
        results: [
            'Incremento del 55% en ventas mensuales',
            'Promedio de 180 transacciones online por mes',
            'Tasa de abandono de carrito reducida al 35%',
            'Expansión a 3 provincias nuevas vía delivery'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Mercado Pago API', 'Express.js']
    }
];

const categories = ['Todos', 'Landing Page', 'Sitio Profesional', 'Ecommerce'];

// ═══════════════════════════════════════════
// REUSABLE COMPONENTS
// ═══════════════════════════════════════════

const FilterButton = ({ category, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
        px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md
        ${isActive
                    ? 'bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white shadow-[0_16px_40px_rgba(185,18,38,0.35)]'
                    : 'bg-white/80 text-[#6B7280] border border-[#E5E7EB] hover:border-[#B11226]/70 hover:text-[#B11226] shadow-sm'
                }
      `}
        >
            {category}
        </button>
    );
};

const ProjectCard = ({ project, onViewCase }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden"
        >

            {/* Project Image Mockup */}
            <div className="relative bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] p-8 overflow-hidden">
                {/* MacBook style mockup */}
                <div className="relative bg-[#0F172A] rounded-2xl p-6 shadow-2xl transform group-hover:scale-105 transition-transform duration-400">
                    <div className={`h-44 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                        {project.category === 'Landing Page' && <Globe className="w-16 h-16 text-white/30" />}
                        {project.category === 'Sitio Profesional' && <Monitor className="w-16 h-16 text-white/30" />}
                        {project.category === 'Ecommerce' && <ShoppingCart className="w-16 h-16 text-white/30" />}
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg shadow-[#111827]/40`}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Project Details */}
            <GlassCard className="mt-0 rounded-t-none border-t-0 p-8">
                {/* Client */}
                <p className="text-sm text-[#6B7280] mb-2">
                    {project.client}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6 pb-6 border-b border-[#E5E7EB]">
                    {project.metrics.map((metric, index) => {
                        const IconComponent = metric.icon;
                        return (
                            <div key={index} className="flex items-center gap-3 text-sm">
                                <IconComponent className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                                <span className="text-[#1E1E1E]">{metric.label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => onViewCase(project)}
                    className="w-full bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white py-3 px-6 rounded-2xl font-semibold shadow-[0_16px_40px_rgba(185,18,38,0.35)] hover:shadow-[0_18px_45px_rgba(185,18,38,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                    Ver Caso
                    <ArrowRight className="w-5 h-5" />
                </button>
            </GlassCard>
        </motion.div>
    );
};

const CaseModal = ({ project, onClose }) => {
    if (!project) return null;

    // Prevent click bubbles from modal content closing the modal
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            <div
                className="bg-white/95 backdrop-blur-xl rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col overflow-hidden border border-[#E5E7EB]/80"
                onClick={handleContentClick}
            >

                {/* Sticky Header */}
                <div className="flex-shrink-0 relative px-6 py-5 border-b border-[#E5E7EB] bg-white/95 backdrop-blur flex items-center justify-between z-10">
                    <div className="flex flex-col">
                        <span className={`inline-flex items-center w-fit bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md mb-1`}>
                            {project.category}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E]">
                            {project.title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-[#F8F9FA] rounded-full transition-colors duration-200 border border-transparent hover:border-[#E5E7EB]"
                        aria-label="Cerrar"
                    >
                        <X className="w-6 h-6 text-[#6B7280]" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">

                    {/* Mockup Image */}
                    <div className="relative bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] p-8 rounded-2xl border border-[#E5E7EB]/70 shadow-lg">
                        <div className={`bg-gradient-to-br ${project.color} aspect-video max-h-80 w-full rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500`}>
                            {project.category === 'Landing Page' && <Globe className="w-20 h-20 text-white/40" />}
                            {project.category === 'Sitio Profesional' && <Monitor className="w-20 h-20 text-white/40" />}
                            {project.category === 'Ecommerce' && <ShoppingCart className="w-20 h-20 text-white/40" />}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-[#1E1E1E] flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#B11226] rounded-full"></span>
                                El Desafío
                            </h3>
                            <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                                {project.problem}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-[#1E1E1E] flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#10B981] rounded-full"></span>
                                La Solución
                            </h3>
                            <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E5E7EB]">
                        <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">
                            Resultados Clave
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {project.results.map((result, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#E5E7EB] shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#1E1E1E] text-sm font-medium">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-sm font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                            Stack Tecnológico
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-white text-[#1E1E1E] px-3 py-1.5 rounded-full font-medium text-xs border border-[#E5E7EB] shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sticky Footer CTA */}
                <div className="flex-shrink-0 p-6 border-t border-[#E5E7EB] bg-white/95 backdrop-blur md:flex items-center justify-between gap-4">
                    <div className="hidden md:block text-sm text-[#6B7280]">
                        ¿Te interesa un proyecto similar?
                    </div>
                    <button className="w-full md:w-auto bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white py-3 px-8 rounded-2xl font-semibold shadow-[0_14px_35px_rgba(185,18,38,0.4)] hover:shadow-[0_18px_45px_rgba(185,18,38,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                        Quiero algo similar
                    </button>
                </div>

            </div>
        </div>
    );
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);

    // Filter projects based on active category
    const filteredProjects = activeFilter === 'Todos'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="min-h-screen bg-white">

            {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-32 -left-16 w-[420px] h-[420px] bg-[#B11226]/10 rounded-full blur-[110px]" />
                    <div className="absolute -bottom-28 -right-8 w-[420px] h-[420px] bg-[#8F0E1E]/10 rounded-full blur-[110px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#F3F4F6]" />
                </div>
                <PageContainer>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight mb-6">
                            Proyectos que generan{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                resultados reales
                            </span>
                        </h1>

                        <p className="text-xl text-[#6B7280] leading-relaxed">
                            Cada proyecto está diseñado estratégicamente para convertir visitantes en clientes.
                        </p>
                    </motion.div>
                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          FILTER SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-6 bg-white sticky top-16 z-40 border-b border-[#E5E7EB]/80 backdrop-blur-xl bg-white/90">
                <PageContainer>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <FilterButton
                                key={category}
                                category={category}
                                isActive={activeFilter === category}
                                onClick={() => setActiveFilter(category)}
                            />
                        ))}
                    </div>

                    {/* Active count */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-[#6B7280]">
                            Mostrando <span className="font-semibold text-[#B11226]">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
                        </p>
                    </div>
                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          PROJECT GRID SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-white">
                <PageContainer>

                    {/* Projects Grid */}
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
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <ProjectCard
                                    project={project}
                                    onViewCase={setSelectedProject}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty state */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-[#F8F9FA] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Monitor className="w-12 h-12 text-[#6B7280]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                                No hay proyectos en esta categoría
                            </h3>
                            <p className="text-[#6B7280]">
                                Intenta con otro filtro
                            </p>
                        </div>
                    )}

                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          STATS SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#F8F9FA]">
                <PageContainer>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
                            Impacto en números
                        </h2>
                    </motion.div>

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
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {[
                            { value: '45+', label: 'Proyectos completados' },
                            { value: '38%', label: 'Incremento promedio en conversión' },
                            { value: '100%', label: 'Clientes satisfechos' },
                            { value: '<3s', label: 'Tiempo de carga promedio' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <GlassCard className="text-center p-8">
                                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-[#6B7280]">
                                        {stat.label}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>

                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#111827] text-white relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-24 right-10 w-80 h-80 bg-[#B11226]/25 blur-3xl" />
                    <div className="absolute -bottom-24 left-0 w-72 h-72 bg-[#0EA5E9]/25 blur-3xl" />
                </div>

                <PageContainer className="max-w-4xl text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
                    >
                        Tu proyecto puede ser el próximo{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            caso de éxito
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-xl text-gray-300 mb-10"
                    >
                        Construyamos algo que genere resultados reales.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Primary CTA */}
                        <button className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_22px_55px_rgba(248,113,113,0.45)] hover:shadow-[0_18px_45px_rgba(248,113,113,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Solicitar Consulta
                        </button>

                        {/* WhatsApp CTA */}
                        <button className="bg-[#10B981] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_18px_45px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </button>
                    </motion.div>

                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          CASE MODAL
      ═══════════════════════════════════════════ */}
            {selectedProject && (
                <CaseModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

        </div>
    );
};

export default PortfolioPage;
