import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown, MessageCircle, Calendar } from 'lucide-react';

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
    <div
      className={`
        relative bg-white rounded-2xl p-8 shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl
        ${highlighted ? 'scale-105 ring-2 ring-[#B11226] ring-offset-4' : ''}
      `}
    >
      {/* Badge for highlighted plan */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            {badge}
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold tracking-wider text-[#6B7280] mb-2">
          {name}
        </h3>
        <div className="mb-3">
          <span className="text-5xl font-bold text-[#1E1E1E] tracking-tight">
            {price}
          </span>
        </div>
        <p className="text-[#6B7280] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
            <span className="text-[#1E1E1E] text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link to="/contacto" className={`${getButtonClasses()} block text-center`}>
        {cta}
      </Link>
    </div>
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
      <section className="relative bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] tracking-tight mb-6">
              Precios Transparentes,{' '}
              <span className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] bg-clip-text text-transparent">
                Resultados Reales
              </span>
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Soluciones digitales profesionales con hosting y dominio incluidos por 1 año.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-8 h-8 text-[#B11226] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING CARDS SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] tracking-tight mb-4">
              Nuestros Planes
            </h2>
            <p className="text-lg text-[#6B7280]">
              Elegí la solución ideal para tu negocio
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON TABLE SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] tracking-tight mb-4">
              Comparación Detallada
            </h2>
            <p className="text-lg text-[#6B7280]">
              Descubrí qué incluye cada plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E] text-white sticky top-0">
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
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] tracking-tight mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E5E7EB]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            ¿Listo para impulsar tu negocio?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Agendá una consulta gratuita y empecemos hoy.
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

export default PricingPage;
