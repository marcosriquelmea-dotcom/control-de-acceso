import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    condominio: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://ngdyjulnpgpyntljakmz.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Condominio: ${formData.condominio}\n\n${formData.message}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', condominio: '', message: '' });
      } else {
        setError('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfonos',
      details: ['+56 9 4563 7999', '+56 9 3402 9500'],
      action: 'tel:+56934029500'
    },
    {
      icon: Mail,
      title: 'Correos Electrónicos',
      details: ['contacto@visiion.cl', 'soporte@visiion.cl'],
      action: 'mailto:contacto@visiion.cl'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      details: ['Lunes a Sábado', '9:00 - 19:00 Hrs'],
      action: null
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Los Militares 5620, Oficina 1217', 'Las Condes, Chile'],
      action: null
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte a implementar el mejor sistema de control de acceso para tu condominio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.action ? (
                  <a href={info.action} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Solicita una Demo Gratuita
            </h3>
            <p className="text-blue-100 text-center mb-8">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {success && (
                <div className="md:col-span-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              
              {error && (
                <div className="md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-white font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="correo@ejemplo.cl"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Nombre del Condominio
                </label>
                <input
                  type="text"
                  name="condominio"
                  value={formData.condominio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Condominio Central"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  placeholder="Cuéntanos sobre tu condominio y qué necesitas..."
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">¿Prefieres contactarnos directamente por WhatsApp?</p>
          <a
            href="https://wa.me/56934029500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition font-semibold shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chatear por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
