import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, CheckCircle, Lightbulb, Code2, MessageCircle, Calendar, Search, Palette, Code, Rocket } from 'lucide-react';
import { PageContainer, PageSection, GlassCard } from '../components/ui/Layout';

// ═══════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════

const philosophyValues = [
    {
        icon: Target,
        title: 'Diseño Estratégico',
        description: 'Diseñamos con un objetivo claro: convertir visitantes en clientes.'
    },
    {
        icon: Code2,
        title: 'Tecnología Moderna',
        description: 'Utilizamos herramientas actuales que permiten escalabilidad y rendimiento.'
    },
    {
        icon: Users,
        title: 'Experiencia de Usuario',
        description: 'Cada detalle está pensado para que la navegación sea intuitiva y efectiva.'
    },
    {
        icon: TrendingUp,
        title: 'Enfoque en Resultados',
        description: 'No construimos sitios web solamente estéticos, sino funcionales y medibles.'
    }
];

const workSteps = [
    {
        number: '01',
        icon: Search,
        title: 'Análisis del negocio',
        description: 'Entendemos tu industria, objetivos y audiencia para diseñar la estrategia ideal.',
        color: 'from-[#B11226] to-[#8F0E1E]'
    },
    {
        number: '02',
        icon: Palette,
        title: 'Estrategia & Diseño',
        description: 'Definimos arquitectura, flujos de usuario y creamos interfaces visuales de alto impacto.',
        color: 'from-[#7C3AED] to-[#6D28D9]'
    },
    {
        number: '03',
        icon: Code,
        title: 'Desarrollo',
        description: 'Implementamos con código limpio, optimizado y siguiendo las mejores prácticas del sector.',
        color: 'from-[#0EA5E9] to-[#0284C7]'
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Lanzamiento',
        description: 'Deployment, capacitación y 30 días de soporte post-lanzamiento incluidos.',
        color: 'from-[#10B981] to-[#059669]'
    }
];

// ═══════════════════════════════════════════
// REUSABLE COMPONENTS
// ═══════════════════════════════════════════

