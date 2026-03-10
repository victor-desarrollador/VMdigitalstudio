import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué incluye el hosting y dominio gratuito por 1 año?',
    answer: 'Incluimos hosting profesional en servidores de alto rendimiento con garantía de uptime del 99.9% y un dominio .com o .com.ar. Nos encargamos de toda la configuración técnica, DNS y certificados SSL para que tu sitio sea seguro y veloz desde el día cero.'
  },
  {
    question: '¿Cuánto tiempo lleva el desarrollo del proyecto?',
    answer: 'Los tiempos reflejan nuestra atención al detalle: Plan START (10-15 días), Plan PRO (20-25 días), ECOMMERCE (35-45 días). Los plazos son estimativos y dependen de la rápida entrega de los recursos y feedback por tu parte.'
  },
  {
    question: '¿Puedo escalar mi plan en el futuro si mi negocio crece?',
    answer: 'Absolutamente. Nuestras arquitecturas están diseñadas para escalar. Podés comenzar con un plan START y luego hacer upgrade a un PRO o agregar funcionalidades de E-commerce sin perder la base estructural.'
  },
  {
    question: '¿Qué sucede al finalizar el primer año de los servicios?',
    answer: 'Te notificaremos con anticipación. La renovación de los servicios base (Hosting, Dominio y SSL) tiene un costo de mantenimiento estándar del mercado. Siempre somos transparentes con estos costos para que no haya sorpresas.'
  },
  {
    question: '¿Ofrecen soporte continuo tras el lanzamiento?',
    answer: 'Sí, incluimos garantía técnica por 30 días para ajustes menores y corrección de bugs post-lanzamiento. Además, ofrecemos nuestro pilar de Mantenimiento Web Exclusivo para asegurar la evolución constante de tu producto digital.'
  },
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Trabajamos con transferencias bancarias locales e internacionales, criptomonedas (USDT), y plataformas como Stripe o Mercado Pago. Usualmente dividimos los pagos en hitos (50% anticipo, 50% al finalizar) según el progreso del proyecto.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-32 bg-[#020202] relative font-jakarta border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Dudas Frecuentes
          </motion.h2>
          <p className="text-slate-400 text-lg font-light">
            Transparencia total y claridad en cada etapa operativa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => toggleFAQ(idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-white/[0.04] border-agency-primary/30' : 'bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <div className="p-6 md:p-8 flex justify-between items-center gap-6">
                  <h3 className={`font-medium text-lg transition-colors leading-snug ${isOpen ? 'text-agency-primary' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-agency-primary/10 text-agency-primary border border-agency-primary/30' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-400 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
