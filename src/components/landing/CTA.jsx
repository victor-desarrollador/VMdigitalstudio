import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-agency-bg relative font-jakarta overflow-hidden">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-agency-primary/20 via-agency-secondary/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative rounded-[3rem] border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-10 md:p-20 text-center shadow-2xl overflow-hidden"
        >
          {/* Inner Glow Array */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-agency-primary/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-agency-secondary/10 blur-[80px]" />

          <Sparkles className="relative z-10 w-12 h-12 text-agency-primary mx-auto mb-8 animate-[pulse_3s_ease-in-out_Infinity]" />
          
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Elevá tu marca al <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-primary to-agency-secondary">siguiente nivel</span>
          </h2>
          
          <p className="relative z-10 text-slate-400 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Es momento de dejar atrás páginas obsoletas. Trabajemos juntos para diseñar una experiencia digital que convierta, sea veloz y se destaque visualmente en tu industria.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contacto" className="group relative w-full sm:w-auto px-10 py-5 bg-white text-agency-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Iniciar Proyecto
              <div className="w-2 h-2 rounded-full bg-agency-bg group-hover:bg-agency-primary transition-colors animate-pulse" />
            </Link>
            
            <a href="https://wa.me/5493815000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 hover:border-agency-primary/50 transition-all flex items-center justify-center gap-3 group">
              <MessageSquare className="w-5 h-5 group-hover:text-agency-primary transition-colors" />
              Chatear por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
