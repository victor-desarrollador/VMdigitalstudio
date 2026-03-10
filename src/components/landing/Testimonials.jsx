import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Fundadora - Estudio Jurídico',
    rating: 5,
    text: 'Increíble trabajo. Mi web no solo se ve premium, sino que genera consultas de alto valor cada semana. La inversión se pagó sola en el primer mes.',
    avatar: 'MG'
  },
  {
    name: 'Carlos Ramírez',
    role: 'CEO - TechSolutions',
    rating: 5,
    text: 'Buscábamos una agencia que entendiera nuestra visión corporativa. El nivel de detalle en UI/UX y la performance del sitio superaron todas nuestras expectativas.',
    avatar: 'CR'
  },
  {
    name: 'Laura Martínez',
    role: 'Dueña - Tienda Online',
    rating: 5,
    text: 'Pasar a este nivel de ecommerce fue la decisión correcta. El diseño es espectacular y mis conversiones aumentaron tremendamente gracias a la nueva fluidez.',
    avatar: 'LM'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-agency-bg relative font-jakarta">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agency-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Voces de <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-primary to-agency-secondary">Autoridad</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Empresas y fundadores que ya elevaron su presencia digital junto a nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: idx * 0.15, duration: 0.6 }}
               className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-agency-primary/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 group shadow-2xl"
             >
               <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 opacity-50 group-hover:text-agency-primary/10 transition-colors pointer-events-none" />
               <div className="flex gap-1 mb-6">
                 {[...Array(test.rating)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-agency-primary text-agency-primary" />
                 ))}
               </div>
               <p className="text-slate-300 leading-relaxed font-light mb-10 min-h-[120px]">
                 "{test.text}"
               </p>
               <div className="flex items-center gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-agency-primary/20 to-agency-secondary/20 flex items-center justify-center text-white font-bold tracking-widest border border-white/10 group-hover:border-agency-primary/50 transition-colors">
                   {test.avatar}
                 </div>
                 <div>
                   <div className="font-bold text-white tracking-wide">{test.name}</div>
                   <div className="text-xs text-agency-primary mt-1 uppercase tracking-wider">{test.role}</div>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
