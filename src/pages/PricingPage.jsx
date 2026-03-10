import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, MessageCircle, Calendar } from 'lucide-react';
import { PageContainer, GlassCard } from '../components/ui/Layout';

// ═══════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════

const pricingPlans = [
  {
    id: 'start',
    name: 'START',
    price: '$250',
    description: 'Ideal para emprendedores que necesitan presencia online rápida.',
    features: [
      'Landing Page',
      'Diseño personalizado',
      'Responsive',
      'WhatsApp integrado',
      'Formulario de contacto',
      'SEO básico',
      'Hosting + dominio 1 año',
      'SSL'
    ],
    cta: 'Solicitar mi Landing',
    highlighted: false,
    buttonStyle: 'outline'
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '$450',
    badge: 'Más Elegido',
    description: 'Ideal para empresas que buscan presencia profesional sólida.',
    features: [
      'Sitio web hasta 5 páginas',
      'Diseño personalizado',
      'Responsive',
      'WhatsApp integrado',
      'Formulario avanzado',
      'SEO optimizado',
      'Hosting + dominio 1 año',
      'SSL'
    ],
    cta: 'Quiero mi Sitio Profesional',
    highlighted: true,
    buttonStyle: 'gradient'
  },
  {
    id: 'ecommerce',
    name: 'ECOMMERCE',
    price: '$1200',
    description: 'Ideal para marcas que desean vender online de forma escalable.',
    features: [
      'Tienda online completa',
      'Panel autogestionable',
      'Carga masiva de productos',
      'Carrito + checkout',
      'Mercado Pago integrado',
      'Gestión de envíos',
      'Gestión de pedidos',
      'Campañas y banners',
      'Automatización básica',
      'Hosting + dominio 1 año',
      'SSL'
    ],
    cta: 'Quiero vender online',
    highlighted: false,
    buttonStyle: 'solid'
  }
];

const comparisonFeatures = [
  {
    name: 'Tipo de sitio',
    start: 'Landing Page',
    pro: 'Hasta 5 páginas',
    ecommerce: 'Tienda completa'
  },
  {
    name: 'Diseño personalizado',
    start: true,
    pro: true,
    ecommerce: true
  },
  {
    name: 'Responsive',
    start: true,
    pro: true,
    ecommerce: true
  },
  {
    name: 'WhatsApp',
    start: true,
    pro: true,
    ecommerce: true
  },
  {
    name: 'Formulario',
    start: 'Básico',
    pro: 'Avanzado',
    ecommerce: true
  },
  {
    name: 'SEO',
    start: 'Básico',
    pro: 'Optimizado',
    ecommerce: 'Optimizado'
  },
  {
    name: 'Panel autogestionable',
    start: false,
    pro: false,
    ecommerce: true
  },
  {
    name: 'Carrito de compras',
    start: false,
    pro: false,
    ecommerce: true
  },
  {
    name: 'Pasarela de pago',
    start: false,
    pro: false,
    ecommerce: true
  },
  {
    name: 'Gestión de productos',
    start: false,
    pro: false,
    ecommerce: true
  },
  {
    name: 'Integración logística',
    start: false,
    pro: false,
    ecommerce: true
  },
  {
    name: 'Hosting 1 año',
    start: true,
    pro: true,
    ecommerce: true
  },
  {
    name: 'Dominio 1 año',
    start: true,
    pro: true,
    ecommerce: true
  },
  {
    name: 'SSL',
    start: true,
    pro: true,
    ecommerce: true
  }
];

const faqs = [
  {
    question: '¿Qué incluye el hosting y dominio?',
    answer: 'Incluimos hosting profesional con garantía de uptime del 99.9% y un dominio .com, .com.ar o .net a tu elección por el primer año. Nos encargamos de toda la configuración técnica para que vos solo te preocupes por tu negocio.'
  },
  {
    question: '¿Cuánto tarda el desarrollo?',
    answer: 'Plan START: 7-10 días hábiles. Plan PRO: 15-20 días hábiles. Plan ECOMMERCE: 30-45 días hábiles. Los tiempos pueden variar según la complejidad de requisitos específicos y la disponibilidad de contenidos.'
  },
  {
    question: '¿Puedo cambiar de plan?',
    answer: 'Sí, podés hacer upgrade de tu plan en cualquier momento. Acreditamos el valor ya invertido y solo pagás la diferencia. Es una transición sin fricción.'
  },
  {
    question: '¿Qué pasa después del primer año?',
    answer: 'Al finalizar el primer año, la renovación del hosting y dominio tiene un costo accesible que te informamos con anticipación. Podés optar por gestionar estos servicios vos mismo o seguir con nosotros.'
  },
  {
    question: '¿Ofrecen soporte?',
    answer: 'Sí. Todos los planes incluyen 30 días de soporte post-lanzamiento sin cargo. Después podés contratar paquetes de mantenimiento mensual o soporte puntual según necesites.'
  },
  {
    question: '¿Aceptan pagos en cuotas?',
    answer: 'Sí, aceptamos tarjetas de crédito con financiación en cuotas, transferencias bancarias y pagos mediante Mercado Pago. Consultanos por opciones de pago flexibles.'
  }
];