const ValueCard = ({ value }) => {
    const IconComponent = value.icon;

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group relative rounded-2xl overflow-hidden text-center"
        >
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-[#B11226]/8 via-transparent to-[#8F0E1E]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <GlassCard className="relative p-7 group-hover:shadow-2xl group-hover:border-[#B11226]/25 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#B11226] to-[#8F0E1E] mb-4 shadow-lg shadow-[#B11226]/25 group-hover:shadow-[#B11226]/40 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#020617] mb-3">
                    {value.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                    {value.description}
                </p>
            </GlassCard>
        </motion.div>
    );
};

const StepCard = ({ step, isLast }) => {
    const IconComponent = step.icon;
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative flex flex-col"
        >
            {/* Card */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 h-full">

                {/* Top row: number badge + icon */}
                <div className="flex items-center justify-between">
                    <span className={`bg-gradient-to-br ${step.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                        {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-sm flex-1">
                    {step.description}
                </p>

                {/* Bottom accent line */}
                <div className={`h-0.5 w-12 bg-gradient-to-r ${step.color} rounded-full group-hover:w-full transition-all duration-500`} />
            </div>

            {/* Desktop arrow connector */}
            {!isLast && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center">
                    <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            )}
        </motion.div>
    );
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-[#B11226]/10 rounded-full blur-[110px]" />
                    <div className="absolute -bottom-28 -right-10 w-[420px] h-[420px] bg-[#8F0E1E]/10 rounded-full blur-[110px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#F3F4F6]" />
                </div>
                <PageContainer className="max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight mb-6"
                    >
                        Construimos experiencias digitales que generan{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            resultados
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
                        className="text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto"
                    >
                        VM Digital Studio es un estudio digital boutique especializado en diseño y desarrollo web estratégico.
                    </motion.p>
                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          WHO WE ARE SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-white">
                <PageContainer>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left - Image/Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] shadow-2xl overflow-hidden">
                                {/* Placeholder for professional image */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#B11226]/10 to-[#8F0E1E]/5">
                                    <Award className="w-32 h-32 text-[#B11226] opacity-20" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.6, delay: 0.04 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
                                Un estudio digital con{' '}
                                <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                    visión estratégica
                                </span>
                            </h2>

                            <div className="space-y-4 text-[#6B7280] leading-relaxed">
                                <p>
                                    VM Digital Studio es un estudio digital liderado por <strong className="text-[#1E1E1E]">Victor Enrique Molina</strong>, desarrollador web argentino de 36 años, Técnico Superior en Desarrollo Web.
                                </p>

                                <p>
                                    Combinamos formación académica formal con experiencia práctica en la creación de soluciones digitales centradas en el usuario y orientadas a resultados.
                                </p>

                                <p>
                                    Trabajamos junto a colaboradores estratégicos según las necesidades de cada proyecto, permitiendo ofrecer soluciones completas sin perder cercanía ni control de calidad.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </PageContainer>
            </PageSection>

            {/* ═══════════════════════════════════════════
          MI HISTORIA SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-[#F8F9FA]">
                <PageContainer className="max-w-4xl">

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-8 text-center"
                    >
                        El camino detrás del{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            estudio
                        </span>
                    </motion.h2>

                    <div className="space-y-6 text-[#6B7280] leading-relaxed text-lg">
                        <p>
                            Después de completar mi formación como Técnico Superior en Desarrollo Web, decidí crear VM Digital Studio con una visión clara: ayudar a negocios locales y marcas en crecimiento a profesionalizar su presencia digital.
                        </p>

                        <GlassCard className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB]">
                            <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                                Durante mi formación desarrollé proyectos como:
                            </h3>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#1E1E1E]">
                                        Un ecommerce con carrito dinámico y panel administrativo.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#1E1E1E]">
                                        Aplicaciones web con autenticación y estructura fullstack.
                                    </span>
                                </li>
                            </ul>
                        </GlassCard>

                        <p>
                            Estos proyectos me permitieron aplicar conocimientos reales en entornos funcionales y comprender que un sitio web no es solo diseño, sino <strong className="text-[#1E1E1E]">estrategia, estructura y conversión</strong>.
                        </p>
                    </div>
                </PageContainer>
            </PageSection>

            {/* ═══════════════════════════════════════════
          FILOSOFÍA DE TRABAJO SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-white">
                <PageContainer>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
                            Nuestra{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                filosofía
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.5 } }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
                    >
                        {philosophyValues.map((value, index) => (
                            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <ValueCard value={value} />
                            </motion.div>
                        ))}
                    </motion.div>

                </PageContainer>
            </PageSection>

            {/* ═══════════════════════════════════════════
          HOW WE WORK SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#111827] relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#B11226]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-4">
                            Metodología
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                            Cómo{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                trabajamos
                            </span>
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Un proceso probado en 4 etapas diseñado para maximizar resultados y minimizar incertidumbre.
                        </p>
                    </motion.div>

                    {/* Steps grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.5 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {workSteps.map((step, index) => (
                            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <StepCard
                                    step={step}
                                    isLast={index === workSteps.length - 1}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
          TECHNOLOGY SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-white">
                <PageContainer className="max-w-4xl">

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-120px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">
                            Tecnología al servicio de tu{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                negocio
                            </span>
                        </h2>

                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                            Trabajamos con tecnologías modernas que permiten crear sitios web rápidos, seguros y escalables. Nuestro enfoque combina diseño visual atractivo con desarrollo estructurado y buenas prácticas de programación.
                        </p>
                    </motion.div>

                    {/* Tech Stack Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.5 } }
                        }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <GlassCard className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <Lightbulb className="w-12 h-12 text-[#B11226] mx-auto mb-4" />
                            <h3 className="font-bold text-[#1E1E1E] mb-2">Frontend Moderno</h3>
                            <p className="text-sm text-[#6B7280]">React, interfaces dinámicas</p>
                        </GlassCard>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <GlassCard className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <Code2 className="w-12 h-12 text-[#B11226] mx-auto mb-4" />
                            <h3 className="font-bold text-[#1E1E1E] mb-2">Backend Escalable</h3>
                            <p className="text-sm text-[#6B7280]">Node.js, APIs robustas</p>
                        </GlassCard>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <GlassCard className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <Award className="w-12 h-12 text-[#B11226] mx-auto mb-4" />
                            <h3 className="font-bold text-[#1E1E1E] mb-2">Bases de Datos</h3>
                            <p className="text-sm text-[#6B7280]">PostgreSQL, MongoDB</p>
                        </GlassCard>
                        </motion.div>
                    </motion.div>

                </PageContainer>
            </PageSection>

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
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Construyamos algo que marque{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            la diferencia
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-xl text-gray-300 mb-10"
                    >
                        Tu proyecto merece una presencia digital profesional y estratégica.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Primary CTA */}
                        <Link to="/contacto" className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_22px_55px_rgba(248,113,113,0.45)] hover:shadow-[0_18px_45px_rgba(248,113,113,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Solicitar Consulta
                        </Link>

                        {/* WhatsApp CTA */}
                        <a href="https://wa.me/5493815000000" target="_blank" rel="noopener noreferrer" className="bg-[#10B981] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_18px_45px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </motion.div>

                </PageContainer>
            </section>

        </div>
    );
};

export default AboutPage;
