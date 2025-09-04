import React, { useState } from 'react';
import { Play, Smartphone, MessageCircle, CheckCircle, Zap } from 'lucide-react';

const Demo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const demoSteps = [
    {
      step: "1",
      title: "Cliente ve tu menú",
      description: "En tu app, sin descargar nada"
    },
    {
      step: "2", 
      title: "Hace el pedido completo",
      description: "Selecciona productos, cantidades y datos"
    },
    {
      step: "3",
      title: "Chatbot toma el pedido",
      description: "Por WhatsApp, automáticamente 24/7"
    },
    {
      step: "4",
      title: "Vos recibís todo listo",
      description: "Pedido completo para preparar y entregar"
    }
  ];

  const handleVideoPlay = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Así funciona FoodFlow
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde que el cliente ve tu menú hasta que recibís el pedido completo, todo automático
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">El proceso es súper simple:</h3>
              <p className="text-gray-300">Tu cliente hace todo desde WhatsApp, vos recibís el pedido listo</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {demoSteps.map((step, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-white group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="font-bold text-white">Resultado:</span>
              </div>
              <p className="text-green-200">
                Más pedidos, respuesta inmediata, sin comisiones y todo automatizado. 
                <span className="font-semibold text-white">Tu restaurante nunca cierra.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;