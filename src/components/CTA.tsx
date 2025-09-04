import React from 'react';
import { MessageCircle, Clock, Shield, Zap } from 'lucide-react';

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491170964243?text=Hola!%20Quiero%20más%20información%20sobre%20FoodFlow', '_blank');
  };

  const urgencyPoints = [
    {
      icon: Clock,
      text: "Setup en solo 7 días"
    },
    {
      icon: Shield, 
      text: "Primera semana gratis"
    },
    {
      icon: Zap,
      text: "Resultados desde día 1"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para tener más pedidos
            <span className="block text-yellow-300">y quedarte con todo?</span>
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Más de 50 restaurantes ya están ganando más dinero con FoodFlow. 
            <span className="font-semibold text-white">Es tu turno.</span>
          </p>
        </div>

        {/* Urgency Points */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {urgencyPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-green-200">
              <point.icon className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Main CTAs */}
        <div className="flex justify-center items-center mb-12">
          <button 
            onClick={handleWhatsAppClick}
            className="group bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 font-bold text-lg hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
            <div className="text-left">
              <div>Contactar por WhatsApp</div>
              <div className="text-sm text-green-200 font-normal">Respuesta inmediata</div>
            </div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-green-200 mb-4">Contactanos por WhatsApp:</p>
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <p className="font-semibold text-white mb-2">WhatsApp</p>
              <p className="text-sm text-green-200">Te respondemos al instante y resolvemos todas tus dudas sobre FoodFlow</p>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="mt-12 bg-green-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="font-bold text-lg mb-2">⚡ Empezá hoy mismo</p>
          <p className="text-sm">
            Setup completo en 7 días. Tu restaurante funcionando 24/7 sin comisiones. 
            <span className="font-semibold">Contactanos ahora.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;