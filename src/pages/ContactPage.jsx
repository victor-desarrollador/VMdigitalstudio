import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <section className="py-20 bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] tracking-tight mb-6">
                        Hablemos de tu{' '}
                        <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                            próximo proyecto
                        </span>
                    </h1>

                    <p className="text-xl text-[#6B7280] leading-relaxed">
                        Contanos tu idea y te ayudamos a transformarla en una solución digital profesional.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          MAIN CONTACT SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* LEFT COLUMN - CONTACT FORM */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-[#E5E7EB] shadow-lg">
                            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">
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
                                            } focus:border-[#B11226] focus:outline-none transition-colors duration-300`}
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
                                            } focus:border-[#B11226] focus:outline-none transition-colors duration-300`}
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
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white"
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
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 bg-white"
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
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#B11226] focus:outline-none transition-colors duration-300 resize-none"
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
                                    className="w-full bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Solicitar Consulta
                                </button>

                            </form>
                        </div>

                        {/* RIGHT COLUMN - BENEFITS & CONTACT INFO */}
                        <div className="space-y-8">

                            {/* Benefits Card */}
                            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 border border-[#E5E7EB] shadow-lg">
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
                            </div>

                            {/* Contact Info Card */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-[#E5E7EB] shadow-lg">
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
                                        className="flex items-center justify-center gap-2 bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#059669] hover:scale-105 transition-all duration-300"
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
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          TRUST SECTION
      ═══════════════════════════════════════════ */}
            <section className="py-16 bg-[#F8F9FA]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Clock className="w-8 h-8 text-[#B11226]" />
                        <h2 className="text-3xl font-bold text-[#1E1E1E]">
                            Respondemos en menos de{' '}
                            <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                                24 horas
                            </span>
                        </h2>
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
                        Revisá nuestros planes y encontrá la solución perfecta para tu proyecto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/planes"
                            className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <Zap className="w-5 h-5" />
                            Ver Planes
                        </Link>

                        <a
                            href="https://wa.me/5491234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#10B981] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ContactPage;
