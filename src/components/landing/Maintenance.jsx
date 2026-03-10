import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Clock, Wrench } from 'lucide-react';

const Maintenance = () => {
  return (
    <section className="py-32 bg-[#050505] relative font-jakarta border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-agency-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agency-secondary/10 border border-agency-secondary/30 text-agency-primary shadow-[0_0_15px_rgba(112,0,255,0.3)] text-xs font-semibold tracking-wider uppercase mb-8">
              <ShieldCheck className="w-4 h-4" /> Pilar de Negocio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Mantenimiento Web <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-primary to-agency-secondary">Exclusivo</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              Tu tranquilidad es nuestra prioridad. Nos encargamos de que tu plataforma esté siempre actualizada, segura y optimizada, para que te enfoques únicamente en escalar tu marca.
            </p>

            <ul className="space-y-6">
              {[
                { icon: ShieldCheck, text: "Monitoreo de seguridad 24/7 y respaldos continuos" },
                { icon: Clock, text: "Soporte prioritario y tiempos de resolución mínimos" },
                { icon: Server, text: "Optimización extrema de servidores y base de datos" },
                { icon: Wrench, text: "Actualizaciones proactivas de núcleo y dependencias" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-agency-primary/50 group-hover:bg-agency-primary/10 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-agency-primary" />
                  </div>
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-agency-secondary to-agency-primary rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="relative bg-[#0A0A0A] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pb-10 border-b border-white/5">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Soporte Continuo</h3>
                  <p className="text-slate-400 text-sm font-light">Ecosistema técnico asegurado</p>
                </div>
                <div className="sm:text-right">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-agency-primary to-agency-secondary">99.9%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-1">Uptime Garantizado</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5">
                  <span className="text-slate-200 font-medium">Auditoría Técnica y UX</span>
                  <div className="w-8 h-8 rounded-full bg-agency-secondary/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-agency-primary" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5">
                  <span className="text-slate-200 font-medium">Reportes de Rendimiento</span>
                  <div className="w-8 h-8 rounded-full bg-agency-primary/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-agency-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Maintenance;