// ═══════════════════════════════════════════
// REUSABLE COMPONENTS
// ═══════════════════════════════════════════

const PricingCard = ({ plan }) => {
  const {
    name,
    price,
    badge,
    description,
    features,
    cta,
    highlighted,
    buttonStyle
  } = plan;

  // Button styles based on type
  const getButtonClasses = () => {
    const base = 'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ease-in-out';

    if (buttonStyle === 'gradient') {
      return `${base} bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white hover:shadow-lg hover:scale-105`;
    }

    if (buttonStyle === 'solid') {
      return `${base} bg-[#B11226] text-white hover:bg-[#8F0E1E] hover:shadow-lg hover:scale-105`;
    }

    // outline
    return `${base} border-2 border-[#B11226] text-[#B11226] hover:bg-[#B11226] hover:text-white hover:scale-105`;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative rounded-2xl ${highlighted ? 'lg:scale-105' : ''}`}
    >
      {/* Badge for highlighted plan */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-[0_12px_30px_rgba(185,18,38,0.6)] tracking-[0.16em] uppercase">
            {badge}
          </span>
        </div>
      )}

      <GlassCard
        className={`h-full p-8 sm:p-9 transition-all duration-500 ${
          highlighted
            ? 'bg-gradient-to-b from-[#111827] via-[#020617] to-[#111827] text-white border-[#1f2937] shadow-[0_26px_70px_rgba(15,23,42,0.85)]'
            : 'bg-white/85'
        }`}
      >
        {/* Plan Header */}
        <div className={`text-center mb-8 ${highlighted ? 'text-white' : ''}`}>
          <h3
            className={`text-xs font-semibold tracking-[0.22em] mb-4 uppercase ${
              highlighted ? 'text-[#F97316]' : 'text-[#6B7280]'
            }`}
          >
            {name}
          </h3>
          <div className="mb-3">
            <span
              className={`text-5xl font-bold tracking-tight ${
                highlighted ? 'text-white' : 'text-[#0F172A]'
              }`}
            >
              {price}
            </span>
          </div>
          <p
            className={`text-sm leading-relaxed ${
              highlighted ? 'text-gray-300' : 'text-[#6B7280]'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  highlighted ? 'text-[#22C55E]' : 'text-[#10B981]'
                }`}
              />
              <span
                className={`text-sm ${
                  highlighted ? 'text-gray-100' : 'text-[#111827]'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contacto" className={`${getButtonClasses()} block text-center`}>
          {cta}
        </Link>
      </GlassCard>
    </motion.div>
  );
};

const FeatureCell = ({ value }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-[#10B981]" />
      </div>
    );
  }

  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-5 h-5 text-[#E5E7EB]" />
      </div>
    );
  }

  return (
    <div className="text-center text-sm text-[#1E1E1E]">
      {value}
    </div>
  );
};

const FeatureRow = ({ feature, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'} hover:bg-gray-50 transition-colors duration-200`}>
      <td className="px-6 py-4 text-sm font-medium text-[#1E1E1E]">
        {feature.name}
      </td>
      <td className="px-6 py-4">
        <FeatureCell value={feature.start} />
      </td>
      <td className="px-6 py-4 bg-red-50/30">
        <FeatureCell value={feature.pro} />
      </td>
      <td className="px-6 py-4">
        <FeatureCell value={feature.ecommerce} />
      </td>
    </tr>
  );
};

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-[#F8F9FA] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1E1E1E] pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#B11226] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-5 text-[#6B7280] leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

const PricingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight mb-6">
              Precios Transparentes,{' '}
              <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                Resultados Reales
              </span>
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Soluciones digitales profesionales con hosting y dominio incluidos por 1 año.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-8 h-8 text-[#B11226] animate-bounce" />
          </div>
        </PageContainer>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING CARDS SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <PageContainer>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
              Nuestros Planes
            </h2>
            <p className="text-lg text-[#6B7280]">
              Elegí la solución ideal para tu negocio
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, duration: 0.5 }
              }
            }}
            className="grid md:grid-cols-3 gap-8 lg:gap-10"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </motion.div>

        </PageContainer>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON TABLE SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F8F9FA]">
        <PageContainer>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
              Comparación Detallada
            </h2>
            <p className="text-lg text-[#6B7280]">
              Descubrí qué incluye cada plan
            </p>
          </motion.div>

          <GlassCard className="bg-white rounded-2xl shadow-lg overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F172A] text-white sticky top-0">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Característica
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                      START
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider bg-[#B11226]">
                      PRO
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                      ECOMMERCE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <FeatureRow key={index} feature={feature} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

        </PageContainer>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <PageContainer className="max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <GlassCard className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E5E7EB]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </GlassCard>

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
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-6"
          >
            ¿Listo para impulsar tu negocio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-xl text-gray-300 mb-10"
          >
            Agendá una consulta gratuita y empecemos hoy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link
              to="/contacto"
              className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_22px_55px_rgba(248,113,113,0.45)] hover:shadow-[0_18px_45px_rgba(248,113,113,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Solicitar Consulta Gratuita
            </Link>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5493815000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10B981] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_18px_45px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

        </PageContainer>
      </section>

    </div>
  );
};

export default PricingPage;
