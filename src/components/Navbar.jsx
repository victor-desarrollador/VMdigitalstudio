import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoNavbar from '../image/logo secuntario.jpeg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Navigation links
    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/planes', label: 'Servicios' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/nosotros', label: 'Sobre Nosotros' },
        { path: '/contacto', label: 'Contacto' },
    ];

    // Detect scroll for sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Check if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled
                    ? 'shadow-lg border-b border-[#E5E7EB]/50 backdrop-blur-sm bg-white/95'
                    : 'border-b border-[#E5E7EB]'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-18">

                        {/* LEFT - Logo */}
                        <Link
                            to="/"
                            className="flex items-center py-3 group"
                            aria-label="VM Digital Studio - Inicio"
                        >
                            <img
                                src={logoNavbar}
                                alt="VM Digital Studio"
                                className="h-16 w-auto max-w-[220px] object-contain group-hover:opacity-80 transition-opacity duration-300"
                            />
                        </Link>

                        {/* CENTER - Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="relative group"
                                >
                                    <span
                                        className={`font-medium transition-colors duration-300 ${isActive(link.path)
                                            ? 'text-[#B11226]'
                                            : 'text-[#6B7280] group-hover:text-[#B11226]'
                                            }`}
                                    >
                                        {link.label}
                                    </span>

                                    {/* Animated underline */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#B11226] to-[#8F0E1E] transition-all duration-300 ${isActive(link.path)
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* RIGHT - CTA Button (Desktop) */}
                        <div className="hidden lg:flex items-center">
                            <Link
                                to="/contacto"
                                className="bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Solicitar Consulta
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#1E1E1E] hover:bg-[#F8F9FA] rounded-lg transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Slide-in */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">

                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                        <Link
                            to="/"
                            className="inline-flex items-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="VM Digital Studio"
                        >
                            <img
                                src={logoNavbar}
                                alt="VM Digital Studio"
                                className="h-9 w-auto object-contain"
                            />
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-[#1E1E1E] hover:bg-[#F8F9FA] rounded-lg transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white shadow-md'
                                        : 'text-[#6B7280] hover:bg-[#F8F9FA] hover:text-[#B11226]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu CTA */}
                    <div className="p-6 border-t border-[#E5E7EB]">
                        <Link
                            to="/contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full bg-gradient-to-r from-[#B11226] to-[#8F0E1E] text-white px-6 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Solicitar Consulta
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;
