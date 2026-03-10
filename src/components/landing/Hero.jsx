import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-agency-bg overflow-hidden font-jakarta pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-agency-primary/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-agency-secondary/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 mt-10">
            <span className="w-2 h-2 rounded-full bg-agency-primary animate-pulse shadow-[0_0_10px_#00F2FF]" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">Agencia de Diseño y Desarrollo Web</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
            Beyond Code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-primary to-agency-secondary pb-2 inline-block">
              Construimos legados digitales.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mt-6">
            Creamos Landing Pages, E-commerce y Mantenimiento Web de alto impacto. Elevamos tu presencia digital con diseño y tecnología de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/contacto" className="group relative px-8 py-4 bg-white text-agency-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#planes" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all">
              Ver Planes
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <span className="text-xs text-slate-400 tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
           className="w-[1px] h-12 bg-gradient-to-b from-agency-primary to-transparent"
        />
      </div>
    </section>
  );
};
export default Hero;
