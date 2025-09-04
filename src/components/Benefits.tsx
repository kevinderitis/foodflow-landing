import React from 'react';
import { Smartphone, Bot, DollarSign, Clock, CheckCircle, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Tu propia App",
      description: "Los clientes la usan como una app normal, sin descargar nada. Funciona en cualquier celular.",
      features: ["Se instala fácil", "Funciona offline", "Notificaciones push"]
    },
    {
      icon: Bot,
      title: "Chatbot WhatsApp 24/7",
      description: "Responde automáticamente, toma pedidos completos y deriva solo lo importante a vos.",
      features: ["Respuesta en segundos", "Toma pedidos completos", "FAQ automática"]
    },
    {
      icon: DollarSign,
      title: "Sin comisiones",
      description: "Los pedidos van directo a vos. Nunca más pagues 20-30% a apps de delivery.",
      features: ["100% de la venta es tuya", "Tus precios", "Control total"]
    },
    {
      icon: Clock,
      title: "Listo en 7 días",
      description: "Setup completo, personalizado con tu marca y funcionando en una semana.",
      features: ["Setup garantizado", "Tu diseño", "Capacitación incluida"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ La Solución
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tu restaurante, disponible 24/7
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dejá de perder pedidos y de pagar comisiones. Con FoodFlow, tus clientes piden cuando quieren y vos te quedás con todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-green-100"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
              
              <div className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results Preview */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Resultados reales de nuestros clientes</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">+47%</div>
                <p className="text-green-100">Más pedidos promedio</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">0%</div>
                <p className="text-green-100">Comisiones pagadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <p className="text-green-100">Atención automatizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;