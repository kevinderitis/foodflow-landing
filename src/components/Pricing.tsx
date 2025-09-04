import React from 'react';
import { Check, Star, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$149.000",
      period: "/mes",
      description: "Perfecto para empezar a automatizar",
      features: [
        "App con tu menú digital",
        "Botón WhatsApp integrado", 
        "Diseño personalizado",
        "Setup en 7 días",
        "Backoffice para gestión de pedidos"
      ],
      popular: false,
      cta: "Empezar con Starter"
    },
    {
      name: "Pro",
      price: "$299.000", 
      period: "/mes",
      description: "Para restaurantes que quieren más ventas",
      features: [
        "Todo lo de Starter +",
        "Chatbot con IA integrada",
        "Resolución de problemas con IA",
        "Gestión automatizada con IA"
      ],
      popular: true,
      cta: "Elegir Pro"
    },
    {
      name: "Growth",
      price: "$499.000",
      period: "/mes", 
      description: "Para cadenas y growth avanzado",
      features: [
        "Todo lo de Pro +",
        "Integración con pasarela de pagos",
        "Seguimiento de pedido mediante app",
        "Campañas de marketing automatizadas"
      ],
      popular: false,
      cta: "Potenciar con Growth"
    }
  ];

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Hola! Quiero la demo del paquete ${packageName} de FoodFlow`;
    window.open(`https://wa.me/5491170964243?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Elegí el plan que mejor se adapte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Todos los planes incluyen setup completo, personalización y soporte. Sin costos ocultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Más Elegido
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      pkg.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🛡️ Garantía de satisfacción</h3>
            <p className="text-blue-100 text-lg">
              Si no estás conforme con los resultados, 
              <span className="font-semibold text-white"> trabajamos hasta que funcione perfecto.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;