import { motion } from 'framer-motion';
import { Users, UserCheck, Activity, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

export default function DashboardPanel() {
  return (
    <section id="panel" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Marco del panel */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Panel de Control Condominio
          </h2>
          <p className="text-lg text-gray-500 mb-2">
            Condominio Los Ciruelos - Huechuraba
          </p>
          <p className="text-sm text-gray-400 mb-3">
            Monitoreo en tiempo real
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">En línea</span>
          </div>
        </motion.div>

        {/* Tarjetas principales */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-50 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Total de Accesos Hoy</p>
                <h3 className="text-5xl font-bold text-gray-900 mb-2">273</h3>
                <p className="text-gray-500 text-sm">Residentes y visitas</p>
              </div>
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Visitas Activas</p>
                <h3 className="text-5xl font-bold text-gray-900 mb-2">15</h3>
                <p className="text-green-600 text-sm font-medium">+3 vs ayer</p>
              </div>
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tarjetas de estado */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">5/6</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Dispositivos Instalados</p>
            <p className="text-gray-400 text-xs mt-1">1 offline</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">3</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Intentos Fallidos</p>
            <p className="text-gray-400 text-xs mt-1">Última hora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">0</span>
            </div>
            <p className="text-gray-600 text-sm font-medium">Seguridad</p>
            <p className="text-gray-400 text-xs mt-1">0 alertas</p>
          </motion.div>
        </div>

        {/* Actividad Reciente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Ingreso de residente</p>
                <p className="text-xs text-gray-500">Depto 305 - Hace 2 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Visita autorizada</p>
                <p className="text-xs text-gray-500">Depto 102 - Hace 5 minutos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Encomiendas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">Encomiendas Hoy</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-500 mt-1">8 entregadas, 4 pendientes</p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
