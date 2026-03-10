import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 font-jakarta pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-max">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agency-primary to-agency-secondary flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                V
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-agency-primary transition-colors">
                M Studio
              </span>
            </Link>
            <p className="text-slate-400 font-light max-w-sm leading-relaxed">
              Elevamos la presencia digital de marcas y startups con diseño milimétrico y tecnología de vanguardia.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-agency-primary hover:border-agency-primary/50 hover:bg-agency-primary/10 transition-all hover:scale-110">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Compañía</h4>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Portfolio', 'Planes'].map((link, idx) => (
                <li key={idx}>
                  <Link to={link === 'Inicio' ? '/' : `/${link.toLowerCase()}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hola@vmstudio.com" className="flex items-center gap-3 text-slate-400 hover:text-white hover:translate-x-1 transition-all font-light">
                  <Mail className="w-4 h-4" /> 
                  hola@vmstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 font-light cursor-default">
                <MapPin className="w-4 h-4 flex-shrink-0 text-agency-primary" /> 
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-light uppercase tracking-[0.1em]">
            &copy; {new Date().getFullYear()} VM Digital Studio.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-light uppercase tracking-[0.1em]">
            <Link to="#" className="hover:text-agency-primary transition-colors">Términos</Link>
            <Link to="#" className="hover:text-agency-primary transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
