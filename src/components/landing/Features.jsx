import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Code2, LineChart } from 'lucide-react';

const content = [
  {
    icon: Layout,
    title: "Bespoke UI/UX",
    desc: "Diseños únicos y milimétricos creados para destacar tu marca del resto con glassmorphism y detalles premium."
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimizaciones extremas para cargas instantáneas, transiciones fluidas y una experiencia impecable."
  },
  {
    icon: Code2,
    title: "Creative Engineering",
    desc: "Desarrollo moderno con tecnologías de punta para un código limpio, escalable y mantenible."
  },
  {
    icon: LineChart,
    title: "Strategic Growth",
    desc: "Enfoque en conversión y retención para impulsar el crecimiento de tu startup o marca."
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-agency-bg relative font-jakarta">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Excelencia Técnica y Visual
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Soluciones robustas diseñadas con una estética superior. La combinación perfecta entre forma y función.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-agency-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-agency-primary/0 to-agency-primary/0 group-hover:from-agency-primary/5 group-hover:to-transparent rounded-3xl transition-all duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-agency-primary/50 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                  <Icon className="w-6 h-6 text-agency-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
