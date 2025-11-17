import { motion } from 'framer-motion';
import { Shield, QrCode, Package, Users, Clock, Bell, Camera, Database } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Control de Acceso Seguro',
      description: 'Sistema de autenticación multinivel para residentes, concerjes y administradores con permisos personalizados.'
    },
    {
      icon: QrCode,
      title: 'Visitas por Código QR',
      description: 'Genera códigos QR únicos para cada visita, permitiendo un ingreso rápido y seguro sin necesidad de registros manuales.'
    },
    {
      icon: Package,
      title: 'Gestión de Encomiendas',
      description: 'Registra y controla todas las encomiendas recibidas, con notificaciones automáticas a los residentes.'
    },
    {
      icon: Users,
      title: 'Gestión de Residentes',
      description: 'Base de datos completa de residentes con información de contacto, vehículos y estado de cuenta actualizado.'
    },
    {
      icon: Clock,
      title: 'Registro en Tiempo Real',
      description: 'Monitorea todos los ingresos y salidas en tiempo real con historial completo de accesos.'
    },
    {
      icon: Bell,
      title: 'Notificaciones Automáticas',
      description: 'Alertas instantáneas por correo para visitas, encomiendas y eventos importantes.'
    },
    {
      icon: Camera,
      title: 'Integración con dispositivos',
      description: 'Compatible con sistemas existentes para mayor seguridad y respaldo'
    },
    {
      icon: Database,
      title: 'Reportes y Estadísticas',
      description: 'Genera reportes detallados de actividad, visitas, encomiendas y análisis de patrones de acceso.'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partner en la seguridad de tu comunidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Cómo te apoyamos en el control y seguridad de tu comunidad?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
