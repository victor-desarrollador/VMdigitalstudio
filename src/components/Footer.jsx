import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import logoSecondary from '../image/logo secundario.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Navigation links
    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/planes', label: 'Servicios' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/nosotros', label: 'Sobre Nosotros' },
        { path: '/contacto', label: 'Contacto' },
    ];

    // Services list - Enfoque Corporativo y Premium
    const services = [
        'Desarrollo Web Full-Stack',
        'Sistemas y Software a Medida',
        'Automatización de Procesos',
        'Optimización SEO y Rendimiento',
    ];

    return (
        <footer className="bg-[#1E1E1E] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* COLUMN 1 - BRAND */}
                        <div className="space-y-5">
                            <Link to="/" className="inline-block group" aria-label="VM Digital Studio">
                                <div className="bg-white/95 rounded-2xl px-4 py-3 inline-block group-hover:bg-white transition-colors duration-300 shadow-lg">
                                    <img
                                        src={logoSecondary}
                                        alt="VM Digital Studio"
                                        className="h-14 w-auto object-contain"
                                    />
                                </div>
                            </Link>

                            <div className="w-16 h-0.5 bg-gradient-to-r from-[#B11226] to-[#8F0E1E]" />

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Estudio de ingeniería de software especializado en el desarrollo de plataformas web de alta velocidad y automatización inteligente para empresas.
                            </p>
                        </div>

                        {/* COLUMN 2 - NAVEGACIÓN */}
                        <div>
                            <h3 className="font-bold text-white text-lg mb-4">
                                Enlaces
                            </h3>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-[#B11226] transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 3 - SERVICIOS */}
                        <div>
                            <h3 className="font-bold text-white text-lg mb-4">
                                Servicios
                            </h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link 
                                            to="/planes" 
                                            className="text-gray-400 hover:text-[#B11226] transition-colors duration-300 text-sm"
                                        >
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 4 - CONTACTO */}
                        <div>
                            <h3 className="font-bold text-white text-lg mb-4">
                                Contacto
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="mailto:contacto@vmdigitalstudio.com"
                                        className="flex items-center gap-3 text-gray-400 hover:text-[#B11226] transition-colors duration-300 text-sm group"
                                    >
                                        <Mail className="w-5 h-5 flex-shrink-0 text-[#B11226] group-hover:scale-110 transition-transform duration-300" />
                                        <span className="truncate">contacto@vm-digital-studio.com</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://wa.me/5493813475776"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-[#B11226] transition-colors duration-300 text-sm group"
                                    >
                                        <Phone className="w-5 h-5 flex-shrink-0 text-[#B11226] group-hover:scale-110 transition-transform duration-300" />
                                        <span>WhatsApp Corporativo</span>
                                    </a>
                                </li>

                                <li className="flex items-center gap-3 text-gray-400 text-sm">
                                    <MapPin className="w-5 h-5 flex-shrink-0 text-[#B11226]" />
                                    <span>Argentina · Soluciones Globales</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* BOTTOM SECTION - Sub-footer */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Left - Copyright & Legal */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} VM Digital Studio. Todos los derechos reservados.
                            </p>
                            <span className="hidden sm:inline text-white/20">|</span>
                            <div className="flex gap-4 text-xs text-gray-500">
                                <Link to="/privacidad" className="hover:text-[#B11226] transition-colors">Privacidad</Link>
                                <Link to="/terminos" className="hover:text-[#B11226] transition-colors">Términos</Link>
                            </div>
                        </div>

                        {/* Right - Tagline & Social */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p className="text-gray-500 text-xs text-center md:text-right">
                                Desarrollado con tecnología moderna y arquitectura escalable.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#B11226] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#B11226] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
