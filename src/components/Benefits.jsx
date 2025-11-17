import { motion } from 'framer-motion';
import { TrendingUp, Lock, Zap, DollarSign } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Lock,
      title: 'Mayor Seguridad',
      description: 'Reduce incidentes de seguridad en un 85% con control de acceso inteligente y registro completo de visitantes.',
      stat: '85%',
      statLabel: 'Menos Incidentes'
    },
    {
      icon: Zap,
      title: 'Ahorro de Tiempo',
      description: 'Automatiza procesos manuales y reduce el tiempo de registro de visitas de 5 minutos a solo 30 segundos.',
      stat: '90%',
      statLabel: 'Más Rápido'
    },
    {
      icon: DollarSign,
      title: 'Software en la Nube Todo en Uno',
      description: 'Solución completa integrada que combina todas las funcionalidades de seguridad en una sola plataforma.',
      stat: '100%',
      statLabel: 'Unificado'
    },
    {
      icon: TrendingUp,
      title: 'Mejor Experiencia',
      description: 'Aumenta la satisfacción de residentes con servicios modernos y eficientes. 95% de aprobación.',
      stat: '95%',
      statLabel: 'Satisfacción'
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué implementar VISIION en tu comunidad?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales que marcan la diferencia en la gestión de tu condominio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="flex items-end space-x-2">
                      <span className="text-4xl font-bold text-blue-600">
                        {benefit.stat}
                      </span>
                      <span className="text-sm font-medium text-gray-500 pb-1">
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu condominio?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Implementa VISIION IA y sube el nivel de seguridad de tu comunidd
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Solicitar Demo Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
