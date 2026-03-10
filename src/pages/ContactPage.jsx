import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Send,
    Mail,
    MessageCircle,
    MapPin,
    Target,
    Code2,
    Headphones,
    TrendingUp,
    CheckCircle,
    Clock,
    Zap
} from 'lucide-react';
import { PageContainer, PageSection, GlassCard } from '../components/ui/Layout';

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: '',
        acceptContact: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.acceptContact) {
            newErrors.acceptContact = 'Debes aceptar ser contactado';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid - here you would send data to backend
            console.log('Form submitted:', formData);
            alert('¡Gracias! Tu consulta ha sido enviada. Te contactaremos pronto.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                service: '',
                budget: '',
                message: '',
                acceptContact: false
            });
        }
    };

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
                        Hablemos de tu{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            próximo proyecto
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
                        className="text-xl text-[#6B7280] leading-relaxed"
                    >
                        Contanos tu idea y te ayudamos a transformarla en una solución digital profesional.
                    </motion.p>
                </PageContainer>
            </section>

            {/* ═══════════════════════════════════════════
          MAIN CONTACT SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-white">
                <PageContainer>

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* LEFT COLUMN - CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.6 }}
                        >
                        <GlassCard className="p-8 border border-[#E5E7EB]/80 shadow-lg">
                            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                                Solicitar Consulta
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-[#E5E7EB]'
                                            } focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white/70`}
                                        placeholder="Tu nombre"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'
                                            } focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white/70`}
                                        placeholder="tu@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Service Type */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                                        Tipo de servicio
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white/70"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="landing">Landing Page</option>
                                        <option value="website">Sitio Profesional</option>
                                        <option value="ecommerce">Ecommerce</option>
                                        <option value="other">Otro</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                                        Presupuesto estimado
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white/70"
                                    >
                                        <option value="">Selecciona un rango</option>
                                        <option value="250-500">USD 250 – 500</option>
                                        <option value="500-1000">USD 500 – 1000</option>
                                        <option value="1000+">USD 1000+</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 resize-none bg-white/70"
                                        placeholder="Contanos sobre tu proyecto..."
                                    />
                                </div>

                                {/* Checkbox */}
                                <div>
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="acceptContact"
                                            checked={formData.acceptContact}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-[#B11226] border-2 border-[#E5E7EB] rounded focus:ring-2 focus:ring-[#B11226]"
                                        />
                                        <span className="text-sm text-[#6B7280]">
                                            Acepto ser contactado por VM Digital Studio para recibir información sobre mi consulta.
                                        </span>
                                    </label>
                                    {errors.acceptContact && (
                                        <p className="text-red-500 text-sm mt-2">{errors.acceptContact}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(185,28,28,0.35)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Solicitar Consulta
                                </button>

                            </form>
                        </GlassCard>
                        </motion.div>

                        {/* RIGHT COLUMN - BENEFITS & CONTACT INFO */}
                        <div className="space-y-8">

                            {/* Benefits Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-120px' }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                className="group relative rounded-2xl overflow-hidden"
                            >
                                <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-[#B11226]/8 via-transparent to-[#8F0E1E]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <GlassCard className="relative bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-6">
                                    ¿Por qué trabajar con nosotros?
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Target className="w-6 h-6 text-[#B11226] flex-shrink-0 mt-1" />
                                        <span className="text-[#1E1E1E]">
                                            <strong>Diseño estratégico</strong> orientado a conversión
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Code2 className="w-6 h-6 text-[#B11226] flex-shrink-0 mt-1" />
                                        <span className="text-[#1E1E1E]">
                                            <strong>Tecnología moderna</strong> y escalable
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MessageCircle className="w-6 h-6 text-[#B11226] flex-shrink-0 mt-1" />
                                        <span className="text-[#1E1E1E]">
                                            <strong>Comunicación directa</strong> y clara
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Headphones className="w-6 h-6 text-[#B11226] flex-shrink-0 mt-1" />
                                        <span className="text-[#1E1E1E]">
                                            <strong>Acompañamiento</strong> personalizado
                                        </span>
                                    </li>
                                </ul>
                            </GlassCard>
                            </motion.div>

                            {/* Contact Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-120px' }}
                                transition={{ duration: 0.6, delay: 0.08 }}
                            >
                            <GlassCard className="p-8 border border-[#E5E7EB]/80 shadow-lg">
                                <h3 className="text-xl font-bold text-[#1E1E1E] mb-6">
                                    Información de Contacto
                                </h3>

                                <div className="space-y-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-3 text-[#6B7280]">
                                        <Mail className="w-5 h-5 text-[#B11226]" />
                                        <span>contacto@vmdigitalstudio.com</span>
                                    </div>

                                    {/* WhatsApp Button */}
                                    <a
                                        href="https://wa.me/5491234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(5,150,105,0.3)] hover:scale-105 transition-all duration-300"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-center gap-3 text-[#6B7280] pt-4 border-t border-[#E5E7EB]">
                                        <MapPin className="w-5 h-5 text-[#B11226]" />
                                        <span>Argentina - Trabajo remoto</span>
                                    </div>
                                </div>
                            </GlassCard>
                            </motion.div>

                        </div>

                    </div>
                </PageContainer>
            </PageSection>

            {/* ═══════════════════════════════════════════
          TRUST SECTION
      ═══════════════════════════════════════════ */}
            <PageSection className="bg-[#F8F9FA] py-16 md:py-20">
                <PageContainer className="max-w-4xl text-center">

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Clock className="w-8 h-8 text-[#B11226]" />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-bold text-[#1E1E1E]"
                        >
                            Respondemos en menos de{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                24 horas
                            </span>
                        </motion.h2>
                    </div>

                    <p className="text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
                        Nos comprometemos a responder cada consulta con claridad y profesionalismo. Tu proyecto es importante para nosotros.
                    </p>

                    <div className="flex items-center justify-center gap-8 mt-8">
                        <div className="flex items-center gap-2 text-[#6B7280]">
                            <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            <span>Respuesta rápida</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#6B7280]">
                            <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            <span>Consulta sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#6B7280]">
                            <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            <span>Atención personalizada</span>
                        </div>
                    </div>

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

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Tu negocio merece una presencia{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            digital profesional
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10">
                        Revisá nuestros planes y encontrá la solución perfecta para tu proyecto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/planes"
                            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(185,28,28,0.35)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <Zap className="w-5 h-5" />
                            Ver Planes
                        </Link>

                        <a
                            href="https://wa.me/5491234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(5,150,105,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>

                </PageContainer>
            </section>

        </div>
    );
};

export default ContactPage;
