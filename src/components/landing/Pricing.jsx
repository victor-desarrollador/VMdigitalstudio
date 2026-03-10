import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'START',
    price: '$250',
    desc: 'Ideal para emprendedores que necesitan presencia online rápida y profesional.',
    features: ['Landing Page', 'Diseño personalizado (UI/UX)', 'Responsive Mobile-First', 'Integración WhatsApp', 'Formulario de contacto', 'SEO básico', 'Hosting + dominio 1 año', 'Certificado SSL'],
    highlight: false
  },
  {
    name: 'PRO',
    price: '$450',
    desc: 'Ideal para empresas maduras que buscan una presencia digital sólida y completa.',
    features: ['Sitio web hasta 5 páginas', 'Diseño personalizado (UI/UX)', 'Responsive Mobile-First', 'Integración WhatsApp', 'Formulario avanzado', 'SEO optimizado', 'Hosting + dominio 1 año', 'Certificado SSL'],
    highlight: true
  },
  {
    name: 'ECOMMERCE',
    price: '$1200',
    desc: 'Ideal para marcas que desean vender online de forma altamente escalable y automatizada.',
    features: ['Tienda online completa', 'Panel autogestionable', 'Carga de productos ilimitada', 'Carrito + Checkout fluido', 'Mercado Pago / Stripe', 'Gestión de envíos e inventario', 'Hosting + dominio 1 año', 'Certificado SSL'],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="planes" className="py-32 bg-agency-bg relative font-jakarta">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-agency-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-agency-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Inversión Transparent
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Soluciones premium con tecnologías modernas. Hosting y dominio incluidos por 1 año.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl p-8 sm:p-10 backdrop-blur-md transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-agency-secondary/20 to-agency-primary/5 border border-agency-primary/40 shadow-[0_0_50px_rgba(112,0,255,0.15)] lg:-translate-y-4 z-10 hover:shadow-[0_0_60px_rgba(0,242,255,0.2)]' 
                  : 'bg-[#0A0A0A]/80 border border-white/10 hover:border-white/20 hover:bg-[#0A0A0A]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-agency-primary to-agency-secondary text-white text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                  Más Elegido
                </div>
              )}

              <div className="mb-10 border-b border-white/10 pb-10">
                <h3 className={`text-sm font-semibold tracking-[0.2em] mb-6 ${plan.highlight ? 'text-agency-primary' : 'text-slate-400'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl sm:text-6xl font-bold text-white tracking-tighter">{plan.price}</span>
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed min-h-[60px]">{plan.desc}</p>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-0.5 rounded-full p-1 ${plan.highlight ? 'bg-agency-primary/20' : 'bg-white/5'}`}>
                        <Check className={`w-3 h-3 flex-shrink-0 ${plan.highlight ? 'text-agency-primary' : 'text-slate-500'}`} />
                    </div>
                    <span className="text-slate-300 text-sm font-light">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contacto" 
                className={`w-full py-4 rounded-full font-bold flex justify-center items-center gap-2 transition-all duration-300 group ${
                  plan.highlight
                    ? 'bg-white text-agency-bg hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Elegir {plan.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
