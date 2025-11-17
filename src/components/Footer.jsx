import { Shield, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">VISSION IA</h3>
                <p className="text-xs text-gray-400">Control de Acceso Inteligente</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sistema completo de control de acceso para condominios con tecnología de inteligencia artificial. Gestión de residentes, visitas por QR y encomiendas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition"
                >
                  Características
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>+56 9 4563 7999</li>
              <li>+56 9 3402 9500</li>
              <li className="pt-2">contacto@visiion.cl</li>
              <li>soporte@visiion.cl</li>
              <li className="pt-2 text-gray-400">
                Lunes a Sábado<br />
                9:00 - 19:00 Hrs
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VISSION IA. Todos los derechos reservados.</p>
          <p className="mt-2">Control de Acceso Inteligente para Condominios en Chile</p>
        </div>
      </div>
    </footer>
  );
}
