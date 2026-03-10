import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Consulta', desc: 'Analizamos tus objetivos y requerimientos para definir la estrategia.' },
  { num: '02', title: 'Estrategia', desc: 'Arquitectura y experiencia de usuario (UX/UI) a medida.' },
  { num: '03', title: 'Desarrollo', desc: 'Código limpio, animaciones fluidas y performance.' },
  { num: '04', title: 'Lanzamiento', desc: 'Despliegue, testeos y acompañamiento post-lanzamiento.' }
];

const Process = () => {
  return (
    <section className="py-32 bg-[#050505] relative font-jakarta border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Metodología <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-secondary to-agency-primary">Precisa</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Un proceso iterativo y colaborativo diseñado para garantizar resultados excepcionales desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-agency-primary/0 via-agency-primary/50 to-agency-secondary/0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-[88px] h-[88px] rounded-full bg-agency-bg border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-agency-primary/50 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)] transition-all duration-500">
                 <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-agency-primary/10 transition-colors">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-agency-primary to-white tracking-widest pl-1">{step.num}</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{step.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[220px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
