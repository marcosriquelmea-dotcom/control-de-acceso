import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'PLAN INICIA',
      price: '4 UF',
      period: '+ IVA/mes',
      capacity: 'Hasta 800 residentes',
      features: [
        '1 Control de Acceso',
        'Módulo Visita Conserje',
        'Control de acceso residentes por Huella, Tarjeta y Reconocimiento Facial',
        'Módulo Web para residentes',
        'Módulo Panel de control para conserjería y administradores',
        'Módulo Control de Encomiendas',
        'Soportes Presencial, remoto y telefónico'
      ],
      buttonText: 'Comenzar Prueba',
      recommended: false
    },
    {
      name: 'PLAN INTERMEDIO',
      price: '7,1 UF',
      period: '+ IVA/mes',
      capacity: 'Hasta 1600 residentes',
      features: [
        '2 Controles de Acceso',
        'Módulo Visitas QR',
        'Módulo Visita Conserje',
        'Control de acceso residentes por Huella, Tarjeta y Reconocimiento Facial',
        'Módulo Web para residentes',
        'Módulo Panel de control para conserjería y administradores',
        'Módulo Control de Encomiendas',
        'Soportes Presencial, remoto y telefónico'
      ],
      buttonText: 'Comenzar Prueba',
      recommended: true
    },
    {
      name: 'PLAN PRO',
      price: '20 UF',
      period: '+ IVA/mes',
      capacity: 'Control de Acceso más Mantención integral de Condominios',
      features: [
        'Usuarios ilimitados',
        'Todos los módulos de VISION',
        '2 controles de acceso',
        'Soporte y Mantención sistema de cámaras CCTV',
        'Soporte y Mantención sistema control de acceso peatonal y vehicular',
        'Soporte y Mantención central de alarma',
        'Soporte y Mantención Citofonía',
        'Soporte y Mantención luminaria',
        'Soporte y Mantención Cerco Eléctrico',
        'Soportes Presencial, remoto y telefónico'
      ],
      buttonText: 'Contactar Ventas',
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes de Contratación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.recommended ? 'ring-2 ring-blue-600 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-600 text-white text-center py-2 px-4 flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold text-sm">Recomendado</span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.capacity}</p>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-6 ${
                    plan.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿Necesitas un plan personalizado?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;