import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491170964243?text=Hola!%20Quiero%20más%20información%20sobre%20FoodFlow', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                🚀 Listo en 7 días
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Más pedidos,
              <span className="block text-yellow-300">sin comisiones</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Tu propia app + chatbot WhatsApp que atiende 24/7 y toma pedidos automáticamente. 
              <span className="font-semibold text-white">Cero comisiones de delivery.</span>
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">Tu propia app</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">Chatbot 24/7 WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">Sin comisiones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <span className="text-green-100">Desde $149.000/mes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg hover:scale-105 hover:shadow-2xl group"
              >
                <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
                Contactar por WhatsApp
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-green-200 text-sm mb-2">Más de 50 restaurantes ya aumentaron sus ventas</p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                ))}
                <span className="text-green-200 text-sm ml-2">Setup garantizado en 7 días</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Mockup */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 h-8 rounded-t-2xl flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-96 bg-gradient-to-b from-gray-50 to-white">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-gray-900">Pizzería Don Carlos</h3>
                      <p className="text-sm text-gray-600">¡Pedí online sin comisiones!</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm border">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Pizza Margherita</span>
                          <span className="text-green-600 font-bold">$8.500</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Empanadas x12</span>
                          <span className="text-green-600 font-bold">$6.200</span>
                        </div>
                      </div>
                      <div className="bg-green-600 text-white rounded-lg p-3 text-center font-semibold">
                        Pedir por WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg">
                <span className="text-sm font-bold">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;