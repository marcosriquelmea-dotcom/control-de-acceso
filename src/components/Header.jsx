import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">VISIION IA</h1>
            <p className="text-xs text-gray-600">Control de Acceso Inteligente</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Características
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Beneficios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contacto
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
              Solicitar Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition font-medium text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-700 hover:text-blue-600 transition font-medium text-left">
                Características
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-blue-600 transition font-medium text-left">
                Beneficios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition font-medium text-left">
                Contacto
              </button>
              <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
                Solicitar Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
